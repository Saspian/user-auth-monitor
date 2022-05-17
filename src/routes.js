import Comp from "./Components/TestComp/Comp.svelte";
import Login from "./Components/Login.svelte";
import About from "./Components/About.svelte";
import NotFound from "./Components/NotFound.svelte";

import { wrap } from "svelte-spa-router/wrap"

export default {
  "/": wrap({
    component: Comp,
    props: {
      name: "Svelte",
    }
  }),
  "/about": About,
  "/login": Login,
  "*": NotFound
}