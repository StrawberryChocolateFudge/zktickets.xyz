import React from "react";

const sectionStyle = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    marginTop: "20px",
    marginBottom: "20px"
};


const row = {
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "center"
}

const title = {
    maxWidth: "390px",
    // height: "165px",
    fontFamily: "Space Grotesk",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    // lineHeight: "55px",
    color: "#000000",
}

const subtitle = {
    maxWidth: "390px",
    // height: "165px",
    fontFamily: "Space Grotesk",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "15px",
    // lineHeight: "55px",
    color: "#000000",
}


export function ExtendableProtocol() {
    return <section style={sectionStyle}>
        <div style={row}>
            <div style={title}>Are you a developer?</div>
        </div>
        <div style={row}>
            <div style={subtitle}>Learn more about how to extend the protocol <a href="https://zkptechsolutions.notion.site/Use-cases-for-ZKTickets-16064cfec2f44921822c331ad9cdc933">here</a>.
                You can trigger actions on ticket scanning. That can include airdropping tokens,NFTs, POAPs or anything you can imagine!</div>
        </div>
        <div style={row}></div>
    </section>
}