// Many thanks to https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/
export const lightTheme = {
    text: '#000',
    body:"#FFF",
    event_border:"1px solid black;",
    event_shadow:"0 0px 0px 0px;",
    nav_back:"linear-gradient(0deg, rgba(0,0,0,1) 5%, rgba(0,0,0,.05) 5%, rgba(255,255,255,1) 90%);",    
    tag_header:"#black;",
    tag_activeShadow:"0 0px 0px 0px;",
    tag_activeText:"blue;",
    date_border:"1px solid black",
    desc_border:"1px solid black",
    desc_header:"gray",
    desc_back:"#FFF",
} 
export const darkTheme = {
    body: '#000',
    text: '#FFF',
    nav_back:"linear-gradient(0deg, rgba(0,0,0,1) 5%, rgba(241,0,209,.6) 25%, rgba(241,0,209,.15) 70%);",
    // tagText:"rgba(241,0,209,1)"
    event_shadow:"0 0px 10px 4px #e924c8;",
    event_border:"0px solid black;",
    tag_header:"#e924c8;",
    tag_text:"#white",
    tag_activeShadow:"0 0px 10px 4px #e924c8;",
    tag_activeText:"#e924c8;",
    date_border:"1px solid white",
    desc_border:"1px solid #660759",
    desc_header:"linear-gradient(0deg, rgba(0,0,0,1) 5%, rgba(241,0,209,.6) 25%, rgba(241,0,209,.15) 70%);",
    desc_back:"#000",
}