function ListGroup(test) {
  // let  cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // let  cities = [{ id: 1, name: "New York" }, { id: 2, name: "San Francisco" }, { id: 3, name: "Tokyo" }, { id: 4, name: "London" }, { id: 5, name: "Paris" }];
  // cities = [];
  // if (cities.length === 0) return <p>No cities available</p>;

  const handleClick = (city) => () => {
    console.log(city);
  }
  const cities = test.ghd;
  return (
    <ul className="list-group">
      {/* {cities.length === 0 ? <p>No cities available</p> : null} */}
      {cities.length === 0 && <p>No cities available</p>} 
      {cities.map((city, index) => (
        <li key={city.id} className="list-group-item"  onClick={handleClick(city)}>
          {city.name}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
