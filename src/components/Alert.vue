<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
    alertClass: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    dismiss: Number,
})

const show = ref(true)

onMounted(() => {
    if (props.dismiss) {
        setTimeout(() => {
            show.value = false
        }, props.dismiss)
    }
})
</script>

<template>
    <div v-if="show" :class="['alert', alertClass, 'text-center']" role="alert">
        {{ message }}
    </div>
</template>
