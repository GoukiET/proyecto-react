

export const Formulario = () => {
  return (
    <div className="container">
      <div className="mb-3">
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombre"/>
      </div>
      <div className="mb-3">
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email"/>
      </div>
      <div className="mb-3">
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Teléfono"/>
      </div>
      <div className="mb-3">
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Sugerencias y/o Comentarios"></textarea>
      </div>
      <div>
      <button type="button" className="btn btn-outline-success" >Enviar</button>
      </div>
  </div>
  )
}
