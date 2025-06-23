let shoppingCart = [
    {
        "product": "eggs",
        "itemPrice": 10,
        "itemQuantity": 4
    },
    {
        "product": "bread",
        "itemPrice": 15,
        "itemQuantity": 1
    },
    {
        "product": "milk",
        "itemPrice": 5,
        "itemQuantity": 1
    },
    {
        "product": "flour",
        "itemPrice": 12,
        "itemQuantity": 1
    },
    {
        "product": "juice",
        "itemPrice": 3,
        "itemQuantity": 2
    },
    {
        "product": "yoghurt",
        "itemPrice": 70,
        "itemQuantity": 1
    },
    {
        "product": "apple",
        "itemPrice": 6,
        "itemQuantity": 15
    },
    {
        "product": "orange",
        "itemPrice": 10,
        "itemQuantity": 7
    },
    {
        "product": "fish",
        "itemPrice": 16,
        "itemQuantity": 1
    },
    {
        "product": "steak",
        "itemPrice": 80,
        "itemQuantity": 4
    },
    {
        "product": "chips",
        "itemPrice": 40,
        "itemQuantity": 1
    },
    {
        "product": "peas",
        "itemPrice": 30,
        "itemQuantity": 1
    },
    {
        "product": "chicken",
        "itemPrice": 10,
        "itemQuantity": 9
    },
    {
        "product": "pasta",
        "itemPrice": 4,
        "itemQuantity": 1
    },
    {
        "product": "biltong",
        "itemPrice": 40,
        "itemQuantity": 3
    },
]

const coupons = {
    "BlackFriYAY": 0.10
}


let totalProducts = shoppingCart.reduce((sum, item) => sum + item.itemQuantity, 0);


function calculateTotal(cart, couponCode) {

let totalPrice = shoppingCart.reduce((sum, item) => sum + item.itemPrice * item.itemQuantity, 0);

    if (totalProducts > 15){
    discountPrice = totalPrice - (totalPrice * 0.2);
    console.log(discountPrice);
}   else {
    console.log(totalPrice + ". No Discount.");
}

console.log(totalPrice);

if (couponCode in coupons) {
    let discountRate = coupons[couponCode];
    let discountAmount = totalPrice * discountRate;
    totalPrice -= discountAmount;
    console.log(`Coupon "${couponCode}" applied! You saved $${discountAmount.toFixed(2)}`);
  } else if (couponCode) {
    console.log(`Invalid coupon code: "${couponCode}". No discount applied.`);
  }
}



console.log("Total after BlackFriYAY:", calculateTotal(shoppingCart, "BlackFriYAY"));