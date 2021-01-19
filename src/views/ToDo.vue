<template>
    <div class="todo">
        <p>Inserisci i tuoi task ( {{myTodoCountDone}} / {{myTodoCount}} ):</p>
        <input type="text" v-model="myTodoText"/>
        <button v-on:click="addTodo(myTodoText)">Aggiungi ToDo</button>
        <ToDoList v-bind:myTodos="myTodos"></ToDoList>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ToDoList from '@/components/ToDoList.vue'; // @ is an alias to /src
import ToDo from '@/model/ToDo';

@Component({
  components: {
    ToDoList,
  },
})
export default class ToDoView extends Vue {
    myTodoText = "";
    myTodos: Array<ToDo> = [];

    addTodo(myTodoText: string): void {

        if(myTodoText != "") {
            const myTodo = new ToDo();
            myTodo.text = myTodoText;

            this.myTodos.push(myTodo);

            this.myTodoText = "";

            alert(this.myTodos.filter((value) => value.done).length);
        }
    }

    get myTodoCount() {
        return this.myTodos.length;
    }

    get myTodoCountDone() {
        return this.myTodos.filter((value) => value.done).length;
    }
}
</script>