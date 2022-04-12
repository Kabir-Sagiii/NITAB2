// var data = [10, 20, 30, 50, 78, 98];

// var filteredData = data.filter(function (element, index) {
//   return element > 20 && element < 78;
// });

// console.log(data);
// console.log(filteredData);

var Products = [
  {
    brandName: "Apple",
    productName: "Iphone 13",
    price: 90000,
  },
  {
    brandName: "Oneplus",
    productName: "oneplus 9",
    price: 70000,
  },
  {
    brandName: "Vivo",
    productName: "vivo A23",
    price: 50000,
  },
  {
    brandName: "Apple",
    productName: "Iphone 11",
    price: 60000,
  },
  {
    brandName: "Apple",
    productName: "Iphone 7+",
    price: 40000,
  },
];

// var filteredProducts = Products.filter(function (element) {
//   return element.brandName === "Apple";
// });

var filteredData = Products.filter(function (e, i) {
  return e.price > 50000;
});

// console.log(filteredProducts);
console.log(filteredData);
