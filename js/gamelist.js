
var games = [
	{name:"KitPvP",ename:"kitpvp"},
	{name:"鬼ごっこ倶楽部",ename:"OnigokkoClub"},
	{name:"TableWars",ename:"tablewars"}
];

function writeGamesLinks(){
	var ul = document.createElement("ul");
	ul.className = "gameslinks";
	for(var i = 0 ; i < games.length ; i++){
		var l = document.createElement("li");
		l.className = "gameslinks";
		var agames = document.createElement("a");
		agames.href = "https://carpediem-rtks.github.io/Carpediem/htmls/" + games[i].name + "/" + games[i].ename + "_main.html";
		agames.innerHTML = games[i].name;
		l.appendChild(agames);
		ul.appendChild(l);
	}
	document.getElementById("games").appendChild(ul);
}