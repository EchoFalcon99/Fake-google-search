const form = document.getElementById('searchForm');
const input = document.getElementById('searchInput');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const query = input.value.trim();
  if (!query) return;

  startSearch(query);
});

document.getElementById('luckyBtn').addEventListener('click', () => {
  alert("Feeling lucky? Searching a surprise!");
  // You can add lucky search functionality here if you want
});

function startSearch(query) {
  // Add loading bar element
  let loadingBar = document.createElement('div');
  loadingBar.id = 'loadingBar';
  document.body.appendChild(loadingBar);

  // Animate loading bar
  loadingBar.style.width = '0%';
  let width = 0;
  let loadingInterval = setInterval(() => {
    width += 10;
    loadingBar.style.width = width + '%';
    if (width >= 100) {
      clearInterval(loadingInterval);
      // After loading, show results page
      showResultsPage(query);
      loadingBar.remove();
    }
  }, 150);
}

function showResultsPage(query) {
  // Change the URL bar without refreshing page
  history.pushState(null, '', `/www.com/${query}`);

  // Clear body and build fake Google result page
  document.body.innerHTML = `
  <style>
    body { font-family: Arial, sans-serif; margin: 0; background: white; }
    .top-bar {
      background: #f8f9fa;
      border-bottom: 1px solid #dadce0;
      padding: 10px 20px;
      display: flex; align-items: center; font-size: 14px; color: #202124;
    }
    .top-bar span.url {
      flex-grow: 1;
      font-weight: bold;
      color: #1a73e8;
    }
    .top-bar .logo {
      margin-right: 10px;
    }
    .results-container {
      max-width: 800px;
      margin: 30px auto 50px;
      padding: 0 15px;
    }
    .profile {
      display: flex;
      margin-bottom: 20px;
    }
    .profile img {
      width: 150px;
      height: 150px;
      border-radius: 8px;
      margin-right: 20px;
      object-fit: cover;
      border: 1px solid #dadce0;
    }
    .profile-details {
      max-width: 600px;
    }
    .profile-details h2 {
      margin-top: 0;
      font-weight: 600;
      font-size: 28px;
      color: #1a0dab;
    }
    .profile-details p {
      font-size: 16px;
      line-height: 1.5;
      color: #3c4043;
    }
    .tabs {
      display: flex;
      border-bottom: 1px solid #e8e8e8;
      margin-bottom: 20px;
      cursor: pointer;
    }
    .tab {
      margin-right: 25px;
      padding-bottom: 12px;
      font-size: 15px;
      color: #5f6368;
      border-bottom: 3px solid transparent;
      transition: color 0.3s ease, border-color 0.3s ease;
    }
    .tab.active {
      color: #1a73e8;
      border-color: #1a73e8;
      font-weight: 600;
    }
    .tab-content {
      font-size: 15px;
      color: #3c4043;
    }
    .group-links {
      margin-top: 40px;
      border-top: 1px solid #dadce0;
      padding-top: 20px;
    }
    .group-links a {
      margin-right: 20px;
      text-decoration: none;
      color: #1a73e8;
      font-weight: 500;
    }
  </style>

  <div class="top-bar">
    <div class="logo">
      <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Logo" width="92" />
    </div>
    <span class="url">www.com/${query}</span>
  </div>

  <div class="results-container">
    <div class="profile">
      <img src="https://files.catbox.moe/8n4ikh.jpg" alt="Profile Image" />
      <div class="profile-details">
        <h2>Bisma Shabir</h2>
        <p><strong>Location:</strong> Satellite Town, Rawalpindi, Pakistan</p>
        <p><strong>Education:</strong> BS Psychology student</p>
        <p><strong>Birthday:</strong> 6 June</p>
        <p><strong>Favorite Colors:</strong> Yellow and Black</p>
        <p><strong>Hobbies:</strong> Long drive, music, traveling</p>
      </div>
    </div>

    <div class="tabs">
      <div class="tab active" data-tab="all">All</div>
      <div class="tab" data-tab="images">Images</div>
      <div class="tab" data-tab="videos">Videos</div>
      <div class="tab" data-tab="news">News</div>
      <div class="tab" data-tab="maps">Maps</div>
      <div class="tab" data-tab="more">More</div>
    </div>

    <div class="
