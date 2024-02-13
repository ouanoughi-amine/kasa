import './Tags.scss'

const Tags = ({tags}) => {

  return (
    <div className='tags'>
          {/* Mapping sur chaque élément de la liste des tags */}
        {tags.map((tags, index) => (
          <p className='tags__text' key={index}>{tags}</p>
        ))}
    </div>
  )
}

export default Tags