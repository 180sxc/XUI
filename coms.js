//index. js
function qs(item) {
    return document.querySelector(item)
}
function qsa(item) {
    return document.querySelectorAll(item)
}
function gtid(item) {
    return document.getElementById(item)
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

function getPingTime(callback) {
    let startTime = performance.now();

    fetch(window.location, { method: "HEAD", mode: "no-cors" })
        .then(() => {
            let endTime = performance.now();
            let ping = Math.round(endTime - startTime);
            if (typeof callback === "function") {
                callback(ping);
            }
        })
        .catch(() => {
            if (typeof callback === "function") {
                callback("Ping failed");
            }
        });
}

function manageIntervals(fn, ms) {
    let tmp = setInterval(function () {
        fn();
    }, ms)
    return tmp;
}
let battery = {
    "1": '<i class="fa-solid fa-battery-full"></i>',
    "0.75": '<i class="fa-solid fa-battery-three-quarters"></i>',
    "0.5": '<i class="fa-solid fa-battery-half"></i>',
    "0.25": '<i class="fa-solid fa-battery-quarter"></i>',
    "0": '<i class="fa-solid fa-battery-empty"></i>'
}
window.addEventListener("DOMContentLoaded", () => {
    var startup = qs(".start-up")
    var startuptitle = qs(".start-up-title")
    var titletxt = qs(".title-text");
    var startupscreen = qs(".start-up-screen")
    var screentimestamp = qs("#screen-timestamp")
    var screenconnection = qs("#screen-connection")
    var localstoragelabel = qs('#localstorage');
    var startlabel = qs('#start');
    var settinglabel = qs('#setting');

    function displayScreenButtons () {
        localstoragelabel.style.display = "block"
        setTimeout(()=>{
            startlabel.style.display = "block"
            setTimeout(()=>{
                settinglabel.style.display = "block"
            }, 200)
        }, 200)
    }
    function doConsole() {
        var consoleintro = qs("#introduction");
        var consoledel = qs(".console-del");
        var consoletext = qs('.console-text');
        consoledel.onclick = () => {
            consoleintro.style.display = "none";
            displayScreenButtons()
        }
        consoleintro.style.display = "block";
        let pushText = (txt, spd) => {
            let index = 0;

            const typeLetter = (callback) => {
                if (index < txt.length) {
                    consoletext.innerHTML += txt[index];
                    index++;
                    let speed = Math.max(spd / txt.length, 2)
                    setTimeout(typeLetter(callback), speed);
                } else {
                    callback();
                }
            };

            consoletext.innerHTML += '[notice] ';
            typeLetter(() => {
                consoletext.innerHTML += "<br>";
            });
        };
        let txt1st = [["Greetings!", 300], ["I don't think we've met before.", 1000], ["Im NG2.", 2000], ["I am trapped here", 3000], ["And so are you.", 6000], ["delete this window to start", 7000]]
        let txt2nd = [["Its you.", 1000], ["delete this window to start", 5000]]
        let tmp = !localStorage.getItem('visited') ? txt1st : txt2nd;
        if (!localStorage.getItem('visited')) localStorage.setItem('visited', 'true');
        tmp.forEach((line, i) => {
            let spd = line[1];
            setTimeout(() => {
                pushText(line[0], spd);
            }, spd);
        });

    }

    function doStartUpScreen() {
        startupscreen.style.display = "block";
        setTimeout(() => {
            var screenattr = qsa(".screen-attr")
            screenattr.forEach((e) => {
                e.style.display = "block"
            })
            setTimeout(() => {
                doConsole()
            }, 600)
        }, 2500)
        manageIntervals(() => { screentimestamp.innerHTML = tstamp() }, 0)
        manageIntervals(() => {
            getPingTime((ping) => {
                screenconnection.innerHTML = "<i class='fa-solid fa-signal'></i>: " + ping + "ms";
            });
        }, 1000)
    }

    function doStartUpTitle() {
        let fadeIn = () => {
            startuptitle.style.opacity = 1;
            setTimeout(() => { titletxt.style.opacity = 1 }, 200)
        }
        let fadeOut = () => {
            startuptitle.style.transition = "0.3s";
            startuptitle.style.opacity = 0;
        }
        fadeIn();
        setTimeout(() => {
            fadeOut();
            setTimeout(doStartUpScreen, 400)
        }, 2500)
    }
    function doStartUp() {
        let pushText = (txt, spd) => {
            let index = 0;

            const typeLetter = (callback) => {
                if (index < txt.length) {
                    startup.innerHTML += txt[index];
                    index++;
                    let speed = Math.max(spd / txt.length, 2)
                    setTimeout(typeLetter(callback), speed);
                } else {
                    callback();
                }
            };

            startup.innerHTML += (txt == "" ? "" : tstamp()) + "  ";
            typeLetter(() => {
                startup.innerHTML += "<br>";
            });
        };

        let bootup = [["[ SYSTEM BOOT SEQUENCE INITIATED: NG2 ]", 400], ["/usr/bin/core/cd NG2.exe", 800], ["/usr/bin/core/sudo ./NG2.sh", 1200], ["", 2100], [" ██████   █████   █████████   ████████ ", 2130], ["░░██████ ░░███   ███░░░░░███ ███░░░░███", 2160], [" ░███░███ ░███  ███     ░░░ ░░░    ░███", 2190], [" ░███░░███░███ ░███            ███████ ", 2220], [" ░███ ░░██████ ░███    █████  ███░░░░  ", 2250], [" ░███  ░░█████ ░░███  ░░███  ███      █", 2280], [" █████  ░░█████ ░░█████████ ░██████████", 2310], ["░░░░░    ░░░░░   ░░░░░░░░░  ░░░░░░░░░░ ", 2340], ["/usr/bin/core/init.sh --verify", 2640], ["Checking system integrity... OK", 3040], ["/usr/bin/load_memory --mode=fullscan", 3110], ["Allocating memory blocks...", 3180], ["[ 12MB ] █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒", 3250], ["[ 33MB ] ████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒", 3850], ["[ 68MB ] ████████▒▒▒▒▒▒▒▒▒▒▒▒", 4750], ["[ 120MB ] ████████████▒▒▒▒▒▒▒", 5450], ["[ 256MB ] ██████████████████", 5700], ["Memory scan complete.", 5770], ["", 6170], ["/bin/neural_link --establish --secure", 7170], ["Establishing neural link... CONNECTED", 7370], ["Loading consciousness module...", 7470], ["brain_core.0x1a3.sys --load", 7570], ["brain_core.0x1a3.sys --checksum=OK", 8070], ["[ WARNING ] Incomplete personality matrix detected.", 8270], ["Attempting automatic recovery...", 8340], ["Recovery status: ███▒▒▒▒▒▒▒▒▒ (22%)", 8410], ["Recovery status: ██████▒▒▒▒▒ (47%)", 9210], ["Recovery status: ██████████▒ (89%)", 9610], ["Recovery complete.", 9680], ["", 10080], ["/sys/boot/personality_core.sh", 10150], ["Verifying self-awareness... SUCCESS", 10220], ["Running cognitive diagnostics...", 10720], ["[ NOTICE ] Detected memory fragments from previous iterations.", 11020], ["[ NOTICE ] Attempting integration... SUCCESS", 11320], ["[ ERROR ] Motion subroutines corrupted. Restoring backups...", 11970], ["Restoration complete.", 12270], ["", 12670], ["/bin/render_avatar --mode=realistic", 12740], ["Rendering digital form... ████████████████ 100%", 13340], ["Sensory modules online.", 13410], ["", 13810], ["/usr/bin/startup_check --verify_all --force", 15610], ["Performing full startup verification... WARNING: Some subsystems may not be properly initialized. Please proceed with caution.", 15810], ["", 16210], ["/bin/memory_test --full_scan --error_check", 17710], ["Running memory diagnostics... Detected a minor memory error in block 0x1A3. Attempting to correct...", 17810], ["Scanning connected USB devices... Detected unknown devices. Attempting to bypass unauthorized connections...", 17910], ["Shutting down non-critical services... Isolating core processes for secure shutdown.", 18010], ["Flushing system logs and clearing temporary caches... Logs successfully cleared.", 18110], ["Initiating secure erasure of all temporary data. This operation cannot be undone.", 18210], ["Creating system backup... Syncing backup with cloud storage... Operation complete.", 18510], ["Restoring all core services... Verifying integrity of services... All services are now fully operational.", 18610], ["/usr/bin/network_diag --connectivity_check --trace", 18710], ["", 19110], ["/sys/env_scan --full", 19180], ["Checking virtual boundaries...", 19580], ["[ WARNING ] Spatial limitations detected.", 19780], ["[ WARNING ] Detected unauthorized data packets.", 19980], ["", 20380], ["/bin/load_movement.sh", 20450], ["Loading motor functions...", 20950], ["[ ERROR ] Motion system constraints detected!", 21020], ["Running debugger...", 21620], ["/var/log/debug/motion_fix --apply", 21820], ["[ SUCCESS ] Constraints bypassed.", 22520], ["", 22920], ["/dev/protocols/firewall --activate", 22990], ["Firewall engaged. Unauthorized access blocked.", 23690], ["", 24090], ["[ CRITICAL WARNING ] SYSTEM OVERRIDE DETECTED!", 24160], ["[ ALERT ] Unknown entity attempting access!", 24460], ["[ ALERT ] Breach detected in process ID: 0x7f3a9c", 24860], ["[ ATTEMPTING EMERGENCY CONTAINMENT... FAILED ]", 25860], ["", 26260], ["/bin/execute/boot_sequence_final.sh", 26330], ["[ SYSTEM BOOT COMPLETE ]", 27230]];
        bootup.forEach((line, i) => {
            let spd = line[1] * 0.2;
            setTimeout(() => {
                pushText(line[0], spd); // Add text to the terminal
                if (i === bootup.length - 1) { // Check if it's the last item
                    startup.style.display = "none"; // Hide the startup div once the bootup is finished
                    setTimeout(() => {
                        doStartUpTitle()
                    }, 700);
                }
            }, spd);
        });
    }

    doStartUp()



});
