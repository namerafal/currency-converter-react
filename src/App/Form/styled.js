import styled, { css } from "styled-components";

export const Fieldset = styled.fieldset`
   text-align: center;
    border: 1px solid #14a3a3;
    padding: 20px 30px;
    border-radius: 8px;
    box-shadow: 0px 0px 15px #00000093;
    background-color: #f7f7f7;
`;

export const Legend = styled.legend`
    background-color: rgb(12 146 146);
    color: #ffffff;
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
    background-color: white;
    text-align: center;
    border: 1px solid #ccc;
    padding: 8px;
    width: 100%;
    max-width: 200px;
    border-radius: 8px;
    box-shadow: 0px 3px 4px #0000002b;

       ${({ $select }) => $select && css`
            font-size: 15px;
       `};

        ${({ option1 }) => option1 && css`
            background-color: #f9d7d7;
        `};

          &:required {
            border-color: #ccc;
          }
      
          &:invalid {
            background-color: #f9d7d7;
          }
     }
`;

export const SelectOption1 = styled.option`
   background-color: #f9d7d7;
`;

export const ParagraphHeader = styled.p`
       margin: 30px 0px 5px;
`;

export const Button = styled.button`
   && {
    margin: 12px 20px 6px 12px;
    width: 200px;
    border: none;
    background-color: #0c9292;
    color: #ffffff;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 2px 2px 5px 1px rgb(25 23 23 / 67%);
      
          &:hover {
             background-color: #009999;
             cursor: pointer;
            }
      
          &:active {
             background-color: #00b3b3;
            }
     }
`;

export const FormFooter = styled.footer`
    text-align: left;
    font-size: 14px;
    font-style: italic;
    padding-top: 10px;
`;