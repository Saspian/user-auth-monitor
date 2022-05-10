<script>
  let username;
  let password;
</script>

<form class="form">
  <fieldset class="uk-fieldset">
    <!-- <legend class="uk-legend">Login</legend> -->
    <div class="uk-margin">
      <div class="uk-inline">
        <span class="uk-form-icon" uk-icon="icon: user" />
        <input class="uk-input" type="text" bind:value={username} />
      </div>
    </div>
    <div class="uk-margin">
      <div class="uk-inline">
        <span class="uk-form-icon" uk-icon="icon: lock" />
        <input class="uk-input" type="password" bind:value={password} />
      </div>
    </div>
    <div class="uk-margin ">
      <button
        class="uk-button uk-button-primary uk-button-small"
        style="width: 100%;">Login</button
      >
    </div>
  </fieldset>
</form>

<style>
  .form {
    width: 300px;
    margin: 0px auto;
  }
</style>
