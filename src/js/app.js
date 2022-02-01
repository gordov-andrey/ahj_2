import img from '../img/goblin.png';

export default function demo() {
  const icon = `<img src="${img}" alt="Catch!" id="img">`;
  const fields = document.querySelectorAll('.col');
  const arr = [];
  
  function getRandom(max) {
    let randomA = Math.floor(Math.random() * max);
    
    while (randomA === arr[0]) {
      randomA = Math.floor(Math.random() * max);
    }
    arr[0] = randomA;
    return randomA;
  }

  const random = getRandom(fields.length);

  fields.forEach((item) => {
    const img = item.querySelector('#img');
    if (img) {
      img.remove();
    }
  });
  fields[random].insertAdjacentHTML('beforeend', icon);
}
export const interval = setInterval(() => demo(), 1000);

