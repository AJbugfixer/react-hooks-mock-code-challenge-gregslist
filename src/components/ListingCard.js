import React, { useState } from "react";

function ListingCard({listing, onDeleteListing}) {
  
  const {id,description,image,location} = listing
  const [star,setStar] = useState(false)

  function handleStarClick(){
    setStar(!star)
  }

  function handleDelete(){
    fetch(`https://localhost:6001/listings/${id}`,{
    method : "DELETE",
  })
  .then((r) => r.json())
  .then(() => onDeleteListing(listing))
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {star ? (
          <button className="emoji-button favorite active" onClick={handleStarClick}>★</button>
        ) : (
          <button className="emoji-button favorite"onClick={handleStarClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
