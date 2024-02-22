import Carousel from "../../components/Carousel/Carousel.jsx";
import ApartmentList from './../../Data/apartment.json';
import Collapse from '../../components/Collapse/Collapse.jsx';
import { useParams } from 'react-router-dom';
import ItemsContainer from '../../components/ItemsContainer/ItemsContainer';
import NotFound from '../NotFound/NotFound'
import './Product.scss'

const Product = () => {
    // On obtient l'ID de l'appartement à partir des paramètres de l'URL
  const { id } = useParams();
    //On trouve l'objet appartement dans la liste en fonction de l'ID
  const apartment = ApartmentList.find((apartment) => apartment.id === id);

  if (!apartment) {
    return <NotFound />;
  }

  const collapseTexts = [
    { label: 'Description', text: apartment.description },
    { label: 'Equipement', text: apartment.equipments },
  ];

  return (
    <main className="product__container">
      <section className="product__container__carousel">
        <Carousel images={apartment.pictures} />
      </section>
      <ItemsContainer apartment= {apartment}/>
      <section className="product__container__collapse">
        {collapseTexts.map((item, index) => (
          <Collapse className='collapse--product' key={index} title={item.label} description={item.text} />
        ))}
      </section>
    </main>
  );
};

export default Product;

