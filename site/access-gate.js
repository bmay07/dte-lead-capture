// Lightweight client-side access gate for the DTE Equipment design preview.
//
// This is NOT real security — the code below (and the password) is visible to
// anyone who views page source. It exists only to keep this preview out of
// casual/accidental view (search engines, stray links) for people who only
// have the shared URL. To rotate the password, edit ACCESS_CODE below and
// redeploy.
(function () {
  var STORAGE_KEY = "dte-preview-unlocked";
  var ACCESS_CODE = "dte-equipment2026";

  try {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
  } catch (e) {}

  // Hide the page immediately so nothing flashes before the gate mounts.
  document.documentElement.style.visibility = "hidden";

  var CSS =
    "#dte-gate-overlay{position:fixed;inset:0;z-index:2147483647;display:flex;" +
    "align-items:center;justify-content:center;padding:24px;background:#141412;" +
    "font-family:'General Sans','GeneralSans-Variable',-apple-system,sans-serif}" +
    "#dte-gate-card{width:100%;max-width:380px;padding:36px 32px;background:#1d1d1a;" +
    "border:1px solid rgba(255,255,255,0.12)}" +
    "#dte-gate-eyebrow{font:600 11px/1 'General Sans',sans-serif;letter-spacing:.2em;" +
    "text-transform:uppercase;color:#f4a72d;margin:0 0 14px}" +
    "#dte-gate-card h1{margin:0 0 12px;font:800 26px/1.1 'Futura ND Alt W03','Futura ND Alt'," +
    "'Futura ND','General Sans',sans-serif;letter-spacing:.01em;text-transform:uppercase;color:#F4F3F1}" +
    "#dte-gate-card p{margin:0 0 22px;font:400 14px/1.5 'General Sans',sans-serif;color:rgba(244,243,241,0.65)}" +
    "#dte-gate-form{display:flex;flex-direction:column;gap:12px}" +
    "#dte-gate-input{width:100%;box-sizing:border-box;padding:12px 14px;font:400 15px/1.2 'General Sans',sans-serif;" +
    "background:#141412;border:1px solid rgba(255,255,255,0.2);color:#F4F3F1}" +
    "#dte-gate-input:focus{outline:2px solid #f4a72d;outline-offset:2px}" +
    "#dte-gate-form button{padding:12px 14px;border:0;background:#f4a72d;color:#141412;" +
    "font:700 13px/1 'General Sans',sans-serif;letter-spacing:.05em;text-transform:uppercase;cursor:pointer}" +
    "#dte-gate-form button:hover{background:#ffb84d}" +
    "#dte-gate-error{display:none;margin-top:14px;font:500 13px/1.4 'General Sans',sans-serif;color:#f4a72d}";

  function mount() {
    var style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);

    var overlay = document.createElement("div");
    overlay.id = "dte-gate-overlay";
    overlay.innerHTML =
      '<div id="dte-gate-card">' +
      '<div id="dte-gate-eyebrow">DTE Equipment &mdash; Design Preview</div>' +
      "<h1>Enter Access Code</h1>" +
      "<p>This preview is shared by link only. Enter the access code you were given to continue.</p>" +
      '<form id="dte-gate-form" autocomplete="off">' +
      '<input id="dte-gate-input" type="password" placeholder="Access code" autocomplete="off" />' +
      "<button type=\"submit\">Continue</button>" +
      "</form>" +
      '<div id="dte-gate-error">Incorrect code &mdash; please try again.</div>' +
      "</div>";
    document.body.appendChild(overlay);
    document.documentElement.style.visibility = "visible";

    var form = document.getElementById("dte-gate-form");
    var input = document.getElementById("dte-gate-input");
    var error = document.getElementById("dte-gate-error");
    input.focus();

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (input.value === ACCESS_CODE) {
        try {
          sessionStorage.setItem(STORAGE_KEY, "1");
        } catch (err) {}
        overlay.remove();
        style.remove();
      } else {
        error.style.display = "block";
        input.value = "";
        input.focus();
      }
    });
  }

  if (document.body) {
    mount();
  } else {
    document.addEventListener("DOMContentLoaded", mount);
  }
})();
