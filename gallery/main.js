// function myFunction(id) {
//     const reg = ".{7}$";
//     console.log("myfunciton , id: " + id);
//     console.log("myfunciton , src: " + document.getElementById(id).src.replace(reg, "500/350"));
//     //document.getElementById(id).;
//   }

const thumbnails = document.querySelectorAll("img");
//const thumbnail1 = thumbnails[1];

//console.log("thumbnail: ", thumbnails);

// console.log(
//   "thumbnail1: ",
//   thumbnails[1].src.replace(new RegExp(".{7}$"), "750/500")
// );
const outlet = document.querySelector("#outlet");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    console.log("thumbnail: ", thumbnail);
    const biggerSource = thumbnail.src.replace(new RegExp(".{7}$"), "450/300");
    console.log("bigger: ", biggerSource);
    if (outlet) {
      outlet.innerHTML = `<img src="${biggerSource}" alt="${thumbnail.alt}"/>`;
    }
  });
});
