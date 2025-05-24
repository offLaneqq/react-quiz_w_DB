import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/lake.jpg'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Catamaran', sans-serif;
    background-image: url(${BGImage});
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1, p {
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 700;
    text-align: center;
    margin: 50px;
    color: #fff;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  }

  .start-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .question-count-buttons {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 480px) {
      gap: 10px;
    }
  }

  .count-btn {
    background: rgba(255, 255, 255, 0.5);
    border: 2px solid #fff;
    border-radius: 10px;
    padding: 10px 20px;
    color: #fff;
    font-size: clamp(0.9rem, 1.5vw, 1.1rem);
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 120px;

    &:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.6);
      transform: translateY(-2px);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }

    &.selected {
      background: rgba(255, 255, 255, 0.8);
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
      transform: translateY(-2px);
    }
  }

  .start, .next {
    background: rgba(255, 255, 255, 0.8);
    border: 2px solid #fff;
    border-radius: 10px;
    padding: 15px 40px;
    color: #000;
    font-size: clamp(1rem, 2vw, 1.3rem);
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    font-weight: bold;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
    margin: 20px 0;
    text-shadow: none;

    &:hover {
      background: rgba(255, 255, 255, 0.9);
      transform: translateY(-2px);
    }
  }

  .next {
    background: rgba(86, 255, 164, 0.8);
    color: #000;
    font-weight: bold;
    min-width: 200px;

    &:hover {
      background: rgba(86, 255, 164, 0.9);
    }
  }

  .score {
    color: #fff;
    font-size: clamp(1.2rem, 2vw, 1.8rem);
    margin: 20px 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }

  .final-score {
    color: #56ffa4;
    font-size: clamp(1.4rem, 2.5vw, 2rem);
    margin: 20px 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    font-weight: bold;
    background: rgba(0, 0, 0, 0.8);
    padding: 15px 30px;
    border-radius: 10px;
    border: 2px solid #56ffa4;
  }

  p {
    color: #fff;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
  }

  .footer {
    position: fixed;
    bottom: 20px;
    left: 0;
    width: 100%;
    text-align: center;
    padding: 10px;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    
    p {
      color: #fff;
      font-size: clamp(0.9rem, 1.2vw, 1rem);
      margin: 0;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    }
  }
`; 