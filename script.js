 document.addEventListener('DOMContentLoaded', function() {
            // DOM Elements
            const cakeScene = document.getElementById('cakeScene');
            const bookContainer = document.getElementById('bookContainer');
            const blowBtn = document.getElementById('blowBtn');
            const candles = document.querySelectorAll('.candle');
            const bookElement = document.getElementById('book');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const currentPageEl = document.getElementById('currentPage');
            const totalPagesEl = document.getElementById('totalPages');
            const controls = document.getElementById('controls');
            const pageIndicator = document.getElementById('pageIndicator');
            const playBtn = document.getElementById('playBtn');
            const backgroundMusic = document.getElementById('backgroundMusic');
            const playIcon = playBtn.querySelector('i');
            
            // New elements for burned letter section
            const burnedLetterSection = document.getElementById('burnedLetterSection');
            const letterBody = document.getElementById('letterBody');
            const letterRevealBtn = document.getElementById('letterRevealBtn');
            
            // Configuration for 20-page scrapbook
            const TOTAL_PAGES = 20;
            const VIDEO_PAGES = 5;
            const STANDARD_PHOTO_PAGES = 10;
            const STICKER_PAGES = 5;
            
            // Video URLs (using placeholder videos)
            const VIDEO_URLS = [
                "./s.mp4",
                "./2026-02-07-083943539.mp4",
                "./video_2026-02-07_08-51-34 (2).mp4",
                "./video_2026-02-07_08-51-34 (3).mp4",
                "./ش.mp4"
            ];
            
            // Photo URLs (using your images - add more as needed)
            const PHOTO_URLS = [
                "img/1768390479071.jpg",
                "img/IMG-20240930-WA0012.jpg",
                "img/IMG-20241007-WA0034 (1).jpg",
                "img/IMG-20250714-WA0001.jpg",
                "img/IMG-20250909-WA0029.jpg",
                "img/IMG-20250921-WA0010.jpg",
                "img/IMG-20251027-WA0022.jpg",
                "img/IMG_20251207_134250_115@-2026492580.jpg",
                "img/IMG_20260114_132127_707@1360492115.jpg",
                "img/IMG_20260114_132253_891@-1246491585.jpg",
                "img/Messenger_creation_5477D4DD-E409-4BF6-9308-A1A12D326DFC.jpeg",
                "img/IMG_20260205_140732_364@1161764688.jpg",
                "img/IMG_20260205_133020_008@-1777963253.jpg",
                "img/IMG_20260205_124623_982@-758589267.jpg",
                "img/IMG-20250909-WA0033.jpg",
                "img2/photo_10_2026-02-07_10-39-37.jpg",
                "img2/photo_11_2026-02-07_10-39-37.jpg",
                "img2/photo_12_2026-02-07_10-39-37.jpg",
                "img2/photo_13_2026-02-07_10-39-37.jpg",
                "img2/photo_15_2026-02-07_10-39-37.jpg",
                "img2/photo_16_2026-02-07_10-39-37.jpg",
                "img2/photo_17_2026-02-07_10-39-38.jpg",
                "img2/photo_18_2026-02-07_10-39-38.jpg",
                "img2/photo_19_2026-02-07_10-39-38.jpg",
                "img2/photo_1_2026-02-07_10-39-37.jpg",
                "img2/photo_20_2026-02-07_10-39-38.jpg",
                "img2/photo_21_2026-02-07_10-39-38.jpg",
                "img2/photo_22_2026-02-07_10-39-38.jpg",
                "img2/photo_23_2026-02-07_10-39-38.jpg",
                "img2/photo_24_2026-02-07_10-39-38.jpg",
                "img2/photo_2_2026-02-07_10-39-37.jpg",
                "img2/photo_3_2026-02-07_10-39-37.jpg",
                "img2/photo_4_2026-02-07_10-39-37.jpg",
                "img2/photo_5_2026-02-07_10-39-37.jpg",
                "img2/photo_6_2026-02-07_10-39-37.jpg",
                "img2/photo_7_2026-02-07_10-39-37.jpg",
                "img2/photo_8_2026-02-07_10-39-37.jpg",
                "img2/photo_9_2026-02-07_10-39-37.jpg",
                "img2/photo_14_2026-02-07_10-39-37.jpg"
                // Add more photos here as needed
            ];
            
            // Add more photo URLs dynamically if needed
            // You can add more photos by extending the PHOTO_URLS array
            
            // Captions for different page types
            const VIDEO_CAPTIONS = [
                "cuteeeeeeeee 🥰🥰🥰",
                "big biiiiiiiiiiig kiss",
                "Can not take my eyes from you ",
                "My littek princes ",
                "Quiet Moments Together"
            ];
            
            const PHOTO_CAPTIONS = [
                "You changed the way I see the world",
                "Being with you feels like coming home",
                "You made me believe in gentle things",
                "I found clarity in your presence",
                "You are my favorite choice",
                "You bring meaning to my quiet moments",
                "You showed me a softer kind of strength",
                "You are the peace I didn’t know I needed",
                "You made patience feel worth it",
                "With you, things make sense",
                "You taught my heart how to slow down",
                "You are the reason I try harder",
                "You turned ordinary days into something special",
                "You make silence feel comfortable",
                "You gave my heart a reason to stay",
                "You inspire the best parts of me",
                "You are the calm after long storms",
                "You make effort feel natural",
                "You are where my thoughts rest",
                "You are my everyday miracle"

            ];
            
            const STICKER_CAPTIONS = [
                "Little Treasures",
                "Precious Moments",
                "Tiny Memories",
                "Happy Times",
                "Sweet Collection"
            ];
            
            const DATES = [
                "July 22, 2025",
                "August 31, 2025", 
                "September 9, 2025",
                "September 14, 2025",
                "July 13, 2025",
                "February, 15 , 2003 ",
                "September 8, 2025",
                "November 5, 2025",
                "November 23, 2025",
                "November 29, 2025",
                "December 20, 2025",
                "January 14, 2026",
                "February 5, 2026",
                "March 18, 2024",
                "November 23, 2023",
                "February 5, 2024",
                "April 15, 2024",
                "June 28, 2024",
                "August 10, 2024",
                "Today - Your Special Day!"
            ];
            
            // Letter content - a heartfelt birthday message
            const LETTER_CONTENT = [
                "As I begin writing this letter, I find myself filled with deep emotion. I am writing to you on your birthday, a day that marks not only another year of your life, but another year of the bright light you bring into this world.",                
                "As I look back on our memories together, from our first shy meeting to the comforting silence we now share, I realize that every moment has been a precious treasure. I remember how your laughter once made me nervous, and now it has become the sound I long to hear every single day.",                
                "You have a beautiful gift for finding joy in the simplest things. A rainy day turns into an adventure, a simple meal becomes a celebration, and quiet outings feel like the most meaningful moments. You have taught me to see the world with eyes full of wonder and gratitude.",               
                 "On this special day, I want you to know that you are loved more than you could ever imagine. Your kindness, your strength, and your gentle spirit make you the most wonderful person I know. The world feels warmer because you are in it, and my life is far more beautiful because you are in mine.",                
                 "I promise to stand beside you through every part of life — in bright days and in difficult nights, in laughter and in tears. I promise to be your safe place, your strongest supporter, and the one who believes in you even when you struggle to believe in yourself.",                
                 "As you blow out your candles today, I hope you remember something simple yet meaningful: try to see yourself the way I see you, and realize how truly special you are. May your days be filled with the same happiness you give to others, and may your heart always stay full of light.",              
                   "Happy birthday, بستاني. Today, tomorrow, and always — you have my heart, completely and forever"
            ];
            
            // State management
            let currentPageIndex = 0;
            let pages = [];
            let isAnimating = false;
            let isMusicPlaying = false;
            let isLetterRevealed = false;
            let bookCompleted = false;
            
            // Photo management system
            let usedPhotos = new Set();
            let availablePhotos = [...PHOTO_URLS];
            
            // Function to get a unique photo that hasn't been used before
            function getUniquePhoto() {
                if (availablePhotos.length === 0) {
                    // If we run out of unique photos, reset (but this shouldn't happen)
                    console.warn("Ran out of unique photos, some may repeat");
                    availablePhotos = [...PHOTO_URLS];
                    usedPhotos.clear();
                }
                
                // Find a photo that hasn't been used
                let photoIndex;
                let photoUrl;
                
                // Try to find an unused photo
                for (let i = 0; i < availablePhotos.length; i++) {
                    if (!usedPhotos.has(availablePhotos[i])) {
                        photoIndex = i;
                        photoUrl = availablePhotos[i];
                        break;
                    }
                }
                
                // If all photos are used, use the first one
                if (!photoUrl) {
                    photoIndex = 0;
                    photoUrl = availablePhotos[0];
                    // Reset used photos since we're starting over
                    usedPhotos.clear();
                }
                
                // Mark this photo as used
                usedPhotos.add(photoUrl);
                
                return photoUrl;
            }
            
            // Function to shuffle an array (Fisher-Yates algorithm)
            function shuffleArray(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
                return array;
            }
            
            // Initialize the scrapbook
            function initScrapbook() {
                totalPagesEl.textContent = TOTAL_PAGES;
                
                // Reset photo tracking
                usedPhotos.clear();
                availablePhotos = shuffleArray([...PHOTO_URLS]);
                
                // Create all pages
                for (let i = 0; i < TOTAL_PAGES; i++) {
                    createPage(i);
                }
                
                // Set initial z-index for pages (first page on top)
                updatePageStack();
                
                // Update UI
                updateNavigation();
                
                // Set up event listeners for navigation
                prevBtn.addEventListener('click', goToPreviousPage);
                nextBtn.addEventListener('click', goToNextPage);
                
                // Keyboard navigation
                document.addEventListener('keydown', handleKeyDown);
                
                // Touch swipe for mobile
                let touchStartX = 0;
                let touchEndX = 0;
                
                bookContainer.addEventListener('touchstart', e => {
                    touchStartX = e.changedTouches[0].screenX;
                });
                
                bookContainer.addEventListener('touchend', e => {
                    touchEndX = e.changedTouches[0].screenX;
                    handleSwipe();
                });
            }
            
            // Create a page based on its index
            function createPage(pageIndex) {
                const page = document.createElement('div');
                page.className = 'page';
                page.dataset.index = pageIndex;
                
                const front = document.createElement('div');
                front.className = 'page-front';
                
                const back = document.createElement('div');
                back.className = 'page-back';
                
                // Add page number to back of page
                const pageNumber = document.createElement('div');
                pageNumber.className = 'page-number';
                pageNumber.textContent = `${pageIndex + 1}`;
                back.appendChild(pageNumber);
                
                // Add page shadow
                const shadow = document.createElement('div');
                shadow.className = 'page-shadow';
                
                // Determine page type based on index
                if (pageIndex < VIDEO_PAGES) {
                    // Video pages (1-5)
                    createVideoPageContent(front, pageIndex);
                    createPhotoPageContent(back, pageIndex, true); // Back side is a photo page
                } else if (pageIndex < VIDEO_PAGES + STANDARD_PHOTO_PAGES) {
                    // Standard photo pages (6-15)
                    createPhotoPageContent(front, pageIndex);
                    createPhotoPageContent(back, pageIndex, true);
                } else {
                    // Sticker pages (16-20)
                    createStickerPageContent(front, pageIndex);
                    createPhotoPageContent(back, pageIndex, true);
                }
                
                page.appendChild(front);
                page.appendChild(back);
                page.appendChild(shadow);
                bookElement.appendChild(page);
                
                pages.push(page);
            }
            
            // Create content for video pages
            function createVideoPageContent(container, pageIndex) {
                const videoIndex = pageIndex % VIDEO_URLS.length;
                
                const content = document.createElement('div');
                content.className = 'video-container';
                
                const wrapper = document.createElement('div');
                wrapper.className = 'video-wrapper';
                
                const video = document.createElement('video');
                video.playsInline = true;
                video.muted = true;
                video.loop = true;
                
                // Only autoplay the first video
                if (pageIndex === 0) {
                    video.autoplay = true;
                }
                
                const source = document.createElement('source');
                source.src = VIDEO_URLS[videoIndex];
                source.type = 'video/mp4';
                
                video.appendChild(source);
                wrapper.appendChild(video);
                
                const caption = document.createElement('div');
                caption.className = 'video-caption';
                caption.textContent = VIDEO_CAPTIONS[videoIndex] || "Special Moment";
                
                content.appendChild(wrapper);
                content.appendChild(caption);
                container.appendChild(content);
                
                // Store video element for later control
                container.dataset.videoElement = video;
            }
            
            // Create content for standard photo pages
            function createPhotoPageContent(container, pageIndex, isBack = false) {
                const captionIndex = pageIndex % PHOTO_CAPTIONS.length;
                const dateIndex = pageIndex % DATES.length;
                
                const content = document.createElement('div');
                content.className = 'photo-page-content';
                
                const photoContainer = document.createElement('div');
                photoContainer.className = 'photo-container';
                
                // Always use unique photos - no repeating
                if (pageIndex % 3 === 0 || isBack) {
                    // Single photo
                    const photoDiv = document.createElement('div');
                    photoDiv.className = 'photo-single';
                    photoDiv.style.backgroundImage = `url(${getUniquePhoto()})`;
                    photoDiv.style.backgroundSize = 'cover';
                    photoDiv.style.backgroundPosition = 'center';
                    photoContainer.appendChild(photoDiv);
                } else {
                    // Two photos - both unique
                    const photoDiv1 = document.createElement('div');
                    photoDiv1.className = 'photo-double';
                    photoDiv1.style.backgroundImage = `url(${getUniquePhoto()})`;
                    photoDiv1.style.backgroundSize = 'cover';
                    photoDiv1.style.backgroundPosition = 'center';
                    
                    const photoDiv2 = document.createElement('div');
                    photoDiv2.className = 'photo-double';
                    photoDiv2.style.backgroundImage = `url(${getUniquePhoto()})`;
                    photoDiv2.style.backgroundSize = 'cover';
                    photoDiv2.style.backgroundPosition = 'center';
                    
                    photoContainer.appendChild(photoDiv1);
                    photoContainer.appendChild(photoDiv2);
                }
                
                const caption = document.createElement('div');
                caption.className = 'photo-caption';
                caption.textContent = PHOTO_CAPTIONS[captionIndex] || "Beautiful Memory";
                
                const date = document.createElement('div');
                date.className = 'photo-date';
                date.textContent = DATES[dateIndex];
                
                content.appendChild(photoContainer);
                content.appendChild(caption);
                content.appendChild(date);
                container.appendChild(content);
            }
            
            // Create content for sticker pages
            function createStickerPageContent(container, pageIndex) {
                const stickerIndex = pageIndex - VIDEO_PAGES - STANDARD_PHOTO_PAGES;
                
                const content = document.createElement('div');
                content.className = 'sticker-page-content';
                
                // Add decorative elements
                const heart = document.createElement('div');
                heart.className = 'decoration heart';
                heart.innerHTML = '<i class="fas fa-heart"></i>';
                
                const star = document.createElement('div');
                star.className = 'decoration star';
                star.innerHTML = '<i class="fas fa-star"></i>';
                
                const star2 = document.createElement('div');
                star2.className = 'decoration star-2';
                star2.innerHTML = '<i class="fas fa-star"></i>';
                
                // Add tape decorations
                const tape1 = document.createElement('div');
                tape1.className = 'tape tape-1';
                
                const tape2 = document.createElement('div');
                tape2.className = 'tape tape-2';
                
                // Create 3-6 sticker photos - all unique
                const stickerCount = 3 + (pageIndex % 3); // 3-5 stickers to ensure uniqueness
                
                for (let i = 0; i < stickerCount; i++) {
                    const sticker = document.createElement('div');
                    sticker.className = `sticker sticker-${i + 1}`;
                    
                    // Make some stickers look like polaroids
                    if (i % 2 === 0) {
                        sticker.classList.add('polaroid');
                    }
                    
                    // Use unique photo for each sticker
                    sticker.style.backgroundImage = `url(${getUniquePhoto()})`;
                    sticker.style.backgroundSize = 'cover';
                    sticker.style.backgroundPosition = 'center';
                    
                    content.appendChild(sticker);
                }
                
                content.appendChild(tape1);
                content.appendChild(tape2);
                content.appendChild(heart);
                content.appendChild(star);
                content.appendChild(star2);
                
                // Add caption for sticker page
                const caption = document.createElement('div');
                caption.className = 'photo-caption';
                caption.style.position = 'absolute';
                caption.style.bottom = '20px';
                caption.style.left = '0';
                caption.style.width = '100%';
                caption.style.textAlign = 'center';
                caption.textContent = STICKER_CAPTIONS[stickerIndex] || "Little Treasures";
                
                content.appendChild(caption);
                container.appendChild(content);
            }
            
            // Create letter content
            function createLetterContent() {
                letterBody.innerHTML = '';
                
                LETTER_CONTENT.forEach(paragraph => {
                    const p = document.createElement('p');
                    p.textContent = paragraph;
                    letterBody.appendChild(p);
                });
            }
            
            // Reveal the burned letter
            function revealLetter() {
                if (isLetterRevealed) return;
                
                isLetterRevealed = true;
                
                // Create letter content
                createLetterContent();
                
                // Animate the paper
                const burnedPaper = document.querySelector('.burned-paper');
                burnedPaper.style.animation = 'burnEffect 2s ease-out';
                
                // Change button text
                letterRevealBtn.innerHTML = '<i class="fas fa-heart"></i> My Heart is Yours';
                letterRevealBtn.disabled = true;
                
                // Add a subtle glow effect
                setTimeout(() => {
                    burnedPaper.style.boxShadow = '0 10px 40px rgba(139, 69, 19, 0.3)';
                }, 1000);
            }
            
            // Check if book is completed
            function checkBookCompletion() {
                if (currentPageIndex === TOTAL_PAGES - 1 && !bookCompleted) {
                    bookCompleted = true;
                    
                    // Show the burned letter section after a delay
                    setTimeout(() => {
                        burnedLetterSection.classList.add('visible');
                        
                        // Scroll to the letter section smoothly
                        setTimeout(() => {
                            burnedLetterSection.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center'
                            });
                        }, 500);
                    }, 1000);
                }
            }
            
            // Update z-index of all pages to create proper stacking
            function updatePageStack() {
                // Reset all z-index
                pages.forEach((page, index) => {
                    page.style.zIndex = TOTAL_PAGES - index;
                });
                
                // Bring current page to top
                if (pages[currentPageIndex]) {
                    pages[currentPageIndex].style.zIndex = TOTAL_PAGES + 10;
                }
            }
            
            // Flip to a specific page
            function flipToPage(pageIndex) {
                if (isAnimating || pageIndex < 0 || pageIndex >= TOTAL_PAGES) return;
                
                isAnimating = true;
                
                // Pause video on current page if it exists
                const currentPage = pages[currentPageIndex];
                if (currentPage) {
                    const currentVideo = currentPage.querySelector('.page-front video');
                    if (currentVideo) {
                        currentVideo.pause();
                    }
                }
                
                // Determine if we're going forward or backward
                const isForward = pageIndex > currentPageIndex;
                
                // Flip current page if going forward
                if (isForward && currentPageIndex < TOTAL_PAGES - 1) {
                    pages[currentPageIndex].classList.add('flipped');
                }
                
                // If going backward, unflip the previous page
                if (!isForward && currentPageIndex > 0) {
                    pages[currentPageIndex - 1].classList.remove('flipped');
                }
                
                // Update current page index
                currentPageIndex = pageIndex;
                
                // Play video on new page if it exists
                const newPage = pages[currentPageIndex];
                if (newPage) {
                    const newVideo = newPage.querySelector('.page-front video');
                    if (newVideo) {
                        newVideo.play().catch(e => console.log("Autoplay prevented:", e));
                    }
                }
                
                // Update page stack after animation
                setTimeout(() => {
                    updatePageStack();
                    updateNavigation();
                    isAnimating = false;
                    
                    // Check if book is completed
                    checkBookCompletion();
                }, 800);
            }
            
            // Go to next page
            function goToNextPage() {
                if (currentPageIndex < TOTAL_PAGES - 1) {
                    flipToPage(currentPageIndex + 1);
                }
            }
            
            // Go to previous page
            function goToPreviousPage() {
                if (currentPageIndex > 0) {
                    flipToPage(currentPageIndex - 1);
                }
            }
            
            // Handle keyboard navigation
            function handleKeyDown(e) {
                if (!bookContainer.classList.contains('visible')) return;
                
                if (e.key === 'ArrowRight' || e.key === ' ') {
                    goToNextPage();
                } else if (e.key === 'ArrowLeft') {
                    goToPreviousPage();
                }
            }
            
            // Handle touch swipe for mobile
            function handleSwipe() {
                if (!bookContainer.classList.contains('visible')) return;
                
                const swipeThreshold = 50;
                const difference = touchStartX - touchEndX;
                
                if (Math.abs(difference) > swipeThreshold) {
                    if (difference > 0) {
                        // Swipe left - next page
                        goToNextPage();
                    } else {
                        // Swipe right - previous page
                        goToPreviousPage();
                    }
                }
            }
            
            // Update navigation buttons state
            function updateNavigation() {
                prevBtn.disabled = currentPageIndex === 0;
                nextBtn.disabled = currentPageIndex === TOTAL_PAGES - 1;
                
                // Update current page display (add 1 because page index starts at 0)
                currentPageEl.textContent = currentPageIndex + 1;
            }
            
            // Blow out candles animation
            function blowOutCandles() {
                let candlesBlown = 0;
                
                candles.forEach((candle, index) => {
                    setTimeout(() => {
                        candle.classList.add('flame-out');
                        candlesBlown++;
                        
                        // When all candles are blown
                        if (candlesBlown === candles.length) {
                            // Hide cake scene and show book
                            setTimeout(() => {
                                cakeScene.classList.add('hidden');
                                
                                setTimeout(() => {
                                    bookContainer.classList.add('visible');
                                    controls.style.display = 'flex';
                                    pageIndicator.style.display = 'flex';
                                    
                                    // Start playing music
                                    toggleMusic();
                                    
                                    // Initialize the scrapbook
                                    initScrapbook();
                                }, 500);
                            }, 1000);
                        }
                    }, index * 300);
                });
            }
            
            // Toggle background music
            function toggleMusic() {
                if (isMusicPlaying) {
                    backgroundMusic.pause();
                    playIcon.classList.remove('fa-pause');
                    playIcon.classList.add('fa-play');
                } else {
                    backgroundMusic.play().catch(e => {
                        console.log("Autoplay prevented. User interaction required.");
                        // If autoplay is blocked, show a message
                        playBtn.title = "Click to play music";
                    });
                    playIcon.classList.remove('fa-play');
                    playIcon.classList.add('fa-pause');
                }
                
                isMusicPlaying = !isMusicPlaying;
            }
            
            // Event Listeners
            blowBtn.addEventListener('click', blowOutCandles);
            playBtn.addEventListener('click', toggleMusic);
            letterRevealBtn.addEventListener('click', revealLetter);
            
            // Allow clicking on candles directly
            candles.forEach(candle => {
                candle.addEventListener('click', () => {
                    if (!candle.classList.contains('flame-out')) {
                        candle.classList.add('flame-out');
                    }
                });
            });
            
            // Show a welcome message
            setTimeout(() => {
                alert("Welcome to your birthday surprise! Blow out the candles to begin.");
            }, 1000);
        });