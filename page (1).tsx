@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600&display=swap');

:root {
  --dusk:    #1A1035;
  --purple:  #3D1C6E;
  --crimson: #C0392B;
  --ember:   #E8622A;
  --gold:    #F4A429;
  --cream:   #FDF6EC;
  --white:   #FFFFFF;
  --text:    #1A1035;
  --muted:   #6B6380;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  background: var(--white);
  color: var(--text);
  line-height: 1.6;
}

h1, h2, h3, .display {
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 0.04em;
  line-height: 1.1;
}

.btn-primary {
  background: var(--ember);
  color: var(--white);
  border: none;
  padding: 14px 32px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
  text-decoration: none;
  display: inline-block;
}

.btn-primary:hover {
  background: var(--crimson);
}

.btn-outline {
  background: transparent;
  color: var(--white);
  border: 2px solid var(--gold);
  padding: 12px 30px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  display: inline-block;
}

.btn-outline:hover {
  background: var(--gold);
  color: var(--dusk);
}

section {
  padding: 80px 24px;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}
