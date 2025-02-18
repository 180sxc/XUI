function qs(item) {
  return document.querySelector(item)
}
function tstamp() {
    const now = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[now.getMonth()];
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const milliseconds = String(now.getMilliseconds()).padStart(3, "0");

    return `${month} ${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
}
window.addEventListener("DOMContentLoaded", () => {
  var startup = qs(".start-up")
  function doStartUp() {
    let pushText = (txt, spd) => {
      let index = 0;

      const typeLetter = () => {
        if (index < txt.length) {
          startup.innerHTML += txt[index];
          index++;
          setTimeout(typeLetter, 0);
        }
      };

      startup.innerHTML += (txt == ""? "" : tstamp()) + "  ";
      typeLetter();
      startup.innerHTML += "<br>";
    };
    let index = 0;
    let bootup=[["[ SYSTEM BOOT SEQUENCE INITIATED ]",400],["/usr/bin/core/init.sh --verify",1400],["Checking system integrity... OK",1800],["/usr/bin/load_memory --mode=fullscan",1870],["Allocating memory blocks...",1940],["[ 12MB ] █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒",2010],["[ 33MB ] ████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒",2610],["[ 68MB ] ████████▒▒▒▒▒▒▒▒▒▒▒▒",3510],["[ 120MB ] ████████████▒▒▒▒▒▒▒",4210],["[ 256MB ] ██████████████████",4460],["Memory scan complete.",4530],["",4930],["/bin/neural_link --establish --secure",5930],["Establishing neural link... CONNECTED",6130],["Loading consciousness module...",6230],["brain_core.0x1a3.sys --load",6330],["brain_core.0x1a3.sys --checksum=OK",6830],["[ WARNING ] Incomplete personality matrix detected.",7030],["Attempting automatic recovery...",7100],["Recovery status: ███▒▒▒▒▒▒▒▒▒ (22%)",7170],["Recovery status: ██████▒▒▒▒▒ (47%)",7970],["Recovery status: ██████████▒ (89%)",8370],["Recovery complete.",8440],["",8840],["/sys/boot/personality_core.sh",8910],["Verifying self-awareness... SUCCESS",8980],["Running cognitive diagnostics...",9480],["[ NOTICE ] Detected memory fragments from previous iterations.",9780],["[ NOTICE ] Attempting integration... SUCCESS",10080],["[ ERROR ] Motion subroutines corrupted. Restoring backups...",10730],["Restoration complete.",11030],["",11430],["/bin/render_avatar --mode=realistic",11500],["Rendering digital form... ████████████████ 100%",12100],["Sensory modules online.",12170],["",12570],["/usr/bin/startup_check --verify_all --force",14370],["Performing full startup verification... WARNING: Some subsystems may not be properly initialized. Please proceed with caution.",14570],["",14970],["/bin/memory_test --full_scan --error_check",16470],["Running memory diagnostics... Detected a minor memory error in block 0x1A3. Attempting to correct...",16570],["Scanning connected USB devices... Detected unknown devices. Attempting to bypass unauthorized connections...",16670],["Shutting down non-critical services... Isolating core processes for secure shutdown.",16770],["Flushing system logs and clearing temporary caches... Logs successfully cleared.",16870],["Initiating secure erasure of all temporary data. This operation cannot be undone.",16970],["Creating system backup... Syncing backup with cloud storage... Operation complete.",17270],["Restoring all core services... Verifying integrity of services... All services are now fully operational.",17370],["/usr/bin/network_diag --connectivity_check --trace",17470],["",17870],["/sys/env_scan --full",17940],["Checking virtual boundaries...",18340],["[ WARNING ] Spatial limitations detected.",18540],["[ WARNING ] Detected unauthorized data packets.",18740],["",19140],["/bin/load_movement.sh",19210],["Loading motor functions...",19710],["[ ERROR ] Motion system constraints detected!",19780],["Running debugger...",20380],["/var/log/debug/motion_fix --apply",20580],["[ SUCCESS ] Constraints bypassed.",21280],["",21680],["/dev/protocols/firewall --activate",21750],["Firewall engaged. Unauthorized access blocked.",22450],["",22850],["[ CRITICAL WARNING ] SYSTEM OVERRIDE DETECTED!",22920],["[ ALERT ] Unknown entity attempting access!",23220],["[ ALERT ] Breach detected in process ID: 0x7f3a9c",23620],["[ ATTEMPTING EMERGENCY CONTAINMENT... FAILED ]",24620],["",25020],["/bin/execute/boot_sequence_final.sh",25090],["[ SYSTEM BOOT COMPLETE ]",25990]];
    bootup.forEach((line, i) => {
      setTimeout(() => {
        pushText(line[0], line[1]-20); // Add text to the terminal
        if (i === bootup.length - 1) { // Check if it's the last item
          startup.style.display = "none"; // Hide the startup div once the bootup is finished
        }
      }, line[1]-20);
    });
  }
  doStartUp()
}
);
