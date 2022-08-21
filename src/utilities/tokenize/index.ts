import { inputAdornmentClasses } from "@mui/material";

export function tokenize(input: string) {
  var m,
  tokens = [],
  rex = /(^|[(\/*+-])(-(?:\d*\.)?\d+)|[()\/*+-]|(?:\d*\.)?\d+/g

while ( m = rex.exec( input ) ) {
  if ( m[1] ) {
      tokens.push( m[1], m[2] );
  } else {
      tokens.push( m[0] );
  }
}
return tokens
}
