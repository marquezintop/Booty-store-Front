import styled from "styled-components";
import Header from "../components/Header";
import MeteoriteCard from "../components/MeteoriteCard";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContexts";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function MeteorsPage() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const config = { headers: { Authorization: `Bearer ${user.token}` } };
    const [meteoritesList, setMeteoritesList] = useState([]);

    useEffect(() => {
        if (!user.token) {
            alert("No permission to continue, you have to sign in");
            navigate("/");
        } else {
            getMeteoritesList();
        }
    }, []);


    async function getMeteoritesList() {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/get-meteorites`, config);
            setMeteoritesList(res.data);

        } catch (error) {
            console.log(error.response.data);
        }
    };


    return (
        <>
            <Header page={"Meteors"} />
            <StyledMeteorsPage>
                <StyledMeteorsContainer>
                    {meteoritesList.map((meteorite) => <MeteoriteCard key={meteorite._id} meteorite={meteorite} />)}
                </StyledMeteorsContainer>
            </StyledMeteorsPage>

        </>
    );
}

const StyledMeteorsPage = styled.div`
    width: 100vw;
    max-width:100%;
    height: 100vh;
    margin-top: 140px;
    background-color: #1D1F2D;
    display: flex;
`;

const StyledMeteorsContainer = styled.div`
    width: 90vw;
    padding: 50px 250px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;