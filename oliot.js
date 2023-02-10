let customers = [{id: 1, firstName: 'Jason', lastName: 'Langenbrunner', phone: '29302828'},
 {id: 2, firstName: 'Marilyn', lastName: 'Johansson', phone: '112282555'},
 {id: 3, firstName: 'Isak', lastName: 'Gallahan', phone: '442212575'}]

 console.log('Print Marilyn´s phone number')

 console.log(customers[1].phone)

 // Map funktio looppaa taulukon läpi

 customers.forEach(cust => cust.firstName === 'Marilyn' && console.log(cust.firstName + " " + cust.lastName))

 /*
 Sama operaatio for silmukalla:

 for(let i=0; i<customers.length; i+2) {
    console.log(customers[i].firstName + " " + customers[i].lastName)
 }*/