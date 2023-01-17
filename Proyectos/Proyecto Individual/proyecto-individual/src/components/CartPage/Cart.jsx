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
      <div className=" m-96 text-center text-6xl font-black">
        <h1> CART EMPTY (PLEASE BUY) </h1>
      </div>
    );
  return (
    <>
      <div className=" max-md:top-13 absolute right-0 z-10 p-5 text-2xl font-black max-md:w-[100%] max-md:text-center  lg:mt-20 ">
        <h5 className="">CART TOTAL: {cartTotal}</h5>
        <h5>
          {!totalUniqueItems} ITEMS TOTALES: ({totalItems})
        </h5>
      </div>
      <section className=" ">
        <section className="m-auto flex  w-[100%] flex-col justify-center max-lg:flex-wrap  max-md:mt-20 md:w-[40%] lg:gap-y-4">
          {items.map((Element, index) => {
            return (
              <>
                <section>
                  <section className="m-auto h-auto w-[50%] border p-4 max-md:w-[100%] max-sm:m-0   ">
                    <div className="h-auto w-[100%] p-4 " key={Element._id}>
                      <div>
                        <img
                          className=" m-auto duration-100 hover:scale-105 hover:transform hover:transition max-md:m-auto"
                          src={Element.img}
                        ></img>
                      </div>
                      <div className="m-1 mt-3 flex h-auto w-full ">
                        <h1 className="m-1 font-black ">{Element.title}</h1>
                        <h2 className=" m-1 font-extralight">
                          {Element.model}{" "}
                        </h2>
                        <h2 className=" font m-1 font-medium">
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
      </section>
    </>
  );
}
