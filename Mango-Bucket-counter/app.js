const bucketLeft = document.querySelector(".bucket-1 span");
const bucketRight = document.querySelector(".bucket-2 span");

const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

let totalCount = 10;
let bucketLeftCount = 0;
let bucketRightCount = totalCount - bucketLeftCount;

bucketRight.innerText = bucketRightCount;
bucketLeft.innerText = bucketLeftCount;

leftBtn.addEventListener("click", () => {
  if (bucketLeftCount < 10) {
    bucketLeftCount++;
    bucketRightCount--;
    bucketLeft.innerText = bucketLeftCount;
    bucketRight.innerText = bucketRightCount;
  }
});

rightBtn.addEventListener("click", () => {
  if (bucketRightCount < 10) {
    bucketRightCount++;
    bucketLeftCount--;
    bucketRight.innerText = bucketRightCount;
    bucketLeft.innerText = bucketLeftCount;
  }
});
