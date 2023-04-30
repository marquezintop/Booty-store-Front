import { useNavigate } from "react-router-dom"
import meteorLogo from "../assets/meteor-logo.png"
import styled from "styled-components"

export default function Header() {
    const navigate = useNavigate()

    return (
        <HeaderStyled>
            <img src={meteorLogo} alt="meteorLogo"/>
            <h1>Meteor Store</h1>
            <div>
                <button onClick={() => navigate("/")}>Home</button>
                <button onClick={() => navigate("/about-us")}>About Us</button>
                <button onClick={() => navigate("/meteors")}>Meteors</button>
            </div>
            <button className="sign-up" onClick={() => navigate("/sign-in")}>Sign-in</button>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`
width: 100vw;
max-width:100%;
height: 140px; 
background-color: #1D1F2D;
position: fixed;
top: 0;
left: 0;
display: flex;
align-items: center;
z-index: 2;
h1 {
    width: 100px;
    color: #FFFFFF;
    font-size: 30px;
    font-family: 'Poppins';
    font-weight: 500;

}
img {
    width: 130px;
    margin-left: 70px;
}
div {
    margin-left: 350px;
    display: flex;
    justify-content: space-between;
    width: 500px;
    button {
        display: inline-block;
        position: relative;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        color: #FFFFFF;
        border: none;
        background-color: transparent;
    }

    button::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #FFFFFF;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    button:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
}
    .sign-up {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        color: #FFFFFF;
        width: 230px;
        height: 68px;
        background-color: #1D1F2D;
        border: #FFFFFF 2px solid;
        margin-left: 40px;
        margin-right: 50px;
        transition: all 0.3s ease-in-out;
    }

    .sign-up:hover {
        background-color: #FFFFFF;
        color: #1D1F2D;
    }   
`