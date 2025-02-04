// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigos(){
    let input = document.getElementById('amigo');
    let lista = document.getElementById('listaAmigos');
    let nombre = input.value.trim();

    if(nombre === ""){
        alert('ingrese un nombre valido');
        return;
    }

    if(amigos.includes(nombre)){
        alert('este nombre ya ha sido agregado')
        return;
    }
    amigos.push(nombre);
    input.value = '';
}

function actualizar(){
    const lista = document.getElementById('listaAmigos');
    lista.innerText ="";

    amigos.forEach(amigo =>{
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.append(li);
    })
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Agrega al menos dos amigos para sortear.");
        return;
    }

    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    let copiaAmigos = [...amigos];
    let asignaciones = {};

    amigos.forEach(amigo => {
        let amigoSecreto;
        do {
            amigoSecreto = copiaAmigos[Math.floor(Math.random() * copiaAmigos.length)];
        } while (amigoSecreto === amigo || asignaciones[amigoSecreto]);
        
        asignaciones[amigo] = amigoSecreto;
        copiaAmigos = copiaAmigos.filter(a => a !== amigoSecreto);
    });

    for (const [amigo, secreto] of Object.entries(asignaciones)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${secreto}`;
        resultadoLista.appendChild(li);
    }
}

function sortearUnAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    document.getElementById("resultado").innerHTML = `<p>El amigo sorteado es: <strong>${amigoSorteado}</strong></p>`;
}