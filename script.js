// Tourist Destinations Data
const destinations = [
    {
        id: 1,
        name: "Sigiriya Rock Fortress",
        location: "Central Province",
        image: "sigiriya.jpg", 
        photos: [
            "https://images.unsplash.com/photo-1455734729978-db1ae4f687fc?w=800",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
        ],
        description: "An ancient rock fortress and palace ruins, Sigiriya is a UNESCO World Heritage Site dating back to the 5th century. The site features ancient frescoes, water gardens, and breathtaking views from the top.",
        features: ["UNESCO Site", "Historical", "Archaeological", "Hiking"],
        bestTime: "Year-round, best in dry season (Dec-Apr)",
        entryFee: "Approx. $30 USD",
        highlights: "Frescoes, Mirror Wall, Lion's Gate, Water Gardens",
        history: "Built by King Kassapa I in the 5th century AD, Sigiriya served as both a fortress and a palace. The site showcases advanced urban planning and engineering of ancient Sri Lanka.",
        video: "https://www.youtube.com/embed/demo"
    },
    {
        id: 2,
        name: "Temple of the Sacred Tooth Relic",
        location: "Kandy",
        image: "dalada maligaya.jpg",
        description: "One of the most sacred Buddhist temples in the world, housing the tooth relic of Lord Buddha. Located in the hill capital of Kandy, this temple is a UNESCO World Heritage Site.",
        features: ["UNESCO Site", "Religious", "Cultural", "Historical"],
        bestTime: "Year-round",
        entryFee: "Approx. $15 USD",
        highlights: "Tooth Relic, Perahera Festival, Museum, Architecture",
        history: "The temple was built in the 16th century and houses what is believed to be the left canine tooth of Lord Buddha. It's the center of the annual Esala Perahera festival.",
        video: "https://www.youtube.com/embed/demo"
    },
    {
        id: 3,
        name: "Ella",
        location: "Uva Province",
        image: "ella.jpg",
        description: "A charming hill station town offering stunning mountain views, tea plantations, and hiking trails. Famous for Nine Arch Bridge and Ella Rock.",
        features: ["Mountains", "Hiking", "Tea Plantations", "Scenic Views"],
        bestTime: "Dec-May (dry season)",
        entryFee: "Free (some attractions charge)",
        highlights: "Nine Arch Bridge, Ella Rock, Little Adam's Peak, Tea Factory",
        history: "Ella became popular during the British colonial era as a hill station. Today it's a favorite destination for travelers seeking cool mountain air and stunning landscapes.",
        video: "https://www.youtube.com/embed/demo"
    },
    {
        id: 4,
        name: "Yala National Park",
        location: "Southern Province",
        image: "yala.jpg",
        description: "Sri Lanka's most famous national park, home to leopards, elephants, sloth bears, and diverse bird species. Offers excellent wildlife viewing opportunities.",
        features: ["Wildlife", "Safari", "Leopards", "Biodiversity"],
        bestTime: "Feb-Jul (best for leopard sightings)",
        entryFee: "Approx. $25-40 USD per safari",
        highlights: "Leopard sightings, Elephants, Birds, Beautiful landscapes",
        history: "Established in 1900, Yala was designated as a wildlife sanctuary in 1938. It's the second largest national park in Sri Lanka and has the highest leopard density in the world.",
        video: "https://www.youtube.com/embed/demo"
    },
    {
        id: 5,
        name: "Galle Fort",
        location: "Galle",
        image: "galla port.webp",
        description: "A UNESCO World Heritage Site, Galle Fort is a well-preserved colonial fortress built by the Portuguese and Dutch. Features cobblestone streets, colonial architecture, and ocean views.",
        features: ["UNESCO Site", "Colonial", "Beach", "Architecture"],
        bestTime: "Year-round, best Nov-Apr",
        entryFee: "Free to enter the fort",
        highlights: "Dutch architecture, Lighthouse, Ramparts, Shopping",
        history: "Built initially by the Portuguese in 1588, the fort was later fortified by the Dutch in the 17th century. It's one of the best preserved colonial forts in Asia.",
        video: "https://www.youtube.com/embed/demo"
    },
    {
        id: 6,
        name: "Mirissa Beach",
        location: "Southern Province",
        image: "mirissa.jpg",
        description: "A beautiful crescent-shaped beach perfect for surfing, whale watching, and relaxation. Known for its palm-fringed coastline and vibrant nightlife.",
        features: ["Beach", "Whale Watching", "Surfing", "Nightlife"],
        bestTime: "Nov-Apr (dry season)",
        entryFee: "Free (whale watching tours extra)",
        highlights: "Whale watching, Surfing, Sunset views, Beach cafes",
        history: "Once a small fishing village, Mirissa has transformed into one of Sri Lanka's most popular beach destinations, especially known for blue whale watching.",
        video: "https://www.youtube.com/embed/demo"
    },
    {
        id: 7,
        name: "Anuradhapura",
        location: "North Central Province",
        image: "anuradapuraya.jpg",
        description: "An ancient capital and UNESCO World Heritage Site, featuring well-preserved ruins of ancient Sinhalese civilization including stupas, temples, and reservoirs.",
        features: ["UNESCO Site", "Ancient", "Archaeological", "Religious"],
        bestTime: "Year-round",
        entryFee: "Approx. $25 USD",
        highlights: "Sacred Bo Tree, Ruwanwelisaya, Jetavanaramaya, Abhayagiri",
        history: "Founded in the 4th century BC, Anuradhapura was the capital of Sri Lanka for over 1,300 years. It's one of the oldest continuously inhabited cities in the world.",
        video: "https://www.youtube.com/embed/demo"
    },
    {
        id: 8,
        name: "Polonnaruwa",
        location: "North Central Province",
        image: "polonnaruwa.jpg",
        description: "Another UNESCO World Heritage Site, this ancient city was the second capital of Sri Lanka. Features impressive ruins including the Gal Vihara rock temple.",
        features: ["UNESCO Site", "Ancient", "Archaeological", "Historical"],
        bestTime: "Year-round",
        entryFee: "Approx. $25 USD",
        highlights: "Gal Vihara, Royal Palace, Vatadage, Archaeological Museum",
        history: "Polonnaruwa succeeded Anuradhapura as the capital in the 11th century. The city showcases remarkable architectural achievements of ancient Sri Lanka.",
        video: "https://www.youtube.com/embed/demo"
    },
    {
        id: 9,
        name: "Nuwara Eliya",
        location: "Central Highlands",
        image: "nuwaraeliya.jpg",
        description: "Known as 'Little England', this hill station offers cool climate, tea plantations, waterfalls, and colonial architecture. Perfect for escaping the tropical heat.",
        features: ["Mountains", "Tea", "Cool Climate", "Colonial"],
        bestTime: "Mar-May, Sep-Nov",
        entryFee: "Free (some attractions charge)",
        highlights: "Tea plantations, Gregory Lake, Hakgala Gardens, Waterfalls",
        history: "Developed by the British in the 19th century as a hill station, Nuwara Eliya retains much of its colonial charm and is the heart of Sri Lanka's tea country.",
        video: "https://www.youtube.com/embed/demo"
    },
    {
        id: 10,
        name: "Sinharaja Forest Reserve",
        location: "Southwestern Sri Lanka",
        image: "sinharaja.jpg",
        description: "A UNESCO World Heritage Site and biodiversity hotspot, this tropical rainforest is home to many endemic species. Perfect for nature lovers and bird watchers.",
        features: ["UNESCO Site", "Rainforest", "Biodiversity", "Hiking"],
        bestTime: "Dec-Apr, Aug-Sep",
        entryFee: "Approx. $15 USD",
        highlights: "Endemic birds, Wildlife, Waterfalls, Guided tours",
        history: "Declared a UNESCO World Heritage Site in 1988, Sinharaja is the last viable area of primary tropical rainforest in Sri Lanka, with over 60% of trees being endemic.",
        video: "https://www.youtube.com/embed/demo"
    },
    {
        id: 11,
        name: "Adam's Peak (Sri Pada)",
        location: "Central Highlands",
        image: "sri padaya.jpg",
        description: "A sacred mountain peak with a unique footprint-shaped rock at the summit. Pilgrims climb during the season to witness the spectacular sunrise.",
        features: ["Mountain", "Religious", "Hiking", "Sunrise"],
        bestTime: "Dec-May (pilgrimage season)",
        entryFee: "Free",
        highlights: "Sunrise view, Sacred footprint, Pilgrimage, Stunning views",
        history: "Sacred to Buddhists, Hindus, Muslims, and Christians, Adam's Peak has been a pilgrimage site for over 1,000 years. The climb is traditionally done at night to reach the summit for sunrise.",
        video: "https://www.youtube.com/embed/demo"
    },
    {
        id: 12,
        name: "Bentota Beach",
        location: "Southern Province",
        image: "benthota.jpg",
        description: "A popular beach resort town with golden sands, water sports, and luxury resorts. Perfect for families and couples seeking beach relaxation.",
        features: ["Beach", "Water Sports", "Resort", "Family Friendly"],
        bestTime: "Nov-Apr",
        entryFee: "Free (activities extra)",
        highlights: "Water sports, Boat rides, Turtle hatchery, Resorts",
        history: "Bentota has developed into one of Sri Lanka's premier beach destinations, offering a mix of relaxation and adventure activities along its beautiful coastline.",
        video: "https://www.youtube.com/embed/demo"
    },
    {
        id: 13,
        name: "Dambulla Cave Temple",
        location: "Central Province",
        image: "dabulla.jpg",
        description: "A UNESCO World Heritage Site featuring five caves with over 150 Buddha statues and ancient murals. One of the largest and best-preserved cave temple complexes.",
        features: ["UNESCO Site", "Religious", "Cave Temple", "Historical"],
        bestTime: "Year-round",
        entryFee: "Approx. $10 USD",
        highlights: "Cave paintings, Buddha statues, Golden Temple, Views",
        history: "Dating back to the 1st century BC, these caves have been continuously used as a Buddhist monastery. The complex contains over 2,100 square meters of painted surfaces.",
        video: "https://www.youtube.com/embed/demo"
    },
    {
        id: 14,
        name: "Kandy View Point",
        location: "Kandy",
        image: "view point.webp",
        description: "A lesser-known but spectacular viewpoint offering panoramic views of Kandy city and the surrounding mountains. Perfect for photography and sunset viewing.",
        features: ["Viewpoint", "Photography", "Sunset", "Scenic"],
        bestTime: "Year-round, best at sunset",
        entryFee: "Free",
        highlights: "City views, Mountain vistas, Sunset, Photography",
        history: "This viewpoint has become increasingly popular among travelers seeking alternative perspectives of Kandy, away from the main tourist areas.",
        video: "https://www.youtube.com/embed/demo"
    }
];

