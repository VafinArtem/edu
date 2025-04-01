import ModalWrapper from "@/components/_modal/modal-wrapper/modal-wrapper";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import React, {ForwardedRef, forwardRef, ReactElement} from "react";
import styles from "./terms-of-use-modal.module.css";
import {TermsOfUseModalProps} from "./terms-of-use-modal.props";

const TermsOfUseModal = forwardRef(({
  showModal,
  setShowModal,
}: TermsOfUseModalProps, ref: ForwardedRef<HTMLDivElement>): ReactElement | null => {
  return (
    <ModalWrapper showModal={showModal} setShowModal={setShowModal} ref={ref}>
      <div className={styles.content}>
        <Paragraph className={styles.title}>Условия использования</Paragraph>
        <ol>
          <li>Покупку по&nbsp;сертификату можно совершить только за&nbsp;одно посещение.</li>
          <li>Если сумма покупки меньше суммы, указанной в&nbsp;сертификате, разница остаётся на&nbsp;депозите.</li>
          <li>Если сумма покупки превышает номинал, указанный в&nbsp;сертификате, покупатель может оплатить разницу
            между
            этой суммой и&nbsp;номиналом сертификата.
          </li>
          <li>При осуществлении покупки по&nbsp;подарочному сертификату скидки предоставляются в&nbsp;рамках действующей
            программы
            лояльности.
          </li>
          <li>Товары, приобретенные по&nbsp;подарочным сертификатам могут быть обменены на&nbsp;другой товар. При
            возврате товара,
            приобретенного по&nbsp;подарочному сертификату, выдается новый подарочный сертификат на&nbsp;ту&nbsp;же
            сумму.
          </li>
          <li>Подарочный сертификат не&nbsp;подлежит обмену на&nbsp;денежный эквивалент.</li>
          <li>Подарочный сертификат имеет срок действия, после истечения срока действия сертификат считается
            недействительным. Деньги, внесённые в&nbsp;оплату сертификата, после истечения срока не&nbsp;возвращаются.
          </li>
          <li>При осуществлении покупки необходимо предъявить пластиковую карту сертификата или электронную версию
            сертификата.
          </li>
          <li>Приобретая подарочный сертификат, покупатель соглашается с&nbsp;условиями его использования.</li>
          <li>Настоящие условия могут быть изменены в&nbsp;одностороннем порядке без предварительного уведомления
            Владельца
            подарочного сертификата.
          </li>
        </ol>
        <p>Информацию об&nbsp;изменениях можно получить по&nbsp;телефону&nbsp;<a href={`tel:+78005500524`}>8 (800)
          550-05-24</a> или на
          сайте <a href={`https://edu.amrita-dent.ru`}>edu.amrita-dent.ru</a>.</p>
      </div>
    </ModalWrapper>
  );
});

TermsOfUseModal.displayName = "TermsOfUseModal";

export default TermsOfUseModal;
