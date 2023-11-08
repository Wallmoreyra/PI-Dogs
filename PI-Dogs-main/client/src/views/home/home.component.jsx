import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getByName, getDogs } from '../../redux/actions';

import Navbar from '../../components/navbar/navbar.component';
import Cards from '../../components/cards/cards.component';

import './home.styles.css';



function Home() {

  const dispatch = useDispatch();
  const allDogs = useSelector((state)=>state.allDogs);
  const [searchString,setSearchString] = useState("");

   function handleChange(e){
    e.preventDefault(e)
    setSearchString(e.target.value.toLowerCase())
  };

  //*Filtro con la DB y la API

  function handleSubmit (e){
    e.preventDefault()
    dispatch(getByName(searchString))
  }


  //* filtro sobre el estado
  // const [filtered, setFiltered] = useState(allDogs);
  // const [searchString,setSearchString] = useState("");

  // function handleChange(e){
  //   e.preventDefault(e)
  //   setSearchString(e.target.value.toLowerCase())
  // };

  // function handleSubmit(e){
  //   e.preventDefault();
  //   const filtered = allDogs.filter(dog => dog.name.toLowerCase().includes(searchString));
  //   setFiltered(filtered);
  // };

  useEffect(()=>{
    dispatch(getDogs())
    //agregar el clear detatail para que se limpie la pag de Detail
    // return (()=>{
    //   clearDetail()
    // })
  }, [dispatch])

  return (
    <>
      <div className='home'>
        <h2 className='home-title'>Home</h2>
        <Navbar handleChange={handleChange} handleSubmit={handleSubmit}/>
        <Cards allDogs = {allDogs} />
      </div>
      
    </>
  )
}

export default Home;