// Gallery Images Data
const galleryImages = [
    { src: "pexels-bride-collection-198263970-17312932.jpg", alt: "kandyan bride" },
    { src: "Traditional clothes.jpg", alt: "Traditional clothes" },
    { src: "vadda.jpg", alt: "Sri Lanka aboriginal Vedda at work" },
    { src: "Mosque.jpg", alt: "Mosque" },
    { src: "buddhism.jpg", alt: "Tample" },
    { src: "nallur kovil.jpg", alt: "Nallur Kovill" },
    { src: "church.jpg", alt: "church" },
    { src: "festival held in Kandy.jpg", alt: "festival held in Kandy" },
    { src: "Sri Lankan sweets.webp", alt: "Sri Lankan sweets" },
    { src: "Elepant.jpg", alt: "Elephant" },
    { src: "Buffalow.jpg", alt: "Buffalow" },
    { src: "pexels-roshan-kumara-1617742458-34050813.jpg", alt: "Sri lanka buddhism" }
];

// Videos Data
const videos = [
    {
        title: "Discover Sri Lanka - The Pearl of the Indian Ocean",
        description: "A comprehensive journey through Sri Lanka's most beautiful destinations",
        thumbnail: "pexels-malindabandaralk-16508233.jpg",
        videoId: "dQw4w9WgXcQ"
    },
    {
        title: "Wildlife Safari in Yala National Park",
        description: "Experience the incredible wildlife and natural beauty of Yala",
        thumbnail: "safari.jpg",
        videoId: "",
    },
    {
        title: "Ancient Cities of Sri Lanka",
        description: "Explore the UNESCO World Heritage Sites of Anuradhapura and Polonnaruwa",
        thumbnail: "thuparamaya.jpg",
        videoId: "dQw4w9WgXcQ"
    },
    {
        title: "Hill Country Adventure - Ella & Nuwara Eliya",
        description: "Journey through the misty mountains and tea plantations",
        thumbnail: "pexels-roman-odintsov-4553621.jpg",
        videoId: "dQw4w9WgXcQ"
    }
];

