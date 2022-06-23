// ----- variables ----- //

let isSpinning = true;
let giftString = 1;
let stringColor = '#FFFFFF';

// ----- model ----- //

var illo = new Zdog.Illustration({
  element: '.illo',
  zoom: 4,
  rotate: { x: -Zdog.TAU/4, y: -Zdog.TAU/3 },
  dragRotate: true,
  onDragStart: function() {
    isSpinning = false;
  },
});

let box = new Zdog.RoundedRect({
  addTo: illo,
  width: 48,
  height: 32,
  cornerRadius: 1,
  stroke: giftString,
  color: stringColor,
});

box.copy({
  height: 48,
  rotate: { x: -Zdog.TAU/4 },
});

box.copy({
  rotate: { y: -Zdog.TAU/4 },
});

let anchor = new Zdog.Anchor({
  addTo: illo,
  translate: { x: 0, y: -16, z:0 },
  rotate: { y: Zdog.TAU/5 },
});

new Zdog.Ellipse({
  addTo: anchor,
  diameter: 3,
  stroke: giftString,
  color:stringColor,
  translate: {x: 1, y: -1, z: -1 },
  rotate: { x: Zdog.TAU/4 },
});

let loop = new Zdog.Shape({
  addTo: anchor,
  path: [
    { x: 0, y: 0 },   // start
    { bezier: [
      { x:  30, y: -20, z:-30 }, // start control point
      { x:  30, y: -15, z:30 }, // end control point
      { x:  0, y:  0 }, // end point
    ]},
  ],
  closed: false,
  stroke: giftString,
  color: stringColor
});

loop.copy({
  rotate: { y: -Zdog.TAU/3 },
})

loopEnd = new Zdog.Shape({
  addTo: anchor,
  path: [
    { x: 0, y: 0 },   // start
    { bezier: [
      { x:  10, y: -10, z:-20 }, // start control point
      { x:  10, y: -5, z:20 }, // end control point
      { x:  15, y:  -10, z:10 }, // end point
    ]},
  ],
  closed: false,
  stroke: giftString,
  color: stringColor,
  rotate: { y: Zdog.TAU/6 },
});

loopEnd.copy({
  path: [
    { x: 0, y: 0 },   // start
    { bezier: [
      { x:  -10, y: -15, z:-20 }, // start control point
      { x:  -10, y: -5, z:10 }, // end control point
      { x:  -15, y:  -3, z:-12 }, // end point
    ]},
  ],
  rotate: { y: -Zdog.TAU/8 },
});

let sticker = new Zdog.Ellipse({
  addTo: illo,
  diameter: 9,
  stroke: giftString,
  color:stringColor,
  translate: {x: -11, y: -16, z: 16 },
  rotate: { x: Zdog.TAU/4 },
});

let tag = new Zdog.Rect({
  addTo: illo,
  width: 13,
  height: 9,
  stroke: giftString,
  color: stringColor, 
  translate: {x: 14, y: -16, z: -14 },
  rotate: { x: -Zdog.TAU/4, z: -Zdog.TAU/6 },
});

textline = new Zdog.Shape({
  addTo: tag,
  path: [
    { x: -4, y: 1 }, // start at 1st point
    { x: 3, y: 1 }, // line to 2nd point
  ],
  stroke: giftString,
  color: stringColor,
});

textline.copy({
  path: [
    { x: -4, y: -1 }, // start at 1st point
    { x: 1, y: -1 }, // line to 2nd point
  ],
});


// ----- animate ----- //

function animate() {
    if ( isSpinning ) {
      illo.rotate.x += 0.001;
      illo.rotate.y -= 0.0005;
      }
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();