import React from "react";
import { GeneralProps } from "../pages";

//@ts-ignore
import AccessDenied from "../images/undraw_access_denied.svg";

const downloadAppSection = {
    marginTop: "20px",
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "center"
}

const callToActionContainer = {
    display: "flex",
    flexDirection: "row" as "row",
    alignItems: "center",
    padding: "0px 10px",
    width: "370px",
    height: "347px",
    background: "#F3F3F3",
    borderRadius: "45px"
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
    marginBottom: "10px"
}

const callToActionSubtitle = {
    fontFamily: "Space Grotesk",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "13px",
    color: "#0000000"
}


const launchTheAppButton = {
    background: "#191A23",
    borderRadius: "14px",
    padding: "20px 35px",
    cursor: "pointer",
    color: "white",
    fontSize: "20px",
    textDecoration: "none"
}

const accessDeniedLogoStyle = {
    width: "200px",
    marginTop: "15px"
}

export function DownloadTheMobileApp(props: GeneralProps) {
    return <section style={downloadAppSection}>
        <div style={callToActionContainer}>
            <div style={callToActionTextContainer}>
                <div style={callToActionTitle}>Download the Android App</div>
                <div style={callToActionSubtitle}>A Non-custodial wallet specifically designed to verify tickets created with ZkTickets!</div>
                <a href={"https://btt.zktickets.xyz/up_/apk/ZkTickets_Scanner_0.0.1_release.apk"} style={launchTheAppButton}>Side-Load the App</a>
            </div>
            <img style={accessDeniedLogoStyle} src={AccessDenied} />
        </div>
    </section>
}
