# Dolami-shop
# React Project
## References
const getAncestors = (target, children, ancestors = []) => {
  for (let node of children) {
    if (node.id === target) {
      return ancestors.concat(node.id);
    }
    const found = getAncestors(target, node.children, ancestors.concat(node.id));
    if (found) {
      return found;
    }
  }
  return undefined;
};
 
https://stackoverflow.com/questions/72401950/get-all-parents-for-object-in-nested-array-js