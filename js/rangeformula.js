{
  const b1 = JXG.JSXGraph.initBoard("box-range-form", {
    boundingbox: [-0.5, 5, 7.75, -0.5],
    axis: true,
  });

  var v = b1.create("point", [2, 2], { size: 3, name: "v", opacity: 0.4 });
  var va = b1.create("line", [[0, 0], v], {
    straightFirst: false,
    straightLast: false,
    lastArrow: true,
    isDraggable: false,
  });

  var c = b1.create("point", [1, 0], {
    isDraggable: false,
    label: false,
    visible: false,
  });

  va.isDraggable = false;
  var ff = b1.create("functiongraph", [
    (x) => (x * (2 * v.X() * v.Y() - x)) / (2 * v.X() * v.X()),
  ]);
  var angl = b1.create("angle", [c, [0, 0], v]);
}
