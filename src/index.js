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
  function serialize(obj) {
    const str = [];
    for (const p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }
  window.onload = function () {
    const nodes = document.getElementsByClassName("liane-form");
    for (const container of nodes) {
      const server = container.getAttribute("data-url");
      const campaignId = container.getAttribute("data-campaignId");
      const compact = container.getAttribute("data-compact");
      const nonSecure = !!container.getAttribute("data-allowNonSecure");
      const params = {
        c: campaignId,
      };
      if (compact) {
        params.compact = true;
      }
      if (validateURL(server, nonSecure)) {
        const iframe = document.createElement("iframe");
        const url = `${server.replace(/\/$/, "")}/f/?${serialize(params)}`;
        container.appendChild(iframe);
        iframe.setAttribute("style", `min-width: 200px; width: 100%;`);
        iframe.setAttribute("src", url);
        iframe.setAttribute("frameborder", 0);
        iframeResize(
          {
            onMessage: function (data) {
              if (data.message) {
                const message = data.message;
                if (message.redirect) {
                  window.location = message.redirect;
                }
                if (message.sent) {
                  data.iframe.scrollIntoView();
                }
              }
            },
          },
          iframe
        );
      }
    }
  };
})();
