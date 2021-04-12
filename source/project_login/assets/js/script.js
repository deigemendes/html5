document.getElementById('btn-submit').addEventListener('click', e => {

    console.log('botão clicado');

});

document.getElementById('form-login').addEventListener('mouseenter', e => {

    console.log('Estou no form'); 

}); 

document.querySelector('#form-login').addEventListener('mouseleave', e => {

    console.log('Mouse Saiu'); 

}); 

document.querySelector('#form-login').addEventListener('submit', e => {

    e.preventDefault();

    let email = document.querySelector("#email").value ; 
    let password = document.querySelector("#password").value ; 
    
    let json = {
        email,
        password
    };

    let stringJSON = JSON.stringify(json); 
    let jsonParse = JSON.parse(stringJSON); 

    if(!json.email) {

        console.error('O campo email deve ser preenchido'); 

    } else if(!json.password) {

        console.error('O campo password deve ser preenchido'); 
    } else {

        console.info('Dados validados com sucesso'); 
    }


})