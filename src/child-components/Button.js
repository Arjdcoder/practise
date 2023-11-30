import { memo } from "react";

function Button ({ handleClick, children }) {
    console.log(`rendered button - ${children}`);
    return (
        <button onClick={handleClick}>{children}</button>
    )
}
export default memo(Button);