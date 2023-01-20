import RouteApp from "./routes";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div>
      <ToastContainer autoClose={1000} />
      <RouteApp/>
    </div>
  );
}

export default App;