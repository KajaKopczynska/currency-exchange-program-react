import { useState } from 'react';
import { currencies } from './currencies';
import { Result } from './Result';
import { StyledForm, Header, Currency, Button, Amount, StyledResult, Footer } from "./styled";

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
        <StyledForm onSubmit={onFormSubmit}>
            <Header> Przelicznik walut </Header>
            <p>
                <label>
                    <span>
                        Wpisz kwotę jaką chcesz wymienić i wybierz walutę:
                    </span>
                    <br></br>
                    <Amount
                        onChange={({ target }) => setAmount(target.value)}
                        type="number"
                        step="0.01"
                        placeholder="0,00"
                        min="0"
                        required
                    />
                    <Currency
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
                    </Currency>
                </label>
                <br></br>
                <label>
                    Wybierz walutę jaką chcesz uzyskać:
                    <Currency
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
                    </Currency>
                </label>
            </p>

            <p>
                <Button> Przelicz</Button>
            </p>
            <StyledResult>
                Wynik:
                <Result result={result} />
            </StyledResult>
            <Footer>
                Przelicznik na podstawie kursu walut z dnia 26.01.2023 r.
            </Footer>

        </StyledForm >
    );

};

export default Form;