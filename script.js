document.getElementById("submitBtn").addEventListener("click", function()  {
    const riktigBrukernavn = "admin" 
    const riktigPassord = "admin"

    const navn = document.getElementById("brukernavn").value
    const passord = document.getElementById("passord").value    

    if (navn == riktigBrukernavn && passord == riktigPassord) {
        alert("Pålogging vellykket");
    }
    else {
        alert("Brukernavn eller passord er feil");
    }
})

document.getElementById("gjennomsnittBtn").addEventListener("click", function() {
    const num1 = Number(document.getElementById("num1").value)
    const num2 = Number(document.getElementById("num2").value)
    const num3 = Number(document.getElementById("num3").value)

    alert((num1+num2+num3)/3);
})

document.getElementById("konverterBtn").addEventListener("click", function() {
    const celcius = Number(document.getElementById("celcius").value)
    const fahrenheitSvar = (celcius * 9/5)+32

    alert(`${celcius} celcius blir ${fahrenheitSvar} fahrenheit`);
})

document.getElementById("konverterBtn2").addEventListener("click", function() {
    const fahrenheit = Number(document.getElementById("fahrenheit").value)
    const celciusSvar = (fahrenheit - 32)*5/9

    alert(`${fahrenheit} fahrenheit blir ${celciusSvar} celcius`);
})

document.getElementById("summenBtn").addEventListener("click", function() {
    let tallet = Number(document.getElementById("tallet").value)
    let j = 0
    while (tallet>0) {
        j+=tallet
        tallet--
    }
    alert(j);
})

document.getElementById("karakterBtn").addEventListener("click", function() {
    let karakter = Number(document.getElementById("karakter").value)

    if (karakter <= 30) {
        alert(`Du fikk en 1'er`);
    } 
    else if (karakter >= 31 && karakter <= 45) {
        alert(`Du fikk en 2'er`);
    }
    else if (karakter >= 46 && karakter <= 60) {
        alert(`Du fikk en 3'er`);
    }
    else if (karakter >= 61 && karakter <= 75) {
        alert(`Du fikk en 4'er`);
    }
    else if (karakter >= 76 && karakter <= 90) {
        alert(`Du fikk en 5'er`);
    }
    else if (karakter >= 91 && karakter <= 100) {
        alert(`Du fikk en 6'er`);
    }
})

