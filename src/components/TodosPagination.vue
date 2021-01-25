<template>
    <ul class="todos__pagination">
        <li v-if="pageNumber !== 0">
            <button type="button" class="todos__prev" @click="previousPage">
                <i class="fas fa-angle-double-left" aria-label="To previuos page"></i>
            </button>
        </li>
        <li v-if="pageNumber < pageCount - 1">
            <button type="button" class="todos__next" @click="nextPage">
                <i class="fas fa-angle-double-right" aria-label="To next page"></i>
            </button>
        </li>
    </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'TodosPagination',
    methods: {
        ...mapActions(['nextPage', 'previousPage']),
    },
    computed: {
        ...mapGetters(['pageCount', 'pageNumber']),
    },
};
</script>

<style lang="scss">
.todos {
    &__pagination {
        display: flex;
        margin-top: 2em;
        align-items: center;

        li {
            &:not(:last-child) {
                margin-right: 14px;
            }
        }

        button {
            padding: 8px 14px;
        }
    }
}
</style>
