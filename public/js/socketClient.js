console.log('socket client');

const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');


const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', ()=>{
    //console.log('conectado');
    lblOffline.style.display = 'none'
    lblOnline.style.display = ''
})

socket.on('disconnect', ()=>{
    //console.log('desconectado');

    lblOnline.style.display = 'none'
    lblOffline.style.display = ''
})



btnEnviar.addEventListener('click', ()=>{
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id:6789,
        fecha: new Date().getTime()
    }
    socket.emit('enviar-mensaje', payload, (id) =>{
        
        console.log(id);
        //console.log(payload);
    });
});

socket.on('enviar-mensaje', (payload) => {
    console.log( payload )
})
