import axios from "axios";
import { React, useState, useEffect } from "react";
import { useCart } from "react-use-cart";
export default function Cards() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function productosDB() {
      const res = await axios.get("http://localhost:5050/productos");
      setProducts(res.data);
    }
    productosDB();
  }, []);
  return (
    <section className="flex flex-row gap-4 justify-center m-auto max-lg:flex-wrap">
      {products.map((element) => {
        return (
          <CrearCard
            id={element._id}
            img={element.img}
            model={element.model}
            title={element.title}
            price={element.price}
          />
        );
      })}
    </section>
  );
}

export function CrearCard(props) {
  const { addItem } = useCart();
  const item = {
    id: props.id,
    title: props.title,
    price: props.price, 
    model: props.model,
    img: props.img,
  };
console.log(item);
  return (
    <div
      className=" border w-54 max-lg:w-[45%] max-md:w-[95%] h-auto p-4 mt-20"
      key={props._id}
    >
      <div>
        <img
          className=" hover:transform hover:scale-105 hover:transition duration-100 max-md:m-auto"
          src={props.img}
        ></img>
      </div>
      <div className="w-full h-auto ">
        <h1 className="font-black mt-3">{props.title}</h1>
        <h2 className=" font-extralight">{props.model} </h2>
        <h2 className=" font-medium font">${props.price}</h2>
      </div>
      <button
        onClick={() => {
          addItem(item);
        }}
        class="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 mr-2 -ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
        </svg>
        Buy now
      </button>
    </div>
  );
}
