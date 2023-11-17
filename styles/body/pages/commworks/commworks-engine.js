const tagContainer = document.getElementById('tagContainer');
const gallery = document.getElementById('gallery');

const tags = [
  { name: 'Fullbody', backgroundColor: '#f57dad' },
  { name: 'Halfbody', backgroundColor: '#2af791' },
  { name: 'Portrait', backgroundColor: '#2a83f7' },
  { name: 'SafeForWork', backgroundColor: '#2ac955' },
  { name: 'Suggestive', backgroundColor: '#f5a92f' },
  { name: 'NSFW', backgroundColor: '#ad1a00' },
  { name: 'Erotica', backgroundColor: '#f75a2a' },
  { name: 'Pornographic', backgroundColor: '#f72a2a' },
  { name: 'Degen', backgroundColor: '#b62af7' },
];

function addTagToContainer(tag) {
  const tagElement = document.createElement('div');
  tagElement.classList.add('tag', 'tag-' + tag.name.toLowerCase());
  tagElement.innerText = tag.name;
  tagElement.style.backgroundColor = tag.backgroundColor;

  tagElement.addEventListener('click', function () {
    const isExclusiveTag = ['NSFW', 'Suggestive', 'Erotica', 'Pornographic', 'Degen', 'SafeForWork', 'Fullbody', 'Halfbody', 'Portrait'].includes(tag.name);
    if (isExclusiveTag) {
      const exclusiveTags = ['NSFW', 'Suggestive', 'Erotica', 'Pornographic', 'Degen', 'SafeForWork', 'Fullbody', 'Halfbody', 'Portrait'];
      for (const exclusiveTag of exclusiveTags) {
        const exclusiveTagElement = document.querySelector('.tag-' + exclusiveTag.toLowerCase());
        if (exclusiveTag !== tag.name) {
          exclusiveTagElement.classList.remove('tag-selected');
        }
      }
    }
    tagElement.classList.toggle('tag-selected');
    updateGallery();
  });

  tagContainer.appendChild(tagElement);
}


function updateGallery() {
  const selectedTags = Array.from(tagContainer.getElementsByClassName('tag-selected')).map(tag => tag.innerText.toLowerCase());
  const imageCards = document.querySelectorAll('.image-card');

  if (selectedTags.length === 0) {
    gallery.style.display = 'none';
  } else {
    gallery.style.display = 'flex';
    for (const card of imageCards) {
      const tagsInCard = card.dataset.tags.toLowerCase();
      const displayCard = selectedTags.every(tag => tagsInCard.includes(tag));
      card.style.display = displayCard ? 'block' : 'none';
    }
  }
}

function createTagElement(tag, imageCard, selected = false) {
  const tagElement = document.createElement('div');
  tagElement.classList.add('tag', selected ? 'tag-selected' : '');
  tagElement.innerText = tag;

  imageCard.appendChild(tagElement);
}

function generateTagsHTML(tags) {
  return tags
    .split(' ')
    .map(tag => `<div class="tag">${tag}</div>`)
    .join('');
}

function addTagsToCard(imageCard, tags) {
  const imageInfo = imageCard.querySelector('.image-info');
  const tagsParagraph = document.createElement('p');
  tagsParagraph.classList.add('image-tags');

  tagsParagraph.innerHTML = generateTagsHTML(tags);

  imageInfo.appendChild(tagsParagraph);
}

function addImageToGallery(mediaSrc, tags, descriptionHTML) {
  const imageCard = document.createElement('div');
  imageCard.classList.add('image-card');
  imageCard.dataset.tags = tags;

  const mediaElement = mediaSrc.includes('.mp4')
    ? createVideoElement(mediaSrc)
    : createImageElement(mediaSrc);

  const imageInfo = document.createElement('div');
  imageInfo.classList.add('image-info');
  const descriptionParagraph = document.createElement('p');
  descriptionParagraph.innerHTML = descriptionHTML;

  imageInfo.appendChild(descriptionParagraph);
  imageCard.appendChild(mediaElement);
  imageCard.appendChild(imageInfo);
  gallery.appendChild(imageCard);
}

function createImageElement(imageSrc) {
  const imgElement = document.createElement('img');
  imgElement.src = imageSrc;
  imgElement.alt = 'Image Description';
  return imgElement;
}

function createVideoElement(videoSrc) {
  const videoElement = document.createElement('video');
  videoElement.src = videoSrc;
  videoElement.controls = true;
  return videoElement;
}

tags.forEach(tag => addTagToContainer(tag));

document.getElementById('gallery').addEventListener('click', function(event) {
  if (event.target.tagName === 'IMG') {
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal img');
    const modalDismiss = document.getElementById('modal-dismiss');

    if (modal && modalImg && modalDismiss) {
      modalImg.src = event.target.src;
      modalDismiss.style.display = 'block';
      modal.style.display = 'block';
    }
  }
});

document.querySelector('.modal').addEventListener('click', function() {
  this.style.display = 'none';
});

document.addEventListener('keydown', function(event) {
  const modal = document.querySelector('.modal');
  if (event.key === 'Escape' && modal.style.display === 'block') {
    modal.style.display = 'none';
  }
});



