// var obj1 = {
//   name: "Nit",
//   address: {
//     city: {
//       area1: "Ameerpet", //     obj1.address.city.area2
//       area2: "Hitech City",
//     },
//   },
// };

// console.log(obj1.address.city.area2);

// var info = {
//   brand: {
//     models: ["Iphone 13", "Iphone 11", "Iphone 7+"], // info.brand.models[1]
//   },
// };

// console.log(info.brand.models[1]);

var student = {
  name: "Nit",
  address: {
    city: {
      Areas: [
        {
          colonyName: "C1", //     student.address.city.Areas[1].pincode
          pincode: "sector 46",
        },
        {
          colonyName: "C2",
          pincode: "sector 58",
        },
      ],
    },
  },
};

console.log(student.address.city.Areas[1].pincode);
