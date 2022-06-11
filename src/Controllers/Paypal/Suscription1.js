import { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {
	PayPalScriptProvider,
	PayPalButtons,
	usePayPalScriptReducer
} from "@paypal/react-paypal-js";

const ButtonWrapper = ({ type }) => {
	const [{ options }, dispatch] = usePayPalScriptReducer();

	useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                intent: "subscription",
            },
        });
    }, [type]);

	return (<PayPalButtons
		createSubscription={(data, actions) => {
			return actions.subscription.create({
					plan_id: "P-7T596320W4287215NMKODREA",
				})
				.then((orderId) => {
					// Your code here after create the order
                    console.log(orderId)
					return orderId;
				});						
			}			
		}
		onApprove={async (data, actions) => {
			console.log("Has creado una suscripción exitosamente" + data.subscriptionID);
			axios
                  .get(`http://localhost:3001/payment/suscription-detail/${data.subscriptionID}`)
                  .then((response) => {
					console.log(response.data)
                    // Swal.fire(
                    //   "Aviso!",
                    //   `Donación realizada, muchas gracias.`,
                    //   "success"
                    // );
                  })
                  .catch((error) => {
                    console.log(error);
                  });
		}}	
		
		style={{
			label: "subscribe",
		}}
	/>);
}
export default ButtonWrapper;