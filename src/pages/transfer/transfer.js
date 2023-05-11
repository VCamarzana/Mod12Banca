import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors, onSetValues } from "../../common/helpers"
import { setAccountOptions } from "./transfer.helpers";
import { formValidation } from "./transfer.validations";
import { history } from "../../core/router";
import { mapTransferFromVMToApi } from "./transfer.mappers";
import { getAccountList } from "../../common/api";
import { insertTransfer } from "./transfer.api";

const params = history.getParams();
const isParams = Boolean(params.id);

let transfer = {
    id: "",
    selectAccount: "",
    iban: "",
    name: "",
    amount: "",
    concept: "",
    notes: "",
    day: "",
    month: "",
    year: "",
    email: "",
}

if (isParams) {
    getAccountList().then(transfer => setAccountOptions(transfer, params.id));
    transfer = { ...transfer, selectAccount: params.id };
} else {
    getAccountList().then(transfer => setAccountOptions(transfer, 1));
    transfer = { ...transfer, selectAccount: 1 };
};

onUpdateField("select-account", (event) => {
    const value = event.target.value;
    transfer = { ...transfer, selectAccount: value };
    formValidation.validateField("select-account", transfer.selectAccount).then(result => {
        onSetError("select-account", result);
    })
});

onUpdateField("iban", (event) => {
    const value = event.target.value;
    transfer = { ...transfer, iban: value };
    formValidation.validateField("iban", transfer.iban).then(result => {
        onSetError("iban", result);
    })
});

onUpdateField("name", (event) => {
    const value = event.target.value;
    transfer = { ...transfer, name: value };
    formValidation.validateField("name", transfer.name).then(result => {
        onSetError("name", result);
    })
});

onUpdateField("amount", (event) => {
    const value = event.target.value;
    transfer = { ...transfer, amount: value };
    formValidation.validateField("amount", transfer.amount).then(result => {
        onSetError("amount", result);
    })
});

onUpdateField("concept", (event) => {
    const value = event.target.value;
    transfer = { ...transfer, concept: value };
    formValidation.validateField("concept", transfer.concept).then(result => {
        onSetError("concept", result);
    })
});

onUpdateField("notes", (event) => {
    const value = event.target.value;
    transfer = { ...transfer, notes: value };
    formValidation.validateField("notes", transfer.notes).then(result => {
        onSetError("notes", result);
    })
});

onUpdateField("day", (event) => {
    const value = event.target.value;
    transfer = { ...transfer, day: value, };

    formValidation.validateField("day", transfer.day).then(result => {
        onSetError("day", result);
    })

});

onUpdateField("month", (event) => {
    const value = event.target.value;
    transfer = { ...transfer, month: value, };
    formValidation.validateField("month", transfer.month).then(result => {
        onSetError("month", result);
    })
});

onUpdateField("year", (event) => {
    const value = event.target.value;
    transfer = { ...transfer, year: value, };
    formValidation.validateField("year", transfer.year).then(result => {
        onSetError("year", result);
    })
});

onUpdateField("email", (event) => {
    const value = event.target.value;
    transfer = { ...transfer, email: value };
    formValidation.validateField("email", transfer.email).then(result => {
        onSetError("email", result);
    })
});

const onSave = () => {
    const apiTransfer = mapTransferFromVMToApi(transfer);
    return insertTransfer(apiTransfer);
};

onSubmitForm("transfer-button", () => {
    formValidation.validateForm(transfer).then(result => {
        onSetFormErrors(result);
        if (result.succeeded) {
            onSave();
            console.log({ transfer });
        }
    });
});



