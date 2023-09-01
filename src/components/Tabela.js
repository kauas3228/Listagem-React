import React from "react";
import '../App.css'
import { Table } from "react-bootstrap";

export default function Tabela({ currentalunos }) {
    return (
        <Table striped bordered hover variant="dark">
            <thead>

                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>CPF</th>
                </tr>

            </thead>
            <tbody>

                    {currentalunos.map(item => {
                    return (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.idade}</td>
                                    <td>{item.cpf}</td>
                                </tr>
                    )
                    })}

                    </tbody>
        </Table>
    )
}