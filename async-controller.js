const takeOrder = (customer, callback) => {
  console.log(`take order for ${customer}`);
  callback(customer)
}

const processOrder = (customer, callback) => {
  console.log(`process order for ${customer}`);

  setTimeout(() => {
    console.log('cooking complete');
    console.log(`order processed for ${customer}`);
    callback(customer)
  }, 2000);
}

const completeOrder = (customer) => {
  console.log(`complete order for ${customer}`);
}

takeOrder('customer 1', (customer) => {
  processOrder(customer, (customer) => {
    completeOrder(customer)
  })
})

takeOrder('customer 2', (customer) => {
  processOrder(customer, (customer) => {
    completeOrder(customer)
  })
})
