export function checkSafe(code) {
    const dangerousPatterns = [
        // Dynamic imports
        /\bimport\s*\(/,
        // Access to process and global
        /\bprocess\b/,
        /\bglobal\b/,
        // Module manipulation
        /\bmodule\b/,
        /\bexports\b/,
        // Require usage
        /\brequire\s*\(/,
        // Function constructors
        /\bFunction\s*\(/,
        /\beval\s*\(/,
        // Access to __dirname and __filename
        /\b__dirname\b/,
        /\b__filename\b/,

        // fetch
        /\bfetch\s*\(/,
        // XMLHttpRequest
        /\bXMLHttpRequest\b/,
        // Websockets
        /\bWebSocket\b/,
    ];

    for (const pattern of dangerousPatterns) {
        if (pattern.test(code)) {
            return false;
        }
    }
    return true;
}

// generated by o1
// Basic check for malicious code like dynamic imports, code exec, disk access, internet access, etc.
// Will not catch all, and can be bypassed by obfuscation.