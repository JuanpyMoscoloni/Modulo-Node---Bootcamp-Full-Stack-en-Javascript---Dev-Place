import React from "react";
import { useCart } from "react-use-cart";

export default function Cart() {
  const {
    items,
    isEmpty,
    totalItems,
    totalUniqueItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty)
    return (
      <div className=" m-96 font-black text-center text-6xl">
        <h1> CART EMPTY (PLEASE BUY) </h1>
      </div>
    );
  return (
    <>
      <section className="grid 2xl:grid-cols-[1500px,_1fr] xl:grid-cols-[1000px,_1fr] lg:grid-cols-[1000px,_1fr] md:grid-cols-[600px,_1fr] gap-4 ">
        <section className="w-[100%] md:w-[40%] md: flex gap-4 justify-center m-auto max-lg:flex-wrap">
          {items.map((Element, index) => {
            return (
              <>
                <section>
                  <section className="border w-[100%] h-auto p-4 mt-20 ">
                    <div
                      className="w-[100%]  h-auto p-4 mt-20"
                      key={Element._id}
                    >
                      <div>
                        <img
                          className=" hover:transform hover:scale-105 hover:transition duration-100 max-md:m-auto"
                          src={Element.img}
                        ></img>
                      </div>
                      <div className="w-full h-auto flex mt-3 m-1 ">
                        <h1 className="font-black m-1 ">{Element.title}</h1>
                        <h2 className=" font-extralight m-1">
                          {Element.model}{" "}
                        </h2>
                        <h2 className=" font-medium font m-1">
                          ${Element.price}
                        </h2>
                      </div>

                      <div>
                        <button
                          onClick={() =>
                            updateItemQuantity(Element.id, Element.quantity + 1)
                          }
                          className="carrito-button"
                          variant="dark"
                        >
                          MAS
                        </button>
                      </div>
                      <div>
                        <button
                          className="carrito-button"
                          variant="dark"
                          onClick={() =>
                            updateItemQuantity(Element.id, Element.quantity - 1)
                          }
                        >
                          MENOS
                        </button>
                      </div>
                      <div>
                        <h2 className="">{Element.quantity}</h2>
                      </div>
                      <div>
                        <button
                          className="carrito-button-eliminar"
                          variant="danger"
                          onClick={() => removeItem(Element.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </section>
                </section>
              </>
            );
          })}
        </section>
        <div className="border w-[100%] font-black text-2xl mt-20 p-5 ">
          <h5 className="">CART TOTAL: {cartTotal}</h5>
          <h5>
            {!totalUniqueItems} ITEMS TOTALES: ({totalItems})
          </h5>
        </div>
      </section>
    </>
  );
}
