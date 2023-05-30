// const miBoton = document.getElementById('miBoton');


// miBoton.addEventListener("click",handleClick);

// function handleClick(){
//     alert("!hola! |||||Funciona!!!!!.")
// }

function showAlert(){
    alert("esta es una alerta desde javascript")
}
const form = document.getElementById('myForm');

form.addEventListener('submit',function(event){
    event.preventDefault();
    validateForm();
})


function validateForm(){
 const input = document.
getElementById('email');
const inputValue = input.value;
 
if (!validateEmail(inputValue)){
    alert('Por favor ingrese un correo electronico valid.');
 }else{
    alert('correo elecotrinico enviado correctamente.');
 }
}
function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}