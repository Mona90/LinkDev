import styled from "styled-components";


export const Section = styled.header
` padding:0;
  border-bottom:1px solid #ccc;
  color:#FFF;
  position:relative;
  z-index:6;
`
export const Logo = styled.div
`border-right:1px solid #CCC;
 padding:10px
`
export const LogoImag = styled.img
`width:100px
`
export const NavBar = styled.div
`
.item{
    display: flex;
  justify-content: center;
  align-items: center;
  &:not(:last-child){
    padding-right: 15px;
    border-right:1px solid #ccc;
    margin-right:10px
  }
  svg{
    cursor: pointer;
  }
  .lang{
    padding-right:17px;
    position:relative;
    cursor:pointer;
    &:after{
      border-style: solid;
      border-width: 1px 1px 0 0;
      content: '';
      display: inline-block;
      height: 0.45em;
      position: absolute;
      top: 50%;
      right:0;
      transform: rotate(135deg) translateY(50%);
      vertical-align: top;
      width: 0.45em;
      z-index:5;
  }
  }
}
`
export const ColorControll = styled.div
` 
`
export const Button = styled.button
`border:1px solid #FFF;
padding: 5px 24px;
background:none;
color:#FFF
`