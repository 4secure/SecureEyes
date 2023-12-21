var drawer = document.querySelector('.Drawer')
var link = document.querySelectorAll('.link')
var linkBox = document.querySelectorAll('#linkBox')
var btn = document.querySelector('#drawer-btn')
var openImg = document.querySelector('#openImg')
var closeImg = document.querySelector('#closeImg')
var linkAll = document.querySelector('.linkAll')
var accountBox = document.querySelector('.account-box')
var arrow = document.querySelector('.arrow')
var AddUser = document.querySelector('.adduser')
var AddUserBtn = document.querySelector('.AddUserBtn')
var cancelBtn = document.querySelector('.cancelBtn')
var formBtn = document.querySelector('.formBtn')

var openClose = true
var Account = true



btn.addEventListener('click', function () {


    if (openClose) {
        drawer.style.width = '100px'
        openImg.classList.add('hidden')
        closeImg.classList.remove('hidden')
        btn.style.rotate = "180deg"
        linkAll.style.marginLeft = "20px"
        for (let i = 0; i < link.length; i++) {
            link[i].style.display = 'none'
        }
        for (let i = 0; i < linkBox.length; i++) {
            linkBox[i].classList.add("icon-box")
        }
        openClose = false
    } else {
        drawer.style.width = "18rem"
        btn.style.rotate = "0deg"
        openImg.classList.remove('hidden')
        closeImg.classList.add('hidden')
        linkAll.style.marginLeft = "0px"
        for (let i = 0; i < link.length; i++) {
            link[i].style.display = 'block'
        }
        for (let i = 0; i < linkBox.length; i++) {
            linkBox[i].classList.remove("icon-box")
        }
        openClose = true
    }


})

arrow.addEventListener('click', function () {
    if (Account) {
        accountBox.style.height = "max-content";
        Account = false
    } else {
        accountBox.style.height = "0";
        Account = true
    }
})

AddUserBtn.addEventListener('click', function () {
    AddUser.classList.remove('hidden')
})
cancelBtn.addEventListener('click', function () {
    AddUser.classList.add('hidden')
})
formBtn.addEventListener('click', function () {
    AddUser.classList.add('hidden')
})


