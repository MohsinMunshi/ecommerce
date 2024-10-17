// import { readFileSync } from "fs";
// const fs = require('fs');
//
// const users = readFileSync('./users.json', 'utf8');
// const cart = readFileSync('./cart.json', 'utf8');
// const products = readFileSync('./products.json', 'utf8');
//
// export const getUsersList = () => {
//     return JSON.parse(users);
// }
//
// export const getCartList = () => {
//     return JSON.parse(cart);
// }
//
// export const getProductsList = () => {
//     return JSON.parse(products);
// }
//
//
// // Write in these files. You can use the JSON.stringify method to convert the data to a string.
//
// export const writeUsersList = async (data) => {
//     await fs.writeFileSync('./users.json', JSON.stringify(data));
// }
//
// export const writeCartList = async (data) => {
//     await fs.writeFileSync('./cart.json', JSON.stringify(data));
// }
//
// export const writeProductsList = async (data) => {
//     await fs.writeFileSync('./products.json', JSON.stringify(data));
// }