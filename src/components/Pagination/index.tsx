import { useEffect, useState } from "react";
import "../../App.css";
import Card from "../Card";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();
      console.log(data);
      if (data && data.products) {
        setProducts(data.products);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  const handleSelectPage = (pageNumber: number) => {
    setPage(pageNumber);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          justifyContent: "center",
        }}
      >
        {products?.slice(page * 10 - 10, page * 10).map((item) => (
          <Card
            title={item?.title}
            key={item?.id}
            thumbnail={item?.thumbnail}
          />
        ))}
      </div>

      {products.length > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "40px",
            gap: "10px",
          }}
        >
          <button onClick={() => setPage(page - 1)}>Prev</button>
          {[...Array(products.length / 10)].map((_, i) => (
            <button
              onClick={() => handleSelectPage(i + 1)}
              className={page === i + 1 ? "selected-button" : "default-button"}
            >
              {i + 1}
            </button>
          ))}

          <button onClick={() => setPage(page + 1)}>Next</button>
        </div>
      )}
    </>
  );
};

export default Pagination;
