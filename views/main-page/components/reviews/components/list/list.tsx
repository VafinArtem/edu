import useIsResolution from "@/hooks/useIsResolution";
import {reviews} from "@/mocs/common";
import Review from "@/views/main-page/components/reviews/components/review/review";
import React, {ReactElement} from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import styles from "./list.module.css";
import {ListProps} from "./list.props";

const List = ({}: ListProps): ReactElement | null => {
  const isMobile = useIsResolution(767);
  return (
    <>
      {isMobile && <div className={styles.list}>
        {reviews.map((review) => (<Review
          className={styles.item}
          key={review.id}
          review={review}
        />))}
      </div>}
      {!isMobile && <ResponsiveMasonry
        columnsCountBreakPoints={{768: 2, 1200: 4, 1500: 5}}
      >
        <Masonry columnsCount={5} gutter={"20px"}>
          {reviews.map((review) => (<Review
            key={review.id}
            review={review}
          ></Review>))}
        </Masonry>
      </ResponsiveMasonry>}
    </>
  );
};

export default List;
