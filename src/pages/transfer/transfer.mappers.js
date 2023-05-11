
export const mapTransferFromVMToApi = transfer => {
    return {
        id: transfer.id,
        selectAccount: transfer.selectAccount,
        destinationAccount: transfer.iban,
        name: transfer.name,
        amount: parseInt(transfer.amount),
        concept: transfer.concept,
        notes: transfer.notes,
        transaction: `${transfer.day}/${transfer.month}/${transfer.year}`,
        email: transfer.email,
    };
};