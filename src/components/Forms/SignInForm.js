import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import StyledForm from "./StyledForm";
import UserContext from "../../Contexts/UserContexts";


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
            navigate("/");
        } catch (err) {
            console.log(err.response.data);
        }
    }

    return (
        <StyledForm>
            <form onSubmit={signIn}>
                <p>Email:</p>
                <input type="email"
                    placeholder="Enter your e-mail..."
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
                <p>Password:</p>
                <input type="password"
                    placeholder="Enter your password..."
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                    <br></br>
                <button type="submit">Sign In</button>
            </form>
        </StyledForm>
    );
}
