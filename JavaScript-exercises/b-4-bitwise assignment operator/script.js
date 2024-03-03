var x = 5; // 0101
var y = 3; // 0011

x &= y; // x = 0001

// Bitsel VEYA ve atama
x |= y; // x = 0111

// Bitsel ÖZEL VEYA ve atama
x ^= y; // x = 0110

// Sola kaydırma ve atama
x <<= 1; // x = 1010

// Sağa kaydırma ve atama
x >>= 1; // x = 0010

// Sağa kaydırma (işareti koru) ve atama
x >>>= 1; // x = 0010