import Carousel from "../components/Carousel";
import ApartmentList from '../apartment.json';
import Collapse from '../components/Collapse';
import { useParams } from 'react-router-dom';
import ItemsContainer from '../components/ItemsContainer/ItemsContainer';
import NotFound from '../pages/NotFound'
import '../pages/Product.scss'

const Product = () => {
  const { id } = useParams();
  const apartment = ApartmentList.find((apartment) => apartment.id === id);

  if (!apartment) {
    return <NotFound />;
  }

  const collapseText = [
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
        {collapseText.map((item, index) => (
          <Collapse key={index} title={item.label} description={item.text} />
        ))}
      </section>
    </main>
  );
};

export default Product;
