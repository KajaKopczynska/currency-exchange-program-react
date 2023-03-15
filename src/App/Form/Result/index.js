export const Result = ({ result }) => (
    <p>
        {!!result && (
            <>
                <strong>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.outputCurrency}
                </strong>
            </>
        )}
    </p>
)