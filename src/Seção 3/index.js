
import React, { useState } from 'react';
import styled from 'styled-components';
import * as tf from '@tensorflow/tfjs';

import icon from '../img/tf.png';

export default function SectionTwo() {
  const [ text, setText ] = useState('');

  const handleFillFunction = () => {
    //função fill para inicialização de elementos
    const fill1 = tf.fill([ 1 ], 0);
    const fill2 = tf.fill([ 2, 2 ], 1);

    const result = 
      `Função fill: \n${ fill1 }\n\n` +
      `Segunda função fill: \n${ fill2 }\n\n`

    setText(result);
  };

  const handleZerosFunction = () => {
    //função zeros para atribuir zeros ao tensor
    const zeros1 = tf.zeros([1]);
    const zeros2 = tf.zeros([1, 1, 15, 15]);

    const result = 
      `Função zeros: \n${ zeros1 }\n\n` + 
      `Segunda função zeros: \n${ zeros2 }\n\n`

    setText(result);
  };

  return (
    <Wrapper>
      <Header>
        <HeaderText>TensorFlow</HeaderText>
      </Header>
      <BodyWrapper>
        <BodyHeader>
          <BodyTitle>Inteligência Artificial com JavaScript e TensorFlow.js</BodyTitle>
          <Logo src={ icon } />
        </BodyHeader>
        <BodyTextArea 
          defaultValue={ text }
          spellCheck='false' 
        />
        <SubmitButton
          onClick={ handleZerosFunction }
        >
          Executar
        </SubmitButton>
      </BodyWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.nav`
  height: 55px;
  display: flex;
  background-color: #FFC107;
  margin-bottom: 20px;
`;

const HeaderText = styled.span`
  color: white;
  margin-left: 10px;
  font-size: 16px;
  align-self: center;
  font-family: 'Segoe UI';
`;

const BodyWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 20px 80px;
`;

const BodyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const BodyTitle = styled.span`
  color: black;
  font-size: 32px;
  font-family: 'Segoe UI';
  font-weight: bold;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
`;

const BodyTextArea = styled.textarea`
  display: flex;
  flex: 1;
  margin-bottom: 30px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #FFC107;
  border: 1px solid transparent;
  border-color: #FFC107;
  border-radius: 5px;
  color: black;
  width: 80px;
  margin-bottom: 50px;
`;