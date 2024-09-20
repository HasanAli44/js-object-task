const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
// Object.defineProperty(car, "passenger capacity", { value: "5" });
// console.log(car);
car["passenger capacity"] = 5;
console.log(car);
