import type { GiphyRandom } from "../data/giphy.response";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;

  document.body.append(imgElement);
};

//myRequest  =>  promesa
myRequest
  .then((response) => {
    response.json().then(({ data }: GiphyRandom) => {
      const imageUrl = data.images.original.url;
      createImageInsideDOM(imageUrl);

      //const imageUrl = data.data.images.original.url;
      //console.log(imageUrl);

      //const imgElemento = document.createElement("img");
      //imgElemento.src = imageUrl;

      //document.body.append(imgElemento);
    });
  })
  .catch((error) => {
    console.log(error);
  });

//fetch()
//myRequest
//.then()
//.catch()
