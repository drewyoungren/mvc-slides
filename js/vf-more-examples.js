{
  // const norm = (v) => Math.sqrt(v.X() * v.X() + v.Y() * v.Y());
  const b1 = JXG.JSXGraph.initBoard("box-vf-more", {
    boundingbox: [-5, 5, 5, -5],
    axis: true,
  });

  var P = b1.create("input", [-4, -3, "-y", "P(x)="], {
    cssStyle: "width: 100px",
  });
  var Q = b1.create("input", [-4, -4, "x", "Q(x)="], {
    cssStyle: "width: 100px",
  });

  fx = "-y";
  fy = "x";

  var field = b1.create("vectorfield", [
    [P.Value(), Q.Value()], // Defining function
    [-5, 25, 5], // Horizontal mesh
    [-5, 20, 5], // Vertical mesh
  ]);

  P.rendNodeInput.addEventListener("change", function () {
    field.setF([(x, y) => x, (x, y) => y]);
    console.log(field);
    b1.update();
  });

  console.log(field);
}
