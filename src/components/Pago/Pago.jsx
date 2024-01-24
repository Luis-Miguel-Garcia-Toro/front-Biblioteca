import React, { useState } from "react";
import "./PaymentForm.css"; // Asegúrate de importar el archivo de estilos CSS correspondiente

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("tarjeta");
  const [showCreditCardForm, setShowCreditCardForm] = useState(false);
  const [showPaypalForm, setShowPaypalForm] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentResponse, setPaymentResponse] = useState("");

  const showPaymentForm = () => {
    const selectedMethod = document.getElementById("paymentMethod").value;
    setPaymentMethod(selectedMethod);

    setShowCreditCardForm(selectedMethod === "tarjeta");
    setShowPaypalForm(selectedMethod === "paypal");
  };

  const processPayment = () => {
    // Aquí puedes agregar la lógica para procesar el pago según el método seleccionado
    // Por ahora, simplemente mostramos un mensaje de respuesta
    setPaymentResponse(`Pago procesado con éxito. Monto: ${amount}, Método: ${paymentMethod}`);
  };

  return (
    <div className="payment-form">
      <label htmlFor="paymentMethod">Método de Pago:</label>
      <select id="paymentMethod" onChange={showPaymentForm}>
        <option value="tarjeta">Tarjeta de Crédito</option>
        <option value="paypal">PayPal</option>
        {/* Agrega más opciones según sea necesario */}
      </select>

      {showCreditCardForm && (
        <div>
          <label htmlFor="cardNumber">Número de Tarjeta:</label>
          <input
            type="text"
            id="cardNumber"
            placeholder="Ingrese el número de tarjeta"
            maxLength="16"
          />

          <label htmlFor="expiryDate">Fecha de Expiración:</label>
          <input type="text" id="expiryDate" placeholder="MM/AA" />

          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" placeholder="CVV" maxLength="3" />
        </div>
      )}

      {showPaypalForm && (
        <div>
          <label htmlFor="paypalUsername">Nombre de Usuario PayPal:</label>
          <input
            type="text"
            id="paypalUsername"
            placeholder="Ingrese el nombre de usuario PayPal"
          />
        </div>
      )}

      <label htmlFor="deliveryAddress">Dirección de Envío:</label>
      <textarea
        id="deliveryAddress"
        placeholder="Ingrese la dirección de envío"
        value={deliveryAddress}
        onChange={(e) => setDeliveryAddress(e.target.value)}
      />

      <label htmlFor="amount">Monto a Pagar:</label>
      <input
        type="text"
        id="amount"
        placeholder="Ingrese el monto"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={processPayment}>Pagar</button>

      <div className="payment-response" id="paymentResponse">
        {paymentResponse && <p>{paymentResponse}</p>}
      </div>
    </div>
  );
};

export default PaymentForm;
