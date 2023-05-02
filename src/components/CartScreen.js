import styled from "styled-components"
import returnIcon from "../assets/return-icon.png"
import CartCard from "./CartCard"


export default function CartScreen({visible, setVisible, cart}) {

  return (
    <SyledCartScreen visible={visible}>
      <StyledOverlay>
      </StyledOverlay>
      <StyledCart>
        <img className="return-icon" onClick={() => setVisible(false)} src={returnIcon} alt="returnIcon"/>
        <h1>Cart Products</h1>
        {cart.map(item => <CartCard name={item.name} picture={item.picture} price={item.price}/>)}
      </StyledCart>
    </SyledCartScreen>
  )
}

const SyledCartScreen = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  visibility: ${props => props.visible ? "visible" : "hidden" };
`

const StyledOverlay = styled.div`
  width: inherit;
  height: 100vh;
  position: absolute;
  z-index: 10;
  background-color: rgba(221,221,221, 0.5);
  backdrop-filter: blur(2px);
`
const StyledCart = styled.div`
  width: 30%;
  height: 100vh;
  position: relative;
  left: 69%;
  background-color: #1D1F2D;
  z-index: 11;
  overflow-y: auto;
  .return-icon {
    width: 25px;
    margin: 8px;
  }
  .return-icon:hover{
    filter: brightness(75%);
  }
  h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    color: #FFFFFF;
    text-align: center;
  }
`