import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux";
import ButtonWrapper from "./Suscription";


const Plan = () => {
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


export default Plan;
