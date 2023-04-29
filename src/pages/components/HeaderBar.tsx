import React from "react";
//@ts-ignore
import logo from "../../images/logo.png";
//@ts-ignore
import party from "../../images/undraw_online_party.svg";
import { ZkTicketsLogo } from "./ZkTicketsLogo";

const headerSectionStyle = {
    marginTop: "10px"
}
const headerRow = {
    display: "flex",
    flexDirection: "row" as "row",
    alignItems: "center",
    padding: "0px 20px",
    gap: "222px"
}

const logoStyle = {
    width: "100px"
}

const navigatorEl = {}

const titleContainer = {
    display: "flex",
    flexDirection: "row" as "row",
    alignItems: "flex-start",
    padding: "0px 20px",
    gap: "10px",
}

const TitleText = {
    width: "390px",
    // height: "165px",
    fontFamily: "Space Grotesk",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "30px",
    // lineHeight: "55px",
    color: "#000000",
    flex: "none",
    order: 0,
    flexGrow: 0
}

const subtitleContainer = {
    marginTop: "20px",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "row" as "row",
    alignItems: "flex-start",
    padding: "0px 20px",
    gap: "10px",
    maxWidth: "500px"
}

const subtitle = {
    width: "340px",
    heigth: "96px",
    fontFamily: "Space Grotesk",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#000000",
    flex: "none",
    order: "0",
    flexGrow: "0"
}

const headerImageContainer = {
    padding: "0px 20px",

}

const headerImageStyle = {
    maxWidth: "500px",
    minWidth: "300px",
    width: "100%"
}

const subtitleOutterContainer = {
    display: "flex",
    flexDirection: "column" as "column"
}

const tryItButtonContainer = {
    maxWidth: "500px",
    textAlign: "center" as "center"
}

const tryItOutButton = {
    width: "264px",
    height: "68px",
    background: "#191A23",
    borderRadius: "14px",
    color: "white",
    fontWeight: "400",
    fontSize: "20px",
    textAlign: "center" as "center",
    fontStyle: "normal",
    fontFamily: "Space Grotesk",
    margin: "0 auto",
    cursor: "pointer"
}
// I need to get the screen width to determine if it's a phone or not

export function HeaderBar() {
    return <section style={headerSectionStyle}>
        <div style={headerRow}>
            <ZkTicketsLogo color="black"></ZkTicketsLogo>
            <div style={navigatorEl}>
            </div>
        </div>
        <div style={titleContainer}>
            <div style={TitleText}>A Trustless Event Ticketing Protocol</div>
        </div>
        <div style={headerImageContainer}>
            <img style={headerImageStyle} src={party} />
        </div>
        <div style={subtitleOutterContainer}>
            <div style={subtitleContainer}>
                <div style={subtitle}>
                    Our Zero-Knwoeldge Proof based event ticketing solution helps event organizers sell and verify tickets without relying on third-parties.
                </div>
            </div>
            <div style={tryItButtonContainer}>
                <button onClick={() => window.location.href = "https://btt.zktickets.xyz"} style={tryItOutButton}>Try it out</button>
            </div>
        </div>
    </section>
}