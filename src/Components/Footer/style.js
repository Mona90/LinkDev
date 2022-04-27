import styled from "styled-components";

export const Section = styled.section
`background:#183F3C;
color:#FFF;
.column{
    &:first-child{
        text-transform: uppercase
    }
    li{
        margin-bottom:10px;
        &:first-child{
            text-transform: uppercase
        }
    }
}
.news-letter{
    color:#FFF;
    text-transform:capitalize;
    input{
        background: #476565;
        border: 0;
        margin-bottom: 20px;
        padding: 7px 10px;
        color: #FFF;
    }
    button{
        margin-bottom: 20px;
        width: 120px;
        background: transparent;
        border: 1px solid #FFF;
        padding: 7px 10px;
        color:#FFF;
    }
    .copy-right{
        font-weight: 100;
        margin-top: 40px;
    }
}
`