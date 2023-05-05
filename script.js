var url ="https://api.openweathermap.org/data/2.5/weather?q=";
var apiKey ="8a6ef54b96dd1b60f6c4e8be03782919";


const keyPress = (e)=>{
    if(e.keyCode == 13)
    {
        var query =`${url}${sehirAdi.value}&appid=${apiKey}&units=metric&lang=tr`;

        fetch(query)
        .then(hava=>{
            return hava.json();
        })
        .then (sonuclariGöster)

        console.log(query);
        
    }
    

}

const sonuclariGöster= (sonuc)=>{
    console.log(sonuc);


var sehir = document.querySelector('.city');
sehir.innerText= sonuc.name;

var sicaklik = document.querySelector('.temp');
sehir.innerText= sonuc.main.temp;

}
const sehirAdi = document.getElementById("searchBar");
sehirAdi.addEventListener('keypress',keyPress);