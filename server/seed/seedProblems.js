import Problem from "../models/Problem.js";
import dbConnection from "../config/db.js";
import dotenv from 'dotenv'

dotenv.config();

const problems = [
    // ─────────────────────────────────────────────
    // 1. TWO SUM
    // ─────────────────────────────────────────────
    {
        problemNumber: 1,
        title: "Two Sum",
        slug: "two-sum",
        difficulty: "Basic",
        tags: ["Array", "HashMap"],
        description:
            "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
        examples: [
            { input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "nums[0] + nums[1] = 2 + 7 = 9" },
            { input: "nums = [3,2,4], target = 6", output: "[1,2]", explanation: "nums[1] + nums[2] = 2 + 4 = 6" },
        ],
        constraints: [
            "2 <= nums.length <= 10^4",
            "-10^9 <= nums[i] <= 10^9",
            "Only one valid answer exists",
        ],
        testCases: [
            { input: "[2,7,11,15]\n9", expectedOutput: "[0,1]" },
            { input: "[3,2,4]\n6", expectedOutput: "[1,2]" },
            { input: "[3,3]\n6", expectedOutput: "[0,1]" },
            { input: "[1,2,3,4,5]\n9", expectedOutput: "[3,4]" },
            { input: "[0,4,3,0]\n0", expectedOutput: "[0,3]" },
            { input: "[-1,-2,-3,-4,-5]\n-8", expectedOutput: "[2,4]" },
            { input: "[1,5,3,7]\n8", expectedOutput: "[1,3]" },
            { input: "[2,5,5,11]\n10", expectedOutput: "[1,2]" },
            { input: "[1,3,4,2]\n6", expectedOutput: "[2,3]" },
            { input: "[0,1]\n1", expectedOutput: "[0,1]" },
        ],
        starterCode: {
            javascript: `function twoSum(nums, target) {
  // your code here
}

/* DO NOT EDIT BELOW */
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
let input = [];
rl.on("line", (line) => input.push(line.trim()));
rl.on("close", () => {
  const nums = JSON.parse(input[0]);
  const target = parseInt(input[1]);
  console.log(JSON.stringify(twoSum(nums, target)));
});`,

            python: `def two_sum(nums, target):
    # your code here
    pass

# DO NOT EDIT BELOW
import sys, json
data = sys.stdin.read().split("\\n")
nums = json.loads(data[0])
target = int(data[1])
print(json.dumps(two_sum(nums, target)))`,

            cpp: `#include <bits/stdc++.h>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    // your code here
}

/* DO NOT EDIT BELOW */
int main() {
    string line; int target;
    getline(cin, line);
    cin >> target;
    vector<int> nums;
    // parse JSON array
    line.erase(remove(line.begin(), line.end(), '['), line.end());
    line.erase(remove(line.begin(), line.end(), ']'), line.end());
    stringstream ss(line);
    string tok;
    while (getline(ss, tok, ',')) nums.push_back(stoi(tok));
    auto res = twoSum(nums, target);
    cout << "[";
    for (int i = 0; i < res.size(); i++) { if (i) cout << ","; cout << res[i]; }
    cout << "]" << endl;
    return 0;
}`,

            java: `import java.util.*;

public class Main {
    public static int[] twoSum(int[] nums, int target) {
        // your code here
        return new int[]{};
    }

    /* DO NOT EDIT BELOW */
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        int target = Integer.parseInt(sc.nextLine().trim());
        line = line.replaceAll("[\\\\[\\\\]]", "");
        String[] parts = line.split(",");
        int[] nums = new int[parts.length];
        for (int i = 0; i < parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());
        int[] res = twoSum(nums, target);
        System.out.println("[" + res[0] + "," + res[1] + "]");
    }
}`,
        },
    },

    // ─────────────────────────────────────────────
    // 2. VALID PARENTHESES
    // ─────────────────────────────────────────────
    {
        problemNumber: 2,
        title: "Valid Parentheses",
        slug: "valid-parentheses",
        difficulty: "Easy",
        tags: ["Stack", "String"],
        description:
            'Given a string s containing just the characters "(", ")", "{", "}", "[" and "]", determine if the input string is valid.',
        examples: [
            { input: 's = "()"', output: "true", explanation: "Opening and closing brackets match" },
            { input: 's = "()[]{}"', output: "true", explanation: "All brackets match in correct order" },
        ],
        constraints: [
            "1 <= s.length <= 10^4",
            "s consists of parentheses only '()[]{}'",
        ],
        testCases: [
            { input: "()", expectedOutput: "true" },
            { input: "()[]{}", expectedOutput: "true" },
            { input: "(]", expectedOutput: "false" },
            { input: "([)]", expectedOutput: "false" },
            { input: "{[]}", expectedOutput: "true" },
            { input: "", expectedOutput: "true" },
            { input: "((", expectedOutput: "false" },
            { input: "){", expectedOutput: "false" },
            { input: "({[]})", expectedOutput: "true" },
            { input: "((()))", expectedOutput: "true" },
        ],
        starterCode: {
            javascript: `function isValid(s) {
  // your code here
}

/* DO NOT EDIT BELOW */
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
let input = [];
rl.on("line", (line) => input.push(line));
rl.on("close", () => {
  const s = input[0] !== undefined ? input[0] : "";
  console.log(String(isValid(s)));
});`,

            python: `def is_valid(s):
    # your code here
    pass

# DO NOT EDIT BELOW
import sys
s = sys.stdin.read().rstrip("\\n")
print(str(is_valid(s)).lower())`,

            cpp: `#include <bits/stdc++.h>
using namespace std;

bool isValid(string s) {
    // your code here
}

/* DO NOT EDIT BELOW */
int main() {
    string s;
    getline(cin, s);
    cout << (isValid(s) ? "true" : "false") << endl;
    return 0;
}`,

            java: `import java.util.*;

public class Main {
    public static boolean isValid(String s) {
        // your code here
        return false;
    }

    /* DO NOT EDIT BELOW */
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.hasNextLine() ? sc.nextLine() : "";
        System.out.println(isValid(s));
    }
}`,
        },
    },

    // ─────────────────────────────────────────────
    // 3. REVERSE LINKED LIST
    // ─────────────────────────────────────────────
    {
        problemNumber: 3,
        title: "Reverse Linked List",
        slug: "reverse-linked-list",
        difficulty: "Easy",
        tags: ["Linked List"],
        description:
            "Given the head of a singly linked list, reverse the list, and return the reversed list.",
        examples: [
            { input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]", explanation: "The list is reversed" },
            { input: "head = [1,2]", output: "[2,1]", explanation: "Two node list reversed" },
        ],
        constraints: [
            "The number of nodes in the list is in the range [0, 5000]",
            "-5000 <= Node.val <= 5000",
        ],
        testCases: [
            { input: "[1,2,3,4,5]", expectedOutput: "[5,4,3,2,1]" },
            { input: "[1,2]", expectedOutput: "[2,1]" },
            { input: "[]", expectedOutput: "[]" },
            { input: "[1]", expectedOutput: "[1]" },
            { input: "[1,2,3]", expectedOutput: "[3,2,1]" },
            { input: "[5,4,3,2,1]", expectedOutput: "[1,2,3,4,5]" },
            { input: "[1,1,1]", expectedOutput: "[1,1,1]" },
            { input: "[0,-1]", expectedOutput: "[-1,0]" },
            { input: "[100,200,300]", expectedOutput: "[300,200,100]" },
            { input: "[1,2,3,4]", expectedOutput: "[4,3,2,1]" },
        ],
        starterCode: {
            javascript: `class ListNode {
  constructor(val, next = null) { this.val = val; this.next = next; }
}

function reverseList(head) {
  // your code here
}

/* DO NOT EDIT BELOW */
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
let input = [];
rl.on("line", (line) => input.push(line.trim()));
rl.on("close", () => {
  const arr = JSON.parse(input[0] || "[]");
  let head = null;
  for (let i = arr.length - 1; i >= 0; i--) head = new ListNode(arr[i], head);
  let node = reverseList(head);
  const res = [];
  while (node) { res.push(node.val); node = node.next; }
  console.log(JSON.stringify(res));
});`,

            python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_list(head):
    # your code here
    pass

# DO NOT EDIT BELOW
import sys, json
arr = json.loads(sys.stdin.read().strip())
head = None
for val in reversed(arr):
    head = ListNode(val, head)
node = reverse_list(head)
res = []
while node:
    res.append(node.val)
    node = node.next
print(json.dumps(res))`,

            cpp: `#include <bits/stdc++.h>
using namespace std;

struct ListNode { int val; ListNode* next; ListNode(int v) : val(v), next(nullptr) {} };

ListNode* reverseList(ListNode* head) {
    // your code here
}

/* DO NOT EDIT BELOW */
int main() {
    string line; getline(cin, line);
    line.erase(remove(line.begin(), line.end(), '['), line.end());
    line.erase(remove(line.begin(), line.end(), ']'), line.end());
    ListNode* head = nullptr; ListNode* tail = nullptr;
    if (!line.empty()) {
        stringstream ss(line); string tok;
        while (getline(ss, tok, ',')) {
            auto* node = new ListNode(stoi(tok));
            if (!head) head = tail = node;
            else { tail->next = node; tail = node; }
        }
    }
    auto* node = reverseList(head);
    cout << "[";
    bool first = true;
    while (node) { if (!first) cout << ","; cout << node->val; first = false; node = node->next; }
    cout << "]" << endl;
    return 0;
}`,

            java: `import java.util.*;

public class Main {
    static class ListNode { int val; ListNode next; ListNode(int v) { val = v; } }

    public static ListNode reverseList(ListNode head) {
        // your code here
        return null;
    }

    /* DO NOT EDIT BELOW */
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim().replaceAll("[\\\\[\\\\]]", "");
        ListNode head = null, tail = null;
        if (!line.isEmpty()) {
            for (String s : line.split(",")) {
                ListNode node = new ListNode(Integer.parseInt(s.trim()));
                if (head == null) { head = tail = node; } else { tail.next = node; tail = node; }
            }
        }
        ListNode node = reverseList(head);
        StringBuilder sb = new StringBuilder("[");
        boolean first = true;
        while (node != null) { if (!first) sb.append(","); sb.append(node.val); first = false; node = node.next; }
        sb.append("]");
        System.out.println(sb);
    }
}`,
        },
    },

    // ─────────────────────────────────────────────
    // 4. MAXIMUM SUBARRAY
    // ─────────────────────────────────────────────
    {
        problemNumber: 4,
        title: "Maximum Subarray",
        slug: "maximum-subarray",
        difficulty: "Basic",
        tags: ["Array", "DP"],
        description:
            "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
        examples: [
            { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6", explanation: "Subarray [4,-1,2,1] has the largest sum = 6" },
            { input: "nums = [1]", output: "1", explanation: "Only one element" },
        ],
        constraints: ["1 <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4"],
        testCases: [
            { input: "[-2,1,-3,4,-1,2,1,-5,4]", expectedOutput: "6" },
            { input: "[1]", expectedOutput: "1" },
            { input: "[5,4,-1,7,8]", expectedOutput: "23" },
            { input: "[-1,-2,-3]", expectedOutput: "-1" },
            { input: "[0,0,0]", expectedOutput: "0" },
            { input: "[-2,-1]", expectedOutput: "-1" },
            { input: "[1,2,3,4,5]", expectedOutput: "15" },
            { input: "[-1,2,3,-4,5]", expectedOutput: "6" },
            { input: "[4,-1,2,1]", expectedOutput: "6" },
            { input: "[-3,4,-2,2,-1]", expectedOutput: "4" },
        ],
        starterCode: {
            javascript: `function maxSubArray(nums) {
  // your code here
}

/* DO NOT EDIT BELOW */
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
let input = [];
rl.on("line", (line) => input.push(line.trim()));
rl.on("close", () => {
  const nums = JSON.parse(input[0]);
  console.log(String(maxSubArray(nums)));
});`,

            python: `def max_sub_array(nums):
    # your code here
    pass

# DO NOT EDIT BELOW
import sys, json
nums = json.loads(sys.stdin.read().strip())
print(max_sub_array(nums))`,

            cpp: `#include <bits/stdc++.h>
using namespace std;

int maxSubArray(vector<int>& nums) {
    // your code here
}

/* DO NOT EDIT BELOW */
int main() {
    string line; getline(cin, line);
    line.erase(remove(line.begin(), line.end(), '['), line.end());
    line.erase(remove(line.begin(), line.end(), ']'), line.end());
    vector<int> nums;
    stringstream ss(line); string tok;
    while (getline(ss, tok, ',')) nums.push_back(stoi(tok));
    cout << maxSubArray(nums) << endl;
    return 0;
}`,

            java: `import java.util.*;

public class Main {
    public static int maxSubArray(int[] nums) {
        // your code here
        return 0;
    }

    /* DO NOT EDIT BELOW */
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim().replaceAll("[\\\\[\\\\]]", "");
        String[] parts = line.split(",");
        int[] nums = new int[parts.length];
        for (int i = 0; i < parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());
        System.out.println(maxSubArray(nums));
    }
}`,
        },
    },

    // ─────────────────────────────────────────────
    // 5. CLIMBING STAIRS
    // ─────────────────────────────────────────────
    {
        problemNumber: 5,
        title: "Climbing Stairs",
        slug: "climbing-stairs",
        difficulty: "Basic",
        tags: ["DP", "Math"],
        description:
            "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
        examples: [
            { input: "n = 2", output: "2", explanation: "1+1 or 2" },
            { input: "n = 3", output: "3", explanation: "1+1+1, 1+2, or 2+1" },
        ],
        constraints: ["1 <= n <= 45"],
        testCases: [
            { input: "1", expectedOutput: "1" },
            { input: "2", expectedOutput: "2" },
            { input: "3", expectedOutput: "3" },
            { input: "4", expectedOutput: "5" },
            { input: "5", expectedOutput: "8" },
            { input: "6", expectedOutput: "13" },
            { input: "10", expectedOutput: "89" },
            { input: "15", expectedOutput: "987" },
            { input: "20", expectedOutput: "10946" },
            { input: "45", expectedOutput: "1836311903" },
        ],
        starterCode: {
            javascript: `function climbStairs(n) {
  // your code here
}

/* DO NOT EDIT BELOW */
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
let input = [];
rl.on("line", (line) => input.push(line.trim()));
rl.on("close", () => {
  const n = parseInt(input[0]);
  console.log(String(climbStairs(n)));
});`,

            python: `def climb_stairs(n):
    # your code here
    pass

# DO NOT EDIT BELOW
import sys
n = int(sys.stdin.read().strip())
print(climb_stairs(n))`,

            cpp: `#include <bits/stdc++.h>
using namespace std;

int climbStairs(int n) {
    // your code here
}

/* DO NOT EDIT BELOW */
int main() {
    int n; cin >> n;
    cout << climbStairs(n) << endl;
    return 0;
}`,

            java: `import java.util.*;

public class Main {
    public static int climbStairs(int n) {
        // your code here
        return 0;
    }

    /* DO NOT EDIT BELOW */
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = Integer.parseInt(sc.nextLine().trim());
        System.out.println(climbStairs(n));
    }
}`,
        },
    },

    // ─────────────────────────────────────────────
    // 6. BEST TIME TO BUY AND SELL STOCK
    // ─────────────────────────────────────────────
    {
        problemNumber: 6,
        title: "Best Time to Buy and Sell Stock",
        slug: "best-time-stock",
        difficulty: "Basic",
        tags: ["Array", "Greedy"],
        description:
            "You are given an array prices where prices[i] is the price of a given stock on the ith day. Return the maximum profit you can achieve.",
        examples: [
            { input: "prices = [7,1,5,3,6,4]", output: "5", explanation: "Buy on day 2 (price=1), sell on day 5 (price=6), profit=5" },
            { input: "prices = [7,6,4,3,1]", output: "0", explanation: "No profit possible, return 0" },
        ],
        constraints: ["1 <= prices.length <= 10^5", "0 <= prices[i] <= 10^4"],
        testCases: [
            { input: "[7,1,5,3,6,4]", expectedOutput: "5" },
            { input: "[7,6,4,3,1]", expectedOutput: "0" },
            { input: "[1,2]", expectedOutput: "1" },
            { input: "[2,1]", expectedOutput: "0" },
            { input: "[3,3,3]", expectedOutput: "0" },
            { input: "[1,2,3,4,5]", expectedOutput: "4" },
            { input: "[5,4,3,2,1,6]", expectedOutput: "5" },
            { input: "[2,4,1,7]", expectedOutput: "6" },
            { input: "[1]", expectedOutput: "0" },
            { input: "[0,10]", expectedOutput: "10" },
        ],
        starterCode: {
            javascript: `function maxProfit(prices) {
  // your code here
}

