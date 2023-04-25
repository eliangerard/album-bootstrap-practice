const images = ['./src/1.png', './src/2.png', './src/3.png', './src/4.png', './src/5.png', './src/6.png', './src/7.jpg', './src/8.png', './src/9.png'];

const revolver = () => {
    // Arreglo de nombres de archivo de imágenes
  
    // Arreglo vacío para guardar los índices de las imágenes que ya se han utilizado
    const usedIndexes = [];
  
    // Obtener todos los elementos 'img' por su nombre de etiqueta
    const allImages = document.getElementsByTagName('img');
  
    // Convertir la colección HTML en un arreglo para poder utilizar forEach()
    const imageArray = Array.from(allImages);
  
    // Recorrer todos los elementos 'img'
    imageArray.forEach((imgElement, index) => {
      // Obtener un índice de imagen aleatorio que no se haya utilizado anteriormente
      let imgIndex = getRandomIndex(usedIndexes, images.length);
  
      // Agregar el índice a los índices utilizados
      usedIndexes.push(imgIndex);
  
      // Establecer el atributo 'src' del elemento 'img' con el nombre de archivo de la imagen correspondiente
      imgElement.setAttribute('src', images[imgIndex]);
    });
  };
  
  // Función para obtener un índice de imagen aleatorio que no se haya utilizado anteriormente
  function getRandomIndex(usedIndexes, maxIndex) {
    let index;
  
    do {
      index = Math.floor(Math.random() * maxIndex);
    } while (usedIndexes.includes(index));
  
    return index;
  }
  
  const ordenar = () => {
    // Obtener todos los elementos 'img' por su nombre de etiqueta
    const allImages = document.getElementsByTagName('img');
  
    // Convertir la colección HTML en un arreglo para poder utilizar forEach()
    const imageArray = Array.from(allImages);
  
    // Recorrer todos los elementos 'img'
    imageArray.forEach((imgElement, index) => {
      // Establecer el atributo 'src' del elemento 'img' con el nombre de archivo de la imagen correspondiente en el arreglo ordenado
      imgElement.setAttribute('src', images[index]);
    });
  };
  