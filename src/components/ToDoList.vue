<template>
    <div class="todo-list">
        <p v-if="myTodos.length > 0">I miei ToDo:</p>
        <ul id="todo-list">
            <li v-for="myTodo in myTodos" :key="myTodo.id">
                <input type="checkbox" v-model="myTodo.done"/> {{ myTodo.text }} <span v-on:click="removeTodo(myTodo)">[X]</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ToDo from '@/model/ToDo';

@Component
export default class ToDoList extends Vue {
  @Prop() private myTodos!: Array<ToDo>;

  removeTodo (itemToBeRemoved: ToDo) {
    const index = this.myTodos.indexOf(itemToBeRemoved, 0);
    if (index > -1) {
        this.myTodos.splice(index, 1);
    }
  }
}
</script>