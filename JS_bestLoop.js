var arr = new Array(11111111).fill().map((_, n) => n);
var benches = [
  [
    "++for-loop",
    () => {
      for (var a = 0, l = arr.length; a < l; ++a) var b = arr[a] + 1;
    }
  ],
  [
    "for-loop++",
    () => {
      for (var a = 0, l = arr.length; a < l; a++) var b = arr[a] + 1;
    }
  ],
  [
    "for-loop",
    () => {
      for (var a = 0; a < arr.length; ++a) var b = arr[a] + 1;
    }
  ],
  [
    "for-loop ext",
    () => {
      const l = arr.length;

      for (var a = 0; a < l; ++a) var b = arr[a] + 1;
    }
  ],
  [
    "reverse for-loop",
    () => {
      for (var a = arr.length - 1; a >= 0; --a) var b = arr[a] + 1;
    }
  ],
  [
    "while-loop",
    () => {
      var a = 0,
        l = arr.length;
      while (a < l) {
        var b = arr[a] + 1;
        ++a;
      }
    }
  ],
  [
    "reverse-do-while-loop",
    () => {
      var a = arr.length - 1; // CAREFUL
      do {
        var b = arr[a] + 1;
      } while (a--);
    }
  ],
  [
    "forEach",
    () => {
      arr.forEach(a => {
        var b = a + 1;
      });
    }
  ],
  [
    "for of",
    () => {
      for (var a of arr) {
        var b = a + 1;
      }
    }
  ],
  [
    "hack",
    () => {
      var i = 0;
      var r = arr.length % 8;
      var n = (arr.length - r) / 8;
      if (r > 0)
        do {
          var b = arr[i++] + 1;
        } while (--r);
      if (n > 0)
        do {
          var b = arr[i] + 1;
          var c = arr[i + 1] + 1;
          var d = arr[i + 2] + 1;
          var e = arr[i + 3] + 1;
          var f = arr[i + 4] + 1;
          var g = arr[i + 5] + 1;
          var h = arr[i + 6] + 1;
          var k = arr[i + 7] + 1;
          i = --n >>> 3;
        } while (n);
    }
  ],
  [
    "hack negative",
    () => {
      var r = arr.length % 8;
      var n = (arr.length - r) / 8; ///Math.floor(arr.length / 8);
      var i = arr.length; // -1;

      while (r) {
        var b = arr[--i] + 1;
        --r;
      }

      while (n) {
        var b = arr[i] + 1;
        var c = arr[i - 1] + 1;
        var d = arr[i - 2] + 1;
        var e = arr[i - 3] + 1;
        var f = arr[i - 4] + 1;
        var g = arr[i - 5] + 1;
        var h = arr[i - 6] + 1;
        var j = arr[i - 7] + 1;
        i = --n >>> 3;
      }
    }
  ]
];

function bench(title, f) {
  var t0 = console.time(title);
  var res = f();
  console.timeEnd(title);
}

benches.map(a => [a[0], bench(...a)]);
