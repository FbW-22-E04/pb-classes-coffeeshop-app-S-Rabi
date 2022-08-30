class CoffeeShop {
  constructor(name, menu, orders) {
    this.name = name;
    this.menu = menu;
    this.orders = orders;
  }
  addItem(item) {
    this.menu.push(item);
  }
  addOrder(product) {
    const idx = this.menu.findIndex((item) => item.item === product);
    if (idx === -1) {
      console.log("This item is currently unavailable!");
    } else {
      this.orders.push(product);
      console.log(`Order added!`);
    }
  }
  fulfillOrder() {
    if (this.orders.length !== 0) {
      console.log(`The ${this.orders.shift()} is ready!`);
      // console.log(this.orders);
    } else {
      console.log(`All orders have been fulfilled!`);
    }
  }
  listOrders() {
    if (this.orders.length !== 0) {
      console.log(this.orders);
    } else {
      console.log([]);
    }
  }
  dueAmount() {
    let total = 0;
    this.orders.forEach((item) => {
      for (const val of this.menu) {
        if (val.item === item) {
          total += val.price;
        }
      }
    });
    console.log(`Total Price is: ${total}`);
  }
  cheapestItem() {
    const result = this.menu.reduce((acc, item) => {
      acc.push(item.price);
      return acc;
    }, []);
    // console.log(result);
    const cheapPrice = Math.min(...result);
    console.log(cheapPrice);
    const cheapItem = this.menu.find((item) => {
      // console.log(item);
      if (item.price === cheapPrice) {
        console.log(item.item);
        // return item.name;
      }
      // console.log(cheapItem);
    });
  }
  drinksOnly() {
    const drinks = this.menu
      .filter((item) => {
        if (item.type === "drink") {
          return item;
        }
      })
      .map((item) => item.item);
    console.log(drinks);
  }
  foodOnly() {
    const foods = this.menu
      .filter((item) => {
        if (item.type === "food") {
          return item;
        }
      })
      .map((item) => item.item);
    console.log(foods);
  }
}
const shop1 = new CoffeeShop(
  "Saad's Famous Coffee",
  [
    { item: "Hot Coffee", type: "drink", price: 2 },
    {
      item: "Hot Cappuccino",
      type: "drink",
      price: 2.5,
    },
    { item: "Cheese Cake", type: "food", price: 3 },
    { item: "Pan Cakes", type: "food", price: 1.5 },
    { item: "Eggs", type: "food", price: 1 },
    { item: "Cola", type: "drink", price: 4 },
  ],
  []
);
// shop1.addItem({ item: "Fanta", type: "drink", price: 5 });
// console.log(shop1);
shop1.addOrder("Cola");
shop1.addOrder("Eggs");
shop1.addOrder("Pan Cakes");
shop1.addOrder("Cheese Cake");
// shop1.fulfillOrder();
// shop1.fulfillOrder();
// shop1.fulfillOrder();
// shop1.fulfillOrder();
// shop1.fulfillOrder();
// const arr = [1, 2, 3, 4];
shop1.listOrders();
// console.log(arr.shift());
// console.log(arr);
shop1.dueAmount();
shop1.cheapestItem();
shop1.drinksOnly();
shop1.foodOnly();
