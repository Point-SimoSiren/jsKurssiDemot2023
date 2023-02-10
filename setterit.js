function lisaaUutta() {

    var h = document.createElement("h3");
    var t = document.createTextNode("Hello World");
    h.appendChild(t);
    document.body.firstChild.nextSibling.appendChild(h)

    var h = document.createElement("p");
    var t = document.createTextNode("Hello World");
    h.appendChild(t);
    document.body.appendChild(h)

    var h = document.createElement("h1");
    var t = document.createTextNode("Hello World");
    h.appendChild(t);
    document.body.appendChild(h)
    }
