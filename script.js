// ===== DSA CHECKLIST DATA =====
const TOPICS = [
  {
    name: "Arrays",
    icon: "🧮",
    subtopics: [
      {
        label: "Medium",
        problems: [
          "Majority Element-I", "Leaders in an Array", "Rearrange array elements by sign",
          "Print the matrix in spiral manner", "Pascal's Triangle I", "Pascal's Triangle II",
          "Pascal's Triangle III", "Rotate matrix by 90 degrees", "Two Sum", "3 Sum", "4 Sum",
          "Sort an array of 0's 1's and 2's", "Kadane's Algorithm", "Next Permutation"
        ]
      },
      {
        label: "Hard",
        problems: [
          "Majority Element-II", "Find the repeating and missing number", "Count Inversions",
          "Reverse Pairs", "Maximum Product Subarray in an Array",
          "Merge two sorted arrays without extra space", "Longest Consecutive Sequence in an Array"
        ]
      },
      {
        label: "Hashing",
        problems: [
          "Longest subarray with sum K", "Count subarrays with given sum",
          "Count subarrays with given xor K"
        ]
      }
    ]
  },
  {
    name: "Binary Search",
    icon: "🔍",
    subtopics: [
      {
        label: "Fundamentals",
        problems: [
          "Search X in sorted array", "Lower Bound", "Upper Bound", "Search insert position",
          "Floor and Ceil in Sorted Array", "First and last occurrence",
          "Search in rotated sorted array-I", "Search in rotated sorted array-II",
          "Find minimum in Rotated Sorted Array", "Find out how many times the array is rotated",
          "Single element in sorted array", "Find square root of a number",
          "Find Nth root of a number"
        ]
      },
      {
        label: "Binary Search on Answers",
        problems: [
          "Find the smallest divisor", "Koko eating bananas",
          "Minimum days to make M bouquets", "Aggressive Cows", "Book Allocation Problem",
          "Find peak element", "Median of 2 sorted arrays", "Kth element of 2 sorted arrays",
          "Minimize Max Distance to Gas Station", "Split array - largest sum"
        ]
      },
      {
        label: "2D Matrix",
        problems: [
          "Find row with maximum 1's", "Search in a 2D matrix",
          "Search in 2D matrix - II", "Find Peak Element - II", "Matrix Median"
        ]
      }
    ]
  },
  {
    name: "Recursion & Backtracking",
    icon: "🔄",
    subtopics: [
      {
        label: "Single Recursion",
        problems: [
          "Pow(x,n)", "Generate Parentheses", "Power Set",
          "Check if there exists a subsequence with sum K",
          "Count all subsequences with sum K"
        ]
      },
      {
        label: "Backtracking",
        problems: [
          "Combination Sum", "Combination Sum II", "Subsets I", "Subsets II",
          "Combination Sum III", "Letter Combinations of a Phone Number",
          "Palindrome partitioning", "Word Search", "N Queen",
          "Rat in a Maze", "M Coloring Problem", "Sudoku Solver"
        ]
      }
    ]
  },
  {
    name: "Linked List",
    icon: "🔗",
    subtopics: [
      {
        label: "Single LL — Fundamentals",
        problems: [
          "Introduction to Singly LinkedList", "Traversal in Linked List",
          "Deletion in Linked List", "Insertion in Linked List",
          "Deletion of the head of LL", "Deletion of the tail of Linked List",
          "Deletion of the Kth element of Linked List", "Delete the element with value X",
          "Insertion at the head of Linked List", "Insertion at the tail of Linked List",
          "Insertion at the Kth position of Linked List", "Insertion before the value X in Linked List"
        ]
      },
      {
        label: "Doubly LL",
        problems: [
          "Deletion in Doubly LL", "Insertion in DLL",
          "Convert Array to Doubly Linked List", "Delete head of Doubly Linked List",
          "Delete Tail of Doubly Linked List", "Delete Kth Element of Doubly Linked List",
          "Removing given node in Doubly Linked List",
          "Insert node before head in Doubly Linked List",
          "Insert node before tail in Doubly Linked List",
          "Insert node before (kth node) in Doubly Linked List",
          "Insert before given node in Doubly Linked List"
        ]
      },
      {
        label: "Medium & Hard",
        problems: [
          "Add two numbers in Linked List", "Segregate odd and even nodes in Linked List",
          "Sort a Linked List of 0's 1's and 2's", "Remove Nth node from the back of the LL",
          "Reverse a LL", "Add one to a number represented by Linked List",
          "Find Middle of Linked List", "Delete the middle node in LL",
          "Check if LL is palindrome or not", "Find the intersection point of Y LL",
          "Detect a loop in Linked List", "Find the starting point in LL",
          "Length of loop in LL", "Reverse LL in group of given size K",
          "Rotate a Linked List", "Merge two Sorted Lists", "Flattening of LL",
          "Sort LL", "Clone a LL with random and next pointer",
          "Delete all occurrences of a key in DLL", "Remove duplicated from sorted DLL"
        ]
      }
    ]
  },
  {
    name: "Bit Manipulation",
    icon: "⚙️",
    subtopics: [
      {
        label: "Theory & Problems",
        problems: [
          "Introduction to Bits and Tricks", "Minimum Bit Flips to Convert Number",
          "Single Number - I", "Single Number - II", "Single Number - III",
          "Divide two numbers without multiplication and division",
          "Power Set Bit Manipulation", "XOR of numbers in a given range"
        ]
      }
    ]
  },
  {
    name: "Greedy",
    icon: "🎯",
    subtopics: [
      {
        label: "Easy",
        problems: [
          "Assign Cookies", "Lemonade Change", "Jump Game - I", "Shortest Job First",
          "Job sequencing Problem", "N meetings in one room"
        ]
      },
      {
        label: "Scheduling & Intervals",
        problems: [
          "Non-overlapping Intervals", "Insert Interval",
          "Minimum number of platforms required for a railway", "Valid Paranthesis Checker",
          "Candy", "Maximum Points You Can Obtain from Cards"
        ]
      }
    ]
  },
  {
    name: "Sliding Window & 2 Pointers",
    icon: "🪟",
    subtopics: [
      {
        label: "Medium",
        problems: [
          "Longest Substring Without Repeating Characters", "Max Consecutive Ones III",
          "Fruit Into Baskets", "Longest Substring With At Most K Distinct Characters",
          "Longest Repeating Character Replacement"
        ]
      },
      {
        label: "Hard",
        problems: [
          "Minimum Window Substring", "Number of Substrings Containing All Three Characters",
          "Binary Subarrays With Sum", "Count number of Nice subarrays"
        ]
      }
    ]
  },
  {
    name: "Stack & Queue",
    icon: "📚",
    subtopics: [
      {
        label: "Implementation",
        problems: [
          "Implement Stack using Arrays", "Implement Queue using Arrays",
          "Implement Stack using Queue", "Implement Queue using Stack",
          "Implement stack using Linkedlist", "Implement queue using Linkedlist"
        ]
      },
      {
        label: "Monotonic Stack",
        problems: [
          "Balanced Paranthesis", "Next Greater Element", "Next Greater Element - 2",
          "Asteroid Collision", "Sum of Subarray Minimums", "Sum of Subarray Ranges",
          "Remove K Digits", "Implement Min Stack", "Sliding Window Maximum",
          "Trapping Rainwater", "Largest rectangle in a histogram",
          "Maximum Rectangles", "Stock span problem"
        ]
      },
      {
        label: "FAQs",
        problems: ["Celebrity Problem", "LRU Cache", "LFU Cache"]
      }
    ]
  },
  {
    name: "Binary Trees",
    icon: "🌳",
    subtopics: [
      {
        label: "Theory & Traversal",
        problems: [
          "Introduction", "Inorder Traversal", "Preorder Traversal",
          "Postorder Traversal", "Level Order Traversal", "Pre, Post, Inorder in one traversal"
        ]
      },
      {
        label: "Medium FAQs",
        problems: [
          "Maximum Depth in BT", "Check if two trees are identical or not",
          "Check for balanced binary tree", "Diameter of Binary Tree",
          "Maximum path sum", "Check for symmetrical BTs",
          "Zig Zag or Spiral Traversal", "Boundary Traversal",
          "Vertical Order Traversal", "Top View of BT", "Bottom view of BT",
          "Right/Left View of BT"
        ]
      },
      {
        label: "Hard FAQs",
        problems: [
          "Print root to node path in BT", "LCA in BT", "Maximum Width of BT",
          "Print all nodes at a distance of K in BT",
          "Minimum time taken to burn the BT from a given Node",
          "Count total nodes in a complete BT",
          "Requirements needed to construct a unique BT",
          "Construct a BT from Preorder and Inorder",
          "Construct a BT from Postorder and Inorder",
          "Serialize and De-serialize BT"
        ]
      },
      {
        label: "Traversal in Constant Space",
        problems: ["Morris Inorder Traversal", "Morris Preorder Traversal"]
      }
    ]
  },
  {
    name: "Binary Search Trees",
    icon: "🌲",
    subtopics: [
      {
        label: "Theory & FAQs",
        problems: [
          "Introduction to BST", "Search in BST", "Floor and Ceil in a BST",
          "Insert a given node in BST", "Delete a node in BST",
          "Kth Smallest and Largest element in BST", "Check if a tree is a BST or not",
          "LCA in BST", "Construct a BST from a preorder traversal",
          "Inorder successor and predecessor in BST", "BST iterator",
          "Two sum in BST", "Correct BST with two nodes swapped",
          "Largest BST in Binary Tree"
        ]
      }
    ]
  },
  {
    name: "Heaps",
    icon: "🏔️",
    subtopics: [
      {
        label: "Theory & Basics",
        problems: [
          "Heaps (Theory Video)", "Heapify Algorithm", "Build heap from a given Array",
          "Implement Min Heap", "Implement Max Heap",
          "Check if an array represents a min heap", "Convert Min Heap to Max Heap",
          "Heap Sort"
        ]
      },
      {
        label: "FAQs",
        problems: [
          "K-th Largest element in an array",
          "Kth largest element in a stream of running integers"
        ]
      }
    ]
  },
  {
    name: "Graphs",
    icon: "🕸️",
    subtopics: [
      {
        label: "Theory & Traversal",
        problems: [
          "Introduction to Graph", "Traversal Techniques", "Connected Components",
          "Number of provinces", "Number of islands", "Flood fill algorithm",
          "Number of enclaves", "Rotten Oranges", "Distance of nearest cell having one",
          "Surrounded Regions", "Number of distinct islands"
        ]
      },
      {
        label: "Cycles & Topo",
        problems: [
          "Detect a cycle in an undirected graph", "Bipartite graph",
          "Topological sort or Kahn's algorithm", "Detect a cycle in a directed graph",
          "Find eventual safe states", "Course Schedule I", "Course Schedule II",
          "Alien Dictionary"
        ]
      },
      {
        label: "Shortest Path",
        problems: [
          "Shortest path in DAG", "Shortest path in undirected graph with unit weights",
          "Word ladder I", "Word ladder II", "Dijkstra's algorithm", "Print Shortest Path",
          "Shortest Distance in a Binary Maze", "Path with minimum effort",
          "Cheapest flight within K stops", "Minimum multiplications to reach end",
          "Number of ways to arrive at destination", "Bellman ford algorithm",
          "Floyd warshall algorithm", "Find the city with the smallest number of neighbors"
        ]
      },
      {
        label: "MST & DSU",
        problems: [
          "MST theory", "Disjoint Set", "Find the MST weight",
          "Number of operations to make network connected", "Accounts merge",
          "Number of islands II", "Making a large island",
          "Most stones removed with same row or column"
        ]
      },
      {
        label: "Hard Problems",
        problems: [
          "Kosaraju's algorithm", "Bridges in graph", "Articulation point in graph"
        ]
      }
    ]
  },
  {
    name: "Dynamic Programming",
    icon: "🧩",
    subtopics: [
      {
        label: "1D DP",
        problems: [
          "Introduction to DP", "Climbing stairs", "Frog Jump",
          "Frog jump with K distances", "Maximum sum of non adjacent elements", "House robber"
        ]
      },
      {
        label: "2D DP",
        problems: [
          "Ninja's training", "Grid unique paths", "Unique paths II",
          "Minimum Falling Path Sum", "Triangle", "Cherry pickup II"
        ]
      },
      {
        label: "DP on Stocks",
        problems: [
          "Best time to buy and sell stock", "Best time to buy and sell stock II",
          "Best time to buy and sell stock III", "Best time to buy and sell stock IV",
          "Best time to buy and sell stock with transaction fees"
        ]
      },
      {
        label: "DP on Subsequences",
        problems: [
          "Subset sum equals to target", "Partition equal subset sum",
          "Partition a set into two subsets with minimum absolute sum difference",
          "Count subsets with sum K", "Count partitions with given difference",
          "0 and 1 Knapsack", "Minimum coins", "Target sum", "Coin change II",
          "Unbounded knapsack", "Rod cutting problem"
        ]
      },
      {
        label: "LIS (Longest Increasing Subsequence)",
        problems: [
          "Longest Increasing Subsequence", "Print Longest Increasing Subsequence",
          "Largest Divisible Subset", "Longest String Chain", "Longest Bitonic Subsequence",
          "Number of Longest Increasing Subsequences"
        ]
      },
      {
        label: "DP on Strings",
        problems: [
          "Longest common subsequence", "Longest common substring",
          "Longest palindromic subsequence", "Minimum insertions to make string palindrome",
          "Minimum insertions or deletions to convert string A to B",
          "Shortest common supersequence", "Distinct subsequences", "Edit distance",
          "Wildcard matching"
        ]
      },
      {
        label: "MCM DP",
        problems: [
          "Matrix chain multiplication", "Minimum cost to cut the stick",
          "Burst balloons", "Palindrome partitioning II"
        ]
      }
    ]
  },
  {
    name: "Tries",
    icon: "🌿",
    subtopics: [
      {
        label: "Theory & Problems",
        problems: [
          "Trie Implementation and Operations", "Trie Implementation and Advanced Operations",
          "Longest Word with All Prefixes", "Number of distinct substrings in a string",
          "Maximum XOR of two numbers in an array",
          "Maximum Xor with an element from an array"
        ]
      }
    ]
  },
  {
    name: "Strings",
    icon: "📝",
    subtopics: [
      {
        label: "Medium Problems",
        problems: [
          "Reverse every word in a string",
          "Minimum number of bracket reversals to make an expression balanced",
          "Count and say"
        ]
      },
      {
        label: "Advanced Algorithms",
        problems: [
          "Rabin Karp Algorithm", "Z function", "KMP Algorithm or LPS array",
          "Shortest Palindrome", "Longest happy prefix"
        ]
      }
    ]
  },
  {
    name: "Maths",
    icon: "➕",
    subtopics: [
      {
        label: "Sieve of Eratosthenes",
        problems: [
          "Print all primes till N", "Prime factorisation of a Number",
          "Count primes in range L to R"
        ]
      }
    ]
  }
];

