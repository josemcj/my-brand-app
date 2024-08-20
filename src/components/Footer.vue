<script setup>
import myBrandLogo from '@/assets/img/mybrand2-02.svg'
</script>

<template>
    <footer class="container py-4 mt-3">
        <div class="row">
            <div class="col-12 col-md-5 d-flex flex-column align-items-center align-items-md-start my-3">
                <img :src="myBrandLogo" alt="mybrand logo" class="mb-2" style="max-width: 150px" />
                <p class="text-center text-md-start m-0">Derechos Reservados 2021</p>
            </div>

            <div class="col-12 col-md-5 text-center my-3">
                <p class="mb-1">Tel.: 55 55 55 55 55</p>
                <p class="mb-1">Mail: hola@mybrand.com</p>
                <p class="mb-0"><a href="#" class="text-dark">Aviso de Privacidad</a></p>
            </div>

            <div class="col-12 col-md-2 text-center my-3">
                <a href="#" class="text-dark me-3">
                    <font-awesome-icon :icon="['fab', 'facebook-f']" class="fa-xl text-black mx-2" />
                </a>
                <a href="#" class="text-dark">
                    <font-awesome-icon :icon="['fab', 'instagram']" class="fa-xl text-black mx-2" />
                </a>
            </div>
        </div>
    </footer>
</template>
