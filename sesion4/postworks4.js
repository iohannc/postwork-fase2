// Postwork - Sesión 4

// 1. Función deepEqual()
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  suma = 0;
  if (typeof obj1 == "object" && typeof obj2 == "object") {
    if (Object.keys(obj1).length == Object.keys(obj2).length) {
      for (let clave of Object.keys(obj1)) {
        if (
          Object.keys(obj2).includes(clave) &&
          deepEqual(Object.keys(obj1)[clave], Object.keys(obj2)[clave])
        ) {
          suma += 1;
        } else return false;
      }
      if (Object.keys(obj1).length == suma) {
        return true;
      } else return false;
    } else return false
  } else {
    return false;
  }
}
const john = {
  firstName: "John",
  lastName: "Doe",
};

console.log("Test 1:", deepEqual(1, 1)); // true
console.log("Test 2:", deepEqual(1, "1")); // false
console.log("Test 3:", deepEqual(john, john)); // true
console.log("Test 4:", deepEqual(john, { firstName: "John", lastName: "Doe" })); // true
console.log("Test 5:", deepEqual(john, { firstName: "John" })); // false

// 2. Función chunk()
function chunk(array, size) {
  let chunkArray = [];
  let newArray = [];
  let aux = 0;
  while (true) {
    while (chunkArray.length < size) {
      if (array[aux]) {
        chunkArray.push(array[aux]);
        aux += 1;
      }
      else {
        if (!chunkArray.length){
        return newArray;
        }
        else {
          newArray.push(chunkArray);
          return newArray;
        }
      }
    }
    newArray.push(chunkArray);
    chunkArray = [];
  }
}

const data = [1, 2, 3, 4, 5, 6, 7, 8];

console.log('Test 1:', chunk(data, 1)); // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)); // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]


// 3. Función frequency()
function frequency(string) {
  let set1 = [];
  for (let i = 0; i < string.length; i++) {
    if (set1.includes(string[i])) continue;
    else {
      let suma = 0;
      for (let j = 0; j < string.length; j++) {
        if (string[j] == string[i]) {
          suma += 1;
        }
      }
      set1.push([string[i], suma]);
    }
  }
  set1.sort();
  dic1 = {};
  for (let clave of set1) {
    dic1[clave[0]] = clave[1];
  }
  return dic1;
}

console.log("Test 1:", frequency("cccbbbaaa")); // {a: 3, b: 3, c: 3}
console.log("Test 2:", frequency("www.bedu.org")); // {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log("Test 3:", frequency("john.doe@domain.com")); // {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}
