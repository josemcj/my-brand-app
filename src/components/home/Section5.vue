<script setup>
import { onMounted, ref } from 'vue'
import ImagesAPI from '@/api/Images'
import Carousel from '@/components/Carousel.vue'

const images = ref([])

const fetchImages = async () => {
    const imgList = await ImagesAPI.list()

    const arr = imgList.map((image) => ({
        src: image.download_url,
        alt: image.author,
    }))

    images.value = arr
}

onMounted(() => {
    fetchImages()
})
</script>

<template>
    <section class="my-5">
        <h2 class="text-center">Casos de éxito</h2>

        <Carousel :slides="images" />
    </section>
</template>
