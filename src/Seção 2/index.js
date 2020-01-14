
import React, { useState } from 'react';
import styled from 'styled-components';
import * as tf from '@tensorflow/tfjs';

import icon from '../img/tf.png';

export default function SectionTwo() {
  const [ text, setText ] = useState('');

  const handleSubmitButtonClick = () => {
    const scalar = tf.scalar(1.5);

    //uma dimensão
    const scalar1d = tf.tensor1d([ 1, 2, 3 ]);

    //duas dimensões
    const scalar2d = tf.tensor2d([ 1, 2, 3, 4 ], [ 2, 2 ]);
    // const scalar2d = tf.tensor2d([[ 1, 2 ], [ 3, 4 ]]);

    //três dimensões
    const scalar3d = tf.tensor3d([1, 2, 3, 4], [ 1, 2, 2 ]);
    // const scalar3d = tf.tensor3d([[[ 1 ], [ 2 ]], [[ 3 ], [ 4 ]]]);

    //quatro dimensões
    const scalar4d = tf.tensor4d([ 1, 2, 3, 4 ], [ 1, 1, 2, 2 ]);
    // const scalar4d = tf.tensor4d([[[[ 1,  2 ], [ 3, 4 ]]]]);

    //cinco dimensões
    const scalar5d = tf.tensor5d([ 1, 2, 3, 4 ], [ 1, 1, 1, 2, 2 ]);
    // const scalar5d = tf.tensor5d([[[[[ 1, 2 ], [ 3, 4 ]]]]]);

    //seis dimensões
    const scalar6d = tf.tensor6d([ 1, 2, 3, 4 ], [ 1, 1, 1, 1, 2, 2 ]);
    // const scalar6d = tf.tensor6d([[[[[[ 1, 2 ], [ 3, 4 ]]]]]]);

    const result = 
      `Escalar: ${ scalar } \n\n` +
      `Tensor 1D: ${ scalar1d } \n\n` + 
      `Tensor 2D: ${ scalar2d } \n\n` +
      `Tensor 3D: ${ scalar3d } \n\n` + 
      `Tensor 4D: ${ scalar4d } \n\n` +
      `Tensor 5D: ${ scalar5d } \n\n` +
      `Tensor 6D: ${ scalar6d }`; 

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
          onClick={ handleSubmitButtonClick }
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