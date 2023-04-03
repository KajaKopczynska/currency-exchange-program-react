import { useState } from 'react';
import { Result } from './Result';
import { StyledForm, Header, Currency, Button, Amount, StyledResult, Footer, Loading, Failure } from "./styled";
import { useRatesData } from './useRatesData';

const Form = () => {

    const [amount, setAmount] = useState("");
    const [result, setResult] = useState("");
    const [inputCurrency, setInputCurrency] = useState("PLN");
    const [outputCurrency, setOutputCurrency] = useState("EUR");
    const ratesData = useRatesData();


    const calculaterResult = (inputCurrency, outputCurrency, amount) => {
        const inputRate = ratesData.rates[inputCurrency]
        const outputRate = ratesData.rates[outputCurrency]

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
            {ratesData.state === "loading"
                ? (
                    <Loading>
                        Trwa ładowanie...
                    </Loading>
                )
                : (
                    ratesData.state === "error" ? (
                        <Failure>
                            Oops, coś poszło nie tak. Sprawdź czy masz połączenie z internetem i spróbuj jeszcze raz.
                        </Failure>
                    )
                        : (
                            <>
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
                                            {Object.keys(ratesData.rates).map((currency => (
                                                <option
                                                    key={currency}
                                                    value={currency}
                                                >
                                                    {currency}
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
                                            {Object.keys(ratesData.rates).map((currency => (
                                                <option
                                                    key={currency}
                                                    value={currency}
                                                >
                                                    {currency}
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
                                    Kursy walut pobierane są
                                    <br />z Europejskiego Banku Centralnego.
                                    <br />Aktualne na dzień:&nbsp;<strong>{ratesData.date}</strong>
                                </Footer>
                            </>
                        ))
            }

        </StyledForm >
    );

};

export default Form;