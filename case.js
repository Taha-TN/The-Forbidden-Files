(() => {
  const play = document.getElementById("playNarration");
  const pause = document.getElementById("pauseNarration");
  const stop = document.getElementById("stopNarration");
  const status = document.getElementById("narrationStatus");
  const rate = document.getElementById("speechRate");
  if (!play || !("speechSynthesis" in window)) {
    if (status) status.textContent = "NARRATION NOT SUPPORTED IN THIS BROWSER";
    if (play) play.disabled = true;
    return;
  }

  // Browser speech is a no-cost prototype. Replace with professionally generated,
  // emotionally directed narration audio when the final voice recordings are ready.
  const script = [
    "File zero zero one. The Flannan Isles. December, nineteen hundred.",
    "Far out in the Atlantic, west of the Scottish mainland, a small island stood against the weather. On its highest point, a lighthouse guarded the dangerous waters.",
    "Three men were there to keep its light burning. James Ducat. Thomas Marshall. Donald McArthur.",
    "On the twenty-sixth of December, the lighthouse tender Hesperus arrived. No one came to meet it. A rocket was fired. There was no answer.",
    "Relief keeper Joseph Moore climbed to the station. The lighthouse was empty. The lamps were ready. The machinery was clean. The kitchen was tidy. But the three keepers were gone.",
    "The records point toward the afternoon of the fifteenth of December. At the west landing, railings had been torn away. Heavy stone had been moved. Two sets of outdoor clothing were missing.",
    "The official investigation proposed a terrible possibility. The men may have gone down to the landing to secure equipment or inspect the damage. A powerful wave may have swept them into the sea.",
    "No bodies were recovered. No witness saw what happened. The famous dramatic logbook quotations repeated in later stories are not authenticated by the surviving archival record.",
    "The most likely explanation is an accident at the sea battered landing. But the exact final moments of James Ducat, Thomas Marshall and Donald McArthur remain unknown.",
    "Three men went out to tend a light. Only the light was found again. End of file."
  ];
  let index = 0;
  let active = false;

  function speakFromCurrent() {
    if (index >= script.length) {
      active = false; status.textContent = "NARRATION COMPLETE";
      play.textContent = "↻"; play.setAttribute("aria-label", "Replay narration");
      return;
    }
    const utterance = new SpeechSynthesisUtterance(script[index]);
    utterance.rate = Number(rate.value);
    utterance.pitch = 0.88;
    utterance.volume = 1;
    const voices = speechSynthesis.getVoices();
    const preferred = voices.find(v => /^en-GB/i.test(v.lang)) || voices.find(v => /^en/i.test(v.lang));
    if (preferred) utterance.voice = preferred;
    utterance.onstart = () => { active = true; status.textContent = `NARRATING · CHAPTER ${String(index + 1).padStart(2,"0")} / ${script.length}`; };
    utterance.onend = () => { index++; if (active) speakFromCurrent(); };
    utterance.onerror = () => { active = false; status.textContent = "NARRATION INTERRUPTED"; };
    speechSynthesis.speak(utterance);
  }

  play.addEventListener("click", () => {
    if (index >= script.length) index = 0;
    if (speechSynthesis.paused) { speechSynthesis.resume(); active = true; status.textContent = "RESUMED"; return; }
    if (speechSynthesis.speaking) return;
    active = true; speakFromCurrent(); play.textContent = "▶";
  });
  pause.addEventListener("click", () => {
    if (speechSynthesis.speaking && !speechSynthesis.paused) { speechSynthesis.pause(); active = true; status.textContent = "PAUSED"; }
  });
  stop.addEventListener("click", () => {
    speechSynthesis.cancel(); active = false; index = 0; status.textContent = "READY TO LISTEN"; play.textContent = "▶";
  });
  rate.addEventListener("change", () => {
    if (speechSynthesis.speaking) { speechSynthesis.cancel(); active = false; status.textContent = "PACE UPDATED — PRESS PLAY"; }
  });

  const sections = [...document.querySelectorAll(".story-section, .verdict-section")];
  const sideLinks = [...document.querySelectorAll(".case-sidebar a")];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sideLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      }
    });
  }, {rootMargin:"-25% 0px -65% 0px"});
  sections.forEach(section => observer.observe(section));
})();