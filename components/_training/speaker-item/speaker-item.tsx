import React, {ReactElement} from "react";
import {SpeakerItemProps} from "./speaker-item.props";
import styles from "./speaker-item.module.css";
import Image from "next/image";
import Heading from "@/components/_tags/heading/heading";
import ExternalBgLink from "@/components/_links/external-bg-link/external-bg-link";
import EduItem from "@/components/_training/edu-item/edu-item";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {Route} from "@/helpers/route";

const SpeakerItem = ({name, position, photo, video, workExperience, edu, id}: SpeakerItemProps): ReactElement | null => {
  return (
    <li className={styles.wrapper}>
			<div className={styles.inner}>
				<div className={styles.preview}>
					{video && <video className={styles.video} poster={photo}>
						<source srcSet={video} type="video/mp4" />
					</video>}
					{!video && <Image src={photo} alt={``} width={1330} height={648} className={styles.img} quality={95} />}
				</div>
				<div className={styles.content}>
					<div className={styles.head}>
						<Heading tag={`h3`} fontSize={`mini`} fontWeight={`medium`} className={styles.name}>{name}</Heading>
						<Paragraph className={styles.position} fontSize={`small`}>{position}</Paragraph>
					</div>
					<div className={styles.slider}>
						<div className={styles.slide}>
							<p className={styles.workExperience}>Стаж работы {workExperience}</p>
							<p>Специализация: пародонтальная терапия, пластика рецессий в области зубов и имплантатов с использованием микрохирургических техник.</p>
							<p>Опытный клиницист. С 2016 основатель и главный врач стоматологической клиники «Мегаполис Дент», г.Санкт-Петербург.</p>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.edu}>
				<div className={styles.eduHead}>
					<Heading tag={`h4`} fontSize={`mini`}>Образование и&nbsp;награды</Heading>
					<ExternalBgLink href={`${Route.SPEAKER}/${id}`}>Страница преподавателя</ExternalBgLink>
				</div>
				{(edu && edu.length > 0) && <ul className={styles.eduList}>
					{edu.map((item, index) => <EduItem className={styles.eduItem} key={index} {...item} />)}
				</ul>}
			</div>
		</li>
	);
};

export default SpeakerItem;
