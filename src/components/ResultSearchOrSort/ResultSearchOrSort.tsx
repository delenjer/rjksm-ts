import React from 'react';

type PropsResultSearchOrSort = {
  handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
  handleSelect(e: React.ChangeEvent<HTMLSelectElement>): void;
  setQuery(e: string): void;
  isQuery: string;
}

export const ResultSearchOrSort: React.FC<PropsResultSearchOrSort> = (
  {
    handleSubmit,
    handleSelect,
    isQuery,
    setQuery
  }) => (
  <section className="service">
    <select
      name="s"
      className="select-sort"
      onChange={(e) => handleSelect(e)}
    >
      <option value="">Order by:</option>
      <option value="relevance">Relevance</option>
      <option value="objecttype">Object type</option>
      <option value="chronologic">Chronological old {">"} new</option>
    </select>

    <form
      action="#"
      onSubmit={(e) => handleSubmit(e)}
      className="form"
    >
      <input
        type="text"
        placeholder="Search keyword..."
        value={isQuery}
        onChange={(e) => setQuery(e.target.value)}
        className="form__input"
      />

      <button
        type="submit"
        className="form__button"
      >
        Search
      </button>
    </form>
  </section>
);
