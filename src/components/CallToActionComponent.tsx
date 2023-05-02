import React from "react";
import { GeneralProps } from "../pages";

//@ts-ignore
import IdeationLogo from "../images/undraw_ideation.svg";

const sectionStyle = {
    marginTop: "20px",
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "center"

}

const callToActionContainer = {
    display: "flex",
    flexDirection: "row" as "row",
    alignItems: "center",
    justifyContent: "space-evently",
    padding: "0px 10px",
    // maxWidth: "370px",
    height: "347px",
    background: "#F3F3F3",
    borderRadius: "45px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
}
const IdeationLogoStyle = {
    width: "200px",
}

const callToActionTextContainer = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "flex-start",
    padding: "0px",

}

const callToActionTitle = {
    fontFamily: "Space Grotesk",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    color: "#000000",
    marginBottom: "10px",
    maxWidth: "200px"
}

const callToActionSubtitle = {
    fontFamily: "Space Grotesk",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "13px",
    color: "#0000000",
    maxWidth: "200px"
}

const launchTheAppButton = {
    background: "#191A23",
    borderRadius: "14px",
    padding: "20px 35px",
    cursor: "pointer",
    color: "white",
    fontSize: "15px",
    maxWidth: "200px"
}

export function CallToAcionComponent(props: GeneralProps) {
    return <section style={sectionStyle}>
        <div className="grow" style={callToActionContainer}>
            <div style={callToActionTextContainer}>
                <div style={callToActionTitle}>Let's make events happen!</div>
                <div style={callToActionSubtitle}>Try the application today and create your first event. It's very easy. Just connect your wallet and fill out the form!</div>
                <button onClick={() => window.location.href = "https://btt.zktickets.xyz"} style={launchTheAppButton}>Launch the App</button>
            </div>
            <img style={IdeationLogoStyle} src={IdeationLogo} />
        </div>
    </section>
}