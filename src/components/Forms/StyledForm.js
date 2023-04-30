import styled from "styled-components";

const StyledForm = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
        width: 340px;
        height: 30px;
        background: #FAFAFA;
        border: 1px solid #959595;
        border-radius: 3px;
        margin-top: 5px;
    }
    p{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-size: 17.2px;
        line-height: 26px;
        color: #000000;
        margin-top: 50px;
    }
    button {
        width: 120px;
        height: 50px;
        background: #1D1F2D;
        border-radius: 3px;
        font-family: 'Poppins';
        border: #FFFFFF 2px solid;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        color: #FFFFFF;
        transition: all 0.3s ease-in-out;
        margin-top: 40px;
        margin-left: 110px;
    }
    button:hover {
        background-color: #FFFFFF;
        color: #1D1F2D;
        border: #1D1F2D 2px solid; 
    }
`

export default StyledForm;