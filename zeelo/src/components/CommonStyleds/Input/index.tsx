import styled from "styled-components";

export interface InputProps {
    name: string | null;
    legend: string | null;
    type?: string;
    placeholder?: string;
    size?: string;
    onChange: Function;
    value: any;
};

export const StyledInput = styled.input`
    font-family: monospace;
    display:block;
    box-shadow: none;
    width: 33%;
    color: #000;
    background-color: transparent;
    border: 1px solid #d8d8d8;
    border-radius: 5px;
    outline: 0px;
    padding: 10px 5px;
    margin: 10px 0 10px 0;
`;
const StyledInputContainer = styled.div`
 width:-webkit-fill-available
`;
const StyledLegend = styled.p`
    font-size: 90%;
    font-weight: 600;
`;

const Input = ({ legend, size = "l", type = "input", ...props }: InputProps) => (
    <StyledInputContainer>
        {legend && <StyledLegend as="label">{legend}</StyledLegend>}
        <StyledInput size={size} type={type} {...props as any} />
    </StyledInputContainer>
);

export default Input