import React from 'react';
import styled from 'styled-components';

const IconButton = ({
  image, icon, text, size,
}) => (
  <Container size={size}>
    {
      image && <img src={image} alt="" />
    }
    { icon || null}
    {text && <Text>{text}</Text>}
  </Container>
)

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 12px 24px;
  transition: 0.2s;
  &:hover {
    background: rgba(0,0,0, 0.05);
  }
  
  svg {
    width: ${(p) => p.size ?? 24}px;
    height: ${(p) => p.size ?? 24}px;
    fill: rgb(96, 96, 96);
  }
  
  img {
    border-radius: 50%;
    width: ${(p) => p.size ?? 24}px;
    height: ${(p) => p.size ?? 24}px;
    fill: rgb(96, 96, 96);
  }
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-left: ${(p) => p.size ?? 20}px;
`;
export default IconButton;
