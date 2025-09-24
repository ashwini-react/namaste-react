import React from 'react';
import ReactDOM from 'react-dom';
import {useState, useEffect} from 'react';
import ProductCards from './ProductCards';

const Products = () => {
  const[productList, setProductList] = useState([]);
  const[filteredList, setFilteredList] = useState([]);
  const[searchValue, setSearchValue] = useState("");

  useEffect(()=>{
      fetchData()
  },[])

  const fetchData = async () => {
      const data = await  fetch("https://dummyjson.com/products/category/groceries");
      const json = await data.json();
      console.log(json.products);
      setProductList(json.products);
      setFilteredList(json.products);
  }

  const handleInputChange = (event) => {
    const newSearchValue = event.target.value;
    setSearchValue(newSearchValue);
  }

  const handleSearchClick = () => {
        const filteredData = productList.filter((items)=>(
              items.title.toLowerCase().includes(searchValue.toLowerCase()) || 
              items.category.toLowerCase().includes(searchValue.toLowerCase()) ||
              String(items.rating).includes(searchValue)
              
        ))

        setFilteredList(filteredData)
  }

  const handleReset = () => {
      setFilteredList(productList)
  }

  return(
    <div className='main-container'>
      <div className="content-wrapper">
        <div className="product-search-container">
          <input type="text" placeholder="Search products..." value = {searchValue} onChange={handleInputChange}/>
          <button onClick={handleSearchClick}>Search</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
      <div className="products">
        {filteredList.map((product) => (
          <ProductCards key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products;