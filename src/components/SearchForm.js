import React, { useState } from "react";

export default function SearchForm({ onSearch }) {
  // TODO: Add stateful logic for query/form data
  const [name, setName] = useState({name: ''});
  
  const handleInputChange = (event) => {
    setName({...name, [event.target.name]: event.target.value})
  }

  return (
    <section className="search-form">
      <form onSubmit={(e) => {
        e.preventDefault();
        onSearch(name.name);
        setName({});
        }}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={name.name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
