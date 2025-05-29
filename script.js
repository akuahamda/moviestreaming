

const menuItems = [
  {
    name: "Home",
    iconUrl:
      "https://fonts.gstatic.com/s/i/materialiconsoutlined/home/v11/24px.svg",
    path: "/",
  },
  {
    name: "Favourites",
    iconUrl:
      "https://fonts.gstatic.com/s/i/materialiconsoutlined/favorite_border/v11/24px.svg",
    path: "/favourite.html",
  },
  {
    name: "Trending",
    iconUrl:
      "https://fonts.gstatic.com/s/i/materialiconsoutlined/trending_up/v8/24px.svg",
    path: "/trending.html",
  },
  {
    name: "Coming soon",
    iconUrl:
      "https://fonts.gstatic.com/s/i/materialiconsoutlined/schedule/v9/24px.svg",
    path: "/coming-soon",
  },
  {
    name: "Community",
    iconUrl:
      "https://fonts.gstatic.com/s/i/materialiconsoutlined/groups/v10/24px.svg",
    path: "/community" ,
  },
  {
    name: "Social",
    iconUrl:
      "https://fonts.gstatic.com/s/i/materialiconsoutlined/share/v10/24px.svg",
    path: "/social",
  },
  {
    name: "Settings",
    iconUrl:
      "https://fonts.gstatic.com/s/i/materialiconsoutlined/settings/v13/24px.svg",
    path: "/settings",
  },
  {
    name: "Logout",
    iconUrl:
      "https://fonts.gstatic.com/s/i/materialiconsoutlined/logout/v8/24px.svg",
    path: "/logout",
  },
];

let menuBar = document.getElementById("menu");


menuItems?.map((menuItem) => {
  menuBar.innerHTML += `<div class="flex gap-2 items-center">
            <div class="bg-white rounded-full p-2">
              <img  src="${menuItem.iconUrl}" alt="" />
            </div>
            <a href="${menuItem.path}">${menuItem.name}</a>
          </div>`;

});

let favDiv = document.getElementById("fav");

