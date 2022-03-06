//[0]エンチャントの名前
//[1]エンチャントの名前の英語表記
//[2]エンチャント対象
//[3]... レベルとグレード
let enchants = [
	{name:"水中歩行",ename:"water_walk",btarget:8,lng:[[1,1],[2,2],[3,3]]},
	{name:"爆発耐性",ename:"explosion_resistance",btarget:15,lng:[[1,0],[2,1],[3,2],[4,3]]},
	{name:"落下耐性",ename:"fall_resistance",btarget:15,lng:[[1,1],[2,2],[3,3],[4,4]]},
	{name:"火炎耐性",ename:"fire_resistance",btarget:15,lng:[[1,0],[2,1],[3,2],[4,3]]},
	{name:"宝釣り",ename:"treasure_fishing",btarget:256,lng:[[1,1],[2,2],[3,3]]},
	{name:"入れ食い",ename:"fast_bite",btarget:256,lng:[[1,1],[2,2],[3,3]]},
	{name:"射撃ダメージ増加",ename:"increase_arrow_damage",btarget:32,lng:[[1,2],[2,3],[3,4]]},
	{name:"ダメージ軽減",ename:"decrease_damage",btarget:15,lng:[[1,1],[2,2],[3,3]]}
];

Object.freeze(enchants);

var weapons = [
	"ヘルメット","チェストプレート","ズボン","ブーツ","剣","弓","クロスボウ","トライデント","釣竿",
	"盾","食料","媒体","ツルハシ","斧","クワ","スコップ","卵","それ以外"
];

var eweapons = [
	"helmet","chestplate","leggings","boots","sword","bow","crossbow","trident","fishrot",
	"sheald","food","metal","pickaxe","axe","hoe","shovel","egg","others"
];

function getEnchants(){
	return enchants;
}

function getEnchantsWithWeapons(weaponIndex){
	index = parseInt(weaponIndex);
	var result = [];
	var es = getEnchants();
	for(var i = 0 ; i < es.length ; i++){
		var target = parseInt(es[i].btarget);
		var binary = target.toString(2);
		var trulyWeaponIndex = index + parseInt(1);
		if(binary.length >= trulyWeaponIndex){
			if(binary.charAt(binary.length - trulyWeaponIndex) == '1'){
				result.push(es[i]);
			}
		}
	}
	return result;
}

function getWeapons(){
	return weapons;
}

function getEWeapons(){
	return eweapons;
}

function getIndexForEname(ename){
	for(var i = 0 ; i < enchants.length ; i++){
		if(enchants[i].ename == ename){
			return i;
		}
	}
	return -1;
}

function displayName(ename){
	var indexForDisplayName = getIndexForEname(ename);
	document.getElementById("display").innerHTML = "<h2>" + enchants[indexForDisplayName].name + "</h2>";
	
}

function enchantLevelAndGrade(ename){
	var indexForEnchantLaG = getIndexForEname(ename);
	var table = document.createElement("table");
	for(var i = 0 ; i < enchants[indexForEnchantLaG].lng.length + 1 ; i++){
		var tr = document.createElement("tr");
		var thl = ["レベル","入手条件"];
		for(var k = 0 ; k < 2 ; k++){
			if(i == 0){
				var th = document.createElement("th");
				th.textContent = thl[k];
				tr.appendChild(th);
			}else{
				var td = document.createElement("td");
				var tdtc = enchants[indexForEnchantLaG].lng[i-1][k];
				if(k == 1){
					if(tdtc < 4){
						td.textContent = "ランク" + tdtc ;
					}else{
						td.textContent = "宝";
					}
				}else{
					td.textContent = enchants[indexForEnchantLaG].lng[i-1][k];
				}
				tr.appendChild(td);
			}
		}
		table.appendChild(tr);
	}
	document.getElementById('maintable').appendChild(table);
}

function enchantTarget(ename){
	var indexForEnchantTarget = getIndexForEname(ename);
	var targetForEnchantTarget = enchants[indexForEnchantTarget].btarget;
	var btfet = targetForEnchantTarget.toString(2);
	var etresult = [];
	for(var i = 0 ; i < btfet.length ; i++){
		var cbtfet = btfet.charAt(i);
		if(cbtfet == '1'){
			var eri = btfet.length - (i + 1);
			var etresultArray = [weapons[eri],eweapons[eri]];
			etresult.push(etresultArray);
		}
	}
	return etresult;
}