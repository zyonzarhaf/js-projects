const loremText = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi scelerisque eu ultrices vitae. Sed felis eget velit aliquet sagittis id consectetur purus ut. Sed cras ornare arcu dui vivamus arcu felis bibendum. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. In mollis nunc sed id semper risus in hendrerit gravida. Suscipit tellus mauris a diam. Malesuada pellentesque elit eget gravida cum sociis natoque. Mattis vulputate enim nulla aliquet. Turpis in eu mi bibendum neque egestas congue. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Quam id leo in vitae turpis. Accumsan tortor posuere ac ut consequat. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis.",

  "Congue quisque egestas diam in arcu cursus. Vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Ultricies mi eget mauris pharetra et ultrices neque ornare. Convallis posuere morbi leo urna molestie at. Sed vulputate mi sit amet. In tellus integer feugiat scelerisque varius. Ipsum consequat nisl vel pretium lectus quam. Sed risus pretium quam vulputate dignissim suspendisse in est. Sit amet consectetur adipiscing elit ut aliquam purus sit. Placerat duis ultricies lacus sed turpis tincidunt. Nam aliquam sem et tortor. Et malesuada fames ac turpis egestas sed tempus urna. In iaculis nunc sed augue lacus. Id leo in vitae turpis massa sed elementum tempus. Libero enim sed faucibus turpis in eu mi bibendum neque. Egestas congue quisque egestas diam in. Imperdiet proin fermentum leo vel orci porta. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Sit amet justo donec enim diam vulputate ut pharetra sit.",

  "In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Elementum sagittis vitae et leo duis ut diam quam nulla. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. Fames ac turpis egestas integer eget aliquet nibh praesent. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Ut placerat orci nulla pellentesque dignissim enim sit. Tempus urna et pharetra pharetra massa massa. Integer feugiat scelerisque varius morbi enim nunc faucibus. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Scelerisque viverra mauris in aliquam sem fringilla ut. Turpis in eu mi bibendum neque egestas congue. Porttitor massa id neque aliquam vestibulum morbi blandit. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. Velit scelerisque in dictum non. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae.",

  "Senectus et netus et malesuada fames. Et molestie ac feugiat sed lectus vestibulum mattis. Id eu nisl nunc mi ipsum faucibus vitae. Nullam eget felis eget nunc lobortis mattis. Id neque aliquam vestibulum morbi blandit cursus risus. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Cursus in hac habitasse platea dictumst. Euismod lacinia at quis risus sed. Nunc non blandit massa enim. Varius quam quisque id diam vel quam elementum pulvinar etiam. Gravida arcu ac tortor dignissim.",

  "Massa ultricies mi quis hendrerit. Sed elementum tempus egestas sed sed risus pretium. Quis imperdiet massa tincidunt nunc. Proin sed libero enim sed faucibus turpis in eu mi. Vitae nunc sed velit dignissim sodales ut eu sem. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Integer malesuada nunc vel risus commodo viverra. Sapien eget mi proin sed libero enim sed faucibus. Id volutpat lacus laoreet non. Commodo ullamcorper a lacus vestibulum.",

  "Nec feugiat in fermentum posuere urna. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Eget magna fermentum iaculis eu non diam phasellus. Risus feugiat in ante metus dictum. Habitasse platea dictumst quisque sagittis purus sit amet. Velit scelerisque in dictum non consectetur a erat. Id interdum velit laoreet id donec. Sit amet dictum sit amet justo donec enim diam vulputate. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Duis tristique sollicitudin nibh sit amet. Egestas egestas fringilla phasellus faucibus scelerisque. Pellentesque diam volutpat commodo sed. Sit amet dictum sit amet justo donec. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Porttitor massa id neque aliquam vestibulum. Bibendum at varius vel pharetra vel turpis nunc eget. Vitae justo eget magna fermentum iaculis eu. Tellus cras adipiscing enim eu turpis egestas pretium aenean. Diam vulputate ut pharetra sit amet aliquam id.",

  "Vitae nunc sed velit dignissim sodales. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas. Faucibus purus in massa tempor. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Adipiscing elit duis tristique sollicitudin. Nunc sed blandit libero volutpat sed. Varius duis at consectetur lorem donec massa sapien faucibus. Quis varius quam quisque id diam vel quam elementum pulvinar. Fames ac turpis egestas integer eget aliquet nibh praesent. Id porta nibh venenatis cras sed felis eget velit.",

  "Dui sapien eget mi proin. Cras fermentum odio eu feugiat pretium. Tortor posuere ac ut consequat semper viverra nam. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Bibendum at varius vel pharetra vel. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Faucibus in ornare quam viverra orci sagittis eu. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Tellus integer feugiat scelerisque varius morbi. Bibendum at varius vel pharetra.",

  "Placerat vestibulum lectus mauris ultrices eros in. Erat velit scelerisque in dictum non consectetur. Viverra orci sagittis eu volutpat. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Sit amet est placerat in egestas erat imperdiet. Malesuada bibendum arcu vitae elementum curabitur vitae. Tristique risus nec feugiat in fermentum posuere urna nec. Dui faucibus in ornare quam. Semper quis lectus nulla at volutpat diam ut. Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Amet tellus cras adipiscing enim eu turpis. Varius sit amet mattis vulputate. Neque gravida in fermentum et sollicitudin. Mattis molestie a iaculis at erat pellentesque. Sit amet nisl purus in mollis nunc.",

  "Bibendum ut tristique et egestas. Condimentum id venenatis a condimentum vitae. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Purus in mollis nunc sed. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Elementum curabitur vitae nunc sed velit dignissim. Blandit turpis cursus in hac habitasse platea. Ut diam quam nulla porttitor massa. Imperdiet massa tincidunt nunc pulvinar sapien. Ac tortor vitae purus faucibus. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Libero enim sed faucibus turpis in eu mi.",

  "Donec ultrices tincidunt arcu non sodales. Gravida cum sociis natoque penatibus et magnis. Eget felis eget nunc lobortis mattis. Sit amet nulla facilisi morbi tempus iaculis urna id. Aliquam etiam erat velit scelerisque in dictum non consectetur. Nulla facilisi nullam vehicula ipsum a arcu. Ornare aenean euismod elementum nisi quis eleifend. Cras tincidunt lobortis feugiat vivamus at augue. Consectetur adipiscing elit ut aliquam purus sit amet luctus. Leo a diam sollicitudin tempor id eu nisl nunc mi. Id nibh tortor id aliquet lectus. Diam volutpat commodo sed egestas egestas. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Scelerisque felis imperdiet proin fermentum leo. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Eu turpis egestas pretium aenean pharetra magna.",

  "Amet massa vitae tortor condimentum lacinia quis. Dignissim cras tincidunt lobortis feugiat. Id diam maecenas ultricies mi eget mauris. Ultricies mi eget mauris pharetra et ultrices neque ornare. Tristique nulla aliquet enim tortor at. Risus in hendrerit gravida rutrum quisque non tellus. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Tempus urna et pharetra pharetra massa. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Purus semper eget duis at tellus at urna condimentum.",
];

const loremFormDOM = document.querySelector(".lorem-form");
const paragraphsDOM = document.getElementById("paragraphs");
const loremArticleDOM = document.querySelector(".lorem-article");

loremFormDOM.addEventListener("submit", function (e) {
  e.preventDefault();
  const paragraphs = parseInt(paragraphsDOM.value);
  const random = Math.floor(Math.random() * loremText.length);

  //min max form attributes will prevent this by default
  //the following if statement is for didactic purposes only
  if (isNaN(paragraphs) || paragraphs < 0 || paragraphs > 12) {
    loremArticleDOM.innerHTML = `<p>${loremText[random]}</p>`;
  } else {
    loremArticleDOM.innerHTML = loremText
      .slice(0, paragraphs)
      .map(function (p) {
        return `<p>${p}</p>`;
      })
      .join("");
  }
});
