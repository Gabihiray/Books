import styled from 'styled-components'
import logo from '../../img/logo.svg'

function Logo() {
    return (
          <LogoContainer>
            <LogoImage src={logo} alt='logo' />
            <p><strong>Alura</strong>Books</p>
          </LogoContainer>
    )
}

const LogoContainer = styled.div`
    display: flex;
    font-size: 2rem;
`

const LogoImage = styled.img`
    margin-right: 10px;
`

export default Logo;