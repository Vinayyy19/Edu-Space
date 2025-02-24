let loader = document.querySelector('.loader-container');
// let heroContainer = document.querySelector('.hero-container');
// let adminLogin = document.querySelector('.post-course');
// let studentLogin = document.querySelector('.login-btn');

// let information = [
//     { id: 1, title: "Javascript", img: "assets/img/js.png" },
//     { id: 2, title: "HTML - TUTORIAL", img: "assets/img/html.png" },
//     { id: 3, title: "ADVANCED - CSS", img: "assets/img/css.png" },
//     { id: 4, title: "REACT - MASTERY", img: "assets/img/react.png" },
//     { id: 5, title: "MERN - FULLCOURSE", img: "assets/img/mern.png" },
//     { id: 6, title: "JAVA - FULLSTACK", img: "assets/img/java.png" },
//     { id: 7, title: "UI /UX ", img: "assets/img/uiux.png" },
//     { id: 8, title: "DSA", img: "assets/img/dsa.png" },
// ]
window.addEventListener('load', () => {
    loader.style.display = "none";
    loader.remove();
})
// let enrollBtn = 0;

// information.forEach(info => {
//     let courseContainer = document.createElement('div');
//     courseContainer.classList.add('course-container');
//     heroContainer.appendChild(courseContainer);
//     let img = document.createElement('img');
//     img.classList.add('img');
//     img.src = info.img;
//     courseContainer.appendChild(img);
//     let courseTitle = document.createElement('h4');
//     courseTitle.classList.add('course-title');
//     courseTitle.innerText = info.title;
//     courseContainer.appendChild(courseTitle);
//     enrollBtn = document.createElement('button');
//     enrollBtn.classList.add('enroll-btn');
//     enrollBtn.setAttribute('aria-value', info.id);
//     courseContainer.appendChild(enrollBtn);
//     let enrollLink = document.createElement('a');
//     enrollLink.innerText = "Enroll now";
//     enrollLink.setAttribute('target', "_blank")
//     enrollLink.href = info.video;
//     enrollBtn.appendChild(enrollLink);
// })


