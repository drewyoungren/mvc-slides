{
  // const norm = (v) => Math.sqrt(v.X() * v.X() + v.Y() * v.Y());
  const b1 = JXG.JSXGraph.initBoard("box-vf", {
    boundingbox: [-5, 5, 5, -5],
    axis: true,
  });

  var fx = (x, y) => Math.sin(y);
  var fy = (x, y) => Math.cos(x);

  var field = b1.create("vectorfield", [
    [fx, fy], // Defining function
    [-5, 25, 5], // Horizontal mesh
    [-5, 20, 5], // Vertical mesh
    {
      scale: () => 0.5, // Scaling of vectors
    },
  ]);
}
