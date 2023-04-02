import { useState } from 'react';
import { Container, Box, Grid, Collapse, Typography } from '@mui/material';
import { ExpandLess } from '@mui/icons-material';
import SectionLabelComponent from '../SectionLabelComponent';
import PhoneIcon from '../../svg/phone.svg';
import VodafoneIcon from '../../svg/vodafone.svg';
import KyivstarIcon from '../../svg/kyivstar.svg';
import ViberIcon from '../../svg/viber.svg';
import TelegramIcon from '../../svg/telegram.svg';
import WhatsAppIcon from '../../svg/whatsapp.svg';
import GmailIcon from '../../svg/gmail.svg';
import useStyles from './styles';

const FooterComponent = () => {
    const classes = useStyles();
    const footerData = {
        aboutUs: {
            title: 'О компании',
            list: [
                'Интернет-магазин электроники Mobileplanet.ua работает с заказами по всей Украине.\n\n',
                'Сделать покупку вы можете с любого города. Для доставки выбирайте удобную почтовую службу: «Новая почта», «Ночной экспресс», «Автолюкс», «Гюнсел».\n\n',
                'Преимуществами нашего интернет магазина техники являются: возможность {b}покупки в кредит{b}, наличие {b}сервиса по ремонту{b} и {b}программа обмена{b} старого гаджета на новое устройство.'
            ]
        },
        popularSections: {
            title: 'Популярные разделы',
            list: [
                {
                    text: 'Телефоны и смартфоны',
                    link: '/telefony'
                },
                {
                    text: 'Ноутбуки',
                    link: '/noutbooky'
                },
                {
                    text: 'Смартфоны Apple iPhone',
                    link: '/apple-iphone'
                },
                {
                    text: 'Техника Apple',
                    link: '/technika-apple'
                },
                {
                    text: 'Телевизоры',
                    link: '/televizory'
                },
                {
                    text: 'Распродажа (273)',
                    link: '/sale'
                },
                {
                    text: 'Новинки (2245)',
                    link: '/novelty'
                },
                {
                    text: 'Супер цена (1278)',
                    link: '/super-price'
                },
                {
                    text: 'Под заказ (28)',
                    link: '/on-order'
                },
                {
                    text: 'Новые товары каталога',
                    link: '#'
                },
                {
                    text: 'Карта сайта',
                    link: '#'
                },
                {
                    text: 'Все бренды',
                    link: '#'
                }
            ]
        },
        ourServices: {
            title: 'Наши услуги',
            list: [
                {
                    text: 'Обмен с доплатой',
                    link: '/exchange'
                },
                {
                    text: 'Ремонт техники',
                    link: '/repair'
                },
                {
                    text: 'Пользовательское соглашение',
                    link: '/'
                }
            ]
        },
        pointsOfIssue: {
            title: 'Точки выдачи',
            list: [
                'г. Одесса, ул. Одария, 2, магазин «Mobile Planet»',
                'г. Одесса, ул. Екатерининская, 14, магазин "Mobile Planet" (между ул. Дерибасовская и ул. Ланжероновская)'
            ]
        },
        kharkov: {
            title: 'Харьков',
            list: [
                'г. Харьков, ул. Рымарская, 19 (во дворе)'
            ]
        },
        schedule: {
            title: 'График работы',
            list: [
                '09:00 - 19:00 ул. Одария, 2',
                '10:00 - 20:00 ул. Екатерининская, 14'
            ]
        },
        weAreInSocialNetworks: {
            title: 'Мы в соцсетях',
            list: [
                'facebookIcon',
                'instagramIcon',
                'youtubeIcon'
            ]
        },
        contacts: {
            title: 'Контакты',
            list: [
                {
                    text: '(048) 702 96 98',
                    link: '#',
                    icon: PhoneIcon,
                    tooltip: 'Одесса'
                },
                {
                    text: '(044) 338 26 25',
                    link: '#',
                    icon: PhoneIcon,
                    tooltip: 'Киев'
                },
                {
                    text: '(095) 272 02 02',
                    link: '#',
                    icon: VodafoneIcon,
                    tooltip: 'Vodafone'
                },
                {
                    text: '(063) 780 02 02',
                    link: '#',
                    icon: KyivstarIcon,
                    tooltip: 'Lifecell'
                },
                {
                    text: '(097) 692 02 02',
                    link: '#',
                    icon: KyivstarIcon,
                    tooltip: 'Kyivstar'
                },
                {
                    text: '(067) 164 02 02',
                    link: '#',
                    icon: KyivstarIcon,
                    tooltip: 'Kyivstar'
                },
                {
                    text: '(063) 295 32 63',
                    link: '/',
                    icon: ViberIcon,
                    tooltip: 'Viber'
                },
                {
                    text: '(063) 295 32 63',
                    link: '/xui',
                    icon: TelegramIcon,
                    tooltip: 'Telegram'
                },
                {
                    text: '(063) 295 32 63',
                    link: '#',
                    icon: WhatsAppIcon,
                    tooltip: 'WhatsApp'
                },
                {
                    text: 'info@mobileplanet.ua',
                    link: '/penis',
                    icon: GmailIcon,
                    tooltip: 'Email'
                }
            ]
        },
        feedback: {
            title: 'Обратная связь',
            list: [
                {
                    text: 'Написать письмо директору',
                    link: '#'
                },
                {
                    text: 'Форма гарантии',
                    link: '#'
                }
            ]
        }
    };
    const [sectionOpen, setSectionOpen] = useState({
        aboutUs: true,
        popularSections: true,
        pointsOfIssue: true,
        contacts: true
    });
    const aboutUsClickHandler = () => setSectionOpen(state => ({ ...state, aboutUs: !state.aboutUs }));
    const popularSectionsClickHandler = () => setSectionOpen(state => ({ ...state, popularSections: !state.popularSections }));
    const pointsOfIssueClickHandler = () => setSectionOpen(state => ({ ...state, pointsOfIssue: !state.pointsOfIssue }));
    const contactsClickHandler = () => setSectionOpen(state => ({ ...state, contacts: !state.contacts }));
    const rotate = value => value ? 'rotate(0deg)' : 'rotate(-180deg)';
    return (
        <Box className={classes.container}>
            <Container className={classes.topFooterContainer}>
                <Grid container className={classes.gridContainer} spacing={5}>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <Box className={classes.sectionTitleContainer} onClick={aboutUsClickHandler}>
                            <SectionLabelComponent.Header title={footerData.aboutUs.title} />
                            <ExpandLess className={classes.arrowIcon} sx={{ transform: rotate(sectionOpen.aboutUs) }} />
                        </Box>
                        <Collapse in={sectionOpen.aboutUs} timeout={200} unmountOnExit>
                            <SectionLabelComponent.ListItems list={footerData.aboutUs.list} />
                        </Collapse>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <Box className={classes.sectionTitleContainer} onClick={popularSectionsClickHandler}>
                            <SectionLabelComponent.Header title={footerData.popularSections.title} />
                            <ExpandLess className={classes.arrowIcon} sx={{ transform: rotate(sectionOpen.popularSections) }} />
                        </Box>
                        <Collapse in={sectionOpen.popularSections} timeout={200} unmountOnExit>
                            <SectionLabelComponent.ListItems list={footerData.popularSections.list.slice(0, 5)} />
                            <SectionLabelComponent.ListItems list={footerData.popularSections.list.slice(5)} />
                            <SectionLabelComponent title={footerData.ourServices.title} list={footerData.ourServices.list.slice(0, 2)} />
                            <SectionLabelComponent.ListItems list={footerData.ourServices.list.slice(2)} underline='always' />
                        </Collapse>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <Box className={classes.sectionTitleContainer} onClick={pointsOfIssueClickHandler}>
                            <SectionLabelComponent.Header title={footerData.pointsOfIssue.title} />
                            <ExpandLess className={classes.arrowIcon} sx={{ transform: rotate(sectionOpen.pointsOfIssue) }} />
                        </Box>
                        <Collapse in={sectionOpen.pointsOfIssue} timeout={200} unmountOnExit>
                            <SectionLabelComponent.ListItems list={footerData.pointsOfIssue.list} />
                            <SectionLabelComponent title={footerData.kharkov.title} list={footerData.kharkov.list} />
                            <SectionLabelComponent title={footerData.schedule.title} list={footerData.schedule.list} />
                            <SectionLabelComponent title={footerData.weAreInSocialNetworks.title} list={footerData.weAreInSocialNetworks.list} />
                        </Collapse>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <Box className={classes.sectionTitleContainer} onClick={contactsClickHandler}>
                            <SectionLabelComponent.Header title={footerData.contacts.title} />
                            <ExpandLess className={classes.arrowIcon} sx={{ transform: rotate(sectionOpen.contacts) }} />
                        </Box>
                        <Collapse in={sectionOpen.contacts} timeout={200} unmountOnExit>
                            <SectionLabelComponent.ListItems list={footerData.contacts.list.slice(0, 6)} />
                            <SectionLabelComponent.ListItems list={footerData.contacts.list.slice(6)} />
                            <SectionLabelComponent title={footerData.feedback.title} list={footerData.feedback.list} underline='always' />
                        </Collapse>
                    </Grid>
                </Grid>
            </Container>
            <Box className={classes.bottomFooter}>
                <Container>
                    <Typography className={classes.bottomFooterLeftText}>
                        © Интернет-магазин с правильными ценами Mobile Planet, 2011-2021
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
};

export default FooterComponent;