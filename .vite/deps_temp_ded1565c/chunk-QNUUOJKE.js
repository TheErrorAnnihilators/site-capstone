import {
  init_utils
} from "./chunk-A7GH57YU.js";
import {
  ListContext_default,
  debounce_default,
  init_ListContext,
  init_debounce,
  init_ownerDocument,
  init_ownerWindow,
  init_useEnhancedEffect,
  ownerDocument_default,
  ownerWindow_default,
  require_react_is,
  useEnhancedEffect_default
} from "./chunk-MEQEY4DW.js";
import {
  Typography_default,
  init_Typography
} from "./chunk-WA4QV6ZE.js";
import {
  getUnit,
  init_styles,
  toUnitless
} from "./chunk-Z6ZMAFTU.js";
import {
  init_useTheme,
  useTheme
} from "./chunk-IKX4ZUK6.js";
import {
  init_unsupportedProp,
  unsupportedProp_default
} from "./chunk-PVSVHVG6.js";
import {
  ButtonBase_default,
  init_ButtonBase,
  init_useEventCallback,
  useEventCallback_default
} from "./chunk-5P2T2AIT.js";
import {
  createSvgIcon,
  init_createSvgIcon
} from "./chunk-OSPGLML3.js";
import {
  init_useForkRef,
  useForkRef_default
} from "./chunk-T6QKIJVV.js";
import {
  capitalize_default,
  init_capitalize
} from "./chunk-UYMRIPGX.js";
import {
  init_base,
  useSlotProps
} from "./chunk-OGHFN7UP.js";
import {
  _objectWithoutPropertiesLoose,
  alpha,
  clsx_m_default,
  composeClasses,
  css,
  detectScrollType,
  generateUtilityClass,
  generateUtilityClasses,
  getNormalizedScrollLeft,
  init_clsx_m,
  init_esm,
  init_esm2,
  init_generateUtilityClass2 as init_generateUtilityClass,
  init_objectWithoutPropertiesLoose,
  init_styled,
  init_useThemeProps,
  keyframes,
  refType_default,
  require_jsx_runtime,
  require_prop_types,
  rootShouldForwardProp,
  styled_default,
  useThemeProps2 as useThemeProps
} from "./chunk-VYXFUWAP.js";
import {
  _extends,
  init_extends
} from "./chunk-HRRVIR7H.js";
import {
  require_react
} from "./chunk-TMS5W5UL.js";
import {
  __esm,
  __toESM
} from "./chunk-ROME4SDB.js";

// capstone-ui/node_modules/@mui/material/Divider/dividerClasses.js
function getDividerUtilityClass(slot) {
  return generateUtilityClass("MuiDivider", slot);
}
var dividerClasses, dividerClasses_default;
var init_dividerClasses = __esm({
  "capstone-ui/node_modules/@mui/material/Divider/dividerClasses.js"() {
    init_esm();
    init_generateUtilityClass();
    dividerClasses = generateUtilityClasses("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
    dividerClasses_default = dividerClasses;
  }
});

// capstone-ui/node_modules/@mui/material/Divider/Divider.js
var React, import_prop_types, import_jsx_runtime, _excluded, useUtilityClasses, DividerRoot, DividerWrapper, Divider, Divider_default;
var init_Divider = __esm({
  "capstone-ui/node_modules/@mui/material/Divider/Divider.js"() {
    "use client";
    init_objectWithoutPropertiesLoose();
    init_extends();
    React = __toESM(require_react());
    import_prop_types = __toESM(require_prop_types());
    init_clsx_m();
    init_base();
    init_esm2();
    init_styled();
    init_useThemeProps();
    init_dividerClasses();
    import_jsx_runtime = __toESM(require_jsx_runtime());
    _excluded = ["absolute", "children", "className", "component", "flexItem", "light", "orientation", "role", "textAlign", "variant"];
    useUtilityClasses = (ownerState) => {
      const {
        absolute,
        children,
        classes,
        flexItem,
        light,
        orientation,
        textAlign,
        variant
      } = ownerState;
      const slots = {
        root: ["root", absolute && "absolute", variant, light && "light", orientation === "vertical" && "vertical", flexItem && "flexItem", children && "withChildren", children && orientation === "vertical" && "withChildrenVertical", textAlign === "right" && orientation !== "vertical" && "textAlignRight", textAlign === "left" && orientation !== "vertical" && "textAlignLeft"],
        wrapper: ["wrapper", orientation === "vertical" && "wrapperVertical"]
      };
      return composeClasses(slots, getDividerUtilityClass, classes);
    };
    DividerRoot = styled_default("div", {
      name: "MuiDivider",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.root, ownerState.absolute && styles2.absolute, styles2[ownerState.variant], ownerState.light && styles2.light, ownerState.orientation === "vertical" && styles2.vertical, ownerState.flexItem && styles2.flexItem, ownerState.children && styles2.withChildren, ownerState.children && ownerState.orientation === "vertical" && styles2.withChildrenVertical, ownerState.textAlign === "right" && ownerState.orientation !== "vertical" && styles2.textAlignRight, ownerState.textAlign === "left" && ownerState.orientation !== "vertical" && styles2.textAlignLeft];
      }
    })(({
      theme,
      ownerState
    }) => _extends({
      margin: 0,
      // Reset browser default style.
      flexShrink: 0,
      borderWidth: 0,
      borderStyle: "solid",
      borderColor: (theme.vars || theme).palette.divider,
      borderBottomWidth: "thin"
    }, ownerState.absolute && {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%"
    }, ownerState.light && {
      borderColor: theme.vars ? `rgba(${theme.vars.palette.dividerChannel} / 0.08)` : alpha(theme.palette.divider, 0.08)
    }, ownerState.variant === "inset" && {
      marginLeft: 72
    }, ownerState.variant === "middle" && ownerState.orientation === "horizontal" && {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    }, ownerState.variant === "middle" && ownerState.orientation === "vertical" && {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }, ownerState.orientation === "vertical" && {
      height: "100%",
      borderBottomWidth: 0,
      borderRightWidth: "thin"
    }, ownerState.flexItem && {
      alignSelf: "stretch",
      height: "auto"
    }), ({
      ownerState
    }) => _extends({}, ownerState.children && {
      display: "flex",
      whiteSpace: "nowrap",
      textAlign: "center",
      border: 0,
      "&::before, &::after": {
        content: '""',
        alignSelf: "center"
      }
    }), ({
      theme,
      ownerState
    }) => _extends({}, ownerState.children && ownerState.orientation !== "vertical" && {
      "&::before, &::after": {
        width: "100%",
        borderTop: `thin solid ${(theme.vars || theme).palette.divider}`
      }
    }), ({
      theme,
      ownerState
    }) => _extends({}, ownerState.children && ownerState.orientation === "vertical" && {
      flexDirection: "column",
      "&::before, &::after": {
        height: "100%",
        borderLeft: `thin solid ${(theme.vars || theme).palette.divider}`
      }
    }), ({
      ownerState
    }) => _extends({}, ownerState.textAlign === "right" && ownerState.orientation !== "vertical" && {
      "&::before": {
        width: "90%"
      },
      "&::after": {
        width: "10%"
      }
    }, ownerState.textAlign === "left" && ownerState.orientation !== "vertical" && {
      "&::before": {
        width: "10%"
      },
      "&::after": {
        width: "90%"
      }
    }));
    DividerWrapper = styled_default("span", {
      name: "MuiDivider",
      slot: "Wrapper",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.wrapper, ownerState.orientation === "vertical" && styles2.wrapperVertical];
      }
    })(({
      theme,
      ownerState
    }) => _extends({
      display: "inline-block",
      paddingLeft: `calc(${theme.spacing(1)} * 1.2)`,
      paddingRight: `calc(${theme.spacing(1)} * 1.2)`
    }, ownerState.orientation === "vertical" && {
      paddingTop: `calc(${theme.spacing(1)} * 1.2)`,
      paddingBottom: `calc(${theme.spacing(1)} * 1.2)`
    }));
    Divider = React.forwardRef(function Divider2(inProps, ref) {
      const props = useThemeProps({
        props: inProps,
        name: "MuiDivider"
      });
      const {
        absolute = false,
        children,
        className,
        component = children ? "div" : "hr",
        flexItem = false,
        light = false,
        orientation = "horizontal",
        role = component !== "hr" ? "separator" : void 0,
        textAlign = "center",
        variant = "fullWidth"
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
      const ownerState = _extends({}, props, {
        absolute,
        component,
        flexItem,
        light,
        orientation,
        role,
        textAlign,
        variant
      });
      const classes = useUtilityClasses(ownerState);
      return (0, import_jsx_runtime.jsx)(DividerRoot, _extends({
        as: component,
        className: clsx_m_default(classes.root, className),
        role,
        ref,
        ownerState
      }, other, {
        children: children ? (0, import_jsx_runtime.jsx)(DividerWrapper, {
          className: classes.wrapper,
          ownerState,
          children
        }) : null
      }));
    });
    true ? Divider.propTypes = {
      // ----------------------------- Warning --------------------------------
      // | These PropTypes are generated from the TypeScript type definitions |
      // |     To update them edit the d.ts file and run "yarn proptypes"     |
      // ----------------------------------------------------------------------
      /**
       * Absolutely position the element.
       * @default false
       */
      absolute: import_prop_types.default.bool,
      /**
       * The content of the component.
       */
      children: import_prop_types.default.node,
      /**
       * Override or extend the styles applied to the component.
       */
      classes: import_prop_types.default.object,
      /**
       * @ignore
       */
      className: import_prop_types.default.string,
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: import_prop_types.default.elementType,
      /**
       * If `true`, a vertical divider will have the correct height when used in flex container.
       * (By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)
       * @default false
       */
      flexItem: import_prop_types.default.bool,
      /**
       * If `true`, the divider will have a lighter color.
       * @default false
       */
      light: import_prop_types.default.bool,
      /**
       * The component orientation.
       * @default 'horizontal'
       */
      orientation: import_prop_types.default.oneOf(["horizontal", "vertical"]),
      /**
       * @ignore
       */
      role: import_prop_types.default.string,
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
      /**
       * The text alignment.
       * @default 'center'
       */
      textAlign: import_prop_types.default.oneOf(["center", "left", "right"]),
      /**
       * The variant to use.
       * @default 'fullWidth'
       */
      variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["fullWidth", "inset", "middle"]), import_prop_types.default.string])
    } : void 0;
    Divider_default = Divider;
  }
});

// capstone-ui/node_modules/@mui/material/Divider/index.js
var init_Divider2 = __esm({
  "capstone-ui/node_modules/@mui/material/Divider/index.js"() {
    "use client";
    init_Divider();
    init_dividerClasses();
    init_dividerClasses();
  }
});

