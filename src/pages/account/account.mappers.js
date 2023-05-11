export const mapAccountFromApiToVM = account => {
  return {
    ...account,
    alias: account.name,
  };
};

export const mapAccountFromVMToApi = account => {
  return {
    ...account,
    name: account.alias,
  };
};