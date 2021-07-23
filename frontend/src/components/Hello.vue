<template>
  <section class="flex flex-col items-center justify-center w-screen h-screen bg-black">
    <h1 class="mx-1 text-6xl font-semibold text-center text-primary font-heading">Hello World! ~ Kuroki</h1>
    <p class="mx-1 my-8 text-lg text-center text-white"
      >This request was served by <span class="text-primary">Cloudflare Pages</span> and <span class="text-primary">Kubernetes</span> pod with the name
      <span class="text-primary">{{ node }} v.{{ version }}</span
      >.</p
    >

    <p class="max-w-2xl mx-1 my-2 text-xs text-center text-gray"
      >Kuroki is built with Fastify and Vue.js (with Vite and TailwindCSS in JIT mode). Frontend is deployed to the Cloudflare global content delivery network. Backend requests are
      handled by a bare-metal K3s cluster running on Hetzner Cloud, managed in GitOps way by FluxCD v2, on volatile infrastructure provisioned by Ansible.
    </p>
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
      this.axios.defaults.baseURL = 'https://api.kuroki.bednarski.dev/v1';

      this.getNode();
    },
  };
</script>
