<template>
  <table class="table-auto table-striped | w-full">
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="todo in userTodos" :key="`todo-${todo.title}`">
        <td>{{ todo.id }}</td>
        <td>{{ todo.title }}</td>
        <td>
          <span
            class="px-3 py-2 | rounded-md"
            :class="todo.completed ? 'bg-green-200 text-green-600' : 'bg-red-200 text-red-600'"
          >
            {{ todo.completed ? 'Completed' : 'On Process' }}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserTodos',
  props: {
    userId: {
      type: Number | String,
      required: true
    }
  },
  data() {
    return {
      userTodos: []
    };
  },
  created() {
    this.getUserTodos(this.userId);
  },
  methods: {
    getUserTodos(userId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
        .then(res => {
          this.userTodos = res.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>