
import React from 'react';
import styled from 'styled-components';

type sizeModifiers = 'l' | '';

type typeModifiers = 'primary' | '';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: React.ReactNode;
    size?: sizeModifiers;
    buttonType?: typeModifiers;
}

const ButtonStyled = styled.button <ButtonProps>`
    min-width: 120px;
    height: 40px;
    font-family: Inter, sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    line-height: 40px;
    letter-spacing: 0.4px;
    text-align: center;
    user-select: none;
    border: none;
    padding: 0 16px;
    border-radius: 4px;
    background:#2b44bd;
    color: white;
    cursor: pointer;

    ${({ size }) => size === 'l' && `
        max-width: 360px;
        height: 120px;
        line-height: 120px;
        font-size: 32px;
    `}
    ${({ buttonType }) => buttonType === 'primary' && `
        background: linear-gradient( 135deg, #F05F57 10%,#360940 90%);
    `}

    &:hover{
        background:#314dd6;
        ${({ buttonType }) => buttonType === 'primary' && `
            background: linear-gradient( 135deg, #ff7b74 10%,#521061 90%);
        `}
    }
  `;


export const Button = ({ label = 'Submit', ...rest }: ButtonProps) =>{
    return (
        <ButtonStyled {...rest}>
            {label}
        </ButtonStyled>
    );
}
