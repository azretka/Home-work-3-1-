var drinks = ['milk', 'beer', 'beer', 'milk', 'milk']
var badDrinks = ['beer']
for (var i = 0; i < 5; i++) {
    if (badDrinks.includes(drinks[i])) {
        console.log('bad')
        continue
    }
    console.log('good')
}