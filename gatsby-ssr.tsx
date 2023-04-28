import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
      rel="preload"
      href = "SpaceGrotesk-Medium.woff"
      as = "font"
      type = "font/woff"
      crossOrigin = "anonymous"
      key = "interFont"
        />,
    ])
}