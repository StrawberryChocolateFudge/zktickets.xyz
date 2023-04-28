import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { HeaderBar } from "./components/HeaderBar"
import { Services } from "./components/Services"
import { CallToAcionComponent } from "./components/CallToActionComponent"
import { CaseStudies } from "./components/CaseStudies"
import { WorkProcess } from "./components/WorkProcess"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main >
      <HeaderBar></HeaderBar>
      <Services></Services>
      <CallToAcionComponent></CallToAcionComponent>
      <CaseStudies></CaseStudies>
      <WorkProcess></WorkProcess>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>ZKTickets.xyz</title>
