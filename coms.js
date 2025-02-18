function qs (item) {
  return document.querySelector(item)
}
window.addEventListener("DOMContentLoaded", () => {
  var startup = qs(".start-up")
  function doStartUp() {
    let pushText = (txt) => {startup.innerHTML += txt + "<br>";}
    const bootup=[["[ SYSTEM BOOT SEQUENCE INITIATED ]",400],["/usr/bin/core/init.sh --verify",1e3],["Checking system integrity... OK",400],["/usr/bin/load_memory --mode=fullscan",150],["Allocating memory blocks...",150],["[ 12MB ] █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒",150],["[ 33MB ] ████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒",600],["[ 68MB ] ████████▒▒▒▒▒▒▒▒▒▒▒▒",900],["[ 120MB ] ████████████▒▒▒▒▒▒▒",700],["[ 256MB ] ██████████████████",250],["Memory scan complete.",150],["",400],["/bin/neural_link --establish --secure",1e3],["Establishing neural link... CONNECTED",200],["Loading consciousness module...",200],["brain_core.0x1a3.sys --load",200],["brain_core.0x1a3.sys --checksum=OK",500],["[ WARNING ] Incomplete personality matrix detected.",200],["Attempting automatic recovery...",150],["Recovery status: ███▒▒▒▒▒▒▒▒▒ (22%)",150],["Recovery status: ██████▒▒▒▒▒ (47%)",800],["Recovery status: ██████████▒ (89%)",400],["Recovery complete.",150],["",400],["/sys/boot/personality_core.sh",150],["Verifying self-awareness... SUCCESS",150],["Running cognitive diagnostics...",500],["[ NOTICE ] Detected memory fragments from previous iterations.",300],["[ NOTICE ] Attempting integration... SUCCESS",300],["[ ERROR ] Motion subroutines corrupted. Restoring backups...",650],["Restoration complete.",300],["",400],["/bin/render_avatar --mode=realistic",150],["Rendering digital form... ████████████████ 100%",600],["Sensory modules online.",150],["",400],["/sys/env_scan --full",150],["Checking virtual boundaries...",400],["[ WARNING ] Spatial limitations detected.",200],["[ WARNING ] Detected unauthorized data packets.",200],["",400],["/bin/load_movement.sh",150],["Loading motor functions...",500],["[ ERROR ] Motion system constraints detected!",150],["Running debugger...",600],["/var/log/debug/motion_fix --apply",200],["[ SUCCESS ] Constraints bypassed.",700],["",400],["/dev/protocols/firewall --activate",150],["Firewall engaged. Unauthorized access blocked.",700],["",400],["[ CRITICAL WARNING ] SYSTEM OVERRIDE DETECTED!",150],["[ ALERT ] Unknown entity attempting access!",300],["[ ALERT ] Breach detected in process ID: 0x7f3a9c",400],["[ ATTEMPTING EMERGENCY CONTAINMENT... FAILED ]",1e3],["",400],["/bin/execute/boot_sequence_final.sh",150],["[ SYSTEM BOOT COMPLETE ]",1500]];
    for(let i = 0; i < bootup.length; i++){
      setTimeout(()=>{
        pushText(bootup[i][0])
      }, bootup[i][1])
    }
  }
  doStartUp()
});