// capstone-ui/node_modules/@mui/material/ListItemIcon/listItemIconClasses.js
function getListItemIconUtilityClass(slot) {
  return generateUtilityClass("MuiListItemIcon", slot);
}
var listItemIconClasses, listItemIconClasses_default;
var init_listItemIconClasses = __esm({
  "capstone-ui/node_modules/@mui/material/ListItemIcon/listItemIconClasses.js"() {
    init_esm();
    init_generateUtilityClass();
    listItemIconClasses = generateUtilityClasses("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
    listItemIconClasses_default = listItemIconClasses;
  }
});

// capstone-ui/node_modules/@mui/material/ListItemIcon/ListItemIcon.js
var React2, import_prop_types2, import_jsx_runtime2, _excluded2, useUtilityClasses2, ListItemIconRoot, ListItemIcon, ListItemIcon_default;
var init_ListItemIcon = __esm({
  "capstone-ui/node_modules/@mui/material/ListItemIcon/ListItemIcon.js"() {
    "use client";
    init_objectWithoutPropertiesLoose();
    init_extends();
    React2 = __toESM(require_react());
    import_prop_types2 = __toESM(require_prop_types());
    init_clsx_m();
    init_base();
    init_styled();
    init_useThemeProps();
    init_listItemIconClasses();
    init_ListContext();
    import_jsx_runtime2 = __toESM(require_jsx_runtime());
    _excluded2 = ["className"];
    useUtilityClasses2 = (ownerState) => {
      const {
        alignItems,
        classes
      } = ownerState;
      const slots = {
        root: ["root", alignItems === "flex-start" && "alignItemsFlexStart"]
      };
      return composeClasses(slots, getListItemIconUtilityClass, classes);
    };
    ListItemIconRoot = styled_default("div", {
      name: "MuiListItemIcon",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.root, ownerState.alignItems === "flex-start" && styles2.alignItemsFlexStart];
      }
    })(({
      theme,
      ownerState
    }) => _extends({
      minWidth: 56,
      color: (theme.vars || theme).palette.action.active,
      flexShrink: 0,
      display: "inline-flex"
    }, ownerState.alignItems === "flex-start" && {
      marginTop: 8
    }));
    ListItemIcon = React2.forwardRef(function ListItemIcon2(inProps, ref) {
      const props = useThemeProps({
        props: inProps,
        name: "MuiListItemIcon"
      });
      const {
        className
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
      const context = React2.useContext(ListContext_default);
      const ownerState = _extends({}, props, {
        alignItems: context.alignItems
      });
      const classes = useUtilityClasses2(ownerState);
      return (0, import_jsx_runtime2.jsx)(ListItemIconRoot, _extends({
        className: clsx_m_default(classes.root, className),
        ownerState,
        ref
      }, other));
    });
    true ? ListItemIcon.propTypes = {
      // ----------------------------- Warning --------------------------------
      // | These PropTypes are generated from the TypeScript type definitions |
      // |     To update them edit the d.ts file and run "yarn proptypes"     |
      // ----------------------------------------------------------------------
      /**
       * The content of the component, normally `Icon`, `SvgIcon`,
       * or a `@mui/icons-material` SVG icon element.
       */
      children: import_prop_types2.default.node,
      /**
       * Override or extend the styles applied to the component.
       */
      classes: import_prop_types2.default.object,
      /**
       * @ignore
       */
      className: import_prop_types2.default.string,
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object, import_prop_types2.default.bool])), import_prop_types2.default.func, import_prop_types2.default.object])
    } : void 0;
    ListItemIcon_default = ListItemIcon;
  }
});

// capstone-ui/node_modules/@mui/material/ListItemIcon/index.js
var init_ListItemIcon2 = __esm({
  "capstone-ui/node_modules/@mui/material/ListItemIcon/index.js"() {
    "use client";
    init_ListItemIcon();
    init_listItemIconClasses();
    init_listItemIconClasses();
  }
});

// capstone-ui/node_modules/@mui/material/ListItemText/listItemTextClasses.js
function getListItemTextUtilityClass(slot) {
  return generateUtilityClass("MuiListItemText", slot);
}
var listItemTextClasses, listItemTextClasses_default;
var init_listItemTextClasses = __esm({
  "capstone-ui/node_modules/@mui/material/ListItemText/listItemTextClasses.js"() {
    init_esm();
    init_generateUtilityClass();
    listItemTextClasses = generateUtilityClasses("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
    listItemTextClasses_default = listItemTextClasses;
  }
});

// capstone-ui/node_modules/@mui/material/ListItemText/ListItemText.js
var React3, import_prop_types3, import_jsx_runtime3, import_jsx_runtime4, _excluded3, useUtilityClasses3, ListItemTextRoot, ListItemText, ListItemText_default;
var init_ListItemText = __esm({
  "capstone-ui/node_modules/@mui/material/ListItemText/ListItemText.js"() {
    "use client";
    init_objectWithoutPropertiesLoose();
    init_extends();
    React3 = __toESM(require_react());
    import_prop_types3 = __toESM(require_prop_types());
    init_clsx_m();
    init_base();
    init_Typography();
    init_ListContext();
    init_useThemeProps();
    init_styled();
    init_listItemTextClasses();
    import_jsx_runtime3 = __toESM(require_jsx_runtime());
    import_jsx_runtime4 = __toESM(require_jsx_runtime());
    _excluded3 = ["children", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"];
    useUtilityClasses3 = (ownerState) => {
      const {
        classes,
        inset,
        primary,
        secondary,
        dense
      } = ownerState;
      const slots = {
        root: ["root", inset && "inset", dense && "dense", primary && secondary && "multiline"],
        primary: ["primary"],
        secondary: ["secondary"]
      };
      return composeClasses(slots, getListItemTextUtilityClass, classes);
    };
    ListItemTextRoot = styled_default("div", {
      name: "MuiListItemText",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [{
          [`& .${listItemTextClasses_default.primary}`]: styles2.primary
        }, {
          [`& .${listItemTextClasses_default.secondary}`]: styles2.secondary
        }, styles2.root, ownerState.inset && styles2.inset, ownerState.primary && ownerState.secondary && styles2.multiline, ownerState.dense && styles2.dense];
      }
    })(({
      ownerState
    }) => _extends({
      flex: "1 1 auto",
      minWidth: 0,
      marginTop: 4,
      marginBottom: 4
    }, ownerState.primary && ownerState.secondary && {
      marginTop: 6,
      marginBottom: 6
    }, ownerState.inset && {
      paddingLeft: 56
    }));
    ListItemText = React3.forwardRef(function ListItemText2(inProps, ref) {
      const props = useThemeProps({
        props: inProps,
        name: "MuiListItemText"
      });
      const {
        children,
        className,
        disableTypography = false,
        inset = false,
        primary: primaryProp,
        primaryTypographyProps,
        secondary: secondaryProp,
        secondaryTypographyProps
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
      const {
        dense
      } = React3.useContext(ListContext_default);
      let primary = primaryProp != null ? primaryProp : children;
      let secondary = secondaryProp;
      const ownerState = _extends({}, props, {
        disableTypography,
        inset,
        primary: !!primary,
        secondary: !!secondary,
        dense
      });
      const classes = useUtilityClasses3(ownerState);
      if (primary != null && primary.type !== Typography_default && !disableTypography) {
        primary = (0, import_jsx_runtime3.jsx)(Typography_default, _extends({
          variant: dense ? "body2" : "body1",
          className: classes.primary,
          component: primaryTypographyProps != null && primaryTypographyProps.variant ? void 0 : "span",
          display: "block"
        }, primaryTypographyProps, {
          children: primary
        }));
      }
      if (secondary != null && secondary.type !== Typography_default && !disableTypography) {
        secondary = (0, import_jsx_runtime3.jsx)(Typography_default, _extends({
          variant: "body2",
          className: classes.secondary,
          color: "text.secondary",
          display: "block"
        }, secondaryTypographyProps, {
          children: secondary
        }));
      }
      return (0, import_jsx_runtime4.jsxs)(ListItemTextRoot, _extends({
        className: clsx_m_default(classes.root, className),
        ownerState,
        ref
      }, other, {
        children: [primary, secondary]
      }));
    });
    true ? ListItemText.propTypes = {
      // ----------------------------- Warning --------------------------------
      // | These PropTypes are generated from the TypeScript type definitions |
      // |     To update them edit the d.ts file and run "yarn proptypes"     |
      // ----------------------------------------------------------------------
      /**
       * Alias for the `primary` prop.
       */
      children: import_prop_types3.default.node,
      /**
       * Override or extend the styles applied to the component.
       */
      classes: import_prop_types3.default.object,
      /**
       * @ignore
       */
      className: import_prop_types3.default.string,
      /**
       * If `true`, the children won't be wrapped by a Typography component.
       * This can be useful to render an alternative Typography variant by wrapping
       * the `children` (or `primary`) text, and optional `secondary` text
       * with the Typography component.
       * @default false
       */
      disableTypography: import_prop_types3.default.bool,
      /**
       * If `true`, the children are indented.
       * This should be used if there is no left avatar or left icon.
       * @default false
       */
      inset: import_prop_types3.default.bool,
      /**
       * The main content element.
       */
      primary: import_prop_types3.default.node,
      /**
       * These props will be forwarded to the primary typography component
       * (as long as disableTypography is not `true`).
       */
      primaryTypographyProps: import_prop_types3.default.object,
      /**
       * The secondary content element.
       */
      secondary: import_prop_types3.default.node,
      /**
       * These props will be forwarded to the secondary typography component
       * (as long as disableTypography is not `true`).
       */
      secondaryTypographyProps: import_prop_types3.default.object,
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object, import_prop_types3.default.bool])), import_prop_types3.default.func, import_prop_types3.default.object])
    } : void 0;
    ListItemText_default = ListItemText;
  }
});

// capstone-ui/node_modules/@mui/material/ListItemText/index.js
var init_ListItemText2 = __esm({
  "capstone-ui/node_modules/@mui/material/ListItemText/index.js"() {
    "use client";
    init_ListItemText();
    init_listItemTextClasses();
    init_listItemTextClasses();
  }
});

