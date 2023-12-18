import './style.css'
import Logo from '../logo/index'
import Option from '../option/index'
import Icons from '../iconHeader/index'

function Header () {
    return (
        <header className='App-header'>
            <Logo/>
            <Option/>
            <Icons/>
        </header>
    )
}

export default Header