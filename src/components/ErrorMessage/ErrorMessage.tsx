import react, {FC} from "react";
import css from "./ErrorMessage.module.css";
 const ErrorMessage: FC =()=>{
    return (
        <div className={css.errorMessageWraper}>
            <p className={css.errorMessageText} >Whoops, something went wrong! Please try reloading this page!</p>
        </div>
    )
}

export default ErrorMessage;