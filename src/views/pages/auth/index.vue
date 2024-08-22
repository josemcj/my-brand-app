<script setup>
import { ref } from 'vue'

const form = ref({
    email: '',
    password: '',
    password_confirmation: '',
})
</script>

<template>
    <main class="container bg-light min-vw-100 min-vh-100 d-flex justify-content-center align-items-center">
        <div class="shadow-lg col-md-5 col-lg-3 bg-white p-4 p-md-5 rounded-5 d-flex flex-column align-items-center">
            <h2 class="fw-bolder mb-3">My Brand</h2>
            <p class="text-secondary">Iniciar sesión</p>

            <form id="login-form" class="w-100 my-4">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="login-usuario" name="Usuario" placeholder="Usuario" />
                    <label for="login-usuario">Usuario</label>
                </div>
                <div class="input-group mb-3">
                    <div class="form-floating flex-grow-1">
                        <input
                            type="password"
                            class="form-control"
                            id="login-password"
                            name="Password"
                            placeholder="Contraseña"
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
