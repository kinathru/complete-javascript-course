const hours = {
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
  [`${new Date().getDay()}`]: {
    open: 10,
    close: 10,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  hours,
  order(item) {
    console.log(`New order placed for ${item}`);
  },
};

console.log(restaurant);
restaurant.order('Pizza');

console.log(hours);
