import React from "react";
import "./SideNav.css";

export default function SideNav() {
  const menus = [
    { to: "/r/popular", text: "Popular" },
    { to: "/r/all", text: "All" },
    { to: "/r/random", text: "Random" },
  ];
  const subreddits = [
    "askreddit",
    "worldnews",
    "videos",
    "funny",
    "todayilearned",
    "pica",
    "gaming",
    "movies",
    "news",
    "gifts",
    "aww",
    "mildlyinteresting",
    "askreddit",
    "showerthoughts",
    "television",
    "jokes",
    "science",
    "soccer",
    "internertisbeautifull",
    "dataisbeautifull",
  ];

  return (
    <div className="sidenav">
      <div className="sidenav__logo">
        <img src="https://play-lh.googleusercontent.com/MDRjKWEIHO9cGiWt-tlvOGpAP3x14_89jwAT-nQTS6Fra-gxfakizwJ3NHBTClNGYK4" />
      </div>
      <div className="sidenav__search">
        <input type="text" name="search" placeholder="Search" />
        <i className="fas fa-search"></i>
      </div>
      <div className="sidenav__link">
        <ul className="sidenav__menu">
          {menus.map((menu) => (
            <li>
              <a href={menu.to}>{menu.text}</a>
            </li>
          ))}
        </ul>
        <hr />
        <ul className="sidenav__subreddit">
          {subreddits.map((subreddit) => (
            <li>
              <a href={"/r/${subreddit}"}>{subreddit}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
