<template>
  <div class="block | w-full | overflow-x-auto">
    <table class="table-striped | w-full">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Lastname</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
          <th>Company</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="`user-${user.username}`">
          <td>{{ user.id }}</td>
          <td>{{ setFirstName(user.name) }}</td>
          <td>{{ setLastName(user.name) }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ setFullAddress(user.address) }}</td>
          <td>{{ user.company.name }}</td>
          <td>
            <router-link
              class="text-cornflower-blue hover:underline"
              :to="{ name: 'UserTodos', params: { userId: user.id } }"
            >
              View todos
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'UsersList',
  computed: {
    ...mapState('users', ['users'])
  },
  methods: {
    setFirstName(val) {
      const firstName = val.split(' ')[0];
      return firstName;
    },
    setLastName(val) {
      const lastName = val.split(' ')[1];
      return lastName;
    },
    setFullAddress(val) {
      const fullAddress = `${val.street} - ${val.suite}, ${val.city}, ${val.zipcode}`;
      return fullAddress;
    }
  }
};
</script>