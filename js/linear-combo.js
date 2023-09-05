const b1 = JXG.JSXGraph.initBoard('box-lin-combo', {
  boundingbox: [-5, 5, 5, -5],
  axis: true,
});

var v = b1.create('point', [2, 2], {
  size: 3,
  name: 'v',
  color: 'red',
  opacity: 0,
});
var w = b1.create('point', [-2, 1], {
  size: 3,
  name: 'w',
  color: 'blue',
  opacity: 0,
});
var va = b1.create('line', [[0, 0], v], {
  straightFirst: false,
  straightLast: false,
  lastArrow: true,
  isDraggable: false,
  color: 'red',
  opacity: 0.3,
});
var wa = b1.create('line', [[0, 0], w], {
  straightFirst: false,
  straightLast: false,
  lastArrow: true,
  isDraggable: false,
  color: 'blue',
  opacity: 0.3,
});
// const vb = b1.create(
//   'line',
//   [
//     [0, 0],
//     ['a * X(v)', 'a * Y(v)'],
//   ],
//   {
//     straightFirst: false,
//     straightLast: false,
//     lastArrow: true,
//     isDraggable: false,
//     color: 'red',
//   }
// );
// var wb = b1.create(
//   'line',
//   [
//     [0, 0],
//     ['b * X(w)', 'b * Y(w)'],
//   ],
//   {
//     straightFirst: false,
//     straightLast: false,
//     lastArrow: true,
//     isDraggable: false,
//     color: 'blue',
//   }
// );

var a = b1.create(
  'slider',
  [
    [-2, -3],
    [1, -3],
    [-2, 1, 2],
  ],
  { name: 'a' }
);
var b = b1.create(
  'slider',
  [
    [-2, -3.5],
    [1, -3.5],
    [-2, 1, 2],
  ],
  { name: 'b' }
);

var vc = b1.create(
  'line',
  [
    [0, 0],
    ['a * X(v) + b * X(w)', 'a * Y(v) + b * Y(w)'],
  ],
  {
    visible: true,
    color: 'purple',
    straightFirst: false,
    straightLast: false,
    lastArrow: true,
    isDraggable: false,
    withLabel: true,
    label: {
      color: 'purple',
    },
    name: 'a v + b w',
  }
);
var vb = b1.create(
  'line',
  [
    [0, 0],
    ['a * X(v)', 'a * Y(v)'],
  ],
  {
    visible: true,
    color: 'red',
    straightFirst: false,
    straightLast: false,
    lastArrow: true,
    isDraggable: false,
    withLabel: true,
    name: 'a v',
  }
);
var vb2 = b1.create(
  'line',
  [
    ['b * X(w)', 'b * Y(w)'],
    ['a * X(v) + b * X(w)', 'a * Y(v) + b * Y(w)'],
  ],
  {
    visible: true,
    color: 'red',
    straightFirst: false,
    straightLast: false,
    lastArrow: true,
    isDraggable: false,
    withLabel: false,
    dash: 2,
  }
);
var wb2 = b1.create(
  'line',
  [
    ['a * X(v)', 'a * Y(v)'],
    ['a * X(v) + b * X(w)', 'a * Y(v) + b * Y(w)'],
  ],
  {
    visible: true,
    color: 'blue',
    straightFirst: false,
    straightLast: false,
    lastArrow: true,
    isDraggable: false,
    withLabel: false,
    dash: 2,
  }
);
var wb = b1.create(
  'line',
  [
    [0, 0],
    ['b * X(w)', 'b * Y(w)'],
  ],
  {
    visible: true,
    color: 'blue',
    straightFirst: false,
    straightLast: false,
    lastArrow: true,
    isDraggable: false,
    withLabel: true,
    name: 'b w',
  }
);
