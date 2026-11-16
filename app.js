const records=[
["001","HISTORICAL MYSTERY","The Flannan Isles Disappearance","Three lighthouse keepers vanished from a remote Scottish island in 1900.","FLANNAN","Unresolved questions remain"],
["002","MARITIME MYSTERY","The Mary Celeste","A merchant brigantine found adrift in the Atlantic with its crew missing.","ATLANTIC","The ship was real; theories vary"],
["003","MOUNTAIN INCIDENT","The Dyatlov Pass Incident","Nine hikers died in the northern Urals in 1959. What happened has been debated for decades.","URAL","Avalanche hypothesis supported"],
["004","MARITIME HISTORY","The USS Cyclops","A US Navy collier disappeared in 1918 with 309 people aboard.","CYCL","No confirmed cause"],
["005","ASTRONOMY","The Wow! Signal","A powerful narrowband radio signal detected in 1977, never convincingly repeated.","WOW","Origin remains unidentified"],
["006","OCEAN SOUND","The Bloop","An ultra-low-frequency sound detected in the Pacific in 1997.","BLOOP","Explained: likely icequake"],
["007","CRIME HISTORY","The Hinterkaifeck Murders","A family was murdered on an isolated Bavarian farm in 1922.","HINTER","Case remains unsolved"]
];
const grid=document.getElementById("fileGrid");
grid.innerHTML=records.map((r,i)=>`<a class="file-card" data-mark="${r[4]}" href="case.html?file=${i+1}"><div class="file-meta"><span>FILE ${r[0]}</span><span>${r[1]}</span></div><h3>${r[2]}</h3><p>${r[3]}</p><div class="file-open"><span>OPEN INVESTIGATION</span><b>↗</b></div></a>`).join("");
