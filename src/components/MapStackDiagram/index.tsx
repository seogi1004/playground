import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type LayerId = 'route' | 'facility' | 'building' | 'base';
type Point = [number, number];

const SOURCES: { name: string; gives: string; layer: LayerId }[] = [
    { name: '브이월드', gives: '주소 → 좌표, 건물 외곽선·층수', layer: 'building' },
    { name: '건축물대장', gives: '건물 높이·지상 층수', layer: 'building' },
    { name: 'OpenStreetMap', gives: '학교·공원·역·도로·물가·숲', layer: 'facility' },
    { name: 'Valhalla', gives: 'OSM 길을 따른 도보 경로·시간', layer: 'route' },
];

const EVIDENCE = [
    { label: '직접 기록된 높이', sunlight: true },
    { label: '층수 × 일반 층고', sunlight: false },
    { label: '자료 없어 넣은 기본값', sunlight: false },
];

const LAYERS: { id: LayerId; name: string; detail: string }[] = [
    { id: 'route', name: '도보 경로', detail: 'Valhalla 경로 선' },
    { id: 'facility', name: '시설 모형·이름표', detail: 'OSM + 코드로 그린 도형' },
    { id: 'building', name: '입체 건물·일조 그림자', detail: 'MapLibre fill-extrusion' },
    { id: 'base', name: '어두운 배경 지도', detail: 'OpenFreeMap, 브라우저에서 직접 로드' },
];

const CX = 180;
const HALF_W = 66;
const HALF_H = 32;
const PLATE_Y: Record<LayerId, number> = { route: 66, facility: 146, building: 244, base: 336 };

function iso(u: number, v: number, y: number, height = 0): Point {
    return [CX + (u - v) * HALF_W, y + (u + v) * HALF_H - height];
}

function pts(points: Point[]) {
    return points.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
}

function rect(u0: number, v0: number, u1: number, v1: number, y: number, height = 0) {
    return pts([iso(u0, v0, y, height), iso(u1, v0, y, height), iso(u1, v1, y, height), iso(u0, v1, y, height)]);
}

function Plate({ layer, dashed }: { layer: LayerId; dashed?: boolean }) {
    return (
        <polygon
            className={clsx(styles.plate, styles[`plate_${layer}`], dashed && styles.plateDashed)}
            points={rect(-1, -1, 1, 1, PLATE_Y[layer])}
        />
    );
}

function Box({ u, v, du, dv, h, y }: { u: number; v: number; du: number; dv: number; h: number; y: number }) {
    const u1 = u + du;
    const v1 = v + dv;
    return (
        <g>
            <polygon
                className={styles.boxLeft}
                points={pts([iso(u, v1, y), iso(u1, v1, y), iso(u1, v1, y, h), iso(u, v1, y, h)])}
            />
            <polygon
                className={styles.boxRight}
                points={pts([iso(u1, v, y), iso(u1, v1, y), iso(u1, v1, y, h), iso(u1, v, y, h)])}
            />
            <polygon className={styles.boxTop} points={rect(u, v, u1, v1, y, h)} />
        </g>
    );
}

// 앞쪽 건물이 뒤쪽 건물을 가리도록 u+v 오름차순으로 둔다.
const BUILDINGS = [
    { u: -0.78, v: -0.72, du: 0.26, dv: 0.3, h: 58 },
    { u: -0.28, v: -0.82, du: 0.3, dv: 0.26, h: 42 },
    { u: 0.3, v: -0.8, du: 0.28, dv: 0.3, h: 68 },
    { u: -0.8, v: -0.14, du: 0.3, dv: 0.28, h: 36 },
    { u: -0.22, v: -0.24, du: 0.3, dv: 0.3, h: 74 },
    { u: 0.34, v: -0.2, du: 0.26, dv: 0.3, h: 46 },
    { u: -0.74, v: 0.44, du: 0.28, dv: 0.28, h: 50 },
    { u: -0.14, v: 0.4, du: 0.3, dv: 0.26, h: 32 },
    { u: 0.42, v: 0.38, du: 0.28, dv: 0.3, h: 56 },
];

