<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Login from "./Login.svelte";
</script>

<Router>
  <Route path="/">
    <div>Home page</div>
  </Route>
  <Route path="login">
    <div>
      <Login />
    </div>
  </Route>
  <Route path="about">
    <div>About page</div>
  </Route>
</Router>
