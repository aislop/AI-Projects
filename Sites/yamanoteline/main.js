    // Cache busting query param
    const cacheBust = "?v=1";

    // All 30 Yamanote stations
    const stations = [
      { name: "Tokyo",          mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/tokyo-announcement.mp3",       mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Tokyo.mp3" },
      { name: "Kanda",          mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/kanda-announcement.mp3",       mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Kanda.mp3" },
      { name: "Akihabara",      mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/akihabara-announcement.mp3",   mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Akihabara.mp3" },
      { name: "Okachimachi",    mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/okachimachi-announcement.mp3", mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Okachimachi.mp3" },
      { name: "Ueno",           mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/ueno-announcement.mp3",        mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Ueno.mp3" },
      { name: "Uguisudani",     mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/uguisudani-announcement.mp3",  mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Uguisudani.mp3" },
      { name: "Nippori",        mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/nippori-announcement.mp3",     mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Nippori.mp3" },
      { name: "Nishi-Nippori",  mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/nishinippori-announcement.mp3", mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Nishinippori.mp3" },
      { name: "Tabata",         mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/tabata-announcement.mp3",      mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Tabata.mp3" },
      { name: "Komagome",       mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/komagome-announcement.mp3",    mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Komagome.mp3" },
      { name: "Sugamo",         mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/sugamo-announcement.mp3",      mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Sugamo.mp3" },
      { name: "Otsuka",         mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/otsuka-announcement.mp3",      mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Otsuka.mp3" },
      { name: "Ikebukuro",      mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/ikebukuro-announcement.mp3",   mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Ikebukuro.mp3" },
      { name: "Mejiro",         mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/mejiro-announcement.mp3",      mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Mejiro.mp3" },
      { name: "Takadanobaba",   mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/takadanobaba-announcement.mp3", mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Takadanobaba.mp3" },
      { name: "Shin-Okubo",     mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/shinokubo-announcement.mp3",  mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Shinokubo.mp3" },
      { name: "Shinjuku",       mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/shinjuku-announcement.mp3",    mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Shinjuku.mp3" },
      { name: "Yoyogi",         mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/yoyogi-announcement.mp3",      mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Yoyogi.mp3" },
      { name: "Harajuku",       mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/harajuku-announcement.mp3",    mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Harajuku.mp3" },
      { name: "Shibuya",        mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/shibuya-announcement.mp3",     mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Shibuya.mp3" },
      { name: "Ebisu",          mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/ebisu-announcement.mp3",       mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Ebisu.mp3" },
      { name: "Meguro",         mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/meguro-announcement.mp3",      mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Meguro.mp3" },
      { name: "Gotanda",        mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/gotanda-announcement.mp3",     mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Gotanda.mp3" },
      { name: "Osaki",          mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/osaki-announcement.mp3",       mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Osaki.mp3" },
      { name: "Shinagawa",      mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/shinagawa-announcement.mp3",   mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Shinagawa.mp3" },
      { name: "Tamachi",        mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/tamachi-announcement.mp3",     mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Tamachi.mp3" },
      { name: "Hamamatsucho",   mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/hamamatsucho-announcement.mp3", mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Hamamatsucho.mp3" },
      { name: "Shimbashi",      mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/shimbashi-announcement.mp3",   mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Shimbashi.mp3" },
      { name: "Yurakucho",      mp3Announcement: "https://madewithonlyai.com/Sites/yamanoteline/announcements/yurakucho-announcement.mp3",   mp3Station: "https://madewithonlyai.com/Sites/yamanoteline/sounds/Yurakucho.mp3" }
    ];
    
    let currentStationIndex = -1;
    let announcementVolume = 1, stationVolume = 1;
    let announcementMuted = false, stationMuted = false;
    let currentAudioType = "";
    let playDirection = 1; // +1 clockwise, -1 counterclockwise

    const audioElement = document.getElementById("audio");
    const currentStationLabel = document.getElementById("currentStation");
    const skipAnnouncementToggle = document.getElementById("skipAnnouncement");
    const directionToggle = document.getElementById("directionToggle");
    const directionText = document.getElementById("directionText");
    const darkModeToggle = document.getElementById("darkModeToggle");
    const darkModeText = document.getElementById("darkModeText");
    const layoutToggle = document.getElementById("layoutToggle");
    const playPauseBtn = document.getElementById("playPauseBtn");

    // Dark mode toggle
    darkModeToggle.addEventListener("change", () => {
      if (darkModeToggle.checked) {
        document.body.classList.add("dark-mode");
        darkModeText.textContent = "Dark Mode";
      } else {
        document.body.classList.remove("dark-mode");
        darkModeText.textContent = "Light Mode";
      }
    });

    // Layout toggle button
    layoutToggle.addEventListener("click", () => {
      if (document.body.classList.contains("modern-layout")) {
        document.body.classList.remove("modern-layout");
        layoutToggle.textContent = "Switch Layout";
        localStorage.setItem("layout", "classic");
        // Reposition stations for circle layout
        placeStations();
        generateArrows();
        updateArrowAnimation();
      } else {
        document.body.classList.add("modern-layout");
        layoutToggle.textContent = "Classic Layout";
        localStorage.setItem("layout", "modern");
        // Clear arrows when in modern layout
        document.getElementById("arrowContainer").innerHTML = "";
        // Rebuild station list without positioning
        const stationsContainer = document.getElementById("stations");
        stationsContainer.innerHTML = "";
        stations.forEach((st, i) => {
          const div = document.createElement("div");
          div.classList.add("station");
          div.textContent = st.name;
          div.dataset.index = i;
          div.addEventListener("click", () => playStation(i));
          stationsContainer.appendChild(div);
        });
      }
    });

    // Log audio errors
    audioElement.addEventListener("error", () => {
      console.error("Audio error:", audioElement.error);
    });

    // Update active station button style
    function updateActiveStation(index, mode) {
      document.querySelectorAll(".station").forEach(el => {
        el.classList.remove("announcement-active", "station-active");
      });
      const stationButton = document.querySelector(`.station[data-index="${index}"]`);
      if (stationButton) {
        if (mode === "announcement") {
          stationButton.classList.add("announcement-active");
        } else if (mode === "station") {
          stationButton.classList.add("station-active");
        }
      }
    }

    // Update play/pause button icon
    function updatePlayPauseIcon() {
      playPauseBtn.textContent = audioElement.paused ? "▶" : "⏸";
    }
    audioElement.addEventListener("play", updatePlayPauseIcon);
    audioElement.addEventListener("pause", updatePlayPauseIcon);

    // Generate inner arrow circle
    function generateArrows() {
      const arrowContainer = document.getElementById("arrowContainer");
      arrowContainer.innerHTML = "";
      const containerWidth = arrowContainer.offsetWidth;
      const containerHeight = arrowContainer.offsetHeight;
      const centerX = containerWidth / 2;
      const centerY = containerHeight / 2;
      const arrowRadius = 300;
      const numArrows = 50;
      for (let i = 0; i < numArrows; i++) {
        const angle = (2 * Math.PI * i) / numArrows;
        const x = centerX + arrowRadius * Math.cos(angle);
        const y = centerY + arrowRadius * Math.sin(angle);

        const arrow = document.createElement("div");
        arrow.classList.add("arrow");
        arrow.textContent = "➤";
        arrow.style.left = x + "px";
        arrow.style.top = y + "px";
        const angleDeg = (angle * 180) / Math.PI;
        const rotationDeg = (playDirection === 1) ? angleDeg + 90 : angleDeg - 90;
        arrow.style.transform = `translate(-50%, -50%) rotate(${rotationDeg}deg)`;
        arrowContainer.appendChild(arrow);
      }
    }

    function updateArrowAnimation() {
      const arrowContainer = document.getElementById("arrowContainer");
      arrowContainer.style.animationName =
        (playDirection === 1) ? "spinClockwise" : "spinCounterClockwise";
      generateArrows();
    }

    // Place stations on outer circle
    function placeStations() {
      const stationsContainer = document.getElementById("stations");
      stationsContainer.innerHTML = "";
      const containerWidth = stationsContainer.offsetWidth;
      const containerHeight = stationsContainer.offsetHeight;
      const centerX = containerWidth / 2;
      const centerY = containerHeight / 2;
      const stationRadius = 380;
      const totalStations = stations.length;

      for (let i = 0; i < totalStations; i++) {
        const angle = (2 * Math.PI * i) / totalStations - Math.PI / 2;
        const x = centerX + stationRadius * Math.cos(angle);
        const y = centerY + stationRadius * Math.sin(angle);

        const stationDiv = document.createElement("div");
        stationDiv.classList.add("station");
        stationDiv.textContent = stations[i].name;
        stationDiv.style.left = x + "px";
        stationDiv.style.top = y + "px";
        stationDiv.dataset.index = i;
        stationDiv.addEventListener("click", () => {
          playStation(i);
        });
        stationsContainer.appendChild(stationDiv);
      }
    }

    // Playback logic
    function playStation(index) {
      currentStationIndex = index;
      const station = stations[index];
      audioElement.onended = null;
      updateActiveStation(index, "");

      // If skip announcements is OFF, play announcement first
      if (!skipAnnouncementToggle.checked) {
        currentAudioType = "announcement";
        currentStationLabel.textContent = station.name + " (announcement)";
        audioElement.src = station.mp3Announcement + cacheBust;
        audioElement.volume = announcementMuted ? 0 : announcementVolume;
        audioElement.play().then(() => {
          updateActiveStation(index, "announcement");
          audioElement.onended = () => {
            playStationAudio(station);
          };
        }).catch(err => {
          console.error("Announcement playback failed:", err);
          playStationAudio(station);
        });
      } else {
        // Skip announcements
        playStationAudio(station);
      }
    }

    function playStationAudio(station) {
      currentAudioType = "station";
      currentStationLabel.textContent = station.name;
      audioElement.src = station.mp3Station + cacheBust;
      audioElement.volume = stationMuted ? 0 : stationVolume;
      audioElement.play().then(() => {
        updateActiveStation(currentStationIndex, "station");
        audioElement.onended = () => {
          nextStation();
        };
      }).catch(err => {
        console.error("Station playback failed:", err);
      });
    }

    function nextStation() {
      let nextIndex = currentStationIndex + playDirection;
      if (nextIndex >= stations.length) nextIndex = 0;
      if (nextIndex < 0) nextIndex = stations.length - 1;
      playStation(nextIndex);
    }

    // Play/pause button
    playPauseBtn.addEventListener("click", () => {
      if (audioElement.paused) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    });

    // Volume sliders
    document.getElementById("announcementVolumeSlider").addEventListener("input", e => {
      announcementVolume = parseFloat(e.target.value);
      if (currentAudioType === "announcement" && !announcementMuted) {
        audioElement.volume = announcementVolume;
      }
    });
    document.getElementById("stationVolumeSlider").addEventListener("input", e => {
      stationVolume = parseFloat(e.target.value);
      if (currentAudioType === "station" && !stationMuted) {
        audioElement.volume = stationVolume;
      }
    });

    // Mute toggles
    document.getElementById("announcementVolumeIcon").addEventListener("click", () => {
      announcementMuted = !announcementMuted;
      const icon = document.getElementById("announcementVolumeIcon");
      icon.textContent = announcementMuted ? "🔇" : "🔊";
      if (currentAudioType === "announcement") {
        audioElement.volume = announcementMuted ? 0 : announcementVolume;
      }
    });
    document.getElementById("stationVolumeIcon").addEventListener("click", () => {
      stationMuted = !stationMuted;
      const icon = document.getElementById("stationVolumeIcon");
      icon.textContent = stationMuted ? "🔇" : "🔊";
      if (currentAudioType === "station") {
        audioElement.volume = stationMuted ? 0 : stationVolume;
      }
    });

    // Direction toggle
    directionToggle.addEventListener("change", () => {
      if (directionToggle.checked) {
        playDirection = 1;
        directionText.textContent = "Clockwise";
      } else {
        playDirection = -1;
        directionText.textContent = "Counterclockwise";
      }
      updateArrowAnimation();
    });

    // On window load
    window.onload = function() {
      const savedLayout = localStorage.getItem("layout");
      if (savedLayout === "modern") {
        document.body.classList.add("modern-layout");
        layoutToggle.textContent = "Classic Layout";
        // Build grid layout
        document.getElementById("arrowContainer").innerHTML = "";
        const stationsContainer = document.getElementById("stations");
        stations.forEach((st, i) => {
          const div = document.createElement("div");
          div.classList.add("station");
          div.textContent = st.name;
          div.dataset.index = i;
          div.addEventListener("click", () => playStation(i));
          stationsContainer.appendChild(div);
        });
      } else {
        layoutToggle.textContent = "Switch Layout";
        generateArrows();
        updateArrowAnimation();
        placeStations();
      }
    };
