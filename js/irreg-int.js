{
  const b1 = JXG.JSXGraph.initBoard("box-irreg", {
    boundingbox: [-0.5, 2.5, 4.5, -0.5],
    axis: true,
  });

  function f(x) {
    return (x * x * x) / 32;
  }
  function g(x) {
    return Math.sqrt(x);
  }

  const f1 = b1.create("functiongraph", [f]);
  const g1 = b1.create("functiongraph", [g]);
}
