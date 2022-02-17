import { Tree } from "components/BST";
import { getRandomInt } from "components/utls/getRandomInt";

import { useEffect } from "react";

const tree = new Tree();
const App = () => {
  useEffect(() => {
    window.addEventListener("keypress", (evt) => {
      if (evt.code === "Space") {
        const value = getRandomInt(-100, 100);
        tree.addValue(value);
        console.log(tree);
      }
    });
  }, []);

  return <div className="App">TEST</div>;
};

export default App;
