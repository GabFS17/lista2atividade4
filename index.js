const fundo = document.getElementById('fundo') //elemento body

const url = new URL(document.URL); 
const params = new URLSearchParams(url.search);

var cor = params.get('cor') // valor/texto digitado no input

fundo.classList.remove(fundo.classList)
fundo.classList.add(cor)