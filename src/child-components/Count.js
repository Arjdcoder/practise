import {memo} from 'react';
function Count({ text, count }) {
    console.log(`rendered ${text}`);
    return (
        <div>
            <p>{text} - {count}</p>
        </div>
    )
}
export default memo(Count);