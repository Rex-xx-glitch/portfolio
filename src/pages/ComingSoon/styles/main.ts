import styled, {keyframes} from "styled-components";

interface BallProps {
    delay?: string
}

const UpDown = keyframes`
    from{
        transform: translateY(-50%);
    }to{
        transform: translateY(50%);
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100vh;
    width: 100%;

    background: black;
    color: white;
`;

export const Title = styled.h3`
    font-size: 1.8rem;
`;

export const Loader = styled.div`
    margin-top: 20px;
    display: flex;

    & div + div {
        margin-left: 10px;
    }
`;

export const Ball = styled.div<BallProps>`
    background: white;

    width: 10px;
    height: 10px;

    border-radius: 50%;
    box-shadow: 0px 1px 5px rgba(0,0,0,0.4);

    transition: all ease-in-out 250ms;

    animation: ${UpDown} 0.8s ease-in-out infinite alternate;
    animation-delay: ${props => props.delay}s;
`;