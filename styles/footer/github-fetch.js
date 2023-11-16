const owner = 'theBlackCat-OC'; // Replace with the repository owner's username or organization name
const repo = 'v2-theblack.cat'; // Replace with the repository name

const url = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`;

fetch(url)
.then(response => response.json())
.then(data => {
  const lastCommit = data[0];
  const sha = lastCommit.sha.substring(0, 7); // Get the first 7 characters of the SHA code
  const commitDate = new Date(lastCommit.commit.author.date).toDateString();
  const commitURL = lastCommit.html_url; // GitHub URL to the commit

  const commitInfoDiv = document.getElementById('commitInfo');

  const commitInfo = document.createElement('div');
  commitInfo.classList.add('commit-info');
  commitInfo.innerHTML = `Version: <a href="${commitURL}" target="_blank" class="sha">${sha}</a>`;

  commitInfoDiv.appendChild(commitInfo);
})
.catch(error => {
  console.error('Error fetching data:', error);
  const commitInfoDiv = document.getElementById('commitInfo');
  commitInfoDiv.textContent = 'Failed to fetch commit info';
});
