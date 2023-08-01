import { HeaderContainer, UpperHeader } from './styles'
import FlamengoLogo from '../../assets/flamengo.png'

export default function Header() {
  return (
    <HeaderContainer>
      <UpperHeader>
        <img src={FlamengoLogo} alt="Flamengo Rowing Shield" />
      </UpperHeader>
      <div></div>
    </HeaderContainer>
  )
}
