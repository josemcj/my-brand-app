<script setup>
import abosolook from '@/assets/img/abosolook.png'
</script>

<template>
    <section class="bg-black">
        <div class="container">
            <div class="row text-white py-5 px-3">
                <div class="col-12 col-md-6">
                    <h2 class="fw-bold text-uppercase my-3">Imaginamos</h2>

                    <p class="lh-lg mb-5">
                        Un logo en el que se mezclara el trabajo del estilista con la frescura que se vive al adoptar un
                        nuevo estilo, cuando nos reinventamos a través de un corte de cabello y el impacto es absoluto.
                    </p>

                    <h2 class="fw-bold text-uppercase my-3">Visualizamos</h2>

                    <ul>
                        <li class="lh-lg">La suavidad con la que debe tratarse a cada cliente</li>
                        <li class="lh-lg">La confianza que pone en quien lo arregla</li>
                        <li class="lh-lg">La mirada de quien se asombra ante nuestros cambios</li>
                        <li class="lh-lg">Nuestra presencia en la zona</li>
                    </ul>
                </div>

                <div class="col-12 col-md-6 d-flex justify-content-center image-container">
                    <div class="position-relative">
                        <div
                            class="position-absolute top-0 end-0 w-100 h-100 z-2"
                            style="background-color: #ffde00; transform: translate(10%, -5%)"
                        ></div>
                        <img :src="abosolook" alt="lightbulb designs image" class="img-fluid position-relative z-3" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.image-container {
    margin-top: 2rem;

    @media (min-width: 768px) {
        margin-top: 1rem;
    }
}

img {
    max-height: 14rem;

    @media (min-width: 768px) {
        max-height: 25rem;
    }
}
</style>
