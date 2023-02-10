import type { HierarchyNode } from 'd3-hierarchy';
import type { God } from '@site/src/components/D3Hierarchy/data';
import { hierarchy, stratify } from 'd3-hierarchy';
import { TREE_DATA } from '@site/src/components/D3Hierarchy/data';
import React, { useCallback, useState, useMemo } from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Canvas from '@site/src/components/Canvas';

interface SimpleData {
    name: string;
}

const WIDTH = 400;
const HEIGHT = 400;

const root = hierarchy<God>(TREE_DATA);

export default function Index() {
    const draw = useCallback((ctx: CanvasRenderingContext2D, _) => {}, []);

    return (
        <div>
            <Canvas
                draw={draw}
                width={WIDTH}
                height={HEIGHT}
                interval={0}
                ratio={useIsBrowser() ? window.devicePixelRatio : 1}
            ></Canvas>
        </div>
    );
}
