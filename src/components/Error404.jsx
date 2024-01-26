import  './Error404.scss'
import { NavLink } from 'react-router-dom'

function Error404({imgError,textError,linkText}) {
  return (
    <div className='Error__block' >
        <div className='Error__block--image'>
        <img src={imgError} alt="404"></img>
        </div>
        <p>{textError}</p>
        <NavLink to={'/'} className='Error__block--link'>
        {linkText}
        </NavLink>
    </div>
  )
}

export default Error404