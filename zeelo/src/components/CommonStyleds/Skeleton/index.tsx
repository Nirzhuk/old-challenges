import React from 'react'
import styled, { keyframes } from "styled-components";

export interface SkeletonProps {
    width?: string | number
    height?: string | number
    border?: boolean
}

const loadingAniamtion = keyframes`
    0% {background-position: 200% 0}
    100% {background-position: -200% 0}
`;
const SkeletonStyled = styled.div<SkeletonProps>`
    background-image: linear-gradient(270deg,#E5E7EB,#F3F4F6,#F3F4F6,#E5E7EB);
    background-size: 400% 100%;
    animation: ${loadingAniamtion} 6s linear infinite;
    height:${({ height }) => height ? height : "auto"};
    width:${({ width }) => width ? width : "100%"};
    border-radius: ${({ border }) => border ? '4px' : "0"};;
`;


const Skeleton: React.FC<SkeletonProps> = ({
    children,
    ...props
}) => {

    return (
        <SkeletonStyled {...props}>
            {children}
        </SkeletonStyled>
    )
}

export default Skeleton