{
  const board = JXG.JSXGraph.initBoard('box-diffy', {
    boundingbox: [-3, 5, 5, -3],
    axis: true,
  });

  // Macro function plotter
  function addCurve(board, func, atts) {
    var f = board.create('functiongraph', [func], atts);
    return f;
  }

  // Simplified plotting of function
  function plot(func, atts) {
    if (atts == null) {
      return addCurve(board, func, { strokewidth: 2 });
    } else {
      return addCurve(board, func, atts);
    }
  }
  const butt = board.create('button', [
    -2,
    4,
    'counter/example',
    function () {
      butt.value = !butt.value;
      if (cube) {
        console.log(cube);
        cube.Y = butt.value
          ? (x) => (x < 1 ? x * x * x : x / 2 + 1 / 2)
          : (x) => x * x * x;
      }
    },
  ]);

  // Set initial value for the button
  if (!JXG.exists(butt.value)) {
    butt.value = false;
  }

  var cube = board.create('functiongraph', [(x) => x * x * x], {
    strokewidth: 2,
  });
}
