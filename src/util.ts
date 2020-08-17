export const copyStringToClipboard = (str: string) => {
  const el = document.createElement("textarea");
  el.value = str;
  // @ts-ignore
  el.style = { position: "absolute", left: "-9999px" };
  el.setAttribute("readonly", "");
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

export const goTo = (base: string, args: string[] = []) => () =>
  (window.location.href = `${base}${args.length ? "?" : ""}${args.join("&")}`);

  export const localHost = (port) => ["http://localhost", port].join(":");