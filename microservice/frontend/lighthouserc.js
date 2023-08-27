module.exports = {
    ci: {
        collect: {
            startServerCommand: "NODE_ENV=production BUILD_ENV=production node build/index.js",
            url: ["http://192.168.0.5"],
            startServerReadyPattern: "Application server mounted on",
            settings: {
                emulatedFormFactor: "mobile",
                chromeFlags: "--no-sandbox",
            },
            numberOfRuns: 2
        },
        assert: {
            // assert options here
            preset: "lighthouse:recommended",
        },
        upload: {
            // upload options here
            target: "temporary-public-storage",
        },
        server: {
            // server options here
        },
        wizard: {
            // wizard options here
        },
    },
}
