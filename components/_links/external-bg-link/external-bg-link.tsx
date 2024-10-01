import React, {ReactElement} from "react";
import clsx from "clsx";
import Link from "next/link";
import {ExternalBgLinkProps} from "./external-bg-link.props";
import styles from "./external-bg-link.module.css";

const ExternalBgLink = ({isExternal, href, className, children, ...props}: ExternalBgLinkProps): ReactElement | null => {
  return (
		<>
			{isExternal && <a href={href} className={clsx(className, styles.link)} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>}
			{!isExternal && <Link className={clsx(className, styles.link)} href={href ?? ``} {...props}>{children}</Link>}
		</>
	);
};

export default ExternalBgLink;
