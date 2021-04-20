var app = new Vue({    
    
    el: '#root',
    data: {
        activeImage: 0,
        carouselImages: [
            'img/campagna.jpg',
            'img/cascate.webp',
            'img/fiori.jpeg',
            'img/montagne.webp',
        ],
    },
    methods: {
        nextPhoto() {
            const nextImage = this.activeImage + 1;

            if( nextImage > this.carouselImages.length -1 ) {
                this.activeImage = 0;
            } else {
                this.activeImage = nextImage;
            }
        },

        prevPhoto() {
            const prevImage = this.activeImage - 1;

            if( prevImage < 0 ) {
                this.activeImage = this.carouselImages.length - 1;
            } else {
                this.activeImage = prevImage;
            }
        }

    }
    
});