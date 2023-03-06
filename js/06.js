let total = 0;
let numbers = [];
let cycleStatus = true; //Створив додаткову змінну для використання у while

while (cycleStatus) { //Через for у мене не виходило "зациклити" цикл тому використав while
  let input = prompt();

  if (input == null) {
    if (numbers.length > 0) {
      for (let number of numbers) {
        total += number;
      }
      console.log(`Загальна сума чисел дорівнює: ${total}`);
    } else {
      console.log("Не має даних, рядок порожній");
    }
    cycleStatus = false;
  } else if (/\d/.test(input)) {  //Щоб знайти цей спосіб довелось звернутись за підказкою до товариша 
    numbers.push(+input);
  } else {
    console.log(`Було введено не число, попробуйте ще раз`);
  }
}



