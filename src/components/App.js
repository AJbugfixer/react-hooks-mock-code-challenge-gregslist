import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchText, setSearchText] = useState("")
  const [listings, setListing] = useState([])

  function handleSearch(e){
    console.log(e.target.value)
    setSearchText(e.target.value)
  }

    const filteredListings = listings.filter(listing =>{
      if(listing.description.tiLowerCase().include(searchText.toLowerCase())){
        console.log('match', listing)
        return listing
      }else{
        console.log('none')
        return false
      }
    })

    console.log(listings)
    console.log(searchText)

    useEffect(() =>{
      fetch('https://localhost:6001/listings')
      .then ((r) => r.json())
      .then ((listings) => setListing(listings))
    },[])

    function deleteListing(deleteListing){
      const updatedListing = listings.filter((listing) => listing.id !== deleteListing.id)
      setListing(updatedListing)
    }


  return (
    <div className="app">
      <Header searchText ={searchText} handleSearch={handleSearch}/>
      <ListingsContainer searchText={searchText} deleteListing={deleteListing} filteredListings={filteredListings}/>
    </div>
  );
}

export default App;
