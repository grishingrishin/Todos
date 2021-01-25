<template>
    <section class="todos">
        <div class="todos__header">
            <h2 class="todos__title">Title</h2>
        </div>
        <form class="todos__form" ref="todoForm" @submit.prevent="addTodo">
            <div class="todos__field">
                <label for="" class="todos__label">Name</label>
                <input
                    type="text"
                    class="todos__input"
                    name="name"
                    v-model="todo.name"
                    placeholder="Enter your name"
                    required
                />
            </div>
            <div class="todos__field">
                <label for="" class="todos__label">Email</label>
                <input
                    type="text"
                    class="todos__input"
                    name="email"
                    v-model="todo.email"
                    placeholder="Enter your email"
                    required
                />
            </div>
            <div class="todos__field">
                <label for="" class="todos__label">Title</label>
                <input
                    type="text"
                    class="todos__input"
                    name="title"
                    v-model="todo.title"
                    placeholder="Enter title your task"
                    maxlength="20"
                    required
                />
            </div>
            <div class="todos__field">
                <label for="" class="todos__label">Task</label>
                <textarea
                    class="todos__textarea todos__input"
                    name="task"
                    v-model="todo.content"
                    placeholder="Enter your task"
                    required
                ></textarea>
            </div>
            <div class="todos__actions">
                <div class="todos__action">
                    <button type="submit" class="todos__submit">Submit</button>
                </div>
            </div>
        </form>
        <!-- End todos form -->

        <TodosList />
        <!-- End todos list -->
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TodosList from './TodosList.vue';

export default {
    name: 'Todos',
    components: {
        TodosList,
    },
    data() {
        return {
            todo: {
                name: '',
                email: '',
                title: '',
                content: '',
            },
        };
    },
    methods: {
        ...mapActions(['addTaskInTodos']),
        addTodo() {
            const { todo, getTodos } = this;

            const newTask = {
                ...todo,
                id: getTodos.length + 1,
                isCompleted: false,
            };

            this.addTaskInTodos(newTask);
            this.resetForm();
        },
        resetForm() {
            const { todo } = this;

            for (const key in todo) {
                todo[key] = '';
            }

            this.todo = todo;
        },
    },
    computed: {
        ...mapGetters(['getTodos']),
    },
};
</script>

<style lang="scss">
.todos {
    flex: 0 0 auto;
    width: 100%;
    max-width: 620px;
    padding: 14px;

    &__title {
        margin: 0 0 1em 0;
    }

    &__field {
        margin-bottom: 1em;
    }

    &__input {
        display: block;
        width: 100%;
        margin-top: 6px;
        padding: 6px 14px;
    }

    &__textarea {
        min-height: 8.8em;
        resize: none;
    }

    &__submit {
        padding: 8px 14px;
        text-transform: uppercase;
        font-weight: bold;
        border: 2px solid #000;
        border-radius: 5px;
    }
}
</style>
