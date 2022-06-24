import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({filteredListings, deleteListing, searchText}) {

  console.log(searchText)

  return (
    <main>
      <ul className="cards">
        {filteredListings.map ((listing) =>(
          <ListingCard
          listing={listing}
          key={listing.id}
          id={listing.id}
          description={listing.description}
          image={listing.image}
          location={listing.location}
          deleteListing={deleteListing}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
