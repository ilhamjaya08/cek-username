const baseUrl = () => {
    if(process.env.NODE_ENV === 'production') {
        return 'https://cek-username.vercel.app/api/'
    } else {
        return 'http://localhost:3000/api/'
    }
}

export const ApiData = [
    {
        id: 1,
        name: 'Game Nickname Validator',
        url: baseUrl + 'game',
    },
    {
        id: 2,
        name: 'E-Wallet Username Validator',
        url: baseUrl + 'e-wallet',
    },
    {
        id: 3,
        name: 'Rekening Bank Checker',
        url: baseUrl + 'bank',
    },
    {
        id: 4,
        name: 'Cek Nama Pelanggan Listrik',
        url: baseUrl + 'pln',
    }
]