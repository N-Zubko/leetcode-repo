/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  return traverse([[root]], 0);
};

function traverse (result, level) {
  var current = result[level];
  var next = [];

  for (let i = 0; i < current.length; i++) {
      
    if (current[i].left) next.push(current[i].left);
    if (current[i].right) next.push(current[i].right);
    current[i] = current[i].val;
      
  }

  if (next.length) {
    result.push(next);
    traverse(result, level + 1);
  }

  return result;
};