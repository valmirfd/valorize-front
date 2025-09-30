<script>
import { RouterLink } from 'vue-router';

</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">

        <div class="container-fluid">

            <router-link class="navbar-brand" to="/">
                Gestão Membros
            </router-link>


            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/">
                            Home
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" to="/churches">
                            Igrejas
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" to="/members">
                            Membros
                        </router-link>
                    </li>

                    <li class="nav-item dropdown">
                        <router-link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Ações
                        </router-link>


                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" to="#">Perfil</router-link></li>
                            <li><router-link class="dropdown-item" to="#">Another action</router-link></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><router-link class="dropdown-item" to="#">Sair</router-link></li>
                        </ul>
                    </li>

                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>