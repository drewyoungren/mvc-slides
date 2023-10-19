// jshint esversion: 6
{
  const board = JXG.JSXGraph.initBoard("lagbox", {
    boundingbox: [-5, 5, 5, -5],
    axis: true,
  });
  const a = board.create("point", [1.4, 2], {
    size: 12,
    color: "#EEEE00",
    name: "Sun",
  });
  /* console.log(a.X())
   */
  function mag(v) {
    return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2));
  }

  function f(t) {
    return [
      (1 + 0.6 * Math.cos(7 * t)) * 2 * Math.cos(t),
      (1 + 0.6 * Math.cos(5 * t)) * 2 * Math.sin(t),
    ];
  }

  function normal_to_f(t) {
    const vv = [
      -0.6 * Math.sin(5 * t) * 5 * 2 * Math.sin(t) +
        (1 + 0.6 * Math.cos(5 * t)) * 2 * Math.cos(t),
      0.6 * Math.sin(7 * t) * 7 * 2 * Math.cos(t) +
        (1 + 0.6 * Math.cos(7 * t)) * 2 * Math.sin(t),
    ];
    return [vv[0] / mag(vv), vv[1] / mag(vv)];
  }

  const L = 2 * Math.PI;

  const c = board.create(
    "curve",
    [
      (t) => {
        return f(t)[0];
      },
      (t) => {
        return f(t)[1];
      },
      0,
      L,
    ],
    { strokeWidth: 3 }
  );

  var g1 = board.create("glider", [a.X, a.Y, c], { color: "#2222FF", size: 6 });

  var arrowGroup = [];

  for (i = -4; i <= 4; i = i + 0.5) {
    for (j = -4; j <= 4; j += 0.5) {
      const pt1 = board.create("point", [i, j], { visible: false });
      const norm = mag([a.X() - pt1[0], a.Y() - pt1[1]]);
      const c1 = board.create("circle", [pt1, 0.4], { visible: false });
      const s1 = board.create("line", [pt1, a], { visible: false });
      const pt2 = board.create("intersection", [c1, s1, 0], { visible: false });
      arrowGroup.push(
        board.create("arrow", [pt1, pt2], { color: "red", strokeOpacity: 0.6 })
      );
    }
  }

  var i = 9;

  function dt(t, step = 0.1) {
    const df = f((t + step) % L);
    const xy = f(t);
    // console.log(df, xy);
    const vtoa = [a.X() - xy[0], a.Y() - xy[1]];
    return (
      ((df[0] - xy[0]) * vtoa[0] + (df[1] - xy[1]) * vtoa[1]) /
      Math.max(mag(vtoa), 1)
    );
  }

  function update_norm() {
    const vec = f(g1.position);
    const N = normal_to_f(g1.position);
    return [vec[0] + N[0] / 2, vec[1] + N[1] / 2];
  }
  const n = board.create("arrow", [g1, update_norm], { isDraggable: false });

  console.log(n);

  var timedId = setInterval(() => {
    const deltaT = dt(g1.position, 0.01);
    // deltaT = 0.1;
    g1.position = (g1.position + deltaT) % L;
    g1.prepareUpdate().update(true).updateRenderer();
    n.prepareUpdate().update(true).updateRenderer();

    // if (deltaT <= 0.005) {
    //   clearInterval(timedId);
    // }
  }, 100);

  // setTimeout(() => clearInterval(timedId), 10000);
}
