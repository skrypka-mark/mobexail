import i18n from '../locale';
import {
    ABOUT_US_ROUTE,
    EXCHANGE_ROUTE,
    REPAIR_ROUTE,
    CONTACTS_ROUTE
} from '../router/routes';

export const tabTitles = [
    {
        title: i18n.t('appBar.aboutUs'),
        description: 'О нас',
        link: ABOUT_US_ROUTE
    },
    {
        title: i18n.t('appBar.exchange'),
        description: 'Обмен телефона на новый с доплатой',
        link: EXCHANGE_ROUTE
    },
    {
        title: i18n.t('appBar.repair'),
        description: 'Ремонт смартфонов, планшетов, телевизоров',
        link: REPAIR_ROUTE
    },
    {
        title: i18n.t('appBar.contacts'),
        description: 'Контакты',
        link: CONTACTS_ROUTE
    }
];