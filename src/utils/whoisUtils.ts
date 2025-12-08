export function parseWhois(rawData: string) {
    const result: any = {};
    const lines = rawData.split(/\r?\n/);
  
    for (const line of lines) {
      const trimmed = line.trim();
      const sep = trimmed.indexOf(":");
  
      if (!trimmed || sep === -1 || sep > 60 || trimmed.startsWith(">>>"))
        continue;
  
      const key = trimmed.substring(0, sep).trim();
      const value = trimmed.substring(sep + 1).trim();
  
      if (result[key]) {
        if (Array.isArray(result[key])) result[key].push(value);
        else result[key] = [result[key], value];
      } else {
        result[key] = value;
      }
    }
  
    return result;
  }