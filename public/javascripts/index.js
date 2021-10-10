(() => {
  const addExerciseForm = document.getElementById('add-exercise-form')

  addExerciseForm.addEventListener("submit", () => {
    const uid = document.getElementById('uid').value
    addExerciseForm.action = `/api/users/${uid}/exercises`
    addExerciseForm.submit()
  })
})()