function faktoriyel(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * faktoriyel(n - 1);
  }
}

console.log(faktoriyel(5)); // 120 yazdırır

function carpma(x, y) {
  if (y === 0) {
    return 0;
  } else {
    return x + carpma(x, y - 1);
  }
}

console.log(carpma(5, 3)); // 15 yazdırır
