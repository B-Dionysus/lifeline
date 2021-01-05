// Many thanks to https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/
import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  a{
    color:${({theme})=>theme.text}
  }
  a:hover{
    // color:${({theme})=>theme.body}
    text-decoration:none;
    color:${({theme})=>theme.accent};
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
  .input-form{
    border:${({theme})=>theme.input_border};
  }  
  #newEvent input{
    background:${({theme})=>theme.input_formField};
    color:${({theme})=>theme.text};
  }
  #newEvent textarea{
    background:${({theme})=>theme.input_formField};    
    color:${({theme})=>theme.text};
  }
  .event-list{    
    background-color:${({theme})=>theme.event_listBack};
    border-top:${({theme})=>theme.event_listBorder};
    border-right:${({theme})=>theme.event_listBorder};
  }
  .event-block{
      border:${({theme})=>theme.event_blockBorder};
  }
  .event-header{
    background:${({theme})=>theme.eventHeader_back};
  }
  .event{
    border:${({theme})=>theme.event_blockBorder}
  }
  .fa-toggle-on{
    position: relative;
    top: 3px;
    cursor:pointer;
    font-size:large;
    display:${({theme})=>theme.themeOn_display}
  }
  .fa-toggle-off{
    position: relative;
    top: 3px;
    margin-top:1vh;
    cursor:pointer;
    font-size:large;
    display:${({theme})=>theme.themeOff_display}
  }
  `