/* DO NOT EDIT BELOW */
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
let input = [];
rl.on("line", (line) => input.push(line.trim()));
rl.on("close", () => {
  const prices = JSON.parse(input[0]);
  console.log(String(maxProfit(prices)));
});`,

            python: `def max_profit(prices):
    # your code here
    pass

# DO NOT EDIT BELOW
import sys, json
prices = json.loads(sys.stdin.read().strip())
print(max_profit(prices))`,

            cpp: `#include <bits/stdc++.h>
using namespace std;

int maxProfit(vector<int>& prices) {
    // your code here
}

/* DO NOT EDIT BELOW */
int main() {
    string line; getline(cin, line);
    line.erase(remove(line.begin(), line.end(), '['), line.end());
    line.erase(remove(line.begin(), line.end(), ']'), line.end());
    vector<int> prices;
    stringstream ss(line); string tok;
    while (getline(ss, tok, ',')) prices.push_back(stoi(tok));
    cout << maxProfit(prices) << endl;
    return 0;
}`,

            java: `import java.util.*;

public class Main {
    public static int maxProfit(int[] prices) {
        // your code here
        return 0;
    }

    /* DO NOT EDIT BELOW */
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim().replaceAll("[\\\\[\\\\]]", "");
        String[] parts = line.split(",");
        int[] prices = new int[parts.length];
        for (int i = 0; i < parts.length; i++) prices[i] = Integer.parseInt(parts[i].trim());
        System.out.println(maxProfit(prices));
    }
}`,
        },
    },

    // ─────────────────────────────────────────────
    // 7. LONGEST SUBSTRING WITHOUT REPEATING CHARS
    // ─────────────────────────────────────────────
    {
        problemNumber: 7,
        title: "Longest Substring Without Repeating Characters",
        slug: "longest-substring",
        difficulty: "Medium",
        tags: ["Sliding Window", "String"],
        description:
            "Given a string s, find the length of the longest substring without repeating characters.",
        examples: [
            { input: 's = "abcabcbb"', output: "3", explanation: 'The answer is "abc" with length 3' },
            { input: 's = "bbbbb"', output: "1", explanation: 'The answer is "b" with length 1' },
        ],
        constraints: [
            "0 <= s.length <= 5 * 10^4",
            "s consists of English letters, digits, symbols and spaces",
        ],
        testCases: [
            { input: "abcabcbb", expectedOutput: "3" },
            { input: "bbbbb", expectedOutput: "1" },
            { input: "pwwkew", expectedOutput: "3" },
            { input: "", expectedOutput: "0" },
            { input: "au", expectedOutput: "2" },
            { input: "dvdf", expectedOutput: "3" },
            { input: "abcdef", expectedOutput: "6" },
            { input: "aab", expectedOutput: "2" },
            { input: "tmmzuxt", expectedOutput: "5" },
            { input: "ohvhjdml", expectedOutput: "6" },
        ],
        starterCode: {
            javascript: `function lengthOfLongestSubstring(s) {
  // your code here
}

