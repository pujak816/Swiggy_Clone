import CategoryItemList from "./CategoryItemList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    setShowIndex();
    // setShowItem(!showItem);
  };
  return (
    <div>
      {/* header */}
      <div className="bg-gray-50 shadow-lg mx-auto my-4 p-1 sm:p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>
            <KeyboardArrowDownIcon />
          </span>
        </div>

        {/* accordian body */}
        {showItems && <CategoryItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
