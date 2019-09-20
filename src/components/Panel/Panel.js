import React from 'react';
import { t } from '../../i18n';
import ListeOperationsPdf from '../../pdf/account/bankStatement';
import { CSVLink } from 'react-csv';
import { PDFDownloadLink } from '@react-pdf/renderer';

const headers = [
  { key: 'date', label: t('Accounts:date') },
  { key: 'valueDate', label: t('Accounts:dateValue') },
  { key: 'description', label: t('Accounts:description') },
  { key: 'code', label: t('Accounts:reference') },
  { key: 'amount', label: t('Accounts:amount') },
];
const prefix = 'Historique_';
const suffixExcel = '.csv';
const suffixPDF = '.pdf';

const panel = props => {
  const selectedAccountId =
    props.selectedAccountId !== undefined
      ? props.selectedAccountId
      : '';
  const name = `${prefix.concat(`${selectedAccountId}`)}`;
  const filenameExcel = `${name.concat(`${suffixExcel}`)}`;
  const filenamePdf = `${name.concat(`${suffixPDF}`)}`;
  return (
    <div className="panel panel-default">
      <div className="panel-heading panel-heading-divider">
        <div className="row">
          <div className="col-md-6">{props.title}</div>
         {props.button? (
           <div className="col-md-6 text-right">
           <button className="btn btn-space btn-default md-trigger addform popin_btn" data-modal="ajoutfavoris" onClick={props.onclick}><span>{props.btntxt}</span></button>
         </div>
         ):null
        } 
          <div className="col-md-6">
          {props.download ? (
            <div className="download_links dropdown_area float_right">
              <span className="purple_download">
                {t('Components:downloadHistory')}
                <PDFDownloadLink
                  document={
                    <ListeOperationsPdf
                      data={props.operations}
                      numeroCompte={props.selectedAccountId}
                    />
                  }
                  fileName={filenamePdf}
                >
                  {' '}
                  PDF&nbsp;&nbsp;
                </PDFDownloadLink>
                <CSVLink
                  data={props.operations}
                  separator={';'}
                  headers={headers}
                  filename={filenameExcel}
                >
                  EXCEL
                </CSVLink>
              </span>
            </div>):null}
          </div>
        </div>
      </div>
      <div className="panel-body">{props.children}</div>
    </div>
  );
};

export default panel;
