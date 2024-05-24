const baseUrl = () => {
    if(import.meta.env.NODE_ENV === 'development') {
        return 'http://localhost:3000/'
    } else {
        return 'https://cek-username.vercel.app/'
    }
}

const ApiData = [
    {
        id: 1,
        name: 'Game Nickname Validator',
        desc: 'Terdapat lebih dari 10+ game yang dapat anda validasikan usernamenya disini',
        url: baseUrl + 'game',
        link: '/game',
        banner: "https://telegra.ph/file/839443d270c6ee419dad4.jpg"
    },
    {
        id: 2,
        name: 'E-Wallet Username Validator',
        desc: 'Cek Username E-Walletmu dengan mudah di sini',
        url: baseUrl + 'e-wallet',
        link: 'ewallet',
        banner: "https://console.kr-asia.com/wp-content/uploads/2020/07/Indonesia_mobile_wallet.png"
    },
    {
        id: 3,
        name: 'Rekening Bank Checker',
        desc: 'Puluhan Bank di Indonesia dapat anda cek disini ',
        url: baseUrl + 'bank',
        link: '/bank',
        banner: "https://th.bing.com/th/id/OIP.rftgwUfK7VYtfLiLGZ_KBAHaE8?rs=1&pid=ImgDetMain"
    },
    {
        id: 4,
        name: 'Cek Nama Pelanggan Listrik',
        desc: 'Cek nama pengguna layanan listrik PLN',
        url: baseUrl + 'pln',
        link: '/pln',
        banner: "https://cdn-brilio-net.akamaized.net/news/2022/06/14/231356/5-cara-cek-nomor-token-listrik-via-online-bisa-lewat-pln-mobile-220614i.jpg"
    }
]

export default ApiData