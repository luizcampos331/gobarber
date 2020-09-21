import Styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import sginUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = Styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 660px;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${appearFromRight} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      transition: color 200ms;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  /** sinal > pega somente tags a que estiverem dentro do Content */
  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    transition: color 200ms;
    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = Styled.div`
  flex: 1;
  background: url(${sginUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;
