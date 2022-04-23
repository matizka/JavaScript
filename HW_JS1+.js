
//HW_1* 
//Задания с разным количеством звездочек:)
//1*:
//Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
//Пример: const checkAge = function(age) {
//Ваши преобразования
//}
//Вывести в консоль результат работы функции с возрастами 17, 18, 61
//26. Создать переменную “age_1” и присвоить ей значение 10
let age_1 = 10;
//27. Создать переменную “age_2” и присвоить ей значение 18
let age_2 = 18;
//28. Создать переменную “age_3” и присвоить ей значение 60
let age_3 = 60;

const checkAge1 = function (age) 
{if (age < age_2){
    console.log("You don’t have access cause your age is " + age+ " It’s less then " + age_2)
  } else if (age >= age_2 && age<age_3){
    console.log("Welcome!")
  } else if (age>age_3){
    console.log("Keep calm and look Culture channel")
  } else{
    console.log("Technical work")
  }
};

checkAge1 (17); 
checkAge1 (18); 
checkAge1 (61);
console.log('******************');

//2*:Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка"

const checkAge2 = function (age) 
{if (typeof age !== 'number'){
  console.log("Error!!!")
  } else if (age < age_2){
    console.log("You don’t have access cause your age is " + age+ " It’s less then " + age_2)
  } else if (age >= age_2 && age<age_3){
    console.log("Welcome!")
  } else if (age>age_3){
    console.log("Keep calm and look Culture channel")
  } else{
    console.log("Technical work")
  }
};

checkAge2 ("dsaff");  
checkAge2 ("2a"); 
console.log('******************');

// 3**:
//Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

const checkAge3 = function (age) 
{if (isNaN(age))  //1 вариант, if (!+age) 2 вариант, if(!Number(age)) 3 вариант 
 {  console.log("Error!!!")
 }  else if (age < age_2) {
    console.log("You don’t have access cause your age is " + age+ " It’s less then " + age_2)
 } else if (age >= age_2 && age<age_3) {
    console.log("Welcome!")
 } else if (age>age_3) {
    console.log("Keep calm and look Culture channel")
 } else {
    console.log("Technical work")
 }
};

checkAge3 ("2");
console.log('******************');

// 4***: Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

const checkAge4 = function (age) 
{if (isNaN(age))      //1 вариант
    //if (!+age)        2 вариант
    //if (!Number(age)) 3 вариант
  {  alert ("Error!!!")
    //console.log("Error!!!")
  }  else if (age < age_2) {
    alert ("You don’t have access cause your age is " + age+ " It’s less then " + age_2)
    //console.log("You don’t have access cause your age is " + age+ " It’s less then " + age_2)
  } else if (age >= age_2 && age<age_3) {
    alert("Welcome!")
    //console.log("Welcome!")
  } else if (age>age_3) {
    alert("Keep calm and look Culture channel")
    //console.log("Keep calm and look Culture channel")
  } else {
    alert("Technical work")
    //console.log("Technical work")
  }
};
checkAge4 (prompt("Введите Ваш возраст"));
