import { UpperHeader } from './styles'
import FlamengoLogo from '../../assets/flamengo.png'

export default function Header() {
  return (
    <header>
      <UpperHeader>
        <p>
          Uma vez <span>Flamengo</span>,
        </p>
        <img src={FlamengoLogo} alt="Flamengo Rowing Shield" />
        <p>
          sempre <span>Flamengo</span>.
        </p>
      </UpperHeader>
      <div></div>
    </header>
  )
}
