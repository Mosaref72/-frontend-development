let content = document.querySelector(".content");

let div = document.createElement("div");
div.innerHTML = "Mosaref Paik javascript";
div.style.backgroundColor = "red";
div.style.padding = "9px";
div.style.textAlign = "center";
div.style.color = "#fff";
content.appendChild(div);

function addli(list) {
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  li.innerText = list ;
  ul.appendChild(li);
  content.appendChild(ul);
}
addli("Home")
addli("About")
addli("Contact")
addli("Services")

let img = document.createElement("img");
img.src =
  "https://images.unsplash.com/photo-1682905926517-6be3768e29f0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

img.style.height = "200px";
img.style.width = "200px";

content.appendChild(img);