// capstone-ui/node_modules/@mui/material/MenuItem/menuItemClasses.js
function getMenuItemUtilityClass(slot) {
  return generateUtilityClass("MuiMenuItem", slot);
}
var menuItemClasses, menuItemClasses_default;
var init_menuItemClasses = __esm({
  "capstone-ui/node_modules/@mui/material/MenuItem/menuItemClasses.js"() {
    init_esm();
    init_generateUtilityClass();
    menuItemClasses = generateUtilityClasses("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]);
    menuItemClasses_default = menuItemClasses;
  }
});

// capstone-ui/node_modules/@mui/material/MenuItem/MenuItem.js
var React4, import_prop_types4, import_jsx_runtime5, _excluded4, overridesResolver, useUtilityClasses4, MenuItemRoot, MenuItem, MenuItem_default;
var init_MenuItem = __esm({
  "capstone-ui/node_modules/@mui/material/MenuItem/MenuItem.js"() {
    "use client";
    init_objectWithoutPropertiesLoose();
    init_extends();
    React4 = __toESM(require_react());
    import_prop_types4 = __toESM(require_prop_types());
    init_clsx_m();
    init_base();
    init_esm2();
    init_styled();
    init_useThemeProps();
    init_ListContext();
    init_ButtonBase();
    init_useEnhancedEffect();
    init_useForkRef();
    init_Divider2();
    init_ListItemIcon2();
    init_ListItemText2();
    init_menuItemClasses();
    import_jsx_runtime5 = __toESM(require_jsx_runtime());
    _excluded4 = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"];
    overridesResolver = (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.root, ownerState.dense && styles2.dense, ownerState.divider && styles2.divider, !ownerState.disableGutters && styles2.gutters];
    };
    useUtilityClasses4 = (ownerState) => {
      const {
        disabled,
        dense,
        divider,
        disableGutters,
        selected,
        classes
      } = ownerState;
      const slots = {
        root: ["root", dense && "dense", disabled && "disabled", !disableGutters && "gutters", divider && "divider", selected && "selected"]
      };
      const composedClasses = composeClasses(slots, getMenuItemUtilityClass, classes);
      return _extends({}, classes, composedClasses);
    };
    MenuItemRoot = styled_default(ButtonBase_default, {
      shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
      name: "MuiMenuItem",
      slot: "Root",
      overridesResolver
    })(({
      theme,
      ownerState
    }) => _extends({}, theme.typography.body1, {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      position: "relative",
      textDecoration: "none",
      minHeight: 48,
      paddingTop: 6,
      paddingBottom: 6,
      boxSizing: "border-box",
      whiteSpace: "nowrap"
    }, !ownerState.disableGutters && {
      paddingLeft: 16,
      paddingRight: 16
    }, ownerState.divider && {
      borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
      backgroundClip: "padding-box"
    }, {
      "&:hover": {
        textDecoration: "none",
        backgroundColor: (theme.vars || theme).palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      },
      [`&.${menuItemClasses_default.selected}`]: {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
        [`&.${menuItemClasses_default.focusVisible}`]: {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
        }
      },
      [`&.${menuItemClasses_default.selected}:hover`]: {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
        }
      },
      [`&.${menuItemClasses_default.focusVisible}`]: {
        backgroundColor: (theme.vars || theme).palette.action.focus
      },
      [`&.${menuItemClasses_default.disabled}`]: {
        opacity: (theme.vars || theme).palette.action.disabledOpacity
      },
      [`& + .${dividerClasses_default.root}`]: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
      },
      [`& + .${dividerClasses_default.inset}`]: {
        marginLeft: 52
      },
      [`& .${listItemTextClasses_default.root}`]: {
        marginTop: 0,
        marginBottom: 0
      },
      [`& .${listItemTextClasses_default.inset}`]: {
        paddingLeft: 36
      },
      [`& .${listItemIconClasses_default.root}`]: {
        minWidth: 36
      }
    }, !ownerState.dense && {
      [theme.breakpoints.up("sm")]: {
        minHeight: "auto"
      }
    }, ownerState.dense && _extends({
      minHeight: 32,
      // https://m2.material.io/components/menus#specs > Dense
      paddingTop: 4,
      paddingBottom: 4
    }, theme.typography.body2, {
      [`& .${listItemIconClasses_default.root} svg`]: {
        fontSize: "1.25rem"
      }
    })));
    MenuItem = React4.forwardRef(function MenuItem2(inProps, ref) {
      const props = useThemeProps({
        props: inProps,
        name: "MuiMenuItem"
      });
      const {
        autoFocus = false,
        component = "li",
        dense = false,
        divider = false,
        disableGutters = false,
        focusVisibleClassName,
        role = "menuitem",
        tabIndex: tabIndexProp,
        className
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
      const context = React4.useContext(ListContext_default);
      const childContext = React4.useMemo(() => ({
        dense: dense || context.dense || false,
        disableGutters
      }), [context.dense, dense, disableGutters]);
      const menuItemRef = React4.useRef(null);
      useEnhancedEffect_default(() => {
        if (autoFocus) {
          if (menuItemRef.current) {
            menuItemRef.current.focus();
          } else if (true) {
            console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered.");
          }
        }
      }, [autoFocus]);
      const ownerState = _extends({}, props, {
        dense: childContext.dense,
        divider,
        disableGutters
      });
      const classes = useUtilityClasses4(props);
      const handleRef = useForkRef_default(menuItemRef, ref);
      let tabIndex;
      if (!props.disabled) {
        tabIndex = tabIndexProp !== void 0 ? tabIndexProp : -1;
      }
      return (0, import_jsx_runtime5.jsx)(ListContext_default.Provider, {
        value: childContext,
        children: (0, import_jsx_runtime5.jsx)(MenuItemRoot, _extends({
          ref: handleRef,
          role,
          tabIndex,
          component,
          focusVisibleClassName: clsx_m_default(classes.focusVisible, focusVisibleClassName),
          className: clsx_m_default(classes.root, className)
        }, other, {
          ownerState,
          classes
        }))
      });
    });
    true ? MenuItem.propTypes = {
      // ----------------------------- Warning --------------------------------
      // | These PropTypes are generated from the TypeScript type definitions |
      // |     To update them edit the d.ts file and run "yarn proptypes"     |
      // ----------------------------------------------------------------------
      /**
       * If `true`, the list item is focused during the first mount.
       * Focus will also be triggered if the value changes from false to true.
       * @default false
       */
      autoFocus: import_prop_types4.default.bool,
      /**
       * The content of the component.
       */
      children: import_prop_types4.default.node,
      /**
       * Override or extend the styles applied to the component.
       */
      classes: import_prop_types4.default.object,
      /**
       * @ignore
       */
      className: import_prop_types4.default.string,
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: import_prop_types4.default.elementType,
      /**
       * If `true`, compact vertical padding designed for keyboard and mouse input is used.
       * The prop defaults to the value inherited from the parent Menu component.
       * @default false
       */
      dense: import_prop_types4.default.bool,
      /**
       * @ignore
       */
      disabled: import_prop_types4.default.bool,
      /**
       * If `true`, the left and right padding is removed.
       * @default false
       */
      disableGutters: import_prop_types4.default.bool,
      /**
       * If `true`, a 1px light border is added to the bottom of the menu item.
       * @default false
       */
      divider: import_prop_types4.default.bool,
      /**
       * This prop can help identify which element has keyboard focus.
       * The class name will be applied when the element gains the focus through keyboard interaction.
       * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
       * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
       * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
       * if needed.
       */
      focusVisibleClassName: import_prop_types4.default.string,
      /**
       * @ignore
       */
      role: import_prop_types4.default.string,
      /**
       * If `true`, the component is selected.
       * @default false
       */
      selected: import_prop_types4.default.bool,
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types4.default.oneOfType([import_prop_types4.default.arrayOf(import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object, import_prop_types4.default.bool])), import_prop_types4.default.func, import_prop_types4.default.object]),
      /**
       * @default 0
       */
      tabIndex: import_prop_types4.default.number
    } : void 0;
    MenuItem_default = MenuItem;
  }
});

// capstone-ui/node_modules/@mui/material/MenuItem/index.js
var init_MenuItem2 = __esm({
  "capstone-ui/node_modules/@mui/material/MenuItem/index.js"() {
    "use client";
    init_MenuItem();
    init_menuItemClasses();
    init_menuItemClasses();
  }
});

// capstone-ui/node_modules/@mui/material/Skeleton/skeletonClasses.js
function getSkeletonUtilityClass(slot) {
  return generateUtilityClass("MuiSkeleton", slot);
}
var skeletonClasses, skeletonClasses_default;
var init_skeletonClasses = __esm({
  "capstone-ui/node_modules/@mui/material/Skeleton/skeletonClasses.js"() {
    init_esm();
    init_generateUtilityClass();
    skeletonClasses = generateUtilityClasses("MuiSkeleton", ["root", "text", "rectangular", "rounded", "circular", "pulse", "wave", "withChildren", "fitContent", "heightAuto"]);
    skeletonClasses_default = skeletonClasses;
  }
});