const TREES: [number, number][] = [
    [-0.72, 0.1],
    [-0.5, 0.42],
    [-0.76, 0.56],
    [-0.36, 0.1],
];

function MapIllustration({ isDim }: { isDim: (layer: LayerId) => boolean }) {
    const layerClass = (layer: LayerId) => clsx(styles.layer, isDim(layer) && styles.dim);
    const routeY = PLATE_Y.route;
    const routePoints: Point[] = [
        iso(-0.72, 0.68, routeY),
        iso(-0.72, 0.1, routeY),
        iso(-0.1, 0.1, routeY),
        iso(-0.1, -0.42, routeY),
        iso(0.62, -0.42, routeY),
    ];
    const connectors: [number, number][] = [
        [-1, 1],
        [1, -1],
        [1, 1],
    ];

    return (
        <svg className={styles.illustration} viewBox="0 0 360 402" aria-hidden="true" focusable="false">
            {connectors.map(([u, v]) => {
                const [x, top] = iso(u, v, PLATE_Y.route);
                const [, bottom] = iso(u, v, PLATE_Y.base);
                return <line key={`${u}${v}`} className={styles.connector} x1={x} x2={x} y1={top} y2={bottom} />;
            })}

            <g className={layerClass('base')}>
                <Plate layer="base" />
                <polygon
                    className={styles.water}
                    points={pts([
                        iso(0.45, -1, PLATE_Y.base),
                        iso(1, -1, PLATE_Y.base),
                        iso(1, 0.05, PLATE_Y.base),
                        iso(0.68, -0.15, PLATE_Y.base),
                    ])}
                />
                {[-0.5, 0.15].map((v) => (
                    <polyline
                        key={v}
                        className={styles.road}
                        points={pts([iso(-1, v, PLATE_Y.base), iso(1, v, PLATE_Y.base)])}
                    />
                ))}
                {[-0.4, 0.3].map((u) => (
                    <polyline
                        key={u}
                        className={styles.road}
                        points={pts([iso(u, -1, PLATE_Y.base), iso(u, 1, PLATE_Y.base)])}
                    />
                ))}
            </g>

            <g className={layerClass('building')}>
                <Plate layer="building" />
                {BUILDINGS.map((b) => (
                    <polygon
                        key={`shadow-${b.u}${b.v}`}
                        className={styles.shadow}
                        points={pts([
                            iso(b.u, b.v + b.dv, PLATE_Y.building),
                            iso(b.u + b.du, b.v + b.dv, PLATE_Y.building),
                            iso(b.u + b.du - 0.3, b.v + b.dv + 0.2, PLATE_Y.building),
                            iso(b.u - 0.3, b.v + b.dv + 0.2, PLATE_Y.building),
                        ])}
                    />
                ))}
                {BUILDINGS.map((b) => (
                    <Box key={`${b.u}${b.v}`} {...b} h={b.h * 0.62} y={PLATE_Y.building} />
                ))}
            </g>

            <g className={layerClass('facility')}>
                <Plate layer="facility" dashed />
                <polygon className={styles.park} points={rect(-0.9, 0, -0.18, 0.8, PLATE_Y.facility)} />
                <polygon className={styles.field} points={rect(0.18, -0.74, 0.76, -0.22, PLATE_Y.facility)} />
                <polyline
                    className={styles.fieldLine}
                    points={pts([iso(0.47, -0.74, PLATE_Y.facility), iso(0.47, -0.22, PLATE_Y.facility)])}
                />
                {TREES.map(([u, v]) => {
                    const [x, y] = iso(u, v, PLATE_Y.facility);
                    return (
                        <g key={`${u}${v}`}>
                            <line className={styles.trunk} x1={x} x2={x} y1={y} y2={y - 6} />
                            <polygon className={styles.tree} points={pts([[x - 6, y - 5], [x + 6, y - 5], [x, y - 20]])} />
                        </g>
                    );
                })}
                <g>
                    <line className={styles.pinStem} x1={CX + 22} x2={CX + 22} y1={PLATE_Y.facility + 24} y2={PLATE_Y.facility + 2} />
                    <circle className={styles.pin} cx={CX + 22} cy={PLATE_Y.facility} r={6} />
                </g>
            </g>

            <g className={layerClass('route')}>
                <Plate layer="route" dashed />
                <polyline className={styles.routeHalo} points={pts(routePoints)} />
                <polyline className={styles.routeLine} points={pts(routePoints)} />
                <circle className={styles.routeStart} cx={routePoints[0][0]} cy={routePoints[0][1]} r={5} />
                <circle
                    className={styles.routeEnd}
                    cx={routePoints[routePoints.length - 1][0]}
                    cy={routePoints[routePoints.length - 1][1]}
                    r={6}
                />
            </g>
        </svg>
    );
}

