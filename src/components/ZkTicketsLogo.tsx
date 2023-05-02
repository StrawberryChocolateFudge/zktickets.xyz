import React from "react";

export interface ZkTicketsLogoProps {
    color: string;
}

const logoContainer = (color: string) => {
    return {
        color
    }
}

export function ZkTicketsLogo(props: ZkTicketsLogoProps) {
    return <div style={logoContainer(props.color)}>
        zkTickets.xyz
    </div>
}