// ===== STATE =====
const STORAGE_KEY = "tuf_dsa_checklist_v2";

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState();
// state[problemId] = { completed: bool, revisit: bool, revisions: number }

function getProblemId(topicIdx, subtopicIdx, problemIdx) {
  return `${topicIdx}_${subtopicIdx}_${problemIdx}`;
}

function getOrCreate(id) {
  if (!state[id]) state[id] = { completed: false, revisit: false, revisions: 0 };
  return state[id];
}

// ===== RENDER =====
function buildId(topicIdx, subtopicIdx, problemIdx) {
  return `p_${topicIdx}_${subtopicIdx}_${problemIdx}`;
}

function renderAll() {
  const container = document.getElementById("main-content");
  container.innerHTML = "";

  TOPICS.forEach((topic, tIdx) => {
    const section = document.createElement("section");
    section.className = `topic-section topic-${tIdx % 12}`;
    section.dataset.topicIdx = tIdx;

    // Gather all problem ids for this topic
    const allProblemIds = [];
    topic.subtopics.forEach((sub, sIdx) => {
      sub.problems.forEach((_, pIdx) => {
        allProblemIds.push(getProblemId(tIdx, sIdx, pIdx));
      });
    });
    const totalCount = allProblemIds.length;
    const doneCount = allProblemIds.filter(id => state[id]?.completed).length;

    // Header
    const header = document.createElement("div");
    header.className = "topic-header";
    header.innerHTML = `
      <div class="topic-title-wrap">
        <div class="topic-icon">${topic.icon}</div>
        <div>
          <div class="topic-name">${topic.name}</div>
          <div class="topic-sub">${totalCount} problems</div>
        </div>
      </div>
      <div class="topic-meta">
        <div class="topic-progress-wrap">
          <div class="topic-progress-bar">
            <div class="topic-progress-fill" style="width:${totalCount ? (doneCount/totalCount*100) : 0}%"></div>
          </div>
          <span class="topic-count" id="tc_${tIdx}">${doneCount}/${totalCount}</span>
        </div>
        <div class="topic-toggle">
          <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </div>`;

    header.addEventListener("click", () => {
      section.classList.toggle("collapsed");
      const wrap = section.querySelector(".problems-wrap");
      if (section.classList.contains("collapsed")) {
        wrap.style.maxHeight = "0";
      } else {
        wrap.style.maxHeight = wrap.scrollHeight + "px";
      }
    });

    section.appendChild(header);

    // Problems wrap
    const wrap = document.createElement("div");
    wrap.className = "problems-wrap";
    const grid = document.createElement("div");
    grid.className = "problems-grid";

    topic.subtopics.forEach((sub, sIdx) => {
      if (sub.label) {
        const label = document.createElement("div");
        label.className = "subtopic-label";
        label.textContent = sub.label;
        grid.appendChild(label);
      }
      sub.problems.forEach((prob, pIdx) => {
        const id = getProblemId(tIdx, sIdx, pIdx);
        const s = getOrCreate(id);
        const row = document.createElement("div");
        row.className = `problem-row${s.completed ? " completed" : ""}${s.revisit ? " revisit-marked" : ""}`;
        row.id = buildId(tIdx, sIdx, pIdx);
        row.dataset.id = id;
        row.dataset.name = prob.toLowerCase();

        row.innerHTML = `
          <div class="check-wrap">
            <div class="check-box">
              <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </div>
          <span class="problem-name">${prob}</span>
          <div class="revision-wrap">
            <span class="rev-label">rev</span>
            <span class="rev-count${s.revisions > 0 ? " nonzero" : ""}" id="rev_${id}">${s.revisions}</span>
            <button class="rev-inc-btn" data-id="${id}" title="Increment revision count" tabindex="-1">+</button>
          </div>
          <div class="actions-wrap">
            <button class="revisit-btn${s.revisit ? " active" : ""}" data-id="${id}" title="Mark for revisit" tabindex="-1">
              <svg viewBox="0 0 24 24"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 .49-4.95L1 10"/></svg>
            </button>
          </div>`;

        // Toggle complete on row click (not on buttons)
        row.addEventListener("click", (e) => {
          if (e.target.closest(".revisit-btn") || e.target.closest(".rev-inc-btn")) return;
          toggleComplete(id, row, tIdx);
        });

        // Revisit button
        row.querySelector(".revisit-btn").addEventListener("click", (e) => {
          e.stopPropagation();
          toggleRevisit(id, row);
        });

        // Rev increment
        row.querySelector(".rev-inc-btn").addEventListener("click", (e) => {
          e.stopPropagation();
          incrementRevision(id, row);
        });

        grid.appendChild(row);
      });
    });

    wrap.appendChild(grid);
    wrap.style.maxHeight = wrap.scrollHeight + "px";
    // Use a small delay so the initial layout has a known height
    requestAnimationFrame(() => {
      wrap.style.maxHeight = wrap.scrollHeight + "px";
    });

    section.appendChild(wrap);
    container.appendChild(section);
  });

  updateGlobalStats();
}

