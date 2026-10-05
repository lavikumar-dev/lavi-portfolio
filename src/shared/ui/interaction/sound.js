let audioContext = null;
let unlocked = false;
let listenersAttached = false;

function getContext() {
  if (typeof window === "undefined") return null;
  if (!audioContext) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return null;
    audioContext = new AudioContext();
  }
  return audioContext;
}

export function unlockUiAudio() {
  const context = getContext();
  if (!context) return;
  unlocked = true;
  if (context.state === "suspended") {
    context.resume().catch(() => {});
  }
}

export function attachUiAudioUnlock() {
  if (listenersAttached || typeof window === "undefined") return;
  listenersAttached = true;

  const unlock = () => {
    unlockUiAudio();
    window.removeEventListener("pointerdown", unlock);
    window.removeEventListener("keydown", unlock);
  };

  window.addEventListener("pointerdown", unlock, { passive: true });
  window.addEventListener("keydown", unlock, { passive: true });
}

export function playUiSound(kind = "hover") {
  if (!unlocked) return;

  const context = getContext();
  if (!context) return;

  const now = context.currentTime;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const filter = context.createBiquadFilter();

  const profiles = {
    hover: { frequency: 560, end: 680, duration: 0.045, volume: 0.012, type: "sine" },
    focus: { frequency: 680, end: 820, duration: 0.07, volume: 0.018, type: "sine" },
    click: { frequency: 420, end: 760, duration: 0.085, volume: 0.022, type: "triangle" },
    theme: { frequency: 260, end: 720, duration: 0.18, volume: 0.028, type: "sine" },
  };

  const profile = profiles[kind] ?? profiles.hover;

  oscillator.type = profile.type;
  oscillator.frequency.setValueAtTime(profile.frequency, now);
  oscillator.frequency.exponentialRampToValueAtTime(profile.end, now + profile.duration);

  filter.type = "lowpass";
  filter.frequency.setValueAtTime(2200, now);
  filter.Q.value = 0.7;

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(profile.volume, now + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + profile.duration);

  oscillator.connect(filter);
  filter.connect(gain);
  gain.connect(context.destination);

  oscillator.start(now);
  oscillator.stop(now + profile.duration + 0.02);
}

export function isUiAudioUnlocked() {
  return unlocked;
}
