import  './Error404.scss'
import { NavLink } from 'react-router-dom'

function Error404({imgError,textError,linkText}) {
  return (
    <div className='Error__block' >
        <div className='Error__block--image--block'>
        <img src={imgError} className='Error__block--image' alt="404"></img>
        </div>
        <p className='Error__block--text'>{textError}</p>
        <NavLink to={'/'} className='Error__block--link'>
        {linkText}
        </NavLink>
    </div>
  )
}

export default Error404