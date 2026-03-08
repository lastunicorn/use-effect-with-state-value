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