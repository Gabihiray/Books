
import profile from '../../img/perfil.svg'
import bag from '../../img//sacola.svg'
import './style.css'

const icons = [profile, bag]

function Icons () {
     return (
        <ul className='icons'>
        {icons.map((icons) => (
        <li className='icon'><img src={icons}></img></li>
    ))}
    </ul>
     )
}

export default Icons