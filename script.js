document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // 폼 제출 방지
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    // 실제 이메일 전송은 백엔드 로직 필요
  } else {
    alert('Please fill out all fields.');
  }
});
