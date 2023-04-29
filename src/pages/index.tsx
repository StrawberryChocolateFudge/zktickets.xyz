import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { HeaderBar } from "./components/HeaderBar"
import { Services } from "./components/Services"
import { CallToAcionComponent } from "./components/CallToActionComponent"
import { CaseStudies } from "./components/CaseStudies"
import { WorkProcess } from "./components/WorkProcess"
import { DownloadTheMobileApp } from "./components/DownloadTheMobileApp"
import { BottomBar } from "./components/BottomBar";
import "./styles.css";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main >
      <HeaderBar></HeaderBar>
      <Services></Services>
      <CallToAcionComponent></CallToAcionComponent>
      <CaseStudies></CaseStudies>
      <WorkProcess></WorkProcess>
      <DownloadTheMobileApp></DownloadTheMobileApp>
      <BottomBar></BottomBar>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>ZKTickets.xyz</title>