// capstone-ui/node_modules/@mui/material/Skeleton/Skeleton.js
var React5, import_prop_types5, import_jsx_runtime6, _excluded5, _, _t, _t2, _t3, _t4, useUtilityClasses5, pulseKeyframe, waveKeyframe, SkeletonRoot, Skeleton, Skeleton_default;
var init_Skeleton = __esm({
  "capstone-ui/node_modules/@mui/material/Skeleton/Skeleton.js"() {
    "use client";
    init_objectWithoutPropertiesLoose();
    init_extends();
    React5 = __toESM(require_react());
    init_clsx_m();
    import_prop_types5 = __toESM(require_prop_types());
    init_esm2();
    init_base();
    init_styles();
    init_styled();
    init_useThemeProps();
    init_skeletonClasses();
    import_jsx_runtime6 = __toESM(require_jsx_runtime());
    _excluded5 = ["animation", "className", "component", "height", "style", "variant", "width"];
    _ = (t) => t;
    useUtilityClasses5 = (ownerState) => {
      const {
        classes,
        variant,
        animation,
        hasChildren,
        width,
        height
      } = ownerState;
      const slots = {
        root: ["root", variant, animation, hasChildren && "withChildren", hasChildren && !width && "fitContent", hasChildren && !height && "heightAuto"]
      };
      return composeClasses(slots, getSkeletonUtilityClass, classes);
    };
    pulseKeyframe = keyframes(_t || (_t = _`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`));
    waveKeyframe = keyframes(_t2 || (_t2 = _`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`));
    SkeletonRoot = styled_default("span", {
      name: "MuiSkeleton",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.root, styles2[ownerState.variant], ownerState.animation !== false && styles2[ownerState.animation], ownerState.hasChildren && styles2.withChildren, ownerState.hasChildren && !ownerState.width && styles2.fitContent, ownerState.hasChildren && !ownerState.height && styles2.heightAuto];
      }
    })(({
      theme,
      ownerState
    }) => {
      const radiusUnit = getUnit(theme.shape.borderRadius) || "px";
      const radiusValue = toUnitless(theme.shape.borderRadius);
      return _extends({
        display: "block",
        // Create a "on paper" color with sufficient contrast retaining the color
        backgroundColor: theme.vars ? theme.vars.palette.Skeleton.bg : alpha(theme.palette.text.primary, theme.palette.mode === "light" ? 0.11 : 0.13),
        height: "1.2em"
      }, ownerState.variant === "text" && {
        marginTop: 0,
        marginBottom: 0,
        height: "auto",
        transformOrigin: "0 55%",
        transform: "scale(1, 0.60)",
        borderRadius: `${radiusValue}${radiusUnit}/${Math.round(radiusValue / 0.6 * 10) / 10}${radiusUnit}`,
        "&:empty:before": {
          content: '"\\00a0"'
        }
      }, ownerState.variant === "circular" && {
        borderRadius: "50%"
      }, ownerState.variant === "rounded" && {
        borderRadius: (theme.vars || theme).shape.borderRadius
      }, ownerState.hasChildren && {
        "& > *": {
          visibility: "hidden"
        }
      }, ownerState.hasChildren && !ownerState.width && {
        maxWidth: "fit-content"
      }, ownerState.hasChildren && !ownerState.height && {
        height: "auto"
      });
    }, ({
      ownerState
    }) => ownerState.animation === "pulse" && css(_t3 || (_t3 = _`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `), pulseKeyframe), ({
      ownerState,
      theme
    }) => ownerState.animation === "wave" && css(_t4 || (_t4 = _`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `), waveKeyframe, (theme.vars || theme).palette.action.hover));
    Skeleton = React5.forwardRef(function Skeleton2(inProps, ref) {
      const props = useThemeProps({
        props: inProps,
        name: "MuiSkeleton"
      });
      const {
        animation = "pulse",
        className,
        component = "span",
        height,
        style,
        variant = "text",
        width
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded5);
      const ownerState = _extends({}, props, {
        animation,
        component,
        variant,
        hasChildren: Boolean(other.children)
      });
      const classes = useUtilityClasses5(ownerState);
      return (0, import_jsx_runtime6.jsx)(SkeletonRoot, _extends({
        as: component,
        ref,
        className: clsx_m_default(classes.root, className),
        ownerState
      }, other, {
        style: _extends({
          width,
          height
        }, style)
      }));
    });
    true ? Skeleton.propTypes = {
      // ----------------------------- Warning --------------------------------
      // | These PropTypes are generated from the TypeScript type definitions |
      // |     To update them edit the d.ts file and run "yarn proptypes"     |
      // ----------------------------------------------------------------------
      /**
       * The animation.
       * If `false` the animation effect is disabled.
       * @default 'pulse'
       */
      animation: import_prop_types5.default.oneOf(["pulse", "wave", false]),
      /**
       * Optional children to infer width and height from.
       */
      children: import_prop_types5.default.node,
      /**
       * Override or extend the styles applied to the component.
       */
      classes: import_prop_types5.default.object,
      /**
       * @ignore
       */
      className: import_prop_types5.default.string,
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: import_prop_types5.default.elementType,
      /**
       * Height of the skeleton.
       * Useful when you don't want to adapt the skeleton to a text element but for instance a card.
       */
      height: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string]),
      /**
       * @ignore
       */
      style: import_prop_types5.default.object,
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
      /**
       * The type of content that will be rendered.
       * @default 'text'
       */
      variant: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["circular", "rectangular", "rounded", "text"]), import_prop_types5.default.string]),
      /**
       * Width of the skeleton.
       * Useful when the skeleton is inside an inline element with no width of its own.
       */
      width: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string])
    } : void 0;
    Skeleton_default = Skeleton;
  }
});

// capstone-ui/node_modules/@mui/material/Skeleton/index.js
var init_Skeleton2 = __esm({
  "capstone-ui/node_modules/@mui/material/Skeleton/index.js"() {
    "use client";
    init_Skeleton();
    init_skeletonClasses();
    init_skeletonClasses();
  }
});

// capstone-ui/node_modules/@mui/material/Tab/tabClasses.js
function getTabUtilityClass(slot) {
  return generateUtilityClass("MuiTab", slot);
}
var tabClasses, tabClasses_default;
var init_tabClasses = __esm({
  "capstone-ui/node_modules/@mui/material/Tab/tabClasses.js"() {
    init_esm();
    init_generateUtilityClass();
    tabClasses = generateUtilityClasses("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper"]);
    tabClasses_default = tabClasses;
  }
});

// capstone-ui/node_modules/@mui/material/Tab/Tab.js
var React6, import_prop_types6, import_jsx_runtime7, _excluded6, useUtilityClasses6, TabRoot, Tab, Tab_default;
var init_Tab = __esm({
  "capstone-ui/node_modules/@mui/material/Tab/Tab.js"() {
    "use client";
    init_objectWithoutPropertiesLoose();
    init_extends();
    React6 = __toESM(require_react());
    import_prop_types6 = __toESM(require_prop_types());
    init_clsx_m();
    init_base();
    init_ButtonBase();
    init_capitalize();
    init_useThemeProps();
    init_styled();
    init_unsupportedProp();
    init_tabClasses();
    import_jsx_runtime7 = __toESM(require_jsx_runtime());
    _excluded6 = ["className", "disabled", "disableFocusRipple", "fullWidth", "icon", "iconPosition", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"];
    useUtilityClasses6 = (ownerState) => {
      const {
        classes,
        textColor,
        fullWidth,
        wrapped,
        icon,
        label,
        selected,
        disabled
      } = ownerState;
      const slots = {
        root: ["root", icon && label && "labelIcon", `textColor${capitalize_default(textColor)}`, fullWidth && "fullWidth", wrapped && "wrapped", selected && "selected", disabled && "disabled"],
        iconWrapper: ["iconWrapper"]
      };
      return composeClasses(slots, getTabUtilityClass, classes);
    };
    TabRoot = styled_default(ButtonBase_default, {
      name: "MuiTab",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.root, ownerState.label && ownerState.icon && styles2.labelIcon, styles2[`textColor${capitalize_default(ownerState.textColor)}`], ownerState.fullWidth && styles2.fullWidth, ownerState.wrapped && styles2.wrapped];
      }
    })(({
      theme,
      ownerState
    }) => _extends({}, theme.typography.button, {
      maxWidth: 360,
      minWidth: 90,
      position: "relative",
      minHeight: 48,
      flexShrink: 0,
      padding: "12px 16px",
      overflow: "hidden",
      whiteSpace: "normal",
      textAlign: "center"
    }, ownerState.label && {
      flexDirection: ownerState.iconPosition === "top" || ownerState.iconPosition === "bottom" ? "column" : "row"
    }, {
      lineHeight: 1.25
    }, ownerState.icon && ownerState.label && {
      minHeight: 72,
      paddingTop: 9,
      paddingBottom: 9,
      [`& > .${tabClasses_default.iconWrapper}`]: _extends({}, ownerState.iconPosition === "top" && {
        marginBottom: 6
      }, ownerState.iconPosition === "bottom" && {
        marginTop: 6
      }, ownerState.iconPosition === "start" && {
        marginRight: theme.spacing(1)
      }, ownerState.iconPosition === "end" && {
        marginLeft: theme.spacing(1)
      })
    }, ownerState.textColor === "inherit" && {
      color: "inherit",
      opacity: 0.6,
      // same opacity as theme.palette.text.secondary
      [`&.${tabClasses_default.selected}`]: {
        opacity: 1
      },
      [`&.${tabClasses_default.disabled}`]: {
        opacity: (theme.vars || theme).palette.action.disabledOpacity
      }
    }, ownerState.textColor === "primary" && {
      color: (theme.vars || theme).palette.text.secondary,
      [`&.${tabClasses_default.selected}`]: {
        color: (theme.vars || theme).palette.primary.main
      },
      [`&.${tabClasses_default.disabled}`]: {
        color: (theme.vars || theme).palette.text.disabled
      }
    }, ownerState.textColor === "secondary" && {
      color: (theme.vars || theme).palette.text.secondary,
      [`&.${tabClasses_default.selected}`]: {
        color: (theme.vars || theme).palette.secondary.main
      },
      [`&.${tabClasses_default.disabled}`]: {
        color: (theme.vars || theme).palette.text.disabled
      }
    }, ownerState.fullWidth && {
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0,
      maxWidth: "none"
    }, ownerState.wrapped && {
      fontSize: theme.typography.pxToRem(12)
    }));
    Tab = React6.forwardRef(function Tab2(inProps, ref) {
      const props = useThemeProps({
        props: inProps,
        name: "MuiTab"
      });
      const {
        className,
        disabled = false,
        disableFocusRipple = false,
        // eslint-disable-next-line react/prop-types
        fullWidth,
        icon: iconProp,
        iconPosition = "top",
        // eslint-disable-next-line react/prop-types
        indicator,
        label,
        onChange,
        onClick,
        onFocus,
        // eslint-disable-next-line react/prop-types
        selected,
        // eslint-disable-next-line react/prop-types
        selectionFollowsFocus,
        // eslint-disable-next-line react/prop-types
        textColor = "inherit",
        value,
        wrapped = false
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded6);
      const ownerState = _extends({}, props, {
        disabled,
        disableFocusRipple,
        selected,
        icon: !!iconProp,
        iconPosition,
        label: !!label,
        fullWidth,
        textColor,
        wrapped
      });
      const classes = useUtilityClasses6(ownerState);
      const icon = iconProp && label && React6.isValidElement(iconProp) ? React6.cloneElement(iconProp, {
        className: clsx_m_default(classes.iconWrapper, iconProp.props.className)
      }) : iconProp;
      const handleClick = (event) => {
        if (!selected && onChange) {
          onChange(event, value);
        }
        if (onClick) {
          onClick(event);
        }
      };
      const handleFocus = (event) => {
        if (selectionFollowsFocus && !selected && onChange) {
          onChange(event, value);
        }
        if (onFocus) {
          onFocus(event);
        }
      };
      return (0, import_jsx_runtime7.jsxs)(TabRoot, _extends({
        focusRipple: !disableFocusRipple,
        className: clsx_m_default(classes.root, className),
        ref,
        role: "tab",
        "aria-selected": selected,
        disabled,
        onClick: handleClick,
        onFocus: handleFocus,
        ownerState,
        tabIndex: selected ? 0 : -1
      }, other, {
        children: [iconPosition === "top" || iconPosition === "start" ? (0, import_jsx_runtime7.jsxs)(React6.Fragment, {
          children: [icon, label]
        }) : (0, import_jsx_runtime7.jsxs)(React6.Fragment, {
          children: [label, icon]
        }), indicator]
      }));
    });
    true ? Tab.propTypes = {
      // ----------------------------- Warning --------------------------------
      // | These PropTypes are generated from the TypeScript type definitions |
      // |     To update them edit the d.ts file and run "yarn proptypes"     |
      // ----------------------------------------------------------------------
      /**
       * This prop isn't supported.
       * Use the `component` prop if you need to change the children structure.
       */
      children: unsupportedProp_default,
      /**
       * Override or extend the styles applied to the component.
       */
      classes: import_prop_types6.default.object,
      /**
       * @ignore
       */
      className: import_prop_types6.default.string,
      /**
       * If `true`, the component is disabled.
       * @default false
       */
      disabled: import_prop_types6.default.bool,
      /**
       * If `true`, the  keyboard focus ripple is disabled.
       * @default false
       */
      disableFocusRipple: import_prop_types6.default.bool,
      /**
       * If `true`, the ripple effect is disabled.
       *
       * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
       * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
       * @default false
       */
      disableRipple: import_prop_types6.default.bool,
      /**
       * The icon to display.
       */
      icon: import_prop_types6.default.oneOfType([import_prop_types6.default.element, import_prop_types6.default.string]),
      /**
       * The position of the icon relative to the label.
       * @default 'top'
       */
      iconPosition: import_prop_types6.default.oneOf(["bottom", "end", "start", "top"]),
      /**
       * The label element.
       */
      label: import_prop_types6.default.node,
      /**
       * @ignore
       */
      onChange: import_prop_types6.default.func,
      /**
       * @ignore
       */
      onClick: import_prop_types6.default.func,
      /**
       * @ignore
       */
      onFocus: import_prop_types6.default.func,
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types6.default.oneOfType([import_prop_types6.default.arrayOf(import_prop_types6.default.oneOfType([import_prop_types6.default.func, import_prop_types6.default.object, import_prop_types6.default.bool])), import_prop_types6.default.func, import_prop_types6.default.object]),
      /**
       * You can provide your own value. Otherwise, we fallback to the child position index.
       */
      value: import_prop_types6.default.any,
      /**
       * Tab labels appear in a single row.
       * They can use a second line if needed.
       * @default false
       */
      wrapped: import_prop_types6.default.bool
    } : void 0;
    Tab_default = Tab;
  }
});

