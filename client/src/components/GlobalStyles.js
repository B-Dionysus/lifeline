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
    background: ${({theme})=>theme.nav_back}
  }
  .tag-header-timeline{    
    color:${({theme})=>theme.tag_header}
  }
  .tag-timeline{
    color:  ${({theme})=>theme.tag_text}
  }
  .event-block{      
    box-shadow:  ${({theme})=>theme.event_shadow}
    border:  ${({theme})=>theme.event_border}
    transition: all 0.750s linear;
  } 
  .active-tag{
    color: ${({theme})=>theme.tag_activeText}
    box-shadow:  ${({theme})=>theme.tag_activeShadow}
  }
  .description{
    border:${({theme})=>theme.desc_border};    
    background:${({theme})=>theme.desc_back};
  }
  .desc-box-header{
    background:${({theme})=>theme.desc_header};
}
  .date-title{
    border-bottom:${({theme})=>theme.date_border};
  }

  `