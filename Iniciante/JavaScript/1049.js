var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = lines.shift();
var B = lines.shift();
var C = lines.shift();
var result = "";

if (A == "vertebrado"){
    if (B == "ave"){
        if (C == "carnivoro"){ result = "aguia";
        } else if(C == "onivoro")
        { result = "pomba";
        }} else if (B == "mamifero"){
            if (C == "onivoro"){
                result = ("homem");
            } else if (C == "herbivoro"){
                result = ("vaca");
            }}} else if (A == "invertebrado"){
                if(B == "inseto"){
                    if(C == "hematofago"){
                        result = "pulga";
                    } else if (C == "herbivoro"){
                        result = "lagarta";
                    }} else if (B == "anelideo"){
                        if(C == "hematofago"){
                            result = "sanguessuga";
                        } else if (C == "onivoro"){
                            result = "minhoca";
                        }}}

console.log(result);