const movies = [
  {
    title: "Inception",
    year: 2010,
    genre: "Action, Sci-Fi, Thriller",
    poster: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_SY445_.jpg",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genre: "Action, Crime, Drama",
    poster:
      "https://i5.walmartimages.com/seo/BATMAN-THE-DARK-KNIGHT-11x17-Framed-Movie-Poster_4184b3bf-caaf-49ce-96d9-f68e2fdefdd2.8ed133eacbf8f1a3976f8c9117089457.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
  },
  {
    title: "Interstellar",
    year: 2014,
    genre: "Adventure, Drama, Sci-Fi",
    poster: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
  {
    title: "Parasite",
    year: 2019,
    genre: "Drama, Thriller",
    poster:
      "https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    trailer: "https://www.youtube.com/embed/SEUXfv87Wpk",
  },
  {
    title: "Avengers: Endgame",
    year: 2019,
    genre: "Action, Adventure, Drama",
    poster: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
  },
  {
    title: "Joker",
    year: 2019,
    genre: "Crime, Drama, Thriller",
    poster:
      "https://www.tallengestore.com/cdn/shop/products/Joker_-_Put_On_A_Happy_Face_-_Joaquin_Phoenix_-_Hollywood_English_Movie_Poster_3.jpg?v=1579504285",
    trailer: "https://www.youtube.com/embed/zAGVQLHvwOY",
  },
  {
    title: "Black Panther",
    year: 2018,
    genre: "Action, Adventure, Sci-Fi",
    poster:
      "https://images-cdn.ubuy.co.in/63786371cd9ac05a334c6573-black-panther-poster-movie-24-x.jpg",
    trailer: "https://www.youtube.com/embed/xjDjIWPwcPU",
  },
  {
    title: "Spider-Man: No Way Home",
    year: 2021,
    genre: "Action, Adventure, Fantasy",
    poster: "https://m.media-amazon.com/images/I/71V--WZVUIL._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/embed/JfVOs4VSpmA",
  },
  {
    title: "The Matrix",
    year: 1999,
    genre: "Action, Sci-Fi",
    poster: "https://m.media-amazon.com/images/I/51vpnbwFHrL._AC_SY445_.jpg",
    trailer: "https://www.youtube.com/embed/vKQi3bBA1y8",
  },
  {
    title: "Dune: Part One",
    year: 2021,
    genre: "Adventure, Drama, Sci-Fi",
    poster:
      "https://i.redd.it/something-i-noticed-in-the-official-dune-movie-posters-v0-xnaop52pwymc1.jpg?width=1170&format=pjpg&auto=webp&s=6376dea6ca9e1a7e0717afe8e9b92cd2097a8c12",
    trailer: "https://www.youtube.com/embed/n9xhJrPXop4",
  },
];

function showTrailer(video, el) {
  hideTrailer();

  // Create the preview container
  let divElement = document.createElement("div");
  divElement.classList.add(
    "absolute",
    "top-50",
    "left-70",
    "w-96",
    "h-52",
    "bg-white",
    "rounded-xl",
    "z-50",
    "shadow-lg",
    "overflow-hidden",
    "p-2"
  );

  // Set inner HTML for iframe
  divElement.innerHTML = `
    <iframe
      width="100%"
      height="100%"
      allow="autoplay"
      src="${video}?autoplay=1&mute=1"
      frameborder="0"
      allowfullscreen
    ></iframe>
  `;

  // Give it an ID or class to identify it for removal later
  divElement.id = "video-preview";

  // Append to body so it appears above everything
  // document.body.appendChild(divElement);
  favDiv.appendChild(divElement);
}
function hideTrailer() {
  const existing = document.getElementById("video-preview");
  if (existing) existing.remove();
}

movies?.map((fav) => {
  favDiv.innerHTML += `<div id="movie-card" onclick="showTrailer('${fav.trailer}',this)"
                class="bg-linear-to-r from-gray-200 to-gray-400  rounded-md overflow-hidden relative" >
                <div class="w-full h-[200px]">
                  <img class="w-full h-full object-cover" src="${fav.poster}" alt="" />
                </div>
                <div class="p-2">
                  <p class="text-black font-bold">${fav.title}</p>
                  <p class="text-gray-700 text-xs">
                    <span>${fav.year}</span> <span>|</span> <span>${fav.genre}</span>
                  </p>
                </div>
                <div class="absolute top-5 -right-0 z-50 p-2">
                  <button class="bg-gray-100 p-2 rounded-lg">
                    <img src="images/love.png" alt="" />
                  </button>
                </div>
              </div>`;
});

let continuesDiv = document.getElementById("continues");

const continues = [
  {
    title: "Inception",
    year: 2010,
    genre: "Action, Sci-Fi, Thriller",
    poster: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_SY445_.jpg",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genre: "Action, Crime, Drama",
    poster:
      "https://i5.walmartimages.com/seo/BATMAN-THE-DARK-KNIGHT-11x17-Framed-Movie-Poster_4184b3bf-caaf-49ce-96d9-f68e2fdefdd2.8ed133eacbf8f1a3976f8c9117089457.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
  },
  {
    title: "Parasite",
    year: 2019,
    genre: "Drama, Thriller",
    poster:
      "https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    trailer: "https://www.youtube.com/embed/SEUXfv87Wpk",
  },
  {
    title: "Avengers: Endgame",
    year: 2019,
    genre: "Action, Adventure, Drama",
    poster: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
  },
];

continues?.map((cont) => {
  continuesDiv.innerHTML += `<div onclick="showTrailer('${cont.trailer}',this)"
              class="bg-linear-to-r from-gray-200 to-gray-400 rounded-md overflow-hidden relative"
            >
              <div class="w-full h-[200px]">
                <img class="w-full h-full object-cover" src="${cont.poster}" alt="" />
              </div>
              <div class="p-2">
                <p class="text-black font-bold">${cont.title}</p>
                <p class="text-gray-700 text-xs">
                  <span>${cont.year}</span> <span>|</span> <span>${cont.genre}</span>
                </p>
              </div>
              <div class="absolute top-5 right-5 z-50">
                <button class="bg-gray-100 p-2 rounded-lg">
                  <img src="images/love.png" alt="" />
                </button>
              </div>
            </div>`;
});
