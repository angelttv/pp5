 //No editar el bloque JS
    const images = document.querySelectorAll('aside a');
    const modal = document.createElement('div');
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    document.body.appendChild(modal);
  
    images.forEach(image => {
      image.addEventListener('click', function(event) {
        event.preventDefault();
        const img = document.createElement('img');
        img.src = this.href;
        img.style.maxWidth = '90%';
        img.style.maxHeight = '90%';
        modal.innerHTML = '';
        modal.appendChild(img);
        modal.style.display = 'flex';
      });
    });
  
    modal.addEventListener('click', function() {
      modal.style.display = 'none';
    });
