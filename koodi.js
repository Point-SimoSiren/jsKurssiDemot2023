
function haeDatat() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json()) // js muotoon
    .then(data => console.log(data))
}


function lähetetty(event) {
    event.preventDefault()

    let nimi = event.target.nimi.value
    let sähköposti = event.target.meili.value
    let kotimaa = event.target.kotimaa.value

    let uusiAsiakas = {nimi: nimi, sähköposti: sähköposti, kotimaa: kotimaa}
    
    let asiakasJson = JSON.stringify(uusiAsiakas)

    fetch("https://minun-backend.azurewebsites.net/api/asiakkaat/",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: asiakasJson
})
.then(function(res){ alert(res) })

.catch(function(error){ console.log(error) })
   
}
