import React from "react";
import DataTable from "react-data-table-component";

export default function ListaPizzas({ pizzas = [] }) {
    const colunas = [
        {
            name: "Sabor",
            selector: (row) => row.sabor,
            sortable: true,
        },
        {
            name: "Tamanho",
            selector: (row) => row.tamanho,
            sortable: true,
        },
        {
            name: "Preço",
            selector: (row) => row.preco,
            sortable: true,
        },
    ];

    function handleRowSelect({ selectedRows }) {
        console.log(selectedRows[0]?.id);
    }

    return (
        <DataTable
            columns={colunas}
            data={pizzas}
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
