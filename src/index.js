import { iframeResize } from "iframe-resizer";

(function () {
  function validateURL(string, allowNonSecure) {
    let url;
    try {
      url = new URL(string);
    } catch (err) {
      return false;
    }
    if (allowNonSecure) {
      return url.protocol === "http:" || url.protocol === "https:";
    }
    return url.protocol === "https:";
  }
  window.onload = function () {
    const nodes = document.getElementsByClassName("liane-form");
    for (const container of nodes) {
      const server = container.getAttribute("data-url");
      const campaignId = container.getAttribute("data-campaignId");
      const nonSecure = !!container.getAttribute("data-allowNonSecure");
      if (validateURL(server, nonSecure)) {
        const iframe = document.createElement("iframe");
        const url = `${server.replace(/\/$/, "")}/f/?c=${campaignId}`;
        container.appendChild(iframe);
        iframe.setAttribute("style", `min-width: 400px; width: 100%;`);
        iframe.setAttribute("src", url);
        iframe.setAttribute("frameborder", 0);
        iframeResize({}, iframe);
      }
    }
  };
})();