// capstone-ui/node_modules/@mui/material/Tab/index.js
var init_Tab2 = __esm({
  "capstone-ui/node_modules/@mui/material/Tab/index.js"() {
    "use client";
    init_Tab();
    init_tabClasses();
    init_tabClasses();
  }
});

// capstone-ui/node_modules/@mui/material/Tabs/tabsClasses.js
function getTabsUtilityClass(slot) {
  return generateUtilityClass("MuiTabs", slot);
}
var tabsClasses, tabsClasses_default;
var init_tabsClasses = __esm({
  "capstone-ui/node_modules/@mui/material/Tabs/tabsClasses.js"() {
    init_esm();
    init_generateUtilityClass();
    tabsClasses = generateUtilityClasses("MuiTabs", ["root", "vertical", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]);
    tabsClasses_default = tabsClasses;
  }
});

// capstone-ui/node_modules/@mui/material/utils/scrollLeft.js
var init_scrollLeft = __esm({
  "capstone-ui/node_modules/@mui/material/utils/scrollLeft.js"() {
    init_esm();
  }
});

// capstone-ui/node_modules/@mui/material/internal/animate.js
function easeInOutSin(time) {
  return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
}
function animate(property, element, to, options = {}, cb = () => {
}) {
  const {
    ease = easeInOutSin,
    duration = 300
    // standard
  } = options;
  let start = null;
  const from = element[property];
  let cancelled = false;
  const cancel = () => {
    cancelled = true;
  };
  const step = (timestamp) => {
    if (cancelled) {
      cb(new Error("Animation cancelled"));
      return;
    }
    if (start === null) {
      start = timestamp;
    }
    const time = Math.min(1, (timestamp - start) / duration);
    element[property] = ease(time) * (to - from) + from;
    if (time >= 1) {
      requestAnimationFrame(() => {
        cb(null);
      });
      return;
    }
    requestAnimationFrame(step);
  };
  if (from === to) {
    cb(new Error("Element already at target position"));
    return cancel;
  }
  requestAnimationFrame(step);
  return cancel;
}
var init_animate = __esm({
  "capstone-ui/node_modules/@mui/material/internal/animate.js"() {
  }
});

// capstone-ui/node_modules/@mui/material/Tabs/ScrollbarSize.js
function ScrollbarSize(props) {
  const {
    onChange
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded7);
  const scrollbarHeight = React7.useRef();
  const nodeRef = React7.useRef(null);
  const setMeasurements = () => {
    scrollbarHeight.current = nodeRef.current.offsetHeight - nodeRef.current.clientHeight;
  };
  useEnhancedEffect_default(() => {
    const handleResize = debounce_default(() => {
      const prevHeight = scrollbarHeight.current;
      setMeasurements();
      if (prevHeight !== scrollbarHeight.current) {
        onChange(scrollbarHeight.current);
      }
    });
    const containerWindow = ownerWindow_default(nodeRef.current);
    containerWindow.addEventListener("resize", handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
    };
  }, [onChange]);
  React7.useEffect(() => {
    setMeasurements();
    onChange(scrollbarHeight.current);
  }, [onChange]);
  return (0, import_jsx_runtime8.jsx)("div", _extends({
    style: styles,
    ref: nodeRef
  }, other));
}
var React7, import_prop_types7, import_jsx_runtime8, _excluded7, styles;
var init_ScrollbarSize = __esm({
  "capstone-ui/node_modules/@mui/material/Tabs/ScrollbarSize.js"() {
    "use client";
    init_extends();
    init_objectWithoutPropertiesLoose();
    React7 = __toESM(require_react());
    import_prop_types7 = __toESM(require_prop_types());
    init_debounce();
    init_utils();
    import_jsx_runtime8 = __toESM(require_jsx_runtime());
    _excluded7 = ["onChange"];
    styles = {
      width: 99,
      height: 99,
      position: "absolute",
      top: -9999,
      overflow: "scroll"
    };
    true ? ScrollbarSize.propTypes = {
      onChange: import_prop_types7.default.func.isRequired
    } : void 0;
  }
});

// capstone-ui/node_modules/@mui/material/internal/svg-icons/KeyboardArrowLeft.js
var React8, import_jsx_runtime9, KeyboardArrowLeft_default;
var init_KeyboardArrowLeft = __esm({
  "capstone-ui/node_modules/@mui/material/internal/svg-icons/KeyboardArrowLeft.js"() {
    "use client";
    React8 = __toESM(require_react());
    init_createSvgIcon();
    import_jsx_runtime9 = __toESM(require_jsx_runtime());
    KeyboardArrowLeft_default = createSvgIcon((0, import_jsx_runtime9.jsx)("path", {
      d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
    }), "KeyboardArrowLeft");
  }
});

// capstone-ui/node_modules/@mui/material/internal/svg-icons/KeyboardArrowRight.js
var React9, import_jsx_runtime10, KeyboardArrowRight_default;
var init_KeyboardArrowRight = __esm({
  "capstone-ui/node_modules/@mui/material/internal/svg-icons/KeyboardArrowRight.js"() {
    "use client";
    React9 = __toESM(require_react());
    init_createSvgIcon();
    import_jsx_runtime10 = __toESM(require_jsx_runtime());
    KeyboardArrowRight_default = createSvgIcon((0, import_jsx_runtime10.jsx)("path", {
      d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
    }), "KeyboardArrowRight");
  }
});

// capstone-ui/node_modules/@mui/material/TabScrollButton/tabScrollButtonClasses.js
function getTabScrollButtonUtilityClass(slot) {
  return generateUtilityClass("MuiTabScrollButton", slot);
}
var tabScrollButtonClasses, tabScrollButtonClasses_default;
var init_tabScrollButtonClasses = __esm({
  "capstone-ui/node_modules/@mui/material/TabScrollButton/tabScrollButtonClasses.js"() {
    init_esm();
    init_generateUtilityClass();
    tabScrollButtonClasses = generateUtilityClasses("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]);
    tabScrollButtonClasses_default = tabScrollButtonClasses;
  }
});

// capstone-ui/node_modules/@mui/material/TabScrollButton/TabScrollButton.js
var React10, import_prop_types8, import_jsx_runtime11, _excluded8, useUtilityClasses7, TabScrollButtonRoot, TabScrollButton, TabScrollButton_default;
var init_TabScrollButton = __esm({
  "capstone-ui/node_modules/@mui/material/TabScrollButton/TabScrollButton.js"() {
    "use client";
    init_objectWithoutPropertiesLoose();
    init_extends();
    React10 = __toESM(require_react());
    import_prop_types8 = __toESM(require_prop_types());
    init_clsx_m();
    init_base();
    init_KeyboardArrowLeft();
    init_KeyboardArrowRight();
    init_ButtonBase();
    init_useTheme();
    init_useThemeProps();
    init_styled();
    init_tabScrollButtonClasses();
    import_jsx_runtime11 = __toESM(require_jsx_runtime());
    _excluded8 = ["className", "slots", "slotProps", "direction", "orientation", "disabled"];
    useUtilityClasses7 = (ownerState) => {
      const {
        classes,
        orientation,
        disabled
      } = ownerState;
      const slots = {
        root: ["root", orientation, disabled && "disabled"]
      };
      return composeClasses(slots, getTabScrollButtonUtilityClass, classes);
    };
    TabScrollButtonRoot = styled_default(ButtonBase_default, {
      name: "MuiTabScrollButton",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.root, ownerState.orientation && styles2[ownerState.orientation]];
      }
    })(({
      ownerState
    }) => _extends({
      width: 40,
      flexShrink: 0,
      opacity: 0.8,
      [`&.${tabScrollButtonClasses_default.disabled}`]: {
        opacity: 0
      }
    }, ownerState.orientation === "vertical" && {
      width: "100%",
      height: 40,
      "& svg": {
        transform: `rotate(${ownerState.isRtl ? -90 : 90}deg)`
      }
    }));
    TabScrollButton = React10.forwardRef(function TabScrollButton2(inProps, ref) {
      var _slots$StartScrollBut, _slots$EndScrollButto;
      const props = useThemeProps({
        props: inProps,
        name: "MuiTabScrollButton"
      });
      const {
        className,
        slots = {},
        slotProps = {},
        direction
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded8);
      const theme = useTheme();
      const isRtl = theme.direction === "rtl";
      const ownerState = _extends({
        isRtl
      }, props);
      const classes = useUtilityClasses7(ownerState);
      const StartButtonIcon = (_slots$StartScrollBut = slots.StartScrollButtonIcon) != null ? _slots$StartScrollBut : KeyboardArrowLeft_default;
      const EndButtonIcon = (_slots$EndScrollButto = slots.EndScrollButtonIcon) != null ? _slots$EndScrollButto : KeyboardArrowRight_default;
      const startButtonIconProps = useSlotProps({
        elementType: StartButtonIcon,
        externalSlotProps: slotProps.startScrollButtonIcon,
        additionalProps: {
          fontSize: "small"
        },
        ownerState
      });
      const endButtonIconProps = useSlotProps({
        elementType: EndButtonIcon,
        externalSlotProps: slotProps.endScrollButtonIcon,
        additionalProps: {
          fontSize: "small"
        },
        ownerState
      });
      return (0, import_jsx_runtime11.jsx)(TabScrollButtonRoot, _extends({
        component: "div",
        className: clsx_m_default(classes.root, className),
        ref,
        role: null,
        ownerState,
        tabIndex: null
      }, other, {
        children: direction === "left" ? (0, import_jsx_runtime11.jsx)(StartButtonIcon, _extends({}, startButtonIconProps)) : (0, import_jsx_runtime11.jsx)(EndButtonIcon, _extends({}, endButtonIconProps))
      }));
    });
    true ? TabScrollButton.propTypes = {
      // ----------------------------- Warning --------------------------------
      // | These PropTypes are generated from the TypeScript type definitions |
      // |     To update them edit the d.ts file and run "yarn proptypes"     |
      // ----------------------------------------------------------------------
      /**
       * The content of the component.
       */
      children: import_prop_types8.default.node,
      /**
       * Override or extend the styles applied to the component.
       */
      classes: import_prop_types8.default.object,
      /**
       * @ignore
       */
      className: import_prop_types8.default.string,
      /**
       * The direction the button should indicate.
       */
      direction: import_prop_types8.default.oneOf(["left", "right"]).isRequired,
      /**
       * If `true`, the component is disabled.
       * @default false
       */
      disabled: import_prop_types8.default.bool,
      /**
       * The component orientation (layout flow direction).
       */
      orientation: import_prop_types8.default.oneOf(["horizontal", "vertical"]).isRequired,
      /**
       * The extra props for the slot components.
       * You can override the existing props or add new ones.
       * @default {}
       */
      slotProps: import_prop_types8.default.shape({
        endScrollButtonIcon: import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object]),
        startScrollButtonIcon: import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object])
      }),
      /**
       * The components used for each slot inside.
       * @default {}
       */
      slots: import_prop_types8.default.shape({
        EndScrollButtonIcon: import_prop_types8.default.elementType,
        StartScrollButtonIcon: import_prop_types8.default.elementType
      }),
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types8.default.oneOfType([import_prop_types8.default.arrayOf(import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object, import_prop_types8.default.bool])), import_prop_types8.default.func, import_prop_types8.default.object])
    } : void 0;
    TabScrollButton_default = TabScrollButton;
  }
});

