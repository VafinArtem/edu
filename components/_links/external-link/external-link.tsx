import React, {ReactElement} from "react";
import {ExternalLinkProps} from "./external-link.props";
import styles from "./external-link.module.css";
import clsx from "clsx";
import Link from "next/link";

const ExternalLink = ({isExternal, href, className, children, ...props}: ExternalLinkProps): ReactElement | null => {
  return (
		<>
			{isExternal && <a href={href} className={clsx(className, styles.link)} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>}
			{!isExternal && <Link className={clsx(className, styles.link)} href={href ?? ``} {...props}>{children}</Link>}
		</>
	);
};

export default ExternalLink;
