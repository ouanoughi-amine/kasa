import './Tags.scss'

function Tags({tags}) {
  return (
    <div className='tags'>
        {tags.map((tags, index) => (
          <p className='tags__text' key={index}>{tags}</p>
        ))}
        </div>
  )
}

export default Tags