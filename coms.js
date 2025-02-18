function qs (item) {
  return document.querySelector(item)
}
window.addEventListener("DOMContentLoaded", () => {
  var startup = qs(".start-up")
  function doStartUp() {
    let pushText = (txt) => {startup.innerHTML += txt + "<br>";}
    const bootup=[["[ SYSTEM BOOT SEQUENCE INITIATED ]",400],["/usr/bin/core/init.sh --verify",1400],["Checking system integrity... OK",1800],["/usr/bin/load_memory --mode=fullscan",1950],["Allocating memory blocks...",2100],["[ 12MB ] █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒",2250],["[ 33MB ] ████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒",2850],["[ 68MB ] ████████▒▒▒▒▒▒▒▒▒▒▒▒",3750],["[ 120MB ] ████████████▒▒▒▒▒▒▒",4450],["[ 256MB ] ██████████████████",4700],["Memory scan complete.",4850],["",5250],["/bin/neural_link --establish --secure",6250],["Establishing neural link... CONNECTED",6450],["Loading consciousness module...",6650],["brain_core.0x1a3.sys --load",6850],["brain_core.0x1a3.sys --checksum=OK",7350],["[ WARNING ] Incomplete personality matrix detected.",7550],["Attempting automatic recovery...",7700],["Recovery status: ███▒▒▒▒▒▒▒▒▒ (22%)",7850],["Recovery status: ██████▒▒▒▒▒ (47%)",8650],["Recovery status: ██████████▒ (89%)",9050],["Recovery complete.",9200],["",9600],["/sys/boot/personality_core.sh",9750],["Verifying self-awareness... SUCCESS",9900],["Running cognitive diagnostics...",10400],["[ NOTICE ] Detected memory fragments from previous iterations.",10700],["[ NOTICE ] Attempting integration... SUCCESS",11e3],["[ ERROR ] Motion subroutines corrupted. Restoring backups...",11650],["Restoration complete.",11950],["",12350],["/bin/render_avatar --mode=realistic",12500],["Rendering digital form... ████████████████ 100%",13100],["Sensory modules online.",13250],["",13650],["/sys/env_scan --full",13800],["Checking virtual boundaries...",14200],["[ WARNING ] Spatial limitations detected.",14400],["[ WARNING ] Detected unauthorized data packets.",14600],["",15e3],["/bin/load_movement.sh",15150],["Loading motor functions...",15650],["[ ERROR ] Motion system constraints detected!",15800],["Running debugger...",16400],["/var/log/debug/motion_fix --apply",16600],["[ SUCCESS ] Constraints bypassed.",17300],["",17700],["/dev/protocols/firewall --activate",17850],["Firewall engaged. Unauthorized access blocked.",18550],["",18950],["[ CRITICAL WARNING ] SYSTEM OVERRIDE DETECTED!",19100],["[ ALERT ] Unknown entity attempting access!",19400],["[ ALERT ] Breach detected in process ID: 0x7f3a9c",19800],["[ ATTEMPTING EMERGENCY CONTAINMENT... FAILED ]",20800],["",21200],["/bin/execute/boot_sequence_final.sh",21350],["[ SYSTEM BOOT COMPLETE ]",22850]];    for(let i = 0; i < bootup.length; i++){
      setTimeout(()=>{
        pushText(bootup[i][0])
      }, bootup[i][1])
    }
  }
  doStartUp()
});
