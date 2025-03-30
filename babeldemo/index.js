import babel from "@babel/core@7.26.10";
import fs from "fs";
const code = fs.readFileSync("./app.jsx", "utf-8");

const transfromFunction = ({ type: t }) => {
  return {
    name: "transform-arrow-function",
    visitor: {
      ArrowFunctionExpression(path) {
        console.log(path.node);
        const node = path.node;
        t.functionExpression(
          node.id,
          node.params,
          node.body,
          node.generator,
          node.async
        );
      },
    },
  };
};

const res = babel.transform(code, {
  plugins: [transfromFunction],
});

console.log(res.code);