/* DO NOT EDIT BELOW */
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
let input = [];
rl.on("line", (line) => input.push(line));
rl.on("close", () => {
  const s = input.length > 0 ? input[0] : "";
  console.log(String(lengthOfLongestSubstring(s)));
});`,

            python: `def length_of_longest_substring(s):
    # your code here
    pass

# DO NOT EDIT BELOW
import sys
s = sys.stdin.read().rstrip("\\n")
print(length_of_longest_substring(s))`,

            cpp: `#include <bits/stdc++.h>
using namespace std;

int lengthOfLongestSubstring(string s) {
    // your code here
}

/* DO NOT EDIT BELOW */
int main() {
    string s; getline(cin, s);
    cout << lengthOfLongestSubstring(s) << endl;
    return 0;
}`,

            java: `import java.util.*;

public class Main {
    public static int lengthOfLongestSubstring(String s) {
        // your code here
        return 0;
    }

    /* DO NOT EDIT BELOW */
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.hasNextLine() ? sc.nextLine() : "";
        System.out.println(lengthOfLongestSubstring(s));
    }
}`,
        },
    },

    // ─────────────────────────────────────────────
    // 8. MERGE INTERVALS
    // ─────────────────────────────────────────────
    {
        problemNumber: 8,
        title: "Merge Intervals",
        slug: "merge-intervals",
        difficulty: "Medium",
        tags: ["Array", "Sorting"],
        description:
            "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals.",
        examples: [
            { input: "intervals = [[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]", explanation: "[1,3] and [2,6] overlap, merge to [1,6]" },
            { input: "intervals = [[1,4],[4,5]]", output: "[[1,5]]", explanation: "[1,4] and [4,5] are considered overlapping" },
        ],
        constraints: [
            "1 <= intervals.length <= 10^4",
            "intervals[i].length == 2",
            "0 <= starti <= endi <= 10^4",
        ],
        testCases: [
            { input: "[[1,3],[2,6],[8,10],[15,18]]", expectedOutput: "[[1,6],[8,10],[15,18]]" },
            { input: "[[1,4],[4,5]]", expectedOutput: "[[1,5]]" },
            { input: "[[1,4],[2,3]]", expectedOutput: "[[1,4]]" },
            { input: "[[1,2],[3,4]]", expectedOutput: "[[1,2],[3,4]]" },
            { input: "[[1,4],[0,4]]", expectedOutput: "[[0,4]]" },
            { input: "[[1,4],[0,1]]", expectedOutput: "[[0,4]]" },
            { input: "[[2,3],[4,5],[6,7]]", expectedOutput: "[[2,3],[4,5],[6,7]]" },
            { input: "[[1,10],[2,3],[4,5]]", expectedOutput: "[[1,10]]" },
            { input: "[[1,3]]", expectedOutput: "[[1,3]]" },
            { input: "[[1,3],[2,4],[3,5]]", expectedOutput: "[[1,5]]" },
        ],
        starterCode: {
            javascript: `function merge(intervals) {
  // your code here
}

