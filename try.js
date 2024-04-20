import("https://unpkg.com/@swan-io/boxed/dist/Boxed.mjs").then((Boxed) => {
  window.Boxed = Boxed;
  const { Array, ...SafeBoxed } = Boxed;
  Object.assign(window, SafeBoxed);
  console.log(
    "%cB%c Try Boxed right here!",
    "background-color:#D96151;color:#fff;border-radius:4px;padding:0 5px;height:1em;display:inline-block;font-weight: bold;font-size:18px;",
    "font-weight: bold;font-size:18px;",
  );
  console.log(
    "%ce.g. %cOption.fromNullable(1).getOr(0)",
    "color: #ccc;font-family: monospace;",
    "",
  );
  console.log("%c---", "color: #ccc;");
  console.log("%cLooking for a job? 👀", "font-weight: 700;");
  console.log(
    "👋 %cSwan is hiring: https://www.welcometothejungle.com/fr/companies/swan/jobs",
    "font-weight: 700;",
  );
});
