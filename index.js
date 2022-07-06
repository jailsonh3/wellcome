// Efeito de confete

const canvas = document.getElementById('your_custom_canvas_id')

const jsConfetti = new JSConfetti({ canvas })
        jsConfetti.addConfetti({
          confettiColors: [
            '#ff0a54',
            '#ff477e',
            '#ff7096',
            '#ff85a1',
            '#fbb1bd',
            '#f9bec7',
          ],
})

// Efeito de digitação

const app = document.getElementById('fullname');

const typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('Hey, Welcome!')
  .pauseFor(300)
  .deleteChars(13)
  .typeString("I'am Jailson!")
  .pauseFor(300)
  .deleteChars(13)
  .typeString("I'm a Web Developer!")
  .pauseFor(300)
  .deleteChars(19)
  .start();