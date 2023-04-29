import styled from "styled-components";
import Header from "../components/Header";
import SignInForm from "../components/SignInForm";

export default function SignInPage() {

    return (
        <>
            <Header />
            <StyledSignIn>
                <SignInForm />
            </StyledSignIn>
        </>
    );
}

const StyledSignIn = styled.div`
    width: 100vw;
    height: 100vh;
    margin-top: 140px;
    background-color: #E4251B;
`;