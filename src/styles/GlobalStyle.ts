import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        font-size : 18px;
        height : 100%;
    }

    h2{
        font-family : 
        "S-CoreDream-4Regular", "Spoqa Han Sans Neo", "Noto Sans KR", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    }
    body{
        padding: 0;
        min-height: 100%;
        background: #F8F9FA;
        margin: 0;
        font-family :  "Spoqa Han Sans Neo", "Noto Sans KR", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    }

    textarea, button, button:active{
        resize:none;
        outline:none;
        border:none;
        font-family :  "Spoqa Han Sans Neo","Noto Sans KR", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    
    }

    a, a:visited {
        color:inherit;
        text-decoration:none;
        
    }

    input, textarea{
        border:none;
        :focus {
            outline:none;
        }
    }

    *{
        box-sizing : border-box;
        margin:0;
        
        ::selection{

        }
    }
    #root{
        overflow-y : auto;
        
    }

    `;

export default GlobalStyle;
