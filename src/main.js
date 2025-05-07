let imgsarry = [
    "src/src_pic/bwershapic/1.jpg",
    "src/src_pic/bwershapic/2.jpg",
    "src/src_pic/bwershapic/3.jpg",
    "src/src_pic/bwershapic/4.jpg",
    "src/src_pic/bwershapic/5.jpg",
    "src/src_pic/bwershapic/6.jpg",
    "src/src_pic/bwershapic/7.jpg"
  ];
  
  let imgElements = [
    document.getElementById("img1"),
    document.getElementById("img2"),
    document.getElementById("img3"),
    document.getElementById("img4"),
    document.getElementById("img5")
  ];
  
  let startIndex = 0;
  
  function updateImages() {
    for (let i = 0; i < imgElements.length; i++) {
      let img = imgElements[i];
      let imgIndex = (startIndex + i) % imgsarry.length;
  
      img.classList.remove("show");
      img.classList.add("fade");

      setTimeout(() => {
        img.src = imgsarry[imgIndex];
  
        img.classList.add("show");
      }, 100);
    }
  }
  
  
  updateImages();
  
  function prevbt() {
    startIndex = (startIndex - 1 + imgsarry.length) % imgsarry.length;
    updateImages();
  }
  
  function nextbt() {
    startIndex = (startIndex + 1) % imgsarry.length;
    updateImages();
  }
  