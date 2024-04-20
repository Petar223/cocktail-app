import { useParams, Link, useNavigate } from "react-router-dom";
import "./DrinkList.css";
import HeaderWithBackButton from "../shared-components/HeaderWithBackButton";
import NoItemsFound from "../shared-components/NoItemsFound";

function DrinkList({ drinks }) {
  const { type } = useParams();
  const navigate = useNavigate();
  const filteredDrinks = drinks.filter(
    (drink) =>
      (type === "alcoholic" && drink.alcoholic) ||
      (type === "non-alcoholic" && !drink.alcoholic)
  );

  const goHome = () => {
    navigate("/");
  };

  return (
    <div>
      <HeaderWithBackButton
        title="Drinks"
        buttonText="Back to Types"
        onBackClick={goHome}
      />
      <div className="select-drink-title">
        <h2>Which drink would you like to make a cocktail from?</h2>
      </div>
      <div className="drink-container">
        {filteredDrinks.length > 0 ? (
          filteredDrinks.map((drink) => (
            <Link
              to={`/type/${type}/drink/${drink.id}`}
              key={drink.id}
              className="drink-item"
            >
              <img
                src={drink.imageUrl}
                alt={drink.name}
                className="drink-image"
              />
              <h3 className="drink-name">{drink.name}</h3>
            </Link>
          ))
        ) : (
          <NoItemsFound message="No drinks found of this type."></NoItemsFound>
        )}
      </div>
    </div>
  );
}

export default DrinkList;
