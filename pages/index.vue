<template>
  <div>
    <navbar />
    <h1 class="title">
      bahihi
    </h1>
  </div>
</template>
<script>
import Navbar from "~/components/Navbar";
export default {
  head() {
    return {
      title: "Quản lý sức khỏe cho học sinh."
    };
  },
  components: {
    Navbar
  }
};
</script>

