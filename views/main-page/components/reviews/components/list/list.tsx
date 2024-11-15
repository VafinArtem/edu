import {reviews} from "@/mocs/common";
import Review from "@/views/main-page/components/reviews/components/review/review";
import React, {ReactElement} from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import styles from "./list.module.css";
import {ListProps} from "./list.props";

const List = ({}: ListProps): ReactElement | null => {
  return (
    <div className={styles.list}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{0: 1, 768: 2, 1200: 4, 1500: 5}}
      >
        <Masonry columnsCount={5} gutter={"20px"}>
          {reviews.map((review) => (<Review
            key={review.id}
            review={review}
          ></Review>))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default List;
