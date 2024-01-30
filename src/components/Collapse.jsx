import './Collapse.scss'



function Collapse( {className,title, description}) {
    
  return (
    <div className='block'>
   <div className='block__red'>
    <p className='block__red-title'>{title}</p>
    <img src="../src/assets/dropdown.png" alt="dropdown " />

   </div>
   <div className='block__gray' >
  <p>{description}</p>
    
   </div>
   </div>
  )
}

export default Collapse




