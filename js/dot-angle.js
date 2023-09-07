{
  const norm = (v) => Math.sqrt(v.X() * v.X() + v.Y() * v.Y());
  const b1 = JXG.JSXGraph.initBoard('box-dot-angle', {
    boundingbox: [-5, 5, 5, -5],
    axis: true,
  });

  const c1 = b1.create(
    'circle',
    [
      [0, 0],
      [3, 0],
    ],
    {
      visible: false,
    }
  );

  const v = b1.create('point', [2, 2], {
    size: 3,
    name: 'v',
    color: 'red',
    opacity: 0,
    isDraggable: true,
  });

  const b = b1.create(
    'slider',
    [
      [-2, -3.5],
      [1, -3.5],
      [0, Math.PI / 6, 2 * Math.PI],
    ],
    { name: 'θ' }
  );
  const w = b1.create(
    'point',
    [
      () =>
        (2 / norm(v)) *
        (Math.cos(b.Value()) * v.X() - Math.sin(b.Value()) * v.Y()),
      () =>
        (2 / norm(v)) *
        (Math.cos(b.Value()) * v.Y() + Math.sin(b.Value()) * v.X()),
    ],
    {
      size: 3,
      name: 'w',
      color: 'blue',
      opacity: 0,
      isDraggable: false,
    }
  );
  var va = b1.create(
    'line',
    [
      [0, 0],
      [() => (v.X() / norm(v)) * 3, () => (v.Y() / norm(v)) * 3],
    ],
    {
      straightFirst: false,
      straightLast: false,
      lastArrow: true,
      isDraggable: false,
      color: 'red',
      opacity: 0.3,
    }
  );
  var wa = b1.create('line', [[0, 0], w], {
    straightFirst: false,
    straightLast: false,
    lastArrow: true,
    isDraggable: false,
    color: 'blue',
    opacity: 0.3,
  });
  const a = b1.create('angle', [[6, 0], [0, 0], v], {
    name: '$\\alpha$',
    color: 'blue',
    radius: 0.4,
  });
  const th = b1.create('angle', [v, [0, 0], w], {
    name: '$\\theta$',
    color: 'red',
    radius: 0.5,
  });
  b1.on('update', function () {
    const el = document.getElementById('dot-output');
    const s = ' ' + Math.round(15 * 100 * Math.cos(b.Value())) / 100;
    // console.log(katex.render);
    el.innerHTML = s;
  });
}
