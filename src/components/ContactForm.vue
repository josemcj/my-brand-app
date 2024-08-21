<script setup>
import contactoImg from '@/assets/img/contacto.png'
</script>

<template>
    <div class="container bg-white">
        <div class="row">
            <div class="col-12 col-md-6 d-flex align-items-center justify-content-end p-0">
                <img :src="contactoImg" class="img-fluid" alt="Imagen de contacto" />
            </div>
            <div class="col-12 col-md-6 d-flex align-items-center justify-content-center border p-3">
                <form class="w-75">
                    <div class="mb-4">
                        <label for="name" class="form-label">Nombre</label>
                        <input type="text" class="form-control bg-secondary-subtle" id="name" />
                    </div>
                    <div class="mb-4">
                        <label for="email" class="form-label">Correo electrónico</label>
                        <input type="email" class="form-control bg-secondary-subtle" id="email" />
                    </div>
                    <div class="mb-4">
                        <label for="message" class="form-label">Mensaje</label>
                        <textarea class="form-control bg-secondary-subtle" id="message" rows="4"></textarea>
                    </div>
                    <button type="submit" class="btn btn-outline-dark text-uppercase btn-submit">Enviar</button>
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
