function changeActive (event){
    const menu = document.querySelectorAll('.navbar-nav .nav-link');

    for (item of menu) {
        item.classList.remove('active');
    }

    event.target.classList.add('active');
}

