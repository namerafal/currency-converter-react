import { ErrorField, ContentSolution } from "./errorStyle";


export const ErrorContent = () => {
    return (
        <ErrorField>
            🥺 Coś poszło nie tak.
            <ContentSolution>
                <li>
                    🧐 sprawdź czy masz połaczenie z internetem
                </li>
                <li>
                    ☕ za chwilkę spróbuj raz jeszcze...
                </li>
            </ContentSolution>
        </ErrorField>
    )
};