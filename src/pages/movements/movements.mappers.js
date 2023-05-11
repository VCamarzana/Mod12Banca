
export const mapMovementsListFromApiToVM = movementsList => {
    return movementsList.map(movement => mapMovementFromApiToVM(movement));
};

const mapMovementFromApiToVM = movement => {
    return {
        description: movement.description,
        amount: `${movement.amount} €`,
        balance: `${movement.balance} €`,
        transaction: new Date(movement.transaction).toLocaleDateString(),
        realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
    };
};

export const mapDataFromApiToVM = data => {
    return {
        alias: data.name,
        iban: data.iban,
        balance: `${data.balance} €`,
    };
}