export default function MapStackDiagram() {
    const [hovered, setHovered] = useState<LayerId | null>(null);
    const [pinned, setPinned] = useState<LayerId | null>(null);
    const active = hovered ?? pinned;
    const isDim = (layer: LayerId) => active !== null && active !== layer;

    const interactions = (layer: LayerId) => ({
        type: 'button' as const,
        'aria-pressed': pinned === layer,
        onPointerEnter: (event: React.PointerEvent) => {
            if (event.pointerType === 'mouse') setHovered(layer);
        },
        onPointerLeave: (event: React.PointerEvent) => {
            if (event.pointerType === 'mouse') setHovered(null);
        },
        onFocus: () => setHovered(layer),
        onBlur: () => setHovered(null),
        onClick: () => setPinned((current) => (current === layer ? null : layer)),
    });

    return (
        <figure
            className={styles.diagram}
            aria-label="공개 원천을 서버에서 단지별 지도 자료로 합치고, 브라우저에서 네 개의 층으로 겹쳐 그리는 구조"
        >
            <div className={styles.flow}>
                <section className={styles.stage}>
                    <h3 className={styles.stageTitle}>
                        <span className={styles.stageNo}>1</span>공개 원천
                    </h3>
                    <ul className={styles.sources}>
                        {SOURCES.map((source) => (
                            <li key={source.name}>
                                <button
                                    {...interactions(source.layer)}
                                    className={clsx(
                                        styles.row,
                                        styles[`tone_${source.layer}`],
                                        isDim(source.layer) && styles.rowDim,
                                    )}
                                >
                                    <span className={styles.swatch} />
                                    <span className={styles.rowText}>
                                        <strong>{source.name}</strong>
                                        <span>{source.gives}</span>
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className={clsx(styles.stage, styles.stageServer)}>
                    <h3 className={styles.stageTitle}>
                        <span className={styles.stageNo}>2</span>서버에서 합치기
                    </h3>
                    <p className={styles.serverLead}>단지 하나 = 지도 자료 하나</p>
                    <p className={styles.serverNote}>높이마다 “어디서 확인했는지”를 붙여 저장합니다.</p>
                    <div className={styles.evidenceHead}>
                        <span>높이 근거</span>
                        <span>일조 계산</span>
                    </div>
                    <ul className={styles.evidence}>
                        {EVIDENCE.map((item) => (
                            <li key={item.label}>
                                <span className={styles.evidenceLabel}>{item.label}</span>
                                <span className={clsx(styles.verdict, item.sunlight && styles.verdictYes)}>
                                    {item.sunlight ? '사용' : '제외'}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className={clsx(styles.stage, styles.stageBrowser)}>
                    <h3 className={styles.stageTitle}>
                        <span className={styles.stageNo}>3</span>브라우저에서 겹쳐 그리기
                    </h3>
                    <div className={styles.browserBody}>
                        <MapIllustration isDim={isDim} />
                        <ul className={styles.layers}>
                            {LAYERS.map((layer) => (
                                <li key={layer.id}>
                                    <button
                                        {...interactions(layer.id)}
                                        className={clsx(
                                            styles.row,
                                            styles.layerRow,
                                            styles[`tone_${layer.id}`],
                                            isDim(layer.id) && styles.rowDim,
                                        )}
                                    >
                                        <span className={styles.swatch} />
                                        <span className={styles.rowText}>
                                            <strong>{layer.name}</strong>
                                            <span>{layer.detail}</span>
                                        </span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </figure>
    );
}
