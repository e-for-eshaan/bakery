// lib
import React from "react";
import ItemCard from "../ItemCard/ItemCard";

// styles
import "./ItemGrid.scss"

const ItemGrid = ({ data }) => {
  return <div className="itemGrid">
    {
      data?.map((item, index) => {
        return <ItemCard
          key={item.item_name}
          title={item.item_name}
          description={item.description}
          price={item.price}
          rating={item.rating}
          images={item.images} />
      })
    }
  </div>;
};

export default ItemGrid;
