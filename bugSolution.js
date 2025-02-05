```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    let interval;
    if (mounted) {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
      setMounted(false);
      console.log('cleanup');
    };
  }, [mounted]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setMounted(!mounted)}>Click me</button>
    </div>
  );
}
```