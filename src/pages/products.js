import React, { useState, useEffect } from "react"
import NavBar from "../components/NavBar"

export default function Products() {
  const [clothing, setClothing] = useState([])
  const [filter, setFilter] = useState("none")

  // useEffect(() => {
  //   loadClothing()
  // }, [])

  // const loadClothing = () => {
  //   fetch("http://localhost:4000/clothes")
  //     .then(function (response) {
  //       return response.json()
  //     })
  //     .then(function (json) {
  //       console.log("clothes loaded!", json)
  //       // setClothing(json.shoes)
  //     })
  // }

  const compare = (a, b) => {
    if (a.model < b.model) {
      return -1
    }
    if (a.model > b.model) {
      return 1
    }
    return 0
  }

  const sortByPrice = clothes => clothes.sort((a, b) => a.price - b.price)

  const sortAlphabetically = clothes => clothes.sort(compare)


  let filteredClothing = clothing
  if (filter === 'a-z') {
    filteredClothing = sortAlphabetically(clothing)
  }
  if (filter === 'price') {
    filteredClothing = sortByPrice(clothing)
  }


  return (
    <div>
        <NavBar />
        <div className="filters">
        <label htmlFor="filters">Sort by..</label>
        <select
          id="filter-options"
          name="filters"
          onChange={option => setFilter(option.target.value)}
        >
          <option value="none">None</option>
          <option value="a-z">A-Z</option>
          <option value="price">Price</option>
        </select>
        </div>
        <h2 className="title">Men's Clothing</h2>
        <ul className="clothing-container">
          {filteredClothing.map(function (clothing, index) {
            return (
              <li className="clothing" key={index}>
                <div>
                  <h2 className="sub-title">{clothing.model}</h2>
                </div>
                <img className="clothing-img" src={clothing.imgUrl} />
                <p>
                  <strong>£{clothing.price}</strong>
                </p>
              </li>
            )
          })}
        </ul>
      </div>
  )
}