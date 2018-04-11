var content = document.getElementById('content');

document.getElementById('project1').addEventListener('click', addArticle1, false);
document.getElementById('project2').addEventListener('click', addArticle2, false);
document.getElementById('project3').addEventListener('click', addArticle3, false);

function addArticle1(){
  content.innerHTML = '';
  document.getElementById('project1').className = "active";
  document.getElementById('project2').classList.remove("active");
  document.getElementById('project3').classList.remove("active");
  var article = '<h3>JFTF</h3>';
  article += '<span>Web presence for local artist.</span>';
  article += '<a href="http://jacefromthefuture.com"><img src="images/jacesite.png" alt="Image of JFTF site."></a>';
  content.innerHTML = article;
}

function addArticle2(){
  content.innerHTML = '';
  document.getElementById('project1').classList.remove("active");
  document.getElementById('project2').className = "active";
  document.getElementById('project3').classList.remove("active");
  var article = '<h3>GetStarted</h3>';
  article += '<span>Hub of knowledge with the contribution of experts for people trying to learn new things.</span>';
  article += '<a href="https://github.com/EmmanuelZambrano/get-started/tree/master/get-started">GitHub</a>';
  content.innerHTML = article;
}

function addArticle3(){
  content.innerHTML = '';
  document.getElementById('project1').classList.remove("active");
  document.getElementById('project2').classList.remove("active");
  document.getElementById('project3').className = "active";
  var article = '<h3>FreeCad Style Guide</h3>';
  article += '<span>Style Guide for an Open Source Project.</span>';
  article += '<img src="images/FreeCAD.jpg" alt="Style Guide pt1.">';
  article += '<img src="images/FreeCAD2.jpg" alt="Style Guide pt2.">';
  article += '<img src="images/FreeCAD3.jpg" alt="Style Guide pt3.">';
  content.innerHTML = article;
}
