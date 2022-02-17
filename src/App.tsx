import { Node, Tree } from "components/BST";
import { getRandomInt } from "utls/getRandomInt";

import { useEffect } from "react";
import { useState } from "react";
import BinarySearchTree from "./components/BinarySearchTree";

const App = () => {
  const [root, setRoot] = useState<Node | null>(null);

  useEffect(() => {
    const tree = new Tree();
    const listener = (evt: KeyboardEvent) => {
      if (evt.code === "Space") {
        const value = getRandomInt(-100, 100);
        tree.addValue(value);
        const bst = tree.root as Node;
        setRoot((prev) => ({ ...prev, ...bst }));
      }
    };
    window.addEventListener("keypress", listener);

    return () => {
      window.removeEventListener("keypress", listener);
    };
  }, []);

  return (
    <div className="container">
      <div className="tf-tree">
        <ul>
          <li>
            <BinarySearchTree node={root} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
