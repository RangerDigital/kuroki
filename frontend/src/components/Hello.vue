<template>
  <section class="flex flex-col items-center justify-center w-screen h-screen bg-black">
    <h1 class="mx-1 text-6xl font-semibold text-center 3xl:text-8xl text-primary font-heading">Hello, I'm Kuroki!</h1>
    <p class="mx-1 my-8 text-lg text-center text-white 3xl:text-xl"
      >This request was served by <span class="text-primary">Cloudflare Pages</span> and my <span class="text-primary">Kubernetes</span> cluster. (🦇 From
      <span class="text-primary">{{ node }} v{{ version }}</span> container.)</p
    >
  </section>
</template>

<script>
  export default {
    name: 'Hello',
    data() {
      return {
        node: 'Unknown',
        version: '0.0',
      };
    },
    methods: {
      getNode() {
        this.axios
          .get('/status')
          .then((payload) => {
            this.node = payload.data.name;
            this.version = payload.data.version;
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
