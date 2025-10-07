(function (username){
    //get userinfo from index.html
    const user = document.getElementById('userinfo');

    //creat an enlement for welcome message

    const spanW = document.createElement('span');
    spanW.textContent=`Welcome ${username}`;
    // creat a photo 
    const photo = document.createElement('img');
    photo.src ="https://i.pravatar.cc/40";
    photo.alt ="profile picture";

    // append them to the nav bar
    user.appendChild(spanW);
    user.appendChild(photo);
    

}




)("Jhon");