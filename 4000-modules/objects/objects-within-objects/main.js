var phones = {
    brands: {
        BLACKBERRY: {
            "Curve 9300": {
                name: "BlackBerry Curve 9300",
                OS: "BlackBerry OS",
            },
    
            "Bold 9700": {
                name: "BlackBerry Bold 9700",
                OS: "BlackBerry OS",
            },
    
            "Bold 9900": {
                name: "BlackBerry Bold 9900",
                OS: "BlackBerry OS",
            },
        },
    
        APPLE: {
            "iPhone 13": {
                name: "iPhone 13",
                OS: "iOS 15",
            },
    
            "iPhone 13 Pro": {
                name: "iPhone 13 Pro",
                OS: "iOS 15",
            },
    
            "iPhone 13 Pro Max": {
                name: "iPhone 13 Pro Max",
                OS: "iOS 15",
            },
        },
    
        SAMSUNG: {
            "Samsung Galaxy S22": {
                name: "Samsung Galaxy S22",
                OS: "Android",
            },
    
            "Samsung Galaxy Note": {
                name: "Samsung Galaxy Note",
                OS: "Android",
            },
    
            "Samsung Galaxy Z Flip": {
                name: "Samsung Galaxy Z Flip",
                OS: "Android",
            },
        },
    },

    colors: [
        "White",
        "Black",
        "Grey"
    ],
    

    listPhones: function() {
        var phoneBrand = prompt('Enter a manufacturer name (blackberry, apple or samsung').toUpperCase();
        
        if (phoneBrand == "") {
            console.log('Please enter BlackBerry, Apple or Samsung')
        }

        if (phoneBrand.toUpperCase() == "BLACKBERRY") {
            document.querySelector('#brand span').innerText = phoneBrand;
            
            var listOfModels = "<br>";

            for (var models in phones.brands.BLACKBERRY) {
                listOfModels += models + " (" + phones.brands[phoneBrand][models].OS + "), <br>";
            }

            document.querySelector('#models span').innerHTML = listOfModels;
        }

        if (phoneBrand.toUpperCase() == "APPLE") {
            document.querySelector('#brand span').innerText = phoneBrand;
            
            var listOfModels = "<br>";

            for (var models in phones.brands.APPLE) {
                listOfModels += models + " (" + phones.brands[phoneBrand][models].OS + "), <br>";
            }

            document.querySelector('#models span').innerHTML = listOfModels;
        }

        if (phoneBrand.toUpperCase() == "SAMSUNG") {
            document.querySelector('#brand span').innerText = phoneBrand;
            
            var listOfModels = "<br>";

            for (var models in phones.brands.SAMSUNG) {
                listOfModels += models + " (" + phones.brands[phoneBrand][models].OS + "), <br>";
            }

            document.querySelector('#models span').innerHTML = listOfModels;
        }

        var joinedColors = phones.colors.join(' | ');
        document.querySelector('#colors span').innerHTML = joinedColors;
    }
}

phones.listPhones();