// User state
let currentUser = null;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    loadDestinations();
    loadGallery();
    loadVideos();
    setupNavigation();
    setupModal();
    setupScrollAnimations();
    setup3DEffects();
    initializeGoogleSignIn();
    checkLoginStatus();
    setupThemeToggle();
});

// Initialize Google Sign-In
function initializeGoogleSignIn() {
    function tryInitialize() {
        if (typeof google !== 'undefined' && google.accounts) {
            google.accounts.id.initialize({
                client_id: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com', // Replace with your actual Client ID
                callback: handleCredentialResponse,
                auto_select: false,
                cancel_on_tap_outside: true
            });

            // Render the button
            google.accounts.id.renderButton(
                document.getElementById('google-login-container'),
                {
                    theme: 'outline',
                    size: 'large',
                    text: 'signin_with',
                    shape: 'pill',
                    logo_alignment: 'left'
                }
            );
        } else {
            // Fallback: Create a custom button if Google API fails to load
            createCustomLoginButton();
        }
    }

    // Try immediately if Google API is already loaded
    if (document.readyState === 'complete') {
        tryInitialize();
    } else {
        // Try after page loads
        window.addEventListener('load', tryInitialize);
        
        // Also try after a delay in case the script loads late
        setTimeout(tryInitialize, 1000);
    }
}

