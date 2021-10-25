const maven = require('maven');

module.exports = async function prepare (pluginConfig, context) {
    const { logger, nextRelease } = context;
    const mvn = require('maven').create({
        profiles: ["release", "ossrh"]
    });

    logger.info(`Deploying to maven central`)

    await mvn.execute(['clean', 'deploy'], { 
        skipTests: true,
        revision: nextRelease.version
    });
}