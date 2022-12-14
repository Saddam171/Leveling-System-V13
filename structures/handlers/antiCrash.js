module.exports = async (client) => {

  process.on('multipleResolves', (type, promise, reason) => { // Needed
    console.log('=== [antiCrash] | [multipleResolves] | [start] ==='.yellow.dim);
    // console.log(type, promise, reason);
    console.log('=== [antiCrash] | [multipleResolves] | [end] ==='.yellow.dim);
  });
  process.on('unhandledRejection', (reason, promise) => { // Needed
    console.log('=== [antiCrash] | [unhandledRejection] | [start] ==='.yellow.dim);
    console.log(reason);
    console.log('=== [antiCrash] | [unhandledRejection] | [end] ==='.yellow.dim);
  });
  process.on('rejectionHandled', (promise) => { // If You Want You Can Use
    console.log('=== [antiCrash] | [rejectionHandled] | [start] ==='.yellow.dim);
    console.log(promise);
    console.log('=== [antiCrash] | [rejectionHandled] | [end] ==='.yellow.dim);
  })
  process.on("uncaughtException", (err, origin) => { // Needed
    console.log('=== [antiCrash] | [uncaughtException] | [start] ==='.yellow.dim);
    console.log(err);
    console.log('=== [antiCrash] | [uncaughtException] | [end] ==='.yellow.dim);
  });
  process.on('uncaughtExceptionMonitor', (err, origin) => { // Needed
    console.log('=== [antiCrash] | [uncaughtExceptionMonitor] | [start] ==='.yellow.dim);
    console.log(err);
    console.log('=== [antiCrash] | [uncaughtExceptionMonitor] | [end] ==='.yellow.dim);
  });
  //process.on('warning', (warning) => { // If You Want You Can Use
  //  console.log('=== [antiCrash] | [warning] | [start] ==='.yellow.dim);
  //  console.log(warning);
  //  console.log('=== [antiCrash] | [warning] | [end] ==='.yellow.dim);
  //});
  // process.on('SIGINT', () => { // If You Want You Can Use
  //   console.log('=== [antiCrash] | [SIGINT] ==='.yellow.dim);
  // });
    
    client.logger(`Loaded AntiCrash`.brightGreen);
};

/**
 * @INFO
 * Bot Coded by Zedro#2742 | https://discord.gg/milanio
 * @INFO
 * Work for Milanio Development | https://discord.gg/milanio
 * @INFO
 * Please Mention Us Milanio Development, When Using This Code!
 * @INFO
 */