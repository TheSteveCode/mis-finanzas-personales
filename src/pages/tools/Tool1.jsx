import  { useState } from 'react';
import { Link } from 'react-router-dom'; // Asumiendo que estás utilizando React Router para la navegación

function Tool1() {
  const [total, setTotal] = useState(0);
  const [totalAssets, setTotalAssets] = useState(0);
  const [totalLiabilities, setTotalLiabilities] = useState(0);


  const calculateTotal = () => {

    const totalAssets = calculateTotalAssets()
    const TotalLiabilities = calculateTotalLiabilities()
    const total = totalAssets - TotalLiabilities

    return total;
  };

  const calculateTotalAssets = () => {
    const cash = parseFloat(document.querySelector(".cash").value) || 0;
    const banks = parseFloat(document.querySelector(".banks").value) || 0;
    const wallet = parseFloat(document.querySelector(".wallet").value) || 0;
    const properties = parseFloat(document.querySelector(".properties").value) || 0;
    const others = parseFloat(document.querySelector(".others").value) || 0;

    const totalAssets = cash + banks + wallet + properties + others;
    return totalAssets

  }

  const calculateTotalLiabilities = () => {
    
    const creditCards = parseFloat(document.querySelector(".creditCards").value) || 0;
    const invoices = parseFloat(document.querySelector(".invoices").value) || 0;
    const loans = parseFloat(document.querySelector(".loans").value) || 0;

    const totalLiabilities = creditCards + invoices + loans
    
    return totalLiabilities;
  };

  const updateTotals = () => {
    const totalAssets = calculateTotalAssets()
    const TotalLiabilities = calculateTotalLiabilities()
    const Total = calculateTotal();
    setTotalAssets(totalAssets)
    setTotalLiabilities(TotalLiabilities)
    setTotal(Total);
  };

  return (
    <>
      <Link to="/herramientas">Volver a herramientas</Link>
      <div className="w3-row w3-center w3-margin w3-padding-24">
      <h2>Calcular Patrimonio Neto</h2>

      <marquee className="w3-blue"><p><em>...Conoce realmente con cuanto patrimonio cuentas...</em></p></marquee>
      <div className="w3-mobile w3-containe w3-left w3-padding-16">
      <h3>1. Suma tus activos</h3>
      <p>Dinero en efectivo:</p>
      <input className="cash" type="number" placeholder="requerido*"/>

      <p>Dinero en Bancos:</p>
      <input className="banks" type="number" placeholder="requerido*" />

      <p>Dinero Ahorrado:</p>
      <input className="wallet" type="number" placeholder="requerido*" />

      <p>Valor total de tus propiedades:</p>
      <input className="properties" type="number" placeholder="requerido*" />

      <p>Otros:</p>
      <input className="others" type="number" placeholder="requerido*" />
      </div>
      <div className="w3-mobile w3-containe w3-right w3-padding-16">
      <h3>2. Suma tus pasivos</h3>
      <p>Total tarjetas de crédito por pagar:</p>
      <input className="creditCards" type="number" placeholder="requerido*" />
      <p>Facturas de servicios por pagar:</p>
      <input className="invoices" type="number" placeholder="requerido*" />
      <p>Prestamos por pagar:</p>
      <input className="loans" type="number" placeholder="requerido*" />
      </div>
      <button className="w3-green" type="button" onClick={updateTotals}>Calcular</button>
      <h3>3. Restale tus pasivos totales a tus activos totales</h3>
      <p><em>Tus activos totales son: <strong>${ totalAssets }</strong> CO</em></p>
      <p><em>Tus pasivos totales son: <strong>${ totalLiabilities }</strong> CO</em></p>
      <p><em>Tu Patrimonio Neto es: <strong>${ total }</strong> CO</em></p>
      <p className="msm"></p>
      </div>
    </>
  );
}

export default Tool1;
