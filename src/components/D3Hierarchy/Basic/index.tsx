import type { HierarchyNode } from 'd3-hierarchy';
import type {
    TreeGod,
    RowGod1,
    RowGod2,
} from '@site/src/components/D3Hierarchy/data';
import { hierarchy, stratify } from 'd3-hierarchy';
import {
    TREE_DATA,
    ROW_DATA_1,
    ROW_DATA_2,
} from '@site/src/components/D3Hierarchy/data';
import React, { useCallback, useState, useMemo } from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Canvas from '@site/src/components/Canvas';

interface SimpleData {
    name: string;
}

const WIDTH = 400;
const HEIGHT = 400;

// const tree = hierarchy<TreeGod>(TREE_DATA);
// const rows1 = stratify<RowGod1>()(ROW_DATA_1);
const rows2 = stratify<RowGod2>().parentId((data) => data.pid)(ROW_DATA_2);

console.log(rows2);

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
