# React `useEffect` Tutorial: Document Title

This tutorial builds a small React demo where clicking counter buttons updates both on-screen state

## Prerequisites

Before starting, install:

- **Node.js** (20 LTS or newer recommended)
- **npm** (included with Node.js)
- VS Code (or your preferred editor)

Verify installation:

```bash
node --version
npm --version
```

## Step 1: Create the React project

(Vite + TypeScript)

```bash
npm create vite@latest use-effect-demo -- --template react-ts
cd use-effect-demo
npm install
```

## Step 2: Create `DocumentTitle` component

Add `src/features/document-title/DocumentTitle.tsx` file:

```tsx
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
```

## Step 3: Render the component from the app

```tsx
import './App.css'
import { DocumentTitle } from './features/document-title'

export default function App() {
	return (
		<>
			<h1>React <code>useEffect</code> Demo</h1>

			<h2>Update Document Title</h2>
			
			<DocumentTitle
				initialCount={100}
			/>
		</>
	)
}
```

## Step 4: Done

Run the app:

  ```bash
  npm run dev
  ```



