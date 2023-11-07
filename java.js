function convertTemperature() {
    const temperatureInput = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;
    let convertedTemperature = 0;

    if (unit === "celsius") {
        convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9;
    } else if (unit === "fahrenheit") {
        convertedTemperature = (parseFloat(temperatureInput) * 9/5) + 32;
    } else if (unit === "kelvin") {
        convertedTemperature = parseFloat(temperatureInput) + 273.15;
    }

    document.getElementById("result").innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unit}`;
}

