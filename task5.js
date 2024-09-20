let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};
const keys = Object.keys(myObject);
for (let key of keys) {
  console.log("key :", key, "|", typeof key);
}
