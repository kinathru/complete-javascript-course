const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

rest1.numGuests = rest1.numGuests || 10; // 10
rest2.numGuests = rest2.numGuests || 10; // 10

rest1.numGuests ||= 10; // 10
rest2.numGuests ||= 10; // 10

rest1.numGuests ??= 10; // 0
rest2.numGuests ??= 10; // 10

rest1.owner = rest1.owner && 'ANONYMOUS'; // owner : undefined
rest2.owner = rest2.owner && 'ANONYMOUS'; // owner : ANONYMOUS

rest1.owner &&= 'ANONYMOUS'; // owner : undefined
rest2.owner &&= 'ANONYMOUS'; // owner : ANONYMOUS

rest1.owner = rest1.owner ?? 'ANONYMOUS'; // owner : ANONYMOUS
rest2.owner = rest2.owner ?? 'ANONYMOUS'; // owner : Giovanni Rossi

console.log(rest1);
console.log(rest2);
