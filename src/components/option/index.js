import styled from 'styled-components'

const textoption = ['Categorias', 'Favoritos', 'Minha estante']

function Options () {
    return (
        <div>
            <OptionsHeader>
                { textoption.map((text) => (
                <Option><p>{text}</p></Option>
            ))}
            </OptionsHeader>
      </div>
    )
}

const OptionsHeader = styled.ul`
    display: flex;
`
const Option = styled.li`
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-width: 120px;
    height: 100%;
    cursor: pointer;
    padding: 0 5px;
`

export default Options;