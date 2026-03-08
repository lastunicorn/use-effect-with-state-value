import { useEffect, useState } from "react";

type DocumentTitleProps = {
	initialCount?: number;
}

export default function DocumentTitle({ initialCount = 0 }: DocumentTitleProps) {
	const [count, setCount] = useState(initialCount);

	function handleDecrement() {
		setCount((x: number) => x - 1);
	}

	function handleIncrement() {
		setCount((x: number) => x + 1);
	}

	useEffect(() => {
		console.log("Updating document title...");
		document.title = `Count: ${count}`;
	}, [count]);

	return (
		<>
			<button onClick={handleDecrement}>
				Decrement
			</button>

			<button onClick={handleIncrement}>
				Increment
			</button>
		</>
	)
}