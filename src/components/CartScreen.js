import styled from "styled-components"
import returnIcon from "../assets/return-icon.png"
import CartCard from "./CartCard"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContexts";


export default function CartScreen({visible, setVisible, cart, setCart}) {
  const { user } = useContext(UserContext)
  const headers = { headers: { Authorization: `Bearer ${user.token}` } };
  useEffect(calculateBalance, [cart])
  const [totalPayable, setTotalPayable] = useState(0)

  async function deleteMeteorite(name) {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/delete-meteorite`, { name }, headers);
      alert(res.data)
      getCartList()
    } catch (error) {
      console.log(error.response.data)
    }
  }

  async function getCartList() {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/get-cart`, headers);
        setCart(res.data)
    } catch (error) {
        console.log(error.response.data);
    }
  };

  async function checkoutPurchase() {
    try {
      const res = await axios.delete(`${process.env.REACT_APP_API_URL}/checkout-cart`, headers);
      alert(res.data)
      getCartList()
  } catch (error) {
      console.log(error.response.data);
  }
  }

  function calculateBalance() {
    let total = 0;
    for (let i=0; i<cart.length; i++) {
      total += Number(cart[i].price)
    }
    return setTotalPayable(total.toFixed(2))
  }

  return (
    <SyledCartScreen visible={visible}>
      <StyledOverlay>
      </StyledOverlay>
      <StyledCart>
        <img className="return-icon" onClick={() => setVisible(false)} src={returnIcon} alt="returnIcon"/>
        <h1>Cart Products</h1>
        {cart.map(item => <CartCard name={item.name} picture={item.picture} 
        price={item.price} key={item._id} deleteMeteorite={deleteMeteorite}/>)}
        <div className="checkout">
        <h2>Total: {totalPayable}</h2>
        <button onClick={checkoutPurchase}>Checkout Purchase</button>
        </div>
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
  align-items: flex-start;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
  .return-icon {
    width: 25px;
    height: auto;
    margin: 8px;
    align-self: flex-start;
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
  }
  .checkout {
    align-self: flex-end;
    margin: 40px auto;
  }
  h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    color: #FFFFFF;
    text-align: center;
  }
  .checkout button {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        color: #FFFFFF;
        width: 200px;
        height: 53px;
        background-color: #1D1F2D;
        border: #FFFFFF 2px solid;
        transition: all 0.3s ease-in-out;
        margin-top: 8px;
    }
    .checkout button:hover {
        background-color: #FFFFFF;
        color: #1D1F2D;
    }
`