function convert() {
    var inputValue = document.getElementById('inputValue').value;
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;

    // Perform the conversion
    // FOR LENGTH
    var result;
    if (fromUnit === toUnit) {
        result = inputValue;
    } else if (fromUnit === 'meter' && toUnit === 'kilometer') {
        result = inputValue / 1000;
    } else if (fromUnit === 'meter' && toUnit === 'mile') {
        result = inputValue * 0.000621371;
    } else if (fromUnit === 'kilometer' && toUnit === 'meter') {
        result = inputValue * 1000;
    } else if (fromUnit === 'kilometer' && toUnit === 'mile') {
        result = inputValue * 0.621371;
    } else if (fromUnit === 'mile' && toUnit === 'meter') {
        result = inputValue * 1609.34;
    } else if (fromUnit === 'mile' && toUnit === 'kilometer') {
        result = inputValue * 1.60934;
    }

    // FOR CURRENCY
    else if (fromUnit === 'rupee' && toUnit === 'doller') {
        result = inputValue / 82;
    }
    else if (fromUnit === 'rupee' && toUnit === 'euro') {
        result = inputValue * 0.011;
    }
    else if (fromUnit === 'doller' && toUnit === 'rupee') {
        result = inputValue * 82;
    }
    else if (fromUnit === 'doller' && toUnit === 'euro') {
        result = inputValue * 0.91;
    }
    else if (fromUnit === 'euro' && toUnit === 'rupee') {
        result = inputValue * 89.7;
    }
    else if (fromUnit === 'euro' && toUnit === 'doller') {
        result = inputValue * 1.09;
    }

    // FOR WEIGHT
    else if (fromUnit === 'kg' && toUnit === 'gram') {
        result = inputValue * 1000;
    }
    else if (fromUnit === 'gram' && toUnit === 'kg') {
        result = inputValue / 1000;
    }

    // FOR LENGHT
    else if (fromUnit === 'meter' && toUnit === 'kg') {
        result = inputValue / 1000;
    }
    else if (fromUnit === 'meter' && toUnit === 'cm') {
        result = inputValue * 100;
    }
    else if (fromUnit === 'km' && toUnit === 'meter') {
        result = inputValue * 1000;
    }
    else if (fromUnit === 'km' && toUnit === 'cm') {
        result = inputValue * 100000;
    }
    else if (fromUnit === 'cm' && toUnit === 'meter') {
        result = inputValue / 100;
    }
    else if (fromUnit === 'cm' && toUnit === 'km') {
        result = inputValue / 100000;
    }

    // FOR SPEED
    else if (fromUnit === 'kph' && toUnit === 'mph') {
        result = inputValue / 1.609;
    }
    else if (fromUnit === 'kph' && toUnit === 'fps') {
        result = inputValue / 0.911;
    }
    else if (fromUnit === 'mph' && toUnit === 'fps') {
        result = inputValue * 1.467;
    }
    else if (fromUnit === 'mph' && toUnit === 'kph') {
        result = inputValue * 1.609;
    }
    else if (fromUnit === 'fps' && toUnit === 'kph') {
        result = inputValue * 1.09;
    }
    else if (fromUnit === 'fps' && toUnit === 'mph') {
        result = inputValue / 1.46;
    }

    // FOR TIME
    else if (fromUnit === 'sec' && toUnit === 'min') {
        result = inputValue / 60;
    }
    else if (fromUnit === 'sec' && toUnit === 'hour') {
        result = inputValue / 3600;
    }
    else if (fromUnit === 'min' && toUnit === 'sec') {
        result = inputValue * 60;
    }
    else if (fromUnit === 'min' && toUnit === 'hour') {
        result = inputValue / 60;
    }
    else if (fromUnit === 'hour' && toUnit === 'sec') {
        result = inputValue * 3600;
    }
    else if (fromUnit === 'hour' && toUnit === 'min') {
        result = inputValue * 60;
    }

    // FOR AREA
    else if (fromUnit === 'SF' && toUnit === 'SM') {
        result = inputValue / 10.76;
    }
    else if (fromUnit === 'SF' && toUnit === 'acre') {
        result = inputValue / 43560;
    }
    else if (fromUnit === 'SM' && toUnit === 'SF') {
        result = inputValue * 10.76;
    }
    else if (fromUnit === 'SM' && toUnit === 'acre') {
        result = inputValue / 4047;
    }
    else if (fromUnit === 'acre' && toUnit === 'SF') {
        result = inputValue * 43560;
    }
    else if (fromUnit === 'acre' && toUnit === 'SM') {
        result = inputValue * 4047;
    }





    // Display the result
    document.getElementById('result').innerHTML = result;

    // document.getElementById('result').innerHTML = inputValue + ' ' + fromUnit + ' is equal to ' + result + ' ' + toUnit;
}