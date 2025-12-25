(function () {
  const snow = document.createElement("div");
  snow.id = "snow";
  document.body.appendChild(snow);

  const COUNT = 60;

  for (let i = 0; i < COUNT; i++) {
    const flake = document.createElement("span");
    flake.className = "snowflake";
    flake.style.left = Math.random() * 100 + "vw";
    flake.style.animationDuration = 5 + Math.random() * 10 + "s";
    flake.style.fontSize = 12 + Math.random() * 12 + "px";
    flake.style.opacity = Math.random();
    snow.appendChild(flake);
  }
})();
