import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key={"link1"}
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />,
    <link
      key={"link2"}
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />,
    <link
      key={"link3"}
      href="https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap"
      rel="stylesheet"
    />
  ])
}
