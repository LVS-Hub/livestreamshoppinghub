import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Theme, ThemeProvider, css } from "@emotion/react"

import theme from "../utils/theme"

const pageStyles = ({ theme }: { theme: Theme }) => css({
  padding: theme.spacing.s,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
})

const IndexPage: React.FC<PageProps> = () => {
  return (
    <ThemeProvider theme={theme}>
      <main css={(theme) => pageStyles({ theme })}>
        <iframe src={`https://embed-player.vimmi.net/?appId=${process.env.GATSBY_VIMMI_APP_ID}&store=hello.vimmi.net&targetId=${process.env.GATSBY_VIMMI_TARGET_ID}&player=channel-embedded-player_099610&player=channel-embedded-player_099610`} allow="autoplay; fullscreen; picture-in-picture; encrypted-media" width="1080px" height="720px" style={{ borderRadius: "0px" }}></iframe>
        <script src="https://vimmi-widgets.vimmi.net/players-manager.js?d=1726751384.038" async></script>
      </main>
    </ThemeProvider>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Live Stream Shopping Hub</title>
