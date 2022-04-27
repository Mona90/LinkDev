import styled from "styled-components";

export const Top = styled.div
`
background-repeat:no-repeat;
background-position: top;
background-size:cover;
position:relative;
&::after{
    content:'';
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:2;
    background:rgb(34 44 43 / 89%);
}
header{
    position:relative;
    z-index:7;
    .side-left{
        border:none;
    }
}
.banner-content{
    position:relative;
    z-index:3;
    color:#FFF;
    h4{
        font-weight: bold;
        font-size: 30px;
    }
    .input-group{
        position:relative;
        width:220px;
        &:not(:last-child){
            margin-right:10px;
            width:170px;

        }
        input{
            background: transparent;
            border:none;
            width:100%;
            padding:5px 14px;
            border: 1px solid #CCC; 
            &:focus-visible{
                outline: none
            }
        }
        &:after{
            border-style: solid;
            border-width: 1px 1px 0 0;
            content: '';
            display: inline-block;
            height: 0.45em;
            position: absolute;
            top: 50%;
            right:11px;
            transform: rotate(135deg) translateY(50%);
            vertical-align: top;
            width: 0.45em;
            z-index:5;
        }
        
    }
}
`