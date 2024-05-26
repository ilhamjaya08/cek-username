<script>
    import { Carousel } from 'flowbite-svelte';
    export const Images = [
        {
            alt: 'Listrik Pintarl',
            src: "https://cdn-brilio-net.akamaized.net/news/2022/06/14/231356/5-cara-cek-nomor-token-listrik-via-online-bisa-lewat-pln-mobile-220614i.jpg",
            title: 'istrik-pintar-banner'
        },
        {
            alt: 'PLN',
            src: 'https://th.bing.com/th/id/OIP.SXSscG9-FuXw0erDSqnaUwAAAA?w=474&h=284&rs=1&pid=ImgDetMain',
            title: 'pln-banner'
        }
    ]
</script>

<Carousel images={Images} duration='3000' width="50%" height="50%" />