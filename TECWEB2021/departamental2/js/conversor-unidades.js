function cambiaContenido() {
    var inputLongitud_1 = document.getElementById("input_longitud_1");
    var inputLongitud_2 = document.getElementById("input_longitud_2");
    var selectlongitud_1 = document.getElementById("select_longitud_1").value;
    var selectlongitud_2 = document.getElementById("select_longitud_2").value;
    var muestraFormula = document.getElementById("muetstra_formula");
    //alert("Cambiar contenido: ["+inputLongitud_1.value+"] ["+inputLongitud_2.value+"] ["+selectlongitud_1+"] ["+selectlongitud_2+"]");
    var conversionLongitud;
    // Kilometro
    if (selectlongitud_1=="kilometro") {
        if (selectlongitud_2=="kilometro") {
            conversionLongitud = inputLongitud_1.value;
            inputLongitud_2.value = conversionLongitud;
        }
        if (selectlongitud_2=="metro") {
            conversionLongitud = inputLongitud_1.value * 1000;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 1000";
        }
        if (selectlongitud_2=="centimetro") {
            conversionLongitud = inputLongitud_1.value * 100000;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 100000";
        }
        if (selectlongitud_2=="milimetro") {
            conversionLongitud = inputLongitud_1.value * (1e+6);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 1000000 (1e+6)";
        }
        if (selectlongitud_2=="micrometro") {
            conversionLongitud = inputLongitud_1.value * (1e+9);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 1000000000 (1e+9)";
        }
        if (selectlongitud_2=="nanometro") {
            conversionLongitud = inputLongitud_1.value * (1e+12);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 1000000000000 (1e+12)";
        }
        if (selectlongitud_2=="milla") {
            conversionLongitud = inputLongitud_1.value / 1.609;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 1.609";
        }
        if (selectlongitud_2=="yarda") {
            conversionLongitud = inputLongitud_1.value * 1093.61;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 1094";
        }
        if (selectlongitud_2=="pie") {
            conversionLongitud = inputLongitud_1.value * 3280.84;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 3281";
        }
        if (selectlongitud_2=="pulgada") {
            conversionLongitud = inputLongitud_1.value * 39370.1;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 39370";
        }
        if (selectlongitud_2=="milla_nautica") {
            conversionLongitud = inputLongitud_1.value / 1.852;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 1.852";
        }
        
    }
    //Metro
    if (selectlongitud_1=="metro") {
        if (selectlongitud_2=="metro") {
            conversionLongitud = inputLongitud_1.value;
            inputLongitud_2.value = conversionLongitud;
        }
        if (selectlongitud_2=="kilometro") {
            conversionLongitud = inputLongitud_1.value / 1000;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividido entre 1000";
        }
        if (selectlongitud_2=="centimetro") {
            conversionLongitud = inputLongitud_1.value * 100;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 100";
        }
        if (selectlongitud_2=="milimetro") {
            conversionLongitud = inputLongitud_1.value * 1000;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 1000";
        }
        if (selectlongitud_2=="micrometro") {
            conversionLongitud = inputLongitud_1.value * (1e+6);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 1000000 (1e+6)";
        }
        if (selectlongitud_2=="nanometro") {
            conversionLongitud = inputLongitud_1.value * (1e+9);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 1000000000 (1e+9)";
        }
        if (selectlongitud_2=="milla") {
            conversionLongitud = inputLongitud_1.value / 1609;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 1609";
        }
        if (selectlongitud_2=="yarda") {
            conversionLongitud = inputLongitud_1.value * 1.09361;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 1.094";
        }
        if (selectlongitud_2=="pie") {
            conversionLongitud = inputLongitud_1.value * 3.28084;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 3.281";
        }
        if (selectlongitud_2=="pulgada") {
            conversionLongitud = inputLongitud_1.value * 39.3701;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 39.37";
        }
        if (selectlongitud_2=="milla_nautica") {
            conversionLongitud = inputLongitud_1.value / 1852;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 1852";
        }
        
    }
    //Centimetro
    if (selectlongitud_1=="centimetro") {
        if (selectlongitud_2=="centimetro") {
            conversionLongitud = inputLongitud_1.value;
            inputLongitud_2.value = conversionLongitud;
        }
        if (selectlongitud_2=="kilometro") {
            conversionLongitud = inputLongitud_1.value / 100000;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 100000";
        }
        if (selectlongitud_2=="metro") {
            conversionLongitud = inputLongitud_1.value / 100;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 100";
        }
        if (selectlongitud_2=="milimetro") {
            conversionLongitud = inputLongitud_1.value * 10;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 10";
        }
        if (selectlongitud_2=="micrometro") {
            conversionLongitud = inputLongitud_1.value * 10000;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 10000";
        }
        if (selectlongitud_2=="nanometro") {
            conversionLongitud = inputLongitud_1.value * (1e+7);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 10000000 (1e+7)";
        }
        if (selectlongitud_2=="milla") {
            conversionLongitud = inputLongitud_1.value / 160934;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 160934";
        }
        if (selectlongitud_2=="yarda") {
            conversionLongitud = inputLongitud_1.value / 91.44;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 91.44";
        }
        if (selectlongitud_2=="pie") {
            conversionLongitud = inputLongitud_1.value / 30.48;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 30.48";
        }
        if (selectlongitud_2=="pulgada") {
            conversionLongitud = inputLongitud_1.value / 2.54;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 2.54";
        }
        if (selectlongitud_2=="milla_nautica") {
            conversionLongitud = inputLongitud_1.value / 185200;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 185200";
        }
        
    }
    //Milimetro
    if (selectlongitud_1=="milimetro") {
        if (selectlongitud_2=="milimetro") {
            conversionLongitud = inputLongitud_1.value;
            inputLongitud_2.value = conversionLongitud;
        }
        if (selectlongitud_2=="kilometro") {
            conversionLongitud = inputLongitud_1.value / (1e+6);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 1000000";
        }
        if (selectlongitud_2=="metro") {
            conversionLongitud = inputLongitud_1.value / 1000;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 1000";
        }
        if (selectlongitud_2=="centimetro") {
            conversionLongitud = inputLongitud_1.value / 10;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 10";
        }
        if (selectlongitud_2=="micrometro") {
            conversionLongitud = inputLongitud_1.value * 1000;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 1000";
        }
        if (selectlongitud_2=="nanometro") {
            conversionLongitud = inputLongitud_1.value * (1e+6);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 1000000 (1e+6)";
        }
        if (selectlongitud_2=="milla") {
            conversionLongitud = inputLongitud_1.value / (1.609e+6);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 1.609e+6";
        }
        if (selectlongitud_2=="yarda") {
            conversionLongitud = inputLongitud_1.value / 914;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 914";
        }
        if (selectlongitud_2=="pie") {
            conversionLongitud = inputLongitud_1.value / 305;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 305";
        }
        if (selectlongitud_2=="pulgada") {
            conversionLongitud = inputLongitud_1.value / 25.4;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 25.4";
        }
        if (selectlongitud_2=="milla_nautica") {
            conversionLongitud = inputLongitud_1.value / (1.852e+6);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 1.852e+6";
        }
        
    }
    //Micrómetro
    if (selectlongitud_1=="micrometro") {
        if (selectlongitud_2=="micrometro") {
            conversionLongitud = inputLongitud_1.value;
            inputLongitud_2.value = conversionLongitud;
        }
        if (selectlongitud_2=="kilometro") {
            conversionLongitud = inputLongitud_1.value / (1e+9);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 1000000000 (1e+9)";
        }
        if (selectlongitud_2=="metro") {
            conversionLongitud = inputLongitud_1.value / (1e+6);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 1000000 (1e+6)";
        }
        if (selectlongitud_2=="centimetro") {
            conversionLongitud = inputLongitud_1.value / (1e+4);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 1000 (1e+4)";
        }
        if (selectlongitud_2=="milimetro") {
            conversionLongitud = inputLongitud_1.value / 1000;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 1000";
        }
        if (selectlongitud_2=="nanometro") {
            conversionLongitud = inputLongitud_1.value * 1000;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 1000";
        }
        if (selectlongitud_2=="milla") {
            conversionLongitud = inputLongitud_1.value / (1.609e+9);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 1.609e+9";
        }
        if (selectlongitud_2=="yarda") {
            conversionLongitud = inputLongitud_1.value / 914400;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 914400";
        }
        if (selectlongitud_2=="pie") {
            conversionLongitud = inputLongitud_1.value / 304800;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 304800";
        }
        if (selectlongitud_2=="pulgada") {
            conversionLongitud = inputLongitud_1.value / 25400;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 25400";
        }
        if (selectlongitud_2=="milla_nautica") {
            conversionLongitud = inputLongitud_1.value / (1.852e+9);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 1.852e+9";
        }
        
    }
    //Nanometro
    if (selectlongitud_1=="nanometro") {
        if (selectlongitud_2=="nanometro") {
            conversionLongitud = inputLongitud_1.value;
            inputLongitud_2.value = conversionLongitud;
        }
        if (selectlongitud_2=="kilometro") {
            conversionLongitud = inputLongitud_1.value / (1e+12);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 1000000000000 (1e+12)";
        }
        if (selectlongitud_2=="metro") {
            conversionLongitud = inputLongitud_1.value / (1e+9);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 1000000000 (1e+9)";
        }
        if (selectlongitud_2=="centimetro") {
            conversionLongitud = inputLongitud_1.value / (1e+7);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 1000000 (1e+7)";
        }
        if (selectlongitud_2=="milimetro") {
            conversionLongitud = inputLongitud_1.value / (1e+6);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 1000000 (1e+6)";
        }
        if (selectlongitud_2=="micrometro") {
            conversionLongitud = inputLongitud_1.value / 1000;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 1000";
        }
        if (selectlongitud_2=="milla") {
            conversionLongitud = inputLongitud_1.value / (1.609e+12);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 1.609e+12";
        }
        if (selectlongitud_2=="yarda") {
            conversionLongitud = inputLongitud_1.value / (9.144e+8);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 9.144e+8";
        }
        if (selectlongitud_2=="pie") {
            conversionLongitud = inputLongitud_1.value / (3.048e+8);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 3.048e+8";
        }
        if (selectlongitud_2=="pulgada") {
            conversionLongitud = inputLongitud_1.value / (2.54e+7);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 2.54e+7";
        }
        if (selectlongitud_2=="milla_nautica") {
            conversionLongitud = inputLongitud_1.value / (1.852e+12);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 1.852e+12";
        }
        
    }
    //Milla
    if (selectlongitud_1=="milla") {
        if (selectlongitud_2=="milla") {
            conversionLongitud = inputLongitud_1.value;
            inputLongitud_2.value = conversionLongitud;
        }
        if (selectlongitud_2=="kilometro") {
            conversionLongitud = inputLongitud_1.value * 1.609;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 1.609";
        }
        if (selectlongitud_2=="metro") {
            conversionLongitud = inputLongitud_1.value * 1609;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 1609";
        }
        if (selectlongitud_2=="centimetro") {
            conversionLongitud = inputLongitud_1.value * 160934;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 160934";
        }
        if (selectlongitud_2=="milimetro") {
            conversionLongitud = inputLongitud_1.value * 1.609e+6;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 1.609e+6";
        }
        if (selectlongitud_2=="micrometro") {
            conversionLongitud = inputLongitud_1.value * 1.609e+9;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 1.609e+9";
        }
        if (selectlongitud_2=="nanometro") {
            conversionLongitud = inputLongitud_1.value * 1.609e+12;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 1.609e+12";
        }
        if (selectlongitud_2=="yarda") {
            conversionLongitud = inputLongitud_1.value * 1760;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 1760";
        }
        if (selectlongitud_2=="pie") {
            conversionLongitud = inputLongitud_1.value * 5280;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 5280";
        }
        if (selectlongitud_2=="pulgada") {
            conversionLongitud = inputLongitud_1.value * 63360;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 2.54e+7";
        }
        if (selectlongitud_2=="milla_nautica") {
            conversionLongitud = inputLongitud_1.value / (1.151);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 1.151";
        }
        
    }
    //Yarda
    if (selectlongitud_1=="yarda") {
        if (selectlongitud_2=="yarda") {
            conversionLongitud = inputLongitud_1.value;
            inputLongitud_2.value = conversionLongitud;
        }
        if (selectlongitud_2=="kilometro") {
            conversionLongitud = inputLongitud_1.value / 1094;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 1094";
        }
        if (selectlongitud_2=="metro") {
            conversionLongitud = inputLongitud_1.value / 1.094;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 1.094";
        }
        if (selectlongitud_2=="centimetro") {
            conversionLongitud = inputLongitud_1.value * 91.44;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 91.44";
        }
        if (selectlongitud_2=="milimetro") {
            conversionLongitud = inputLongitud_1.value * 914.4;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 914";
        }
        if (selectlongitud_2=="micrometro") {
            conversionLongitud = inputLongitud_1.value * 914400;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 914400";
        }
        if (selectlongitud_2=="nanometro") {
            conversionLongitud = inputLongitud_1.value * 9.144e+8;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 9.144e+8";
        }
        if (selectlongitud_2=="milla") {
            conversionLongitud = inputLongitud_1.value / (1760);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 1760";
        }
        if (selectlongitud_2=="pie") {
            conversionLongitud = inputLongitud_1.value * 3;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 3";
        }
        if (selectlongitud_2=="pulgada") {
            conversionLongitud = inputLongitud_1.value * 36;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 36";
        }
        if (selectlongitud_2=="milla_nautica") {
            conversionLongitud = inputLongitud_1.value / (2025);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 2025";
        }
        
    }
    //Pie
    if (selectlongitud_1=="pie") {
        if (selectlongitud_2=="pie") {
            conversionLongitud = inputLongitud_1.value;
            inputLongitud_2.value = conversionLongitud;
        }
        if (selectlongitud_2=="kilometro") {
            conversionLongitud = inputLongitud_1.value / 3281;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 3281";
        }
        if (selectlongitud_2=="metro") {
            conversionLongitud = inputLongitud_1.value / 3.281;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 3.281";
        }
        if (selectlongitud_2=="centimetro") {
            conversionLongitud = inputLongitud_1.value * 30.48;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 30.48";
        }
        if (selectlongitud_2=="milimetro") {
            conversionLongitud = inputLongitud_1.value * 305;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 305";
        }
        if (selectlongitud_2=="micrometro") {
            conversionLongitud = inputLongitud_1.value * 304800;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 304800";
        }
        if (selectlongitud_2=="nanometro") {
            conversionLongitud = inputLongitud_1.value * 3.048e+8;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 3.048e+8";
        }
        if (selectlongitud_2=="milla") {
            conversionLongitud = inputLongitud_1.value / (5280);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 5280";
        }
        if (selectlongitud_2=="yarda") {
            conversionLongitud = inputLongitud_1.value / 3;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 3";
        }
        if (selectlongitud_2=="pulgada") {
            conversionLongitud = inputLongitud_1.value * 12;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 12";
        }
        if (selectlongitud_2=="milla_nautica") {
            conversionLongitud = inputLongitud_1.value / (6076);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 6076";
        }
        
    }
    //Pulgada
    if (selectlongitud_1=="pulgada") {
        if (selectlongitud_2=="pulgada") {
            conversionLongitud = inputLongitud_1.value;
            inputLongitud_2.value = conversionLongitud;
        }
        if (selectlongitud_2=="kilometro") {
            conversionLongitud = inputLongitud_1.value / 39370;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 39370";
        }
        if (selectlongitud_2=="metro") {
            conversionLongitud = inputLongitud_1.value / 39.37;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 39.37";
        }
        if (selectlongitud_2=="centimetro") {
            conversionLongitud = inputLongitud_1.value * 2.54;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 2.54";
        }
        if (selectlongitud_2=="milimetro") {
            conversionLongitud = inputLongitud_1.value * 25.4;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 25.4";
        }
        if (selectlongitud_2=="micrometro") {
            conversionLongitud = inputLongitud_1.value * 25400;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 25400";
        }
        if (selectlongitud_2=="nanometro") {
            conversionLongitud = inputLongitud_1.value * 2.54e+7;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 2.54e+7";
        }
        if (selectlongitud_2=="milla") {
            conversionLongitud = inputLongitud_1.value / (63360);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 63360";
        }
        if (selectlongitud_2=="yarda") {
            conversionLongitud = inputLongitud_1.value / 36;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 36";
        }
        if (selectlongitud_2=="pie") {
            conversionLongitud = inputLongitud_1.value / 12;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 12";
        }
        if (selectlongitud_2=="milla_nautica") {
            conversionLongitud = inputLongitud_1.value / (72913);
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud dividida entre 72913";
        }
        
    }
    //Milla Nautica
    if (selectlongitud_1=="milla_nautica") {
        if (selectlongitud_2=="milla_nautica") {
            conversionLongitud = inputLongitud_1.value;
            inputLongitud_2.value = conversionLongitud;
        }
        if (selectlongitud_2=="kilometro") {
            conversionLongitud = inputLongitud_1.value * 1.852;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 1.852";
        }
        if (selectlongitud_2=="metro") {
            conversionLongitud = inputLongitud_1.value * 1852;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 1852";
        }
        if (selectlongitud_2=="centimetro") {
            conversionLongitud = inputLongitud_1.value * 185200;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 185200";
        }
        if (selectlongitud_2=="milimetro") {
            conversionLongitud = inputLongitud_1.value * 1.852e+6;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 1.852e+6";
        }
        if (selectlongitud_2=="micrometro") {
            conversionLongitud = inputLongitud_1.value * 1.852e+9;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 1.852e+9";
        }
        if (selectlongitud_2=="nanometro") {
            conversionLongitud = inputLongitud_1.value * 1.852e+12;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 1.852e+12";
        }
        if (selectlongitud_2=="milla") {
            conversionLongitud = inputLongitud_1.value * 1.151;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 1.151";
        }
        if (selectlongitud_2=="yarda") {
            conversionLongitud = inputLongitud_1.value * 2025;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 2025";
        }
        if (selectlongitud_2=="pie") {
            conversionLongitud = inputLongitud_1.value * 6076;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 6076";
        }
        if (selectlongitud_2=="pulgada") {
            conversionLongitud = inputLongitud_1.value * 72913;
            inputLongitud_2.value = conversionLongitud;
            muestraFormula.innerHTML = "El valor de longitud por 72913";
        }
        
    }
    
}

