import React from 'react'
import {createUseStyles, ThemeProvider} from 'react-jss'
import { ProviderProps } from '.'
import "./provider.css"
import "./globalClasses.css"
const globalTheme = {
}

const Provider:React.FC<ProviderProps> = ({theme = {}, children}) => {
  return (
    <ThemeProvider theme={{...theme, ...globalTheme}}>
      <div>{children}</div>
    </ThemeProvider>
  )
}

export default Provider
