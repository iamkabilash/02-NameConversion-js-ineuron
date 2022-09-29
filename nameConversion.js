const camel_case = document.getElementById("camel-case");
const pascal_case = document.getElementById("pascal-case");
const snake_case = document.getElementById("snake-case");
const screaming_snake_case = document.getElementById("screaming-snake-case");
const kebab_case = document.getElementById("kebab-case");
const screaming_kebab_case = document.getElementById("screaming-kebab-case");

const button = document.getElementById("convert-btn");


function transformText(){
    const input_text = document.getElementById("text").value;
    camel_case.innerText = input_text.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        if (+match === 0) return "";
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
      });
    pascal_case.innerText = input_text.replace(/(\w)(\w*)/g,function(g0,g1,g2){
        return g1.toUpperCase() + g2.toLowerCase();
    });
    snake_case.innerText = input_text.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
                                    .map(x => x.toLowerCase())
                                    .join('_');
    screaming_snake_case.innerText = input_text.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
                                    .map(x => x.toUpperCase())
                                    .join('_');
    kebab_case.innerText = input_text.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
                                        .map(x => x.toLowerCase())
                                        .join('-');
    screaming_kebab_case.innerText = input_text.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
                                        .map(x => x.toUpperCase())
                                        .join('-');
}

button.addEventListener("click", transformText);

// camel_case.innerText = "hello".toUpperCase();