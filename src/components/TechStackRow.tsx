import React from "react";

const techStackRowStyles = {
    marginTop: "20px",
    display: "flex",
    flexDirection: "row" as "row",
    alignItems: "flex-start"
}

export function TechStackRow() {
    return <section style={techStackRowStyles}>
        <div>Bittorrent Chain</div>
        <div>Ethereum</div>
        <div>Circom</div>
        <div>Solidity</div>
        <div>React</div>
    </section>
}