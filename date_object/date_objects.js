//Data Object
// Time is an important thing. We like to know the time when we are doing a certain activity or event. In JavaScript current time and date is created using JavaScript Date Object. The object we create using Date Object provides many methods to work with date and time. The methods we use to get date and time information from a date object values are started with a word (get) because it provides the information.

//methods are: getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes(), getSeconds(), getTime() and getDay().

//1. getFullYear() -> get the year as a four digit num(yyyy), 2020
//2. getMonth() -> get the month as a num(0-11), 0(January)
//3. getDate() -> get the day as a num(1-31), 4
//4. getHours() -> get the hour(0-23), 0
//5. getMinutes() -> get the minute(0-59), 56
//6. getSeconds() -> get the second(0-59), 41
//7. getMilliseconds() -> get the millisecond(0-999), 341
//8. getTime() -> get the time(milliseconds since January 1, 1970), 1578092201341
//9. getDay() -> get the weekday as a num(0-6), 6

//Creating a time Object
//Once we create time object. The time object will provide information about time. Let us create a time object.

const now = new Date()
console.log(now);

//We have created a time object and we can access any date time information from the object using the get-methods we have mentioned above.

//Getting full year
console.log(now.getFullYear()); //2022

//Getting the month
console.log(now.getMonth()); //10 (beause January-0, November-10)

//Getting the date
console.log(now.getDate()); //5 (the day of the month is 5th), days(1-31)

//Getting the day
console.log(now.getDay()); //6, days(0-6), (Sunday-0, Saturday-6), Sunday-0,

//Getting the hours
console.log(now.getHours()); // 8, beacuse the time is 8.01AM

//Getting the minutes
console.log(now.getMinutes()); // 1, becasue the minutes is 01.


//Getting seconds
console.log(now.getSeconds()); //

