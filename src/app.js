/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com", ".net", ".us", ".io"];

  let domainPronoun = "";
  let domainAdj = "";
  let domainNoun = "";

  for (let i = 0; i < 1; i++) {
    for (let x = 0; x < pronoun.length; x++) {
      domainPronoun = pronoun[x];
      for (let y = 0; y < adj.length; y++) {
        domainAdj = adj[y];
        for (let z = 0; z < noun.length; z++) {
          domainNoun = noun[z];

          let domain = domainPronoun + domainAdj + domainNoun + ".com";
          console.log(domain);
        }
      }
    }
  }
};
