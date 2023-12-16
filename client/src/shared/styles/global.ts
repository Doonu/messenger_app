import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        border: none;
    }
    body{
        background: ${({ theme }) => theme.colors.bg};
        color: ${({ theme }) => theme.colors.text};
        height: 100%;
        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
          height: auto;
        };
    }
    
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    :focus,
    :active {
      outline: none;
    }
    a{
      text-decoration:none;
    }
    a:focus,
    a:active,
    a:visited {
      text-decoration:none;
      outline: none;
    }
    
    input {
      outline: none;
      outline-offset: 0;

    }

    a, a:link, a:visited  {
        text-decoration: none;
    }

    a:hover  {
        text-decoration: none;
    }

    aside, nav, footer, header, section, main {
        display: block;
    }

    h1, h2, h3, h4, h5, h6, p {
        font-size: inherit;
        font-weight: inherit;
    }

    ul, ul li {
        list-style: none;
    }
    #root{
      height: 100vh;
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        height: auto;
      };
    }
    .slide-in{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: black;
      transform-origin: bottom;
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        height: auto;
      };
    }
    .slide-out{      
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: black;
      transform-origin: top;
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        height: auto;
      };
    }
    
    .ant-dropdown .ant-dropdown-menu{
      background-color: #313338;
      border: 1px solid #4c4d52;
      & > li {
        color: white !important;
        &:hover{
          opacity: 0.6;
        }
      }
    }
`;
