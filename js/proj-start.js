{
  const b1 = JXG.JSXGraph.initBoard('box-proj-start', {
    boundingbox: [-1, 3, 5, -1],
    axis: true,
  });

  const projab = function (b, a) {
    const [ax, ay] = [a.X(), a.Y()];
    const [bx, by] = [b.X(), b.Y()];

    const c = (ax * bx + ay * by) / (bx * bx + by * by);
    return [c * bx, c * by];
  };

  const butt = b1.create('button', [
    -0.5,
    2.5,
    'error',
    function () {
      butt.value = !butt.value;
    },
  ]);

  // Set initial value for the button
  if (!JXG.exists(butt.value)) {
    butt.value = false;
  }

  const c = b1.create(
    'slider',
    [
      [0, -0.25],
      [3, -0.25],
      [-1, 1, 4],
    ],
    {
      name: 'c',
    }
  );

  const v = b1.create('point', [3, 1], { size: 3, name: 'v', opacity: 0.4 });
  const w = b1.create('point', [() => c.Value(), () => c.Value()], {
    size: 3,
    opacity: 0,
    name: 'c w',
  });
  b1.create('angle', [[0, 0], w, v], {
    visible: () => butt.value,
    radius: 0.15,
    withLabel: false,
    orthoSensitivity: 3,
  });
  const va = b1.create('line', [[0, 0], v], {
    straightFirst: false,
    straightLast: false,
    lastArrow: true,
    isDraggable: false,
  });
  const wa = b1.create('line', [[0, 0], w], {
    straightFirst: false,
    straightLast: false,
    lastArrow: true,
    isDraggable: false,
  });
  const wbase = b1.create(
    'line',
    [
      [0, 0],
      [1, 1],
    ],
    {
      straightFirst: false,
      straightLast: false,
      lastArrow: true,
      isDraggable: false,
      color: 'blue',
      name: 'w',
    }
  );

  const err = b1.create('line', [w, v], {
    visible: () => butt.value,
    dash: 2,
    color: 'gray',
    straightFirst: false,
    straightLast: false,
    lastArrow: true,
    isDraggable: false,
    withLabel: true,
    label: {
      color: 'green',
    },
    name: 'err',
  });
  var wdrop = b1.create(
    'line',
    [
      v,
      () => {
        return projab(w, v);
      },
    ],
    {
      visible: () => butt.value,
      color: 'gray',
      opacity: 0.3,
      straightFirst: false,
      straightLast: false,
      lastArrow: false,
      isDraggable: false,
      dash: 2,
    }
  );
  // var vdrop = b1.create(
  //   'line',
  //   [
  //     w,
  //     () => {
  //       return projab(v, w);
  //     },
  //   ],
  //   {
  //     visible: () => butt.value,
  //     color: 'gray',
  //     opacity: 0.3,
  //     straightFirst: false,
  //     straightLast: false,
  //     lastArrow: false,
  //     isDraggable: false,
  //     dash: 2,
  //   }
  // );
}
