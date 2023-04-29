import React from "react";
import { Link } from "gatsby";
import { ZkTicketsLogo } from "./ZkTicketsLogo";

const BottomBarSection = {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
    padding: "50px 20px 30px",
    width: "100%",
    background: "#191A23"

}

const linkContainer = {
    marginTop: "20px",
    width: "150px",
    height: "10",
    border: "2px solid black",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "center",
    backgroundColor: "white"
}

const link = {
    color: "black",
    textDecoration: "none"
}

const BottomRow = {
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "flex-start"
}

const anchorContainer = {
    marginTop: "10px",
    marginBottom: "5px"
}

const anchor = {
    color: "white",
    textDecoration: "none"
}

export function BottomBar() {
    return <section style={BottomBarSection}>
        <div style={BottomRow}>
            <ZkTicketsLogo color="white"></ZkTicketsLogo>
        </div>
        <div style={BottomRow}>
            <div style={linkContainer}>
                <Link style={link} to="privacyPolicy">Privacy Policy</Link></div>
        </div>
        <div style={BottomRow}>
            <div style={anchorContainer}>
                <a style={anchor} href={"https://zkptech.solutions"}>Created by zkptech.solutions - 2023</a>
            </div>
        </div>
    </section>
}