function toggleComplete(id, row, topicIdx) {
  const s = getOrCreate(id);
  s.completed = !s.completed;
  if (s.completed) s.revisions++;
  saveState(state);

  row.classList.toggle("completed", s.completed);
  const revEl = document.getElementById(`rev_${id}`);
  if (revEl) {
    revEl.textContent = s.revisions;
    revEl.classList.toggle("nonzero", s.revisions > 0);
  }
  updateTopicProgress(topicIdx);
  updateGlobalStats();

  // Expand wrap after height change
  const wrap = row.closest(".problems-wrap");
  if (wrap) wrap.style.maxHeight = wrap.scrollHeight + "px";

  showToast(s.completed ? "✓ Marked complete" : "↩ Marked incomplete", s.completed ? "green" : "");
}

function toggleRevisit(id, row) {
  const s = getOrCreate(id);
  s.revisit = !s.revisit;
  saveState(state);
  row.classList.toggle("revisit-marked", s.revisit);
  row.querySelector(".revisit-btn").classList.toggle("active", s.revisit);
  updateGlobalStats();
  showToast(s.revisit ? "🔁 Added to revisit" : "Removed from revisit", s.revisit ? "orange" : "");
}

function incrementRevision(id, row) {
  const s = getOrCreate(id);
  s.revisions++;
  saveState(state);
  const revEl = document.getElementById(`rev_${id}`);
  if (revEl) {
    revEl.textContent = s.revisions;
    revEl.classList.add("nonzero");
  }
  showToast(`Revision count: ${s.revisions}`, "");
}

