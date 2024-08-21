<script setup>
import megaB from '@/assets/img/mega-iconB.svg'
</script>

<template>
    <section class="py-5">
        <div class="container h-100 d-flex align-items-center">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h1 class="fw-bold mb-5">Invertir en la identidad de tu marca no es caro, no hacerlo sí lo es.</h1>

                    <p class="fs-4">
                        En mybrand planeamos, diseñamos y ejecutamos estrategias bajo una metodología comprobada para
                        encontrar la personalidad apropiada de tu marca.
                    </p>
                </div>
                <div class="col-lg-6 text-end">
                    <img :src="megaB" alt="Logo mybrand" class="img-fluid d-none d-md-block" style="max-width: 400px" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    height: 90vh;
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

    h1 {
        font-size: 3rem;
    }
}
</style>
