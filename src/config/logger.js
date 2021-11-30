const winston = require("winston");

const consoleFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.colorize({ all: false }),
    winston.format.printf(({ level, message, label, timestamp }) => {
        return `${timestamp} [${level}] ${label ? label + ": " : ""} ${message}`;
    })
);

const logger = winston.createLogger({
    level: "info",
    defaultMeta: { service: "user-service" },
    transports: [
        new winston.transports.File({ filename: "error.log", level: "error" }),
        new winston.transports.File({ filename: "info.log", format: winston.format.combine(winston.format.timestamp(), winston.format.json()) }),
    ],
});

if (process.env.NODE_ENV !== "production") {
    logger.add(
        new winston.transports.Console({
            format: consoleFormat,
        })
    );
}

module.exports = logger;
