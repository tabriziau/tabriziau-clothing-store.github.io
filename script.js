const products = [
  // MEN — public U.S. price references: H&M, Levi's, adidas
  {id:1,cat:'men',name:'Slim Fit Easy-iron Shirt',price:19.99,brand:'H&M',type:'Shirt',sizes:'XS–XXL',img:'IEv6jFmJ_3w',badge:'ESSENTIAL'},
  {id:2,cat:'men',name:'Regular Fit Oxford Shirt',price:24.99,brand:'H&M',type:'Oxford',sizes:'XS–XXL',img:'t8vw3Qu5tgc'},
  {id:3,cat:'men',name:'Regular-Fit Corduroy Shirt',price:29.99,brand:'H&M',type:'Corduroy',sizes:'S–XXL',img:'Z_FMxkm7i5I'},
  {id:4,cat:'men',name:'Loose Fit Hoodie',price:24.99,brand:'H&M',type:'Hoodie',sizes:'XS–XXL',img:'jgnvFhVlkS4',badge:'POPULAR'},
  {id:5,cat:'men',name:'Loose-Fit Hooded Jacket',price:29.99,brand:'H&M',type:'Layering',sizes:'XS–XXL',img:'FyI2N5hLi7E'},
  {id:6,cat:'men',name:'Twill Overshirt',price:27.99,old:39.99,brand:'H&M',type:'Overshirt',sizes:'S–XXL',img:'a9xzsIVs0CM',badge:'SALE'},
  {id:7,cat:'men',name:'501® Original Men’s Jeans',price:84.95,brand:'Levi’s',type:'Denim',sizes:'28–42',img:'UTsC_bQeDAY',badge:'ICON'},
  {id:8,cat:'men',name:'Essentials 3-Stripes Fleece Hoodie',price:39.00,old:65.00,brand:'adidas',type:'Fleece',sizes:'XS–XXL',img:'uJbKa5BjLEI',badge:'SALE'},

  // WOMEN — public U.S. price references: H&M
  {id:9,cat:'women',name:'Wren High Rise Wide Leg Jeans',price:27.99,old:39.99,brand:'H&M',type:'Denim',sizes:'0–18',img:'KcIfpwoy-84',badge:'SALE'},
  {id:10,cat:'women',name:'Harper High Rise Wide Leg Jeans',price:34.99,brand:'H&M',type:'Denim',sizes:'0–20',img:'mSmU67tST_M',badge:'BESTSELLER'},
  {id:11,cat:'women',name:'Ava Ultra High Rise Wide Leg Jeans',price:39.99,brand:'H&M',type:'Denim',sizes:'0–18',img:'P0rFr9IU3IY'},
  {id:12,cat:'women',name:'Denim Shirt Dress',price:59.99,brand:'H&M',type:'Dress',sizes:'XS–XL',img:'uXeep6RVH9o',badge:'NEW'},
  {id:13,cat:'women',name:'Balloon-Sleeved Denim Dress',price:39.99,brand:'H&M',type:'Dress',sizes:'XS–XL',img:'ZXFXvsBc7Bg'},
  {id:14,cat:'women',name:'Activewear Jacket with SoftMove™',price:39.99,brand:'H&M Move',type:'Active',sizes:'XS–XL',img:'MnEGw76rq1w',badge:'MOVE'},
  {id:15,cat:'women',name:'Medium Support Sports Bra with SoftMove™',price:24.99,brand:'H&M Move',type:'Active',sizes:'XS–XL',img:'jsZxLVH23J8'},
  {id:16,cat:'women',name:'Linen-Blend Casual Dress',price:49.99,brand:'H&M Premium',type:'Dress',sizes:'XS–XL',img:'MvDoZLG5S-s',badge:'PREMIUM'},

  // BOYS — public U.S. price references: Carter's
  {id:17,cat:'boys',name:'Boys French Terry Joggers — Black',price:8.00,brand:"Carter's",type:'Joggers',sizes:'4–14',img:'_gYCmYwgRw4',badge:'VALUE'},
  {id:18,cat:'boys',name:'Boys Fleece Zip-Up Hoodie — Black',price:10.00,brand:"Carter's",type:'Hoodie',sizes:'4–14',img:'zRGtMqT4bW8'},
  {id:19,cat:'boys',name:'Boys Striped Long-Sleeve T-Shirt',price:8.00,brand:"Carter's",type:'T-Shirt',sizes:'4–14',img:'RcOsEAA61Bw'},
  {id:20,cat:'boys',name:'Boys Color Block Long-Sleeve T-Shirt',price:8.00,brand:"Carter's",type:'T-Shirt',sizes:'4–14',img:'mNhXby6xJtQ',badge:'NEW'},
  {id:21,cat:'boys',name:'Boys Long-Sleeve Henley T-Shirt',price:10.00,brand:"Carter's",type:'Henley',sizes:'4–14',img:'9_SGJm3t8Mo'},
  {id:22,cat:'boys',name:'Organic Cotton French Terry Cargo Pants',price:20.00,brand:"Carter's",type:'Cargo',sizes:'4–14',img:'z3jeIZHa3EY'},
  {id:23,cat:'boys',name:'Organic Cotton Flannel Button-Down Shirt',price:26.00,brand:"Carter's",type:'Shirt',sizes:'4–14',img:'9d2GCcWvzls'},
  {id:24,cat:'boys',name:'Stretch Chino Uniform Shorts — Navy',price:15.00,brand:"Carter's",type:'Shorts',sizes:'4–14',img:'Mf0VznFeenQ'},

  // GIRLS — public U.S. price references: Carter's
  {id:25,cat:'girls',name:'Floral Collared Corduroy Dress — Cream',price:22.00,brand:"Carter's",type:'Dress',sizes:'4–14',img:'oYYZPGtc73A',badge:'NEW'},
  {id:26,cat:'girls',name:'Cotton Stretch Leggings — Grey',price:8.00,brand:"Carter's",type:'Leggings',sizes:'4–14',img:'JuWbtIyagaM'},
  {id:27,cat:'girls',name:'Long-Sleeve Top — Pink',price:10.00,brand:"Carter's",type:'Top',sizes:'4–14',img:'RWLoaK9TqNA'},
  {id:28,cat:'girls',name:'Floral Long-Sleeve Top — Burgundy',price:11.00,brand:"Carter's",type:'Top',sizes:'4–14',img:'BqsLiwl0SKQ'},
  {id:29,cat:'girls',name:'Floral Embroidered Cropped Wide-Leg Pants',price:21.00,brand:"Carter's",type:'Pants',sizes:'4–14',img:'bgw5aPz92Lc'},
  {id:30,cat:'girls',name:'Bow Layered Fleece Dress — Green',price:23.00,brand:"Carter's",type:'Dress',sizes:'4–14',img:'oYKIAC-Vs5E',badge:'FAVORITE'},
  {id:31,cat:'girls',name:'Floral Denim Long-Sleeve Dress',price:22.00,brand:"Carter's",type:'Dress',sizes:'4–14',img:'3EfH8nEdL-g'},
  {id:32,cat:'girls',name:'Floral Fleece Zip-Up Hoodie — Blue',price:22.00,brand:"Carter's",type:'Hoodie',sizes:'4–14',img:'fkD0zPn13Tg'}
];

