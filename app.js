const reviews = [

    {
        id: 1,
        name: 'Susan Smith',
        job: 'Web Developer',
        img: '/media/person-1_rfzshl.jpg',
        info: 'I\'m baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry'
    },

    {
        id: 2,
        name: 'Anna Johnson',
        job: 'Web designer',
        img: '/media/person-2_np9x5l.jpg',
        info: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.'
    },

    {
        id: 3,
        name: 'Peter jones',
        job: 'Intern',
        img: '/media/person-3_ipa0mj.jpg',
        info: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.'
    },

    {
        id: 4,
        name: 'Bill anderson',
        job: 'The Boss',
        img: '/media/person-4_t9nxjt.jpg',
        info: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.'
    }
]


const img = document.getElementById('person-img');
const _name = document.getElementById('author');
const job = document.getElementById('job');
const review = document.getElementById('info');

const prev_btn = document.querySelector('.prev-btn');
const next_btn = document.querySelector('.next-btn');
const random_btn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
    const item = reviews[currentItem];
    console.log(item);

    img.src = item.img;

    _name.textContent = item.name;

    job.textContent = item.job;

    review.textContent = item.info;
})

function getPerson(person) {
    item = reviews[person];

    img.src = item.img;

    _name.textContent = item.name;

    job.textContent = item.job;

    review.textContent = item.info;
}

next_btn.addEventListener('click', () => {
    currentItem++;
    console.log(currentItem++);

    if (currentItem > reviews.length - 1) {

        currentItem = 0;

    }
    getPerson(currentItem);
})

prev_btn.addEventListener('click', () => {
    currentItem--

    if (currentItem < 0) {

        currentItem = reviews.length - 1;

    }
    getPerson(currentItem);
})

random_btn.addEventListener('click', () => {
    random = randomNumber();

    console.log(random);

    getPerson(random)
})

const randomNumber = function () {

    return Math.floor(Math.random() * reviews.length);

}





