function cambiarTemperatura() {
    var input_temperatura_1 = document.getElementById("input_temperatura_1");
    var input_temperatura_2 = document.getElementById("input_temperatura_2");
    var select_temperatura_1 = document.getElementById("select_temperatura_1").value;
    var select_temperatura_2 = document.getElementById("select_temperatura_2").value;
    var muestraFormula_temp = document.getElementById("muetstra_formula_temp");
    var conversionTemperatura;
    //celsius
    if (select_temperatura_1 == "celsius") {
        if (select_temperatura_2 == "celsius") {
            conversionTemperatura = input_temperatura_1.value;
            input_temperatura_2.value = conversionTemperatura;
        }
        if (select_temperatura_2 == "fahrenheit") {
            conversionTemperatura = (input_temperatura_1.value * 9/5)+32;
            input_temperatura_2.value = conversionTemperatura;
            muestraFormula_temp.innerHTML = "("+ input_temperatura_1.value+" x 9/5) + 32"
        }
        if (select_temperatura_2 == "kelvin") {
            conversionTemperatura = (input_temperatura_1.value + 273.15);
            input_temperatura_2.value = conversionTemperatura;
            muestraFormula_temp.innerHTML = input_temperatura_1.value+" + 273.15"
        }
        
    }
    //fahrenheit
    if (select_temperatura_1 == "fahrenheit") {
        if (select_temperatura_2 == "fahrenheit") {
            conversionTemperatura = input_temperatura_1.value;
            input_temperatura_2.value = conversionTemperatura;
        }
        if (select_temperatura_2 == "celsius") {
            conversionTemperatura = (input_temperatura_1.value - 32) * 5/9;
            input_temperatura_2.value = conversionTemperatura;
            muestraFormula_temp.innerHTML = "("+ input_temperatura_1.value+" − 32) × 5/9 "
        }
        if (select_temperatura_2 == "kelvin") {
            conversionTemperatura = (input_temperatura_1.value-32) * 5/9 + 273.15;
            input_temperatura_2.value = conversionTemperatura;
            muestraFormula_temp.innerHTML = "("+input_temperatura_1.value+" − 32) × 5/9 + 273.15"
        }
        
    }
    //kelvin
    if (select_temperatura_1 == "kelvin") {
        if (select_temperatura_2 == "kelvin") {
            conversionTemperatura = input_temperatura_1.value;
            input_temperatura_2.value = conversionTemperatura;
        }
        if (select_temperatura_2 == "celsius") {
            conversionTemperatura = (input_temperatura_1.value - 273.15);
            input_temperatura_2.value = conversionTemperatura;
            muestraFormula_temp.innerHTML = "("+ input_temperatura_1.value+" - 273.15)"
        }
        if (select_temperatura_2 == "fahrenheit") {
            conversionTemperatura = (input_temperatura_1.value-273.15) * 9/5 + 32;
            input_temperatura_2.value = conversionTemperatura;
            muestraFormula_temp.innerHTML = "("+input_temperatura_1.value+"  − 273.15) × 9/5 + 32"
        }
        
    }
}

