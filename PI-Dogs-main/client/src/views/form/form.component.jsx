import { useState } from 'react';
import './form.styles.css';

function Form() {
const [input,setInput] = useState({
img:"",
name:"",
height:"",
weight:"",
life_span:"",
temperaments:[],
temperaments2:[]
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
  if(!/^\d{1,2}(-\d{1,2})?$/.test(value.life_span)){
    return "El formato no es el correctooooo!!";
  }
  age = value.life_span.split('-');
  if(age.length < 2 && parseInt(age[0]) < 1){
    return "El valor no puede ser menor a 1";
  }else if(parseInt(age[0]) > parseInt(age[1])){
    return "El primer valor no puede ser mayor al segundo";
  }else if(parseInt(age[0]) === parseInt(age[1])){
    return "Los valores de años de vida no pueden ser iguales!";
  }
  return "";
};

function validTemps(value) {
console.log(value)
if (value.length < 3) {
  return "Debe contener al menos 3 caracteres";
}
return "";
};

const [error,setError] = useState({
  img:"requerido",
  name:"requerido",
  height:"requerido",
  weight:"requerido",
  life_span:"requerido",
  temperaments2:"requerido",
  total:"no nulo!!!"
  })

  const validate=(input, name) => {
  
    let imgError = error.img;
    let nameError = error.name;
    let heightError = error.height;
    let weightError = error.weight;
    let lifeSpanError = error.life_span;
    let temps2 = error.temperaments2;

    
    if(name === "img"){
      imgError = validImg(input);
    }
    if(name === "name"){
      nameError = validName(input);
    }
    if(name === "height"){
      heightError = validHeight(input);
    }
    if(name === "weight"){
      weightError = validWeight(input);
    }
    if(name === "life_span"){
      lifeSpanError = validLifeSpan(input);
    }
    if(name === "temperaments2"){
      console.log("falta la funcion de temperamentos!!")
      temps2 = validTemps(input.temperaments2);
    }

    const totalError = nameError || imgError || heightError || weightError || lifeSpanError;

    setError({
      ...error,
      img: imgError,
      name: nameError,
      height: heightError,
      weight: weightError,
      life_span: lifeSpanError,
      total: totalError ? "no nulo!!!" : null
    });

  //setError({...error,name:nameError,img:imgError,height:heightError,weight:weightError,life_span:lifeSpanError});

    
    // if(error.name === "" && error.img === "" ){
    //   console.log(error.total);
    //   //setError({})
    //   //setError({...error,total:null});
    //   //error.total = null
    //   setError((prevError) => ({ ...prevError, total: null}));
    // }
  };
const handleChange = (e) => {
//function handleChange(e){
  //e.preventDefault()

  if(e.target.name === "temperaments"){
    if(input.temperaments.includes(e.target.value)) return
    setInput({
      ...input,
      [e.target.name]:[...input[e.target.name], e.target.value]});
      return
    };
    
  if(e.target.name === "temperaments2"){
    let value = document.getElementById(e.target.name).value;
    if(input.temperaments2.includes(value)) return
    if(value === "") return;
    setInput({
      ...input,
      [e.target.name]:[...input[e.target.name], value]})
      validate(input, e.target.name);
      return
  }

  

  setInput({
    ...input,
    [e.target.name]:e.target.value});

  validate({
    ...input,
    [e.target.name]:e.target.value}, e.target.name);    
  }
  //hardcodeo solamente a modo de prueva

  const temperamentos = [
    "Stubborn","Curious","Playful","Adventurous","Active"
  ]

  const remove = (e) => {
    const value = document.getElementById(e.target.name).value
    setInput({
      ...input,
      [e.target.name]:[...input[e.target.name].filter(x => x!==e.target.id)] 
    })
  }

  return (
  
      <div>
        {console.log(input)}
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>Nombre: </label>
            <input name="name" value={input.value} onChange={handleChange}/>
            <span>{error.name}</span>
          </div>
          <div>
            <label>Ruta img: </label>
            <input name="img" value={input.value} onChange={handleChange}/>
            <span>{error.img}</span>
          </div>
          <div>
            <label>Altura: </label>
            <input name="height" value={input.value} onChange={handleChange}/>
            <span>{error.height}</span>
          </div>
          <div>
            <label>Peso: </label>
            <input name="weight" value={input.value} onChange={handleChange}/>
            <span>{error.weight}</span>
          </div>
          <div>
            <label>Años de Vida: </label>
            <input name="life_span" value={input.value} onChange={handleChange}/>
            <span>{error.life_span}</span>
          </div>
          <div>
            <label>Temperamentos: </label>
            <select onChange={handleChange} name="temperaments" id="">
              {
                temperamentos.map(p => <option key={p} value={p}>{p}</option>)
              }
            </select>
            {
              input.temperaments.map( p => <div key={p}><span id={"temperaments"}>{p}</span><button name='temperaments' onClick={remove} type='button' id={p}>X</button></div>)
            }
          </div>
          <div>
            <label>TemperamentosB: </label>

            <input type="text" name='temperaments2' id='temperaments2'/>
            <button onClick={handleChange} name='temperaments2'  type='button'>Agregar!!</button>
          </div>
          {
              input.temperaments2.map( p => <div key={p}><span id={"temperaments2"}>{p}</span><button name='temperaments2' onClick={remove} type='button' id={p}>X</button ></div>)
          }
          {error.total ? null : <button type='submit'>Crear Dog</button>}
          
        </form>
      </div>

    
  )
}

export default Form;