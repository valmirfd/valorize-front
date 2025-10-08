<script>

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ChurchFormInputs',

    props: {
        church: {
            type: Object,
            required: true
        }
    },
    setup() {
        const situacaoOptions = ref([
            { value: 'sede', label: 'Sede' },
            { value: 'filial', label: 'Filial' },
        ]);

        return { situacaoOptions }
    }
});

</script>

<template>

    <div class="mb-2">
        <label for="nome" class="form-label">Nome</label>
        <input type="text" class="form-control" id="nome" v-model="church.nome">
    </div>

    <div class="mb-2">
        <label for="telefone" class="form-label">Telefone</label>
        <input type="text" class="form-control" id="telefone" v-model="church.telefone">
    </div>

    <div class="mb-2">
        <label for="cnpj" class="form-label">CNPJ</label>
        <input type="text" class="form-control" id="cnpj" v-model="church.cnpj">
    </div>

    <div class="mb-2">
        <label for="situacao" class="form-label">Escolha a situação</label>
        <select class="form-select" id="situacao" v-model="church.situacao">
            <option v-for="option in situacaoOptions" :key="option.value" :value="option.value">
                {{ option.label }}
            </option>
        </select>
    </div>

</template>

<style scoped></style>