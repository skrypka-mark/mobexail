const Product = require('../models/ProductModel');

const categories = [
    {
        id: '1',
        parentId: null,
        title: 'Техника Apple',
        description: 'Техника Apple'
    },
    {
        id: '2',
        parentId: '1',
        title: 'Apple iPhone',
        description: 'Смартфоны Apple iPhone'
    },
    {
        id: '3',
        parentId: '1',
        title: 'Apple iPad',
        description: 'Планшеты Apple iPad'
    },
    {
        id: '4',
        parentId: '1',
        title: 'Apple Watch',
        description: 'Часы Apple Watch'
    },
    {
        id: '5',
        parentId: '1',
        title: 'Apple Airpods'
    },
    {
        id: '6',
        parentId: '1',
        title: 'Apple MacBook',
        description: 'Ноутбуки Apple MacBook'
    },
    {
        id: '7',
        parentId: '1',
        title: 'Apple iMac'
    },
    {
        id: '8',
        parentId: '1',
        title: 'Apple Mac Pro'
    },
    {
        id: '9',
        parentId: '1',
        title: 'Apple Аксессуары'
    },
    {
        id: '10',
        parentId: '9',
        title: 'Гаджеты Apple'
    },
    {
        id: '11',
        parentId: '9',
        title: 'Чехлы для Apple',
        description: 'Чехлы для Apple'
    },
    {
        id: '12',
        parentId: null,
        title: 'Телефоны',
        description: 'Мобильные телефоны и смартфоны'
    },
    {
        id: '13',
        parentId: null,
        title: 'Ноутбуки',
        description: 'Ноутбуки'
    },
    {
        id: '14',
        parentId: null,
        title: 'Телевизоры',
        description: 'Телевизоры'
    },
    {
        id: '15',
        parentId: null,
        title: 'Компьютеры и периферия',
        description: 'Компьютеры и периферия'
    }
];

