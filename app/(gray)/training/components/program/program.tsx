import React, {ReactElement} from "react";
import {ProgramProps} from "./program.props";
import styles from "./program.module.css";
import SectionItem from "@/components/_training/section-item/section-item";
import SectionHead from "@/components/_training/section-head/section-head";
import DownloadLink from "@/components/_links/download-link/download-link";
import ProgramItem from "@/components/_training/program-item/program-item";
import {ProgramType} from "@/helpers/contants";

const Program = ({className, courseTypeName}: ProgramProps): ReactElement | null => {
  return (
    <SectionItem className={className}>
			<SectionHead title={`Что будет на ${courseTypeName}`} text={`Вы погрузитесь в мир хирургических и ортопедических этапов процесса установки имплантов. Сможете задать интересующий вопрос преподавателю.`}>
				<DownloadLink className={styles.downloadLink} href={`#`}>
					Скачать программу в&nbsp;PDF
				</DownloadLink>
			</SectionHead>
			<ul className={styles.list}>
				<ProgramItem
					type={ProgramType.THEORY}
					learnList={[`Командный подход в лечении пародонтологических пациентов`, `Как повысить выживаемость имплантатов при пародонтите`, `Как привлечь новых пациентов и удержать постоянных`, `Как выбрать правильную тактику в сложных клинических ситуациях`, `Как избежать неоправданное удаление зубов`]}
					themeList={[`Выбор тактики лечения в сложных клинических случаях`, `Командное планирование лечения`, ` Мотивация пациента к проведению лечения`, `Коммуникация пародонтолога, хирурга и гигиениста`, `Пародонтальная подготовка к имплантации`, `Пародонтальная подготовка к ортопедическому лечению`]}
					duration={`8 часов`}
				/>
				<ProgramItem
					type={ProgramType.PRACTICE}
					themeList={[`Подготовка к ортодонтии. Пластика десны, изменение биотипа десны`, `Пародонтология и имплантация — сохранение десны при одномоментной имплантации, использование десневого трансплантата`, `Закрытие рецессий при пародонтите — регенеративная методика в области внутрикостного кармана с помощью «мягкотканной стенки»`]}
					duration={`8 часов`}
				/>
			</ul>
		</SectionItem>
  );
};

export default Program;
