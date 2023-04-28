import React from "react";

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
    fontFamily: "roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "40px",
    lineHeight: "51px",
    height: "60px"
}

const workProcessSubtitle = {
    marginLeft: "20px",
    fontFamily: "roboto",
    marginBottom: "20px",
    marginTop: "20px",
    textAlign: "center" as "center"
}

export function WorkProcess() {
    const [accordionOpen, setAccordionOpen] = React.useState(0);
    return <section style={WorkProcessSection}>
        <div style={workProcessTitleContainer}>
            <div style={workProcessTitle}>The Process</div>
            <div style={workProcessSubtitle}>A step-by-step guide to creating events.</div>
        </div>
    </section>
}

interface AccordionProps {
    accordionOpen: number;
    setAccordionOpen: (to: number) => void;
    title: string,
    subtitle: string
}

function Accordions(props: AccordionProps) {

}