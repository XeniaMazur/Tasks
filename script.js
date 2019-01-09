"use strict";
let money = prompt("Ваш бюджет на месяц?");
let dailyBudget = money / 30;
alert("Бюджет на 1 день"+dailyBudget);
let time = prompt("Введите дату в формате YYYY-MM-DD");
let answer1 = prompt("Введите обязательную статью расходов в этом месяце");
let answer2 = prompt("Во сколько обойдется?");
let answer3 = prompt("Введите обязательную статью расходов в этом месяце");
let answer4 = prompt("Во сколько обойдется?");
let appData = {
    budget: money,
    timeData: time,
    expenses: {
        [answer1]: answer2,
        [answer3]: answer4,
    },
    optinalExpenses: {},
    income: [],
    savings: false
}
console.log(appData);