/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }
  

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let total = this.root.val;

    function sumHelper(node) {
      // go through all the children for a Node
      for (let child of node.children) {
        // accumulate all values
        total += child.val;
        // if it has any children
        if (child.children.length > 0) {
          // recurse with the child as the root
          sumHelper(child);
        }
      }
    }

    sumHelper(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let total = this.root.val % 2 === 0 ? 1 : 0;

    function countEvensHelper(node) {
      // go through all the children for a Node
      for (let child of node.children) {
        // add 1 if child is even
        if (child.val % 2 === 0) total++;
        // if it has any children
        if (child.children.length > 0) {
          // recurse with the child as the root
          countEvensHelper(child);
        }
      }
    }

    countEvensHelper(this.root);
    return total;

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let total = this.root.val > lowerBound ? 1 : 0;

    function numGreaterHelper(node) {
      // go through all the children for a Node
      for (let child of node.children) {
        // accumulate all values
        if (child.val > lowerBound) total++;
        // if it has any children
        if (child.children.length > 0) {
          // recurse with the child as the root
          numGreaterHelper(child);
        }
      }
    }

    numGreaterHelper(this.root);
    return total;
  }

  find(val) {
    let toVisitStack = [this];

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      if (current.val === val) 
        return current;

      for (let child of current.children) 
        toVisitStack.push(child)
    }
  }

  findBFS(val) {
    let toVisitQueue = [this];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if (current.val === val) 
        return current;

      for (let child of current.children) 
        toVisitQueue.push(child)
    }
  }
  
}

module.exports = { Tree, TreeNode };

