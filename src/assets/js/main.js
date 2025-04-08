const menuBtn = document.getElementById("menu-btn");
const menuBar = document.getElementById('menuBar');

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("menu-active");
    menuBar.classList.toggle("show");
});

// show All Pets Data
function showAllPets(petsDatas) {
    const petsData = getElementById('petsData');
    const loader = getElementById('loader');
    petsData.innerHTML = "";
    petsData.classList.add('grid');
    petsData.classList.remove('md:col-span-10');
    getElementById('selectedItem').classList.remove('hidden');

    if (petsDatas.length > 0) {
        // যদি ডেটা থাকে, ২ সেকেন্ড লোড দেখিয়ে তারপর দেখাও
        setTimeout(() => {
            loader.classList.add('hidden');
            petsDatas.forEach(data => {
                petsData.innerHTML += `
                    <div class="rounded-xl overflow-hidden shadow-md p-2">
                        <img class="w-full" src="${data.image}" alt="card image">
                        <div class="pt-6 pb-4 border-b-2 border-stone-100">
                            <div class="text-lg md:text-xl font-bold">${data.pet_name}</div>
                            <div class="flex gap-1 items-center mt-2">
                                <img src="src/assets/images/icons/Frame.png" class="w-5 h-5" alt="">
                                <p class="text-gray-700 text-base">
                                    Breed: ${!data.breed ? 'No Data Provided' : data.breed}
                                </p>
                            </div>
                            <div class="flex gap-1 items-center mt-2">
                                <img src="src/assets/images/icons/Frame-1.png" class="w-5 h-5" alt="">
                                <p class="text-gray-700 text-base">
                                    Birth: ${!data.date_of_birth ? 'No Data Provided' : data.date_of_birth}
                                </p>
                            </div>
                            <div class="flex gap-1 items-center mt-2">
                                <img src="src/assets/images/icons/Frame-2.png" class="w-5 h-5" alt="">
                                <p class="text-gray-700 text-base">
                                    Gender: ${!data.gender ? 'No Data Provided' : data.gender}
                                </p>
                            </div>
                            <div class="flex gap-1 items-center mt-2">
                                <img src="src/assets/images/icons/Frame-3.png" class="w-5 h-5" alt="">
                                <p class="text-gray-700 text-base">
                                    Price : ${!data.price ? 'No Data Provided' : data.price}$
                                </p>
                            </div>
                        </div>
                        <div class="flex justify-between mt-4 mb-5">
                            <div class="border-2 border-teal-100 hover:border-teal-200 cursor-pointer px-4 py-2 rounded-md flex items-center">
                                <img src="src/assets/images/icons/Frame 1171276315.png" class="w-full" id="thumbnil" alt="thumbnil">
                            </div>
                            <div class="border-2 border-teal-100 hover:border-teal-200 cursor-pointer px-4 py-2 rounded-md text-teal-600 font-bold">
                                Adopt
                            </div>
                            <div class="border-2 border-teal-100 hover:border-teal-200 cursor-pointer px-4 py-2 rounded-md text-teal-600 font-bold">
                                Details
                            </div>
                        </div>
                    </div>
                `;
            });
        }, 2000);
    } else {
        loader.classList.add('hidden');
        petsData.classList.add('md:col-span-10');
        petsData.classList.remove('grid');
        getElementById('selectedItem').classList.add('hidden');
        petsData.innerHTML = `
            <div class="flex flex-col items-center justify-center">
                <img src="../src/assets/images/error.webp" alt="No data Found Img"/>
                <h2 class="font-bold text-lg text-center">No Data Found Here</h2>
            </div>
        `;
    }
}

function showAllCategory(categoryDatas) {
    const categoryItem = getElementById('categoryItem');
    categoryDatas.forEach((data)=> 
        categoryItem.innerHTML += `
        <button type="button"
            class="category-item flex justify-center gap-2 items-center border border-stone-200 p-2 rounded-md hover:bg-stone-100 cursor-pointer" id="${data.category}">
            <img src="${data.category_icon}" class="w-7 lg:w-14" alt="dog image">
            <h6 class="font-bold text-base md:text-xl lg:text-2xl">${data.category}</h6>
        </button>
    `
    ) 
}

function showCategoryData() {
    const categoryItem = getElementById('categoryItem');
    const loader = getElementById('loader');
    categoryItem.addEventListener('click', (event)=>{
        const target = event.target.closest('.category-item');
        if (!target) {
            return;
        };
        loader.classList.remove('hidden');
        loader.classList.add('flex');
        petsData.innerHTML = '';
       
        loadData(`https://openapi.programming-hero.com/api/peddy/category/${target.id}`, showAllPets);
    })
}

loadData('https://openapi.programming-hero.com/api/peddy/pets', showAllPets);
loadData('https://openapi.programming-hero.com/api/peddy/categories', showAllCategory);
showCategoryData();