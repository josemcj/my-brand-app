<script setup>
import { inject, ref, onMounted } from 'vue'
import { useDates } from '@/composables/useDates'
import ContactAPI from '@/api/Contact'

const $loading = inject('$loading')

const contactData = ref([])
const isLoading = ref(false)
const isUpdating = ref(false)

const tableFields = ref([
    {
        key: 'name',
        label: 'Nombre',
    },
    {
        key: 'email',
        label: 'Correo electrónico',
    },
    {
        key: 'message',
        label: 'Mensaje',
    },
    {
        key: 'ip',
        label: 'IP',
    },
    {
        key: 'created_at',
        label: 'Fecha',
    },
    {
        key: 'actions',
        label: 'Acciones',
    },
])

const form = ref({
    id: '',
    name: '',
    email: '',
    message: '',
    ip: '192.158.214.5',
})

const getContactData = async () => {
    const loader = $loading.show()
    contactData.value = await ContactAPI.list()
    loader.hide()
}

const handleUpdate = (item) => {
    isUpdating.value = true
    form.value.id = item.id
    form.value.name = item.name
    form.value.email = item.email
    form.value.message = item.message
}

const handleDelete = async (item) => {
    const response = await ContactAPI.delete(item.id)
    getContactData()
}

const onSubmit = async () => {
    isLoading.value = true
    const response = await ContactAPI.update(form.value.id, form.value)
    isLoading.value = false
    isUpdating.value = false

    getContactData()
}

onMounted(() => {
    getContactData()
})
</script>

<template>
    <div class="container my-5">
        <h1>Administra los datos de contacto</h1>

        <div v-if="isUpdating" class="d-flex justify-content-center my-5">
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
                    {{ isLoading ? 'Guardando...' : 'Guardar' }}
                </button>
                <button type="button" class="btn btn-outline-dark text-uppercase ms-2" @click="isUpdating = false">
                    Cancelar
                </button>
            </form>
        </div>

        <div class="table-responsive">
            <b-table striped hover :fields="tableFields" :items="contactData" class="my-4">
                <template #cell(created_at)="data">
                    {{ useDates().format(data.item.created_at) }}
                </template>
                <template #cell(actions)="data">
                    <div class="d-flex gap-2">
                        <b-button @click="handleUpdate(data.item)">
                            <font-awesome-icon :icon="['fas', 'pen-to-square']" />
                        </b-button>
                        <b-button :variant="'danger'" @click="handleDelete(data.item)">
                            <font-awesome-icon :icon="['fas', 'trash']" />
                        </b-button>
                    </div>
                </template>
            </b-table>
        </div>
    </div>
</template>
