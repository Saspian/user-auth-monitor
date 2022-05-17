<script>
  import Router from "svelte-spa-router";
  import Nav from "./Components/Nav.svelte";
  import routes from "./routes";
</script>

<main>
  <Nav />
  <Router {routes} />
</main>

<style>
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
