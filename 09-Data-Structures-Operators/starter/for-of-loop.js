const menuItems = [
  'Firecracker Wings',
  'Truffle Fries',
  'Sunset Burger',
  'Crispy Calamari',
];

for (item of menuItems.entries()) {
  const [index, food] = item;
  console.log(`${index} : ${food}`);
}
