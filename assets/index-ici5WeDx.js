(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();async function d(){try{const t=(await(await fetch("https://randomuser.me/api/")).json()).results[0];return{name:`${t.name.first} ${t.name.last}`,email:t.email,phone:t.phone,location:`${t.location.city}, ${t.location.country}`,picture:t.picture.large}}catch(o){throw console.error("Error fetching user data:",o),o}}async function p(o){const s=`https://world-time-by-api-ninjas.p.rapidapi.com/v1/worldtime?city=${o}`,t={method:"GET",headers:{"X-RapidAPI-Key":"bcf6e307a7mshdd1c91718c1ce3cp177c50jsn8c748d59f43a","X-RapidAPI-Host":"world-time-by-api-ninjas.p.rapidapi.com"}};try{const e=await(await fetch(s,t)).json();return`${e.hour}:${e.minute}:${e.second}`}catch(r){throw console.error("Error fetching current time:",r),r}}function u(){return new Promise(async(o,s)=>{const t=document.querySelector(".container"),r=document.querySelector(".card");try{const e=await d(),n=await p(e.location),a=document.createElement("img");a.src=e.picture,a.alt="User Image",a.id="userImage";const c=document.createElement("div");if(c.classList.add("card-info"),c.innerHTML=`
        <span><strong>Name: ${e.name}</strong></span>
        <span><strong>Email: ${e.email}</strong></span>
        <span><strong>Phone: ${e.phone}</strong></span>
        <span><strong>Location: ${e.location}</strong></span>
        <span><strong>Current Time: ${n}</strong></span>
      `,r)r.innerHTML="",r.appendChild(a),r.appendChild(c);else{const i=document.createElement("div");i.classList.add("card"),i.appendChild(a),i.appendChild(c),t.insertBefore(i,t.firstChild)}o(e)}catch(e){console.error("Error generating user:",e),s(e)}})}document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".container");function s(){const r=document.createElement("div");r.classList.add("card");const e=document.createElement("img");e.src="./user_nt_found.jpg",e.alt="User Image",e.id="userImage";const n=document.createElement("div");n.classList.add("card-info"),n.innerHTML=`
      <span><strong>Name: name surname</strong></span>
      <span><strong>Mail: mail</strong></span>
      <span><strong>Phone: phone</strong></span>
      <span><strong>Location: city</strong></span>
      <span><strong>Current Time: time</strong></span>
    `,r.appendChild(e),r.appendChild(n),o.appendChild(r)}s();const t=document.createElement("button");t.textContent="Generate User",t.id="generateButton",t.addEventListener("click",u),o.appendChild(t)});
