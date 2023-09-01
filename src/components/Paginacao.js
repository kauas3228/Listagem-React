import React from "react";
import '../App.css'
import { Button} from "react-bootstrap";

const Paginacao = ({ pages, setCurrentPage }) => {
    return (
        <div>
            {Array.from(Array(pages), (item, index) => {
                return (
                    
                    <Button variant="outline-secondary" size="lg" value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>Page {index + 1}</Button>
                    
                )
            })}
        </div>
    )
}

export default Paginacao;