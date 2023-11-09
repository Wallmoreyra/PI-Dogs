import './cards.styles.css';
import Card from '../card/card.component';

function Cards({allDogs}) {

  const dogsList = allDogs

  return (
    
      <div className='card-list'>
        {dogsList?.map(dog => (
          <Card key={dog.id} dog = {dog}/>
          ))}
      </div>
    
  )
}

export default Cards;