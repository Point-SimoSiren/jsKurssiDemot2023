
let puhelimet = ['Samsung', 'Apple', 'Nokia', 'Doro', 'Honor']

for (i=0; i<puhelimet.length; i++) {
    console.log(puhelimet[i])

    //puhelimet[i] === 'Apple' && console.log("Tässä ei ole Androidia")
   // puhelimet[i] !== 'Apple' && console.log("Tässä voi olla Android")

    puhelimet[i] === 'Apple' ? console.log("Tässä ei ole Androidia") :
    console.log("Tässä voi olla Android")

    console.log("------------------------------------------------")
}