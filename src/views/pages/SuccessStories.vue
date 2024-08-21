<script setup>
import { ref } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Section1 from '@/components/success-stories/Section1.vue'
import Section2 from '@/components/success-stories/Section2.vue'
import ContactForm from '@/components/ContactForm.vue'

const title = ref('Abosolook')
</script>

<template>
    <Header />
    <div class="mt-5 py-5 background-plus">
        <div class="container">
            <div class="text-uppercase">
                <a href="/" class="link-offset-2 link-underline link-underline-opacity-0 text-dark">
                    <span>Inicio</span>
                </a>
                >
                <span>Casos de éxito</span>
            </div>

            <h1 class="my-5">{{ title }}</h1>
        </div>

        <Section1 />
        <Section2 />

        <div class="container py-5">
            <div class="fs-1 text-center mb-3">
                "El significado de un logo deriva de la calidad de aquello que simboliza"
            </div>
            <div class="fs-3 text-center">- Paul Rand</div>

            <ContactForm class="my-5" />
        </div>
    </div>
    <Footer />
</template>

<style lang="scss" scoped>
.background-plus {
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
