import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import postcss from "lume/plugins/postcss.ts";
import inline from "lume/plugins/inline.ts";
import vento from "lume/plugins/vento.ts";
import basePath from "lume/plugins/base_path.ts";

const site = lume()
  .use(date())
  .use(inline())
  .use(postcss({
    includes: "styles/_css",
  }))
  .use(vento())
  .use(basePath())
  .ignore("README.md")
  .copy("js")
  .copy("img")
  .copy("favicon.ico")
  .copy("favicon-32x32.png")
  .copy("favicon-16x16.png")
  .data("cache", Date.now())
  .remoteFile(
    "styles/_css/normalize.css",
    "https://unpkg.com/ui-normalize@0.3.0/ui-normalize.css",
  )
  .remoteFile(
    "js/deps/typed.js",
    "https://unpkg.com/typed.js@2.0.16/dist/typed.module.js",
  );

export default site;
