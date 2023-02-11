// https://www.d3indepth.com/hierarchies/
// https://observablehq.com/@d3/d3-hierarchy

export interface TreeData {
    id: string;
    children?: TreeData[];
}
export interface RowData1 {
    id: string;
    parentId?: string;
}
export interface RowData2 {
    id2: string;
    pid?: string;
}

// children은 d3에서 컨트롤하는 키
export const TREE_DATA: TreeData = {
    id: 'Chaos',
    children: [
        {
            id: 'Gaia',
            children: [
                {
                    id: 'Mountains',
                },
                {
                    id: 'Pontus',
                },
                {
                    id: 'Uranus',
                },
            ],
        },
        {
            id: 'Eros',
        },
        {
            id: 'Erebus',
        },
        {
            id: 'Tartarus',
        },
    ],
};

// parentId는 d3에서 컨트롤하는 키
export const ROW_DATA_1: RowData1[] = [
    { id: 'Chaos' },
    { id: 'Gaia', parentId: 'Chaos' },
    { id: 'Eros', parentId: 'Chaos' },
    { id: 'Erebus', parentId: 'Chaos' },
    { id: 'Tartarus', parentId: 'Chaos' },
    { id: 'Mountains', parentId: 'Gaia' },
    { id: 'Pontus', parentId: 'Gaia' },
    { id: 'Uranus', parentId: 'Gaia' },
];

export const ROW_DATA_2: RowData2[] = [
    { id2: 'Chaos' },
    { id2: 'Gaia', pid: 'Chaos' },
    { id2: 'Eros', pid: 'Chaos' },
    { id2: 'Erebus', pid: 'Chaos' },
    { id2: 'Tartarus', pid: 'Chaos' },
    { id2: 'Mountains', pid: 'Gaia' },
    { id2: 'Pontus', pid: 'Gaia' },
    { id2: 'Uranus', pid: 'Gaia' },
];
