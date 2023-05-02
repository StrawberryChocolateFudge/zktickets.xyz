import { HeadFC, PageProps } from "gatsby";
import React from "react";

const mainTitleContainer = {
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "center"
}

const mainTitle = {
    fontFamily: "Space Grotesk",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "30px",
}

const title = {
    fontFamily: "Space Grotesk",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "25px",
};

const subtitle = {
    fontFamily: "Space Grotesk",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "15px",
}


const PrivacyPolicyPage: React.FC<PageProps> = () => {
    return (<main>
        <div style={mainTitleContainer}>
            <h5 style={mainTitle}>Privacy Policy</h5>
        </div>
        <article>
            <ol>
                <li>
                    <div style={title}>Privacy Policy for zktickets.xyz</div>
                    <div style={subtitle}>At zktickets.xyz, we take the privacy of our visitors seriously. We understand the importance of protecting personal information and are committed to providing a safe and secure online environment. This privacy policy outlines how we handle your data, your rights, and our obligations as a website operator.</div>
                </li>
                <li>
                    <div style={title}>Information we collect</div>
                    <div style={subtitle}>Zktickets.xyz does not collect any personal information from its visitors knowingly. We do not use any cookies or other tracking technologies that would enable us to identify individual visitors.
                        However, we use Google Fonts to improve the design and readability of our website. Google Fonts may collect certain information, such as IP addresses and usage data, for analytical purposes. Please refer to Google's privacy policy for more information on how they handle this data.
                    </div>
                </li>
                <li>
                    <div style={title}>GDPR Compliance</div>
                    <div style={subtitle}>Zktickets.xyz complies with the EU General Data Protection Regulation (GDPR). We respect your privacy rights and will process your personal information only in accordance with GDPR requirements.</div>
                </li>
                <li>
                    <div style={title}>Children's data</div>
                    <div style={subtitle}>Zktickets.xyz does not knowingly collect any personal information from children under the age of 16. If we become aware that we have collected personal data from a child under the age of 16, we will take appropriate steps to delete it as soon as possible.</div>
                </li>
                <li>
                    <div style={title}>Third-party links</div>
                    <div style={subtitle}>Zktickets.xyz may contain links to other websites. We are not responsible for the privacy practices or content of those websites. We encourage our visitors to review the privacy policies of these websites before sharing any personal information.</div>
                </li>
                <li>
                    <div style={title}>Changes to this policy</div>
                    <div style={subtitle}>We reserve the right to modify this privacy policy at any time. Any changes will be posted on this page, so we encourage you to review it periodically.</div>
                </li>
                <li>
                    <div style={title}>Contact Us</div>
                    <div style={subtitle}>If you have any questions or concerns about our privacy policy, please contact us at info.zkptech@pm.me. We will respond to your request as soon as possible.
                        Last updated: May 2, 2023.</div>
                </li>
            </ol>
        </article>
    </main>)
}

export default PrivacyPolicyPage;

export const Head: HeadFC = () => <title>ZKTickets.xyz</title>
