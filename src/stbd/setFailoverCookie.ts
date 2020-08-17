const setCookie = (name, value, expires, path, domain, secure?) => {
  const c =
    name +
    "=" +
    escape(value) +
    (expires ? "; expires=" + expires.toUTCString() : "") +
    "; path=/" +
    (domain ? "; domain=" + domain : "");
  document.cookie = c;
};

export default (clientList: string[]) => {
  clientList.forEach(function (val, idx) {
    setCookie(
      val + "_ID",
      "failover",
      undefined,
      "/",
      ".<http://storebrand.no|storebrand.no>"
    );
    setCookie(val + "_ID", "failover", undefined, "/", ".stb.intra");
  });
};
