import styles from "../components/styles.module.css";

const RestaurantCards = ({ resData }) => {
  //   const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <>
      <div className={styles.res_cards}>
        <div className={styles.res_cards_data}>
          <div className={styles.res_cards_img}>
            <img
              src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                cloudinaryImageId
              }
              alt="img"
            />
          </div>
          <div className={styles.res_cards_title}>
            <div className={styles.res_cards_title_name}>{name}</div>
            <div className={styles.res_cards_title_cuisines}>
              {cuisines.join(", ")}
            </div>
          </div>
          <div className={styles.res_cards_info}>
            <div className={styles.res_cards_info_rating}>
              <i className="icon_star">star</i>
              <span>{avgRating}</span>
            </div>
            <div>.</div>
            <div>{deliveryTime} MINS</div>
            <div className={styles.res_cards_info_avgRate}>
              {costForTwo / 100} FOR TWO
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCards;
