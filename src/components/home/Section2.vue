<script setup>
import naming from '@/assets/img/naming.png'
import identidadMarca from '@/assets/img/identidad-marca.png'
import lookFeel from '@/assets/img/look-feel.png'
</script>

<template>
    <div class="main d-flex align-items-center">
        <section class="container text-center py-5">
            <h2 class="text-uppercase fw-bold mb-4">Qué hacemos</h2>
            <p class="mb-5 fs-5">
                Te ayudamos a crear la personalidad de tu empresa. Con nuestra asesoría 360 podrás tener identidad
                visual, tono de comunicación y lenguaje sin importar el tipo de negocio que tengas, te asesoramos en:
            </p>
            <div class="row">
                <div class="col-md-4 mb-4">
                    <img :src="naming" alt="Naming Icon" class="mb-2" />
                    <h4>NAMING</h4>
                </div>
                <div class="col-md-4 mb-4">
                    <img :src="identidadMarca" alt="Identidad de Marca Icon" class="mb-2" />
                    <h4>IDENTIDAD DE MARCA</h4>
                </div>
                <div class="col-md-4 mb-4">
                    <img :src="lookFeel" alt="Look&Feel Digital Icon" class="mb-2" />
                    <h4>LOOK&FEEL DIGITAL</h4>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.main {
    min-height: 50vh;
    background-color: #ffe610;

    img {
        max-height: 10rem;
    }
}
</style>
