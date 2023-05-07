import Tour from "./Tour";

const Tours = ({ toursList, deleteTour }) => {
  return (
    <section className="tours-wrapper">
      <div className="tours-list">
        {toursList.map((tour) => {
          return <Tour key={tour.id} {...tour} deleteTour={deleteTour} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
