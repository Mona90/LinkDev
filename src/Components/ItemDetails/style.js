import styled from "styled-components";

export const Content = styled.div
`.item-details{
    color:#1D3C3A;
    h3{
        font-weight: bold;
        letter-spacing: -1px;
        font-size: 30px;
        margin-bottom:20px;
    }
    .content{
        font-size: 14px;
        color: #506160;
        line-height: 2;
    }
}
.info{
    color: #b27208;
    font-size: 16px;
    margin-bottom:18px;
    svg{
        cursor:pointer;
    }
    .link{
        position:relative;
        .social-media{
            position:absolute;
            top:100%;
            right:0;
            span{
                background: rgb(48, 108, 194);
                width: 25px;
                height: 25px;
                text-align: center;
                color: #FFF;
                svg{
                    vertical-align:middle
                }
            }
        }
    }
}
`