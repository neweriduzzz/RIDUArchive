// =======================================
// RIDUArchive Character System
// =======================================

// 캐릭터 데이터
const characters = [
    {
        id: "evelyn",
        name: "이블린",
        rank: "S",
        faction: "스타즈 오브 리라",
        attr: "Fire",
        job: "Attack",
        img: "Evelyn.png"
    },

    {
        id: "orphie",
        name: "오피&「도깨비불」",
        rank: "S",
        faction: "운명의 심판",
        attr: "Fire",
        job: "Attack",
        img: "Orphie_Magus.png"
    },

    {
        id: "soldier11",
        name: "11호",
        rank: "S",
        faction: "오볼스 소대",
        attr: "Fire",
        job: "Attack",
        img: "Soldier11.png"
    }
];


// 현재 필터
let activeAttribute = null;
let activeJob = null;


// ==========================
// 캐릭터 출력
// ==========================

function renderCharacters() {

    const grid = document.getElementById("characterGrid");

    if (!grid) return;

    const search =
        document.getElementById("searchInput")
        ?.value
        .toLowerCase() || "";

    grid.innerHTML = "";

    const filteredCharacters = characters.filter(character => {

        if (
            activeAttribute &&
            character.attr !== activeAttribute
        ) {
            return false;
        }

        if (
            activeJob &&
            character.job !== activeJob
        ) {
            return false;
        }

        if (
            !character.name.toLowerCase().includes(search) &&
            !character.faction.toLowerCase().includes(search)
        ) {
            return false;
        }

        return true;
    });

    if (filteredCharacters.length === 0) {

        grid.innerHTML = `
            <div style="
                grid-column:1/-1;
                text-align:center;
                font-weight:bold;
                padding:20px;
            ">
                검색 결과가 없습니다.
            </div>
        `;

        return;
    }

    filteredCharacters.forEach(character => {

        grid.innerHTML += `
            <div class="card"
                 onclick="openCharacter('${character.id}')">

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


// ==========================
// 검색
// ==========================

function filterCharacters() {
    renderCharacters();
}


// ==========================
// 필터 버튼 활성화
// ==========================

function updateFilterButtons() {

    document
        .querySelectorAll(".filter-btn")
        .forEach(btn => {

            btn.classList.remove("active");

            const filter =
                btn.dataset.filter;

            if (
                filter === activeAttribute ||
                filter === activeJob
            ) {
                btn.classList.add("active");
            }
        });
}


// ==========================
// 필터
// ==========================

function toggleFilter(type) {

    const attributes = [
        "Ether",
        "Electric",
        "Physical",
        "Ice",
        "Fire"
    ];

    const jobs = [
        "Attack",
        "Anomaly",
        "Support",
        "Stun",
        "Defense",
        "Rupture"
    ];

    if (attributes.includes(type)) {

        activeAttribute =
            activeAttribute === type
            ? null
            : type;
    }

    if (jobs.includes(type)) {

        activeJob =
            activeJob === type
            ? null
            : type;
    }

    updateFilterButtons();
    renderCharacters();
}


// ==========================
// 카드 클릭
// ==========================

function openCharacter(id) {

    console.log("선택:", id);

    // 나중에 상세 페이지 연결
    // window.location.href =
    //     `character.html?id=${id}`;
}


// ==========================
// 시작
// ==========================

updateFilterButtons();
renderCharacters();
