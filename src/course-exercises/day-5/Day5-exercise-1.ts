// Day 5 - Exercise 1: create an interface

// function addToCart(item: {id: number, title: string, variantId: number}) {
//     console.log(`Adding "${item.title}" to cart.`);
//   }

//   addToCart({id: 1, title: "shoes"});

interface Item {
  id: number;
  title: string;
  variantId?: number;
}

function addToCart(item: Item) {
    console.log(`Adding "${item.title}" to cart.`);
  }

  addToCart({id: 1, title: "shoes", variantId: 1});