import {memo} from 'react';
function Title () {
    console.log("Title rendered");
    return (
        <div>
            <p>This is our title</p>
        </div>
    )
}
export default memo(Title);