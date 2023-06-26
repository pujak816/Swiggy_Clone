import styles from "../components/styles.module.css";

const FoodItems = ({ resData }) => {
  const { name, desciption, costForTwo } = resData?.data;

  return (
    <div className={styles.res_cards_data}>
      <div className={styles.res_cards_title_name}>{name}</div>
      <p>{desciption}</p>

      <div className={styles.res_cards_info_avgRate}>
        {costForTwo / 100} FOR TWO
      </div>
    </div>
  );
};

export default FoodItems;
