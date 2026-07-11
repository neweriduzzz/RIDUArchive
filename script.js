// =======================================
// RIDUArchive Character System
// =======================================

// 캐릭터 데이터
const characters = [

{
    id:"Evelyn",
    name:"이블린",
    rank:"S",
    faction:"스타즈 오브 리라",
    attr:"Fire",
    job:"Attack",
    img:"Evelyn.png"
},

{
    id:"Orphie",
    name:"오피&「도깨비불」",
    rank:"S",
    faction:"운명의 심판",
    attr:"Fire",
    job:"Attack",
    img:"Orphie_Magus.png"
},

{
    id:"Soldier11",
    name:"11호",
    rank:"S",
    faction:"오볼스 소대",
    attr:"Fire",
    job:"Attack",
    img:"Soldier11.png"
}

];

// 현재 선택
let activeAttribute=null;
let activeJob=null;

// 카드 출력
function renderCharacters(){

    const grid=document.getElementById("characterGrid");
    if(!grid) return;

    grid.innerHTML="";

    const search=document.getElementById("searchInput").value.toLowerCase();

    characters.forEach(character=>{

        if(activeAttribute && character.attr!==activeAttribute) return;
        if(activeJob && character.job!==activeJob) return;
        if(!character.name.toLowerCase().includes(search)) return;

        grid.innerHTML+=`
        <div class="card"
        onclick="location.href='agent.html?id=${character.id}'">

            <img src="${character.img}">

            <div class="card-name">
                ${character.rank} Rank<br>
                ${character.name}
            </div>

        </div>
        `;

    });

}

// 검색
function filterCharacters(){
    renderCharacters();
}

// 버튼 색상 업데이트
function updateButtonState(){

    document.querySelectorAll(".filter-btn").forEach(btn=>{

        btn.classList.remove("active");

        const onclick=btn.getAttribute("onclick");

        if(!onclick) return;

        const type=onclick.match(/'(.+?)'/)[1];

        if(type===activeAttribute || type===activeJob){
            btn.classList.add("active");
        }

    });

}

// 필터
function toggleFilter(type){

    const attrs=[
        "Ether",
        "Electric",
        "Physical",
        "Ice",
        "Fire",
        "Wind"
    ];

    const jobs=[
        "Attack",
        "Anomaly",
        "Support",
        "Stun",
        "Defense",
        "Rupture"
    ];

    if(attrs.includes(type)){

        if(activeAttribute===type)
            activeAttribute=null;
        else
            activeAttribute=type;

    }

    if(jobs.includes(type)){

        if(activeJob===type)
            activeJob=null;
        else
            activeJob=type;

    }

    updateButtonState();
    renderCharacters();

}

// 시작
updateButtonState();
renderCharacters();
