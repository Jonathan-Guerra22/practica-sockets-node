const socketController = (socket) => {

    console.log('Cliente conectado', socket.id);
    
    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback) => {
        //console.log('Mensaje del cliente : ', payload);
        //payload.recibido = true
        
        const id = 7890;
        // Devuelve el mensaje al emisor
        callback(id);

        // Devuelve el mensaje al emisor
        //socket.emit('enviar-mensaje', payload)

        // Devuelve el mensaje a todos los que esten conectados al servidor menos a el emisor (a todos menos a el emisor)
        socket.broadcast.emit('enviar-mensaje', payload)
    })
}



module.exports = {
    socketController,
}