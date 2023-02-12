import type { HierarchyPointNode, HierarchyPointLink } from 'd3-hierarchy';
import type { TreeData } from '@site/src/components/D3Hierarchy/data';
import { hierarchy, tree } from 'd3-hierarchy';
import React, { useCallback } from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Canvas from '@site/src/components/Canvas';
import { TREE_DATA } from '@site/src/components/D3Hierarchy/data';

const WIDTH = 800;
const HEIGHT = 300;

// const root1 = stratify<RowData1>()(ROW_DATA_1);
// const root2 = stratify<RowData2>()
//     .id((data) => data.id2)
//     .parentId((data) => data.pid)(ROW_DATA_2);

// const chaos = root2;
// const gaia = chaos.children[0];
// const pontus = chaos.children[0].children[1];
// const tartarus = chaos.children[3];

// HierarchyNode<TreeData>를 리턴함
const root = hierarchy<TreeData>(TREE_DATA);
// console.log(root);

// root이 HierarchyPointNode<TreeData>로 변형됨
const treeLayout = tree().size([HEIGHT, WIDTH]);
treeLayout(root);

const nodes = root.descendants() as HierarchyPointNode<TreeData>[];
const links = root.links() as HierarchyPointLink<TreeData>[];

export default function Index() {
    const isBrowser = useIsBrowser();

    const draw = useCallback(
        (ctx: CanvasRenderingContext2D, _) => {
            ctx.fillStyle = '#fff';
            ctx.fillRect(0, 0, WIDTH, HEIGHT);

            nodes.forEach((node) => {
                ctx.fillStyle = '#000';
                ctx.beginPath();
                ctx.arc(node.y, node.x, 5, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
            });

            links.forEach((link) => {
                ctx.strokeStyle = '#000';
                ctx.beginPath();
                ctx.moveTo(link.source.y, link.source.x);
                ctx.lineTo(link.target.y, link.target.x);
                ctx.stroke();
                ctx.closePath();
            });
        },
        [isBrowser]
    );

    return (
        <div>
            <Canvas
                draw={draw}
                width={WIDTH}
                height={HEIGHT}
                interval={0}
                ratio={isBrowser ? window.devicePixelRatio : 1}
            ></Canvas>
        </div>
    );
}
