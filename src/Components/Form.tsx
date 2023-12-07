import { useState } from "react";

function MyForm() {
  const names: string[] = ["Jason", "Carter", "Amanda"];

  const [name, setName] = useState("");
  const handleSubmit = (event: any) => {
    event.preventDefault();
    names.push(name);
    console.log(names);
  };
  const printName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input type="text" value={name} onChange={printName} />
      </label>
      <input type="submit" />
    </form>
  );
}
export default MyForm;
