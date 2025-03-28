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
          <li>Покупку по сертификату можно совершить только за одно посещение.</li>
          <li>Если сумма покупки меньше суммы, указанной в сертификате, разница остаётся на депозите.</li>
          <li>Если сумма покупки превышает номинал, указанный в сертифи-кате, покупатель может оплатить разницу между
            этой суммой и номиналом сертификата.
          </li>
          <li>При осуществлении покупки по подарочному сертификату скидки предоставляются в рамках действующей программы
            лояльности.
          </li>
          <li>Товары, приобретенные по подарочным сертификатам могут быть обменены на другой товар. При возврате товара,
            приобретенного по подарочному сертификату, выдается новый подарочный сертификат на ту же сумму.
          </li>
          <li>Подарочный сертификат не подлежит обмену на денежный эквивалент.</li>
          <li>Подарочный сертификат имеет срок действия, после истечения срока действия сертификат считается
            недействительным. Деньги, внесённые в оплату сертификата, после истечения срока не возвращаются.
          </li>
          <li>При осуществлении покупки необходимо предъявить пластиковую карту сертификата или электронную версию
            сертификата.
          </li>
          <li>Приобретая подарочный сертификат, покупатель соглашается с условиями его использования.</li>
          <li>Настоящие условия могут быть изменены в одностороннем порядке без предварительного уведомления Владельца
            подарочного сертификата.
          </li>
        </ol>
        <p>Информацию об изменениях можно получить по телефону 8 (800) 550-05-24 или на сайте amrita-dent.ru.</p>
      </div>
    </ModalWrapper>
  );
});

TermsOfUseModal.displayName = "TermsOfUseModal";

export default TermsOfUseModal;
