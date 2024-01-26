import './Rate.scss'
import StarColor from './../../../assets/star-color.png'
import StarGrey from './../../../assets/star-grey.png'

function Rate({numberStar}) {
  return (
    <div className='rate'>
     {/* //on indique qu'il y a 5 element dans notre tableau */}
     {Array.from({ length: 5 }, (item, index) => (
          <img
            key={index}
            // si la valeur de iconStarNumber est sup a la valeur de l'index (donc 5) tu importe Colorstar sinon tu importe ColorGrey
            src={index < numberStar ? StarColor : StarGrey}
            alt={`étoile`}
          />
        ))}

    </div>
  )
}

export default Rate