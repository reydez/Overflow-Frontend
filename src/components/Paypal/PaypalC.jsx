import React from 'react'
import Plan1 from '../../Controllers/Paypal/Plan1'
import Plan2 from '../../Controllers/Paypal/Plan2'
import Plan3 from '../../Controllers/Paypal/Plan3'

export const PaypalC = () => {
  return (
    <div >
      <div>
        Plan Mensual
        <ul>Dona 5 USD</ul>
        <ul><Plan1/></ul>
      </div>
      <div>
        Plan Trimestral
        <ul>Dona 5 USD por tres meses</ul>
        <ul>Anula tu suscripción cuando quieras</ul>
        <ul><Plan3/></ul>
      </div>
      <div>
        Plan Anual 
        <ul>Dona 5 USD por un año</ul>
        <ul>Anula tu suscripción cuando quieras</ul>
        <ul><Plan2/></ul>
      </div>
      
    </div>
  )
}
