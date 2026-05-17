import { useEffect, useState } from "react";
import AppHeader from "../components/AppHeader";

export default function ProductsPage() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(api_url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <>
      <AppHeader />

      <main>
        <div className="container text-center m-4 row">
          {products.map((product) => (
            <div className="card col-4 p-4" key={product.id}>
              <img
                className="card-img-top w-25 mx-auto mb-4"
                src={product.image}
                alt="Card image cap"
              />
              <div className="card-body">
                <h4 className="card-title mb-3">{product.title}</h4>
                <p className="card-text">{product.description}</p>
              </div>
              <div className="d-flex justify-content-between">
                <h4 className="price">{product.price} €</h4>
                <button type="button" className="btn btn-primary py-1 px-3"><strong>+</strong></button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
