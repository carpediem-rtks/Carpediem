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
	{name:"ダメージ軽減",ename:"decrease_damage",btarget:15,lng:[[1,1],[2,2],[3,3]]},
	{name:"ダメージ増加",ename:"increase_damage",btarget:16,lng:[[1,2],[2,3],[3,4]]},
	{name:"棘の鎧",ename:"thorns",btarget:15,lng:[[1,1],[2,2],[3,3]]},
	{name:"耐久力",ename:"durability",btarget:262143,lng:[[1,1],[2,2],[3,3]]},
	{name:"飛び道具耐性",ename:"projectile_resistance",btarget:15,lng:[[1,1],[2,2],[3,3],[4,4]]},
	{name:"ノックバック",ename:"knockback",btarget:262143,lng:[[1,1],[2,2]]},
	{name:"パンチ",ename:"punch",btarget:32,lng:[[1,1],[2,2]]},
	{name:"範囲ダメージ増加",ename:"increase_range_damage",btarget:16,lng:[[1,1],[2,2]]},
	{name:"火属性",ename:"fire_aspect",btarget:16,lng:[[1,2],[2,3]]},
	{name:"高速装填",ename:"quick_charge",btarget:64,lng:[[1,2],[2,3],[3,4]]},
	{name:"水中呼吸",ename:"water_breathing",btarget:1,lng:[[1,2],[2,3],[3,4]]},
	{name:"貫通",ename:"pierce",btarget:64,lng:[[1,2]]},
	{name:"フレイム",ename:"flame",btarget:32,lng:[[1,3]]},
	{name:"召雷",ename:"lightning",btarget:128,lng:[[1,3]]},
	{name:"忠誠",ename:"loyalty",btarget:128,lng:[[1,3]]},
	{name:"拡散",ename:"multiply",btarget:64,lng:[[1,3]]},
	{name:"氷渡り",ename:"ice_walking",btarget:8,lng:[[1,4]]},
	{name:"無限",ename:"infinity",btarget:32,lng:[[1,4]]},
	{name:"激流",ename:"riptide",btarget:128,lng:[[1,4]]},
	{name:"吸血",ename:"blood_sucking",btarget:16,lng:[[1,3],[2,4]]},
	{name:"浮遊",ename:"levitation",btarget:16,lng:[[1,2],[2,3],[3,4]]},
	{name:"固定火力",ename:"constant",btarget:262143,lng:[[1,3],[2,4]]},
	{name:"連撃",ename:"continue_arrow",btarget:32,lng:[[1,2],[2,3],[3,4]]},
	{name:"免疫",ename:"immunity",btarget:15,lng:[[1,3]]},
	{name:"便乗",ename:"ride",btarget:32,lng:[[1,4]]},
	{name:"帰還",ename:"home",btarget:133120,lng:[[1,3]]},
	{name:"ロケット",ename:"rocket",btarget:133120,lng:[[1,2],[2,3]]},
	{name:"反動",ename:"recoil",btarget:16,lng:[[1,1],[2,2],[3,3]]},
	{name:"爆竹",ename:"firecracker",btarget:16,lng:[[1,1],[2,2]]},
	{name:"ブラックホール",ename:"blackhole",btarget:2,lng:[[1,2],[2,3],[3,4]]},
	{name:"利口",ename:"genius",btarget:1,lng:[[1,0],[2,1],[3,2],[4,3],[5,4]]},
	{name:"流出",ename:"drown",btarget:16,lng:[[1,2],[2,3],[3,4]]},
	{name:"学習",ename:"study",btarget:1,lng:[[1,0],[2,1],[3,2],[4,3],[5,4]]},
	{name:"透明",ename:"invisible",btarget:8,lng:[[1,1]]},
	{name:"消失",ename:"vanish",btarget:2,lng:[[1,3]]},
	{name:"節約",ename:"savings",btarget:1,lng:[[1,0],[2,1],[3,2],[4,3],[5,4]]},
	{name:"崩壊",ename:"collapse",btarget:16,lng:[[1,0],[2,1]]},
	{name:"再生体",ename:"recovery",btarget:2,lng:[[1,2],[2,3],[3,4]]},
	{name:"軽量化",ename:"light",btarget:4,lng:[[1,1],[2,2],[3,3],[4,4]]},
	{name:"保管空間",ename:"save_space",btarget:133120,lng:[[1,2]]},
	{name:"瓦割り",ename:"breaking",btarget:16,lng:[[1,3]]},
	{name:"水性",ename:"water_type",btarget:2,lng:[[1,1],[2,2],[3,3],[4,4]]},
	{name:"模造",ename:"copy",btarget:133120,lng:[[1,3]]},
	{name:"禁忌",ename:"taboo",btarget:16,lng:[[1,4]]},
	{name:"金槌",ename:"unswimable",btarget:2,lng:[[1,1],[2,2],[3,3]]},
	{name:"重り",ename:"weight",btarget:16,lng:[[1,2]]},
	{name:"不幸中の幸い",ename:"unlucky_lucky",btarget:1,lng:[[1,4]]},
	{name:"銅鑼",ename:"gong",btarget:2,lng:[[1,4]]},
	{name:"束縛の呪い",ename:"binding",btarget:15,lng:[[1,1]]},
	{name:"晴れの祈り",ename:"clear_pray",btarget:133120,lng:[[1,3]]},
	{name:"雨の祈り",ename:"rain_pray",btarget:133120,lng:[[1,3]]},
	{name:"雷の祈り",ename:"thunder_pray",btarget:133120,lng:[[1,3]]},
	{name:"皿",ename:"rain_plate",btarget:1,lng:[[1,3]]},
	{name:"光合成",ename:"photonic",btarget:2,lng:[[1,3]]},
	{name:"着付け",ename:"take_on",btarget:16,lng:[[1,3]]},
	{name:"乾燥肌",ename:"dry",btarget:2,lng:[[1,1]]},
	{name:"偏頭痛",ename:"headache",btarget:1,lng:[[1,1]]},
	{name:"びびり腰",ename:"chatter",btarget:4,lng:[[1,1]]},
	{name:"百鬼夜行",ename:"ghost_time",btarget:2,lng:[[1,3]]},
	{name:"王冠",ename:"crown",btarget:1,lng:[[1,4]]},
	{name:"生還",ename:"level_home",btarget:133120,lng:[[1,3]]},
	{name:"洗脳",ename:"brainwash",btarget:1,lng:[[1,3]]},
	{name:"黒魔術",ename:"black_magic",btarget:2,lng:[[1,2],[2,3]]},
	{name:"生物薬品",ename:"medicine",btarget:133120,lng:[[1,1],[2,2],[3,3]]},
	{name:"ハミング",ename:"haming",btarget:8,lng:[[1,1],[2,2],[3,3]]},
	{name:"宿り木",ename:"heal_wood",btarget:4,lng:[[1,2],[2,3]]},
	{name:"適応性",ename:"adaptability",btarget:32,lng:[[1,3]]}
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
	var targeth3 = document.createElement("h3");
	targeth3.innerHTML = "対象";
	var targetul = document.createElement("ul");
	targetul.id = "targetlist";
	var indexForEnchantTarget = getIndexForEname(ename);
	var targetForEnchantTarget = enchants[indexForEnchantTarget].btarget;
	var btfet = targetForEnchantTarget.toString(2);
	var etresult = [];
	for(var i = btfet.length - 1 ; i >= 0 ; i--){
		var cbtfet = btfet.charAt(i);
		if(cbtfet == '1'){
			var eri = btfet.length - (i + 1);
			var etresultArray = [weapons[eri],eweapons[eri]];
			etresult.push(etresultArray);
		}
	}
	var stockList = '';
	for(var i = 0 ; i < etresult.length ; i++){
		stockList += "<li><a href = 'enchant_weapons#" + etresult[i][1] + "' class='hexagon'>" + etresult[i][0] + "</a></li>";
	}
	document.getElementById("target").appendChild(targeth3);
	document.getElementById("target").appendChild(targetul);
	document.getElementById("targetlist").innerHTML = stockList;
}