// https://www.d3indepth.com/hierarchies/
// https://observablehq.com/@d3/d3-hierarchy

export interface God {
    id: string;
}

export interface TreeGod extends God {
    children?: TreeGod[];
}
export interface RowGod1 extends God {
    parentId?: string;
}
export interface RowGod2 extends God {
    pid?: string;
}

// children은 d3에서 컨트롤하는 키
export const TREE_DATA: TreeGod = {
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
export const ROW_DATA_1: RowGod1[] = [
    { id: 'Chaos' },
    { id: 'Gaia', parentId: 'Chaos' },
    { id: 'Eros', parentId: 'Chaos' },
    { id: 'Erebus', parentId: 'Chaos' },
    { id: 'Tartarus', parentId: 'Chaos' },
    { id: 'Mountains', parentId: 'Gaia' },
    { id: 'Pontus', parentId: 'Gaia' },
    { id: 'Uranus', parentId: 'Gaia' },
];

export const ROW_DATA_2: RowGod2[] = [
    { id: 'Chaos' },
    { id: 'Gaia', pid: 'Chaos' },
    { id: 'Eros', pid: 'Chaos' },
    { id: 'Erebus', pid: 'Chaos' },
    { id: 'Tartarus', pid: 'Chaos' },
    { id: 'Mountains', pid: 'Gaia' },
    { id: 'Pontus', pid: 'Gaia' },
    { id: 'Uranus', pid: 'Gaia' },
];
