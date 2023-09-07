{
  const b1 = JXG.JSXGraph.initBoard('box-lin-combo', {
    boundingbox: [-5, 5, 5, -5],
    axis: true,
  });

  const projab = function (b, a) {
    const [ax, ay] = [a.X(), a.Y()];
    const [bx, by] = [b.X(), b.Y()];

    const c = (ax * bx + ay * by) / (bx * bx + by * by);
    return [c * bx, c * by];
  };

  const butt = b1.create('button', [
    -4,
    4,
    'Change base',
    function () {
      butt.value = !butt.value;
    },
  ]);

  // Set initial value for the button
  if (!JXG.exists(butt.value)) {
    butt.value = false;
  }

  var v = b1.create('point', [2, 2], { size: 3, name: 'v', opacity: 0.4 });
  var w = b1.create('point', [-2, 1], { size: 3, name: 'w', opacity: 0.4 });
  var va = b1.create('line', [[0, 0], v], {
    straightFirst: false,
    straightLast: false,
    lastArrow: true,
    isDraggable: false,
  });
  var wa = b1.create('line', [[0, 0], w], {
    straightFirst: false,
    straightLast: false,
    lastArrow: true,
    isDraggable: false,
  });
  var vc = b1.create(
    'line',
    [
      [0, 0],
      () => {
        return projab(v, w);
      },
    ],
    {
      visible: () => butt.value,
      color: 'orange',
      straightFirst: false,
      straightLast: false,
      lastArrow: true,
      isDraggable: false,
      withLabel: true,
      label: {
        color: 'orange',
      },
      name: 'proj_v w',
    }
  );
  var wc = b1.create(
    'line',
    [
      [0, 0],
      () => {
        return projab(w, v);
      },
    ],
    {
      visible: () => !butt.value,
      color: 'green',
      straightFirst: false,
      straightLast: false,
      lastArrow: true,
      isDraggable: false,
      withLabel: true,
      label: {
        color: 'green',
      },
      name: 'proj_w v',
    }
  );
  var wdrop = b1.create(
    'line',
    [
      v,
      () => {
        return projab(w, v);
      },
    ],
    {
      visible: () => !butt.value,
      color: 'gray',
      opacity: 0.3,
      straightFirst: false,
      straightLast: false,
      lastArrow: false,
      isDraggable: false,
      dash: 2,
    }
  );
  var vdrop = b1.create(
    'line',
    [
      w,
      () => {
        return projab(v, w);
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

  va.isDraggable = false;
  wa.isDraggable = false;
  vc.isDraggable = false;
  wc.isDraggable = false;

  // var compwv = JXG.Math.innerProduct(v, w) ;
  var t1 = b1.create(
    'text',
    [
      -4,
      -2,
      () => {
        return (
          'comp_w v = ' +
          (
            (v.X() * w.X() + v.Y() * w.Y()) /
            Math.sqrt(w.X() * w.X() + w.Y() * w.Y())
          ).toFixed(2)
        );
      },
    ],
    {
      visible: () => !butt.value,
      color: 'green',
      fontsize: 20,
    }
  );
  var t2 = b1.create(
    'text',
    [
      -4,
      -2,
      () => {
        return (
          'comp_v w = ' +
          (
            (v.X() * w.X() + v.Y() * w.Y()) /
            Math.sqrt(v.X() * v.X() + v.Y() * v.Y())
          ).toFixed(2)
        );
      },
    ],
    {
      visible: () => butt.value,
      color: 'orange',
      fontsize: 20,
    }
  );
}
