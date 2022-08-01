function temperatureConverter(valNum) {
valNum = parseFloat(valNum);
document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
document.getElementById("outputKelvin").innerHTML=(valNum-32) * 5/9 + 273.15;
}
var farenheit1;
