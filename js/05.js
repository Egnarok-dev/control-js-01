const checkForSpam = function (message) {
  
  let result = message.includes("[SPAM]") || message.includes("sale");

  return result;

  // if (message.includes("[SPAM]") || message.includes("sale")) {
  //   console.log(true);
  // } else {
  //   console.log(false);
  // }

  // return message;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
