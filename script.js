document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperature");
    const fromUnitSelect = document.getElementById("fromUnit");
    const toUnitSelect = document.getElementById("toUnit");
    const convertBtn = document.getElementById("convert");
    const resultOutput = document.getElementById("result");

    convertBtn.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        const fromUnit = fromUnitSelect.value;
        const toUnit = toUnitSelect.value;

        if (!isNaN(temperature)) {
            let result = 0;

            if (fromUnit === "celsius") {
                if (toUnit === "fahrenheit") {
                    result = (temperature * 9/5) + 32;
                } else if (toUnit === "kelvin") {
                    result = temperature + 273.15;
                }
            } else if (fromUnit === "fahrenheit") {
                if (toUnit === "celsius") {
                    result = (temperature - 32) * 5/9;
                } else if (toUnit === "kelvin") {
                    result = (temperature - 32) * 5/9 + 273.15;
                }
            } else if (fromUnit === "kelvin") {
                if (toUnit === "celsius") {
                    result = temperature - 273.15;
                } else if (toUnit === "fahrenheit") {
                    result = (temperature - 273.15) * 9/5 + 32;
                }
            }

            resultOutput.textContent = `${temperature} ${fromUnit} is ${result.toFixed(2)} ${toUnit}`;
        } else {
            resultOutput.textContent = "Please enter a valid temperature.";
        }
    });
});
