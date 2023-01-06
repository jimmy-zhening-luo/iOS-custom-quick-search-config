let Shortcut = class {
  
  name: string;
  allowedInputTypes: [Shortcuts.Type];
  inputFallback: Shortcuts.Input.Fallback;
  details: Shortcuts.Config.Details;
  procedure: [Shortcuts.Action];
  
  constructor (name: string, allowedInputTypes: [Shortcuts.Type] = Shortcuts.Type.Any, inputFallback: Shortcuts.Input.Fallback = Shortcuts.Input.Fallback.Continue, details: Shortcuts.Config.Details = new Shortcuts.Config.Details(), procedure: []) {
    this.name = name;
    this.allowedInputTypes = allowedInputTypes;
    this.fallback = fallback;
  }
  
  
  
  run() {
    
  }
  
}


let createShortcut = function ( input: ShortcutInput = new ShortcutInput(), allowedInputTypes: ShortcutInputAllowedTypes = new ShortcutInputAllowedTypes(), fallback: ShortcutInputFallback = new ShortcutInputFallback(Shortcuts.Input.Fallback.Nothing) ) {
  
  try {
    if ( !(input.hasAnyValue))
    {
      input = fallback.execute();
    }
    else if ( !(input.hasTypes(allowedInputTypes)))
    {
      
    }
  }
  
  
  
}