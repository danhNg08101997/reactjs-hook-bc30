import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
const arrProduct = [
  {
    id: 1,
    name: "Adidas Prophere",
    alias: "adidas-prophere",
    price: 350,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    size: "[36,37,38,39,40,41,42]",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 995,
    deleted: false,
    categories:
      '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: "[2,3,5]",
    feature: true,
    image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
  },
  {
    id: 2,
    name: "Adidas Prophere Black White",
    alias: "adidas-prophere-black-white",
    price: 450,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    size: "[36,37,38,39,40,41,42]",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 990,
    deleted: false,
    categories:
      '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: "[1,4,6]",
    feature: false,
    image: "https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png",
  },
  {
    id: 3,
    name: "Adidas Prophere Customize",
    alias: "adidas-prophere-customize",
    price: 375,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    size: "[36,37,38,39,40,41,42]",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 415,
    deleted: false,
    categories:
      '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: "[4,5,7]",
    feature: true,
    image: "https://shop.cyberlearn.vn/images/adidas-prophere-customize.png",
  },
];
export default function Home() {
    const navigate = useNavigate();
  const renderProduct = () => {
    return arrProduct.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card">
            <img src={item.image} alt={item.name} />
            <div className="card-body bg-dark text-white">
              <p>{item.name}</p>
              <p>{item.price}</p>
              <NavLink className="btn btn-warning" to={`/detail/${item.id}`}>
                View detail
              </NavLink>

              <button className="mx-2 btn btn-danger" onClick={()=> {
                navigate(`/detail/${item.id}`)
              }}>Detail</button>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container text-center my-4">
      <h3 className="text-center">Shoes App</h3>
      <div className="row">{renderProduct()}</div>
    </div>
  );
}
