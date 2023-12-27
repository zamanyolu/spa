import Dashboard from "../views/Dashboard.js";
import Posts from "../views/Posts.js";
import Settings from "../views/Settings.js";


console.log("JS is loaded!");

const navigateTo = url =>{
    history.pushState(null, null, url);
    router();
};
const router = async () => {
  const routes = [
    { path: "/", view:Dashboard},
      {path: "/posts", view:Posts},
      {path: "/settings", view:Settings},
    // { path: "/", view:() => console.log("Viewing Dashboard")},
    // { path: "/posts", view:() => console.log("Viewing Posts")},
    // { path: "/settings", view:() => console.log("Viewing Settings")},

  ];

  const potentialMatches = routes.map(route => {
      return {
          route : route,
          isMatch: location.pathname === route.path
      };
  });

  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch );

  if(!match){
      match = {
          route: routes[0],
          isMatch: true
      };
  }

  const view = new match.route.view();

  document.querySelector("#app").innerHTML = await view.getHtml();

  console.log(match.route.view());
};

window.addEventListener("popstate", router); // bu olmazsa ileri geri butonlarına tıklnınca birşey yapılmaz

document.addEventListener("DOMContentLoaded", () => {

    document.body.addEventListener("click", e =>{
        if (e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});



