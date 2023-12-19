import { books } from './dataNewsBooks' 
import styled from 'styled-components'

function NewsBooks() {
    return (
        <LatestBooksContainer>
            <Title>Últimos lançamentos</Title>
            <NewsBooksContainer>
            {books.map( books => (
                <img src={books.src}/>
            ))}
            </NewsBooksContainer>
        </LatestBooksContainer>
    )
}
    
const LatestBooksContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const Title = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: #eb9b00;
    font-size: 36px;
    text-align: center;
    margin: 0;
`
const NewsBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`


export default NewsBooks