<script setup>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
import myBrandLogo from '@/assets/img/mybrand2-02.svg'
</script>

<template>
    <footer class="container py-4">
        <div class="row">
            <div class="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-start">
                <img :src="myBrandLogo" alt="mybrand logo" class="mb-2" style="max-width: 150px" />
                <p class="text-center text-md-start m-0">Derechos Reservados 2021</p>
            </div>

            <div class="col-12 col-md-5 text-center">
                <p class="mb-1">Tel.: 55 55 55 55 55</p>
                <p class="mb-1">Mail: hola@mybrand.com</p>
                <p class="mb-0"><a href="#" class="text-dark">Aviso de Privacidad</a></p>
            </div>

            <div class="col-12 col-md-2 d-flex justify-content-center justify-content-md-end align-items-center">
                <a href="#" class="text-dark me-3">
                    <!-- <font-awesome-icon :icon="['fab', 'facebook-f']" />
                    <FontAwesomeIcon :icon="byPrefixAndName.fas['house']" /> -->
                </a>
                <a href="#" class="text-dark">
                    <!-- <i class="fab fa-instagram fa-2x"></i> -->
                </a>
            </div>
        </div>
    </footer>
</template>
