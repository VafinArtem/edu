import BaseButton, {BaseButtonComponent, BaseButtonProps} from "@/components/_buttons/base-button/base-button";
import ModalWrapper from "@/components/_modal/modal-wrapper/modal-wrapper";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import useOpenModal from "@/hooks/useOpenModal";
import clsx from "clsx";
import Image from "next/image";
import React, {ReactElement, useEffect} from "react";
import styles from "./example-card.module.css";
import {ExampleCardProps} from "./example-card.props";

const ExampleCard = <C extends BaseButtonComponent = "button">({
  example,
  className,
  ...props
}: ExampleCardProps<C>): ReactElement | null => {
  const {ref, showModal, changeModalActivityStatus} = useOpenModal<HTMLDivElement>();
  const {name, description, images} = example;
  const backPath = process.env.BACKEND_API;

  console.log(backPath);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = `auto`;
    }
  }, [showModal]);

  return (
    <>
      <article className={clsx(styles.item, className)}>
        <BaseButton<C> className={clsx(styles.inner)} {...(props as BaseButtonProps<C>)}
          onClick={() => changeModalActivityStatus(true)}>
          <Image src={`${backPath}${images[0]}`} alt={``} width={417} height={319}
            className={styles.image} quality={95}
            priority={true} />
          <Paragraph fontWeight={"medium"} fontSize={"none"} className={styles.name}>{name}</Paragraph>
        </BaseButton>
      </article>
      {showModal &&
        <ModalWrapper setShowModal={changeModalActivityStatus} showModal={showModal} className={styles.modal} ref={ref}>
          <div className={styles.scroll}>
            <div className={styles.modalInner}>
              <Paragraph className={styles.modalName}>{name}</Paragraph>
              <div className={styles.modalContent} dangerouslySetInnerHTML={{__html: description}} />
              <div className={styles.images}>
                {images.map((image, index) => <Image key={index} src={`${backPath}${image}`} alt={``}
                  width={347} height={347} quality={95} className={styles.modalImage} />)}
              </div>
            </div>
          </div>
        </ModalWrapper>}
    </>
  );
};

export default ExampleCard;
