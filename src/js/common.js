import data from "../../data/db.json";
import { create_post } from "./components/mainLeft/createPost";
import { Profile } from "./components/mainLeft/profile";
import { Sidebar } from "./components/mainLeft/sidebar";
import { Request } from "./components/mainRight/request";
import { Highline } from "./components/mainMiddle/highline";
import { create_post as create_post_middle } from "@/js/components/mainMiddle/createPost";
import { cardList } from "@/js/components/mainMiddle/cardList";
import { create_message_primary } from "./components/mainRight/message,js";
import { FriendList } from "./components/mainRight/friendList";
/* --- Nav Bar ---*/
export const navbar = document.querySelector("nav");
export const navbar_container = navbar.querySelector(".container");
export const navbar_container_logo = navbar.querySelector(".logo");
export const navbar_container_searchBar = navbar.querySelector(".search-bar");
export const navbar_container_create = navbar.querySelector(".create");
export const navbar_container_create_img =
  navbar_container_create.querySelector("img");
/* --- Main ---*/
export const main = document.querySelector("main");
export const main_container = main.querySelector(".container");

/* --- Main Left---*/
export const left = main.querySelector(".main-left");
export const left_profile = new Profile(data.profile).dom;
export const left_sidebar = new Sidebar(data.sidebar).dom;
export const left_sidebar_post = create_post(); //直接用的function，不用单开一个class

/* --- Main Middle---*/
export const middle = main.querySelector(".main-middle");
export const middle_highline = new Highline(data.highline).dom;
export const middle_create_post = create_post_middle(data.profile); //返回一个节点
export const middle_cardList = new cardList(data.cards).dom;

/* --- Main Right---*/

export const right = main.querySelector(".main-right");
export const right_message = create_message_primary(); //直接用的function，不用单开一个class
export const friend_list = new FriendList(data.message).dom;
export const right_request = new Request(data.request).dom; //返回一个节点
