//JS. HW_2

//Напишите валидационный скрипт используя функции 

 //1. Скрипт должен на вход принимать строку.
 //2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
 //3. Минимум 5 символов в строке
 //4. Максимум 64 символа в строке
 //5. В строке должны быть буквы
 //6. Должна быть хотя бы одна буква в верхнем регистре
 //7. Должна быть хотя бы одна цифра
 //8. Должна быть хотя бы одна @
 //9. Строка не должна быть пустой
 

const checkstr = function (stroka) 
   {if (typeof(stroka) == 'string')
      {  if   (stroka.length == 0) 
              {console.log("Поле не может быть пустым")} 
         else {check1=true};

         if   (stroka.length<5)
              {console.log("Введите не менее 5 символов")}
         else {check2=true};
         
         if   (stroka.length>64)
              {console.log("Введите не больше 64 символов")}
         else {check3=true};
         
         if   (!/[a-zA-Zа-яА-Я]/.test(stroka)) 
              {console.log("В строке должны быть буквы")}
         else {check4=true};  
          
         if   (!/[A-ZА-Я]/.test(stroka)) 
              {console.log("В строке должна быть хоть одна буква в верхнем регистре")}
         else {check5=true};  
          
         if    (!/[0-9]/.test(stroka)) 
               {console.log("В строке должна быть хотя бы одна цифра")}
         else  {check6=true};  
          
         if    (!stroka.includes("@")) 
               {console.log("В строке должна быть хотя бы одна @")}
         else  {check7=true};  
             
         if   (check1 && check2 && check3 && check4 && check5 && check6 && check7)
              {console.log("Корректная строка")};
      }
  else{
     console.log("Введите строку")
      }
};

//checkstr (3);
//checkstr ("re");
//checkstr ("кууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууу");
//checkstr ("222333");
//checkstr ("рdtеn");
//checkstr ("рВtеn");
//checkstr ("рВt1е2n");
//checkstr ("");
//checkstr ("Gsskk11@");