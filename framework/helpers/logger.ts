import log4js from "log4js";

const baseLogsPath = './logs/';

log4js.configure({
  appenders: { 
    fullLog: { type: "file", filename: baseLogsPath + "full.log", flags: 'w' },

    debugI: { type: "file", filename: baseLogsPath + "debug.log" },
    debugOnly: {type: 'logLevelFilter', appender: 'debugI', level: 'debug'},

    info: { type: "file", filename: baseLogsPath + "info.log" },
    infoOnly: {type: 'logLevelFilter', appender: 'info', level: 'info'},

    warn: { type: "file", filename: baseLogsPath + "warn.log" },
    warnOnly: {type: 'logLevelFilter', appender: 'warn', level: 'warn'},

    error: { type: "file", filename: baseLogsPath + "error.log" },
    errorOnly: {type: 'logLevelFilter', appender: 'error', level: 'error'},

    fatal: { type: "file", filename: baseLogsPath + "fatal.log" },
    fatalOnly: {type: 'logLevelFilter', appender: 'fatal', level: 'fatal'},

    console: {type: "console"}
},
  categories: { 
    default: { 
      appenders: ["fullLog","console","debugOnly","infoOnly","warnOnly","errorOnly","fatalOnly"], 
      level: "trace" },
    asd: { 
      appenders: ["warnOnly","errorOnly","fatalOnly"], 
      level: "trace" },
        
 },
});

export const logger = log4js.getLogger();
