const url = (value) => {
  if ((value == null) || value.length === 0) {
    return value;
  }
  if (!((value.indexOf("http://") === 0) || (value.indexOf("https://") === 0))) {
    value = "http://" + value;
  }
  return value;
};

const tags = (value) => {
  if (value === null || value === undefined) {
    return false;
  }
  value = value.split(',')[0];

  value = value
    .toLowerCase()
    .replace(/[_ ]/g,'-')
    .replace(' ','-')
    .replace('--', '-')
    .replace(/[^a-zA-Z0-9а-яА-ЯЁёІіЎўäöüÄÖÜß\-, ]/gi, '');

  if (value.length < 3 ){
    return false;
  }
  
  return value;
};

const username = (name) => {
  if ((name == null) || name.length === 0) {
    return name;
  }
  return name
    .toLowerCase()
    .trim()
};

module.exports = { url, tags, username };
