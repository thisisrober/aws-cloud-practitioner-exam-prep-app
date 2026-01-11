export const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s < 10 ? '0' : ''}${s}`;
};

// Fisher-Yates shuffle returns a new shuffled array
export const shuffle = (arr) => {
  const a = Array.isArray(arr) ? arr.slice() : [];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// calculateScore expects (questions, userAnswers)
export const calculateScore = (questions, userAnswers) => {
  const scoredQuestions = questions.slice(0, 50);
  let correctCount = 0;

  scoredQuestions.forEach((q, idx) => {
    const ans = userAnswers[idx] || [];
    if (JSON.stringify(ans.slice().sort()) === JSON.stringify(q.correct.slice().sort())) {
      correctCount++;
    }
  });

  const scaledScore = Math.round(100 + (correctCount / 50) * 900);
  return scaledScore;
};
