
function createData(id, problem,
    link,
    difficulty,
    dataStructures,
    algorithms,
    scenarios,
    categories,
    companies,
    solved) {
    return {
        id,
        problem,
        link,
        difficulty,
        dataStructures,
        algorithms,
        scenarios,
        categories,
        companies,
        solved
    };
}

export const competitiveProgrammingEntities = [
    createData(
        1,
        '11. Container With Most Water',
        'https://leetcode.com/problems/container-with-most-water/',
        'Medium',
        ['Array'],
        ['Custom'],
        ['Water Container'],
        ['Two Pointer'],
        [],
        true),
    createData(
        2,
        '57. Insert Interval',
        'https://leetcode.com/problems/insert-interval/',
        'Easy',
        ['Array', 'List'],
        ['NA'],
        ['Water Container'],
        [],
        [],
        true),
    createData(
        3,
        '1679. Max Number of K-Sum Pairs',
        'https://leetcode.com/problems/max-number-of-k-sum-pairs/',
        'Medium',
        ['Array', "HashMap"],
        ['NA'],
        ['Pairs of Element'],
        [],
        [],
        true)
];
