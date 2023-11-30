import { memo, useCallback, useState } from 'react';
import Count from './child-components/Count';
import Button from './child-components/Button';
import Title from './child-components/Title';
const Parent = () => {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    const incrementAge = useCallback(() => {
        setAge(age => age + 1);
    }, [age]);

    // const incrementAge = () => {
    //     console.log("incrmeent000");
    //     setAge(age => age + 1);
    // };

    const incrementSalary = useCallback(() => {
        setSalary(salary => salary + 5000);
    }, [salary]);
    return (
        <div>
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge} >Increment Age</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary} >Increment Salary</Button>
        </div>
    )
}
export default Parent;