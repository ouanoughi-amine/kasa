import './Title.scss'

const Title = ({title, location}) => {
  return (
    <div className='title'>
        <h2 className='title__main'>{title}</h2>
        <p className='title__text'>{location}</p>
    </div>
  )
}

export default Title