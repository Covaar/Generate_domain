/* eslint-disable */
/* import "bootstrap"; */

import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateDomain();
  });
  let generateDomain = () => {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];
    let domain = [".com", ".us", ".net", ".cl"];
    let dominios = [];

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let l = 0; l < domain.length; l++)
            dominios.push(pronoun[i] + adj[j] + noun[k] + domain[l] + "\n");
        }
      }
    }

    return dominios;
  };
  console.log(generateDomain());
};
