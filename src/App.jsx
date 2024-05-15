import { useState } from "react";

function App() {
  const [firstCurrency, setFirstCurrency] = useState("");
  const [secondCurrency, setSecondCurrency] = useState("");
  const [quantity, setQuantity] = useState("");

  const [result, setResult] = useState("");

  function convertCurrency() {
    if (firstCurrency == secondCurrency) {
      alert("Selected currencys are the same! Please select different ones.");
      return;
    } else if (firstCurrency == "" || secondCurrency == "") {
      alert("Missing currency selection!");
      return;
    }

    fetch(
      `https://api.frankfurter.app/latest?amount=${quantity}&from=${firstCurrency}&to=${secondCurrency}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setResult(
          `${quantity} ${firstCurrency} = ${data.rates[secondCurrency]} ${secondCurrency}`
        );
      });
  }

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="flex flex-col items-center bg-yellow-300 p-12 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-black">
          Currency Converter
        </h1>

        <label className="block mb-2 text-black">Quantity:</label>
        <input
          type="number"
          className="w-48 py-2 px-4 mb-4 border border-black rounded-md focus:outline-none focus:border-yellow-700"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />

        <label className="block mb-2 text-black">
          Select the first currency:
        </label>
        <select
          className="w-48 py-2 px-4 mb-4 border border-black rounded-md focus:outline-none focus:border-yellow-700"
          value={firstCurrency}
          onChange={(event) => setFirstCurrency(event.target.value)}
        >
          <option value="">Select the first currency:</option>
          <option value="AUD">AUD - Australian Dollar</option>
          <option value="BGN">BGN - Bulgarian Lev</option>
          <option value="BRL">BRL - Brazilian Real</option>
          <option value="CAD">CAD - Canadian Dollar</option>
          <option value="CHF">CHF - Swiss Franc</option>
          <option value="CNY">CNY - Chinese Renminbi Yuan</option>
          <option value="CZK">CZK - Czech Koruna</option>
          <option value="DKK">DKK - Danish Krone</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound</option>
          <option value="HKD">HKD - Hong Kong Dollar</option>
          <option value="HUF">HUF - Hungarian Forint</option>
          <option value="IDR">IDR - Indonesian Rupiah</option>
          <option value="ILS">ILS - Israeli New Sheqel</option>
          <option value="USD">USD - United States Dollar</option>
        </select>

        <label className="block mb-2 text-black">
          Select the second currency:
        </label>
        <select
          className="w-48 py-2 px-4 mb-4 border border-black rounded-md focus:outline-none focus:border-yellow-700"
          value={secondCurrency}
          onChange={(event) => setSecondCurrency(event.target.value)}
        >
          <option value="">Select the second currency:</option>
          <option value="AUD">AUD - Australian Dollar</option>
          <option value="BGN">BGN - Bulgarian Lev</option>
          <option value="BRL">BRL - Brazilian Real</option>
          <option value="CAD">CAD - Canadian Dollar</option>
          <option value="CHF">CHF - Swiss Franc</option>
          <option value="CNY">CNY - Chinese Renminbi Yuan</option>
          <option value="CZK">CZK - Czech Koruna</option>
          <option value="DKK">DKK - Danish Krone</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound</option>
          <option value="HKD">HKD - Hong Kong Dollar</option>
          <option value="HUF">HUF - Hungarian Forint</option>
          <option value="IDR">IDR - Indonesian Rupiah</option>
          <option value="ILS">ILS - Israeli New Sheqel</option>
          <option value="USD">USD - United States Dollar</option>
        </select>

        <button
          className="justify-center w-48 bg-black text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
          onClick={convertCurrency}
        >
          Get Result
        </button>

        {result && (
          <div className="bg-black w-48 mt-4 p-4">
            <p className="m-auto text-white text-center">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
