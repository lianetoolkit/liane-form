import { iframeResize } from "iframe-resizer";

(function () {
  window.onload = function () {
    const nodes = document.getElementsByClassName("liane-form");
    for (const container of nodes) {
      const iframe = document.createElement("iframe");
      const server = container.getAttribute("data-url");
      const campaignId = container.getAttribute("data-campaignId");
      const url = `${server}/f/?c=${campaignId}`;
      container.appendChild(iframe);
      iframe.setAttribute("style", `min-width: 400px; width: 100%;`);
      iframe.setAttribute("src", url);
      iframe.setAttribute("frameborder", 0);
      iframeResize({}, iframe);
    }
  };
})();
