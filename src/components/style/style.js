import styled from 'styled-components';
import '@fontsource/roboto/400.css';

import { createGlobalStyle } from 'styled-components'
import { createTheme } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import { red, green } from '@mui/material/colors';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`
export const theme = createTheme({
    palette: {
        secondary: {
            main: '#fff',
        },
    },
});

export const deleteButton = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
    },
});


export const updateButton = createTheme({
    palette: {
        primary: {
            main: green[500],
        },
    },
});


export const Input = styled.input`
    display: none;
`
export const Toaster = styled(ToastContainer)`
    margin-top: 3rem;
`;


export const TableWrapper = styled.div`
height:100vh;
background-image : url("http://cdn30.us1.fansshare.com/image/wallpaper1920x1080/blue-background-texture-solid-color-wallpaper-full-hd-1559727111.jpg");
background-position: center;
background-repeat: no-repeat;
background-size: cover; 
`
export const SpinnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image : url("http://cdn30.us1.fansshare.com/image/wallpaper1920x1080/blue-background-texture-solid-color-wallpaper-full-hd-1559727111.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-family:roboto;
`


export const H1 = styled.h1`
    color: #fff;
    font-size :2.5rem;
    font-family:roboto;
    text-align:center;
    margin:2rem 0rem;
`
export const Header = styled.header`
  > ul {
            display:flex;
            justify-content:flex-end;
            padding:1rem;
            gap:3rem;
            text-decoration :none;
            background:#1565C0;
            // background:#ccc;
            height:100%;
            
            .text-link {
                 color:#fff;
                // font-weight:bold;
                font-size:1.2rem;
                font-family:roboto;
                list-style:none;
                text-decoration :none;
                    :hover{
                        color:red; 
                        cursor:pointer;
                }
            }   
        }
`


export const Form = styled.form`
    width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:1rem;
    padding:2rem;
`
export const Li = styled.li`
list-style:none;
height:100%;
>a {
    color:white;
    font-size:1.2rem;
    font-family:roboto; 
    text-decoration:none;
    cursor:pointer;
    
}
#logout{
    &:hover {
        color:red;
    }
    
}

`

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image : url("http://cdn30.us1.fansshare.com/image/wallpaper1920x1080/blue-background-texture-solid-color-wallpaper-full-hd-1559727111.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-family:roboto; 
`

export const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: #1565C0;
    color: white;
    font-family:roboto; 
`
export const HomeWrapper = styled.div`
    height: 100vh;
    display flex;
    flex-direction:column;
    justify-content:center;
    gap:1rem;
    padding-left:2rem;
    background-image : url("https://cdn.shopify.com/s/files/1/0090/9236/6436/articles/PPC_Landing_Page.png?v=1626868475");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-family:roboto; 
    >h1 {
        font-size:2rem;
        color:#fff;
    }
    >span {
        font-size:1.2rem;
        color:#fff;
    }
    >p{
        color:#fff;
        font-size:1rem;
        width:50%;
    }
    >button{
        width:10%;
    }
`
export const MainScreenWrapper = styled.div`
    height: 100vh;
    display flex;
    flex-direction:column;
    justify-content:center;
    gap:1rem;
    padding-left:2rem;
    background-image : url("https://wallpaperaccess.com/full/2089171.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-family:roboto; 
    >h1 {
        font-size:2rem;
        color:#fff;
    }
    >span {
        font-size:1.2rem;
        color:#fff;
    }
    >p{
        color:#fff;
        font-size:1rem;
        width:50%;
    }
    >button{
        width:10%;
    }
`

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:2rem;
    background-color: rgba(255, 255, 255, .3);  
    color: #fff;
    border-radius: 5px;
    opacity:2;
    box-shadow: 0px 0px 20px rgba(255, 255, 255, .3);
`

export const Imagelabel = styled.label`
    display: flex;
    justify-content: center;
    gap: 2rem;
`