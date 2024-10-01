import styled, { css } from "styled-components";

export const Fieldset = styled.fieldset`
   text-align: center;
    border: 1px solid ${({ theme }) => theme.color.easternBlue};
    padding: 20px 30px;
    border-radius: 8px;
    box-shadow: 0px 0px 15px ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.alabaster};
`;

export const Legend = styled.legend`
    background-color: rgb(12 146 146);
    color: ${({ theme }) => theme.color.white};
    border-radius: 8px;
    padding: 5px;
    width: 200px;
`;

export const LabelText = styled.span`
    font-size: 18px;
    text-align: right;
    width: 100%;
    max-width: 166px;
    display: inline-block;
    margin: 20px;
`;

export const FieldInput = styled.input`
   && {
    background-color: ${({ theme }) => theme.color.white};
    text-align: center;
    border: 1px solid ${({ theme }) => theme.color.silver};
    padding: 8px;
    width: 100%;
    max-width: 200px;
    border-radius: 8px;
    box-shadow: 0px 3px 4px ${({ theme }) => theme.color.silver};

       ${({ $select }) => $select && css`
            font-size: 15px;
       `};
      
          &:invalid {
            background-color: ${({ theme }) => theme.color.azalea};
         }
    }
`;

export const SelectOption1 = styled.option`
   background-color: ${({ theme }) => theme.color.white};
   color: ${({ theme }) => theme.color.white};
`;

export const Paragraph = styled.p`
       margin: 30px 0px 5px;
`;

export const Button = styled.button`
   && {
    margin: 12px 20px 6px 12px;
    width: 200px;
    border: none;
    background-color: ${({ theme }) => theme.color.blueChill};
    color: ${({ theme }) => theme.color.white};
    padding: 10px;
    border-radius: 8px;
    box-shadow: 2px 2px 5px 1px rgb(25 23 23 / 67%);
      
          &:hover {
             /* background-color: #009999; */
             filter: saturate(160%);
             cursor: pointer;
            }
      
          &:active {
             filter: brightness(130%);
            }
     }
`;

export const FormFooter = styled.footer`
    text-align: left;
    font-size: 14px;
    font-style: italic;
    padding-top: 10px;
`;