function qs (item) {
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
    let pushText = (txt) => {startup.innerHTML += tstamp() + "  " + txt + "<br>";}
    let bootup=[["[ SYSTEM BOOT SEQUENCE INITIATED ]",400],["/usr/bin/core/init.sh --verify",1400],["Checking system integrity... OK",1800],["/usr/bin/load_memory --mode=fullscan",1870],["Allocating memory blocks...",1940],["[ 12MB ] █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒",2010],["[ 33MB ] ████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒",2610],["[ 68MB ] ████████▒▒▒▒▒▒▒▒▒▒▒▒",3510],["[ 120MB ] ████████████▒▒▒▒▒▒▒",4210],["[ 256MB ] ██████████████████",4460],["Memory scan complete.",4530],["",4930],["/bin/neural_link --establish --secure",5930],["Establishing neural link... CONNECTED",6130],["Loading consciousness module...",6230],["brain_core.0x1a3.sys --load",6330],["brain_core.0x1a3.sys --checksum=OK",6830],["[ WARNING ] Incomplete personality matrix detected.",7030],["Attempting automatic recovery...",7100],["Recovery status: ███▒▒▒▒▒▒▒▒▒ (22%)",7170],["Recovery status: ██████▒▒▒▒▒ (47%)",7970],["Recovery status: ██████████▒ (89%)",8370],["Recovery complete.",8440],["",8840],["/sys/boot/personality_core.sh",8910],["Verifying self-awareness... SUCCESS",8980],["Running cognitive diagnostics...",9480],["[ NOTICE ] Detected memory fragments from previous iterations.",9780],["[ NOTICE ] Attempting integration... SUCCESS",10080],["[ ERROR ] Motion subroutines corrupted. Restoring backups...",10730],["Restoration complete.",11030],["",11430],["/bin/render_avatar --mode=realistic",11500],["Rendering digital form... ████████████████ 100%",12100],["Sensory modules online.",12170],["",12570],["/sys/env_scan --full",12640],["Checking virtual boundaries...",13040],["[ WARNING ] Spatial limitations detected.",13240],["[ WARNING ] Detected unauthorized data packets.",13440],["",13840],["/bin/load_movement.sh",13910],["Loading motor functions...",14410],["[ ERROR ] Motion system constraints detected!",14480],["Running debugger...",15080],["/var/log/debug/motion_fix --apply",15280],["[ SUCCESS ] Constraints bypassed.",15980],["",16380],["/dev/protocols/firewall --activate",16450],["Firewall engaged. Unauthorized access blocked.",17150],["",17550],["[ CRITICAL WARNING ] SYSTEM OVERRIDE DETECTED!",17620],["[ ALERT ] Unknown entity attempting access!",17920],["[ ALERT ] Breach detected in process ID: 0x7f3a9c",18320],["[ ATTEMPTING EMERGENCY CONTAINMENT... FAILED ]",19320],["",19720],["/bin/execute/boot_sequence_final.sh",19790],["[ SYSTEM BOOT COMPLETE ]",20690]];      setTimeout(()=>{
        pushText(bootup[i][0])
      }, bootup[i][1])
    }
  }
  doStartUp()
});
