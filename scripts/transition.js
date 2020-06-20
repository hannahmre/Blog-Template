function color_change(tab) {
    if (tab == 'about') {
        document.body.style.backgroundColor = "#ffccff";
        document.getElementById('contentbox1').style.display = 'block';
        document.getElementById('contentbox2').style.display = 'none';
        document.getElementById('contentbox3').style.display = 'none';
        document.getElementById('contentbox4').style.display = 'none';
    } else if (tab == 'travel') {
        document.body.style.backgroundColor = "#ccccff";
        document.getElementById('contentbox2').style.display = 'block';
        document.getElementById('contentbox1').style.display = 'none';
        document.getElementById('contentbox3').style.display = 'none';
        document.getElementById('contentbox4').style.display = 'none';
    } else if (tab == 'recipes') {
        document.body.style.backgroundColor = "#ccffff";
        document.getElementById('contentbox3').style.display = 'block';
        document.getElementById('contentbox2').style.display = 'none';
        document.getElementById('contentbox1').style.display = 'none';
        document.getElementById('contentbox4').style.display = 'none';
    } else {
        document.body.style.backgroundColor = "#ccffcc";
        document.getElementById('contentbox4').style.display = 'block';
        document.getElementById('contentbox2').style.display = 'none';
        document.getElementById('contentbox3').style.display = 'none';
        document.getElementById('contentbox1').style.display = 'none';
    }

}