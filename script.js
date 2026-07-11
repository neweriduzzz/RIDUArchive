// =======================================
// RIDUArchive - Character System v1.0
// =======================================

// ==============================
// 캐릭터 데이터
// ==============================

const characters = [

    {
        name: "이블린",
        rank: "S",
        faction: "스타즈 오브 리라",
        attr: "Fire",
        job: "Attack",
        img: "Evelyn.png"
    },

    {
        name: "오피&「도깨비불」",
        rank: "S",
        faction: "운명의 심판",
        attr: "Fire",
        job: "Attack",
        img: "Orphie_Magus.png"
    },

    {
        name: "11호",
        rank: "S",
        faction: "오볼스 소대",
        attr: "Fire",
        job: "Attack",
        img: "Soldier11.png"
    }

];


// ==============================
// 현재 선택된 필터
// ==============================

let activeAttribute = null;
let activeJob = null;


// ==============================
// 캐릭터 출력
// ==============================

function renderCharacters() {

    const grid = document.getElementById("characterGrid");

    if (!grid) return;

    const searchInput = document.getElementById("searchInput");

    const search = searchInput
        ? searchInput.value.toLowerCase()
        : "";

    grid.innerHTML = "";

    characters.forEach(character => {

        // 속성 필터
        if (activeAttribute && character.attr !== activeAttribute) return;

        // 특성 필터
        if (activeJob && character.job !== activeJob) return;

        // 검색
        if (!character.name.toLowerCase().includes(search)) return;

        grid.innerHTML += `
            <div class="card"
                data-name="${character.name}"
                data-attribute="${character.attr}"
                data-job="${character.job}">

                <img src="${character.img}" alt="${character.name}">

                <div class="card-name">

                    <strong>${character.rank} Rank</strong><br>

                    ${character.name}<br>

                    <small>${character.faction}</small>

                </div>

            </div>
        `;

    });

}


// ==============================
// 검색
// ==============================

function filterCharacters() {

    renderCharacters();

}


// ==============================
// 필터
// ==============================

function toggleFilter(type) {

    const attrs = [
        "Ether",
        "Electric",
        "Physical",
        "Ice",
        "Fire",
        "Wind"
    ];

    const jobs = [
        "Attack",
        "Anomaly",
        "Support",
        "Stun",
        "Defense",
        "Rupture"
    ];

    if (attrs.includes(type)) {

        if (activeAttribute === type) {
            activeAttribute = null;
        } else {
            activeAttribute = type;
        }

    }

    if (jobs.includes(type)) {

        if (activeJob === type) {
            activeJob = null;
        } else {
            activeJob = type;
        }

    }

    renderCharacters();

}


// ==============================
// 시작
// ==============================

renderCharacters();
