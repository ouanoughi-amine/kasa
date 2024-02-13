import Title from './items/Title'
import Tags  from './items/Tags'
import Host  from './items/Host'
import Rate  from './items/Rate'
import './ItemsContainer.scss'

const ItemsContainer = ({apartment}) => {
  return (
  <div className='items'>
    <div className='Items__block--title'>
      <Title title={apartment.title} location={apartment.location}/>
      <Tags tags={apartment.tags} />
    </div>
    <div className='Items__block--host'>
      <Host host={apartment.host} />
      <Rate numberStar={apartment.rating} />
    </div>
  </div>
  )
}

export default ItemsContainer