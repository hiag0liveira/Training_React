import { useState } from "react";

function getInitialValue() {
    console.log("obtendo valor inicial")
    return 1 + 1
}

export default function useCounter() {
    const [count, setCount] = useState(() => getInitialValue())

    const increment = () => {
        setCount((previousCount) => previousCount + 1)
        setCount((previousCount) => previousCount + 1)
    }

    return { count, increment }
}