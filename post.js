let post = document.getElementsByClassName('post');
let posts = document.querySelectorAll('.posts')
let text = document.querySelectorAll('.e-text-post');
let photo = document.querySelectorAll('.post-photo');
for (let i = 0; i < post.length; i++) {
    post[i].addEventListener('click', function () {
        for (let j = 0; j < post.length; j++) {
            for (let k = 0; k < posts.length; k++) {
                for (let l = 0; l < text.length; l++) {
                    for (let m = 0; m < photo.length; m++) {
                        posts[k].style = "grid-template-columns: 1fr";
                        photo[m].style = "width: 80%; grid-template-rows: 50vw";
                        text[l].style = "display: block; width: 78%;";
                    }
                }
            }
        }
    })
}