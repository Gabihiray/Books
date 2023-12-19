import { books } from './dataNewsBooks' 
import styled from 'styled-components'
import { Title } from '../title/index'
import CardRecommendation from '../card'
import imgBook from '../../img/livro2.png'

function NewsBooks() {
    return (
        <LatestBooksContainer>
            <Title 
            color='#eb9b00' 
            size="36px" 
            >
                Últimos lançamentos
            </Title>
            <NewsBooksContainer>
            {books.map( books => (
                <img src={books.src}/>
            ))}
            </NewsBooksContainer>
            <CardRecommendation
            title="Talvez você se interesse por"
            substitle="Angular 11"
            description="Construindo uma aplicação com a plataforma Google"
            img={imgBook}
            />
        </LatestBooksContainer>
    )
}
    
const LatestBooksContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewsBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`


export default NewsBooks