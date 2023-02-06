import './style.css'

var typed = new Typed('.auto-type', {
  strings: [
      "Hi, The Name's <span>Jacob</span/>!",
      "Guy-who-loves-<span>Coffe</span>.js",
      "<span>&lt;</span>ButLovesTo<span>Code</span>More <span>/&gt;</span>"
  ],
  typeSpeed: 20,
  backSpeed: 20,
  backDelay: 2000,
  startDelay: 1000,
  loop: false,
  onComplete: function(self) { self.cursor.remove() }
})