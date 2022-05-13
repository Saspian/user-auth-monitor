<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Login from "./Login.svelte";
  import Comp from "./TestComp/Comp.svelte";
</script>

<Router>
  <Route path="/">
    Home page
    <Comp name="world" />
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
