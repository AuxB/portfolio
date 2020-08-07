module.exports = function wichLangNum(languageName) {
  let langNumber = 0;
  switch (languageName) {
    case 'react':
      langNumber = 1;
      break;
    case 'nodejs':
      langNumber = 2;
      break;
    case 'js':
      langNumber = 3;
      break;
    case 'html':
      langNumber = 4;
      break;
    case 'css':
      langNumber = 5;
      break;
    case 'mysql':
      langNumber = 6;
      break;
    default:
      break;
  }
  return langNumber;
};
