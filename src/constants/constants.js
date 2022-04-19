import LoginForm from "../views/auth/login";
import Home from "../views/auth/home";
import { HomeOutlined } from "@ant-design/icons";

export const jwtKey = "sample_test";
export const tokenKey = "ST";
export const encodedToken = { value: null };
export const decodedToken = { value: null };

export const theRoutes = [
  {
    key: "login",
    name: "Login",
    path: "/login",
    for: ["admin", "user"],
    component: LoginForm,
  },
  {
    key: "home",
    name: "Home",
    path: "/home",
    for: ["admin"],
    component: Home,
  },
];

export const theSubMenu = [
  {
    key: "home",
    title: "Home",
    icon: <HomeOutlined />,
    for: ["admin"],
  },
];

const d = {
  rates: {
    btc: { name: "Bitcoin", unit: "BTC", value: 1.0, type: "crypto" },
    eth: { name: "Ether", unit: "ETH", value: 13.363, type: "crypto" },
    ltc: { name: "Litecoin", unit: "LTC", value: 366.262, type: "crypto" },
    bch: { name: "Bitcoin Cash", unit: "BCH", value: 121.772, type: "crypto" },
    bnb: { name: "Binance Coin", unit: "BNB", value: 97.319, type: "crypto" },
    eos: { name: "EOS", unit: "EOS", value: 16677.747, type: "crypto" },
    xrp: { name: "XRP", unit: "XRP", value: 53209.148, type: "crypto" },
    xlm: { name: "Lumens", unit: "XLM", value: 200644.817, type: "crypto" },
    link: { name: "Chainlink", unit: "LINK", value: 2892.347, type: "crypto" },
    dot: { name: "Polkadot", unit: "DOT", value: 2224.85, type: "crypto" },
    yfi: { name: "Yearn.finance", unit: "YFI", value: 2.134, type: "crypto" },
    usd: { name: "US Dollar", unit: "$", value: 40885.229, type: "fiat" },
    aed: {
      name: "United Arab Emirates Dirham",
      unit: "DH",
      value: 150171.449,
      type: "fiat",
    },
    ars: {
      name: "Argentine Peso",
      unit: "$",
      value: 4648930.915,
      type: "fiat",
    },
    aud: {
      name: "Australian Dollar",
      unit: "A$",
      value: 55494.544,
      type: "fiat",
    },
    bdt: {
      name: "Bangladeshi Taka",
      unit: "৳",
      value: 3571845.102,
      type: "fiat",
    },
    bhd: { name: "Bahraini Dinar", unit: "BD", value: 15415.735, type: "fiat" },
    bmd: {
      name: "Bermudian Dollar",
      unit: "$",
      value: 40885.229,
      type: "fiat",
    },
    brl: { name: "Brazil Real", unit: "R$", value: 190091.788, type: "fiat" },
    cad: {
      name: "Canadian Dollar",
      unit: "CA$",
      value: 51586.979,
      type: "fiat",
    },
    chf: { name: "Swiss Franc", unit: "Fr.", value: 38637.441, type: "fiat" },
    clp: {
      name: "Chilean Peso",
      unit: "CLP$",
      value: 33242962.782,
      type: "fiat",
    },
    cny: { name: "Chinese Yuan", unit: "¥", value: 261170.76, type: "fiat" },
    czk: { name: "Czech Koruna", unit: "Kč", value: 924561.868, type: "fiat" },
    dkk: { name: "Danish Krone", unit: "kr.", value: 281572.776, type: "fiat" },
    eur: { name: "Euro", unit: "€", value: 37850.074, type: "fiat" },
    gbp: {
      name: "British Pound Sterling",
      unit: "£",
      value: 31395.073,
      type: "fiat",
    },
    hkd: {
      name: "Hong Kong Dollar",
      unit: "HK$",
      value: 320558.601,
      type: "fiat",
    },
    huf: {
      name: "Hungarian Forint",
      unit: "Ft",
      value: 14163069.603,
      type: "fiat",
    },
    idr: {
      name: "Indonesian Rupiah",
      unit: "Rp",
      value: 586535420.6,
      type: "fiat",
    },
    ils: {
      name: "Israeli New Shekel",
      unit: "₪",
      value: 132605.355,
      type: "fiat",
    },
    inr: { name: "Indian Rupee", unit: "₹", value: 3124561.585, type: "fiat" },
    jpy: { name: "Japanese Yen", unit: "¥", value: 5238414.248, type: "fiat" },
    krw: {
      name: "South Korean Won",
      unit: "₩",
      value: 50696447.85,
      type: "fiat",
    },
    kwd: { name: "Kuwaiti Dinar", unit: "KD", value: 12491.705, type: "fiat" },
    lkr: {
      name: "Sri Lankan Rupee",
      unit: "Rs",
      value: 13332102.121,
      type: "fiat",
    },
    mmk: { name: "Burmese Kyat", unit: "K", value: 76433564.99, type: "fiat" },
    mxn: { name: "Mexican Peso", unit: "MX$", value: 812647.096, type: "fiat" },
    myr: {
      name: "Malaysian Ringgit",
      unit: "RM",
      value: 173946.21,
      type: "fiat",
    },
    ngn: {
      name: "Nigerian Naira",
      unit: "₦",
      value: 17015667.831,
      type: "fiat",
    },
    nok: {
      name: "Norwegian Krone",
      unit: "kr",
      value: 360449.134,
      type: "fiat",
    },
    nzd: {
      name: "New Zealand Dollar",
      unit: "NZ$",
      value: 60626.745,
      type: "fiat",
    },
    php: {
      name: "Philippine Peso",
      unit: "₱",
      value: 2144839.327,
      type: "fiat",
    },
    pkr: {
      name: "Pakistani Rupee",
      unit: "₨",
      value: 7497726.245,
      type: "fiat",
    },
    pln: { name: "Polish Zloty", unit: "zł", value: 176226.216, type: "fiat" },
    rub: { name: "Russian Ruble", unit: "₽", value: 3243220.703, type: "fiat" },
    sar: { name: "Saudi Riyal", unit: "SR", value: 153324.027, type: "fiat" },
    sek: { name: "Swedish Krona", unit: "kr", value: 391436.213, type: "fiat" },
    sgd: {
      name: "Singapore Dollar",
      unit: "S$",
      value: 55876.658,
      type: "fiat",
    },
    thb: { name: "Thai Baht", unit: "฿", value: 1378803.682, type: "fiat" },
    try: { name: "Turkish Lira", unit: "₺", value: 599557.366, type: "fiat" },
    twd: {
      name: "New Taiwan Dollar",
      unit: "NT$",
      value: 1196886.487,
      type: "fiat",
    },
    uah: {
      name: "Ukrainian hryvnia",
      unit: "₴",
      value: 1207651.527,
      type: "fiat",
    },
    vef: {
      name: "Venezuelan bolívar fuerte",
      unit: "Bs.F",
      value: 4093.838,
      type: "fiat",
    },
    vnd: {
      name: "Vietnamese đồng",
      unit: "₫",
      value: 938418240.844,
      type: "fiat",
    },
    zar: {
      name: "South African Rand",
      unit: "R",
      value: 607119.948,
      type: "fiat",
    },
    xdr: {
      name: "IMF Special Drawing Rights",
      unit: "XDR",
      value: 29681.491,
      type: "fiat",
    },
    xag: {
      name: "Silver - Troy Ounce",
      unit: "XAG",
      value: 1574.78,
      type: "commodity",
    },
    xau: {
      name: "Gold - Troy Ounce",
      unit: "XAU",
      value: 20.65,
      type: "commodity",
    },
    bits: { name: "Bits", unit: "μBTC", value: 1000000.0, type: "crypto" },
    sats: { name: "Satoshi", unit: "sats", value: 100000000.0, type: "crypto" },
  },
};
