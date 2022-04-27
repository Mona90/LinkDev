import styled from "styled-components"
export const Section = styled.section
`
height:100vh;
background-position:center;
background-size:cover;
background-repeat:no-repeat;
position:relative;
color:#FFF;
z-index:1;
max-height: 600px;
`
export const Content = styled.div
`
height:calc(100vh - 83px)
`
export const Intro = styled.div
`color:#fff;

span{
    text-transform:uppercase
}
h1{
    font-size: 55px;
    font-weight: bold;
    text-transform: capitalize;
    p{
        margin-bottom:0
    }
}
.more-link{
    width: 45px;
    height: 45px;
    border: 1px solid #FFF;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #FFF;
    font-size: 11px;
}

`
export const Investment = styled.div
`position:absolute;
bottom:0;
right:0;
width:75%;
z-index:4;
@media(max-width:767px){
    position:relative;
}
.info{
    background:#183F3C;
    padding: 15px 20px;
    width: 285px;
    position: relative;
    .title{
        text-transform: uppercase;
        background: #264948;
        padding: 5px;
        font-size: 12px;
        margin-bottom: 20px;
        display: inline-block;
    }
    p{
        font-weight: bold;
        font-size: 20px;
        text-transform: capitalize;
    }
    .more-link{
        width: 45px;
        height: 45px;
        border: 1px solid #FFF;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #FFF;
        font-size: 11px;
        position:absolute;
        bottom: 20px;
    right: 20px;
    }
}
.investment-sector{
    background:#B27208; 
    padding:15px 20px;
    flex-grow: 1;
    .title{
        text-transform: uppercase;
        background: #A26706;
        padding: 5px;
        font-size: 12px;
        margin-bottom: 20px;
        display: inline-block;
        svg{
            font-size:9px;
        }
    }
    li{
        padding: 15px 10px;
        border: 1px solid #FFF;
        text-align: center;
        width: 90px;
        cursor: pointer;
        &:not(:last-child){
            margin-right: 10px;
        }
        img{
            width: 25px;
            height:25px;
            margin-bottom: 15px;
        }
        p{
            color:#FFF;
            font-size: 14px;
        }
    }
}
`