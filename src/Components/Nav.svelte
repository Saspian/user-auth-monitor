<script>
  import { Router, Route, Link } from "svelte-navigator";
</script>

<Router>
  <nav class="navbar">
    <Link to="/">
      <span class="link">Home</span></Link
    >
    <Link class="link" to="login">
      <span class="link">Login</span>
    </Link>
    <Link class="link" to="about">
      <span class="link">About</span>
    </Link>
  </nav>
</Router>

<style>
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(218, 215, 215);
    padding: 16px;
    margin-bottom: 16px;
  }
  .link {
    padding: 2px 8px;
  }
</style>
