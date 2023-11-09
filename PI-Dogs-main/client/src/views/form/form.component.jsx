import { useState } from 'react';
import './form.styles.css';

function Form() {
const [input,setInput] = useState({
img:"",
name:"",
height:"",
weight:"",
life_span:"",
temperaments:[]
})

function validImg(value) {
  if(value.img === "xxx"){
    return "";
    } else if(value.img === ""){
      return "No puede estar vacio!!!";
    }else if(!/\.(jpg|jpeg|png|gif|bmp)$/i.test(value.img)){
      return "El formato de url es incorrecto!!";
    }
    return "";
    
};
function validName(value) {
  if(/\d/.test(value.name)){
      return "No puede contener numeros!!!";
    } else if(value.name === ""){
      return "No puede estar vacio!!!";
    }
    return "";
};

function validHeight(value) {
  let altura = [];
  if(!/^\d{1,2}-\d{1,2}$/.test(value.height)){
    return "El formato no es el correcto!!";
  }
  altura = value.height.split('-');
  if(parseInt(altura[0]) > parseInt(altura[1])){
    return "El primer valor no puede ser mayor al segundo";
  }else if(parseInt(altura[0]) === parseInt(altura[1])){
    return "Los valores de las alturas no pueden ser iguales!!";
  }
  return "";
};

function validWeight(value) {
  let peso = [];
  if(!/^\d{1,2}-\d{1,2}$/.test(value.weight)){
    return "El formato no es el correcto!!";
  }
  peso = value.weight.split('-');
  if(parseInt(peso[0]) > parseInt(peso[1])){
    return "El primer valor no puede ser mayor al segundo";
  }else if(parseInt(peso[0]) === parseInt(peso[1])){
    return "Los valores de peso no pueden ser iguales!!";
  }
  return "";
};


function validLifeSpan(value) {
  let age = [];
  if(!/^\d{1,2}-\d{1,2}$/.test(value.life_span)){
    return "El formato no es el correcto!!";
  }
  peso = value.life_span.split('-');
  if(parseInt(age[0]) > parseInt(age[1])){
    return "El primer valor no puede ser mayor al segundo";
  }else if(parseInt(age[0]) === parseInt(age[1])){
    return "Los valores de años de vida no pueden ser iguales!";
  }
  return "";
};

const [error,setError] = useState({
  img:"requerido",
  name:"requerido",
  height:"requerido",
  weight:"requerido",
  life_span:"requerido",
  temperaments:"requerido"
  })

  const validate=(input)=>{

    const imgError = validImg(input);
    const nameError = validName(input);
    const heightError = validHeight(input);
    const weightError = validWeight(input);
    const lifeSpanError = validLifeSpan(input);

    // if(/\d/.test(input.name)){
    //   setError({...error,name:"No puede contener numeros!!!"})
    //   return;
    // } else if(input.name === ""){
    //   setError({...error,name:"No puede estar vacio!!!"})
    //   return;
    // }

    // if(input.img === ""){
    //   setError({...error,img:"No puede estar vacio!!!"})
    //     return;
    //   } 
  setError({...error,name:nameError,img:imgError,height:heightError,weight:weightError,life_span:lifeSpanError});

  
  };

function handleChange(e){

  if(e.target.name === "temperaments"){
    if(input.temperaments.includes(e.target.value)) return
    setInput({
      ...input,
      [e.target.name]:[...input[e.target.name], e.target.value]});
      return
  }

  setInput({
    ...input,
    [e.target.name]:e.target.value});

  validate({
    ...input,
    [e.target.name]:e.target.value});    
  }
  //hardcodeo solamente a modo de prueva

  const temperamentos = [
    "Stubborn","Curious","Playful","Adventurous","Active"
  ]

  return (
  
      <div>
        {console.log(input)}
        <form onSubmit={""}>
          <div>
            <label>Nombre:</label>
            <input name="name" value={input.value} onChange={handleChange}/>
            <span>{error.name}</span>
          </div>
          <div>
            <label>Ruta img:</label>
            <input name="img" value={input.value} onChange={handleChange}/>
            <span>{error.img}</span>
          </div>
          <div>
            <label>Altura:</label>
            <input name="height" value={input.value} onChange={handleChange}/>
            <span>{error.height}</span>
          </div>
          <div>
            <label>Peso:</label>
            <input name="weight" value={input.value} onChange={handleChange}/>
            <span>{error.weight}</span>
          </div>
          <div>
            <label>Años de Vida:</label>
            <input name="life_span" value={input.value} onChange={handleChange}/>
            <span>{error.life_span}</span>
          </div>
          {/* <div>
            <label>Temperamentos:</label>
            <input name="temperaments3" value={input.value} onChange={handleChange}/>
            <span>{error.temperaments}</span>
          </div> */}
          <div>
            <label>Temperamentos:</label>
            <select onChange={handleChange} name="temperaments" id="">
              {
                temperamentos.map(p => <option key={p} value={p}>{p}</option>)
              }
              
            </select>
          </div>
          {error.name ? null : <button type='submit'>Crear Dog</button>}
          
        </form>
      </div>

    
  )
}

export default Form;