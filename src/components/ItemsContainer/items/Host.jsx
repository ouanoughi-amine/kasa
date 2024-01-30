import './Host.scss'


function Host({host}) {
  return (
    <div className='host'>
      <p className='host__name'>{host.name}</p>
      <img className='host__image' src={host.picture} alt={host.name} />
      </div>
  )
}

export default Host