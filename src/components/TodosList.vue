<template>
    <div class="todos__main">
        <TodosFilter v-if="paginatedData.length" />
        <!-- End todos filter -->

        <ul class="todos__list">
            <li class="todos__item" v-for="(todo, index) in paginatedData" :key="index">
                <div class="todos__todo todo">
                    <div class="todo__meta">
                        <div class="todo__name">
                            <b>Author: {{ todo.name }}</b>
                        </div>
                        <div class="todo__email">Email: {{ todo.email }}</div>
                        <div :class="['todo__status', { completed: todo.isCompleted }]">
                            {{ todo.isCompleted ? 'Completed' : 'Uncompleted' }}
                        </div>
                    </div>
                    <!-- End todo meta -->

                    <div class="todo__title">
                        <strong>{{ todo.title }}</strong>
                    </div>

                    <div class="todo__task">
                        {{ todo.content }}
                    </div>
                    <!-- End todo task -->

                    <div class="todo__bottom">
                        <div class="todo__actions">
                            <div class="todo__action">
                                <button
                                    type="button"
                                    class="todo__complete"
                                    @click="finishedTask(todo.id)"
                                    v-if="!todo.isCompleted"
                                >
                                    <i class="fas fa-check" aria-label="Task is complete"></i>
                                </button>
                            </div>
                            <div class="todo__action">
                                <button type="button" class="todo__del" @click="delTaskFromTodos(todo.id)">
                                    <i class="far fa-trash-alt" aria-label="Delete task"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- End todo bottom -->
                </div>
                <!-- End todo content -->
            </li>
        </ul>
        <!-- End todos list -->

        <TodosPagination />
        <!-- End todos pagination -->
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TodosFilter from './TodosFilter/index.vue';
import TodosPagination from './TodosPagination.vue';

export default {
    name: 'TodosList',
    components: {
        TodosFilter,
        TodosPagination,
    },
    methods: {
        ...mapActions(['finishedTask', 'delTaskFromTodos']),
    },
    computed: {
        ...mapGetters(['paginatedData']),
    },
};
</script>

<style lang="scss">
.todos {
    &__item {
        margin-top: 2em;
    }
}

.todo {
    position: relative;

    &__name {
        margin-bottom: 0.5em;

        b {
            line-height: 32px;
        }
    }

    &__status {
        padding: 0.5em 0;

        &.completed {
            color: #00ff00;
        }

        &:not(.completed) {
            color: #ff0000;
        }
    }

    &__title {
        padding: 0.8em 0 0.5em 0;
    }

    &__bottom {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: flex-end;
        pointer-events: none;
    }

    &__actions {
        display: flex;
        align-items: center;
    }

    &__action {
        pointer-events: auto;

        button {
            width: 32px;
            height: 32px;
            border-radius: 50%;

            &:hover {
                transition: all 0.3s ease-out;
                background-color: rgba(0, 0, 0, 0.12);
            }
        }
    }
}
</style>