const categoryNames = {men:'Men',women:'Women',boys:'Boys',girls:'Girls'};
let activeFilter = 'all';
let cart = 0;
const catalog = document.getElementById('catalog');
const productSearch = document.getElementById('productSearch');

function imageUrl(id){ return `https://unsplash.com/photos/${id}/download?force=true&w=900`; }
function money(n){ return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n); }

function render(){
  const q = productSearch.value.trim().toLowerCase();
  const visible = products.filter(p => (activeFilter==='all'||p.cat===activeFilter) && `${p.name} ${p.brand} ${p.type}`.toLowerCase().includes(q));
  const cats = activeFilter==='all' ? ['men','women','boys','girls'] : [activeFilter];
  const html = cats.map(cat=>{
    const list=visible.filter(p=>p.cat===cat); if(!list.length) return '';
    return `<section class="category-block ${cat}" id="${cat}">
      <div class="category-title"><h3>${categoryNames[cat]}</h3><span>${list.length} styles</span></div>
      <div class="product-grid">${list.map(card).join('')}</div>
    </section>`;
  }).join('');
  catalog.innerHTML = html || '<div class="empty">No styles matched your search.</div>';
  document.querySelectorAll('.add-btn').forEach(btn=>btn.addEventListener('click',()=>addToBag(btn.dataset.id)));
}

function card(p){
  return `<article class="product-card">
    <figure class="product-media">
      <span class="visual-fallback">${categoryNames[p.cat].toUpperCase()}</span>
      <img src="${imageUrl(p.img)}" alt="Representative fashion photography for ${p.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.display='none'">
      ${p.badge?`<span class="badge">${p.badge}</span>`:''}
    </figure>
    <div class="product-info">
      <div class="product-topline"><div class="product-name">${p.name}</div><div class="product-price">${money(p.price)}${p.old?`<span class="old-price">${money(p.old)}</span>`:''}</div></div>
      <div class="product-meta"><span>${p.brand} • ${p.type}</span><span>${p.sizes}</span></div>
      <button class="add-btn" data-id="${p.id}">ADD TO BAG</button>
    </div>
  </article>`;
}

function addToBag(id){
  cart++; document.getElementById('cartCount').textContent=cart;
  const p=products.find(x=>x.id==id); const toast=document.getElementById('toast');
  toast.textContent=`${p.name} added to bag`; toast.classList.add('show'); setTimeout(()=>toast.classList.remove('show'),1800);
}

document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); activeFilter=btn.dataset.filter; render();
}));
productSearch.addEventListener('input',render);
document.getElementById('searchToggle').addEventListener('click',()=>document.getElementById('productSearch').focus());
document.getElementById('newsletterForm').addEventListener('submit',e=>{e.preventDefault();const t=document.getElementById('toast');t.textContent='Welcome to the TABRIZIAU edit';t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2000);e.target.reset();});
render();
