import { useState } from "react";

const SecondForm = () => {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setMyCar(newValue);
    console.log(newValue);
  };
  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  );
};

export default SecondForm;
