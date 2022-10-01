import React from "react";

const styles = {
    footer: 'text-center mb-5 clear-right'
};

export interface FooterProps {
    title: string;
}
const Footer = (props: FooterProps): React.ReactElement => {
    const { title } = props;
    return (<div className={styles.footer}>
        <div> {'Copyright © '} {title}  {new Date().getFullYear()}.</div>
    </div>)
};

export default Footer;