if (!navigator.getBattery) {
  alert("Tu navegador no soporta la Battery Status API");
  throw new Error("Battery Status API no soportada");
}
else{
    alert("Tu navegador soporta la Battery Status API");
}

navigator.getBattery().then(battery => {
  const levelEl = document.getElementById('level');
  const chargingEl = document.getElementById('charging');
  const dischargingTimeEl = document.getElementById('dischargingTime');

  // Actualiza la UI inicial
  function updateAll() {
    levelEl.textContent = Math.round(battery.level * 100);
    chargingEl.textContent = battery.charging ? 'Sí' : 'No';
    dischargingTimeEl.textContent = battery.dischargingTime === Infinity
      ? '∞'
      : battery.dischargingTime;
  }

  // Listeners para cambios
  battery.addEventListener('levelchange', updateAll);
  battery.addEventListener('chargingchange', updateAll);
  battery.addEventListener('dischargingtimechange', updateAll);

  // Primera llamada
  updateAll();
});
