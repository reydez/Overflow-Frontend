import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import axios from "axios";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import ButtonWrapper from "./Suscription";

const Paypal = () => {
  const user = useSelector((state) => state.userReducer.user);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <PayPalScriptProvider
          options={{
            "client-id": process.env.REACT_APP_CLIENT_ID,
          }}
        >
          <PayPalButtons
            fundingSource="paypal"
            createOrder={(data, actions) => {
              return actions.order
                .create({
                  purchase_units: [
                    {
                      amount: {
                        value: "5.00",
                      },
                    },
                  ],
                })
                .catch((e) => {
                  console.log(e.message);
                });
            }}
            onApprove={async (data, actions) => {
              const obj = {};

              return actions.order.capture().then((details) => {
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
              });
            }}
          />
        </PayPalScriptProvider>
        <p style={{ margin: "0" }}>Donar $5 USD</p> */}

      <PayPalScriptProvider
        options={{
          "client-id": process.env.REACT_APP_CLIENT_ID,
          components: "buttons",
          intent: "subscription",
          vault: true,
        }}
      >
        <ButtonWrapper type="subscription" />
      </PayPalScriptProvider>
    </div>
  );
};

export default Paypal;
