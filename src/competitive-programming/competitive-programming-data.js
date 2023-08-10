function createData(
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
) {
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
    solved,
  };
}

export const competitiveProgrammingEntities = [
  createData(
    1,
    "11. Container With Most Water",
    "https://leetcode.com/problems/container-with-most-water/",
    "Medium",
    ["Array"],
    ["Custom"],
    ["Water Container"],
    ["Two Pointer"],
    [],
    true
  ),
  createData(
    2,
    "57. Insert Interval",
    "https://leetcode.com/problems/insert-interval/",
    "Easy",
    ["Array", "List"],
    ["NA"],
    ["Water Container"],
    [],
    [],
    true
  ),
  createData(
    3,
    "1679. Max Number of K-Sum Pairs",
    "https://leetcode.com/problems/max-number-of-k-sum-pairs/",
    "Medium",
    ["Array", "HashMap"],
    ["NA"],
    ["Pairs of Element"],
    [],
    [],
    true
  ),
  createData(
    4,
    "797. All Paths From Source to Target",
    "https://leetcode.com/problems/all-paths-from-source-to-target/",
    "Medium",
    ["LinkedList", "AdjecentList"],
    ["NA"],
    ["Source to destination"],
    [],
    [],
    true
  ),
  createData(
    5,
    "1732. Find the Highest Altitude",
    "https://leetcode.com/problems/find-the-highest-altitude/",
    "Easy",
    ["Array"],
    ["Max of addition of from 0 to n-1 index in array"],
    [],
    [],
    [],
    true
  ),
  createData(
    6,
    "1466. Reorder Routes to Make All Paths Lead to the City Zero",
    "https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/",
    "Medium",
    ["HashMap", "Adjacent List"],
    ["Mirror graph(fake node case)"],
    [],
    [],
    [],
    true
  ),
  createData(
    7,
    "872. Leaf-Similar Trees",
    "https://leetcode.com/problems/leaf-similar-trees/",
    "Easy",
    ["HashMap", "Adjacent List"],
    ["Mirror graph(fake node case)"],
    [],
    [],
    [],
    true
  ),
  createData(
    8,
    "2300. Successful Pairs of Spells and Potions",
    "https://leetcode.com/problems/successful-pairs-of-spells-and-potions/",
    "Easy",
    ["Loop"],
    ["Binary Search", "Sort"],
    [],
    [],
    [],
    true
  ),
];
