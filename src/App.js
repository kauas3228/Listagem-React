import './App.css';
import { useEffect, useState } from 'react';
import Paginacao from './components/Paginacao';
import Tabela from './components/Tabela';


function App() {
    
    const [alunosPorPagina, setalunosPorPagina] = useState(10)
    const [currentPage, setCurrentPage] = useState(0)

    const [alunos, setAlunos] = useState([]);

    const pages = Math.ceil(alunos.length / alunosPorPagina)
    const startPage = currentPage * alunosPorPagina;
    const endPage = startPage + alunosPorPagina;
    const currentalunos = alunos.slice(startPage, endPage)



    useEffect(() => {
        const fetchData = async () => {

            const result = await fetch('./alunos.json')
                .then(response => response.json())
                .then(data => data)

            setAlunos(result)
        }
        fetchData()

    }, []);

    return (
        <div className="App">

            <Tabela currentalunos={currentalunos}></Tabela>

            <Paginacao pages={pages}
                setCurrentPage={setCurrentPage} 
            />
        </div>
    );
}

export default App;
