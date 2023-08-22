const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
  const button = question.querySelector('.question-btn');
  button.addEventListener('click', function () {
    question.classList.toggle('expand');
    questions.forEach(function (q) {
      if (q !== question) {
        q.classList.remove('expand');
      }
    });
  });
});