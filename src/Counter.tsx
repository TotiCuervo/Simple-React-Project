import React, { useState } from 'react'

interface CounterProps {
    onClickCallback?: (count: number) => void
}

export const Button = ({
    children,
    ...props
}: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
    return (
        <button
            className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm outline-none transition hover:bg-gray-900/80 disabled:bg-gray-900/70"
            {...props}
        >
            {children}
        </button>
    )
}

export default function Counter({ onClickCallback }: CounterProps) {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
        handleOnClick(count + 1)
    }

    function decrement() {
        setCount(count - 1)
        handleOnClick(count - 1)
    }

    function handleOnClick(newCount: number) {
        if (!onClickCallback) return
        onClickCallback(newCount)
    }

    return (
        <div className="flex items-center">
            <Button onClick={decrement}>-</Button>
            <span className="flex w-10 justify-center">{count}</span>
            <Button onClick={increment}>+</Button>
        </div>
    )
}
