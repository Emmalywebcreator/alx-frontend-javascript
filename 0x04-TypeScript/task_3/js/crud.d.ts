/// <reference path="./interface.ts" />

import { RowElement, RowID } from "./interface";

declare module ".crud" {
    export declare function insertRow(row: RowElement): RowID;
    export declare function deleteRow(rowId: RowID): void;
    export declare function updateRow(rowId: RowID, row: RowElement): RowElement | null;
}