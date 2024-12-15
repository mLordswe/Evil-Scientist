import { DomElements } from "./types";
import { createDomELement } from "./utils";

const body = document.querySelector("body") as HTMLElement;
const box1 = createDomELement(body, "box1", "div");
box1.innerHTML = "hej";
box1.style.height = "200px";
box1.style.width = "200px";
box1.style.background = "Brown";
body.style.background = "blue";
