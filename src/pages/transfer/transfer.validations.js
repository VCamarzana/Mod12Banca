import { Validators, createFormValidation } from '@lemoncode/fonk';
import { iban } from '@lemoncode/fonk-iban-validator';
import { isNumber } from '@lemoncode/fonk-is-number-validator';

const dayValidator = ({ value }) => {
    const parseValue = parseInt(value);
    const succeeded = parseValue >= 1 && parseValue <= 31;
    return {
        succeeded,
        message: succeeded ? "" : "Debe escribir un número entre 1 y 31. ",
    };
};

const monthValidator = ({ value }) => {
    const parseValue = parseInt(value);
    const succeeded = parseValue >= 1 && parseValue <= 12;
    return {
        succeeded,
        message: succeeded ? "" : "Debe escribir un número entre 1 y 12. ",
    };
};

const yearValidator = ({ value }) => {
    const parseValue = parseInt(value);
    const currentYear = new Date().getFullYear();
    const succeeded = parseValue >= currentYear;
    return {
        succeeded,
        message: succeeded ? "" : "Debe escribir el año actual o superior. ",
    };
};

const transactionValidator = ({ value }) => {
    const currentDate = new Date();
    const selectedDate = new Date(value);
    const succeeded = selectedDate > currentDate;
    return {
        succeeded,
        message: succeeded ? "" : "La fecha debe ser mayor a la fecha actual. ",
    };
};

const dateValidator = () => {
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const transaction = `${year}/${month}/${day}`;

    const dayResult = dayValidator({ value: day });
    const monthResult = monthValidator({ value: month });
    const yearResult = yearValidator({ value: year });
    const transactionResult = transactionValidator({ value: transaction });
    const messageResult = dayResult.message + monthResult.message + yearResult.message + transactionResult.message;
    return {
        succeeded: dayResult.succeeded && monthResult.succeeded && yearResult.succeeded && transactionResult.succeeded,
        message: messageResult,
    };
};

const validationSchema = {
    field: {
        selectAccount: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],
        iban: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: iban.validator,
                message: 'IBAN incorrecto',
            },
        ],
        name: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],
        amount: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: isNumber.validator,
                message: 'Debe escribir un número con dígitos',
            },
        ],
        concept: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],
        email: [
            {
                validator: Validators.email,
                message: 'Email incorrecto'
            },
        ],
        day: [
            {
                validator: dayValidator,
            },
            {
                validator: Validators.required,
            }
        ],
        month: [
            {
                validator: monthValidator,
            },
            {
                validator: Validators.required,
            }
        ],
        year: [
            {
                validator: yearValidator,
            },
            {
                validator: Validators.required,
            }
        ],
        date: [
            {
                validator: dateValidator,
            }
        ],
    }
}

export const formValidation = createFormValidation(validationSchema);


