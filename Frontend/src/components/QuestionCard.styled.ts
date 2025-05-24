import styled from "styled-components";

export const Wrapper = styled.div`
    width: 90%;
    max-width: 900px;
    min-height: 300px;
    background:rgb(3, 97, 109);
    border-radius: 15px;
    border: 2px solid #0085a3;
    padding: clamp(20px, 3vw, 40px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
    text-align: center;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height:25px;

    .score-display {
        position: absolute;
        top: -60px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.2);
        padding: 10px 20px;
        border-radius: 10px;
        border: 2px solid #fff;
        
        p {
            color: #fff;
            font-size: clamp(1.1rem, 1.8vw, 1.5rem);
            margin: 0;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            font-weight: bold;
        }
    }

    p {
        font-size: clamp(1rem, 2.5vw, 1.8rem);
        margin: clamp(10px, 2vw, 20px) 0;
        line-height: 1.5;
    }

    @media screen and (min-width: 2560px) {
        max-width: 1200px;
        min-height: 400px;
        
        p {
            font-size: clamp(1.2rem, 2vw, 2.2rem);
        }
    }

    @media screen and (max-width: 768px) {
        width: 95%;
        padding: 15px;
        min-height: 250px;
    }

    @media screen and (max-width: 480px) {
        width: 98%;
        padding: 10px;
        min-height: 200px;
    }
`

type ButtonWrapperProps = {
    $correct: boolean;
    $userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s easy;
    width: 100%;

    :hover {
        opacity: 0.8;
    }

    button {
        cursor: pointer;
        user-select: none;
        font-size: clamp(0.9rem, 2vw, 1.4rem);
        width: 100%;
        min-height: clamp(45px, 6vw, 60px);
        height: auto;
        padding: clamp(10px, 1.5vw, 15px) clamp(15px, 2vw, 25px);
        margin: clamp(5px, 1vw, 10px) 0;
        line-height: 1.4;
        white-space: normal;
        word-wrap: break-word;
        background: ${({ $correct, $userClicked }) =>
        $correct
                ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
                : !$correct && $userClicked
                ? 'linear-gradient(90deg, #ff5656, #c16868)'
                : 'linear-gradient(90deg, #56ccff, #6eafb4)'};
        border: 3px solid #fff;
        box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
        border-radius: 12px;
        color: white;
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and (min-width: 2560px) {
        button {
            font-size: clamp(1.1rem, 1.8vw, 1.6rem);
            min-height: clamp(50px, 5vw, 70px);
            line-height: 1.5;
        }
    }
`