let paragraf = document.querySelector('p');

document.getElementById("dodaj").onclick = function() {
paragraf.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos, dolore deserunt voluptates obcaecati quidem officia dolorem voluptatum? Debitis iste atque totam, minima ut quam unde voluptate laboriosam cum cumque.';
}

document.getElementById("usun").onclick = function() {
    paragraf.textContent = '';
}
