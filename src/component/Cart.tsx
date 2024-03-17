import { Offcanvas, Stack } from "react-bootstrap";
import { useOrderCart } from "../context/OrderCartContext";
import { CartItem } from "./CartItems";
import OrderMEnuItems from "../datas/itemsMenu.json";

type OrderCartProps = {
  isOpen: boolean;
};

export function Cart({ isOpen }: OrderCartProps) {
  const { closeCart, cartItems } = useOrderCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {cartItems.reduce((total, cartItem) => {
              const item = OrderMEnuItems.find(
                (i: { id: number }) => i.id === cartItem.id
              );
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
