import { useContext, useState } from "react";
import StyledForm from "./StyledForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContexts";


export default function SignUpForm() {
    const navigate = useNavigate();

    const {setUser} = useContext(UserContext)

    const [form, setForm] = useState({name: "", email: "", password: ""})

    function handleForm(e) {
        e.preventDefault();
        setForm({...form, [e.target.name]: e.target.value});
    }

    async function submitForm(e) {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, form)
            const { name, token } = response.data;
            setUser({ name, token });
            localStorage.setItem("user", JSON.stringify({ name, token }));
            navigate("/")
        } catch (err) {
            alert(err.response.data);
        }
    }

    return (
        <StyledForm>
            <form onSubmit={submitForm}>
                <p>Name: *</p>
                <input placeholder="Name"
                required
                maxLength={10}
                name="name"
                value={form.name}
                onChange={handleForm}
                ></input>
                <p>Email: *</p>
                <input placeholder="Email"
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleForm}
                ></input>
                <p>Password: *</p>
                <input placeholder="Password"
                required
                minLength={3}
                type="password"
                name="password"
                value={form.password}
                onChange={handleForm}
                ></input>
                <br></br>
                <button type="submit">Sign Up</button>
            </form>
            </StyledForm>
    )
}

