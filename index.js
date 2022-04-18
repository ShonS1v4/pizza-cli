#!/usr/bin/env node
//импорт библиотеки commander.js
const program = require('commander')

//получени данных из файла package.json
const {version, description} = require('./package.json')

//инициализация cli
program
    .option('-p, --peppers', 'Добавить халапеньо в состав')
    .option('-P, --pineapple', 'Добавить ананас в состав')
    .option('-b, --bbq', 'Добавить соус барбекю в состав')
    .option('-v, --version', 'Версия')
    .option('-d, --desc', 'Описание')

//парсинг основных аргументов
program.parse(process.argv)

//получение доступа к введенным аргументам
const options = program.opts()

if (!options.version && !options.desc) {
    //задание первоначальной цены за стандартную пиццу
    //и ее наполнители
    const price = {
    default: 200,
    peppers: 50,
    pineapple: 100,
    bbq: 100
    }

    let total = price.default;

    //вывод заказа
    console.log(`@friday-cli`)
    console.log('Вы заказали пиццу')
    if (options.peppers) {
        console.log(` - Халапеньо: ${price.peppers}₽`)
        total += price.peppers;
    }
    if (options.pineapple) {
        console.log(` - Ананас: ${price.pineapple}₽`)
        total += price.pineapple;
    }
    if (options.bbq) {
        console.log(` - Соус барбекю: ${price.bbq}₽`)
        total += price.bbq;
    }
    console.log('---------')
    console.log(`К оплате: ${total}₽`)
} else if (options.version) {
    //если был введен аргумент -v то отобразится версия
    console.log(`@friday-cli`)
    console.log(`Версия: ${version}`)
} else if (options.desc) {
    //если был введен аргумент -d то отобразится описание
    console.log(`@friday-cli`)
    console.log(description)
}