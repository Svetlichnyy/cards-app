import CardSummary from "../card-summary/CardSummary";

const CardList = () => {
  return (
    <div className="container">
      <div className="row">
        <CardSummary />
        <CardSummary />
        <CardSummary />
        <CardSummary />
      </div>
    </div>
  );
};

export default CardList;
