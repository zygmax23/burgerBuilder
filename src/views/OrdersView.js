import React, { useEffect, useState } from "react";
import Order from "components/organisms/Order/Order";
import axios from "axiosInstance";
import withErrorHandler from "../hoc/withErrorHandler/withErrorHandler";

const OrdersView = (props) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/orders.json")
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        setOrders(fetchedOrders);
      })
      .catch((error) => {});
  }, []);
  return (
    <div>
      {orders.map((order) => {
        console.log(order);
        return <Order {...order} key={order.id} />;
      })}
    </div>
  );
};

export default withErrorHandler(OrdersView, axios);
