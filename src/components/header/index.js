import styled from 'styled-components'
import Logo from '../logo/index'
import Options from '../option/index'
import Icons from '../iconHeader/index'

function Header () {
    return (
        <AppContainer>
            <Logo/>
            <Options/>
            <Icons/>
        </AppContainer>
    )
}

const AppContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

export default Header