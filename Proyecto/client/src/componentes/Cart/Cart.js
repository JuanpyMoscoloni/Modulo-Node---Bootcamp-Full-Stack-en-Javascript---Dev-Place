import React from "react";
import { useCart } from "react-use-cart";
import Button from "react-bootstrap/Button";
import "./Cart.css";

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
      <div className="carrito-vacio text-center m-4">
        <h1> EL CARRITO ESTA VACIO </h1>
      </div>
    );
  return (
    <>
      <section className="pt-[20rem]">
        <section className="">
          <div className=" mt-[24rem]">
            <div className="cart-total">
              <h5>CART TOTAL: {cartTotal}</h5>
            </div>
            <h5 className="carrito-title">
              {!totalUniqueItems} ITEMS TOTALES: ({totalItems})
            </h5>
          </div>

          {items.map((Element, index) => {
            return (
              <>
                <div className="carrito-cards">
                  <table>
                    <tbody>
                      <tr>
                        <td className="container-imagen-td">
                          <div className="container-img-carrito">
                            <img src={Element.img} alt="" />
                          </div>
                        </td>
                        <td className="carrito-card-title text-center">
                          {Element.title}
                        </td>

                        <td className="carrito-card-price text-center">
                          {" "}
                          PRECIO: {Element.price}
                        </td>

                        <td>
                          <div className="td-buttons">
                            <Button
                              onClick={() =>
                                updateItemQuantity(
                                  Element.id,
                                  Element.quantity + 1
                                )
                              }
                              className="carrito-button"
                              variant="dark"
                            >
                              <i class="fas fa-plus"></i>
                            </Button>

                            <td className="carrito-cantidad text-center">
                              {Element.quantity}
                            </td>

                            <Button
                              className="carrito-button"
                              variant="dark"
                              onClick={() =>
                                updateItemQuantity(
                                  Element.id,
                                  Element.quantity - 1
                                )
                              }
                            >
                              <i class="fas fa-minus"></i>
                            </Button>

                            <Button
                              className="carrito-button-eliminar"
                              variant="danger"
                              onClick={() => removeItem(Element.id)}
                            >
                              Eliminar
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            );
          })}
        </section>
      </section>
    </>
  );
}
