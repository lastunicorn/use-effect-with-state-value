import { useEffect, useState } from "react";

import "./UseEffectDemo.css";

type UseEffectDemoProps = {
	initialCount?: number;
};

export default function UseEffectDemo({ initialCount = 0 }: UseEffectDemoProps) {
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
		<div className="Card">
			<h2>Update Document Title</h2>

			<p className="Card__description">
				Demonstrates <code>useEffect</code> with a <strong>state dependency</strong>.<br />
				The browser tab title updates whenever <code>count</code> changes.
				<br />
				Check your browser tab!
			</p>
			<div className="Card__display">{count}</div>
			<div className="Card__controls">
				<button onClick={handleDecrement}>Decrement</button>

				<button onClick={handleIncrement}>Increment</button>
			</div>
		</div>
	);
}
