// Simple JS for contact form and year
document.getElementById('year').textContent = new Date().getFullYear();

function submitForm(e){
  e.preventDefault();
  const note = document.getElementById('formNote');
  note.textContent = "تم إرسال الرسالة (محاكاة) — هذا نموذج تجريبي ولا يرسل فعليًا.";
  e.target.reset();
  setTimeout(() => note.textContent = "", 5000);
}
