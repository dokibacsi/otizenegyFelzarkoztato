function $(elem) {
    return document.querySelectorAll(elem);
}

window.addEventListener("load", function () {
    jsontBeolvas(lepkekTomb, "adatok.json", "pillangok", megjelenit);
    //$("button")[0].addEventListener("click", megjelenit)

});

function megjelenit() {

    //article tagbe kiir divbe számokat.. 10 db

    const tarolo = $("article")[0];
    let text = "";
    for (let index = 0; index < lepkekTomb.length; index++) {
        text += `<div>${lepkekTomb[index].fajta},${lepkekTomb[index].szin}</div>`
    }

    tarolo.innerHTML = text;
}

const lepkekTomb = [];

function jsontBeolvas(tomb, fajlnev, kulcs, callbackfgv) {
    fetch(fajlnev)
        .then(valasz => valasz.json())
        .then(adat => {console.log(adat)
        //a lepkék adatait beteszem a tömbbe
            //bejárjuk a JSON fileban lévő tömböt.
            console.log(adat[kulcs]) //ez a tömb
            //minden elemét betesszük a tömbbe.
            adat[kulcs].forEach(lepke => {
                console.log(lepke)
                tomb.push(lepke)
            });
            console.log(tomb)
            console.log(lepkekTomb)
            callbackfgv ();    //callback függvény hívás
        })
        .catch(hiba => {console.log(hiba)});
}