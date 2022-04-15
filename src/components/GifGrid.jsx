import { useState, useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {loading
          ? "Cargando"
          : data.map((gif) => <GifGridItem {...gif} key={gif.id} />)}
      </div>
    </>
  );
};

export default GifGrid;
