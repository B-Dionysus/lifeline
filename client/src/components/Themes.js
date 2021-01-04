// Many thanks to https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/
export const lightTheme = {
    text: '#000',
    body:"#FFF",
    navBack:"linear-gradient(0deg, rgba(0,0,0,1) 5%, rgba(0,0,0,.05) 5%, rgba(255,255,255,1) 90%);",
    eventBorder:"1px solid black;"
}
export const darkTheme = {
    body: '#000',
    text: '#FFF',
    navBack:"linear-gradient(0deg, rgba(0,0,0,1) 5%, rgba(241,0,209,.6) 25%, rgba(241,0,209,.15) 70%);",
    // tagText:"rgba(241,0,209,1)"
    tagText:"#white",
    eventShadow:"0 0px 10px 4px #e924c8;",
    eventBorder:"0px solid black;"
}