//RECETA PARA CONSUMIR APIS CON JS PURO!!

//PASO#1: si yo quiero consumir un API debo saber para donde ir y a que servicio...
//DEBO CONFIGURAR LA URI

const URI="https://api.spotify.com/v1/artists/7dGJo4pcD2V6oG8kP0tJRR/top-tracks?market=US"

//PASO#2: configuro datos ESPECIALES o de CONTROL en el servidor
const TOKEN="Bearer BQACzA8KjTD5o_-Jb8uX-f3aqlFNYO5rvN7Q_LjRC79UXxPRcK-iAlG9mMSYt56oOJSg82fhBgRqCQkhnOoz1WmEFjdcsgQv2YlFI3aL3F-K4TrBH_7v9D7mksjYvZP8XoHbsXe8xc2zG7Dd4bHbCeG_7t3cUbt8VMSMNqFqE6q_sizu"

//PASO#3: confuguro la peticion.
//NOTA: solo GET y PUT configuran BODY
//para JS la peticion es un OBJETO

const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN},
}

//PASO#4: consuma el API

fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json() //GARANTIZO FORMATO JSON
})
.then(function(respuesta){
    console.log(respuesta) //HAGO LO QUE QUIERA CON RESPUESTA
    console.log(respuesta.tracks) //ACCEDO A UN ATRIBUTO DE LA ESPUESTA


                        //RECORRER UN ARREGLO
respuesta.tracks.forEach(function(cancion){
    console.log(cancion)
    console.log(cancion.name)
    console.log(cancion.preview_url)
    console.log(cancion.album.images[0].url)
    
});                            


})
.catch(function(respuestaError){
    console.log(respuestaError)
})