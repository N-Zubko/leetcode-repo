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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let result = [];
  traverse(root, result);
  return result;
};

function traverse(root, result) {
    //base case
  if (!root) return;
  result.push(root.val);
    //recursion
  traverse(root.left, result);
  traverse(root.right, result);
};