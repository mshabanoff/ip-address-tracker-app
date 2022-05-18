import './Card.css'

const Card = (props) => {
    
    return (
        <div className='tags col-md-3 col-12'>
            <header>{props.title}</header>
            <main>{props.content}</main>
        </div>
    )

}

export default Card
