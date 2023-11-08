import { useState } from 'react';
import './form.styles.css';

function Form() {
const [input,setInput] = useState({
img:"",
name:"",
height:"",
weight:"",
life_span:"",
temperaments:""
})

const [error,setError] = useState({
  img:"",
  name:"",
  height:"",
  weight:"",
  life_span:"",
  temperaments:""
  })

  const validate=(input)=>{
    if(/\d/.test(input.name)){
      setError({...error,name:"No puede contener numeros!!!"})
      return;
    }
  setError({...error,name:""})
  
  };

function handleChange(e){

  setInput({
    ...input,
    [e.target.name]:e.target.value});

  validate({
    ...input,
    [e.target.name]:e.target.value});    
}

  return (
    <>
      <div>
        <form onSubmit={""}>
          <div>
            <label>Nombre:</label>
            <input name="name" value={input.value} onChange={handleChange}/>
            <span>{error.name}</span>
          </div>
          <div>
            <label>Ruta img:</label>
            <input name="img" value={input.value} onChange={handleChange}/>
          </div>
          <div>
            <label>Altura:</label>
            <input name="height" value={input.value} onChange={handleChange}/>
          </div>
          <div>
            <label>Peso:</label>
            <input name="weight" value={input.value} onChange={handleChange}/>
          </div>
          <div>
            <label>Años de Vida:</label>
            <input name="life_span" value={input.value} onChange={handleChange}/>
          </div>
          <div>
            <label>Temperamentos:</label>
            <input name="temperaments" value={input.value} onChange={handleChange}/>
          </div>
        </form>
      </div>

    </>
  )
}

export default Form;