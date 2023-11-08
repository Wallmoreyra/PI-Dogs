import './card.styles.css';
import {Link} from 'react-router-dom';

function Card({dog}) {
  const {id,img,name,temperaments,weight} = dog
  //console.log(dog);

  return (
    <>
      <div className='card-container'>
        <Link to={`/home/:${id}`}>
        <img src={img} alt="dog_img" />
        <h2>Nombre:{name}</h2>
        <p>Temp:{temperaments}</p>
        <p>Peso:{weight} Kg</p>
        </Link>
      </div>
      
    </>
  )
}


export default Card;