//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card(cancion, artista) {

  return (
    <div>
      <h1>{cancion}</h1>
      <h1>{artista}</h1>
    </div>
  );
}

export default Card;
