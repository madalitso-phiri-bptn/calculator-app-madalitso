import { inputAdornmentClasses } from "@mui/material";

export function tokenize(input: string) {
  var results = [];
  var tokenRegExp = /\s*([A-Za-z]+|[0-9]+|\S)\s*/g;

  var m;
  while ((m = tokenRegExp.exec(input)) !== null) results.push(m[1]);
  return results;
}

const input = ''