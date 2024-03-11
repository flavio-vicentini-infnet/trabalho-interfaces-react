import React from "react";
import DataTable from "react-data-table-component";

export default function ListaPedidos({ Pedidos = [] }) {
    const colunas = [
        {
            name: "Nome Cliente",
            selector: (row) => row.cliente,
            sortable: true,
        },
        {
            name: "Preço",
            selector: (row) => row.preco,
        },
        {
            name: "Sabor",
            selector: (row) => row.sabor,
        },
        {
            name: "Tamanho",
            selector: (row) => row.tamanho,
        },
    ];

    function handleRowSelect({ selectedRows }) {
        console.log(selectedRows[0]?.id);
    }

    return (
        <DataTable
            columns={colunas}
            data={Pedidos}
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
