import React, { useEffect,useCallback, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard.jsx";
import ProductSearch from "./components/ProductSearch";
function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchKey, setSearchKey] = useState("");
   // debounce functionality
   const debounce = (fn, delay) => {
    let timer;
    return function () {
      let context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    };
  };
  const search_by_key=(search)=>{
    setSearchKey(search.toLowerCase());
  }
  const handleSearch = useCallback(debounce(search_by_key, 500), []);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
    };
    setLoading(true);
    fetch("https://fakestoreapi.com/products", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((error) => console.log("error", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="product_main_container">
    <div className="navbar">
      {/* search */}
      <ProductSearch handleChange={handleSearch} />
    </div>
      {
        loading?(
          <div className="app_container_text_center">Loading...</div>
        ):

        data &&
         data.length>0 ?(
           <div className="product_container">
             {
               data
               .filter(product=>(product.title).toLowerCase().includes(searchKey))
               .map((product,ind)=>{
                 return(
                   <React.Fragment key= {product.id}>

                     <ProductCard 
                     product={product}
                   />
                   </React.Fragment>
                 )
               })
             }
           </div>
         ):(
          <div className="app_container_text_center">Data Not Found</div>
         )
      }
    </div>
  );
}

export default App;
