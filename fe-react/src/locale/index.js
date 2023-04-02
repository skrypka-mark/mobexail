import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import ru from './languages/ru.json';
import ua from './languages/ua.json';

i18n.use(detector)
    .use(initReactI18next)
    .init({
        lng: 'ru',
        fallbackLng: ['ru', 'ua'],
        resources: {
            ru: {
                translation: ru
            },
            ua: {
                translation: ua
            }
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;