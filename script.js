const acodians = document.querySelectorAll(".accordian");
acodians.forEach(acodians => {
    const icon = acodians.querySelector(".icon");
    const ans = acodians.querySelector('.answer')

    acodians.addEventListener("click", () => {
        // icon.classList.toggle('active');
        // ans.classList.toggle('active')


        if(icon.classList.contains("active")){
            icon.classList.remove('active');
            ans.style.maxHeight = null;
        }else{
            icon.classList.add('active');
            ans.style.maxHeight = ans.scrollHeight + 'px';

        }


    })


})