const products = [
    {
        id: '1',
        parentId: '12',
        title: 'Xiaomi Redmi 9 4/64Gb Carbon Grey (no NFC)',
        description: 'Дисплей: 6.53" / IPS LCD (2340х1080 точек) / Процессор: Mediatek Helio G80 + Mali-G52 MC2 / Оперативная память: 4 Гб / Встроенная память: 64 Гб / microSD - до 512 Гб / Камера: 13+8+5+2Мп + фронт 8Мп / Батарея: 5020',
        type: 'phone',
        link: '/xiaomi-redmi-9-4-64gb-carbon-grey-176258',
        productCode: 176258,
        price: 3934,
        previousPrice: 4209,
        inDollar: 145,
        inStock: true,
        image: 'https://mobileplanet.ua/uploads/small/magazin-mobileplanet-xiaomi-redmi-9-4-64gb-carbon-grey-1762588.jpg.pagespeed.ce.93T65EJipb.jpg'
    },
    {
        id: '2',
        parentId: '12',
        title: 'Samsung Galaxy M62 2021 Duos 8/256Gb Blue (SM-M625)',
        description: 'Дисплей: 6.7" / Super Amoled Plus (2400x1080 точек) / Процессор: Samsung Exynos 9825 + Mali-G76 MP12 / Оперативная память: 8 Гб / Встроенная память: 256 Гб / microSD - до 512 Гб / Камера: 64+12+5+5Мп + фронт 32Мп /',
        type: 'phone',
        link: '/samsung-galaxy-m62-2021-duos-8-256gb-blu-228314',
        productCode: 228314,
        price: 13565,
        previousPrice: 14379,
        inDollar: 500,
        inStock: true,
        image: 'https://mobileplanet.ua/uploads/small/magazin-mobileplanet-samsung-galaxy-m62-2021-duos-8-256gb-blu-2283147.jpg.pagespeed.ce.ON0Evunoqe.jpg'
    },
    {
        id: '3',
        parentId: '12',
        title: 'Xiaomi Poco F3 6/128GB Ocean Blue Europe (Pocophone)',
        description: 'Дисплей: 6.67" / Amoled (2400x1080 точек) / Процессор: Qualcomm Snapdragon 870 + Adreno 650 / Оперативная память: 6 Гб / Встроенная память: 128 Гб / microSD - нет / Камера: 48+8+5Мп + фронт 20Мп / Батарея: 4520 мAч',
        type: 'phone',
        link: '/xiaomi-poco-f3-6-128gb-ocean-blue-europe-219833',
        productCode: 219833,
        price: 9496,
        previousPrice: 9971,
        inDollar: 350,
        inStock: true,
        image: 'https://mobileplanet.ua/uploads/small/magazin-mobileplanet-xiaomi-poco-f3-6-128gb-ocean-blue-europe-21983310.jpg.pagespeed.ce.8D8H1H7pWZ.jpg'
    },
    {
        id: '4',
        parentId: '12',
        title: 'Xiaomi Redmi Note 10 Pro 5G 6/128Gb Onyx Gray',
        description: 'Дисплей: 6.6" / IPS LCD (2400x1080 точек) / Процессор: MediaTek MT6891Z Dimensity 1100 + Mali-G77 MC9 / Оперативная память: 6 Гб / Встроенная память: 128 Гб / microSD - нет / Камера: 64+8+2Мп + фронт 16Мп / Батарея:',
        type: 'phone',
        link: '/xiaomi-redmi-note-10-pro-6-128gb-onyx-gr-232415',
        productCode: 232415,
        price: 6864,
        previousPrice: 7139,
        inDollar: 253,
        inStock: true,
        image: 'https://mobileplanet.ua/uploads/small/magazin-mobileplanet-xiaomi-redmi-note-10-pro-6-128gb-onyx-gr-23241521.jpg.pagespeed.ce.EeNBzU_6R9.jpg'
    },
    {
        id: '5',
        parentId: '12',
        title: 'Samsung Galaxy Xcover 5 4/64Gb Black (SM-G525F)',
        description: 'Дисплей: 5.3" / IPS LCD (1480x720 точек) / Процессор: Samsung Exynos 850 + Mali-G52 / Оперативная память: 4 Гб / Встроенная память: 64 Гб / microSD - до 128 Гб / Камера: 16Мп + фронт 5Мп / Батарея: 3000 мAч',
        type: 'phone',
        link: '/samsung-galaxy-xcover-5-4-64gb-black-sm-215946',
        productCode: 215946,
        price: 8682,
        previousPrice: 8942,
        inDollar: 320,
        inStock: true,
        image: 'https://mobileplanet.ua/uploads/small/magazin-mobileplanet-samsung-galaxy-xcover-5-4-64gb-black-sm-2159466.jpg.pagespeed.ce.RHU9v2AOLx.jpg'
    },
    {
        id: '6',
        parentId: '13',
        title: 'ASUS ROG Strix G15 R7-4800H/16GB/512 RTX3050 144Hz (G513IC-HN003)',
        description: 'Процессор: AMD Ryzen ™ 7 4800H (8 ядер, 16 потоков, 2,90-4,20 ГГц, 12 МБ кэш); ОЗУ: 16 ГБ (SO-DIMM DDR4, 3200 МГц); Максимум RAM: 32 ГБ; SSD M.2 диск: 512 ГБ.; Дополнительно M.2 PCIE: Возможно MM2 (включены в',
        type: 'notebook',
        link: '/asus-rog-strix-g15-r7-4800h-16gb-512-rtx-224739',
        productCode: 224739,
        price: 30386,
        previousPrice: 32513,
        inDollar: 1120,
        inStock: true,
        image: 'https://mobileplanet.ua/uploads/small/asus-rog-strix-g15-r7-4800h-16gb-512-rtx-224739_9.jpg.pagespeed.ce.UG15EaKHG5.jpg'
    },
    {
        id: '7',
        parentId: '13',
        title: 'ASUS Vivobook R415JA (R415JA-EK480T)',
        description: 'Диагональ экрана: 14.0" TN / Разрешение: 1920x1080 / Процессор: 2-ядерный, Intel Core I3-1005G1 / Оперативная память: 8Гб / Встроенная память: 256Гб SSD / Видеокарта: Intel Graphics UHD / Подсветка',
        type: 'notebook',
        link: '/asus-vivobook-r415ja-r415ja-ek480t-229693',
        productCode: 229693,
        price: 12209,
        previousPrice: 13308,
        inDollar: 450,
        inStock: true,
        image: 'https://mobileplanet.ua/uploads/small/magazin-mobileplanet-asus-vivobook-r415ja-r415ja-ek480t-2296932.jpg.pagespeed.ce.TNXMzRS7U8.jpg'
    },
    {
        id: '8',
        parentId: '13',
        title: 'Dell Inspiron 13 5310 (I5310-5127SLV-PFR)',
        description: 'Диагональ экрана: 13,3" IPS / Разрешение: 1920x1080 / Процессор: 4-ядерный, Intel i5-11300H / / Оперативная память: 8Гб / Встроенная память: 256Гб SSD / Видеокарта: Intel Iris Xe / Операционная система:',
        type: 'notebook',
        link: '/dell-inspiron-13-5310-i5310-5127slv-pfr-230379',
        productCode: 230379,
        price: 17363,
        previousPrice: 17884,
        inDollar: 640,
        inStock: true,
        image: 'https://mobileplanet.ua/uploads/small/magazin-mobileplanet-dell-inspiron-13-5310-i5310-5127slv-pfr-2303791.jpg.pagespeed.ce.ZhqisGF5-y.jpg'
    },
    {
        id: '9',
        parentId: '13',
        title: 'ASUS TUF Dash F15 i7-11370H/16GB/512/W10 RTX3060 144Hz (FX516PM-HN129T)',
        description: 'Процессор: Intel Core i7-11370H (4 ядра, 8 потоков, 3.30-4.80 ГГц, кэш 12 МБ); RAM: 16 ГБ (SO-DIMM DDR4, 3200MHz); M.2 PCIe SSD: 512 Гб; Дополнительно м.2 PCIe: возможно м.2 PCIe (крепеж в комплекте); Встроенный',
        type: 'notebook',
        link: '/asus-tuf-dash-f15-i7-11370h-16gb-512-w10-231162',
        productCode: 231162,
        price: 37304,
        previousPrice: 39915,
        inDollar: 1375,
        inStock: true,
        image: 'https://mobileplanet.ua/uploads/small/magazin-mobileplanet-asus-tuf-dash-f15-i7-11370h-16gb-512-w10-2311623.jpg.pagespeed.ce.MXARxAynJR.jpg'
    },
    {
        id: '10',
        parentId: '13',
        title: 'MSI GP66 i7-11800H/16GB/512 RTX3070 144Hz (Leopard | GP66 11UG-279XPL)',
        description: 'Процессор: Intel Core I7-11800H (8 ядер, 16 потоков, 2,30-4,60 ГГц, кэш 24 МБ); RAM: 16 ГБ (DDR4, 3200 МГц); Максимум RAM: 64 ГБ.; SSD M.2 диск: 512 ГБ.; Встроенный оптический привод: Нет; Сенсорный экран:',
        type: 'notebook',
        link: '/msi-gp66-i7-11800h-16gb-512-rtx3070-144h-227280',
        productCode: 227280,
        price: 56430,
        previousPrice: 60380,
        inDollar: 2080,
        inStock: true,
        image: 'https://mobileplanet.ua/uploads/product/2021-9-9/msi-gp66-i7-11800h-16gb-512-rtx3070-144h-227280.jpg.pagespeed.ce.qsd_9gIAEq.jpg'
    },
    {
        id: '11',
        parentId: '14',
        title: 'Xiaomi Mi TV 4S UHD 50 International Edition UA',
        description: 'LED-телевизор / Диагональ 50" / Экран не изогнут / Разрешение экрана: 3840x2160, UltraHD 4K / Smart TV: есть / Поддержка 3D: нет / Качество картинки: 1300 PQI Частота обновления: 60 Гц /',
        type: 'tv',
        link: '/xiaomi-mi-tv-4s-50-177654',
        productCode: 177654,
        price: 12900,
        previousPrice: 14190,
        inDollar: null,
        inStock: true,
        image: 'https://mobileplanet.ua/uploads/small/magazin-mobileplanet-xiaomi-mi-tv-4s-50-1776548.jpg.pagespeed.ce.o_es5nZ-Qy.jpg'
    },
    {
        id: '12',
        parentId: '14',
        title: 'Samsung QE55Q80A',
        description: 'QLED-телевизор / Диагональ 55" / Экран не изогнут / Разрешение экрана: 3840x2160, UltraHD 4K / Smart TV: есть / Поддержка 3D: нет / Качество картинки: 3800 PQI Частота обновления: 120 Гц /',
        type: 'tv',
        link: '/samsung-qe55q80a-204456',
        productCode: 204456,
        price: 29816,
        previousPrice: 32798,
        inDollar: 1099,
        inStock: true,
        image: 'https://mobileplanet.ua/uploads/small/magazin-mobileplanet-samsung-qe55q80a-2044564.jpg.pagespeed.ce.IFnsgCtVP4.jpg'
    },
    {
        id: '13',
        parentId: '14',
        title: 'Xiaomi Mi TV 4S UHD 55 International Edition UA',
        description: 'LED-телевизор / Диагональ 55" / Экран не изогнут / Разрешение экрана: 3840x2160, UltraHD 4K / Smart TV: есть / Поддержка 3D: нет / Частота обновления: 60 Гц / Количество USB портов: 3 /',
        type: 'tv',
        link: '/xiaomi-mi-tv-uhd-4s-55-international-edi-148104',
        productCode: 148104,
        price: 14500,
        previousPrice: 15370,
        inDollar: null,
        inStock: true,
        image: 'https://mobileplanet.ua/uploads/small/xiaomi-mi-tv-uhd-4s-55-international-edi-148104_4.jpg.pagespeed.ce.AJ8nr_P34Z.jpg'
    },
];

class ProductController {
    getProducts = (req, res) => {
        return res.json(products);
    };
    getProduct = (req, res) => {
        const { id } = req.params;
        const product = products.find(product => product.id === id);
        return res.json(product);
    };
}

module.exports = new ProductController();