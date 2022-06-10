import { useEffect } from "react";
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
			return actions.subscription
				.create({
					plan_id: "P-7T596320W4287215NMKODREA",
				})
				.then((orderId) => {
					// Your code here after create the order
                    console.log(data)
					return orderId;
				});
		}}
		style={{
			label: "subscribe",
		}}
	/>);
}
export default ButtonWrapper;