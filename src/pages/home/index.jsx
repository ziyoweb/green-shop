import React, { useState } from "react";
import { Container } from "../../components/Navbar/style";
import { useHistory } from "react-router-dom";

const students = [
  { id: 1, name: "Muhriddin", comment: "how are you?" },
  { id: 2, name: "Bekzod", comment: "how are you?" },
  { id: 3, name: "Sanat", comment: "how are you?" },
  { id: 4, name: "Hoshim", comment: "how are you?" },
  { id: 5, name: "Vali", comment: "how are you?" },
  { id: 6, name: "Eshmat", comment: "how are you?" },
  { id: 7, name: "Toshmat", comment: "how are you?" },
];

const Home = () => {
  const history = useHistory();
  const [data] = useState(students);
  const [selected, setSelected] = useState({});
  return (
    <Container style={{ flexDirection: "column" }}>
      {data.map((value) => (
        <h1 key={value.id}>
          {value.id} {value.name}{" "}
          <button onClick={() => history.push(`/home/:${value.id}`)}>
            enter
          </button>
        </h1>
      ))}
      <h1>
        Selected: {selected?.id} {selected?.name}
      </h1>
      <button onClick={() => history.goBack()}>go back</button>
    </Container>
  );
};

export default Home;
