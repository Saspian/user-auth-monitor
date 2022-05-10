<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Nav from "./Components/Nav.svelte";
  import Routes from "./Components/Routes.svelte";
</script>

<main>
  <Nav />
  <Routes />
</main>

<style>
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