// Create custom login button (fallback)
function createCustomLoginButton() {
    const container = document.getElementById('google-login-container');
    if (container && !container.querySelector('button')) {
        container.innerHTML = `
            <button class="google-login-button" onclick="signInWithGoogle()">
                <svg viewBox="0 0 24 24" width="18" height="18">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Sign in with Google
            </button>
        `;
    }
}

// Handle Google Sign-In response
function handleCredentialResponse(response) {
    // Decode the JWT token
    try {
        const payload = JSON.parse(atob(response.credential.split('.')[1]));
        
        currentUser = {
            name: payload.name,
            email: payload.email,
            picture: payload.picture,
            sub: payload.sub
        };

        // Save to localStorage
        localStorage.setItem('user', JSON.stringify(currentUser));
        localStorage.setItem('googleToken', response.credential);

        // Update UI
        showUserProfile();
        
        // Show welcome message
        showWelcomeMessage();
    } catch (error) {
        console.error('Error handling credential response:', error);
    }
}

// Sign in with Google (fallback method)
function signInWithGoogle() {
    // This would typically use Google OAuth 2.0
    // For demo purposes, we'll use a mock login
    alert('To use Google Sign-In, please:\n1. Go to https://console.cloud.google.com\n2. Create a project and get a Client ID\n3. Replace YOUR_GOOGLE_CLIENT_ID in script.js\n\nFor now, using demo login...');
    
    // Demo login
    currentUser = {
        name: 'Demo User',
        email: 'demo@example.com',
        picture: 'https://via.placeholder.com/150',
        sub: 'demo123'
    };
    
    localStorage.setItem('user', JSON.stringify(currentUser));
    showUserProfile();
    showWelcomeMessage();
}

// Check if user is already logged in
function checkLoginStatus() {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
        try {
            currentUser = JSON.parse(savedUser);
            showUserProfile();
        } catch (error) {
            console.error('Error parsing saved user:', error);
            localStorage.removeItem('user');
        }
    }
}

// Show user profile
function showUserProfile() {
    const loginContainer = document.getElementById('google-login-container');
    const userProfile = document.getElementById('user-profile');
    const userAvatar = document.getElementById('user-avatar');
    const userName = document.getElementById('user-name');

    if (currentUser && userProfile && userAvatar && userName) {
        userAvatar.src = currentUser.picture || 'https://via.placeholder.com/150';
        userName.textContent = currentUser.name || currentUser.email;
        
        loginContainer.style.display = 'none';
        userProfile.style.display = 'flex';
    }
}

// Hide user profile and show login button
function hideUserProfile() {
    const loginContainer = document.getElementById('google-login-container');
    const userProfile = document.getElementById('user-profile');

    if (loginContainer && userProfile) {
        loginContainer.style.display = 'flex';
        userProfile.style.display = 'none';
    }
}

// Show welcome message
function showWelcomeMessage() {
    if (currentUser) {
        // Create a temporary notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px 25px;
            border-radius: 50px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            z-index: 2000;
            animation: slideInRight 0.5s ease;
            font-weight: 500;
        `;
        notification.textContent = `Welcome, ${currentUser.name}! 🎉`;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.5s ease';
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }
}

// Logout function
function logout() {
    currentUser = null;
    localStorage.removeItem('user');
    localStorage.removeItem('googleToken');
    
    hideUserProfile();
    
    // If using Google Identity Services, sign out
    if (typeof google !== 'undefined' && google.accounts) {
        google.accounts.id.disableAutoSelect();
    }
    
    // Show logout message
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 50px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 2000;
        animation: slideInRight 0.5s ease;
        font-weight: 500;
    `;
    notification.textContent = 'Logged out successfully';
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 2000);
}

// Add logout button event listener
document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
});

// Load destinations
function loadDestinations() {
    const grid = document.getElementById('destinationsGrid');
    if (!grid) {
        console.error('Destinations grid not found');
        return;
    }
    
    if (!destinations || destinations.length === 0) {
        console.error('No destinations data available');
        return;
    }
    
    grid.innerHTML = '';
    
    destinations.forEach(destination => {
        const card = createDestinationCard(destination);
        grid.appendChild(card);
    });
}

