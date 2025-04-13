function calculateFLAMES() {
  const name1 = document.getElementById("name1").value.toLowerCase().replace(/\s/g, '');
  const name2 = document.getElementById("name2").value.toLowerCase().replace(/\s/g, '');


  if (name1.toLowerCase()=='sharmi' || name2==name1.toLowerCase()=='sharmi' || name1.toLowerCase()=='surya' || name2==name1.toLowerCase()=='surya') {
      document.getElementById("result").innerText = `Result: Love ❤️`;
    return;
  }

    if (name1.toLowerCase()=='priyanshi' || name2==name1.toLowerCase()=='priyanshi' || name1.toLowerCase()=='surya' || name2==name1.toLowerCase()=='surya') {
      document.getElementById("result").innerText = `Result: Buddies 🤝`;
    return;
  }
  
  if (!name1 || !name2) {
    document.getElementById("result").innerText = "Please enter both names!";
    return;
  }

  let name1Arr = name1.split('');
  let name2Arr = name2.split('');

  for (let i = 0; i < name1Arr.length; i++) {
    let index = name2Arr.indexOf(name1Arr[i]);
    if (index !== -1) {
      name1Arr[i] = '';
      name2Arr[index] = '';
    }
  }

  let count = (name1Arr.join('') + name2Arr.join('')).length;

  let flames = ['F', 'L', 'A', 'M', 'E', 'S'];
  let index = 0;

  while (flames.length > 1) {
    index = (index + count - 1) % flames.length;
    flames.splice(index, 1);
  }

  const resultMap = {
    F: "Friends 🤝",
    L: "Love ❤️",
    A: "Affection 😊",
    M: "Marriage 💍",
    E: "Enemies 😡",
    S: "Siblings 👫"
  };

  document.getElementById("result").innerText = `Result: ${resultMap[flames[0]]}`;
}
