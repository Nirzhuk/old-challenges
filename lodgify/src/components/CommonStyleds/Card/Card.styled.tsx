
import styled from "styled-components";

export const CardStyled = styled.div`
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 5px;
    background: #f7f7f7;
    box-shadow: 0 3px 5px rgba(0,0,0,5%);
    height: 280px;
    width: 220px;

`;

export const CardInnerContainer = styled.div`
    &:hover {
          border: inset 1px #333333;
    };
    height: 278px;
    border-radius: inherit;
`;
export interface FuelMeterProps {
  meter: number;
}

export const ShowcaseImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 140px;
  border-radius: 5px 5px 0 0;
`;
export const ShowcaseImageOverlay = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  position: absolute;
  left: 0;
  z-index: 2;
`;
export const ShowcaseImage = styled.img`
  height: inherit;
  width: 100%;
`;
ShowcaseImage.defaultProps = {
  alt: "cardImage",
  onError: (ev: any) => { ev.target.onerror = null; ev.target.src = "/error-404.svg" }
}

export const ShowcaseContent = styled.div`
  display: grid;
  padding: 16px;
  grid-gap: 16px;
  height: 114px;
  grid-template-rows: max-content 1fr max-content;
`;

export const TitleSection = styled.div`
  display:grid;
  grid-template-rows: 1fr 1fr;
`;

export const CardTitle = styled.p`
  font-weight: 700;
  display: inline;
  margin: 0;
  font-size: 16px;
  font-style: italic;
`;
export const BottomSection = styled.div`

`;