function updateTopicProgress(tIdx) {
  const topic = TOPICS[tIdx];
  const allIds = [];
  topic.subtopics.forEach((sub, sIdx) => {
    sub.problems.forEach((_, pIdx) => allIds.push(getProblemId(tIdx, sIdx, pIdx)));
  });
  const total = allIds.length;
  const done = allIds.filter(id => state[id]?.completed).length;
  const fill = document.querySelector(`.topic-${tIdx} .topic-progress-fill`);
  const count = document.getElementById(`tc_${tIdx}`);
  if (fill) fill.style.width = (total ? done/total*100 : 0) + "%";
  if (count) count.textContent = `${done}/${total}`;
}

function updateGlobalStats() {
  let total = 0, done = 0, revisit = 0;
  TOPICS.forEach((topic, tIdx) => {
    topic.subtopics.forEach((sub, sIdx) => {
      sub.problems.forEach((_, pIdx) => {
        const id = getProblemId(tIdx, sIdx, pIdx);
        total++;
        if (state[id]?.completed) done++;
        if (state[id]?.revisit) revisit++;
      });
    });
  });
  document.getElementById("count-total").textContent = total;
  document.getElementById("count-done").textContent = done;
  document.getElementById("count-revisit").textContent = revisit;
  const pct = total ? Math.round(done / total * 100) : 0;
  document.getElementById("global-progress").style.width = pct + "%";
  document.getElementById("progress-pct").textContent = pct + "%";
}

