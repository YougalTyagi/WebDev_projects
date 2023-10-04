let celsiusInput = document.getElementById("celsius");
let fahrenheitInput = document.getElementById("fahrenheit");
let kelvinInput = document.getElementById("kelvin");

celsiusInput.addEventListener("input", convertTemperatures);
fahrenheitInput.addEventListener("input", convertTemperatures);
kelvinInput.addEventListener("input", convertTemperatures);

function convertTemperatures() {
    let celsius = parseFloat(celsiusInput.value) || 0;
    let fahrenheit = parseFloat(fahrenheitInput.value) || 0;
    let kelvin = parseFloat(kelvinInput.value) || 0;

    if (event.target === celsiusInput) {
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
    } else if (event.target === fahrenheitInput) {
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = (fahrenheit - 32) * 5/9 + 273.15;
    } else if (event.target === kelvinInput) {
        celsius = kelvin - 273.15;
        fahrenheit = (kelvin - 273.15) * 9/5 + 32;
    }

    celsiusInput.value = celsius.toFixed(2);
    fahrenheitInput.value = fahrenheit.toFixed(2);
    kelvinInput.value = kelvin.toFixed(2);
}