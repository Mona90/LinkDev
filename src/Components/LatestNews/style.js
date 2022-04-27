import styled from "styled-components";

export const Section = styled.section
`.side-left{
    background-repeat:no-repeat;
    background-position: center;
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
        background:#183F3CD6;
    }
    h3{
        position:relative;
        z-index:3;
        color:#FFF;
    }
}
.show-more{
    margin-right: 75px;
    justify-content: flex-end;
}
.owl-theme{
    .owl-nav{
        button{
            width: 30px;
            height: 30px;
            border: 1px solid #CCC;
            border-radius: 50%;
            color: #CCC;
            &:hover{
                background: #b27208;
                color: #FFF !important;
                border-color: #b27208 !important;
    
            }
        }
        
       
    }

}

    
}
`