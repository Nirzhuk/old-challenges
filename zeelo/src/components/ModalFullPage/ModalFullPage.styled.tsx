import styled from "styled-components";
import { X } from "react-feather";

export const ModalFullPageBackground = styled.div`
  height: 100vh;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  overflow: auto;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
`;
export const ModalFullPageContainer = styled.div`
  background: #f9f9f9;
  color: #3d3d3d;
  justify-content: center;
  margin: 0 auto;
  max-width: 1400px;
  position: relative;
  width: auto;
  letter-spacing: -0.02em;
  height: auto;
  z-index: 100;

  @media (min-width: 1024px) {
      width: calc(100% - 160px);
    	height: 600px;
      border-radius: 8px;
  }
`;
export const ModalFullPageContent = styled.div`
  padding: 20px;
  margin-right: auto;
  margin-left: auto;
`;
export const ModalTitleSection = styled.div`
  right: 10px;
  position: absolute;
  top:10px;
  z-index: 101;
`;
export const CloseButton = styled(X)`
  &:hover {
    cursor: pointer;
  }
`;