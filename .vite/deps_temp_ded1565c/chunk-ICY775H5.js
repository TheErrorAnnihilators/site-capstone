import {
  require_react
} from "./chunk-TMS5W5UL.js";
import {
  __esm,
  __toESM
} from "./chunk-ROME4SDB.js";

// capstone-ui/node_modules/@mui/material/FormControl/FormControlContext.js
var React, FormControlContext, FormControlContext_default;
var init_FormControlContext = __esm({
  "capstone-ui/node_modules/@mui/material/FormControl/FormControlContext.js"() {
    React = __toESM(require_react());
    FormControlContext = React.createContext(void 0);
    if (true) {
      FormControlContext.displayName = "FormControlContext";
    }
    FormControlContext_default = FormControlContext;
  }
});

// capstone-ui/node_modules/@mui/material/FormControl/useFormControl.js
function useFormControl() {
  return React2.useContext(FormControlContext_default);
}
var React2;
var init_useFormControl = __esm({
  "capstone-ui/node_modules/@mui/material/FormControl/useFormControl.js"() {
    "use client";
    React2 = __toESM(require_react());
    init_FormControlContext();
  }
});

export {
  FormControlContext_default,
  init_FormControlContext,
  useFormControl,
  init_useFormControl
};
//# sourceMappingURL=chunk-ICY775H5.js.map
