<script setup>
import logo from '@/assets/img/logo.png'
</script>

<template>
    <header>
        <div class="container">
            <nav class="navbar navbar-expand-lg bg-white">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img :src="logo" alt="Logo de la empresa" width="180px" />
                    </a>

                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link active text-uppercase" aria-current="page" href="#">Qué hacemos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-uppercase" href="#">Por qué My Brand</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-uppercase" href="#">Nosotros</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-uppercase" href="#">Contacto</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-uppercase" href="#">
                                    <font-awesome-icon :icon="['fab', 'facebook-f']" class="fa-xl text-black mx-2" />
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-uppercase" href="#">
                                    <font-awesome-icon :icon="['fab', 'instagram']" class="fa-xl text-black mx-2" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>
