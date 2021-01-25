<template>
    <li class="todos__filter">
        <button type="button" @click="sortBy(filter.type)">
            <i class="fas fa-check" :aria-label="`Get sort list by ${filter.type}`" v-if="filter.selected"></i>
        </button>
        {{ filter.label }}
    </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'TodosFilter',
    props: {
        filter: {
            type: Object,
            default: () => ({}),
        },
    },
    methods: {
        ...mapActions(['sortBy']),
    },
};
</script>

<style lang="scss">
.todos {
    &__filter {
        display: inline-flex;
        margin-right: 28px;
        padding: 8px 0;
        align-items: center;
        font-size: 0.8em;

        button {
            width: 20px;
            height: 20px;
            margin-right: 6px;
            border: 1px solid #000;
            border-radius: 4px;

            i {
                font-size: 0.8em;
                line-height: 16px;
            }
        }
    }
}
</style>
