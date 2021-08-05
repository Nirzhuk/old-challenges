
import styled from "styled-components";


export const CardStyled = styled.article`
    box-sizing: border-box;
    overflow: hidden;
`;

export const CardImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 350px;
      border-width: 0.0625rem;
    border-style: solid;
    border-image: initial;
    border-color: #d3d3d3;
  border-radius: 0.5rem;
`;
export const CardImageOverlay = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  position: absolute;
  right: 0;
  z-index: 2;
`;
export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor:pointer;
`;

export const CardContentContainer = styled.div`
  display: grid;
`;

export const CardContent = styled.div`
  display: grid;
  padding: 4px 8px;
  grid-template-columns: 1fr;
  grid-gap: 1em;
  align-self: start;
`;

