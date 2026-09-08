// ========================================
// BATTLE PRIME - ESPORTS TOURNAMENT APP
// Screen Navigation & Interactions
// ========================================

let currentScreen = 'home-screen';
let menuOpen = false;

// ========================================
// NAVIGATION FUNCTIONS
// ========================================

function navigateTo(screenName) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));

    // Hide menu if open
    if (menuOpen) {
        toggleMenu();
    }

    // Map screen names to actual screen IDs
    const screenMap = {
        'home': 'home-screen',
        'tournaments': 'tournaments-screen',
        'tournament-details': 'tournament-details-screen',
        'matches': 'matches-screen',
        'leaderboard': 'leaderboard-screen',
        'profile': 'profile-screen',
        'notifications': 'notifications-screen',
        'menu': 'menu-screen'
    };

    const screenId = screenMap[screenName] || screenName;
    const targetScreen = document.getElementById(screenId);

    if (targetScreen) {
        targetScreen.classList.add('active');
        currentScreen = screenId;

        // Update active nav item
        updateNavigation(screenName);

        // Scroll to top
        document.querySelector('.main-content').scrollTop = 0;
    }
}

function updateNavigation(screenName) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    // Match nav items with screens
    const navMap = {
        'home': 0,
        'tournaments': 1,
        'matches': 2,
        'leaderboard': 3,
        'profile': 4
    };

    if (navMap[screenName] !== undefined) {
        navItems[navMap[screenName]].classList.add('active');
    }
}

// ========================================
// MENU FUNCTIONS
// ========================================

function toggleMenu() {
    menuOpen = !menuOpen;
    if (menuOpen) {
        navigateTo('menu');
    } else {
        navigateTo('home');
    }
}

// ========================================
// TOURNAMENT DETAILS FUNCTIONS
// ========================================

function switchDetailTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.detail-tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.detail-tab');
    tabButtons.forEach(btn => btn.classList.remove('active'));

    // Show selected tab
    const tabId = tabName + '-tab';
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Add active class to clicked button
    event.target.classList.add('active');
}

// ========================================
// TOURNAMENT FILTERING
// ========================================

function filterTournaments(filter) {
    const buttons = document.querySelectorAll('.filter-tabs .tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // In a real app, this would filter the tournament list
    console.log('Filtering tournaments by:', filter);
}

// ========================================
// MATCH FILTERING
// ========================================

function filterMatches(filter) {
    const buttons = document.querySelectorAll('.filter-tabs .tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // In a real app, this would filter the matches list
    console.log('Filtering matches by:', filter);
}

// ========================================
// LEADERBOARD FUNCTIONS
// ========================================

function switchLeaderboard(type) {
    // Hide all leaderboards
    const leaderboards = document.querySelectorAll('.leaderboard-list');
    leaderboards.forEach(lb => lb.classList.remove('active'));

    // Remove active class from buttons
    const buttons = document.querySelectorAll('.filter-tabs .tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Show selected leaderboard
    const leaderboardId = type + '-leaderboard';
    const selectedLeaderboard = document.getElementById(leaderboardId);
    if (selectedLeaderboard) {
        selectedLeaderboard.classList.add('active');
    }

    // Add active class to clicked button
    event.target.classList.add('active');
}

// ========================================
// NOTIFICATION FUNCTIONS
// ========================================

function filterNotifications(filter) {
    const buttons = document.querySelectorAll('.filter-tabs .tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // In a real app, this would filter the notifications
    console.log('Filtering notifications by:', filter);
}

function markAsRead() {
    event.target.closest('.notification-item').classList.remove('unread');
    
    // Update badge
    const badge = document.querySelector('.notification-badge');
    const count = parseInt(badge.textContent);
    if (count > 0) {
        badge.textContent = count - 1;
    }
}

// ========================================
// SETTINGS FUNCTIONS
// ========================================

function openSettings(setting) {
    console.log('Opening settings:', setting);
    // In a real app, this would open detailed settings
}

// ========================================
// LOGOUT FUNCTION
// ========================================

function logout() {
    const confirmed = confirm('Are you sure you want to logout?');
    if (confirmed) {
        console.log('Logging out...');
        // In a real app, this would clear session and redirect to login
        alert('Logged out successfully!');
        navigateTo('home');
    }
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Battle Prime App Initialized');
    
    // Set initial active screen
    navigateTo('home');

    // Add event listeners for animations
    addAnimationListeners();
});

// ========================================
// ANIMATION HELPERS
// ========================================

function addAnimationListeners() {
    // Animate stat cards on load
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = 'slideUp 0.5s ease-out';
        }, index * 100);
    });

    // Add hover animation to tournament cards
    const tournamentCards = document.querySelectorAll('.tournament-card');
    tournamentCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// ========================================
// RESPONSIVE HELPERS
// ========================================

function checkScreenSize() {
    const appContainer = document.querySelector('.app-container');
    
    if (window.innerWidth < 480) {
        appContainer.style.maxWidth = '100%';
    }
}

window.addEventListener('resize', checkScreenSize);

// ========================================
// UTILITY FUNCTIONS
// ========================================

function showNotification(message, type = 'info') {
    console.log(`[${type}] ${message}`);
    // In a real app, this would show a toast notification
}

function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function formatPoints(points) {
    return points.toLocaleString();
}

// ========================================
// TOURNAMENT DETAILS BACK BUTTON
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize screen
    navigateTo('home');
});
