// 캐릭터 데이터 리스트
const characters = [
    { name: "이블린", attr: "Fire", job: "Attack", img: "Evelyn.png" },
    { name: "오피&aml;「도깨비불」", attr: "Fire", job: "Attack", img: "Orphie_Magus.png" },
    { name: "11호", attr: "Fire", job: "Attack", img: "Soldier11.png" }
];

// 카드를 화면에 그려주는 함수
function renderCharacters(filterAttr = null, filterJob = null, search = "") {
    const grid = document.getElementById('characterGrid');
    grid.innerHTML = ""; 

    characters.forEach(char => {
        if ((!filterAttr || char.attr === filterAttr) && 
            (!filterJob || char.job === filterJob) && 
            char.name.toLowerCase().includes(search.toLowerCase())) {
            
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<img src="${char.img}" alt="${char.name}">`;
            grid.appendChild(card);
        }
    });
}

// 초기 로딩
renderCharacters();
