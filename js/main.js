// Minimal JS for interactions
document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.querySelector('.newsletter-form');
  if(form){
    form.addEventListener('submit', e=>{
      e.preventDefault();
      const email = form.querySelector('input[name="email"]').value.trim();
      if(!email || !email.includes('@')){
        alert('Por favor introduce un email válido.');
        return;
      }
      alert('Gracias! Te has inscrito al newsletter (demo).');
      form.reset();
    })
  }
});
