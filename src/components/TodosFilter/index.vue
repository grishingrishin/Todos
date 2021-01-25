<template>
    <ul class="todos__filters" aria-label="Todos list some filter">
        <FilterItem v-for="(filter, index) in getFilterTypes" :key="index" :filter="filter" />
    </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import FilterItem from './FilterItem.vue';

export default {
    name: 'TodoFilter',
    components: {
        FilterItem,
    },
    methods: {
        ...mapActions(['sortBy']),
    },
    computed: {
        ...mapGetters(['getFilterTypes']),
    },
};
</script>

<style lang="scss">
.todos {
    &__filters {
        display: flex;
        margin-top: 1em;
        flex-wrap: wrap;
        align-items: center;
    }
}
</style>