// capstone-ui/node_modules/@mui/material/TabScrollButton/index.js
var init_TabScrollButton2 = __esm({
  "capstone-ui/node_modules/@mui/material/TabScrollButton/index.js"() {
    "use client";
    init_TabScrollButton();
    init_tabScrollButtonClasses();
    init_tabScrollButtonClasses();
  }
});

// capstone-ui/node_modules/@mui/material/Tabs/Tabs.js
var React11, import_react_is, import_prop_types9, import_jsx_runtime12, import_jsx_runtime13, _excluded9, nextItem, previousItem, moveFocus, useUtilityClasses8, TabsRoot, TabsScroller, FlexContainer, TabsIndicator, TabsScrollbarSize, defaultIndicatorStyle, warnedOnceTabPresent, Tabs, Tabs_default;
var init_Tabs = __esm({
  "capstone-ui/node_modules/@mui/material/Tabs/Tabs.js"() {
    "use client";
    init_objectWithoutPropertiesLoose();
    init_extends();
    React11 = __toESM(require_react());
    import_react_is = __toESM(require_react_is());
    import_prop_types9 = __toESM(require_prop_types());
    init_clsx_m();
    init_esm();
    init_base();
    init_styled();
    init_useThemeProps();
    init_useTheme();
    init_debounce();
    init_scrollLeft();
    init_animate();
    init_ScrollbarSize();
    init_TabScrollButton2();
    init_useEventCallback();
    init_tabsClasses();
    init_ownerDocument();
    init_ownerWindow();
    import_jsx_runtime12 = __toESM(require_jsx_runtime());
    import_jsx_runtime13 = __toESM(require_jsx_runtime());
    _excluded9 = ["aria-label", "aria-labelledby", "action", "centered", "children", "className", "component", "allowScrollButtonsMobile", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "slots", "slotProps", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant", "visibleScrollbar"];
    nextItem = (list, item) => {
      if (list === item) {
        return list.firstChild;
      }
      if (item && item.nextElementSibling) {
        return item.nextElementSibling;
      }
      return list.firstChild;
    };
    previousItem = (list, item) => {
      if (list === item) {
        return list.lastChild;
      }
      if (item && item.previousElementSibling) {
        return item.previousElementSibling;
      }
      return list.lastChild;
    };
    moveFocus = (list, currentFocus, traversalFunction) => {
      let wrappedOnce = false;
      let nextFocus = traversalFunction(list, currentFocus);
      while (nextFocus) {
        if (nextFocus === list.firstChild) {
          if (wrappedOnce) {
            return;
          }
          wrappedOnce = true;
        }
        const nextFocusDisabled = nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";
        if (!nextFocus.hasAttribute("tabindex") || nextFocusDisabled) {
          nextFocus = traversalFunction(list, nextFocus);
        } else {
          nextFocus.focus();
          return;
        }
      }
    };
    useUtilityClasses8 = (ownerState) => {
      const {
        vertical,
        fixed,
        hideScrollbar,
        scrollableX,
        scrollableY,
        centered,
        scrollButtonsHideMobile,
        classes
      } = ownerState;
      const slots = {
        root: ["root", vertical && "vertical"],
        scroller: ["scroller", fixed && "fixed", hideScrollbar && "hideScrollbar", scrollableX && "scrollableX", scrollableY && "scrollableY"],
        flexContainer: ["flexContainer", vertical && "flexContainerVertical", centered && "centered"],
        indicator: ["indicator"],
        scrollButtons: ["scrollButtons", scrollButtonsHideMobile && "scrollButtonsHideMobile"],
        scrollableX: [scrollableX && "scrollableX"],
        hideScrollbar: [hideScrollbar && "hideScrollbar"]
      };
      return composeClasses(slots, getTabsUtilityClass, classes);
    };
    TabsRoot = styled_default("div", {
      name: "MuiTabs",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [{
          [`& .${tabsClasses_default.scrollButtons}`]: styles2.scrollButtons
        }, {
          [`& .${tabsClasses_default.scrollButtons}`]: ownerState.scrollButtonsHideMobile && styles2.scrollButtonsHideMobile
        }, styles2.root, ownerState.vertical && styles2.vertical];
      }
    })(({
      ownerState,
      theme
    }) => _extends({
      overflow: "hidden",
      minHeight: 48,
      // Add iOS momentum scrolling for iOS < 13.0
      WebkitOverflowScrolling: "touch",
      display: "flex"
    }, ownerState.vertical && {
      flexDirection: "column"
    }, ownerState.scrollButtonsHideMobile && {
      [`& .${tabsClasses_default.scrollButtons}`]: {
        [theme.breakpoints.down("sm")]: {
          display: "none"
        }
      }
    }));
    TabsScroller = styled_default("div", {
      name: "MuiTabs",
      slot: "Scroller",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.scroller, ownerState.fixed && styles2.fixed, ownerState.hideScrollbar && styles2.hideScrollbar, ownerState.scrollableX && styles2.scrollableX, ownerState.scrollableY && styles2.scrollableY];
      }
    })(({
      ownerState
    }) => _extends({
      position: "relative",
      display: "inline-block",
      flex: "1 1 auto",
      whiteSpace: "nowrap"
    }, ownerState.fixed && {
      overflowX: "hidden",
      width: "100%"
    }, ownerState.hideScrollbar && {
      // Hide dimensionless scrollbar on macOS
      scrollbarWidth: "none",
      // Firefox
      "&::-webkit-scrollbar": {
        display: "none"
        // Safari + Chrome
      }
    }, ownerState.scrollableX && {
      overflowX: "auto",
      overflowY: "hidden"
    }, ownerState.scrollableY && {
      overflowY: "auto",
      overflowX: "hidden"
    }));
    FlexContainer = styled_default("div", {
      name: "MuiTabs",
      slot: "FlexContainer",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.flexContainer, ownerState.vertical && styles2.flexContainerVertical, ownerState.centered && styles2.centered];
      }
    })(({
      ownerState
    }) => _extends({
      display: "flex"
    }, ownerState.vertical && {
      flexDirection: "column"
    }, ownerState.centered && {
      justifyContent: "center"
    }));
    TabsIndicator = styled_default("span", {
      name: "MuiTabs",
      slot: "Indicator",
      overridesResolver: (props, styles2) => styles2.indicator
    })(({
      ownerState,
      theme
    }) => _extends({
      position: "absolute",
      height: 2,
      bottom: 0,
      width: "100%",
      transition: theme.transitions.create()
    }, ownerState.indicatorColor === "primary" && {
      backgroundColor: (theme.vars || theme).palette.primary.main
    }, ownerState.indicatorColor === "secondary" && {
      backgroundColor: (theme.vars || theme).palette.secondary.main
    }, ownerState.vertical && {
      height: "100%",
      width: 2,
      right: 0
    }));
    TabsScrollbarSize = styled_default(ScrollbarSize, {
      name: "MuiTabs",
      slot: "ScrollbarSize"
    })({
      overflowX: "auto",
      overflowY: "hidden",
      // Hide dimensionless scrollbar on macOS
      scrollbarWidth: "none",
      // Firefox
      "&::-webkit-scrollbar": {
        display: "none"
        // Safari + Chrome
      }
    });
    defaultIndicatorStyle = {};
    warnedOnceTabPresent = false;
    Tabs = React11.forwardRef(function Tabs2(inProps, ref) {
      const props = useThemeProps({
        props: inProps,
        name: "MuiTabs"
      });
      const theme = useTheme();
      const isRtl = theme.direction === "rtl";
      const {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        action,
        centered = false,
        children: childrenProp,
        className,
        component = "div",
        allowScrollButtonsMobile = false,
        indicatorColor = "primary",
        onChange,
        orientation = "horizontal",
        ScrollButtonComponent = TabScrollButton_default,
        scrollButtons = "auto",
        selectionFollowsFocus,
        slots = {},
        slotProps = {},
        TabIndicatorProps = {},
        TabScrollButtonProps = {},
        textColor = "primary",
        value,
        variant = "standard",
        visibleScrollbar = false
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded9);
      const scrollable = variant === "scrollable";
      const vertical = orientation === "vertical";
      const scrollStart = vertical ? "scrollTop" : "scrollLeft";
      const start = vertical ? "top" : "left";
      const end = vertical ? "bottom" : "right";
      const clientSize = vertical ? "clientHeight" : "clientWidth";
      const size = vertical ? "height" : "width";
      const ownerState = _extends({}, props, {
        component,
        allowScrollButtonsMobile,
        indicatorColor,
        orientation,
        vertical,
        scrollButtons,
        textColor,
        variant,
        visibleScrollbar,
        fixed: !scrollable,
        hideScrollbar: scrollable && !visibleScrollbar,
        scrollableX: scrollable && !vertical,
        scrollableY: scrollable && vertical,
        centered: centered && !scrollable,
        scrollButtonsHideMobile: !allowScrollButtonsMobile
      });
      const classes = useUtilityClasses8(ownerState);
      const startScrollButtonIconProps = useSlotProps({
        elementType: slots.StartScrollButtonIcon,
        externalSlotProps: slotProps.startScrollButtonIcon,
        ownerState
      });
      const endScrollButtonIconProps = useSlotProps({
        elementType: slots.EndScrollButtonIcon,
        externalSlotProps: slotProps.endScrollButtonIcon,
        ownerState
      });
      if (true) {
        if (centered && scrollable) {
          console.error('MUI: You can not use the `centered={true}` and `variant="scrollable"` properties at the same time on a `Tabs` component.');
        }
      }
      const [mounted, setMounted] = React11.useState(false);
      const [indicatorStyle, setIndicatorStyle] = React11.useState(defaultIndicatorStyle);
      const [displayScroll, setDisplayScroll] = React11.useState({
        start: false,
        end: false
      });
      const [scrollerStyle, setScrollerStyle] = React11.useState({
        overflow: "hidden",
        scrollbarWidth: 0
      });
      const valueToIndex = /* @__PURE__ */ new Map();
      const tabsRef = React11.useRef(null);
      const tabListRef = React11.useRef(null);
      const getTabsMeta = () => {
        const tabsNode = tabsRef.current;
        let tabsMeta;
        if (tabsNode) {
          const rect = tabsNode.getBoundingClientRect();
          tabsMeta = {
            clientWidth: tabsNode.clientWidth,
            scrollLeft: tabsNode.scrollLeft,
            scrollTop: tabsNode.scrollTop,
            scrollLeftNormalized: getNormalizedScrollLeft(tabsNode, theme.direction),
            scrollWidth: tabsNode.scrollWidth,
            top: rect.top,
            bottom: rect.bottom,
            left: rect.left,
            right: rect.right
          };
        }
        let tabMeta;
        if (tabsNode && value !== false) {
          const children2 = tabListRef.current.children;
          if (children2.length > 0) {
            const tab = children2[valueToIndex.get(value)];
            if (true) {
              if (!tab) {
                console.error([`MUI: The \`value\` provided to the Tabs component is invalid.`, `None of the Tabs' children match with "${value}".`, valueToIndex.keys ? `You can provide one of the following values: ${Array.from(valueToIndex.keys()).join(", ")}.` : null].join("\n"));
              }
            }
            tabMeta = tab ? tab.getBoundingClientRect() : null;
            if (true) {
              if (!warnedOnceTabPresent && tabMeta && tabMeta.width === 0 && tabMeta.height === 0 && // if the whole Tabs component is hidden, don't warn
              tabsMeta.clientWidth !== 0) {
                tabsMeta = null;
                console.error(["MUI: The `value` provided to the Tabs component is invalid.", `The Tab with this \`value\` ("${value}") is not part of the document layout.`, "Make sure the tab item is present in the document or that it's not `display: none`."].join("\n"));
                warnedOnceTabPresent = true;
              }
            }
          }
        }
        return {
          tabsMeta,
          tabMeta
        };
      };
      const updateIndicatorState = useEventCallback_default(() => {
        const {
          tabsMeta,
          tabMeta
        } = getTabsMeta();
        let startValue = 0;
        let startIndicator;
        if (vertical) {
          startIndicator = "top";
          if (tabMeta && tabsMeta) {
            startValue = tabMeta.top - tabsMeta.top + tabsMeta.scrollTop;
          }
        } else {
          startIndicator = isRtl ? "right" : "left";
          if (tabMeta && tabsMeta) {
            const correction = isRtl ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth : tabsMeta.scrollLeft;
            startValue = (isRtl ? -1 : 1) * (tabMeta[startIndicator] - tabsMeta[startIndicator] + correction);
          }
        }
        const newIndicatorStyle = {
          [startIndicator]: startValue,
          // May be wrong until the font is loaded.
          [size]: tabMeta ? tabMeta[size] : 0
        };
        if (isNaN(indicatorStyle[startIndicator]) || isNaN(indicatorStyle[size])) {
          setIndicatorStyle(newIndicatorStyle);
        } else {
          const dStart = Math.abs(indicatorStyle[startIndicator] - newIndicatorStyle[startIndicator]);
          const dSize = Math.abs(indicatorStyle[size] - newIndicatorStyle[size]);
          if (dStart >= 1 || dSize >= 1) {
            setIndicatorStyle(newIndicatorStyle);
          }
        }
      });
      const scroll = (scrollValue, {
        animation = true
      } = {}) => {
        if (animation) {
          animate(scrollStart, tabsRef.current, scrollValue, {
            duration: theme.transitions.duration.standard
          });
        } else {
          tabsRef.current[scrollStart] = scrollValue;
        }
      };
      const moveTabsScroll = (delta) => {
        let scrollValue = tabsRef.current[scrollStart];
        if (vertical) {
          scrollValue += delta;
        } else {
          scrollValue += delta * (isRtl ? -1 : 1);
          scrollValue *= isRtl && detectScrollType() === "reverse" ? -1 : 1;
        }
        scroll(scrollValue);
      };
      const getScrollSize = () => {
        const containerSize = tabsRef.current[clientSize];
        let totalSize = 0;
        const children2 = Array.from(tabListRef.current.children);
        for (let i = 0; i < children2.length; i += 1) {
          const tab = children2[i];
          if (totalSize + tab[clientSize] > containerSize) {
            if (i === 0) {
              totalSize = containerSize;
            }
            break;
          }
          totalSize += tab[clientSize];
        }
        return totalSize;
      };
      const handleStartScrollClick = () => {
        moveTabsScroll(-1 * getScrollSize());
      };
      const handleEndScrollClick = () => {
        moveTabsScroll(getScrollSize());
      };
      const handleScrollbarSizeChange = React11.useCallback((scrollbarWidth) => {
        setScrollerStyle({
          overflow: null,
          scrollbarWidth
        });
      }, []);
      const getConditionalElements = () => {
        const conditionalElements2 = {};
        conditionalElements2.scrollbarSizeListener = scrollable ? (0, import_jsx_runtime12.jsx)(TabsScrollbarSize, {
          onChange: handleScrollbarSizeChange,
          className: clsx_m_default(classes.scrollableX, classes.hideScrollbar)
        }) : null;
        const scrollButtonsActive = displayScroll.start || displayScroll.end;
        const showScrollButtons = scrollable && (scrollButtons === "auto" && scrollButtonsActive || scrollButtons === true);
        conditionalElements2.scrollButtonStart = showScrollButtons ? (0, import_jsx_runtime12.jsx)(ScrollButtonComponent, _extends({
          slots: {
            StartScrollButtonIcon: slots.StartScrollButtonIcon
          },
          slotProps: {
            startScrollButtonIcon: startScrollButtonIconProps
          },
          orientation,
          direction: isRtl ? "right" : "left",
          onClick: handleStartScrollClick,
          disabled: !displayScroll.start
        }, TabScrollButtonProps, {
          className: clsx_m_default(classes.scrollButtons, TabScrollButtonProps.className)
        })) : null;
        conditionalElements2.scrollButtonEnd = showScrollButtons ? (0, import_jsx_runtime12.jsx)(ScrollButtonComponent, _extends({
          slots: {
            EndScrollButtonIcon: slots.EndScrollButtonIcon
          },
          slotProps: {
            endScrollButtonIcon: endScrollButtonIconProps
          },
          orientation,
          direction: isRtl ? "left" : "right",
          onClick: handleEndScrollClick,
          disabled: !displayScroll.end
        }, TabScrollButtonProps, {
          className: clsx_m_default(classes.scrollButtons, TabScrollButtonProps.className)
        })) : null;
        return conditionalElements2;
      };
      const scrollSelectedIntoView = useEventCallback_default((animation) => {
        const {
          tabsMeta,
          tabMeta
        } = getTabsMeta();
        if (!tabMeta || !tabsMeta) {
          return;
        }
        if (tabMeta[start] < tabsMeta[start]) {
          const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[start] - tabsMeta[start]);
          scroll(nextScrollStart, {
            animation
          });
        } else if (tabMeta[end] > tabsMeta[end]) {
          const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[end] - tabsMeta[end]);
          scroll(nextScrollStart, {
            animation
          });
        }
      });
      const updateScrollButtonState = useEventCallback_default(() => {
        if (scrollable && scrollButtons !== false) {
          const {
            scrollTop,
            scrollHeight,
            clientHeight,
            scrollWidth,
            clientWidth
          } = tabsRef.current;
          let showStartScroll;
          let showEndScroll;
          if (vertical) {
            showStartScroll = scrollTop > 1;
            showEndScroll = scrollTop < scrollHeight - clientHeight - 1;
          } else {
            const scrollLeft = getNormalizedScrollLeft(tabsRef.current, theme.direction);
            showStartScroll = isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
            showEndScroll = !isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
          }
          if (showStartScroll !== displayScroll.start || showEndScroll !== displayScroll.end) {
            setDisplayScroll({
              start: showStartScroll,
              end: showEndScroll
            });
          }
        }
      });
      React11.useEffect(() => {
        const handleResize = debounce_default(() => {
          if (tabsRef.current) {
            updateIndicatorState();
            updateScrollButtonState();
          }
        });
        const win = ownerWindow_default(tabsRef.current);
        win.addEventListener("resize", handleResize);
        let resizeObserver;
        if (typeof ResizeObserver !== "undefined") {
          resizeObserver = new ResizeObserver(handleResize);
          Array.from(tabListRef.current.children).forEach((child) => {
            resizeObserver.observe(child);
          });
        }
        return () => {
          handleResize.clear();
          win.removeEventListener("resize", handleResize);
          if (resizeObserver) {
            resizeObserver.disconnect();
          }
        };
      }, [updateIndicatorState, updateScrollButtonState]);
      const handleTabsScroll = React11.useMemo(() => debounce_default(() => {
        updateScrollButtonState();
      }), [updateScrollButtonState]);
      React11.useEffect(() => {
        return () => {
          handleTabsScroll.clear();
        };
      }, [handleTabsScroll]);
      React11.useEffect(() => {
        setMounted(true);
      }, []);
      React11.useEffect(() => {
        updateIndicatorState();
        updateScrollButtonState();
      });
      React11.useEffect(() => {
        scrollSelectedIntoView(defaultIndicatorStyle !== indicatorStyle);
      }, [scrollSelectedIntoView, indicatorStyle]);
      React11.useImperativeHandle(action, () => ({
        updateIndicator: updateIndicatorState,
        updateScrollButtons: updateScrollButtonState
      }), [updateIndicatorState, updateScrollButtonState]);
      const indicator = (0, import_jsx_runtime12.jsx)(TabsIndicator, _extends({}, TabIndicatorProps, {
        className: clsx_m_default(classes.indicator, TabIndicatorProps.className),
        ownerState,
        style: _extends({}, indicatorStyle, TabIndicatorProps.style)
      }));
      let childIndex = 0;
      const children = React11.Children.map(childrenProp, (child) => {
        if (!React11.isValidElement(child)) {
          return null;
        }
        if (true) {
          if ((0, import_react_is.isFragment)(child)) {
            console.error(["MUI: The Tabs component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
          }
        }
        const childValue = child.props.value === void 0 ? childIndex : child.props.value;
        valueToIndex.set(childValue, childIndex);
        const selected = childValue === value;
        childIndex += 1;
        return React11.cloneElement(child, _extends({
          fullWidth: variant === "fullWidth",
          indicator: selected && !mounted && indicator,
          selected,
          selectionFollowsFocus,
          onChange,
          textColor,
          value: childValue
        }, childIndex === 1 && value === false && !child.props.tabIndex ? {
          tabIndex: 0
        } : {}));
      });
      const handleKeyDown = (event) => {
        const list = tabListRef.current;
        const currentFocus = ownerDocument_default(list).activeElement;
        const role = currentFocus.getAttribute("role");
        if (role !== "tab") {
          return;
        }
        let previousItemKey = orientation === "horizontal" ? "ArrowLeft" : "ArrowUp";
        let nextItemKey = orientation === "horizontal" ? "ArrowRight" : "ArrowDown";
        if (orientation === "horizontal" && isRtl) {
          previousItemKey = "ArrowRight";
          nextItemKey = "ArrowLeft";
        }
        switch (event.key) {
          case previousItemKey:
            event.preventDefault();
            moveFocus(list, currentFocus, previousItem);
            break;
          case nextItemKey:
            event.preventDefault();
            moveFocus(list, currentFocus, nextItem);
            break;
          case "Home":
            event.preventDefault();
            moveFocus(list, null, nextItem);
            break;
          case "End":
            event.preventDefault();
            moveFocus(list, null, previousItem);
            break;
          default:
            break;
        }
      };
      const conditionalElements = getConditionalElements();
      return (0, import_jsx_runtime13.jsxs)(TabsRoot, _extends({
        className: clsx_m_default(classes.root, className),
        ownerState,
        ref,
        as: component
      }, other, {
        children: [conditionalElements.scrollButtonStart, conditionalElements.scrollbarSizeListener, (0, import_jsx_runtime13.jsxs)(TabsScroller, {
          className: classes.scroller,
          ownerState,
          style: {
            overflow: scrollerStyle.overflow,
            [vertical ? `margin${isRtl ? "Left" : "Right"}` : "marginBottom"]: visibleScrollbar ? void 0 : -scrollerStyle.scrollbarWidth
          },
          ref: tabsRef,
          onScroll: handleTabsScroll,
          children: [(0, import_jsx_runtime12.jsx)(FlexContainer, {
            "aria-label": ariaLabel,
            "aria-labelledby": ariaLabelledBy,
            "aria-orientation": orientation === "vertical" ? "vertical" : null,
            className: classes.flexContainer,
            ownerState,
            onKeyDown: handleKeyDown,
            ref: tabListRef,
            role: "tablist",
            children
          }), mounted && indicator]
        }), conditionalElements.scrollButtonEnd]
      }));
    });
    true ? Tabs.propTypes = {
      // ----------------------------- Warning --------------------------------
      // | These PropTypes are generated from the TypeScript type definitions |
      // |     To update them edit the d.ts file and run "yarn proptypes"     |
      // ----------------------------------------------------------------------
      /**
       * Callback fired when the component mounts.
       * This is useful when you want to trigger an action programmatically.
       * It supports two actions: `updateIndicator()` and `updateScrollButtons()`
       *
       * @param {object} actions This object contains all possible actions
       * that can be triggered programmatically.
       */
      action: refType_default,
      /**
       * If `true`, the scroll buttons aren't forced hidden on mobile.
       * By default the scroll buttons are hidden on mobile and takes precedence over `scrollButtons`.
       * @default false
       */
      allowScrollButtonsMobile: import_prop_types9.default.bool,
      /**
       * The label for the Tabs as a string.
       */
      "aria-label": import_prop_types9.default.string,
      /**
       * An id or list of ids separated by a space that label the Tabs.
       */
      "aria-labelledby": import_prop_types9.default.string,
      /**
       * If `true`, the tabs are centered.
       * This prop is intended for large views.
       * @default false
       */
      centered: import_prop_types9.default.bool,
      /**
       * The content of the component.
       */
      children: import_prop_types9.default.node,
      /**
       * Override or extend the styles applied to the component.
       */
      classes: import_prop_types9.default.object,
      /**
       * @ignore
       */
      className: import_prop_types9.default.string,
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: import_prop_types9.default.elementType,
      /**
       * Determines the color of the indicator.
       * @default 'primary'
       */
      indicatorColor: import_prop_types9.default.oneOfType([import_prop_types9.default.oneOf(["primary", "secondary"]), import_prop_types9.default.string]),
      /**
       * Callback fired when the value changes.
       *
       * @param {React.SyntheticEvent} event The event source of the callback. **Warning**: This is a generic event not a change event.
       * @param {any} value We default to the index of the child (number)
       */
      onChange: import_prop_types9.default.func,
      /**
       * The component orientation (layout flow direction).
       * @default 'horizontal'
       */
      orientation: import_prop_types9.default.oneOf(["horizontal", "vertical"]),
      /**
       * The component used to render the scroll buttons.
       * @default TabScrollButton
       */
      ScrollButtonComponent: import_prop_types9.default.elementType,
      /**
       * Determine behavior of scroll buttons when tabs are set to scroll:
       *
       * - `auto` will only present them when not all the items are visible.
       * - `true` will always present them.
       * - `false` will never present them.
       *
       * By default the scroll buttons are hidden on mobile.
       * This behavior can be disabled with `allowScrollButtonsMobile`.
       * @default 'auto'
       */
      scrollButtons: import_prop_types9.default.oneOf(["auto", false, true]),
      /**
       * If `true` the selected tab changes on focus. Otherwise it only
       * changes on activation.
       */
      selectionFollowsFocus: import_prop_types9.default.bool,
      /**
       * The extra props for the slot components.
       * You can override the existing props or add new ones.
       * @default {}
       */
      slotProps: import_prop_types9.default.shape({
        endScrollButtonIcon: import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object]),
        startScrollButtonIcon: import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object])
      }),
      /**
       * The components used for each slot inside.
       * @default {}
       */
      slots: import_prop_types9.default.shape({
        EndScrollButtonIcon: import_prop_types9.default.elementType,
        StartScrollButtonIcon: import_prop_types9.default.elementType
      }),
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types9.default.oneOfType([import_prop_types9.default.arrayOf(import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object, import_prop_types9.default.bool])), import_prop_types9.default.func, import_prop_types9.default.object]),
      /**
       * Props applied to the tab indicator element.
       * @default  {}
       */
      TabIndicatorProps: import_prop_types9.default.object,
      /**
       * Props applied to the [`TabScrollButton`](/material-ui/api/tab-scroll-button/) element.
       * @default {}
       */
      TabScrollButtonProps: import_prop_types9.default.object,
      /**
       * Determines the color of the `Tab`.
       * @default 'primary'
       */
      textColor: import_prop_types9.default.oneOf(["inherit", "primary", "secondary"]),
      /**
       * The value of the currently selected `Tab`.
       * If you don't want any selected `Tab`, you can set this prop to `false`.
       */
      value: import_prop_types9.default.any,
      /**
       * Determines additional display behavior of the tabs:
       *
       *  - `scrollable` will invoke scrolling properties and allow for horizontally
       *  scrolling (or swiping) of the tab bar.
       *  -`fullWidth` will make the tabs grow to use all the available space,
       *  which should be used for small views, like on mobile.
       *  - `standard` will render the default state.
       * @default 'standard'
       */
      variant: import_prop_types9.default.oneOf(["fullWidth", "scrollable", "standard"]),
      /**
       * If `true`, the scrollbar is visible. It can be useful when displaying
       * a long vertical list of tabs.
       * @default false
       */
      visibleScrollbar: import_prop_types9.default.bool
    } : void 0;
    Tabs_default = Tabs;
  }
});

