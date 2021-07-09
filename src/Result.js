import Pet from "./Pet";

const Result = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets found</h2>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              animal={pet.animal}
              key={pet.id}
              name={pet.name}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              id={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Result;
