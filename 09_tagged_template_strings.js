function html(defaultText, ...substitutions) {
  var result = defaultText[0];
  for(var i = 0; i < substitutions.length; i++) {
    result += escapeHtml(substitutions[i]) + defaultText[i + 1];
  }
  return result;
}

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function escapeHtml(char) {
  return char.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/'/g, "&apos;")
              .replace(/"/g, "&quot;");
}
