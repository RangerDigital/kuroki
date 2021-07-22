<template>
  <section class="flex flex-col items-center justify-center w-screen h-screen">
    <h1 class="text-3xl">Hello from Kuroki</h1>
    <p class="my-5 text-lg">Served by CloudFlare Pages and {{ node }} Kubernetes node!</p>
  </section>
</template>

<script>
  export default {
    name: 'Hello',
    data() {
      return {
        node: 'Unknown',
      };
    },
    methods: {
      getNode() {
        this.axios
          .get('/status')
          .then((payload) => {
            this.node = payload.data.name;
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
    mounted() {
      this.axios.defaults.baseURL = 'https://api.kuroki.bednarski.dev';

      this.getNode();
    },
  };
</script>
