
let navigacija = new Array(
    {
        title: "Početna",
        href: "index.html"
    },
    {
        title: "Odaberite akciju",
        href: "#akcije"
    },
    {
        title: "Aktuelno",
        href: "#aktuelno"
    },
    {
        title: "Zašto baš mi",
        href: "#mi"
    },
    {
        title: "Galerija",
        href: "#galerija"
    },
    {
        title: "Utisci",
        href: "#utisci"
    },
    {
        title: "Kontakt",
        href: "#kontakt"
    },
    {
        title: "Autor",
        href: "#autor"
    }
);





// - Galerija -
let slikeIzGalerije = document.querySelectorAll(".galerija");
let najskorijeOtvorena;
let sirinaProzora = window.innerWidth;

if(slikeIzGalerije){
    slikeIzGalerije.forEach(function(slika, index) {
        slika.onclick = function() {
            let adresaSlike = document.getElementById("slika1").getAttribute("src");//naći kako učitati bilo koju sliku
            let urlSlike = adresaSlike.split("/img/");
            let noviUrlSlike = urlSlike[1];

            najskorijeOtvorena = index + 1;

            let container = document.body;
            let novProzorSlike = document.createElement("div");
            container.appendChild(novProzorSlike);
            novProzorSlike.setAttribute("class", "prozor-slike");
            novProzorSlike.setAttribute("onclick", "zatvoriSliku()");

            let novaSlika = document.createElement("img");
            novProzorSlike.appendChild(novaSlika);
            novaSlika.setAttribute("src", "assets/img/" + noviUrlSlike);
            novaSlika.setAttribute("id", "trenutna-slika");

            novaSlika.onload = function() {

                let novoNazadDugme = document.createElement("a");
                let textNazad = document.createTextNode("<");
                novoNazadDugme.appendChild(textNazad);
                container.appendChild(novoNazadDugme);
                novoNazadDugme.setAttribute("class", "nazad-dugme");
                novoNazadDugme.setAttribute("onclick", "promijeniSliku(1)");
    
                let novoNaprijedDugme = document.createElement("a");
                let textNaprijed = document.createTextNode(">");
                novoNaprijedDugme.appendChild(textNaprijed);
                container.appendChild(novoNaprijedDugme);
                novoNaprijedDugme.setAttribute("class", "naprijed-dugme");
                novoNaprijedDugme.setAttribute("onclick", "promijeniSliku(0)"); 
            }
        }
    });
}
function zatvoriSliku() {
    document.querySelector(".prozor-slike").remove();
    document.querySelector(".naprijed-dugme").remove();
    document.querySelector(".nazad-dugme").remove();
}
function promijeniSliku(smijer) {
    document.querySelector("#trenutna-slika").remove();

    let dodajSliku = document.querySelector(".prozor-slike");
    let novaSlika = document.createElement("img");
    dodajSliku.appendChild(novaSlika);

    let nadjiSmijer;
    if(smijer === 1) {
        nadjiSmijer = najskorijeOtvorena + 1;
        if(nadjiSmijer > slikeIzGalerije.length){
            nadjiSmijer = 1;
        }
    }
    else if(smijer === 0){
        nadjiSmijer = najskorijeOtvorena - 1;
        if(nadjiSmijer < 1){
            nadjiSmijer = slikeIzGalerije.length;
        }
    }

    novaSlika.setAttribute("src","assets/img/img"+ nadjiSmijer +"ingallery.jpg");
    novaSlika.setAttribute("id","trenutna-slika");

    najskorijeOtvorena = nadjiSmijer;
}
// - Učitavanje stranice -
let ucitavanje = document.querySelector("#ucitavanje");
let logo = document.querySelector(".logo-u");
let logoSpan = document.querySelectorAll(".dio");

window.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add("active");
            }, (idx + 1) * 400)
        })

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove("active");
                    span.classList.add("fade");
                }, (idx + 1) * 50)
            })
        }, 3000);

        setTimeout(()=>{
            ucitavanje.style.top = "-100vh";
        }, 3500)
    })
})

//- Forma -

//dinamička padajuća lista
var nizBrojLjudi = new Array("1","2","3","4","5");

var tagSelect = document.createElement("select");
tagSelect.setAttribute("id", "ddl-brljudi");

var prviTagOption = document.createElement("option");
prviTagOption.setAttribute("value", "0");
var sadrzajPrvogOption = document.createTextNode("Izaberite");

prviTagOption.appendChild(sadrzajPrvogOption);
tagSelect.appendChild(prviTagOption);

for(let i = 0; i < nizBrojLjudi,length; i++){
    var ostaliTagOption = document.createElement("option");
    ostaliTagOption.setAttribute("value", nizBrojLjudi[i]);

    var sadrzajOstalihOption = document.createTextNode(nizBrojLjudi);

    ostaliTagOption.appendChild(sadrzajOstalihOption);
    tagSelect.appendChild(ostaliTagOption);
}

document.querySelector(".padajuca-lista").appendChild(tagSelect);