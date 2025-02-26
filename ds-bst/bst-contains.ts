import { BinarySearchTree, TreeNode } from './lib/bst';

/**
 * Returns true iff `value` is in the BST.
 */
export function contains(bst: BinarySearchTree, value: number): boolean {
  return containsRecursive(bst.root, value);
}

function containsRecursive(node: TreeNode | undefined, value: number): boolean {
  if (!node) return false;
  else if (node.value === value) return true;
  else if (node.value > value) return containsRecursive(node.left, value);
  else if (node.value < value) return containsRecursive(node.right, value);
  else return false;
}
