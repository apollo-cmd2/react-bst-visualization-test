import { Node } from "./BST";

interface IProps {
  node: Node | null;
}

const BinarySearchTree: React.FC<IProps> = ({ node }) => {
  function renderTree(node: Node) {
    return Object.entries(node).map(([key, value]) => {
      if (key === "left" && typeof value === "object") {
        if (value !== null) {
          return (
            <li key={value.val}>
              <BinarySearchTree node={value} />
            </li>
          );
        }
        if (value === null) {
          return null;
        }
      } else if (key === "right" && typeof value === "object") {
        if (value !== null) {
          return (
            <li key={value.val}>
              <BinarySearchTree node={value} />
            </li>
          );
        }
        if (value === null) {
          return null;
        }
      }
      // return null;
    });
  }

  return node ? (
    <>
      <span className="tf-nc">{node.val}</span>
      <ul>{renderTree(node)}</ul>
    </>
  ) : null;
};

export default BinarySearchTree;
