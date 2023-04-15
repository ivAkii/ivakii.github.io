

fetch('https://api.github.com/users/ivAkii')
  .then(response => response.json())
  .then(data => {
    const profileImage = data.avatar_url;
    document.getElementById('profile-image').src = profileImage;
  });

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
function generate(element) {
      document.querySelector(element).onmouseover = event => {
      let amount = 0; 
      const interval = setInterval(() => {
        event.target.innerHTML = event.target.innerHTML.split("")
          .map((letter,index) =>  {
              if (index < amount) {
                  return event.target.dataset.value[index]
                }
              return letters[Math.floor(Math.random() * 26)]
          })
          .join("");
      if (amount >= event.target.dataset.value.length) {
      clearInterval(interval)
      }
        amount +=1 / 3;
      }, 30)
      }
}

function copyText(content , text) {
  navigator.clipboard.writeText(text);
  alert(content + " copied!");
}