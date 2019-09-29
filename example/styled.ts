import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: Helvetica;
    background-color: #D8D1F5;
  }

  * {
    box-sizing: content-box;
  }
`;

export const AppWrapper = styled.div`

`;

export const ContentWrapper = styled.div`
  border-radius: 3px;
  background-color: #f3f3f3;
  padding: 5px 10px;
`;

export const ContentItem = styled.div`
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: white;
  }
`;