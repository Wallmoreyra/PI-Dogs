import './card.styles.css';
import {Link} from 'react-router-dom';

function Card({dog}) {
  const {id,img,name,temperaments,weight} = dog
  //console.log(dog);

  return (
      <div className='card-container'>
        <Link to={`/home/:${id}`}>
        <img className='card-img' src={img} alt="dog_img" />
        <h2>{name}</h2>
        <label>Temps:</label>
        <span>{temperaments.join(', ')}</span>
        <br/>
        <label>Peso:</label>
        <span>{weight} Kg</span>
        </Link>
      </div>
      
  )
}


export default Card;