/* DO NOT EDIT BELOW */
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
let input = [];
rl.on("line", (line) => input.push(line.trim()));
rl.on("close", () => {
  const intervals = JSON.parse(input[0]);
  console.log(JSON.stringify(merge(intervals)));
});`,

            python: `def merge(intervals):
    # your code here
    pass

# DO NOT EDIT BELOW
import sys, json
intervals = json.loads(sys.stdin.read().strip())
print(json.dumps(merge(intervals)))`,

            cpp: `#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> merge(vector<vector<int>>& intervals) {
    // your code here
}

/* DO NOT EDIT BELOW */
int main() {
    string line; getline(cin, line);
    // naive JSON parse for [[a,b],[c,d],...]
    vector<vector<int>> intervals;
    int i = 0, n = line.size();
    while (i < n) {
        if (line[i] == '[' && i + 1 < n && line[i+1] != '[') {
            int j = line.find(']', i);
            string seg = line.substr(i+1, j-i-1);
            stringstream ss(seg); string tok; vector<int> pair;
            while (getline(ss, tok, ',')) pair.push_back(stoi(tok));
            intervals.push_back(pair);
            i = j + 1;
        } else i++;
    }
    auto res = merge(intervals);
    cout << "[";
    for (int k = 0; k < res.size(); k++) {
        if (k) cout << ",";
        cout << "[" << res[k][0] << "," << res[k][1] << "]";
    }
    cout << "]" << endl;
    return 0;
}`,

            java: `import java.util.*;

public class Main {
    public static int[][] merge(int[][] intervals) {
        // your code here
        return new int[][]{};
    }

