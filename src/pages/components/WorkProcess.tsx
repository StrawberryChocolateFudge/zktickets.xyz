
import React from "react";

//@ts-ignore
import PlusLogo from "../../images/plusIcon.svg";
//@ts-ignore
import MinusLogo from "../../images/minusIcon.svg";

const WorkProcessSection = { marginTop: "30px" }

const workProcessTitleContainer = {
    display: "flex",
    flexDirection: "colummn" as "column",
    justifyContent: "center" as "center",
    flexWrap: "wrap" as "wrap",
    textAlign: "center" as "center",
    marginBottom: "20px"
}

const workProcessTitle = {
    backgroundColor: "#F7A5CD",
    color: "black",
    fontFamily: "Space Grotesk",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "40px",
    lineHeight: "51px",
    height: "60px"
}

const workProcessSubtitle = {
    marginLeft: "20px",
    fontFamily: "Space Grotesk",
    marginBottom: "20px",
    marginTop: "20px",
    textAlign: "center" as "center"
}

const accordionContainer = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center" as "center",
    textAlign: "center" as "center"
}

const accordionOutterContainerClosed = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    padding: "41px 60px",
    background: "#F3F3F3",
    border: "1px solid #191A23",
    boxShadow: "0px 5px 0px #191A23",
    borderRadius: "45px",
    width: "300px",
    height: "30px",
    margin: "0 auto",
    cursor: "pointer",
    marginBottom: "20px"
}

const accordionOutterContainerOpen = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    padding: "41px 60px",
    background: "#F7A5CD",
    border: "1px solid #191A23",
    borderRadius: "45px",
    boxShadow: "0px 5px 0px #191A23",
    width: "300px",
    height: "60px",
    margin: "0 auto",
    cursor: "pointer",
    marginBottom: "20px"
}

const accordionTitleRow = {
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "space-between",
    alignItems: "center"
}

const accordionTitleContainer = {
    display: "flex",
    flexDirection: "row" as "row",
    alignItems: "center",
    padding: "0px",
    gap: "25px",
    marginLeft: '-25px'
}

const accordionIndex = {
    fontFamily: "Space Grotesk",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "30px",
    lineHeight: "77px",
    color: "#000000"
}

const accordionTitle = {
    fontFamily: "Space Grotesk",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "38px",
    color: "#000000"
}

const plusSignContainer = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    width: "25px",
    height: "25px",
    border: "1px solid black",
    borderRadius: "60px"
}

const accordionDivider = {
    border: "1px solid #191A23",
    width: "100%"
}

const subtitlecontainer = {
    fontFamily: "Space Grotesk",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "23px",
    color: "#000000",
    textAlign: "left" as "left"
}

export function WorkProcess() {
    const [accordionOpen, setAccordionOpen] = React.useState(0);
    return <section style={WorkProcessSection}>
        <div style={workProcessTitleContainer}>
            <div style={workProcessTitle}>The Process</div>
            <div style={workProcessSubtitle}>A step-by-step guide to event ticketing.</div>
        </div>
        <div style={accordionContainer}>
            <Accordion
                accordionOpen={accordionOpen}
                setAccordionOpen={setAccordionOpen}
                title="Create an Event"
                subtitle="Open up the application and you will be prompted to fill out a form with the event details. The price of tickets, how many are sold and more."
                accordionNumber={1}
            ></Accordion>
            <Accordion
                accordionOpen={accordionOpen}
                setAccordionOpen={setAccordionOpen}
                title="Share the Event link"
                subtitle="You are redirected to the event page where users can purchase tickets. They are printable PDF documents."
                accordionNumber={2}
            ></Accordion>
            <Accordion
                accordionOpen={accordionOpen}
                setAccordionOpen={setAccordionOpen}
                title="Verify the tickets"
                subtitle="Download the Mobile application to verify tickets at the doors of a venue or use the WebApp. You find the link on the event page."
                accordionNumber={3}
            ></Accordion>
            <Accordion
                accordionOpen={accordionOpen}
                setAccordionOpen={setAccordionOpen}
                title="Transfer, Refund or Resell Tickets"
                subtitle="The purchaser of the ticket can request to transfer the ticket, ask the organizer for a refund or list the tickets for sale."
                accordionNumber={4}
            ></Accordion>
            <Accordion
                accordionOpen={accordionOpen}
                setAccordionOpen={setAccordionOpen}
                title="Protected resale market"
                subtitle="The speculative resale is only available if the event creator allows it and creating custom priced resales require staking tokens to mitigate bots."
                accordionNumber={5}
            ></Accordion>
        </div>
    </section>
}

interface AccordionProps {
    accordionOpen: number;
    setAccordionOpen: (to: number) => void;
    title: string,
    subtitle: string,
    accordionNumber: number
}

function Accordion(props: AccordionProps) {
    const onAccordionOpen = () => {
        props.setAccordionOpen(props.accordionNumber);
    }

    const onAccordionClosed = () => {
        props.setAccordionOpen(0);
    }

    // The accordion shows it's subtitle when the accordion is open
    if (props.accordionOpen === props.accordionNumber) {
        //Render open accordion
        return <div
            style={accordionOutterContainerOpen}
            onClick={() => onAccordionClosed()}>
            <div style={accordionTitleRow}>
                <div style={accordionTitleContainer}>
                    <div style={accordionIndex}>0{props.accordionNumber}</div>
                    <div style={accordionTitle}>{props.title}</div>
                </div>
                <div style={plusSignContainer}>
                    <img src={MinusLogo} alt="Minuss logo" />
                </div>
            </div>
            <div style={accordionDivider}></div>
            <div style={subtitlecontainer}>{props.subtitle}</div>
        </div>
    } else {
        // render close accordion
        return <div onClick={() => onAccordionOpen()} style={accordionOutterContainerClosed}>
            <div style={accordionTitleRow}>
                <div style={accordionTitleContainer}>
                    <div style={accordionIndex}>0{props.accordionNumber}</div>
                    <div style={accordionTitle}>{props.title}</div>
                </div>
                <div style={plusSignContainer}>
                    <img src={PlusLogo} alt="Plus logo" />
                </div>
            </div>
        </div>
    }
}