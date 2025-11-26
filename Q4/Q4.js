class FormBuilder {
  constructor(fields) { this.fields = fields; }
  renderForm(containerId) {
    let html = "<form id='dynamicForm'>";
    this.fields.forEach(f => {
      html += `<label>${f.label}</label>
      <input type="${f.type}" id="${f.label.toLowerCase()}" /><br><br>`;
    });
    html += `<button type="button" onclick="getFormData()">Submit</button></form>`;
    document.getElementById(containerId).innerHTML = html;
  }
}
function getFormData() {
  const inputs = document.querySelectorAll("#dynamicForm input");
  const data = {};
  inputs.forEach(inp => data[inp.id] = inp.value);
  console.log("Form Data:", data);
}