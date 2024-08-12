import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Accounts } from "./pages";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Accounts />
		</QueryClientProvider>
	);
}

export default App;
