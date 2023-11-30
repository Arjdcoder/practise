import { forwardRef } from "react";

const FwdRef = forwardRef((props, ref) => {
    return (
        <div>
            <h1>Forward ref example</h1>
            <input type="text" ref={ref} {...props} />
        </div>
    )
});
export default FwdRef;