<script setup>
import lightbulbDesigns from '@/assets/img/lightbulb-designs.png'
</script>

<template>
    <section class="py-5 bg-black" id="nosotros">
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-12 col-md-6 text-container">
                    <h2 class="text-uppercase fw-bold text-white mb-5">Nosotros</h2>

                    <p class="text-white fs-5 mb-4">
                        Nos apasiona encontrar la esencia de las marcas y transmitirla hacia su público.
                    </p>
                    <p class="text-white fs-5 mb-4">
                        Sabemos que a través de un logo, un slogan, los mensajes que lanzamos y todo lo que se asocia
                        con cada marca deja una huella en la mente y en el corazón del espectador, logrando que se
                        identifique y nos haga parte de su mundo.
                    </p>
                    <p class="text-white fs-5">
                        Así, nos reunimos en este laboratorio de ideas un grupo de profesionales que dedican su vida a
                        esto: encontrar qué es lo que hace a tu marca ser única.
                    </p>
                </div>

                <div class="col-12 col-md-6 d-flex justify-content-center">
                    <div class="position-relative">
                        <div
                            class="position-absolute top-0 end-0 w-100 h-100 z-2"
                            style="background-color: #ffde00; transform: translate(10%, -5%)"
                        ></div>
                        <img
                            :src="lightbulbDesigns"
                            alt="lightbulb designs image"
                            class="img-fluid position-relative z-3"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.text-container {
    margin-bottom: 3rem;

    @media (min-width: 768px) {
        margin-top: 0;
    }
}

img {
    max-height: 25rem;
}
</style>
