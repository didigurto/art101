/**
 * Author:    Diego
 * Created:   04.27.2022
 *
 **/
function sortUserName(){
  var userName = prompt("Please enter your name", " ");
  console.log("Username: ", userName);

  var nameArray = userName.split('');
  console.log("nameArray", nameArray);

  var nameArraySort = nameArray.sort();
  console.log("nameArraySort", nameArraySort);

  var nameSorted = nameArraySort.join('');
  console.log("nameSorted", nameSorted);

  return nameSorted;
}

document.writeln("Oh hey, I've fixed your name: ",
    sortUserName(), "</br>");


/*if (userName != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + userName + "! How are you today?";*/
