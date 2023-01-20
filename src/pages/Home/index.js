import { toast } from 'react-toastify'

function Home() {

    function MostrarToast() {
        toast.success("Alerta de Sucesso!");
        return;
    }

    return(
        <div>
            <h1>Página Home</h1>
            <hr />
            <button onClick={MostrarToast}>Mais Informações</button>
        </div>
    );
}

export default Home;