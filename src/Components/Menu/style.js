import styled from "styled-components";

export const Section = styled.section
`background:#183F3C;
 color:#FFF;
 position:absolute;
 z-index:5;
 top:0;
 left:0;
 right:0;
 padding-top:85px;
 height:500px;
.column{
    &:first-child{
        text-transform: uppercase
    }
    li{
        margin-bottom:20px;
        &:first-child{
            text-transform: uppercase
        }
        a{
            color:#FFF;
            text-decoration:none;
        }
    }
}
.company-rights{
    border-top:1px solid #CCC;
    .privacy-terms,
    .copy-right{
        font-weight:100;
        color:#CCC;
        text-decoration:none;
    }
}

`