function MyComponent() {
    const [state, setState] = React.useState({ count: 0 });

    const increment = () => {
        state.count += 1; 
        setState(state); 
    };

    return <button onClick={increment}>Increment</button>;
}
  