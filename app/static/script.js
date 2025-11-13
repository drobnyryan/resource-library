// Instant client-side filtering (title, tags, category)
const input = document.getElementById('search');
const list = document.getElementById('list');
const count = document.getElementById('count');


function normalize(s){ return (s||'').toString().toLowerCase(); }


function filter(q){
const qTokens = normalize(q).split(/\s+/).filter(Boolean);
const items = Array.from(list.querySelectorAll('.resource'));
let visible = 0;
items.forEach(item => {
const title = normalize(item.dataset.title);
const tags = normalize(item.dataset.tags);
const category = normalize(item.dataset.category);
const hay = `${title} ${tags} ${category}`;
const ok = qTokens.every(token => hay.includes(token));
item.style.display = ok ? '' : 'none';
if(ok) visible++;
});
count.textContent = `${visible} resources`;
}


input.addEventListener('input', (e) => filter(e.target.value));


// Optional: focus search on load
window.addEventListener('load', () => input.focus());
