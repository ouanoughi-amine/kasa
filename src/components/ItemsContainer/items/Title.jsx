import './Title.scss'

function Title({title, location}) {
  return (
    <div className='title'>
        <h2 className='Title__main'>{title}</h2>
        <p className='Title__text'>{location}</p>
    </div>
  )
}

export default Title