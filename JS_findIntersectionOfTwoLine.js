// a & b are vector of line1, c & d are vector of line2
let intersect = (a, b, c, d) => {
  let x1 = a.x,
    y1 = a.y,
    x2 = b.x,
    y2 = b.y,
    x3 = c.x,
    y3 = c.y,
    x4 = d.x,
    y4 = d.y;

  var x = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
  var y = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));

  if (isNaN(x * 1) || isNaN(y * 1)) {
    return false;
  } else {
    if (x1 >= x2) {
      if (!(x2 <= x && x <= x1)) {
        return false;
      }
    } else {
      if (!(x1 <= x && x <= x2)) {
        return false;
      }
    }
    if (y1 >= y2) {
      if (!(y2 <= y && y <= y1)) {
        return false;
      }
    } else {
      if (!(y1 <= y && y <= y2)) {
        return false;
      }
    }
    if (x3 >= x4) {
      if (!(x4 <= x && x <= x3)) {
        return false;
      }
    } else {
      if (!(x3 <= x && x <= x4)) {
        return false;
      }
    }
    if (y3 >= y4) {
      if (!(y4 <= y && y <= y3)) {
        return false;
      }
    } else {
      if (!(y3 <= y && y <= y4)) {
        return false;
      }
    }
  }
  // return vector intersection
  return { x: x, y: y };
};
