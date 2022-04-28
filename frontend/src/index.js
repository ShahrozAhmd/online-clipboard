import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { extendTheme, ChakraProvider} from '@chakra-ui/react';
import {mode} from "@chakra-ui/theme-tools";

const colors = {
  primary: {
    main: "#ffffff",
  },
  submit: {
    main: "2374AB"
  }
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ styles: {
  global: (props) => ({
    "html, body": {
      background: "#C1CCD7",  //mode(light mode color, dark mode color)
    },
  }),
}, config, colors})

function Final() {
  return (
    <ChakraProvider initialColorMode={config.initialColorMode} theme={theme}>
      <App />
    </ChakraProvider>
  )
}


ReactDOM.render(

  <Final />,
  document.getElementById('root')
);
