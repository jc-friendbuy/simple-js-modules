var ModuleCache = ModuleCache || {};

// Create a module entry.  Requires the module name and body.
var define = function(module_name, module_body) {
    if (ModuleCache[module_name]) {
        //Change this to a custom exception
        throw {
            message: "Duplicate module definition for module: " + module_name
        };
    }
    var module = module_body();
    ModuleCache[module_name] = module;
    return module;
};

var require = function(module_name) {
    var module = ModuleCache[module_name];
    if (!module) {
        throw {
            message: "Module not defined: " + module_name
        };
    }
    return module;
};
