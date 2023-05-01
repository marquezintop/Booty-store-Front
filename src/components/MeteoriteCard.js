import styled from "styled-components";

export default function MeteoriteCard({ meteorite }) {
    const { name, description, picture, price } = meteorite
    return (
        <StyledMeteorCard>
            <figure>
                <img src={picture} alt={name} />
            </figure>
            <h3>{name}</h3>
            <h4>{description}</h4>
            <h2>${price}</h2>
        </StyledMeteorCard>
    );
}

const StyledMeteorCard = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    width: 200px;
    height: 250px;
    border-radius: 8px;
    padding: 10px 10px 30px;
    cursor: pointer;

        figure {}

        img {
            border-radius: 8px;
            width: 100%;
        }  
        
        h3 {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #1D1F2D;
        }

        h4 {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        color: gray;
        text-align: center;
        }

        h2 {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        color: lightblue;
        text-align: center;
        }

        &:hover {
            border: solid 3px lightblue;
        }
`;