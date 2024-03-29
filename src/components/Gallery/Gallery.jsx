import { NavLink } from "react-router-dom";
import './Gallery.scss'
import ApartmentList from '../../Data/apartment.json';
import Cards from '../Cards/Cards.jsx';


const Gallery = () => {

  return (
   <div className='container__gallery'>
     {/* // On creer une card pour chaque element de la liste. chaque card est un lien de navigation vers product (url=product+id de l'element) */}
    {ApartmentList.map((apartment) =>(
      <NavLink key={apartment.id} to={`/Product/${apartment.id}`} >
        <Cards imgCards={apartment.cover} titleCards={apartment.title} />
        </NavLink >
    ))}
   
   


   </div>
  )
}

export default Gallery