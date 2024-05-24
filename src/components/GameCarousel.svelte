<script>
    import { Carousel } from 'flowbite-svelte';
    export const gameImages = [
        {
            alt: 'Free Fire',
            src: "https://wallpapercave.com/wp/wp7537001.jpg",
            title: 'ff-banner'
        },
        {
            alt: 'Mohile Legends',
            src: 'https://www.pockettactics.com/wp-content/uploads/2021/01/mobile-legends-wallpaper-6.jpg',
            title: 'ml-banner'
        },
        {
            alt: 'PUBG Mobile',
            src: 'https://wallpapercave.com/wp/wp5167789.jpg',
            title: 'pubg-banner'
        }
    ]
</script>

<Carousel images={gameImages} duration='3000' width="50%" height="50%" />