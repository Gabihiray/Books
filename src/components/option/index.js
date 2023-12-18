import './style.css'
const textoption = ['Categorias', 'Favoritos', 'Minha estante']


function Option () {
    return (
        <div>
            <ul className='options'>
                { textoption.map((text) => (
                <li className='option'><p>{text}</p></li>
            ))}
            </ul>
      </div>
    )
}

export default Option;