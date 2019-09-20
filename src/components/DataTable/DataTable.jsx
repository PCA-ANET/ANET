import React from 'react';
import { t } from '../../i18n';
import { MDBDataTable } from 'mdbreact';

const DataTable = ({ ...props }) => (
  <MDBDataTable
    paginationLabel={[t('DataTable:previous'), t('DataTable:next')]}
    searchLabel={t('DataTable:search')}
    infoLabel={[
      t('DataTable:showing'),
      t('DataTable:to'),
      t('DataTable:of'),
      t('DataTable:entries'),
    ]}
    responsive
    btn={true}
    fixed
    entriesOptions={[5, 10, 30]}
    hover
    {...props}
  />
);

export default DataTable;
