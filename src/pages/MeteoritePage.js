import styled from "styled-components";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContexts";
import axios from "axios";
import CartScreen from "../components/CartScreen";

export default function MeteoritePage({visible, setVisible, cart, setCart}) {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const config = { headers: { Authorization: `Bearer ${user.token}` } };
    const { idMeteorite } = useParams();
    const [meteorite, setMeteorite] = useState([]);

    useEffect(() => {
        if (!user.token) {
            alert("No permission to continue, you have to sign in");
            navigate("/");
        } else {
            getMeteorite();
        }
    }, []);

    async function getMeteorite() {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/get-meteorites/${idMeteorite}`, config);
            setMeteorite(res.data);

        } catch (error) {
            console.log(error.response.data);
        }
    };

    async function addToCart() {
        const body = {
            name: meteorite.name,
            picture: meteorite.picture,
            price: meteorite.price,
            id: idMeteorite
        }

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/cart`, body, config);
            alert(res.data)
        } catch (error) {
            alert(error.response.data);
        }
    }


    return (
        <>
        <CartScreen 
        visible={visible}
        cart={cart}
        setVisible={setVisible}
        setCart={setCart}
        />
        <Header page={"Meteors"}
        setVisible={setVisible}
        setCart={setCart}
        />
            <StyledMeteoriteContainer>
                <figure>
                    <img src={meteorite.picture} alt={meteorite.name} />
                </figure>
                <div>
                    <h2>{meteorite.name}</h2>
                    <h3>Fall location: {meteorite.location}</h3>
                    <h3>Fall date: {meteorite.date}</h3>
                    <p>{meteorite.fullDescription}</p>
                    <h4>Price: ${meteorite.price}</h4>
                    <button onClick={addToCart}>
                        Add to cart
                    </button>
                </div>
            </StyledMeteoriteContainer>
        </>
    );
}

const StyledMeteoriteContainer = styled.div`
    width: 100vw;
    max-width:100%;
    height: 100vh;
    margin-top: 140px;
    background-color: #FFFFFF;
    display: flex;
    padding: 20px 50px;
    justify-content: space-between;

    figure {
        width: 60vw;

        img {
        width: 100%;
        border-radius: 8px;
        border: solid 1px #1D1F2D;
        }
    }

    div {
        width: 30vw;
        display: flex;
        flex-direction: column;
        font-family: 'Lato';
        align-items: center;

        h2 {
            margin-top: 12px;
            font-weight: 700;
            font-size: 26px;
        }

        h3 {
            margin-top: 8px;
        }

        p {
            margin-top: 8px;
            font-weight: 300;
            text-align: justify;
            line-height: 17px;
            font-size: 15px;
        }

        h4 {
            margin-top: 12px;
            font-size: 24px;
            font-weight: 600;
            color: lightblue;
        }

        button {
            width: 70%;
            height: 40px;
            margin-top: 20px;
            cursor: pointer;
            border: solid 1px #1D1F4D;
            font-family: 'Poppins';
            font-weight: 500;
            font-size: 20px;
            color: #1D1F4D;
            background-color: lightblue;
            border-radius: 4px;
        }
    }

`;