import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { HeaderBar } from "../components/HeaderBar"
import { Features } from "../components/Features"
import { CallToAcionComponent } from "../components/CallToActionComponent"
import { CaseStudies } from "../components/CaseStudies"
import { WorkProcess } from "../components/WorkProcess"
import { DownloadTheMobileApp } from "../components/DownloadTheMobileApp"
import { BottomBar } from "../components/BottomBar";
import "./styles.css";

export interface GeneralProps {
  windowSize: number;
}

const IndexPage: React.FC<PageProps> = () => {

  const [windowSize, setWindowSize] = React.useState(500);

  const handleWindowResize = React.useCallback((event: any) => {
    setWindowSize(window.innerWidth);
  }, []);

  React.useEffect(() => {
    setWindowSize(window.innerWidth);
  },[])


  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);



  return (
    <main >
      <HeaderBar windowSize={windowSize}></HeaderBar>
      <Features windowSize={windowSize}></Features>
      <CallToAcionComponent windowSize={windowSize}></CallToAcionComponent>
      <CaseStudies windowSize={windowSize}></CaseStudies>
      <WorkProcess windowSize={windowSize}></WorkProcess>
      <DownloadTheMobileApp windowSize={windowSize}></DownloadTheMobileApp>
      <BottomBar windowSize={windowSize}></BottomBar>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>ZKTickets.xyz</title>
