<template>
  <tr class="task_card">
      <td class="task_card_checkbox"><input type="checkbox" name="" id=""></td>
      <td>Create Projectrum logo</td>
      <td>Projectrum</td>
      <td class="assignee_data"><img src="../assets/header_potrait.jpg" alt=""/> <span>Peter Jac...</span></td>
      <td>Tomorrow</td>
  </tr>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "TaskCard",
  components: {
    Icon,
  },
};
</script>

<style scoped>
.task_card td {
    padding: 0.3em;
      border: 1px solid #DCDCDC;
      color: #404040;
      cursor: pointer;
      font-size: 0.8rem;
       height: 45px;
       font-weight: 300;
}

.task_card .task_card_checkbox {
 text-align: center;
}

/* .task_card .task_card_checkbox input[type="checkbox"] {
  border: 1px solid #DCDCDC;
} */

.task_card .assignee_data {
  display: flex;
  align-items: center;
}

.task_card .assignee_data img {
  width: 35px;
  height:35px;
  border-radius: 50%;
  margin-right: 0.5em;
  cursor: pointer;
  display: block;
}



</style>