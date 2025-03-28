import Pagination from "@/components/_common/pagination/pagination";
import Certificates from "@/views/payment-page/components/certificates/certificates";
import Head from "@/views/payment-page/components/head/head";
import Payment from "@/views/payment-page/components/payment/payment";
import Promotions from "@/views/payment-page/components/promotions/promotions";
import React, {ReactElement} from "react";
import {PaymentPageProps} from "./payment-page.props";

const PaymentPage = ({}: PaymentPageProps): ReactElement | null => {
  return (
    <React.Fragment>
      <Pagination className={`container`} pagination={[{name: `Оплата и спецпредложения`}]} />

      <Head />

      <Payment />

      <Promotions />

      <Certificates />
    </React.Fragment>
  );
};

export default PaymentPage;
