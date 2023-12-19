import styled from 'styled-components'
import profile from '../../img/perfil.svg'
import bag from '../../img//sacola.svg'

const icons = [profile, bag]

function Icons () {
     return (
        <IconsHeader>
        {icons.map((icons) => (
        <Icon><img src={icons}></img></Icon>
    ))}
    </IconsHeader>
     )
}

const IconsHeader = styled.ul`
    display: flex;
    align-items: center;
`
const Icon = styled.li`
    margin-right: 3rem;
    width: 25px;
`

export default Icons