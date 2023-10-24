{
  const b1 = JXG.JSXGraph.initBoard("box-def-int", {
    boundingbox: [-1, 2, 3, -2],
    axis: true,
  });

  function f(x) {
    return 1 - x * x + (x * x * x) / 4;
  }

  const f1 = b1.create("functiongraph", [f]);

  var a = b1.create(
    "slider",
    [
      [-0.5, -1.3],
      [1, -1.3],
      [1, 3, 100],
    ],
    { name: "n", snapWidth: 1 }
  );
  var b = b1.create(
    "slider",
    [
      [-0.5, -1.5],
      [1, -1.5],
      [0, 0, 1],
    ],
    { name: "s" }
  );

  function stepper(x) {
    const deltaN = 2 / a.Value();
    const n = Math.floor(x / deltaN);
    return f((n + b.Value()) * deltaN);
  }

  const g1 = b1.create("functiongraph", [stepper]);

  // b1.create("integral", [[0, 2], f1], { fillColor: "blue", fillOpacity: 0.3 });
  b1.create("integral", [[0, 2], g1], { fillColor: "purple" });

  // function getRiemannPoints() {
  //   const pts = [];
  //   const deltaN = 2 / a.Value();
  //   for (let index = 0; index < a.Value(); index++) {
  //     pts.push([index * deltaN, 0]);
  //     pts.push([index * deltaN, f(index * deltaN)]);
  //     pts.push([(index + 1) * deltaN, f((index + 1) * deltaN)]);
  //     // pts.push([(index + 1) * deltaN, f((index + 1)*deltaN)])
  //   }
  //   pts.push([2, 0]);
  //   // console.log(pts);
  //   return [
  //     [1, 1],
  //     [2, 0],
  //     [0, 0],
  //   ];
  // }

  // b1.create("polygon", getRiemannPoints, {
  //   fillColor: "blue",
  //   fillOpacity: 0.3,
  // });
}
