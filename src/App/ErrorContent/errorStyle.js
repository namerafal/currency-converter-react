import { styled } from "styled-components";

export const ErrorField = styled.div`    
    box-shadow: 0px 0px 7px ${({ theme }) => theme.color.redStop};
    border-radius: 8px;
    padding:5px 0px 0px;
`;

export const ContentSolution = styled.ul`
    list-style: none;
    line-height: 2;
    padding: 5px;

`;