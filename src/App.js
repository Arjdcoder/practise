import logo from './logo.svg';
import './App.css';
import React, { useCallback, useEffect, useRef, useState, Suspense, useMemo } from 'react';
import useRandomJoke from './hooks/useRandomJoke';
import useInput from './hooks/useInput';
import { useFetch } from './hooks/useFetch';
import Parent from './parent';
import CounterOne from './CounterOne';
import CounterTwo from './CounterTwo';
import ContextExample from './ContextExample';
import HOCParent from './HOCParent';
import MoviesList from './HOC/MoviesList';
import FwdRef from './fwdRef';
import { StyledBtn } from './style/StyledBtn.styled';
import RandomJokeSmartComp from './RandomJokeSmartComp';
import { Link } from 'react-router-dom';
const LazyLoad = React.lazy(() => import('./LazyLoad'));

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [values, handleChange] = useInput();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState(""); 
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const inputRef = useRef();
  const [count, setCount] = useState(0);
  const [subCount, setSubCount] = useState(0);

  const genearateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  }
  const joke = useRandomJoke(firstName, lastName);

  // useEffect(() => {
  //   const onMouseMove = (e) => {
  //     console.log(e);
  //   }
  //   window.addEventListener("mousemove", onMouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //   }
  // })

  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);


  const computeLetterCount = (word) => {
    console.log("compute Letter count");
    let i = 0;
    while (i < 1000000000) i++;
    return word.length;
  };
  // Memoize computeLetterCount so it uses cached return value if input array ...
  // ... values are the same as last time the function was run.

  const word = "Ashish";
  // const letterCount = computeLetterCount(word);
  const letterCount = useMemo(() => computeLetterCount(word), [word]);

  // const increment = useCallback(() => {
  //   setCount(ct => ct + 1);
  // }, [setCount]);

  const increment = useCallback(() => { setCount(ct => ct + 1) }, [count])
  // const increment = () => {
  //   setCount(ct => ct + 1);data
  // }

  const forwardRefResultGenerator = () => {
    console.log("Forward ref child input result in parent REVERSE COMMUNICATION", inputRef.current.value);
  }

  return (
    <div className="App">
      <Link to='/todo-list'>Land to todo-list application</Link>
      <br />
      <Link to='/table'>Land to Table application</Link>
      <br />
      <Link to='/calculator'>Land to Calculator application</Link>
      <h3>Random Joke Generator</h3>
      FirstName: <input type="text" name="firstname" ref={firstNameRef} /> &nbsp;
      LastName: <input type="text" name="lastname" ref={lastNameRef} /> <br />
      <br />
      <button onClick={genearateJoke}>Generate Joke</button>
      <p>{joke}</p>
      <br />
      <br />
      <br />
      <h3>Second hook example</h3>
      Email: <input type="text" name="email" value={values.email} onChange={handleChange} /> &nbsp;
      Password: <input type="password" name="password" value={values.password} onChange={handleChange} /> <br />
      <br />
      <br />
      <br />
      <h3>Third hook example</h3>
      {loading && <>Loading...</>}
      <p>Count: {count}</p>
      <button onClick={() => setCount((ct) => ct + 1)}>Increment</button>
      <p>{data}</p>
      <br />
      <br />
      <br />
      <h4>useMemo hook Example</h4>
      <br />
      <br />
      <br />
      {letterCount}
      <br />
      <br />
      <br />

      <h3>useCallback Hook Example</h3>
      <Parent />
      <br />
      <br />
      <br />
      <h3>useReducer Hook Example</h3>
      <h4>Counter One Example</h4>
      <CounterOne />
      <br />
      <br />
      <br />
      <h4>Counter Two Example</h4>
      <CounterTwo />
      <ContextExample />
      <HOCParent />
      <MoviesList />
      <FwdRef ref={inputRef} placeholder="Enter some value" />
      <button onClick={forwardRefResultGenerator}>Click to print input value in console</button>
      Styled component Example
      <StyledBtn color={'cyan'}>Click here</StyledBtn>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyLoad />
      </Suspense>
      <RandomJokeSmartComp />
    </div>
  );
}
export default App;

// React Dev Tool
// Arrow function - Normal function