// ===== SEARCH & FILTER =====
let activeFilter = "all";
let searchQuery = "";

function applyFiltersAndSearch() {
  const rows = document.querySelectorAll(".problem-row");
  const sections = document.querySelectorAll(".topic-section");

  rows.forEach(row => {
    const id = row.dataset.id;
    const s = state[id] || {};
    const name = row.dataset.name || "";
    let visible = true;

    // Filter
    if (activeFilter === "completed" && !s.completed) visible = false;
    if (activeFilter === "pending" && s.completed) visible = false;
    if (activeFilter === "revisit" && !s.revisit) visible = false;

    // Search
    if (searchQuery && !name.includes(searchQuery.toLowerCase())) visible = false;

    row.classList.toggle("hidden", !visible);
  });

  // Hide subtopic labels if no visible problems follow
  document.querySelectorAll(".subtopic-label").forEach(label => {
    let next = label.nextElementSibling;
    let hasVisible = false;
    while (next && !next.classList.contains("subtopic-label")) {
      if (next.classList.contains("problem-row") && !next.classList.contains("hidden")) {
        hasVisible = true; break;
      }
      next = next.nextElementSibling;
    }
    label.style.display = hasVisible ? "" : "none";
  });

  // Show/hide empty sections
  sections.forEach(section => {
    const visibleRows = section.querySelectorAll(".problem-row:not(.hidden)");
    section.style.display = visibleRows.length ? "" : "none";

    // Update wrap heights
    const wrap = section.querySelector(".problems-wrap");
    if (wrap && !section.classList.contains("collapsed")) {
      wrap.style.maxHeight = wrap.scrollHeight + "px";
    }
  });

  // Show empty state if nothing visible
  let empty = document.getElementById("empty-state-msg");
  const anyVisible = document.querySelectorAll(".problem-row:not(.hidden)").length > 0;
  if (!anyVisible) {
    if (!empty) {
      empty = document.createElement("div");
      empty.id = "empty-state-msg";
      empty.className = "empty-state";
      empty.innerHTML = `
        <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        <h3>No problems found</h3>
        <p>Try adjusting your search or filter.</p>`;
      document.getElementById("main-content").appendChild(empty);
    }
  } else {
    if (empty) empty.remove();
  }
}

document.getElementById("search-input").addEventListener("input", (e) => {
  searchQuery = e.target.value.trim();
  applyFiltersAndSearch();
});

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    applyFiltersAndSearch();
  });
});

// ===== RESET =====
document.getElementById("reset-btn").addEventListener("click", () => {
  if (!confirm("Reset ALL progress? This cannot be undone.")) return;
  state = {};
  saveState(state);
  renderAll();
  showToast("Progress reset", "");
});

// ===== TOAST =====
let toastTimer;
function showToast(msg, type = "") {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.className = `toast show ${type}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

// ===== INIT =====
renderAll();
