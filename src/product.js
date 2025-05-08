let imgsarry = [
    "src/src_pic/brewshadproducts/10.jpg",
    "src/src_pic/brewshadproducts/13.jpg",
    "src/src_pic/brewshadproducts/14.jpg",
    "src/src_pic/brewshadproducts/15.jpg",
    "src/src_pic/brewshadproducts/16.jpg",
    "src/src_pic/brewshadproducts/17.jpg",
    "src/src_pic/brewshadproducts/18.jpg",
    "src/src_pic/brewshadproducts/19.jpg",
    "src/src_pic/brewshadproducts/20.jpg",
    "src/src_pic/brewshadproducts/21.jpg",
    "src/src_pic/brewshadproducts/22.jpg",
    "src/src_pic/brewshadproducts/23.jpg",
    "src/src_pic/brewshadproducts/24.jpg",
    "src/src_pic/brewshadproducts/25.jpg",
    "src/src_pic/brewshadproducts/26.jpg",
    "src/src_pic/brewshadproducts/27.jpg",
    "src/src_pic/brewshadproducts/28.jpg",
    "src/src_pic/brewshadproducts/29.jpg",
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
  