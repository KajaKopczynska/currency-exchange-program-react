import { useState } from 'react';
import { currencies } from './currencies';
import { Result } from './Result';
import './style.css';

const Form = () => {

    const [amount, setAmount] = useState("");
    const [inputCurrency, setInputCurrency] = useState("PLN");
    const [outputCurrency, setOutputCurrency] = useState(currencies[1].short);
    const [result, setResult] = useState("");


    const calculaterResult = (inputCurrency, outputCurrency, amount) => {
        const inputRate = currencies.find(({ short }) => short === inputCurrency).rate;
        const outputRate = currencies.find(({ short }) => short === outputCurrency).rate;

        const outputAmount = amount * inputRate / outputRate;

        setResult({
            sourceAmount: +amount,
            targetAmount: outputAmount,
            inputCurrency,
            outputCurrency,
        });
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculaterResult(inputCurrency, outputCurrency, amount);
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <h1 className="form__header"> Przelicznik walut </h1>
            <p>
                <label>
                    <span>
                        Wpisz kwotę jaką chcesz wymienić i wybierz walutę:
                    </span>
                    <br></br>
                    <input
                        className="form__amount"
                        onChange={({ target }) => setAmount(target.value)}
                        type="number"
                        step="0.01"
                        placeholder="0,00"
                        min="0"
                        required
                    />
                    <select
                        className="form__currency"
                        value={inputCurrency}
                        onChange={({ target }) => setInputCurrency(target.value)}
                    >
                        {currencies.map((currency => (
                            <option
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.short}
                            </option>
                        )))}
                    </select>
                </label>
                <br></br>
                <label>
                    Wybierz walutę jaką chcesz uzyskać:
                    <select
                        className="form__currency"
                        value={outputCurrency}
                        onChange={({ target }) => setOutputCurrency(target.value)}
                    >
                        {currencies.map((currency => (
                            <option
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.short}
                            </option>
                        )))}
                    </select>
                </label>
            </p>

            <p className="form__paragraph">
                <button className="form__button"> Przelicz</button>
            </p>
            <p className="form__result">
                Wynik:
                <Result result={result} />
            </p>
            <p className="form__footer">
                Przelicznik na podstawie kursu walut z dnia 26.01.2023 r.
            </p>

        </form >
    );

};

export default Form;