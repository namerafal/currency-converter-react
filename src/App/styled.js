import { styled } from "styled-components";

export const AppContainer = styled.div`
    text-align: center;
    margin: 10px;
`;

export const LoadingField = styled.fieldset`
    min-height:300px;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.color.easternBlue};
    padding: 20px 30px;
    border-radius: 8px;
    box-shadow: 0px 0px 15px ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.alabaster};
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
`;