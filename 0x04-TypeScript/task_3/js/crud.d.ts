/// <reference path="./interface.ts" />

import { RowElement, RowID } from "./interface";

declare module ".crud" {
    declare function insertRow(row: RowElement): RowID;
    declare function deleteRow(rowId: RowID): void;
    declare function updateRow(rowId: RowID, row: RowElement): RowElement | null;
}