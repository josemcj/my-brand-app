<script setup>
import img1 from '@/assets/img/abosolook/abosolook_1.png'
import img2 from '@/assets/img/abosolook/abosolook_2.png'
import img3 from '@/assets/img/abosolook/abosolook_3.png'
import img4 from '@/assets/img/abosolook/abosolook_4.png'
import img5 from '@/assets/img/abosolook/abosolook_5.png'
import img6 from '@/assets/img/abosolook/abosolook_6.png'
</script>

<template>
    <section class="py-5">
        <div class="container">
            <h2 class="fw-bold text-uppercase text-center">Presentamos</h2>

            <p class="text-center my-5">
                Suaves líneas que transmiten confianza para quien decide cambiar su imagen, con un estilo fresco y audaz
                que transmita seguridad a quien transforma absolutamente su look.
            </p>
        </div>

        <div class="images">
            <div class="row">
                <div class="col">
                    <img :src="img1" alt="Abosolook img 1" class="img-fluid w-100" />
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <img :src="img2" alt="Abosolook img 2" class="img-fluid w-100" />
                </div>
                <div class="col">
                    <img :src="img3" alt="Abosolook img 3" class="img-fluid w-100" />
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <img :src="img4" alt="Abosolook img 4" class="img-fluid w-100" />
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <img :src="img5" alt="Abosolook img 5" class="img-fluid w-100" />
                </div>
                <div class="col">
                    <img :src="img6" alt="Abosolook img 6" class="img-fluid w-100" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.images,
.row,
.col {
    margin: 0 !important;
    padding: 0 !important;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