function cambiarMasa() {
    var input_masa1 = document.getElementById("input_masa_1");
    var input_masa2 = document.getElementById("input_masa_2");
    var select_masa1 = document.getElementById("select_masa_1").value;
    var select_masa2 = document.getElementById("select_masa_2").value;
    var muestraFormula_masa = document.getElementById("muetstra_formula_masa");
    var conversionMasa;
    //gramos
    if (select_masa1 == "gramos") {
        if (select_masa2 == "gramos") {
            conversionMasa = input_masa1.value;
            input_masa2.value = conversionMasa;
        }
        if (select_masa2 == "kilogramos") {
            conversionMasa = input_masa1.value / (1000);
            input_masa2.value = conversionMasa;
            muestraFormula_masa.innerHTML = "El valor de la masa dividida entre 1000"
        }
        if (select_masa2 == "tonelada") {
            conversionMasa = input_masa1.value / (1e+6);
            input_masa2.value = conversionMasa;
            muestraFormula_masa.innerHTML = "El valor de la masa dividida entre 1e+6"
        }
        if (select_masa2 == "onza") {
            conversionMasa = input_masa1.value / (28.35);
            input_masa2.value = conversionMasa;
            muestraFormula_masa.innerHTML = "El valor de la masa dividida entre 28.35"
        }
        if (select_masa2 == "libra") {
            conversionMasa = input_masa1.value / (454);
            input_masa2.value = conversionMasa;
            muestraFormula_masa.innerHTML = "El valor de la masa dividida entre 454"
        }
        
    }
    //kilogramos
    if (select_masa1 == "kilogramos") {
        if (select_masa2 == "kilogramos") {
            conversionMasa = input_masa1.value;
            input_masa2.value = conversionMasa;
        }
        if (select_masa2 == "gramos") {
            conversionMasa = input_masa1.value * (1000);
            input_masa2.value = conversionMasa;
            muestraFormula_masa.innerHTML = "El valor de la masa por 1000"
        }
        if (select_masa2 == "tonelada") {
            conversionMasa = input_masa1.value / (1000);
            input_masa2.value = conversionMasa;
            muestraFormula_masa.innerHTML = "El valor de la masa dividida entre 1000"
        }
        if (select_masa2 == "onza") {
            conversionMasa = input_masa1.value * (35.274);
            input_masa2.value = conversionMasa;
            muestraFormula_masa.innerHTML = "El valor de la masa por 35.274"
        }
        if (select_masa2 == "libra") {
            conversionMasa = input_masa1.value * (2.205);
            input_masa2.value = conversionMasa;
            muestraFormula_masa.innerHTML = "El valor de la masa por 2.205"
        }
    }
    //tonelada
    if (select_masa1 == "tonelada") {
        if (select_masa2 == "tonelada") {
            conversionMasa = input_masa1.value;
            input_masa2.value = conversionMasa;
        }
        if (select_masa2 == "gramos") {
            conversionMasa = input_masa1.value * (1e+6);
            input_masa2.value = conversionMasa;
            muestraFormula_masa.innerHTML = "El valor de la masa por 1e+6"
        }
        if (select_masa2 == "kilogramos") {
            conversionMasa = input_masa1.value * (1000);
            input_masa2.value = conversionMasa;
            muestraFormula_masa.innerHTML = "El valor de la masa por 1000"
        }
        if (select_masa2 == "onza") {
            conversionMasa = input_masa1.value * (35274);
            input_masa2.value = conversionMasa;
            muestraFormula_masa.innerHTML = "El valor de la masa por 35274"
        }
        if (select_masa2 == "libra") {
            conversionMasa = input_masa1.value * (2205);
            input_masa2.value = conversionMasa;
            muestraFormula_masa.innerHTML = "El valor de la masa por 2205"
        }
    }
    //onza
    if (select_masa1 == "onza") {
        if (select_masa2 == "onza") {
            conversionMasa = input_masa1.value;
            input_masa2.value = conversionMasa;
        }
        if (select_masa2 == "gramos") {
            conversionMasa = input_masa1.value * (28.35);
            input_masa2.value = conversionMasa;
            muestraFormula_masa.innerHTML = "El valor de la masa por 28.35"
        }
        if (select_masa2 == "kilogramos") {
            conversionMasa = input_masa1.value / (35.274);
            input_masa2.value = conversionMasa;
            muestraFormula_masa.innerHTML = "El valor de la masa dividida entre 35.274"
        }
        if (select_masa2 == "tonelada") {
            conversionMasa = input_masa1.value / (35274);
            input_masa2.value = conversionMasa;
            muestraFormula_masa.innerHTML = "El valor de la masa dividida entre 35274"
        }
        if (select_masa2 == "libra") {
            conversionMasa = input_masa1.value / (16);
            input_masa2.value = conversionMasa;
            muestraFormula_masa.innerHTML = "El valor de la masa dividida entre 16"
        }
    }
    //libra
    if (select_masa1 == "libra") {
        if (select_masa2 == "libra") {
            conversionMasa = input_masa1.value;
            input_masa2.value = conversionMasa;
        }
        if (select_masa2 == "gramos") {
            conversionMasa = input_masa1.value * (454);
            input_masa2.value = conversionMasa;
            muestraFormula_masa.innerHTML = "El valor de la masa por 454"
        }
        if (select_masa2 == "kilogramos") {
            conversionMasa = input_masa1.value / (2.205);
            input_masa2.value = conversionMasa;
            muestraFormula_masa.innerHTML = "El valor de la masa dividida entre 2.205"
        }
        if (select_masa2 == "tonelada") {
            conversionMasa = input_masa1.value / (2205);
            input_masa2.value = conversionMasa;
            muestraFormula_masa.innerHTML = "El valor de la masa dividida entre 2205"
        }
        if (select_masa2 == "onza") {
            conversionMasa = input_masa1.value * (16);
            input_masa2.value = conversionMasa;
            muestraFormula_masa.innerHTML = "El valor de la masa por 16"
        }
    }
}

