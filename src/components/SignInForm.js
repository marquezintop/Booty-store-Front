import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/UserContexts"


export default function SignInForm() {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function signIn(e) {
        e.preventDefault();
        signInRequest();
    }

    async function signInRequest() {
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/sign-in`, { email, password });
            const { name, token } = res.data;
            console.log(name, token);
            setUser({ name, token });
            localStorage.setItem("user", JSON.stringify({ name, token }));
            //navigate("/");
        } catch (err) {
            console.log(err.response.data);
        }
    }

    return (
        <FormContainer>
            <form onSubmit={signIn}>
                <input type="email"
                    placeholder="Enter your e-mail..."
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)} />

                <input type="password"
                    placeholder="Enter your password..."
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                <button type="submit">Sign In</button>
            </form>
        </FormContainer>
    );
}

const FormContainer = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;

        form {
            width: 300px;
            height: 200px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

                input {
                    height: 40px;
                    padding-left: 20px;
                    font-size: 16px;

                        input::placeholder {
                            text-align: center;
                            
                        }

                }
        }
`;
