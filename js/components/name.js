import Typed from "../deps/typed.js";

const searchParams = new URLSearchParams(window.location.search);
const names = Array.from(searchParams.values());

class Name extends HTMLElement {
  connectedCallback() {
    const strings = [];
    for (let n = 0; n < names.length; n++) {
      strings.push(`${getItem(names, n)}`);
    }
    strings.push("TU NOMBRE");

    this.typed = new Typed(this, {
      strings,
      typeSpeed: 75,
      backSpeed: 50,
      backDelay: 2000,
      startDelay: 1000,
    });
  }
}

customElements.define("blog-name", Name);

function getItem(items, n) {
  return items[n];
}
