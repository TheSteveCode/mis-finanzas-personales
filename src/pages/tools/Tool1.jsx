import  { useState } from 'react';
import { Link } from 'react-router-dom'; // Asumiendo que estás utilizando React Router para la navegación

function Tool1() {
  const [total, setTotal] = useState(0);
  const [msm, setMsm] = useState("")

  const calculateTotal = () => {
    const cash = parseFloat(document.querySelector(".cash").value) || 0;
    const banks = parseFloat(document.querySelector(".banks").value) || 0;
    const wallet = parseFloat(document.querySelector(".wallet").value) || 0;
    const properties = parseFloat(document.querySelector(".properties").value) || 0;
    const others = parseFloat(document.querySelector(".others").value) || 0;

    const creditCards = parseFloat(document.querySelector(".creditCards").value) || 0;
    const invoices = parseFloat(document.querySelector(".invoices").value) || 0;
    const loans = parseFloat(document.querySelector(".loans").value) || 0;

    const totalAssets = cash + banks + wallet + properties + others;
    const totalLiabilities = creditCards + invoices + loans
    const total = totalAssets - totalLiabilities
   
    return total;
  };

  const updateTotal = () => {
    const Total = calculateTotal();
    setTotal(Total);
  };

  return (
    <>
      <Link to="/herramientas">Volver a herramientas</Link>
      <div className="w3-row w3-center w3-margin w3-padding-24">
      <h2>Calcular Patrimonio Neto</h2>

      
      <div className="w3-mobile w3-containe w3-left w3-padding-16">
      <h3>Suma de tus activos</h3>
      <p>Dinero en efectivo:</p>
      <input className="cash" type="number" />

      <p>Dinero en Bancos:</p>
      <input className="banks" type="number" />

      <p>Dinero Ahorrado:</p>
      <input className="wallet" type="number" />

      <p>Valor total de tus propiedades:</p>
      <input className="properties" type="number" />

      <p>Otros:</p>
      <input className="others" type="number" />
      </div>
      <div className="w3-mobile w3-containe w3-right w3-padding-16">
      <h3>Resta los pasivos</h3>
      <p>Total tarjetas de crédito por pagar:</p>
      <input className="creditCards" type="number" />
      <p>Facturas de servicios por pagar:</p>
      <input className="invoices" type="number" />
      <p>Prestamos por pagar:</p>
      <input className="loans" type="number" />
      </div>
      <button type="button" onClick={updateTotal}>Calcular</button>
      
      <p><em>Tu Patrimonio Neto es: <strong>${total}</strong> CO</em></p>
      <p className="msm"></p>
      </div>
    </>
  );
}

export default Tool1;
