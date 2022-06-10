import { useEffect } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import axios from "axios";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const ButtonWrapper = ({ type }) => {
  const [{ options }, dispatch] = usePayPalScriptReducer();
  const user = useSelector((state) => state.userReducer.user);

  console.log(options);

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        intent: "subscription",
      },
    });
  }, [type]);

  return (
    <PayPalButtons
      createSubscription={(data, actions) => {
        return actions.subscription
          .create({
            plan_id: "P-7T596320W4287215NMKODREA",
          })
          .then((orderId) => {
            // Your code here after create the order
            console.log(data);
            return orderId;
          });
      }}
      style={{
        label: "subscribe",
      }}
      onApprove={async (data, actions) => {
        const obj = {};
        console.log(actions.subscription);
        console.log(data);

        /* return actions.order.capture().then((details) => {
          obj.id = details.id;
          obj.amount = details.purchase_units[0].amount.value;
          obj.orderIdPayment =
            details.purchase_units[0].payments.captures[0].id;
          obj.email_address = details.payer.email_address;
          obj.status = details.status;
          let userId = user.id;

          axios
            .post(`http://localhost:3001/orders/${userId}`, obj)
            .then((response) => {
              Swal.fire(
                "Aviso!",
                `Donación realizada, muchas gracias.`,
                "success"
              );
            })
            .catch((error) => {
              console.log(error);
            });
        }); */
      }}
    />
  );
};
export default ButtonWrapper;
