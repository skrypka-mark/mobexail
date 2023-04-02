import { useEffect, useMemo, useState } from 'react';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';
import { getNavigation } from '../../redux/selectors/navigation';
import { getCurrentProduct } from '../../redux/actions/product';
import { categorySelector } from '../../redux/selectors/category';
import { currentProductSelector } from '../../redux/selectors/product';
import { setNavigation } from '../../redux/reducers/navigationReducer';
import HomePage from '../../pages/HomePage';
import CategoryPage from '../../pages/CategoryPage';
import ProductPage from '../../pages/ProductPage';
import AboutUsPage from '../../pages/AboutUsPage';
import NotFoundPage from '../../pages/NotFoundPage';
import ExchangePage from '../../pages/ExchangePage';
import RepairPage from '../../pages/RepairPage';
import ContactsPage from '../../pages/ContactsPage';
import HeaderComponent from '../../components/HeaderComponent';
import NavigationComponent from '../../components/NavigationComponent';
import NavigationMobileComponent from '../../components/NavigationMobileComponent';
import { nanoid } from 'nanoid';
import { tabTitles } from '../../constants/tabTitles';
import {
    HOME_ROUTE,
    ABOUT_US_ROUTE,
    EXCHANGE_ROUTE,
    REPAIR_ROUTE,
    CONTACTS_ROUTE,
    CATEGORY_ROUTE,
    PRODUCT_ROUTE
} from '../routes';
import useStyles from './styles';

