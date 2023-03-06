const calculateEngravingPrice = function (message, pricePerWord) {
  let args = message.split(" ");
  let totalPrice = 0;

  for (let i = 0; i < args.length; i += 1) {
    totalPrice = (i + 1) * pricePerWord;
  }

  return totalPrice;
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120
