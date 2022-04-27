import styled from "styled-components";

export const Section =  styled.section
`background-repeat:no-repeat;
background-position: center;
background-size:cover;
position:relative;
color:#FFF;
&::after{
    content:'';
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:2;
    background:#183F3CD6;
}
.column{
    h5{
        letter-spacing: -1px;
    }ul{
        li{
            font-size:12px
        }
    }
}
`