import { useState } from "react";

export function SearchBar({onSubmit}) {
  const [country, setCountry] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault();

    onSubmit({
      country: country
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter city..." value={country} onChange={(e)=>{setCountry(e.target.value)}}/>
      <button type="submit">Search</button>
    </form>
  );
}
