<template>
  <LayoutBasic>
    <div class="home font-semibold" @click="show = true">+ Add New Item</div>
    <div class="font-semibold">Incomplete</div>

    <TaskComponent
      v-for="task of getInComplete"
      :key="task.id"
      v-bind="task"
      @toggle-check="toggleCompleted"
    ></TaskComponent>
    <div class="font-semibold">Completed</div>

    <TaskComponent
      v-for="task of getCompleted"
      :key="task.id"
      v-bind="task"
    ></TaskComponent>
    <ModalComponent v-if="show" @close="show = false" @save="saveModal">
      <template v-slot:header>
        <h3>Add a task</h3>
      </template>
      <template v-slot:body>
        <textarea
          name="title"
          placeholder="title"
          v-model="form.title"
          class="block w-full p-3"
        />
        <label>
          Deadline :
          <input type="date" v-model="form.deadline" class="w-full" />
        </label>
      </template>
    </ModalComponent>
  </LayoutBasic>
</template>

<script>
// @ is an alias to /src
import LayoutBasic from "@/components/layouts/basic.vue";
import TaskComponent from "../components/TaskComponent.vue";
import ModalComponent from "../components/Modal.vue";
import { useToast } from "vue-toastification";

export default {
  name: "Task",
  setup() {
    // Get toast interface
    const toast = useToast();
    return { toast };
  },
  components: {
    LayoutBasic,
    TaskComponent,
    ModalComponent,
  },
  data() {
    return {
      form: { title: "", deadline: "" },
      show: false,
      tasks: [
        { completed: true, title: "call ralph", deadline: "2021-12-06", id: 1 },
        { completed: true, title: "call ralph", deadline: "2021-12-06", id: 5 },
        { completed: true, title: "call ralph", deadline: "2021-12-06", id: 6 },
        {
          completed: false,
          title: "call ralph",
          deadline: "2021-12-06",
          id: 7,
        },
        { completed: true, title: "call zion", deadline: "2021-12-08", id: 2 },
        { completed: true, title: "call ralph", deadline: "2021-12-07", id: 3 },
        { completed: false, title: "call zion", deadline: "2021-12-07", id: 4 },
      ],
    };
  },
  methods: {
    saveModal() {
      if (!this.form.title || !this.form.deadline) {
        return;
      }
      this.tasks.push({
        title: this.form.title,
        deadline: this.form.deadline,
        id: Math.random(),
        completed: false,
      });
      this.show = false;
    },
    toggleCompleted(details) {
      let ind = this.tasks.findIndex((item) => item.id == details);
      this.tasks[ind].completed = true;
    },
  },
  computed: {
    posts() {
      return this.$store.state.tasks;
    },
    getCompleted() {
      return this.tasks.filter((task) => task.completed);
    },
    getInComplete() {
      return this.tasks.filter((task) => !task.completed);
    },
  },
  created() {
    this.tasks.map((task) => {
      if (
        !task.completed &&
        new Date(task.deadline).toDateString() === new Date().toDateString()
      ) {
        this.toast.info(task.title + " " + task.deadline);
      }
    });
    this.$store.dispatch("getTasks");
  },
};
</script>
