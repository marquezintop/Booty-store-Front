import styled from "styled-components";
import Header from "../components/Header";
import lovers from "../assets/lovers.png";

export default function HomePage() {
    return (
        <>
            <Header></Header>
            <StyledHome>
                <StyledText>
                    <h1>Making and arranging dates just for you since 2023.</h1>
                    <p>Meet and choose your future dates to create an unforgettable experience.</p>
                </StyledText>
                <img src={lovers} alt="lovers"></img>
                <StyledHomeGray>
                    <h1>Why use this site?</h1>
                    <p>
                        The Booty Shop is the ideal choice for consumers who are seeking to find their perfect
                        romantic match. With a wide range of options and a user-friendly interface, the Booty Shop
                        offers an unparalleled online dating experience. Additionally, the Booty Store provides a
                        safe and secure platform for users to interact one another, you can even choose your
                        partner’s costume for the date. The Booty Shop is the perfect destination for anyone
                        looking to find their perfect match.
                    </p>
                </StyledHomeGray>
            </StyledHome>
        </>
    );
}

const StyledHome = styled.div`
    width: 100vw;
    height: 706px;
    margin-top: 140px;
    background-color: #E4251B;
    display: flex;
    img {
        position: relative;
        width: 460px;
        height: 435px;
        top: 100px;
        left: 160px;
        z-index: 1;
    }
`;

const StyledHomeGray = styled.div`
    position: absolute;
    top: 630px;
    background-color: #DEDBD2;
    width: 100vw;
    height: 260px;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #E4251B;
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
        margin-top: 20px;
    }
`;

const StyledText = styled.div`
    width: 585px;
    display: flex;
    flex-wrap: wrap;
    color: #FFFFFF;
    font-style: normal;
    margin-left: 123px;
    margin-top: 150px;
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
        margin-top: -210px;
    }
`;