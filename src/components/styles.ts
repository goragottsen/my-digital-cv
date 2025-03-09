import styled from 'styled-components';

export const FlipCard = styled.div`
  perspective: 1000px;
`;

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
`;

export const FlipCardFront = styled.div`
  background-color: #bbb;
  color: black;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
`;

export const FlipCardBack = styled.div`
  background-color: #2980b9;
  color: black;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;