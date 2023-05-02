import React from "react";
//@ts-ignore
import transferMoneyLogo from "../images/undraw_transfer_money.svg";
//@ts-ignore
import authenticationLogo from "../images/undraw_authentication.svg";
//@ts-ignore
import paymentPeopleLogo from "../images/undraw_credit_card_payment.svg";
//@ts-ignore
import investmentLogo from "../images/undraw_investment.svg";
//@ts-ignore
import etherLogo from "../images/undraw_ether.svg";
//@ts-ignore
import onlinePaymentsLogo from "../images/undraw_online_payments.svg";
import { GeneralProps } from "../pages";


const servicesSection = {
    // maxWidth: "500px",
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "center",
    margin: "0 auto"
}

const servicesTitleContainer = {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    flexWrap: "wrap" as "wrap",
}

const servicesTitle = {
    backgroundColor: "#F7A5CD",
    color: "black",
    fontFamily: "Space Grotesk",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "40px",
    lineHeight: "51px",
    height: "60px",
    margin: "0 auto",
    maxWidth: "180px"
}

const servicesSubtitle = {
    marginLeft: "20px",
    fontFamily: "Space Grotesk",
    marginBottom: "20px",
    marginTop: "20px",
    paddingTop: "20px",
    paddingBottom: "20px",
    maxWidth: "400px",
    margin: "0 auto"
}

const displayCardsContainer = {
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "space-around",
    flexWrap: "wrap" as "wrap",
    gap: "10px"
}

const displayCards = (bg: string) => {
    return {
        display: "flex",
        flexDirection: "column" as "column",
        alignItems: "flex-start",
        padding: "50px",
        width: "200px",
        height: "200px",
        background: bg,
        border: "1px solid #191A23",
        boxShadow: "0px 5px 0px #191A23",
        borderRadius: "45px",
        margin: "0 auto",
        marginBottom: "20px"
    }
}

const cardContent = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center" as "center",
    position: "relative" as "relative",
    top: -25
}

const cardTitle = (bg: string) => {
    return {
        backgroundColor: bg,
        fontFamily: "Space Grotesk",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "26px",
        lineHeight: "33px",
        color: "#000000",

    }
}

const transferImage = {
    width: "200px",
    marginTop: "10px"
}

const authenticateImage = {
    width: "170px",
    marginTop: "10px"
}

const paymentPeopleImage = {
    width: "200px",
    marginTop: "10px"
}

const investmentLogoImage = {
    width: "200px",
    marginTop: "10px"
}

const etherLogoImage = {
    width: "130px",
    marginTop: "10px",
    marginLeft: "40px"
}

const onlinePaymentsImage = {
    width: "220px",
    marginTop: "40px"
}

const titleSubtitleContainer = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    textAlign: "center" as "center"
}

const spacer = {
    marginLeft: "20px"
}

export function Features(props: GeneralProps) {
    if (props.windowSize > 1000) {

        return <section style={servicesSection}>
            <div style={servicesTitleContainer}>
                <div style={titleSubtitleContainer}>
                    <div style={servicesTitle}>
                        Features
                    </div>
                    <div style={servicesSubtitle}>
                        Our Protocol offers a variety of features to help event organizers successfully sell tickets online, mixed with some DeFi features. These include:
                    </div>
                </div>



                <div style={displayCardsContainer}>
                    <div style={displayCards("#F3F3F3")}>
                        <div style={cardContent}>
                            <div style={cardTitle("#F7A5CD")}>Sell Without a Middle-Man</div>
                            <img style={transferImage} src={transferMoneyLogo} />
                        </div>
                    </div>
                    <div style={spacer}></div>
                    <div style={displayCards("#F7A5CD")}>
                        <div style={cardContent}>
                            <div style={cardTitle("#F3F3F3")}>Verify Tickets Easily</div>
                            <img style={authenticateImage} src={authenticationLogo} />
                        </div>
                    </div>
                    <div style={spacer}></div>
                    <div style={displayCards("#000000")}>
                        <div style={cardContent}>
                            <div style={cardTitle("#F3F3F3")}>Resell or Transfer The Tickets</div>
                            <img style={paymentPeopleImage} src={paymentPeopleLogo} />
                        </div>
                    </div>
                </div>
                <div style={displayCardsContainer}>
                    <div style={displayCards("#F3F3F3")}>
                        <div style={cardContent}>
                            <div style={cardTitle("#F7A5CD")}>EVM Compatible Protocol</div>
                            <img style={etherLogoImage} src={etherLogo} />
                        </div>
                    </div>
                    <div style={spacer}></div>
                    <div style={displayCards("F7A5CD")}>
                        <div style={cardContent}>
                            <div style={cardTitle("#F3F3F3")}>Ticket Refunds Supported</div>
                            <img style={onlinePaymentsImage} src={onlinePaymentsLogo} />
                        </div>
                    </div>
                    <div style={spacer}></div>
                    <div style={displayCards("#000000")}>
                        <div style={cardContent}>
                            <div style={cardTitle("#F3F3F3")}>Optional Resale Price Speculation</div>
                            <img style={investmentLogoImage} src={investmentLogo} />
                        </div>
                    </div>
                </div>


            </div>
        </section >

    } else {

        const addSpacer = props.windowSize < 639;


        return <section style={servicesSection}>
            <div style={servicesTitleContainer}>
                <div style={titleSubtitleContainer}>
                    <div style={servicesTitle}>
                        Features
                    </div>
                    <div style={servicesSubtitle}>
                        Our Protocol offers a variety of features to help event organizers successfully sell tickets online, mixed with some DeFi features. These include:
                    </div>
                </div>



                <div style={displayCardsContainer}>
                    <div style={displayCards("#F3F3F3")}>
                        <div style={cardContent}>
                            <div style={cardTitle("#F7A5CD")}>Sell Without a Middle-Man</div>
                            <img style={transferImage} src={transferMoneyLogo} />
                        </div>
                    </div>

                    <div style={displayCards("#F7A5CD")}>
                        <div style={cardContent}>
                            <div style={cardTitle("#F3F3F3")}>Verify Tickets Easily</div>
                            <img style={authenticateImage} src={authenticationLogo} />
                        </div>
                    </div>
                </div>

                <div style={displayCardsContainer}>
                    <div style={displayCards("#000000")}>
                        <div style={cardContent}>
                            <div style={cardTitle("#F3F3F3")}>Resell or Transfer The Tickets</div>
                            <img style={paymentPeopleImage} src={paymentPeopleLogo} />
                        </div>
                    </div>

                    <div style={displayCards("#F3F3F3")}>
                        <div style={cardContent}>
                            <div style={cardTitle("#F7A5CD")}>EVM Compatible Protocol</div>
                            <img style={etherLogoImage} src={etherLogo} />
                        </div>
                    </div>
                </div>
                <div style={displayCardsContainer}>
                    <div style={displayCards("F7A5CD")}>
                        <div style={cardContent}>
                            <div style={cardTitle("#F3F3F3")}>Ticket Refunds Supported</div>
                            <img style={onlinePaymentsImage} src={onlinePaymentsLogo} />
                        </div>
                    </div>
                    <div style={displayCards("#000000")}>
                        <div style={cardContent}>
                            <div style={cardTitle("#F3F3F3")}>Optional Resale Price Speculation</div>
                            <img style={investmentLogoImage} src={investmentLogo} />
                        </div>
                    </div>
                </div>


            </div>
        </section >
    }
}