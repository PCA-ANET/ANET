import React, { Component } from 'react';
import {
  Image,
  Font,
  Page,
  Text,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';
import styled from '@react-pdf/styled-components';
import { t } from '../../i18n';

class bankStatement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numeroCompte: null,
      data: [],
    };
  }

  componentWillMount() {
    this.setState({
      numeroCompte: this.props.numeroCompte,
      data: this.props.data,
    });
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.data === nextProps.data) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <Document>
        <Page style={styles.body}>
          <Image
            style={{ width: '20vw', height: '9vh' }}
            src={require('./../../assets/img/logos/logo.PNG')}
          />

          <Text style={styles.header} fixed></Text>

          <Text style={styles.title}>{t('Accounts:bankStatement30')}</Text>
          <Text style={styles.author}>
            {t('Accounts:accountNumer')} {this.props.numeroCompte}
          </Text>

          <Text style={styles.text}>{t('Accounts:lastOperations')}</Text>

          <Table>
            <TR>
              <TD>
                <TT1>{t('Accounts:date')}</TT1>
              </TD>
              <TD>
                <TT1>{t('Accounts:dateValue')}</TT1>
              </TD>
              <TD1>
                <TT1>{t('Accounts:description')}</TT1>
              </TD1>
              <TD3>
                <TT1>{t('Accounts:reference')}</TT1>
              </TD3>
              <TD>
                <TT1>{t('Accounts:amount')}</TT1>
              </TD>
            </TR>
            {this.props.data
              ? this.props.data.map(a => (
                <React.Fragment key={a.code}>
                <TR>
                  <TD>
                    <TT>{a.date}</TT>
                  </TD>
                  <TD>
                    <TT>{a.valueDate}</TT>
                  </TD>
                  <TD1>
                    <TT>{a.description}</TT>
                  </TD1>
                  <TD3>
                    <TT>{a.code}</TT>
                  </TD3>
                  <TD>
                    <TT>{a.amount}</TT>
                  </TD>
                </TR>
                </React.Fragment>
                ))
              : ''}
          </Table>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      </Document>
    );
  }
}

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
});

const Table = styled.View`
display: table; width:auto; borderStyle: solid; borderWidth: 1; borderRightWidth: 0; borderBottomWidth: 0'
`;

const TR = styled.View`
flexDirection: row; margin:auto;'
`;

const TD = styled.View`
width: 13%; borderStyle: solid; borderWidth: 1; borderLeftWidth: 0; borderTopWidth: 0;'
`;

const TD1 = styled.View`
width: 46%; borderStyle: solid; borderWidth: 1; borderLeftWidth: 0; borderTopWidth: 0;'
`;

const TD3 = styled.View`
width: 15%; borderStyle: solid; borderWidth: 1; borderLeftWidth: 0; borderTopWidth: 0;'
`;

const TT = styled.Text`
  margin: 10px;
  font-size: 9px;
  font-family: 'Helvetica';
`;

const TT1 = styled.Text`
  margin: 10px;
  font-size: 10px;
  font-family: 'Helvetica';
  ont-weight: bold;
`;

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald',
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald',
  },
  text: {
    margin: 10,
    fontSize: 8,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },
  image: {
    marginVertical: 0,
    marginHorizontal: 0,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

export default bankStatement;
