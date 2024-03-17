import { Col, Row } from "react-bootstrap";
import { OrderMenuItem } from "../component/OrderMenuItems.tsx";
import itemsMenu from "../datas/itemsMenu.json";

export function OrderSection() {
  return (
    <>
      <h3 className="d-flex justify-content-center my-5">Create your Order</h3>
      <Row xs={1} md={3} lg={4} className="g-3">
        {itemsMenu.map((item) => (
          <Col key={item.id}>
            <OrderMenuItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
