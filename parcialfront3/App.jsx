import Card from "./Card"

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
    const [cancion, setCancion] = useState('')
    const [artista, setArtista] = useState('')
    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)
    
    const handleSubmit = (event) => {
      event.preventDefault()
      if(cancion.trimStart.length >= 3 && artista.length >= 6){
        setShow(true)
      } else {
        setErr(true)
      }

    }


  return (
    <div className="App">
      <h1>Elige un color</h1>
      <form onSubmit={handleSubmit}>
        <label >Canción: </label>
        <input type="text" onChange={(event) => setCancion(event.target.value).trimStart}/>
        <label >Artista: </label>
        <input type="text" onChange={(event) => setArtista(event.target.value)}/>
        <button>Enviar</button>
        </form>
        {show ?
          <>
            Card(cancion, artista)
          </>
        : <p>Ingrese tótulo de la canción y arista</p>}
        {err ? <p style={{color: 'red'}}>Por favor chequea que la información sea correcta</p> : null}
    </div>
  );
}

export default App;
