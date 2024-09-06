let sliderElement = document.querySelector("#slider")
let buttonelement = document.querySelector("button") 

let sizePassword = document.querySelector("#valor")
let Password = document.querySelector("#password")

let containerpassword = document.querySelector("#container-password")

let charset = ("abcdefghijkçmnop,qrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012345678910")
let novasenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oniput = function() {
    sizePassword.innerHTML = this.value;
}

function generatepassword () {
  let pass = "";

  for(let i = 0, n = chartset.length; i < sliderElement.value, ++i){
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
  console.log(pass)
}

containerpassword.classList.remove("hide");
Password.innerHTML = pass;
novasenha = pass;

function copypassword() {
    alert ('senha copiada com sucesso')
    navigator.clipboard.writeText(novasenha);
}
