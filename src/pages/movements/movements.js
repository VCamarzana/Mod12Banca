import { addMovementRows } from "./movements.helpers";
import { getMovements } from "./movements.api";
import { mapMovementsListFromApiToVM, mapDataFromApiToVM } from "./movements.mappers";
import { history } from "../../core/router"
import { getAccount } from "../../common/api";
import { onSetValues } from "../../common/helpers/element.helpers";

const params = history.getParams();
const isSameAccount = Boolean(params.id);

if (isSameAccount) {
    getMovements(params.id).then(movementsList => {
        const vmMovementsList = mapMovementsListFromApiToVM(movementsList);
        addMovementRows(vmMovementsList);
    });
    getAccount(params.id).then(data => {
        const vmData = mapDataFromApiToVM(data);
        onSetValues(vmData);
    });

} else {
    getMovements().then(movementsList => {
        const vmMovementsList = mapMovementsListFromApiToVM(movementsList);
        addMovementRows(vmMovementsList);
    });
    const elements = document.querySelectorAll('#alias, #iban, #balance');
    elements.forEach(element => element.textContent = "--");
}




