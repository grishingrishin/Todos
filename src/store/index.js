import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todos: [
        ],
        currentPage: 0,
        size: 3,
        filter: '',
        filterTypes: [
            {
                type: 'name',
                selected: false,
                label: 'Sort by name',
            },
            {
                type: 'email',
                selected: false,
                label: 'Sort by email',
            },
            {
                type: 'completed',
                selected: false,
                label: 'Sort by completed',
            },
            {
                type: 'uncompleted',
                selected: false,
                label: 'Sort by uncomleted',
            },
        ],
    },
    getters: {
        getTodos: (state, getters) => {
            const { todos } = state;

            const { sortByName, sortByEmail, sortByDoneStatus, sortByUndoneStatus } = getters;

            let sort = null;

            //   return state.todos;
            switch (state.filter) {
                case 'name':
                    sort = sortByName;
                    break;
                case 'email':
                    sort = sortByEmail;
                    break;
                case 'completed':
                    sort = sortByDoneStatus;
                    break;
                case 'uncompleted':
                    sort = sortByUndoneStatus;
                    break;
                default:
                    sort = todos;
            }

            return sort;
        },
        sortByName: state => {
            return [...state.todos].sort((a, b) => (a.name < b.name ? -1 : 1));
        },
        sortByEmail: state => {
            return [...state.todos].sort((a, b) => (a.email < b.email ? -1 : 1));
        },
        sortByDoneStatus: state => {
            return state.todos.filter(a => a.isCompleted);
        },
        sortByUndoneStatus: state => {
            return state.todos.filter(a => !a.isCompleted);
        },
        pageNumber: state => {
            return state.currentPage;
        },
        pageCount: (state, getters) => {
            const { size } = state;
            const { getTodos } = getters;
            const length = getTodos.length;

            return Math.ceil(length / size);
        },
        paginatedData: (state, getters) => {
            const { currentPage, size } = state;
            const { getTodos } = getters;

            const start = currentPage * size;
            const end = start + size;

            return getTodos.slice(start, end);
        },
        getFilterTypes: state => {
            return state.filterTypes;
        },
    },
    mutations: {
        addTask(state, todo) {
            state.todos.unshift(todo);
        },
        delTask(state, id) {
            state.todos = state.todos.filter(todo => todo.id !== id);
        },
        setCompleted(state, id) {
            state.todos = state.todos.map(todo => {
                if (todo.id === id) todo.isCompleted = true;
                return todo;
            });
        },
        incrementPage(state) {
            state.currentPage++;
        },
        decrimentPage(state) {
            state.currentPage--;
        },
        setFilter(state, type) {
            if (state.filter === type) {
                state.filter = '';
            } else {
                state.filter = type;
            }

            state.filterTypes = state.filterTypes.map(filter => {
                if (filter.type === type && !filter.selected) {
                    filter.selected = true;
                } else {
                    filter.selected = false;
                }

                return filter;
            });
        },
    },
    actions: {
        addTaskInTodos({ commit }, todo) {
            commit('addTask', todo);
        },
        delTaskFromTodos({ commit }, id) {
            commit('delTask', id);
        },
        finishedTask({ commit }, id) {
            commit('setCompleted', id);
        },
        nextPage({ commit }) {
            commit('incrementPage');
        },
        previousPage({ commit }) {
            commit('decrimentPage');
        },
        sortBy({ commit }, type) {
            commit('setFilter', type);
        },
    },
});

export default store;
