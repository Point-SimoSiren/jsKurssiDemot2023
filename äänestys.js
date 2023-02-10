
            // ---- Alkuasetus Local storagesta -------------------
            let palaute = localStorage.getItem('palaute')


            // ---Kiitostekstin määritys-----------
            let kiitosTeksti = "Kiitos palautteesta! :)"

            // -------- clear timeOutia varten var alustus ----
            var ajastus;

            // -------- Navigointi funktioiden määrittely sis. refresh napit ja funktiokutsut ------
            function aanestys() {
                let aanestysSivu = `
                <h1>Anna palautetta javascript kurssista</h1>
    
                <button onclick="vastaus(true, 'green')">:)</button>
                <button onclick="vastaus(false, 'red')">:(</button>
    
                <h1 id="kiitos"></h1>
    
                <h2>Tilanne:</h2>
                <h2 id="palaute"></h2>
                
                <button onClick="localStorage.clear()">Tyhjennä local storage</button>
                <button onClick="window.location.reload()">Päivitä sivu</button>
            `
                document.getElementById("sisalto").innerHTML = aanestysSivu
                document.getElementById("palaute").innerHTML = palaute
            }

            function tietoa() {
                let tietoSivu = `
                <h1>Tietoa meistä</h1>
    
               <p>Olemme toimineet gallup alalla 30 vuotta.</p>
               <p>Järjestelmämme toimii täydellisesti olit sitten antamassa myönteistä tai kielteistä palautetta</p>
            `
                document.getElementById("sisalto").innerHTML = tietoSivu
            }


            //---- :) funktion määrittely ---------------
            function vastaus(isPositive, myColor) {
                isPositive ? palaute++ : palaute--
                localStorage.setItem('palaute', palaute)
                document.getElementById("palaute").innerHTML = palaute
                document.getElementById("kiitos").innerHTML = kiitosTeksti
                
                document.getElementById("kiitos").style.visibility = "visible"
                document.getElementById("kiitos").style.width = "40%"
                document.getElementById("kiitos").style.padding = "15px"
                document.getElementById("kiitos").style.borderStyle = "groove"
                document.getElementById("kiitos").style.borderWidth = "2px"
                document.getElementById("kiitos").style.borderRadius = "10px"
                
                document.getElementById("kiitos").style.backgroundColor = myColor

                clearTimeout(ajastus) // putsataan mahdolliset aiemmat clear komennot jotka on jonossa
               
                let ajastus = setTimeout(() => {
                    document.getElementById("kiitos").innerHTML = ""
                    document.getElementById("kiitos").style.visibility = "hidden"
                }, 3000)
            }

           
