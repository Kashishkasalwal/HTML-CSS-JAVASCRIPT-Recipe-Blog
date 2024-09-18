const searchon = document.querySelector('#searchopen');
const searchoff = document.querySelector('#removesearch');
const searchinput = document.querySelector('.searchinput');

searchinput.style.display = "none";

searchon.addEventListener('click', () => {
    if (searchinput.style.display === 'none') {
        searchinput.style.display = 'flex';
    } else {
        searchinput.style.display = 'none';
    }
})

searchoff.addEventListener('click', () => {
    if (searchinput.style.display === 'flex') {
        searchinput.style.display = 'none';
    } else {
        searchinput.style.display = 'flex';
    }
});

// slider header

// you can add your data as per you want and also change

const posts = [
    {
        title: "Browny Cookies",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptas cumque voluptatem, pariatur obcaecati eius!",
        link: "https://google.com",
        bgImg: "../img/cookies-7.jpg",
        label: "cookies",
    },
    {
        title: "Caramel Cookies",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptas cumque voluptatem, pariatur obcaecati eius!",
        link: "https://google.com",
        bgImg: "../img/cookies-6.jpg",
        label: "cookies",
    },
    {
        title: "Healthy Steck Cookies",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptas cumque voluptatem, pariatur obcaecati eius!",
        link: "https://google.com",
        bgImg: "../img/cheesepizza.jpg",
        label: "pizza",
    },
    {
        title: "Browny Cookies",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptas cumque voluptatem, pariatur obcaecati eius!",
        link: "https://google.com",
        bgImg: "../img/breakfast.jpg",
        label: "pizza",
    },
    {
        title: "Browny Cookies",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptas cumque voluptatem, pariatur obcaecati eius!",
        link: "https://google.com",
        bgImg: "../img/grill.jpg",
        label: "cookies",
    }
];

let currentSlide = 0;

function showSlide(slideIndex){
    const slide = posts[slideIndex];
    document.querySelector('.headertitle').textContent = slide.title;
    document.querySelector('.headerpera').textContent = slide.desc;
    document.querySelector('.headerbtn').textContent = slide.link;
    document.querySelector('.headerimg').style.backgroundImage = slide.bgImg;
}

//initial slide
showSlide(currentSlide);

// header Posts Change Slider
const headerPosts = document.querySelector('.headercards');


const headerPostsCards = () => {
    const updateSlider = () => {
        headerPosts.innerHTML = '';
        for (let i = currentSlide; i < currentSlide + 6; i++){
            const post = posts[i % posts.length];
            const postElement = document.createElement('a');
            postElement.classList.add('headercard');
            postElement.classList.add('flex');
            postElement.href = `${post.link}`;
            postElement.innerHTML = `
            <img src="${post.bgImg}" alt="">
                    <div class="hcardinfo">
                        <span>${post.label}</span>
                        <h3>${post.title}</h3>
                    </div>
            `


            headerPosts.appendChild(postElement);
        }
    };
    //initialize the slider
    updateSlider();
};

headerPostsCards();