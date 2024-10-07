import Coin from "../../images/animatedCoin/coin";
import { LoadingField } from "./loadingStyle";


export const LoadingInfo = () => {
    return (
        <LoadingField>
             <Coin />
             <p>Loading... ..</p>
        </LoadingField>
    )
};