// Create destination card
function createDestinationCard(destination) {
    const card = document.createElement('div');
    card.className = 'destination-card';
    card.innerHTML = `
        <div class="card-image" style="background-image: url('${destination.image}')">
            ${destination.features.includes('UNESCO Site') ? '<div class="card-badge">UNESCO</div>' : ''}
        </div>
        <div class="card-content">
            <h3 class="card-title">${destination.name}</h3>
            <div class="card-location">
                📍 ${destination.location}
            </div>
            <p class="card-description">${destination.description}</p>
            <div class="card-features">
                ${destination.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
            </div>
            <button class="card-button" onclick="openModal(${destination.id})">Learn More</button>
        </div>
    `;
    return card;
}

// Load gallery
function loadGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) {
        console.error('Gallery grid not found');
        return;
    }
    
    if (!galleryImages || galleryImages.length === 0) {
        console.error('No gallery images available');
        return;
    }
    
    grid.innerHTML = '';
    
    galleryImages.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" loading="lazy">
            <div class="gallery-overlay">
                <div class="gallery-overlay-text">${image.alt}</div>
            </div>
        `;
        grid.appendChild(item);
    });
}

// Load videos
function loadVideos() {
    const grid = document.getElementById('videosGrid');
    if (!grid) {
        console.error('Videos grid not found');
        return;
    }
    
    if (!videos || videos.length === 0) {
        console.error('No videos data available');
        return;
    }
    
    grid.innerHTML = '';
    
    videos.forEach((video, index) => {
        const item = document.createElement('div');
        item.className = 'video-item';
        item.innerHTML = `
            <div class="video-thumbnail" style="background-image: url('${video.thumbnail}')" onclick="playVideo('${video.videoId}', ${index})"></div>
            <div class="video-info">
                <h3 class="video-title">${video.title}</h3>
                <p class="video-description">${video.description}</p>
            </div>
        `;
        grid.appendChild(item);
    });
}

// Play video (global function for onclick)
function playVideo(videoId, index) {
    if (!videos || !videos[index]) {
        console.error('Video not found');
        return;
    }
    
    const video = videos[index];
    const modal = document.getElementById('destinationModal');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalBody) {
        console.error('Modal elements not found');
        return;
    }
    
    modalBody.innerHTML = `
        <div style="text-align: center;">
            <h2 style="margin-bottom: 1rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${video.title}</h2>
            <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 15px; margin-bottom: 1rem;">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/TzTFIu25eHA?si=4XXVFttnsbiitteo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <p style="color: #666;">${video.description}</p>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Open modal (global function for onclick)
function openModal(destinationId) {
    if (!destinations) {
        console.error('Destinations data not loaded');
        return;
    }
    
    const destination = destinations.find(d => d.id === destinationId);
    const modal = document.getElementById('destinationModal');
    const modalBody = document.getElementById('modalBody');
    
    if (!destination) {
        console.error('Destination not found');
        return;
    }
    
    if (!modal || !modalBody) {
        console.error('Modal elements not found');
        return;
    }
    
    modalBody.innerHTML = `
        <div class="modal-destination">
            <div class="modal-image" style="background-image: url('${destination.image}')"></div>
            <div class="modal-info">
                <h2>${destination.name}</h2>
                <div class="detail-item">
                    <strong>📍 Location:</strong> ${destination.location}
                </div>
                <p>${destination.description}</p>
                <div class="modal-details">
                    <div class="detail-item">
                        <strong>⏰ Best Time to Visit:</strong> ${destination.bestTime}
                    </div>
                    <div class="detail-item">
                        <strong>💰 Entry Fee:</strong> ${destination.entryFee}
                    </div>
                    <div class="detail-item">
                        <strong>⭐ Highlights:</strong> ${destination.highlights}
                    </div>
                </div>
                <div style="margin-top: 1.5rem;">
                    <h3 style="margin-bottom: 0.5rem;">History</h3>
                    <p style="color: #666;">${destination.history}</p>
                </div>
                <div style="margin-top: 1rem;">
                    <div class="card-features">
                        ${destination.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Setup navigation
function setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Close modal
    const modal = document.getElementById('destinationModal');
    const closeModal = document.querySelector('.close-modal');
    
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Setup modal
function setupModal() {
    // Already handled in setupNavigation
}

// Setup Theme Toggle
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Get saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    
    // Theme toggle click handler
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

// Scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.destination-card, .gallery-item, .video-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// 3D Effects
function setup3DEffects() {
    const cards = document.querySelectorAll('.destination-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
    
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape');
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.5;
            shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

