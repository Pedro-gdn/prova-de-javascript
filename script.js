let nome = document.getElementById("nome")
let resposta = document.getElementById("Resposta")

function nomedapessoa()
{
    Resposta.innerHTML = "Olá, " + nome.value + " tudo bem" 
}

let centimetros = document.getElementById("centimetros")
let acertou = document.getElementById("enviar")

function converter()
{
    acertou.innerHTML = parseInt(centimetros.value)/100
}

let sucessor = document.getElementById("Sucessor")
let antes = document.getElementById("antes")
let depois = document.getElementById("depois")

function qual()
{
    antes.innerHTML = parseInt(Sucessor.value)- 1
    depois.innerHTML = parseInt(Sucessor.value)+ 1
}

function dr()
{
    if(num1.value < num2.value)
    {
      rs.innerHTML = num1.value + " menor " + num2.value
    }
   else
   {
    rs.innerHTML = num2.value + " maior " + num1.value
   }

}



c = 1

while(c <= 100)
    {
        console.log(c)
        c = c + 1;
    }
console.log("deu bom mathueus")

a = 5

while(a <= 50)
    {
        console.log(a)
        a = a + 5;
    }

console.log("essa foi facil matheus")

b = 100
while(b >= 0)
    {
        console.log(b)
     b = b - 10
    }
console.log("foi muito facil essa mathueus")

console.log("a 6 esta muito dificil mathues")