//Harj1
// var numbers = ["one", "two", "three", "four", "five"]

// numbers.forEach(number => console.log(number))

//Harj2
// var prices = [20, 40, 35, 12, 100]

// var discountedPrices = prices.map(price => price * 0.2)
// console.log(discountedPrices)

//Harj3
// var names = ["John", "Jack", "Lisa", "John", "Sara"]

// names = names.map( name => name === "John" ? "Matti" : name)

// Toinen versio

// names = names.map (name => {
//     if(name === "John"){
//         return "Matti"
//     }
//     return name;
// })

// console.log(names);

//Harj4
// var numbers = [1, 2, 3, 4, 0, -1, -2, -3]

// var positiveNumbers = numbers.filter(number => number >= 0)

// console.log(positiveNumbers);

//Harj5
var names = ["John", "Marry", "Tristana", "Tero"]

// var filteredNames = names.filter(name => name.length >= 8 && name[0] == "T")

// console.log(filteredNames);

//Harj6
if (names.every(sana => sana.length > 0)) {
    let pituudet = names.map(sana => sana.length)

    let summa = pituudet.reduce((previous, current) => previous + current)
    console.log(summa);
}