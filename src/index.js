let btn = document.createElement("button");
btn.innerHTML = "run my awsome code!";
btn.onclick = function () {
  //variables
  var test = prompt("what do you want to write");
  var test3 = test + " ";
  var test2 = "the text thats gonna get written is " + test;
  //lazy basic js code
  alert(test2);
  alert(test);
  alert("made by karim");
  document.write(test);
  document.write("\n");
  console.log("made by karim :)");
  document.title = test;
 mixpanel.track('buttonclick', {
  'source': "button",
  'is cool': true,
});
};
document.body.appendChild(btn);
