class FormBuilder{
  constructor(root,fields){
    this.root=document.getElementById(root);
    this.fields=fields;
  }
  render(){
    let html="<form id='myForm'>";
    this.fields.forEach(f=>{
      html+=`<label>${f.label}</label><input type='${f.type}' id='${f.name}' />`;
    });
    html+="<button type='submit'>Submit</button></form>";
    this.root.innerHTML=html;
    document.getElementById("myForm").addEventListener("submit",e=>{
      e.preventDefault();
      console.log(this.getFormData());
    });
  }
  getFormData(){
    let out={};
    this.fields.forEach(f=>{
      out[f.name]=document.getElementById(f.name).value;
    });
    return out;
  }
}
