const measurementKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees celsius:")),
  };
  return measurement; // measurement objesini döndürüyoruz
};

const measurement = measurementKelvin(); // Fonksiyonun dönüş değerini değişkene atıyoruz
console.table(measurement);

const kelvin = measurement.value + 273;

export default measurementKelvin;
