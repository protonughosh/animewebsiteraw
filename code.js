const seriesList = document.querySelector("#series-list");

const series = [
  { name: "Naruto" },
  { name: "One Piece" },
  { name: "Dragon Ball Z" },
  { name: "Death Note" },
  { name: "Fullmetal Alchemist" }
];

series.forEach(s => {
  const li = document.createElement("li");
  li.textContent = s.name;
  seriesList.appendChild(li);
});
