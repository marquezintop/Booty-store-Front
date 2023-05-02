import styled from "styled-components"

export default function CartCard({picture, name, price}) {
  return (
    <SyledCardCart>
      <img src={picture}
      alt={name}
      ></img>
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <button>Delete product</button>
    </SyledCardCart>
  )
}

const SyledCardCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    img {
      max-width: 250px;
      margin-top: 30px;
    }
    h2 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      color: #FFFFFF;
      margin-top: 8px;
      text-align: center;
    }
    p {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      color: #FFFFFF;
      margin-top: 8px;
      text-align: center;
    }
    button {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #FFFFFF;
        width: 120px;
        height: 33px;
        background-color: #1D1F2D;
        border: #FFFFFF 2px solid;
        transition: all 0.3s ease-in-out;
        margin-top: 8px;
    }
    button:hover {
        background-color: #FFFFFF;
        color: #1D1F2D;
    }
`