<script>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="container-fluid mt-4 mb-4">
        <div class="card shadow-lg">
            <div class="card-header d-inline-flex justify-content-between">
                <h5 class="text-muted">Igrejas da Região</h5>
                <RouterLink class="btn btn-sm btn-success" to="/churches/new"><i
                        class="bi bi-plus-circle me-2"></i>Cadastrar Igreja</RouterLink>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>John</td>
                                <td>Doe</td>
                                <td>@social</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <div class="card-footer">
                footer
            </div>
        </div>
    </div>
</template>

<style scoped></style>