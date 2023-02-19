import React, { useCallback, useMemo, useState } from 'react';
import { Col, InputNumber, Row, Slider } from 'antd';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Canvas from '../../Canvas';
import { Boid } from './Boid';

const width = 640;
const height = 360;

export default function Default() {
    const isBrowser = useIsBrowser();
    const [count, setCount] = useState(100);
    const [align, setAlign] = useState(1);
    const [cohesion, setCohesion] = useState(1);
    const [separation, setSeparation] = useState(1);

    let flock = useMemo(() => {
        const list: Boid[] = [];
        for (let i = 0; i < count; i++) {
            list.push(new Boid(width, height));
        }
        return list;
    }, [isBrowser, count]);

    const draw = useCallback(
        (ctx: CanvasRenderingContext2D, _) => {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, width, height);

            for (let boid of flock) {
                boid.edges();
                boid.flock(flock, align, cohesion, separation);
                boid.update();
                boid.show(ctx);
            }
        },
        [isBrowser, count, align, cohesion, separation]
    );

    return (
        <>
            <h4>Count</h4>
            <Row>
                <Col span={12}>
                    <Slider
                        min={0}
                        max={2000}
                        step={100}
                        onChange={setCount}
                        value={typeof count === 'number' ? count : 100}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={0}
                        max={2000}
                        step={100}
                        style={{ margin: '0 16px' }}
                        value={count}
                        onChange={(value) => setCount(value)}
                    />
                </Col>
            </Row>
            <h4>Alignment</h4>
            <Row>
                <Col span={12}>
                    <Slider
                        min={0}
                        max={5}
                        step={0.1}
                        onChange={setAlign}
                        value={typeof align === 'number' ? align : 0}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={0}
                        max={5}
                        step={0.1}
                        style={{ margin: '0 16px' }}
                        value={align}
                        onChange={(value) => setAlign(value)}
                    />
                </Col>
            </Row>
            <h4>Cohesion</h4>
            <Row>
                <Col span={12}>
                    <Slider
                        min={0}
                        max={5}
                        step={0.1}
                        onChange={setCohesion}
                        value={typeof cohesion === 'number' ? cohesion : 0}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={0}
                        max={5}
                        step={0.1}
                        style={{ margin: '0 16px' }}
                        value={cohesion}
                        onChange={(value) => setCohesion(value)}
                    />
                </Col>
            </Row>
            <h4>Separation</h4>
            <Row>
                <Col span={12}>
                    <Slider
                        min={0}
                        max={5}
                        step={0.1}
                        onChange={setSeparation}
                        value={typeof separation === 'number' ? separation : 0}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={0}
                        max={5}
                        step={0.1}
                        style={{ margin: '0 16px' }}
                        value={separation}
                        onChange={(value) => setSeparation(value)}
                    />
                </Col>
            </Row>
            <Row style={{ marginTop: 32 }}>
                <Canvas
                    draw={draw}
                    width={width}
                    height={height}
                    interval={0}
                    ratio={isBrowser ? window.devicePixelRatio : 1}
                ></Canvas>
            </Row>
        </>
    );
}
