import { reactive, toRefs } from 'vue';

const DEFAULT_ROW_DATA = null;
const DEFAULT_ROW_ID = -1;

export function useTable({ titles, rows }) {

    const table = reactive({
        rowData: DEFAULT_ROW_DATA,
        rowId: DEFAULT_ROW_ID,
        titles: titles,
        rows: rows
    });

    const deleteRow = rowId => _.remove(table.rows, (r, idx) => rowId == idx);

    const isRowEquals = rowId => table.rowId == rowId;

    const addRow = row => table.rows.push(row);

    const editRow = (rowId, data) => {
        table.rowData = data;
        table.rowId = rowId;
    };

    const updateRow = data => {
        _.each(data, (item, key) => {
            table.rowData[key] = item;
        });
    };

    const resetRow = () => {
        table.rowData = DEFAULT_ROW_DATA;
        table.rowId = DEFAULT_ROW_ID;
    };

    return {
        ...toRefs(table),
        isRowEquals,
        deleteRow,
        updateRow,
        resetRow,
        editRow,
        addRow
    };
}