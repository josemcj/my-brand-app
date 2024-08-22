<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/useAuthStore'
import Alert from '@/components/Alert.vue'

const router = useRouter()
const auth = useAuthStore()
const $loading = inject('$loading')

const alert = ref({
    show: false,
    className: '',
    message: '',
})

const form = ref({
    email: '',
    password: '',
})

const onSubmit = async () => {
    const loader = $loading.show()
    await auth.login(form.value)
    loader.hide()

    if (auth.isLoggedUser()) {
        router.push('/admin')
    } else {
        alert.value.show = true
        alert.value.className = 'alert-danger w-100'
        alert.value.message = auth.error()
    }
}
</script>

<template>
    <main class="container bg-light min-vw-100 min-vh-100 d-flex justify-content-center align-items-center">
        <div class="shadow-lg col-md-5 col-lg-3 bg-white p-4 p-md-5 rounded-5 d-flex flex-column align-items-center">
            <h2 class="fw-bolder mb-3">My Brand</h2>
            <p class="text-secondary">Iniciar sesión</p>

            <form @submit.prevent="onSubmit" id="login-form" class="w-100 my-4">
                <Alert v-if="alert.show" :alertClass="alert.className" :message="alert.message" />

                <div class="form-floating mb-3">
                    <input
                        type="text"
                        class="form-control"
                        id="login-usuario"
                        name="Email"
                        placeholder="Email"
                        v-model="form.email"
                    />
                    <label for="login-usuario">Email</label>
                </div>
                <div class="input-group mb-3">
                    <div class="form-floating flex-grow-1">
                        <input
                            type="password"
                            class="form-control"
                            id="login-password"
                            name="Password"
                            placeholder="Contraseña"
                            v-model="form.password"
                        />
                        <label for="login-password">Contraseña</label>
                    </div>
                    <button id="show_password" class="btn btn-primary" type="button">
                        <font-awesome-icon :icon="['fas', 'eye']" />
                    </button>
                </div>
                <input
                    id="btn-login"
                    class="btn btn-primary fw-medium w-100 p-3 mt-3"
                    type="submit"
                    value="Iniciar sesión"
                />
            </form>
        </div>
    </main>
</template>
