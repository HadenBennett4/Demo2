<template>
  <gallery>
    <galleryblock>
      <header-text>Gallery</header-text>
      <gallery-container>
        <photo-box>
          <img src="/Gallert.jpg" class="galleryimg">
        </photo-box>
        <photo-box>
          <img src="/Gallert.jpg" class="galleryimg">
        </photo-box>
        <photo-box>
          <img src="/Gallert.jpg" class="galleryimg">
        </photo-box>
        <photo-box>
          <img src="/Gallert.jpg" class="galleryimg">
        </photo-box>
        <photo-box>
          <img src="/Gallert.jpg" class="galleryimg">
        </photo-box>
        <photo-box>
          <img src="/Gallert.jpg" class="galleryimg">
        </photo-box>
        <photo-box>
          <img src="/Gallert.jpg" class="galleryimg">
        </photo-box>
        <photo-box>
          <img src="/Gallert.jpg" class="galleryimg">
        </photo-box>
        <photo-box>
          <img src="/Gallert.jpg" class="galleryimg">
        </photo-box>
      </gallery-container>

    </galleryblock>

    <demo-vid>
      <video controls>
        <source src="/video.mp4" type="video/mp4">
        <!-- You can add additional <source> elements for different video formats here -->
        Your browser does not support the video tag.
      </video>

    </demo-vid>

  </gallery>
</template>
  
<style scoped>
@media (min-width: 1025px) {
  gallery {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fbfbfc;
  }

  gallery-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  galleryblock{
    margin-top: 7%;
    text-align: center;
  }

  photo-box {
    margin-left: 20px;
    margin-bottom: 15px;
  }

  header-text {
    font-size: 100px;
    color: #968b57;
  }

  demo-vid {
    width: 90%;
    height: 400px;
    border-color: #968b57;
    border-style: solid;
    margin-bottom: 20px;
  }

  video {
    width: 100%;
    height: 100%;
  }
}

/*tablet*/
@media  (min-width:480px) and (max-width: 1024px) {
  gallery {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    background-color: #fbfbfc;
  }

  gallery-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;

  }

  photo-box {
    margin-bottom: 15px;
    width: 35%;
  }

  .galleryimg {
    width: 250px;
  }

  header-text {
    font-size: 100px;
    color: #968b57;
    margin-bottom: 5px;
    margin-left: 30%;
  }

  demo-vid {
    width: 90%;
    height: 400px;
    border-color: #968b57;
    border-style: solid;
    margin-bottom: 20px;
  }

  video {
    width: 100%;
    height: 100%;
  }
}

/*mobile*/
@media  (min-width:0px) and (max-width: 479px) {
  gallery {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15%;
    background-color: #fbfbfc;
  }

  gallery-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;

  }

  photo-box {
    margin-bottom: 15px;
    width: 35%;
  }

  .galleryimg {
    width: 120px;
  }

  header-text {
    font-size: 50px;
    color: #968b57;
    margin-left: 30%;

  }

  demo-vid {
    width: 50%;
    height: 150px;
    border-color: #968b57;
    border-style: solid;
    margin-bottom: 20px;
  }

  video {
    width: 100%;
    height: 100%;
  }
}</style>