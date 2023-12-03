//ts-sction
const teamWrapper = document.querySelector("#ts-team .ts-box-wrapper");
const teaamBox = document.querySelector("#ts-team .ts-box-wrapper .box");
const prevBtn = document.querySelector("#ts-team .owl-prev");
const nextBtn = document.querySelector("#ts-team .owl-next");

prevBtn.addEventListener("click", () => {
    teamWrapper.scrollLeft -= teaamBox.clientWidth - 10;
})
nextBtn.addEventListener("click", () => {
    teamWrapper.scrollLeft += teaamBox.clientWidth + 10;
})