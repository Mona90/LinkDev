import styled from "styled-components";

export const Slide  = styled.div
`
z-index: 3;
position: absolute;
left: 20px;
color:#fff;
#navigation{
    width: 220px;
    height: 220px;
    border: 1px solid #FFF;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .navigation-control{
        .arrow{
            color:#b27208;
            font-size: 40px;
        }
        span{
            font-size: 60px;
        }
    }
    p{
        font-size:20px;
        font-weight:100;
    }
}
#slide{
    width: 710px;
    .slide-content{
        text-transform:uppercase;
        .title{
            font-weight:100;
        }
        .content{
            font-size: 55px;
            font-weight: bold;
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
}


`