    /* DO NOT EDIT BELOW */
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        // parse [[a,b],[c,d],...]
        List<int[]> list = new ArrayList<>();
        int i = 0, n = line.length();
        while (i < n) {
            if (line.charAt(i) == '[' && i + 1 < n && line.charAt(i+1) != '[') {
                int j = line.indexOf(']', i);
                String[] parts = line.substring(i+1, j).split(",");
                list.add(new int[]{ Integer.parseInt(parts[0].trim()), Integer.parseInt(parts[1].trim()) });
                i = j + 1;
            } else i++;
        }
        int[][] intervals = list.toArray(new int[0][]);
        int[][] res = merge(intervals);
        StringBuilder sb = new StringBuilder("[");
        for (int k = 0; k < res.length; k++) {
            if (k > 0) sb.append(",");
            sb.append("[").append(res[k][0]).append(",").append(res[k][1]).append("]");
        }
        sb.append("]");
        System.out.println(sb);
    }
}`,
        },
    },

    // ─────────────────────────────────────────────
    // 9. BINARY TREE LEVEL ORDER TRAVERSAL
    // ─────────────────────────────────────────────
    {
        problemNumber: 9,
        title: "Binary Tree Level Order Traversal",
        slug: "binary-tree-level-order",
        difficulty: "Medium",
        tags: ["Tree", "BFS"],
        description:
            "Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).",
        examples: [
            { input: "root = [3,9,20,null,null,15,7]", output: "[[3],[9,20],[15,7]]", explanation: "Level by level traversal" },
            { input: "root = [1]", output: "[[1]]", explanation: "Single node tree" },
        ],
        constraints: [
            "The number of nodes in the tree is in the range [0, 2000]",
            "-1000 <= Node.val <= 1000",
        ],
        testCases: [
            { input: "[3,9,20,null,null,15,7]", expectedOutput: "[[3],[9,20],[15,7]]" },
            { input: "[1]", expectedOutput: "[[1]]" },
            { input: "[]", expectedOutput: "[]" },
            { input: "[1,2,3]", expectedOutput: "[[1],[2,3]]" },
            { input: "[1,null,2,null,3]", expectedOutput: "[[1],[2],[3]]" },
            { input: "[1,2,null,3]", expectedOutput: "[[1],[2],[3]]" },
            { input: "[1,2,3,4,5]", expectedOutput: "[[1],[2,3],[4,5]]" },
            { input: "[0]", expectedOutput: "[[0]]" },
            { input: "[1,2,3,null,5]", expectedOutput: "[[1],[2,3],[5]]" },
            { input: "[1,2,3,4,null,null,5]", expectedOutput: "[[1],[2,3],[4,5]]" },
        ],
        starterCode: {
            javascript: `class TreeNode {
  constructor(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
}

function levelOrder(root) {
  // your code here
}

/* DO NOT EDIT BELOW */
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
let input = [];
rl.on("line", (line) => input.push(line.trim()));
rl.on("close", () => {
  const arr = JSON.parse(input[0] || "[]");
  if (!arr.length) { console.log("[]"); return; }
  const root = new TreeNode(arr[0]);
  const queue = [root]; let i = 1;
  while (queue.length && i < arr.length) {
    const node = queue.shift();
    if (arr[i] !== null) { node.left = new TreeNode(arr[i]); queue.push(node.left); }
    i++;
    if (i < arr.length && arr[i] !== null) { node.right = new TreeNode(arr[i]); queue.push(node.right); }
    i++;
  }
  console.log(JSON.stringify(levelOrder(root)));
});`,

            python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

def level_order(root):
    # your code here
    pass

# DO NOT EDIT BELOW
import sys, json
from collections import deque
arr = json.loads(sys.stdin.read().strip())
if not arr:
    print("[]")
else:
    root = TreeNode(arr[0])
    queue = deque([root]); i = 1
    while queue and i < len(arr):
        node = queue.popleft()
        if i < len(arr) and arr[i] is not None:
            node.left = TreeNode(arr[i]); queue.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i]); queue.append(node.right)
        i += 1
    print(json.dumps(level_order(root)))`,

            cpp: `#include <bits/stdc++.h>
using namespace std;

struct TreeNode { int val; TreeNode *left, *right; TreeNode(int v) : val(v), left(nullptr), right(nullptr) {} };

vector<vector<int>> levelOrder(TreeNode* root) {
    // your code here
}

/* DO NOT EDIT BELOW */
TreeNode* buildTree(vector<string>& arr) {
    if (arr.empty() || arr[0] == "null") return nullptr;
    TreeNode* root = new TreeNode(stoi(arr[0]));
    queue<TreeNode*> q; q.push(root);
    int i = 1;
    while (!q.empty() && i < arr.size()) {
        auto* node = q.front(); q.pop();
        if (i < arr.size() && arr[i] != "null") { node->left = new TreeNode(stoi(arr[i])); q.push(node->left); } i++;
        if (i < arr.size() && arr[i] != "null") { node->right = new TreeNode(stoi(arr[i])); q.push(node->right); } i++;
    }
    return root;
}
int main() {
    string line; getline(cin, line);
    line.erase(remove(line.begin(), line.end(), '['), line.end());
    line.erase(remove(line.begin(), line.end(), ']'), line.end());
    vector<string> arr;
    if (!line.empty()) { stringstream ss(line); string tok; while (getline(ss, tok, ',')) arr.push_back(tok); }
    auto* root = buildTree(arr);
    auto res = levelOrder(root);
    cout << "[";
    for (int i = 0; i < res.size(); i++) {
        if (i) cout << ",";
        cout << "[";
        for (int j = 0; j < res[i].size(); j++) { if (j) cout << ","; cout << res[i][j]; }
        cout << "]";
    }
    cout << "]" << endl;
    return 0;
}`,

            java: `import java.util.*;

public class Main {
    static class TreeNode { int val; TreeNode left, right; TreeNode(int v) { val = v; } }

    public static List<List<Integer>> levelOrder(TreeNode root) {
        // your code here
        return new ArrayList<>();
    }

    /* DO NOT EDIT BELOW */
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim().replaceAll("[\\\\[\\\\]]", "");
        String[] parts = line.isEmpty() ? new String[0] : line.split(",");
        if (parts.length == 0 || (parts.length == 1 && parts[0].isEmpty())) { System.out.println("[]"); return; }
        TreeNode root = new TreeNode(Integer.parseInt(parts[0].trim()));
        Queue<TreeNode> q = new LinkedList<>(); q.add(root); int i = 1;
        while (!q.isEmpty() && i < parts.length) {
            TreeNode node = q.poll();
            if (i < parts.length && !parts[i].trim().equals("null")) { node.left = new TreeNode(Integer.parseInt(parts[i].trim())); q.add(node.left); } i++;
            if (i < parts.length && !parts[i].trim().equals("null")) { node.right = new TreeNode(Integer.parseInt(parts[i].trim())); q.add(node.right); } i++;
        }
        List<List<Integer>> res = levelOrder(root);
        StringBuilder sb = new StringBuilder("[");
        for (int k = 0; k < res.size(); k++) {
            if (k > 0) sb.append(",");
            sb.append("[");
            for (int j = 0; j < res.get(k).size(); j++) { if (j > 0) sb.append(","); sb.append(res.get(k).get(j)); }
            sb.append("]");
        }
        sb.append("]");
        System.out.println(sb);
    }
}`,
        },
    },

    // ─────────────────────────────────────────────
    // 10. NUMBER OF ISLANDS
    // ─────────────────────────────────────────────
    {
        problemNumber: 10,
        title: "Number of Islands",
        slug: "number-of-islands",
        difficulty: "Medium",
        tags: ["BFS", "DFS", "Graph"],
        description:
            "Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.",
        examples: [
            { input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]', output: "1", explanation: "All land is connected forming one island" },
            { input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]', output: "3", explanation: "Three separate islands" },
        ],
        constraints: ["m == grid.length", "n == grid[i].length", "1 <= m, n <= 300", "grid[i][j] is '0' or '1'"],
        testCases: [
            { input: '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]', expectedOutput: "1" },
            { input: '[["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]', expectedOutput: "3" },
            { input: '[["1"]]', expectedOutput: "1" },
            { input: '[["0"]]', expectedOutput: "0" },
            { input: '[["1","0"],["0","1"]]', expectedOutput: "2" },
            { input: '[["1","1"],["1","1"]]', expectedOutput: "1" },
            { input: '[["0","0"],["0","0"]]', expectedOutput: "0" },
            { input: '[["1","0","1"],["0","1","0"],["1","0","1"]]', expectedOutput: "5" },
            { input: '[["1","1","1"],["0","1","0"],["1","1","1"]]', expectedOutput: "1" },
            { input: '[["1"],["1"],["1"]]', expectedOutput: "1" },
        ],
        starterCode: {
            javascript: `function numIslands(grid) {
  // your code here
}

/* DO NOT EDIT BELOW */
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
let input = [];
rl.on("line", (line) => input.push(line.trim()));
rl.on("close", () => {
  const grid = JSON.parse(input[0]);
  console.log(String(numIslands(grid)));
});`,

            python: `def num_islands(grid):
    # your code here
    pass

# DO NOT EDIT BELOW
import sys, json
grid = json.loads(sys.stdin.read().strip())
print(num_islands(grid))`,

            cpp: `#include <bits/stdc++.h>
using namespace std;

int numIslands(vector<vector<char>>& grid) {
    // your code here
}

/* DO NOT EDIT BELOW */
int main() {
    string line; getline(cin, line);
    // parse [["1","0",...],...]
    vector<vector<char>> grid;
    int i = 0, n = line.size();
    while (i < n) {
        if (line[i] == '[' && i+1 < n && line[i+1] == '"') {
            vector<char> row;
            int j = i+1;
            while (j < n && line[j] != ']') {
                if (line[j] == '"') { row.push_back(line[j+1]); j += 3; }
                else j++;
            }
            grid.push_back(row); i = j+1;
        } else i++;
    }
    cout << numIslands(grid) << endl;
    return 0;
}`,

            java: `import java.util.*;

public class Main {
    public static int numIslands(char[][] grid) {
        // your code here
        return 0;
    }

    /* DO NOT EDIT BELOW */
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        // parse [["1","0",...],...]
        List<char[]> rows = new ArrayList<>();
        int i = 0, n = line.length();
        while (i < n) {
            if (line.charAt(i) == '[' && i+1 < n && line.charAt(i+1) == '"') {
                List<Character> row = new ArrayList<>();
                int j = i+1;
                while (j < n && line.charAt(j) != ']') {
                    if (line.charAt(j) == '"') { row.add(line.charAt(j+1)); j += 3; }
                    else j++;
                }
                char[] r = new char[row.size()];
                for (int k = 0; k < row.size(); k++) r[k] = row.get(k);
                rows.add(r); i = j+1;
            } else i++;
        }
        char[][] grid = rows.toArray(new char[0][]);
        System.out.println(numIslands(grid));
    }
}`,
        },
    },

    // ─────────────────────────────────────────────
    // 11. WORD SEARCH
    // ─────────────────────────────────────────────
    {
        problemNumber: 11,
        title: "Word Search",
        slug: "word-search",
        difficulty: "Hard",
        tags: ["Backtracking", "DFS"],
        description:
            "Given an m x n grid of characters board and a string word, return true if word exists in the grid.",
        examples: [
            { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: "true", explanation: "The word exists in the grid" },
            { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"', output: "false", explanation: "Cannot reuse cells" },
        ],
        constraints: ["m == board.length", "n = board[i].length", "1 <= m, n <= 6", "1 <= word.length <= 15"],
        testCases: [
            { input: '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\nABCCED', expectedOutput: "true" },
            { input: '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\nSEE', expectedOutput: "true" },
            { input: '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\nABCB', expectedOutput: "false" },
            { input: '[["a"]]\na', expectedOutput: "true" },
            { input: '[["a"]]\nb', expectedOutput: "false" },
            { input: '[["A","B"],["C","D"]]\nABDC', expectedOutput: "true" },
            { input: '[["A","B"],["C","D"]]\nABCD', expectedOutput: "false" },
            { input: '[["a","b"],["c","d"]]\nacdb', expectedOutput: "true" },
            { input: '[["C","A","A"],["A","A","A"],["B","C","D"]]\nAAB', expectedOutput: "true" },
            { input: '[["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]]\nABCESEEDFSA', expectedOutput: "false" },
        ],
        starterCode: {
            javascript: `function exist(board, word) {
  // your code here
}

/* DO NOT EDIT BELOW */
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
let input = [];
rl.on("line", (line) => input.push(line.trim()));
rl.on("close", () => {
  const board = JSON.parse(input[0]);
  const word = input[1];
  console.log(String(exist(board, word)));
});`,

            python: `def exist(board, word):
    # your code here
    pass

# DO NOT EDIT BELOW
import sys, json
lines = sys.stdin.read().split("\\n")
board = json.loads(lines[0])
word = lines[1]
print(str(exist(board, word)).lower())`,

            cpp: `#include <bits/stdc++.h>
using namespace std;

bool exist(vector<vector<char>>& board, string word) {
    // your code here
}

/* DO NOT EDIT BELOW */
int main() {
    string line, word;
    getline(cin, line);
    getline(cin, word);
    vector<vector<char>> board;
    int i = 0, n = line.size();
    while (i < n) {
        if (line[i] == '[' && i+1 < n && line[i+1] == '"') {
            vector<char> row;
            int j = i+1;
            while (j < n && line[j] != ']') {
                if (line[j] == '"') { row.push_back(line[j+1]); j += 3; }
                else j++;
            }
            board.push_back(row); i = j+1;
        } else i++;
    }
    cout << (exist(board, word) ? "true" : "false") << endl;
    return 0;
}`,

            java: `import java.util.*;

public class Main {
    public static boolean exist(char[][] board, String word) {
        // your code here
        return false;
    }

    /* DO NOT EDIT BELOW */
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        String word = sc.nextLine().trim();
        List<char[]> rows = new ArrayList<>();
        int i = 0, n = line.length();
        while (i < n) {
            if (line.charAt(i) == '[' && i+1 < n && line.charAt(i+1) == '"') {
                List<Character> row = new ArrayList<>();
                int j = i+1;
                while (j < n && line.charAt(j) != ']') {
                    if (line.charAt(j) == '"') { row.add(line.charAt(j+1)); j += 3; }
                    else j++;
                }
                char[] r = new char[row.size()];
                for (int k = 0; k < row.size(); k++) r[k] = row.get(k);
                rows.add(r); i = j+1;
            } else i++;
        }
        char[][] board = rows.toArray(new char[0][]);
        System.out.println(exist(board, word));
    }
}`,
        },
    },

    // ─────────────────────────────────────────────
    // 12. MEDIAN OF TWO SORTED ARRAYS
    // ─────────────────────────────────────────────
    {
        problemNumber: 12,
        title: "Median of Two Sorted Arrays",
        slug: "median-two-arrays",
        difficulty: "Hard",
        tags: ["Binary Search", "Array"],
        description:
            "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
        examples: [
            { input: "nums1 = [1,3], nums2 = [2]", output: "2.0", explanation: "Merged array = [1,2,3], median = 2" },
            { input: "nums1 = [1,2], nums2 = [3,4]", output: "2.5", explanation: "Merged array = [1,2,3,4], median = (2+3)/2 = 2.5" },
        ],
        constraints: ["nums1.length == m", "nums2.length == n", "0 <= m <= 1000", "0 <= n <= 1000"],
        testCases: [
            { input: "[1,3]\n[2]", expectedOutput: "2.0" },
            { input: "[1,2]\n[3,4]", expectedOutput: "2.5" },
            { input: "[0,0]\n[0,0]", expectedOutput: "0.0" },
            { input: "[]\n[1]", expectedOutput: "1.0" },
            { input: "[2]\n[]", expectedOutput: "2.0" },
            { input: "[1,3]\n[2,4]", expectedOutput: "2.5" },
            { input: "[1,2,3]\n[4,5,6]", expectedOutput: "3.5" },
            { input: "[1]\n[2,3,4,5]", expectedOutput: "3.0" },
            { input: "[1,5]\n[2,3,4]", expectedOutput: "3.0" },
            { input: "[1,2,3,4,5]\n[6,7,8,9,10]", expectedOutput: "5.5" },
        ],
        starterCode: {
            javascript: `function findMedianSortedArrays(nums1, nums2) {
  // your code here
}

/* DO NOT EDIT BELOW */
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
let input = [];
rl.on("line", (line) => input.push(line.trim()));
rl.on("close", () => {
  const nums1 = JSON.parse(input[0]);
  const nums2 = JSON.parse(input[1]);
  const result = findMedianSortedArrays(nums1, nums2);
  console.log(result.toFixed(1));
});`,

            python: `def find_median_sorted_arrays(nums1, nums2):
    # your code here
    pass

# DO NOT EDIT BELOW
import sys, json
lines = sys.stdin.read().split("\\n")
nums1 = json.loads(lines[0])
nums2 = json.loads(lines[1])
result = find_median_sorted_arrays(nums1, nums2)
print(f"{result:.1f}")`,

            cpp: `#include <bits/stdc++.h>
using namespace std;

double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    // your code here
}

/* DO NOT EDIT BELOW */
vector<int> parseArr(const string& s) {
    vector<int> v;
    string t = s;
    t.erase(remove(t.begin(), t.end(), '['), t.end());
    t.erase(remove(t.begin(), t.end(), ']'), t.end());
    if (t.empty()) return v;
    stringstream ss(t); string tok;
    while (getline(ss, tok, ',')) if (!tok.empty()) v.push_back(stoi(tok));
    return v;
}
int main() {
    string l1, l2; getline(cin, l1); getline(cin, l2);
    auto nums1 = parseArr(l1), nums2 = parseArr(l2);
    double res = findMedianSortedArrays(nums1, nums2);
    cout << fixed << setprecision(1) << res << endl;
    return 0;
}`,

            java: `import java.util.*;

public class Main {
    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // your code here
        return 0.0;
    }

    /* DO NOT EDIT BELOW */
    static int[] parseArr(String s) {
        s = s.replaceAll("[\\\\[\\\\]]", "").trim();
        if (s.isEmpty()) return new int[0];
        String[] parts = s.split(",");
        int[] arr = new int[parts.length];
        for (int i = 0; i < parts.length; i++) arr[i] = Integer.parseInt(parts[i].trim());
        return arr;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] nums1 = parseArr(sc.nextLine().trim());
        int[] nums2 = parseArr(sc.nextLine().trim());
        double res = findMedianSortedArrays(nums1, nums2);
        System.out.printf("%.1f%n", res);
    }
}`,
        },
    },

    // ─────────────────────────────────────────────
    // 13. CONTAINS DUPLICATE
    // ─────────────────────────────────────────────
    {
        problemNumber: 13,
        title: "Contains Duplicate",
        slug: "contains-duplicate",
        difficulty: "Basic",
        tags: ["Array", "HashSet"],
        description:
            "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
        examples: [
            { input: "nums = [1,2,3,1]", output: "true", explanation: "1 appears twice" },
            { input: "nums = [1,2,3,4]", output: "false", explanation: "All elements are distinct" },
        ],
        constraints: ["1 <= nums.length <= 10^5", "-10^9 <= nums[i] <= 10^9"],
        testCases: [
            { input: "[1,2,3,1]", expectedOutput: "true" },
            { input: "[1,2,3,4]", expectedOutput: "false" },
            { input: "[1,1,1,3,3,4,3,2,4,2]", expectedOutput: "true" },
            { input: "[1]", expectedOutput: "false" },
            { input: "[]", expectedOutput: "false" },
            { input: "[0,0]", expectedOutput: "true" },
            { input: "[-1,-1]", expectedOutput: "true" },
            { input: "[1,2,3,4,5]", expectedOutput: "false" },
            { input: "[5,5,5,5]", expectedOutput: "true" },
            { input: "[1,2,3,4,1]", expectedOutput: "true" },
        ],
        starterCode: {
            javascript: `function containsDuplicate(nums) {
  // your code here
}

/* DO NOT EDIT BELOW */
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
let input = [];
rl.on("line", (line) => input.push(line.trim()));
rl.on("close", () => {
  const nums = JSON.parse(input[0] || "[]");
  console.log(String(containsDuplicate(nums)));
});`,

            python: `def contains_duplicate(nums):
    # your code here
    pass

# DO NOT EDIT BELOW
import sys, json
nums = json.loads(sys.stdin.read().strip())
print(str(contains_duplicate(nums)).lower())`,

            cpp: `#include <bits/stdc++.h>
using namespace std;

bool containsDuplicate(vector<int>& nums) {
    // your code here
}

/* DO NOT EDIT BELOW */
int main() {
    string line; getline(cin, line);
    line.erase(remove(line.begin(), line.end(), '['), line.end());
    line.erase(remove(line.begin(), line.end(), ']'), line.end());
    vector<int> nums;
    if (!line.empty()) { stringstream ss(line); string tok; while (getline(ss, tok, ',')) nums.push_back(stoi(tok)); }
    cout << (containsDuplicate(nums) ? "true" : "false") << endl;
    return 0;
}`,

            java: `import java.util.*;

public class Main {
    public static boolean containsDuplicate(int[] nums) {
        // your code here
        return false;
    }

    /* DO NOT EDIT BELOW */
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim().replaceAll("[\\\\[\\\\]]", "");
        if (line.isEmpty()) { System.out.println(false); return; }
        String[] parts = line.split(",");
        int[] nums = new int[parts.length];
        for (int i = 0; i < parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());
        System.out.println(containsDuplicate(nums));
    }
}`,
        },
    },

    // ─────────────────────────────────────────────
    // 14. BINARY SEARCH
    // ─────────────────────────────────────────────
    {
        problemNumber: 14,
        title: "Binary Search",
        slug: "binary-search",
        difficulty: "Easy",
        tags: ["Binary Search", "Array"],
        description:
            "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, return its index. Otherwise, return -1.",
        examples: [
            { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4", explanation: "9 exists at index 4" },
            { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1", explanation: "2 does not exist" },
        ],
        constraints: [
            "1 <= nums.length <= 10^4",
            "All integers in nums are unique",
            "nums is sorted in ascending order",
        ],
        testCases: [
            { input: "[-1,0,3,5,9,12]\n9", expectedOutput: "4" },
            { input: "[-1,0,3,5,9,12]\n2", expectedOutput: "-1" },
            { input: "[1]\n1", expectedOutput: "0" },
            { input: "[1]\n2", expectedOutput: "-1" },
            { input: "[1,2,3,4,5]\n3", expectedOutput: "2" },
            { input: "[1,2,3,4,5]\n1", expectedOutput: "0" },
            { input: "[1,2,3,4,5]\n5", expectedOutput: "4" },
            { input: "[-5,-3,-1,0,2,4]\n-3", expectedOutput: "1" },
            { input: "[2,5,8,12,16,23]\n23", expectedOutput: "5" },
            { input: "[1,3,5,7,9,11]\n6", expectedOutput: "-1" },
        ],
        starterCode: {
            javascript: `function search(nums, target) {
  // your code here
}

/* DO NOT EDIT BELOW */
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
let input = [];
rl.on("line", (line) => input.push(line.trim()));
rl.on("close", () => {
  const nums = JSON.parse(input[0]);
  const target = parseInt(input[1]);
  console.log(String(search(nums, target)));
});`,

            python: `def search(nums, target):
    # your code here
    pass

# DO NOT EDIT BELOW
import sys, json
lines = sys.stdin.read().split("\\n")
nums = json.loads(lines[0])
target = int(lines[1])
print(search(nums, target))`,

            cpp: `#include <bits/stdc++.h>
using namespace std;

int search(vector<int>& nums, int target) {
    // your code here
}

/* DO NOT EDIT BELOW */
int main() {
    string line; int target;
    getline(cin, line); cin >> target;
    line.erase(remove(line.begin(), line.end(), '['), line.end());
    line.erase(remove(line.begin(), line.end(), ']'), line.end());
    vector<int> nums;
    stringstream ss(line); string tok;
    while (getline(ss, tok, ',')) nums.push_back(stoi(tok));
    cout << search(nums, target) << endl;
    return 0;
}`,

            java: `import java.util.*;

public class Main {
    public static int search(int[] nums, int target) {
        // your code here
        return -1;
    }

    /* DO NOT EDIT BELOW */
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim().replaceAll("[\\\\[\\\\]]", "");
        int target = Integer.parseInt(sc.nextLine().trim());
        String[] parts = line.split(",");
        int[] nums = new int[parts.length];
        for (int i = 0; i < parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());
        System.out.println(search(nums, target));
    }
}`,
        },
    },

    // ─────────────────────────────────────────────
    // 15. LINKED LIST CYCLE
    // ─────────────────────────────────────────────
    {
        problemNumber: 15,
        title: "Linked List Cycle",
        slug: "linked-list-cycle",
        difficulty: "Easy",
        tags: ["Linked List", "Two Pointers"],
        description:
            "Given head, the head of a linked list, determine if the linked list has a cycle in it.",
        examples: [
            { input: "head = [3,2,0,-4], pos = 1", output: "true", explanation: "Tail connects to node at index 1" },
            { input: "head = [1,2], pos = 0", output: "true", explanation: "Tail connects to node at index 0" },
        ],
        constraints: [
            "The number of the nodes in the list is in the range [0, 10^4]",
            "-10^5 <= Node.val <= 10^5",
        ],
        testCases: [
            { input: "[3,2,0,-4]\n1", expectedOutput: "true" },
            { input: "[1,2]\n0", expectedOutput: "true" },
            { input: "[1]\n-1", expectedOutput: "false" },
            { input: "[1,2,3,4,5]\n2", expectedOutput: "true" },
            { input: "[1,2,3,4,5]\n-1", expectedOutput: "false" },
            { input: "[-1]\n-1", expectedOutput: "false" },
            { input: "[1,2]\n-1", expectedOutput: "false" },
            { input: "[1,2,3]\n0", expectedOutput: "true" },
            { input: "[0,1]\n-1", expectedOutput: "false" },
            { input: "[1,2,3,4]\n3", expectedOutput: "true" },
        ],
        starterCode: {
            javascript: `class ListNode {
  constructor(val, next = null) { this.val = val; this.next = next; }
}

function hasCycle(head) {
  // your code here
}

/* DO NOT EDIT BELOW */
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
let input = [];
rl.on("line", (line) => input.push(line.trim()));
rl.on("close", () => {
  const arr = JSON.parse(input[0] || "[]");
  const pos = parseInt(input[1]);
  // Build list
  const nodes = arr.map(v => new ListNode(v));
  for (let i = 0; i < nodes.length - 1; i++) nodes[i].next = nodes[i + 1];
  if (pos >= 0) nodes[nodes.length - 1].next = nodes[pos];
  console.log(String(hasCycle(nodes[0] || null)));
});`,

            python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def has_cycle(head):
    # your code here
    pass

# DO NOT EDIT BELOW
import sys, json
lines = sys.stdin.read().split("\\n")
arr = json.loads(lines[0])
pos = int(lines[1])
nodes = [ListNode(v) for v in arr]
for i in range(len(nodes) - 1):
    nodes[i].next = nodes[i + 1]
if pos >= 0 and nodes:
    nodes[-1].next = nodes[pos]
print(str(has_cycle(nodes[0] if nodes else None)).lower())`,

            cpp: `#include <bits/stdc++.h>
using namespace std;

struct ListNode { int val; ListNode* next; ListNode(int v) : val(v), next(nullptr) {} };

bool hasCycle(ListNode* head) {
    // your code here
}

/* DO NOT EDIT BELOW */
int main() {
    string line; int pos;
    getline(cin, line); cin >> pos;
    line.erase(remove(line.begin(), line.end(), '['), line.end());
    line.erase(remove(line.begin(), line.end(), ']'), line.end());
    vector<ListNode*> nodes;
    if (!line.empty()) { stringstream ss(line); string tok; while (getline(ss, tok, ',')) nodes.push_back(new ListNode(stoi(tok))); }
    for (int i = 0; i + 1 < nodes.size(); i++) nodes[i]->next = nodes[i+1];
    if (pos >= 0 && !nodes.empty()) nodes.back()->next = nodes[pos];
    cout << (hasCycle(nodes.empty() ? nullptr : nodes[0]) ? "true" : "false") << endl;
    return 0;
}`,

            java: `import java.util.*;

public class Main {
    static class ListNode { int val; ListNode next; ListNode(int v) { val = v; } }

    public static boolean hasCycle(ListNode head) {
        // your code here
        return false;
    }

    /* DO NOT EDIT BELOW */
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim().replaceAll("[\\\\[\\\\]]", "");
        int pos = Integer.parseInt(sc.nextLine().trim());
        List<ListNode> nodes = new ArrayList<>();
        if (!line.isEmpty()) for (String s : line.split(",")) nodes.add(new ListNode(Integer.parseInt(s.trim())));
        for (int i = 0; i + 1 < nodes.size(); i++) nodes.get(i).next = nodes.get(i+1);
        if (pos >= 0 && !nodes.isEmpty()) nodes.get(nodes.size()-1).next = nodes.get(pos);
        System.out.println(hasCycle(nodes.isEmpty() ? null : nodes.get(0)));
    }
}`,
        },
    },
];

const seed = async () => {

    try {

        //db connect
        await dbConnection();

        //delete existing problemset
        await Problem.deleteMany();
        console.log('deleted the existing problems');


        //insert the problems now
        await Problem.insertMany(problems)
        console.log('problems seeded successfully');

        process.exit(0); // 0 = success, everything went fine

    } catch (err) {
        console.log('error while seeding problems', err.message);
        process.exit(1); // 1 = failure, something went wrong
    }

}
seed();