import styled from "styled-components";
export const Card = styled.div
` 
    border:none;
    img{
        height:160px;
        width:100%;
    }
    .card-body{
        position:relative;
        padding-bottom: 45px;
        .card-title{
            a{
              color: #1A3D3B;
              font-size: 14px;
              text-decoration:none;
              font-weight:bold;
              text-align:start;
            }
        }
        .info{
            position:absolute;
            bottom:10px;
            right: 10px;
            left: 10px;
            color: #b27208;
            font-size: 12px;
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
                        height: 20px;
                        text-align: center;
                        color: #FFF;
                        svg{
                            vertical-align:middle
                        }
                    }
                }
            }
        }
    }
`