import type { HierarchyNode, HierarchyPointNode } from 'd3-hierarchy';
import type {
    TreeData,
    RowData1,
    RowData2,
} from '@site/src/components/D3Hierarchy/data';
import { hierarchy, stratify, tree } from 'd3-hierarchy';
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

const root1 = stratify<RowData1>()(ROW_DATA_1);
const root2 = stratify<RowData2>()
    .id((data) => data.id2)
    .parentId((data) => data.pid)(ROW_DATA_2);
console.log(root2);

// HierarchyNode<TreeData>를 리턴함
const root = hierarchy<TreeData>(TREE_DATA);
// console.log(root);

// root이 HierarchyPointNode<TreeData>로 변형됨
const treeLayout = tree().size([WIDTH, HEIGHT]);
treeLayout(root);
// console.log(root);

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
