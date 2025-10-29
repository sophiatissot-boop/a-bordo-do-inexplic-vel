const avanca = document.querySelectorAll ('.btn-proximo')
console.log(avanca)

avanca.forEach(button =>{
    button.addEventListener('cluck', function(){
    const atual =document.querySelector('.ativo')
    const proximoPasso = 'passo-' + getAttribute('data-proxima')

    atual.classList.remove('ativo')
    document.getElementById(proximoPasso).classList.add('ativo')
    })
})