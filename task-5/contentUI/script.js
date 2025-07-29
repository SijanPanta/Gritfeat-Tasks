 const API = 'https://jsonplaceholder.typicode.com';
      const view = document.getElementById('view');

      async function loadFeed() {
        const [posts, users, comments] = await Promise.all([
          fetch(`${API}/posts`).then(res => res.json()),
          fetch(`${API}/users`).then(res => res.json()),
          fetch(`${API}/comments`).then(res => res.json())
        ]);

        view.innerHTML = posts.slice(0, 10).map(post => {
          const user = users.find(u => u.id === post.userId);
          const postComments = comments.filter(c => c.postId === post.id);
          return `
            <div class="post">
              <h3>${post.title}</h3>
              <p>${post.body}</p>
              <p><strong class="user-link" onclick="loadProfile(${user.id})">By: ${user.name}</strong></p>
              <div class="comments">
                ${postComments.map(c => `<div class="comment"><strong>${c.email}:</strong> ${c.body}</div>`).join('')}
              </div>
            </div>
          `;
        }).join('');
      }

      async function loadProfile(userId) {
        const [user, albums, todos] = await Promise.all([
          fetch(`${API}/users/${userId}`).then(res => res.json()),
          fetch(`${API}/albums?userId=${userId}`).then(res => res.json()),
          fetch(`${API}/todos?userId=${userId}`).then(res => res.json())
        ]);

        const albumIds = albums.map(a => a.id);
        const photosRes = await Promise.all(albumIds.map(id => fetch(`${API}/photos?albumId=${id}`).then(res => res.json())));
        const photos = photosRes.flat().slice(0, 12); // limit photos

        view.innerHTML = `
          <div class="profile">
            <h2>${user.name}'s Profile</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> ${user.website}</p>

            <h3>Photo Gallery</h3>
            <div class="photos">
              ${photos.map(p => `<img src="${p.thumbnailUrl}" alt="${p.title}" />`).join('')}
            </div>
            <button onclick="loadFeed()">⬅ Back to Feed</button>
          </div>
        `;
      }

      loadFeed();