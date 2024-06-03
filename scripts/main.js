const GIPHY_API_KEY = "xJJQH0Txcd7OAdukNkcdUYJs71zZiK1Z";
const GIPHY_API_KEY2 = "HPG6RSDsyMlWSRtWuhWAKniYLmWv6nOn"

const happyURL =
  `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY2}&q=happy&limit=50&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
const sadURL =
  `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY2}&q=sad&limit=50&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
const stressedURL =
  `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY2}&q=stressed&limit=50&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
const angryURL =
  `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY2}&q=angry&limit=50&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
const groovyURL =
  `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY2}&q=groovy&limit=50&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
const yeehawURL =
  `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY2}&q=yeehaw&limit=50&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

const happyButton = document.querySelector(".happy-button");
const sadButton = document.querySelector(".sad-button");
const stressedButton = document.querySelector(".stressed-button");
const angryButton = document.querySelector(".angry-button");
const groovyButton = document.querySelector(".groovy-button");
const yeehawButton = document.querySelector(".yeehaw-button");
const sectionImage = document.querySelector(".section__img");

function moodSelection(click) {
  let selectedURL;
  if (click.target === happyButton) {
    selectedURL = happyURL;
  } else if (click.target === sadButton) {
    selectedURL = sadURL;
  } else if (click.target === stressedButton) {
    selectedURL = stressedURL;
  } else if (click.target === angryButton) {
    selectedURL = angryURL;
  } else if (click.target === groovyButton) {
    selectedURL = groovyURL;
  } else if (click.target === yeehawButton) {
    selectedURL = yeehawURL;
  }
  clickButton(selectedURL);
}

function clickButton(url) {
  const getImage = async () => {
    try {
      const response = await axios.get(url);
      const gifs = response.data.data;
      const randomIndex = Math.floor(Math.random() * gifs.length);
      const imageSelected = gifs[randomIndex];
      console.log(imageSelected);
      const imagePath = imageSelected.images.fixed_height.url;
      const altPath = imageSelected.alt_text;
      sectionImage.setAttribute("src", imagePath);
      sectionImage.setAttribute("alt", altPath);
    } catch (error) {
      console.error(error);
    }
  };
  getImage();
}

happyButton.addEventListener("click", moodSelection);
sadButton.addEventListener("click", moodSelection);
stressedButton.addEventListener("click", moodSelection);
angryButton.addEventListener("click", moodSelection);
groovyButton.addEventListener("click", moodSelection);
yeehawButton.addEventListener("click", moodSelection);
