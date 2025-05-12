import "/index.css";
import data from "./data/db.json";
import {
  navbar_container_logo,
  navbar_container_create_img,
  main_container,
  left,
  left_profile,
  left_sidebar_post,
  left_sidebar,
  right_request,
  right,
  middle,
  middle_highline,
  middle_create_post,
  middle_cardList,
  right_message,
  friend_list,
} from "@/js/common.js";

navbar_container_logo.textContent = "VibeSpace";
navbar_container_create_img.src = data.profile.img_src;
left.appendChild(left_profile);
left.appendChild(left_sidebar);

left.appendChild(left_sidebar_post);
middle.appendChild(middle_highline);
middle.appendChild(middle_create_post);
middle.appendChild(middle_cardList);

// console.log(middle);
right.appendChild(right_message);
right_message.appendChild(friend_list);
right.appendChild(right_request);
