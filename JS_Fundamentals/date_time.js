let val; 

const today = new Date();
let birthday = new Date('10-19-1989 12:53:00');
birthday = new Date('October 19 1989');
birthday = new Date('10/19/1989');

val = today.getMonth(); // month of year
val = today.getDate(); // day of month 
val = today.getDay(); // day of the week
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); // amount of seconds passed since 1/1/70

birthday.setMonth(2); // change month
birthday.setDate(12); // change day of month
birthday.setFullYear(1985);// change year
birthday.setHours(3); // change hours
birthday.setMinutes(30); // change minutews
birthday.setSeconds(25);


console.log(birthday);