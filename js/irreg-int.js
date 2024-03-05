{
  const b1 = JXG.JSXGraph.initBoard("box-irreg", {
    boundingbox: [-0.5, 2.5, 4.5, -0.5],
    axis: true,
  });

  function f(x) {
    return (x * x * x) / 32;
  }
  function g(x) {
    return Math.sqrt(x);
  }

  function ginv(y) {
    return y * y;
  }

  function finv(y) {
    return Math.pow(32 * y, 1 / 3);
  }

  const f1 = b1.create("functiongraph", [f]);
  const g1 = b1.create("functiongraph", [g]);

  const sl = b1.create(
    "slider",
    [
      [0.5, 2],
      [1.5, 2],
      [0, 0.01, 4],
    ],
    {
      withLabel: false,
    }
  );

  const btn = b1.create("button", [
    0.5,
    2.25,
    "switch order",
    function () {
      btn.value = !btn.value;
    },
  ]);
  // btn.value = true;

  const p = b1.create(
    "point",
    [
      function () {
        return sl.Value();
      },
      function () {
        return g(sl.Value());
      },
    ],
    {
      withLabel: false,
      visible: false,
    }
  );

  const c1 = function () {
    const a = p.X();
    const b = p.Y();
    if (btn.value) {
      return [a - 0.04, b];
    } else {
      return [a, b - 0.04];
    }
  };
  const c2 = function () {
    const a = p.X();
    const b = p.Y();
    if (btn.value) {
      return [a + 0.04, b];
    } else {
      return [a, b + 0.04];
    }
  };
  const c3 = function () {
    const a = p.X();
    const b = p.Y();
    if (btn.value) {
      return [a + 0.04, f(a)];
    } else {
      return [finv(b), b + 0.04];
    }
  };
  const c4 = function () {
    const a = p.X();
    const b = p.Y();
    if (btn.value) {
      return [a - 0.04, f(a)];
    } else {
      return [finv(b), b - 0.04];
    }
  };

  const cc1 = b1.create("polygon", [c1, c2, c3, c4], {
    vertices: { withLabel: false, visible: false },
  });

  const t1 = b1.create(
    "text",
    [
      1.8,
      1.6,
      () => {
        if (!btn.value) {
          return "x = y^2";
        } else {
          return "y = \\sqrt{x}";
        }
      },
    ],
    {
      // display: "html",
      useKatex: true,
    }
  );

  // t1.updateRenderer();

  const t2 = b1.create(
    "text",
    [
      3.5,
      1,
      () => {
        if (!btn.value) {
          return "x = \\sqrt[3]{32 y}";
        } else {
          return "y = \\frac{x^3}{32}";
        }
      },
    ],
    {
      display: "html",
      useKatex: true,
    }
  );
  setTimeout(() => {
    btn.value = true;
    b1.update();
  }, 1000);
}
