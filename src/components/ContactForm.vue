<script setup>
import { onMounted, ref, watch } from 'vue'
import { useCleanObject } from '@/composables/useCleanObject'
import ContactAPI from '@/api/Contact'
import IpAPI from '@/api/IP'
import Alert from '@/components/Alert.vue'
import contactoImg from '@/assets/img/contacto.png'

const alert = ref({
    show: false,
    className: '',
    message: '',
})

const isLoading = ref(false)

const form = ref({
    name: '',
    email: '',
    message: '',
    ip: '192.158.214.5',
})

const fetchIpAddress = async () => {
    form.value.ip = await IpAPI.getIpAddress()
}

const onSubmit = async () => {
    isLoading.value = true
    const response = await ContactAPI.store(form.value)

    if (response.status === 201) {
        form.value = useCleanObject().cleanObject(form.value)

        alert.value.show = true
        alert.value.className = 'alert-success mt-4'
        alert.value.message = response.data.message
    }

    isLoading.value = false
}

onMounted(() => {
    fetchIpAddress()
})
</script>

<template>
    <div class="container bg-white">
        <div class="row">
            <div class="col-12 col-md-6 d-flex align-items-center justify-content-end p-0">
                <img :src="contactoImg" class="img-fluid" alt="Imagen de contacto" />
            </div>
            <div class="col-12 col-md-6 d-flex align-items-center justify-content-center border p-3">
                <form @submit.prevent="onSubmit" class="w-75">
                    <div class="mb-4">
                        <label for="name" class="form-label">Nombre</label>
                        <input
                            type="text"
                            v-model="form.name"
                            :disabled="isLoading"
                            class="form-control bg-secondary-subtle"
                            id="name"
                        />
                    </div>
                    <div class="mb-4">
                        <label for="email" class="form-label">Correo electrónico</label>
                        <input
                            type="email"
                            v-model="form.email"
                            :disabled="isLoading"
                            class="form-control bg-secondary-subtle"
                            id="email"
                        />
                    </div>
                    <div class="mb-4">
                        <label for="message" class="form-label">Mensaje</label>
                        <textarea
                            v-model="form.message"
                            :disabled="isLoading"
                            class="form-control bg-secondary-subtle"
                            id="message"
                            rows="4"
                        ></textarea>
                    </div>
                    <button type="submit" class="btn btn-outline-dark text-uppercase btn-submit">
                        <div v-if="isLoading" class="spinner-grow me-1" role="status" style="height: 1rem; width: 1rem">
                            <span class="visually-hidden">Cargando...</span>
                        </div>
                        {{ isLoading ? 'Enviando...' : 'Enviar' }}
                    </button>

                    <Alert v-if="alert.show" :alertClass="alert.className" :message="alert.message" :dismiss="5000" />
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
input,
textarea {
    border: none;
}

.btn-submit {
    border-radius: 0;
    padding: 0.5rem 3rem;
}
</style>
