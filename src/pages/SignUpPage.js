import styled from "styled-components"
import meteorLogo from "../assets/meteor-logo.png"
import arrowIcon from "../assets/arrow-icon.png"
import SignUpForm from "../components/Forms/SignUpForm"
import { useNavigate } from "react-router-dom"

export default function SignUpPage() {
    const navigate = useNavigate()

    return (
        <StyledSignUp>
            <StyledHeaderSignUp>
                <img className="meteor-logo" src={meteorLogo} alt="meteorLogo"/>
                <span>Already have an account?</span>
                <button onClick={() => navigate("/sign-in")}>Sign In
                    <img className="arrowIcon" src={arrowIcon} alt="arrowIcon"/>
                </button>
            </StyledHeaderSignUp>
            <SignUpForm/>
        </StyledSignUp>
    )
}

const StyledSignUp = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #1D1F2D;
    display: flex;
    flex-direction: column;
`

const StyledHeaderSignUp = styled.div`
    display: flex;
    align-items: center;
    .meteor-logo{
        width: 130px;
        margin-left: 70px; 
    }
    span {
          font-family: 'Poppins';
        font-weight: 300;
        font-size: 24px;
        line-height: 31px;
        color: #FFFFFF;
        margin-left: 600px;
    }
    button {
        display:flex;
        align-items: center;
        border: none;
        background-color: transparent;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        color: #FFFFFF;
        margin-left: 40px;
    }
   .arrowIcon{
        margin-left: 10px;
        width: 30px;
        height: 25px;
    }
    button:hover{
        filter: brightness(95%);
        cursor: pointer;
}`


