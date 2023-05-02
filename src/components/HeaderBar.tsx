import React from "react";
import { GeneralProps } from "../pages";
//@ts-ignore
import logo from "../images/logo.png";
//@ts-ignore
import party from "../images/undraw_online_party.svg";
import { ZkTicketsLogo } from "./ZkTicketsLogo";

const headerSectionStyle = {
    marginTop: "10px"
}
const headerRow = {
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 20px",
    gap: "222px"
}

const navigatorEl = {}

const titleContainer = {
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "0px 20px",
    gap: "10px",
}

const TitleText = {
    maxWidth: "390px",
    // height: "165px",
    fontFamily: "Space Grotesk",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "30px",
    // lineHeight: "55px",
    color: "#000000",
}

const subtitleRow = {
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "center"
}

const subtitleContainer = {
    marginTop: "20px",
    marginBottom: "20px",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row" as "row",
    alignItems: "flex-start",
    padding: "0px 20px",
    gap: "10px",
    maxWidth: "500px"
}

const subtitle = {
    maxWidth: "390px",
    heigth: "96px",
    fontFamily: "Space Grotesk",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#000000"
}

const headerImageContainer = {
    padding: "0px 20px",
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "center"

}

const headerImageStyle = {
    maxWidth: "500px",
    minWidth: "300px",
    width: "100%"
}

const subtitleOutterContainer = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",

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

export function HeaderBar(props: GeneralProps) {
    if (props.windowSize > 1000) {

        return <section style={headerSectionStyle}>


            <div style={subtitleRow}>

                <div style={subtitleOutterContainer}>
                    {/* <div style={headerRow}>
                        <ZkTicketsLogo color="black"></ZkTicketsLogo>
                        <div style={navigatorEl}>
                        </div>
                    </div> */}
                    <div style={titleContainer}>
                        <div style={TitleText}>A Trustless Event Ticketing Protocol</div>
                    </div>
                    <div style={subtitleContainer}>
                        <div style={subtitle}>
                            Our Zero-Knowledge Proof based event ticketing solution helps event organizers sell and verify tickets without relying on third-parties.
                        </div>
                    </div>
                    <div style={tryItButtonContainer}>
                        <button onClick={() => window.location.href = "https://btt.zktickets.xyz"} style={tryItOutButton}>Try it out</button>
                    </div>
                </div>
                <div style={headerImageContainer}>
                    <img style={headerImageStyle} src={party} />
                </div>
            </div>
        </section>


    } else {
        return <section style={headerSectionStyle}>
            {/* <div style={headerRow}>
                <ZkTicketsLogo color="black"></ZkTicketsLogo>
                <div style={navigatorEl}>
                </div>
            </div> */}
            <div style={titleContainer}>
                <div style={TitleText}>A Trustless Event Ticketing Protocol</div>
            </div>
            <div style={headerImageContainer}>
                <img style={headerImageStyle} src={party} />
            </div>
            <div style={subtitleRow}>
                <div style={subtitleOutterContainer}>
                    <div style={subtitleContainer}>
                        <div style={subtitle}>
                            Our Zero-Knowledge Proof based event ticketing solution helps event organizers sell and verify tickets without relying on third-parties.
                        </div>
                    </div>
                    <div style={tryItButtonContainer}>
                        <button onClick={() => window.location.href = "https://btt.zktickets.xyz"} style={tryItOutButton}>Try it out</button>
                    </div>
                </div>
            </div>
        </section>
    }



}