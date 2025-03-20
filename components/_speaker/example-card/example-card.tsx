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
          <Image src={`${process.env.NEXT_PUBLIC_IMAGE_SERVER}${images[0].image}`} alt={``} width={417} height={319}
            className={styles.image} quality={95}
            priority={true} />
          <Paragraph tag={"span"} fontWeight={"medium"} fontSize={"none"} className={styles.name}>{name}</Paragraph>
        </BaseButton>
      </article>
      {showModal &&
        <ModalWrapper setShowModal={changeModalActivityStatus} showModal={showModal} className={styles.modal} ref={ref}>
          <div className={styles.scroll}>
            <div className={styles.modalInner}>
              <Paragraph className={styles.modalName}>{name}</Paragraph>
              {description && <div className={styles.modalContent} dangerouslySetInnerHTML={{__html: description}} />}
              <div className={styles.images}>
                {images.map((image, index) => (
                  <figure className={styles.imageWrapper} key={index}>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_SERVER}${image.image}`}
                      alt={``}
                      width={347}
                      height={347}
                      quality={95}
                      className={styles.modalImage}
                    />
                    {image.description && <figcaption className={styles.description}>{image.description}</figcaption>}
                  </figure>))}
              </div>
            </div>
          </div>
        </ModalWrapper>}
    </>
  );
};

export default ExampleCard;
