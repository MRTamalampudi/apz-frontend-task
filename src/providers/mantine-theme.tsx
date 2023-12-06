import {createTheme, MantineProvider} from "@mantine/core";
import React from "react";

const mantineTheme = createTheme({
    fontFamily:"Inter_",
    focusRing: "never",
})

interface MantineThemeProps {
    children : React.ReactNode;
}

export const MantineTheme = ({children}:MantineThemeProps) => {
  return (
      <MantineProvider
          theme={mantineTheme}
          defaultColorScheme={"light"}
      >
          {children}
      </MantineProvider>
  )
}