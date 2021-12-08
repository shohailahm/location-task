<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header"> New Task </slot>
        <button type="button" class="btn-close" @click="$emit('close')">
          x
        </button>
      </header>

      <section class="modal-body">
        <slot name="body"> </slot>
      </section>

      <footer class="modal-footer">
        <slot name="footer"> </slot>
        <button
          class="bg-primary hover:bg-gray hover:opacity-80 text-white font-bold focus:outline-none focus:shadow-outline rounded-full py-3 px-6 w-44"
          type="button"
          @click="$emit('save')"
        >
          Save
        </button>
        <button type="button" @click="$emit('close')"  class="my-2 text-lg">
          Cancel
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  min-width: 500px;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #000000;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>
