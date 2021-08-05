

import styled from "styled-components";

export const backgroundColorsTags = {
    BOOKED: '#2C64B7',
    UNAVAILABLE: '#E02323',
    AVAILABLE: '#11A960'
};

export const TagStyled = styled.span<any>`
    padding: 3px 10px;
    margin: 8px 0px 0px 8px;
    border-radius: 30px;
    line-height: 20px;
    font-weight: 700;
    font-size:12px;
    width: fit-content;
    line-height:15px;
    border-top: 0;
    color:#fff;
    border-right: 0;
    background-color: ${({ stateColor }: any) => stateColor};
  `;
