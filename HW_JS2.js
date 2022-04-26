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
{if (typeof(stroka) != 'string')
   {console.log("Введите строку")
}   else if (stroka.length == 0) 
   {console.log("Поле не может быть пустым") 
}   else if (stroka.length<5)
   {console.log("Введите не менее 5 символов")
}   else if (stroka.length>64)
   {console.log("Введите не больше 64 символов")
}   else if (!/[a-zA-Zа-яА-Я]/.test(stroka)) 
   {console.log("В строке должны быть буквы")
}   else if (!/[A-ZА-Я]/.test(stroka)) 
   {console.log("В строке должна быть хоть одна буква в верхнем регистре")
}   else if (!/[0-9]/.test(stroka)) 
   {console.log("В строке должна быть хотя бы одна цифра")
}   else if (!stroka.includes("@")) 
   {console.log("В строке должна быть хотя бы одна @")
}else 
   {console.log("Корректная строка")
   }
};

checkstr (3);
checkstr ("ку");
checkstr ("кууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууууу");
checkstr ("222333");
checkstr ("рdtеn");
checkstr ("рВtеn");
checkstr ("рВt1е2n");
checkstr ("");
checkstr ("Gsskk11@");