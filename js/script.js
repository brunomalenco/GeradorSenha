let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")

let sizePassword = document.querySelector("#valor")
let password = document.querySelector("#password")

let containerPassword = document.querySelector("#container-password")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%*()+-_"
let novaSenha = ""

sizePassword.innerHTML = sliderElement.value
slider.oninput() = function(){
    sizePassword.innerHTML = this.value
}

function gerandoSenha(){
    let pass = ""
    for(i = 0, n = charset.length;i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random) * n)
    }

    console.log(pass)
}