const Navigator = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigation = useSelector(getNavigation);
    const category = useSelector(categorySelector);
    const currentProduct = useSelector(currentProductSelector);
    const { pathname } = useLocation();
    const data = [
        {
            id: '12',
            title: 'Телефоны',
            description: 'Мобильные телефоны и смартфоны',
            link: '/telefony',
            image: 'https://mobileplanet.ua/uploads/katalog/mobilnye-telefony.jpg'
        },
        {
            id: '13',
            title: 'Ноутбуки',
            description: 'Ноутбуки',
            link: '/noutbooky',
            image: 'https://mobileplanet.ua/uploads/katalog/noutbuki1.jpg'
        },
        {
            id: '14',
            title: 'Телевизоры',
            description: 'Телевизоры',
            link: '/televizory',
            image: 'https://mobileplanet.ua/uploads/katalog/televizory.jpg'
        },
        {
            id: '15',
            title: 'Компьютеры и периферия',
            description: 'Компьютеры и периферия',
            link: '/komputeri-i-perefiriya',
            image: 'https://mobileplanet.ua/uploads/katalog/kompyutery-i-periferiya.jpg'
        },
        {
            id: '2',
            title: 'Apple iPhone',
            description: 'Смартфоны Apple iPhone',
            link: '/apple-iphone',
            image: 'https://mobileplanet.ua/uploads/katalog/apple-iphone1.jpg'
        },
        {
            id: '4',
            title: 'Apple Watch',
            description: 'Часы Apple Watch',
            link: '/apple-watch',
            image: 'https://mobileplanet.ua/uploads/katalog/apple-watch.jpg'
        },
        {
            id: '6',
            title: 'Apple MacBook',
            description: 'Ноутбуки Apple MacBook',
            link: '/apple-macbook',
            image: 'https://mobileplanet.ua/uploads/katalog/apple-macbook.jpg'
        },
        {
            id: '3',
            title: 'Apple iPad',
            description: 'Планшеты Apple iPad',
            link: '/apple-ipad',
            image: 'https://mobileplanet.ua/uploads/katalog/apple-ipad.jpg'
        }
    ];
    const catalog = [
        {
            id: '1',
            title: 'Техника Apple',
            link: '/technika-apple',
            options: [
                {
                    id: '2',
                    title: 'Apple iPhone',
                    link: '/apple-iphone',
                },
                {
                    id: '3',
                    title: 'Apple iPad',
                    link: '/apple-ipad',
                },
                {
                    id: '4',
                    title: 'Apple Watch',
                    link: '/apple-watch',
                },
                {
                    id: '5',
                    title: 'Apple Airpods',
                    link: '/apple-airpods'
                },
                {
                    id: '6',
                    title: 'Apple MacBook',
                    link: '/apple-macbook',
                },
                {
                    id: '7',
                    title: 'Apple iMac',
                    link: '/apple-imac'
                },
                {
                    id: '8',
                    title: 'Apple Mac Pro',
                    link: '/apple-mac-pro'
                },
                {
                    id: '9',
                    title: 'Apple Аксессуары',
                    link: '/apple-aksesuary',
                    options: [
                        {
                            id: '10',
                            title: 'Гаджеты Apple',
                            link: '/gatjety-apple'
                        },
                        {
                            id: '11',
                            title: 'Чехлы для Apple',
                            link: '/chehly-dlya-apple'
                        }
                    ]
                }
            ]
        },
        {
            id: '12',
            title: 'Телефоны',
            description: 'Мобильные телефоны и смартфоны',
            link: '/telefony',
            image: 'https://mobileplanet.ua/uploads/katalog/mobilnye-telefony.jpg',
            options: [
                {
                    id: '1',
                    title: 'Телефоны Xiaomi',
                    link: '/telefony-xiaomi'
                },
                {
                    id: '2',
                    title: 'Телефоны Huawei',
                    link: '/telefony-huawei'
                },
                {
                    id: '3',
                    title: 'Телефоны Samsung',
                    link: '/telefony-samsung'
                },
                {
                    id: '4',
                    title: 'Телефоны Blackview',
                    link: '/telefony-blackview'
                }
            ]
        },
        {
            id: '13',
            title: 'Ноутбуки',
            description: 'Ноутбуки',
            link: '/noutbooky',
            image: 'https://mobileplanet.ua/uploads/katalog/noutbuki1.jpg',
            options: [
                {
                    id: '1',
                    title: 'Ноутбуки Xiaomi',
                    link: '/noutbooky-xiaomi'
                },
                {
                    id: '2',
                    title: 'Ноутбуки MSI',
                    link: '/noutbooky-msi'
                },
                {
                    id: '3',
                    title: 'Ноутбуки Dell',
                    link: '/noutbooky-dell'
                },
                {
                    id: '4',
                    title: 'Ноутбуки Asus',
                    link: '/noutbooky-asus'
                }
            ]
        },
        {
            id: '14',
            title: 'Телевизоры',
            description: 'Телевизоры',
            link: '/televizory',
            image: 'https://mobileplanet.ua/uploads/katalog/televizory.jpg',
            options: [
                {
                    id: '1',
                    title: 'Телевизоры Xiaomi',
                    link: '/televizory-xiaomi'
                },
                {
                    id: '2',
                    title: 'Телевизоры Hisense',
                    link: '/televizory-hisense'
                },
                {
                    id: '3',
                    title: 'Телевизоры Sony',
                    link: '/televizory-sony'
                }
            ]
        },
        {
            id: '15',
            title: 'Компьютеры и периферия',
            description: 'Компьютеры и периферия',
            link: '/komputeri-i-perefiriya',
            image: 'https://mobileplanet.ua/uploads/katalog/kompyutery-i-periferiya.jpg',
            options: [
                {
                    id: '1',
                    title: 'Компьютеры',
                    link: '/komputeri'
                },
                {
                    id: '2',
                    title: 'Мониторы',
                    link: '/monitory'
                },
                {
                    id: '3',
                    title: 'Клавиатуры',
                    link: '/klaviatura'
                }
            ]
        }
    ];
    const headerData = [
        {
            title: 'Распродажа',
            link: '/sale',
            amount: 271
        },
        {
            title: 'Новинки',
            link: '/novelty',
            amount: 2324
        },
        {
            title: 'Топ продаж',
            link: '/top-sales',
            amount: 1315
        },
        {
            title: 'Супер цена',
            link: '/super-price',
            amount: 3232
        },
        {
            title: 'Под заказ',
            link: '/on-order',
            amount: 31
        }
    ];
    const catalogNotNested = useMemo(() => {
        const _catalog = [];
        const getCatalog = array => {
            array.forEach(obj => {
                if(obj?.options?.length) {
                    _catalog.push(obj);
                    getCatalog(obj.options);
                }
                else _catalog.push(obj);
            });
        };
        getCatalog(catalog);
        return _catalog;
    }, [catalog]);
    const catalogLinks = useMemo(() => catalogNotNested.map(({ link }) => link), [catalogNotNested]);
    const headerLinks = headerData.map(({ link }) => link);
    const navbarTabLinks = tabTitles.map(({ link }) => link);
    const lastPathname = useMemo(() => {
        const splittedPathname = pathname.split('/');
        return `/${splittedPathname[splittedPathname.length - 1]}`;
    }, [pathname]);
    const siteMapping = () => {
        let path = [];
        if(catalogLinks.includes(pathname)) {
            const getIds = (array, link) => {
                if(array) {
                    for(let i = 0; i < array.length; i++) {
                        const { id } = array[i];
                        if(array[i].link === link) return [id];
                        const a = getIds(array[i].options, link);
                        if(a) {
                            a.unshift(id);
                            return a;
                        }
                    }
                }
                return null;
            };

            const ids = getIds(catalog, pathname);
            const getPath = array => {
                const id = ids.shift();
                const obj = array.find(item => item.id === id);
                if(obj?.options?.length) {
                    path.push(obj);
                    return getPath(obj.options);
                }
                else {
                    if(obj) return path.push(obj);
                    else return;
                }
            };
            getPath(catalog);
        } else if(pathname === '/') path = [];
        else if(headerLinks.includes(pathname)) path.push(headerData.find(({ link }) => link === pathname));
        else if(navbarTabLinks.includes(pathname)) {
            const tabTitle = tabTitles.find(({ link }) => link === pathname);
            path.push({ ...tabTitle, title: tabTitle.description });
        } else if(category?.products?.map(({ link }) => link).includes(pathname)) {
            const { id } = category.products.find(({ link }) => link === pathname);
            console.log(id);
            dispatch(getCurrentProduct(id));
            path.push(...navigation.slice(1), currentProduct);
        }

        dispatch(setNavigation(path));
    };
    useEffect(() => {
        siteMapping();
    }, [pathname, currentProduct]);
    const isNavigationVisible = useMemo(() => navigation.length > 1, [navigation]);
    const lastNavigation = useMemo(() => (
        navigation[navigation.length
            ? navigation.length - 2
            : navigation.length - 1]
    ), [navigation]);
    return (
        <Container className={classes.container}>
            { isNavigationVisible && <NavigationComponent data={navigation} /> }
            { isNavigationVisible && <NavigationMobileComponent data={lastNavigation} /> }
            <HeaderComponent data={headerData} catalog={catalog} />
            <Routes>
                <Route exact path={HOME_ROUTE} element={<HomePage data={data} catalog={catalog} />} />
                { category?.products?.map(item => <Route key={nanoid()} exact path={item.link} element={<ProductPage product={currentProduct} />} />) }
                { catalogNotNested?.map(item => <Route key={nanoid()} exact path={item.link} element={<CategoryPage id={item.id} />} />) }
                <Route exact path={ABOUT_US_ROUTE} element={<AboutUsPage />} />
                <Route exact path={EXCHANGE_ROUTE} element={<ExchangePage />} />
                <Route exact path={REPAIR_ROUTE} element={<RepairPage />} />
                <Route exact path={CONTACTS_ROUTE} element={<ContactsPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </Container>
    );
};

export default Navigator;