document.addEventListener("DOMContentLoaded", () => {
    const shareForm = document.getElementById("share-form");
    const musicList = document.getElementById("music-list");
    
    // Pastikan elemen form dan list ada
    if (shareForm && musicList) {
        shareForm.addEventListener("submit", (event) => {
            event.preventDefault();

            // Ambil nilai dari input form
            const songName = document.getElementById("song-name").value;
            const artist = document.getElementById("artist").value;

            // Pastikan kedua input memiliki nilai
            if (songName && artist) {
                // Buat elemen li untuk menambahkan lagu
                const li = document.createElement("li");
                li.textContent = `${songName} by ${artist}`;

                // Buat tombol hapus
                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.classList.add("delete-btn");

                // Event listener untuk tombol hapus
                deleteButton.addEventListener("click", () => {
                    musicList.removeChild(li); // Menghapus item
                });

                // Tambahkan tombol hapus ke dalam elemen li
                li.appendChild(deleteButton);

                // Tambahkan item lagu ke dalam list
                musicList.appendChild(li);

                // Reset form setelah submit
                shareForm.reset();
            } else {
                alert("Please enter both song name and artist.");
            }
            if (newsContainer) {
                const newsArticles = [
                    { 
                        title: "New Album by Artist X", 
                        content: "Lorem ipsum dolor sit amet.", 
                        image: "image/headphone.jpg" 
                    },
                    { 
                        title: "Concert Tour 2024 Announced", 
                        content: "Consectetur adipiscing elit.", 
                        image: "image/musik.jpg" 
                    },
                ];
                
                newsArticles.forEach((news) => {
                    const article = document.createElement("article");
                    article.innerHTML = `
                        <img src="${news.image}" alt="${news.title}" class="news-image">
                        <h3>${news.title}</h3>
                        <p>${news.content}</p>`;
                    newsContainer.appendChild(article);
                });
            }
            
        });
    }
});
