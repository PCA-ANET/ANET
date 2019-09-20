export const TRANSFERS_NAMESPACE = 'Transfers:';
export const FAVORITES_NAMESPACE = `${TRANSFERS_NAMESPACE}favorites.`;
export const TRANSFER_NAMESPACE = `${TRANSFERS_NAMESPACE}transfer.`;
export const CASH_TRANSFER_NAMESPACE = `${TRANSFERS_NAMESPACE}cashTransfer.`;
export const HISTORY_NAMESPACE = `${TRANSFERS_NAMESPACE}history.`;
export const BENEFICIARIES_NAMESPACE = `${TRANSFERS_NAMESPACE}beneficiaries.`;

export const TABS = [
  {
    id: 'favorites',
    title: `${FAVORITES_NAMESPACE}title`,
  },
  {
    id: 'transfer',
    title: `${TRANSFER_NAMESPACE}title`,
  },
  {
    id: 'cashTransfer',
    title: `${CASH_TRANSFER_NAMESPACE}title`,
  },
  {
    id: 'history',
    title: `${HISTORY_NAMESPACE}title`,
  },
  {
    id: 'beneficiaries',
    title: `${BENEFICIARIES_NAMESPACE}title`,
  },
];
