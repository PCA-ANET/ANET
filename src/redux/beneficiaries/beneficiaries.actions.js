import { actionCreator } from '../../utils/generators';
import BeneficiariesActionTypes from './beneficiaries.types';

export const getAllBeneficiaries = () => ({
  type: actionCreator('req', BeneficiariesActionTypes.GET_ALL_BENEFICIARIES),
});

export const getTransferBeneficiaries = () => ({
  type: actionCreator(
    'req',
    BeneficiariesActionTypes.GET_TRANSFER_BENEFICIARIES,
  ),
});
export const getCashTransferBeneficiaries = () => ({
  type: actionCreator(
    'req',
    BeneficiariesActionTypes.GET_CASH_TRANSFER_BENEFICIARIES,
  ),
});
