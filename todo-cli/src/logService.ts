import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const logsFile = path.join(__dirname, "../data/logs.json");

type LogEntry = {
  id: string;
  action: string;
  taskId: string | null;
  timestamp: string;
  details: string;
};

function readLogs(): LogEntry[] {
  if (!fs.existsSync(logsFile)) return [];
  return JSON.parse(fs.readFileSync(logsFile, "utf-8") || "[]");
}

function writeLogs(logs: LogEntry[]) {
  fs.writeFileSync(logsFile, JSON.stringify(logs, null, 2));
}

export function addLog(action: string, taskId: string | null, details: string) {
  const logs = readLogs();
  const newLog: LogEntry = {
    id: uuidv4(),
    action,
    taskId,
    timestamp: new Date().toISOString(),
    details,
  };
  logs.push(newLog);
  writeLogs(logs);
}

export function getLogs(): LogEntry[] {
  return readLogs();
}
