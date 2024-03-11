import React from "react";
import DataTable from "react-data-table-component";

export default function ListaClientes({ clientes = [] }) {
    const colunas = [
        {
            name: "Nome Cliente",
            selector: (row) => row.nome,
            sortable: true,
        },
        {
            name: "CPF",
            selector: (row) => row.cpf,
        },
    ];

    function handleRowSelect({ selectedRows }) {
        console.log(selectedRows[0]?.id);
    }

    return (
        <DataTable
            columns={colunas}
            data={clientes}
            pagination
            paginationPerPage={5}
            dense
            responsive
            striped
            defaultSortFieldId={1}
            selectableRows
            selectableRowsHighlight
            selectableRowsSingle
            onSelectedRowsChange={handleRowSelect}
        />
    );
}
