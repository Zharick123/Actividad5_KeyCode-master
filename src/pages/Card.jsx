import imagen from "../assets/music.svg"
import imagen4 from '../assets/ilus.svg'

import '../styles/sass/Body&Card.scss'
import Button from '../components/atoms/Button'
import Figure from "../components/atoms/Figure"
import ContainerText from "../components/molecule/ContainerText"
import Prace from "../components/molecule/Prace"

//datos de la Card
const tittle = ' Order Summary'
const text = 'You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!'

const price = {plan: 'Annual Plan', cost: '$59.99/year',
             text:'Change', url:'google.com'}

const textButton = 'Procedeed to Paiment'

export default function Card() {
  return (
    <div className="card">
       <Figure src={imagen4}></Figure>
       <ContainerText tittle={tittle} text={text}></ContainerText>
       <Prace plan={price.plan} cost={price.cost} text={price.text} url={price.url} icon={imagen}></Prace>
       <Button text={textButton}></Button>
       <a className='aNone'href="google.com">Cancel Order</a>
    </div>
  )
}

