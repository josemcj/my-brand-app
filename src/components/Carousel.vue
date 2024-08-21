<script setup>
import { ref } from 'vue'

const props = defineProps({
    slides: {
        type: Array,
        required: true,
    },
})

const currentIndex = ref(0)

const nextSlide = () => {
    if (currentIndex.value < props.slides.length - 1) {
        currentIndex.value++
    } else {
        currentIndex.value = 0
    }
}

const prevSlide = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--
    } else {
        currentIndex.value = props.slides.length - 1
    }
}
</script>

<template>
    <div class="carousel">
        <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div v-for="(slide, index) in slides" :key="index" class="carousel-item">
                <img :src="slide.src" :alt="slide.alt" />
            </div>
        </div>
        <button class="prev" @click="prevSlide">Prev</button>
        <button class="next" @click="nextSlide">Next</button>
    </div>
</template>

<style scoped>
.carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 600px;
    margin: auto;
}

.carousel-inner {
    display: flex;
    transition: transform 0.5s ease;
}

.carousel-item {
    min-width: 100%;
    box-sizing: border-box;
}

img {
    width: 100%;
    display: block;
}

button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
}

.prev {
    left: 10px;
}

.next {
    right: 10px;
}
</style>
