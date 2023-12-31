import Input from '../input/index'
import styled from 'styled-components'
import { useState } from 'react'
import { books } from './dataSearch'

function Search () {
    
    const [bookSearch, setBookSearch] = useState([])

    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={event => {
                    const textSearch = event.target.value
                    const resultSearch = books.filter( books => books.name.toLowerCase().includes(textSearch))
                    setBookSearch(resultSearch)
                }}
            />
            { bookSearch.map(books => (
                <Result>
                    <p>{books.name}</p>
                    <img src={books.src}/>
                </Result>
            )) }            
        </SearchContainer>
    )
}

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #fff;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitle = styled.h3`
font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 20px;
    
    &:hover {
        border: 1px solid white-space;
    }
    
    p {
        width: 200px;
    }

    img {
        width: 100px;
    } 
`

export default Search