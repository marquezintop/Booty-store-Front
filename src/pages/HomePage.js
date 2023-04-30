import styled from "styled-components";
import Header from "../components/Header";
import meteor from "../assets/meteor.png"

export default function HomePage() {
    return (
        <>
        <Header></Header>
        <StyledHome>
            <StyledText>
                <h1>Selling meteors at your fingertips since 2023</h1>
                <p>Get to know our most varied types of meteors and buy the one that most sparkles your eyes.</p>
            </StyledText>
            <img src={meteor} alt="meteor"></img>
            <StyledHomeGray>
                <h1>Why buy from our store?</h1>
                <p>
                If you're in the market for a meteor, the Meteor Store is the place to go. Not only do we offer 
                a wide selection of meteors to choose from, but we also provide a seamless online shopping 
                experience. Our meteors are sourced from reputable suppliers, ensuring that you receive a 
                high-quality product that will meet your expectations. Additionally, we offer competitive 
                pricing and fast shipping, so you can have your meteor in your hands in no time. With our 
                commitment to customer satisfaction, you can trust that your purchase from the Meteor Store will 
                be a great investment for years to come.
                </p>
            </StyledHomeGray>
        </StyledHome>
        </>
    )
}

const StyledHome = styled.div`
    width: 100vw;
    max-width:100%;
    height: 100vh;
    margin-top: 140px;
    background-color: #1D1F2D;
    display: flex;
    img {
        position: relative;
        width: 540px;
        height: 515px;
        top: 120px;
        left: 90px;
        z-index: 1;
    }
`

const StyledHomeGray = styled.div`
    max-width:100%;
    position: absolute;
    top: 630px;
    background-color: #FFFFFF;
    width: inherit;
    height: 260px;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #1D1F2D;
    h1 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 50px;
        margin-top: 30px;
    }
    p {
        width: 909px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        margin-top: 30px;
    }
`

const StyledText = styled.div`
    width: 585px;
    display: flex;
    flex-wrap: wrap;
    color: #FFFFFF;
    font-style: normal;
    margin-left: 123px;
    margin-top: 100px;
    h1 {
        font-family: 'Poppins';
        font-weight: 600;
        font-size: 40px;
    }
    p {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        margin-top: -190px;
    }
`