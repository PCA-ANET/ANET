import React from 'react';
import ItemSub from './SubElements/ItemSub';
import CardTitle from './SideBarCard/CardTitle/CardTitle';
import CardElements from './SideBarCard/CardElements/CardElements';
import SideDashSVG from '../../../assets/SvgComponents/SideBarSvg/SideDashSVG';
import SideBarCompte from '../../../assets/SvgComponents/SideBarSvg/SideBarComptesSvg';
import SideBarCarteSvg from '../../../assets/SvgComponents/SideBarSvg/SideBarCarteSvg';
import SideBarTranSvg from '../../../assets/SvgComponents/SideBarSvg/SideBarTranSvg';
import SideBarSimSvg from '../../../assets/SvgComponents/SideBarSvg/SideBarSimSvg';
import CardItems from './SideBarCard/CardItems/CardItems';
import AccountsMenu from './SideBarCard/AccountsMenu/AccountsMenu';
import { t } from '../../../i18n';

const sideBarItems = () => (
  <ul className="sidebar-elements">
    <li>
      <CardTitle title={t('Components:dashboard')} link="/">
        <SideDashSVG />
      </CardTitle>
    </li>
    <li className="parent current">
      <CardTitle title={t('Components:accounts')} link="/">
        <SideBarCompte />
      </CardTitle>
      <AccountsMenu />
    </li>
    <li className="parent current">
      <CardTitle title={t('Components:cardsAndChecks')} link="/">
        <SideBarCarteSvg />
      </CardTitle>
      <CardElements subtitle={t('Components:cardsAndChecks')}>
        <CardItems
          subtitle={t('Components:cards')}
          link="/"
          class="submenu-accordion_title opened"
        >
          <ItemSub text={t('Components:cardSynthesis')} link="/" />
          <ItemSub text={t('Components:cardsDetails')} link="/" />
          <ItemSub text={t('Components:purchaseCode')} link="/" />
        </CardItems>
        <CardItems
          subtitle={t('Components:checksAndEffects')}
          link="/"
          class="submenu-accordion_title opened"
        >
          <ItemSub text={t('Components:checkBooks')} link="/" />
        </CardItems>
      </CardElements>
    </li>
    <li className="parent current">
      <CardTitle title={t('Components:paymentsAndTransfers')} link="/transVir">
        <SideBarTranSvg />
      </CardTitle>
      <CardElements subtitle={t('Components:paymentsAndTransfers')}>
        <CardItems
          subtitle={t('Components:payments')}
          link="/"
          class="submenu-accordion_title opened"
        >
          <ItemSub text={t('Components:favorites')} link="/" />
          <ItemSub text={t('Components:merchantsList')} link="/" />
          <ItemSub text={t('Components:phoneCredit')} link="/" />
          <ItemSub text={t('Components:phoneAndInternet')} link="/" />
          <ItemSub text={t('Components:waterAndElectricity')} link="/" />
          <ItemSub text={t('Components:transport')} link="/" />
          <ItemSub text={t('Components:taxesAndAdministrations')} link="/" />
          <ItemSub text={t('Components:schoolsAndUniversities')} link="/" />
          <ItemSub text={t('Components:airlines')} link="/" />
          <ItemSub text={t('Components:stickerPayment')} link="/" />
          <ItemSub text={t('Components:history')} link="/" />
        </CardItems>
        <CardItems
          subtitle={t('Components:transfers')}
          class="submenu-accordion_title opened"
          link="/"
        >
          <ItemSub text={t('Components:favorites')} link="/" />
          <ItemSub text={t('Components:bankTransfer')} link="/" />
          <ItemSub text={t('Components:cashTransfer')} link="/" />
          <ItemSub text={t('Components:transferForms')} link="/" />
          <ItemSub text={t('Components:history')} link="/" />
          <ItemSub text={t('Components:beneficiaries')} link="/" />
        </CardItems>
      </CardElements>
    </li>
    <li className="parent current">
      <CardTitle title={t('Components:simulators')} link="/">
        <SideBarSimSvg />
      </CardTitle>
      <CardElements subtitle={t('Components:simulators')}>
        <CardItems
          subtitle={t('Components:simulators')}
          link="/"
          class="submenu-accordion_title opened"
        >
          <ItemSub text={t('Components:mortgage')} link="/" />
          <ItemSub text={t('Components:consumerLoan')} link="/" />
        </CardItems>
      </CardElements>
    </li>
  </ul>
);
export default sideBarItems;
