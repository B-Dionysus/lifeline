// Many thanks to https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/
import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  .navbar{
    background: rgb(0,0,0);
    background: ${({theme})=>theme.navBack}
  }
  .tag-timeline{
    color:  ${({theme})=>theme.tagText}
  }
  .event-block{      
    box-shadow:  ${({theme})=>theme.eventShadow}
    border:  ${({theme})=>theme.eventBorder}
    transition: all 0.750s linear;
  }
  `