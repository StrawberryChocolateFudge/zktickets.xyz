import React from "react";

const CaseStudiesSection = {
    marginTop: "35px"
}

const caseStudiesTitleContainer = {
    display: "flex",
    flexDirection: "colummn" as "column",
    justifyContent: "center" as "center",
    flexWrap: "wrap" as "wrap",
    textAlign: "center" as "center",
    marginBottom: "20px"
}

const caseStudiesTitle = {
    backgroundColor: "#F7A5CD",
    color: "black",
    fontFamily: "roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "40px",
    lineHeight: "51px",
    height: "60px",
    margin: "0 auto"
}

const caseStudiesSubtitle = {
    marginLeft: "20px",
    fontFamily: "roboto",
    marginBottom: "20px",
    marginTop: "20px",
    textAlign: "center" as "center"
}

const scrollableCardContainer = {
    overflowX: "scroll" as "scroll",
    overflowY: "hidden" as "hidden",
    "-webkit-overflow-scrolling": "touch",
    width: "500px",
}

const useCaseCard = {
    display: "inline-block",
    float: "none" as "none",
    padding: "42px 50px",
    width: "200px",
    height: "252px",
    background: "#191A23",
    borderRadius: "45px",
    margin: "10px",
    color: "white",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "20px",
    fontFamily: "roboto"
}

export function CaseStudies() {
    return <section style={CaseStudiesSection}>
        <div style={caseStudiesTitleContainer}>
            <div style={caseStudiesTitle}>Case Studies</div>
            <div style={caseStudiesSubtitle}>Explore some use-cases of our technology!</div>
        </div>
        <div style={scrollableCardContainer}>
            <table>
                <tr >
                    <td><article style={useCaseCard}>
                        A local venue can sell tickets for crypto currency and verify the tickets at the door. They can choose to airdrop NFTs or other tokens when the tickets are scanned and profit from ticket sales and tokenomics.
                    </article></td>
                    <td><article style={useCaseCard}>
                        An Influencer may create tickets for virtual meetings and allow ticket price speculation.
                        The tickets can be purchased as a form of investment and the event creator will earn passive income from ticket resales.
                    </article></td>
                    <td><article style={useCaseCard}>
                        A metaverse citizen may sell tickets to visit virtual real estate.. The ticket sales provide a direct income for the creator and the tickets are validated by the attendees whenever they want.
                    </article></td>
                </tr>
            </table>
        </div>
    </section>
}