// capstone-ui/node_modules/@mui/material/Tabs/index.js
var init_Tabs2 = __esm({
  "capstone-ui/node_modules/@mui/material/Tabs/index.js"() {
    "use client";
    init_Tabs();
    init_tabsClasses();
    init_tabsClasses();
  }
});

export {
  getDividerUtilityClass,
  dividerClasses_default,
  Divider_default,
  init_Divider2 as init_Divider,
  getListItemIconUtilityClass,
  listItemIconClasses_default,
  ListItemIcon_default,
  init_ListItemIcon2 as init_ListItemIcon,
  getListItemTextUtilityClass,
  listItemTextClasses_default,
  ListItemText_default,
  init_ListItemText2 as init_ListItemText,
  getMenuItemUtilityClass,
  menuItemClasses_default,
  MenuItem_default,
  init_MenuItem2 as init_MenuItem,
  getSkeletonUtilityClass,
  skeletonClasses_default,
  Skeleton_default,
  init_Skeleton2 as init_Skeleton,
  getTabUtilityClass,
  tabClasses_default,
  Tab_default,
  init_Tab2 as init_Tab,
  KeyboardArrowLeft_default,
  init_KeyboardArrowLeft,
  KeyboardArrowRight_default,
  init_KeyboardArrowRight,
  getTabScrollButtonUtilityClass,
  tabScrollButtonClasses_default,
  TabScrollButton_default,
  init_TabScrollButton2 as init_TabScrollButton,
  getTabsUtilityClass,
  tabsClasses_default,
  Tabs_default,
  init_Tabs2 as init_Tabs
};
//# sourceMappingURL=chunk-QNUUOJKE.js.map
