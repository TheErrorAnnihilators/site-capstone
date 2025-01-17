import {
  init_useTheme,
  useTheme
} from "./chunk-IKX4ZUK6.js";
import {
  Transition_default,
  init_esm as init_esm2,
  init_useForkRef,
  useForkRef_default
} from "./chunk-T6QKIJVV.js";
import {
  Modal_default,
  init_Modal,
  init_base,
  init_utils,
  isHostComponent,
  modalClasses_default,
  resolveComponentProps
} from "./chunk-OGHFN7UP.js";
import {
  HTMLElementType,
  _objectWithoutPropertiesLoose,
  clsx_m_default,
  composeClasses,
  elementAcceptingRef_default,
  generateUtilityClass,
  generateUtilityClasses,
  init_clsx_m,
  init_esm,
  init_generateUtilityClass2 as init_generateUtilityClass,
  init_objectWithoutPropertiesLoose,
  init_styled,
  init_useThemeProps,
  require_jsx_runtime,
  require_prop_types,
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

// capstone-ui/node_modules/@mui/material/transitions/utils.js
function getTransitionProps(props, options) {
  var _style$transitionDura, _style$transitionTimi;
  const {
    timeout,
    easing,
    style = {}
  } = props;
  return {
    duration: (_style$transitionDura = style.transitionDuration) != null ? _style$transitionDura : typeof timeout === "number" ? timeout : timeout[options.mode] || 0,
    easing: (_style$transitionTimi = style.transitionTimingFunction) != null ? _style$transitionTimi : typeof easing === "object" ? easing[options.mode] : easing,
    delay: style.transitionDelay
  };
}
var reflow;
var init_utils2 = __esm({
  "capstone-ui/node_modules/@mui/material/transitions/utils.js"() {
    reflow = (node) => node.scrollTop;
  }
});

// capstone-ui/node_modules/@mui/material/Fade/Fade.js
var React, import_prop_types, import_jsx_runtime, _excluded, styles, Fade, Fade_default;
var init_Fade = __esm({
  "capstone-ui/node_modules/@mui/material/Fade/Fade.js"() {
    "use client";
    init_extends();
    init_objectWithoutPropertiesLoose();
    React = __toESM(require_react());
    import_prop_types = __toESM(require_prop_types());
    init_esm2();
    init_esm();
    init_useTheme();
    init_utils2();
    init_useForkRef();
    import_jsx_runtime = __toESM(require_jsx_runtime());
    _excluded = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
    styles = {
      entering: {
        opacity: 1
      },
      entered: {
        opacity: 1
      }
    };
    Fade = React.forwardRef(function Fade2(props, ref) {
      const theme = useTheme();
      const defaultTimeout = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen
      };
      const {
        addEndListener,
        appear = true,
        children,
        easing,
        in: inProp,
        onEnter,
        onEntered,
        onEntering,
        onExit,
        onExited,
        onExiting,
        style,
        timeout = defaultTimeout,
        // eslint-disable-next-line react/prop-types
        TransitionComponent = Transition_default
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
      const enableStrictModeCompat = true;
      const nodeRef = React.useRef(null);
      const handleRef = useForkRef_default(nodeRef, children.ref, ref);
      const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
        if (callback) {
          const node = nodeRef.current;
          if (maybeIsAppearing === void 0) {
            callback(node);
          } else {
            callback(node, maybeIsAppearing);
          }
        }
      };
      const handleEntering = normalizedTransitionCallback(onEntering);
      const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
        reflow(node);
        const transitionProps = getTransitionProps({
          style,
          timeout,
          easing
        }, {
          mode: "enter"
        });
        node.style.webkitTransition = theme.transitions.create("opacity", transitionProps);
        node.style.transition = theme.transitions.create("opacity", transitionProps);
        if (onEnter) {
          onEnter(node, isAppearing);
        }
      });
      const handleEntered = normalizedTransitionCallback(onEntered);
      const handleExiting = normalizedTransitionCallback(onExiting);
      const handleExit = normalizedTransitionCallback((node) => {
        const transitionProps = getTransitionProps({
          style,
          timeout,
          easing
        }, {
          mode: "exit"
        });
        node.style.webkitTransition = theme.transitions.create("opacity", transitionProps);
        node.style.transition = theme.transitions.create("opacity", transitionProps);
        if (onExit) {
          onExit(node);
        }
      });
      const handleExited = normalizedTransitionCallback(onExited);
      const handleAddEndListener = (next) => {
        if (addEndListener) {
          addEndListener(nodeRef.current, next);
        }
      };
      return (0, import_jsx_runtime.jsx)(TransitionComponent, _extends({
        appear,
        in: inProp,
        nodeRef: enableStrictModeCompat ? nodeRef : void 0,
        onEnter: handleEnter,
        onEntered: handleEntered,
        onEntering: handleEntering,
        onExit: handleExit,
        onExited: handleExited,
        onExiting: handleExiting,
        addEndListener: handleAddEndListener,
        timeout
      }, other, {
        children: (state, childProps) => {
          return React.cloneElement(children, _extends({
            style: _extends({
              opacity: 0,
              visibility: state === "exited" && !inProp ? "hidden" : void 0
            }, styles[state], style, children.props.style),
            ref: handleRef
          }, childProps));
        }
      }));
    });
    true ? Fade.propTypes = {
      // ----------------------------- Warning --------------------------------
      // | These PropTypes are generated from the TypeScript type definitions |
      // |     To update them edit the d.ts file and run "yarn proptypes"     |
      // ----------------------------------------------------------------------
      /**
       * Add a custom transition end trigger. Called with the transitioning DOM
       * node and a done callback. Allows for more fine grained transition end
       * logic. Note: Timeouts are still used as a fallback if provided.
       */
      addEndListener: import_prop_types.default.func,
      /**
       * Perform the enter transition when it first mounts if `in` is also `true`.
       * Set this to `false` to disable this behavior.
       * @default true
       */
      appear: import_prop_types.default.bool,
      /**
       * A single child content element.
       */
      children: elementAcceptingRef_default.isRequired,
      /**
       * The transition timing function.
       * You may specify a single easing or a object containing enter and exit values.
       */
      easing: import_prop_types.default.oneOfType([import_prop_types.default.shape({
        enter: import_prop_types.default.string,
        exit: import_prop_types.default.string
      }), import_prop_types.default.string]),
      /**
       * If `true`, the component will transition in.
       */
      in: import_prop_types.default.bool,
      /**
       * @ignore
       */
      onEnter: import_prop_types.default.func,
      /**
       * @ignore
       */
      onEntered: import_prop_types.default.func,
      /**
       * @ignore
       */
      onEntering: import_prop_types.default.func,
      /**
       * @ignore
       */
      onExit: import_prop_types.default.func,
      /**
       * @ignore
       */
      onExited: import_prop_types.default.func,
      /**
       * @ignore
       */
      onExiting: import_prop_types.default.func,
      /**
       * @ignore
       */
      style: import_prop_types.default.object,
      /**
       * The duration for the transition, in milliseconds.
       * You may specify a single timeout for all transitions, or individually with an object.
       * @default {
       *   enter: theme.transitions.duration.enteringScreen,
       *   exit: theme.transitions.duration.leavingScreen,
       * }
       */
      timeout: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.shape({
        appear: import_prop_types.default.number,
        enter: import_prop_types.default.number,
        exit: import_prop_types.default.number
      })])
    } : void 0;
    Fade_default = Fade;
  }
});

// capstone-ui/node_modules/@mui/material/Fade/index.js
var init_Fade2 = __esm({
  "capstone-ui/node_modules/@mui/material/Fade/index.js"() {
    "use client";
    init_Fade();
  }
});

// capstone-ui/node_modules/@mui/material/Backdrop/backdropClasses.js
function getBackdropUtilityClass(slot) {
  return generateUtilityClass("MuiBackdrop", slot);
}
var backdropClasses, backdropClasses_default;
var init_backdropClasses = __esm({
  "capstone-ui/node_modules/@mui/material/Backdrop/backdropClasses.js"() {
    init_esm();
    init_generateUtilityClass();
    backdropClasses = generateUtilityClasses("MuiBackdrop", ["root", "invisible"]);
    backdropClasses_default = backdropClasses;
  }
});

// capstone-ui/node_modules/@mui/material/Backdrop/Backdrop.js
var React2, import_prop_types2, import_jsx_runtime2, _excluded2, useUtilityClasses, BackdropRoot, Backdrop, Backdrop_default;
var init_Backdrop = __esm({
  "capstone-ui/node_modules/@mui/material/Backdrop/Backdrop.js"() {
    "use client";
    init_objectWithoutPropertiesLoose();
    init_extends();
    React2 = __toESM(require_react());
    import_prop_types2 = __toESM(require_prop_types());
    init_clsx_m();
    init_base();
    init_styled();
    init_useThemeProps();
    init_Fade2();
    init_backdropClasses();
    import_jsx_runtime2 = __toESM(require_jsx_runtime());
    _excluded2 = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"];
    useUtilityClasses = (ownerState) => {
      const {
        classes,
        invisible
      } = ownerState;
      const slots = {
        root: ["root", invisible && "invisible"]
      };
      return composeClasses(slots, getBackdropUtilityClass, classes);
    };
    BackdropRoot = styled_default("div", {
      name: "MuiBackdrop",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.root, ownerState.invisible && styles2.invisible];
      }
    })(({
      ownerState
    }) => _extends({
      position: "fixed",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      WebkitTapHighlightColor: "transparent"
    }, ownerState.invisible && {
      backgroundColor: "transparent"
    }));
    Backdrop = React2.forwardRef(function Backdrop2(inProps, ref) {
      var _slotProps$root, _ref, _slots$root;
      const props = useThemeProps({
        props: inProps,
        name: "MuiBackdrop"
      });
      const {
        children,
        className,
        component = "div",
        components = {},
        componentsProps = {},
        invisible = false,
        open,
        slotProps = {},
        slots = {},
        TransitionComponent = Fade_default,
        transitionDuration
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
      const ownerState = _extends({}, props, {
        component,
        invisible
      });
      const classes = useUtilityClasses(ownerState);
      const rootSlotProps = (_slotProps$root = slotProps.root) != null ? _slotProps$root : componentsProps.root;
      return (0, import_jsx_runtime2.jsx)(TransitionComponent, _extends({
        in: open,
        timeout: transitionDuration
      }, other, {
        children: (0, import_jsx_runtime2.jsx)(BackdropRoot, _extends({
          "aria-hidden": true
        }, rootSlotProps, {
          as: (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : component,
          className: clsx_m_default(classes.root, className, rootSlotProps == null ? void 0 : rootSlotProps.className),
          ownerState: _extends({}, ownerState, rootSlotProps == null ? void 0 : rootSlotProps.ownerState),
          classes,
          ref,
          children
        }))
      }));
    });
    true ? Backdrop.propTypes = {
      // ----------------------------- Warning --------------------------------
      // | These PropTypes are generated from the TypeScript type definitions |
      // |     To update them edit the d.ts file and run "yarn proptypes"     |
      // ----------------------------------------------------------------------
      /**
       * The content of the component.
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
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: import_prop_types2.default.elementType,
      /**
       * The components used for each slot inside.
       *
       * This prop is an alias for the `slots` prop.
       * It's recommended to use the `slots` prop instead.
       *
       * @default {}
       */
      components: import_prop_types2.default.shape({
        Root: import_prop_types2.default.elementType
      }),
      /**
       * The extra props for the slot components.
       * You can override the existing props or add new ones.
       *
       * This prop is an alias for the `slotProps` prop.
       * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
       *
       * @default {}
       */
      componentsProps: import_prop_types2.default.shape({
        root: import_prop_types2.default.object
      }),
      /**
       * If `true`, the backdrop is invisible.
       * It can be used when rendering a popover or a custom select component.
       * @default false
       */
      invisible: import_prop_types2.default.bool,
      /**
       * If `true`, the component is shown.
       */
      open: import_prop_types2.default.bool.isRequired,
      /**
       * The extra props for the slot components.
       * You can override the existing props or add new ones.
       *
       * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
       *
       * @default {}
       */
      slotProps: import_prop_types2.default.shape({
        root: import_prop_types2.default.object
      }),
      /**
       * The components used for each slot inside.
       *
       * This prop is an alias for the `components` prop, which will be deprecated in the future.
       *
       * @default {}
       */
      slots: import_prop_types2.default.shape({
        root: import_prop_types2.default.elementType
      }),
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object, import_prop_types2.default.bool])), import_prop_types2.default.func, import_prop_types2.default.object]),
      /**
       * The component used for the transition.
       * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
       * @default Fade
       */
      TransitionComponent: import_prop_types2.default.elementType,
      /**
       * The duration for the transition, in milliseconds.
       * You may specify a single timeout for all transitions, or individually with an object.
       */
      transitionDuration: import_prop_types2.default.oneOfType([import_prop_types2.default.number, import_prop_types2.default.shape({
        appear: import_prop_types2.default.number,
        enter: import_prop_types2.default.number,
        exit: import_prop_types2.default.number
      })])
    } : void 0;
    Backdrop_default = Backdrop;
  }
});

// capstone-ui/node_modules/@mui/material/Backdrop/index.js
var init_Backdrop2 = __esm({
  "capstone-ui/node_modules/@mui/material/Backdrop/index.js"() {
    "use client";
    init_Backdrop();
    init_backdropClasses();
    init_backdropClasses();
  }
});

// capstone-ui/node_modules/@mui/material/Modal/Modal.js
var React3, import_prop_types3, import_jsx_runtime3, _excluded3, modalClasses, ModalRoot, ModalBackdrop, Modal, Modal_default2;
var init_Modal2 = __esm({
  "capstone-ui/node_modules/@mui/material/Modal/Modal.js"() {
    "use client";
    init_objectWithoutPropertiesLoose();
    init_extends();
    React3 = __toESM(require_react());
    import_prop_types3 = __toESM(require_prop_types());
    init_clsx_m();
    init_Modal();
    init_utils();
    init_esm();
    init_styled();
    init_useThemeProps();
    init_Backdrop2();
    import_jsx_runtime3 = __toESM(require_jsx_runtime());
    _excluded3 = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "open", "slotProps", "slots", "theme"];
    modalClasses = modalClasses_default;
    ModalRoot = styled_default("div", {
      name: "MuiModal",
      slot: "Root",
      overridesResolver: (props, styles2) => {
        const {
          ownerState
        } = props;
        return [styles2.root, !ownerState.open && ownerState.exited && styles2.hidden];
      }
    })(({
      theme,
      ownerState
    }) => _extends({
      position: "fixed",
      zIndex: (theme.vars || theme).zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0
    }, !ownerState.open && ownerState.exited && {
      visibility: "hidden"
    }));
    ModalBackdrop = styled_default(Backdrop_default, {
      name: "MuiModal",
      slot: "Backdrop",
      overridesResolver: (props, styles2) => {
        return styles2.backdrop;
      }
    })({
      zIndex: -1
    });
    Modal = React3.forwardRef(function Modal2(inProps, ref) {
      var _ref, _slots$root, _ref2, _slots$backdrop, _slotProps$root, _slotProps$backdrop;
      const props = useThemeProps({
        name: "MuiModal",
        props: inProps
      });
      const {
        BackdropComponent = ModalBackdrop,
        BackdropProps,
        classes,
        className,
        closeAfterTransition = false,
        children,
        container,
        component,
        components = {},
        componentsProps = {},
        disableAutoFocus = false,
        disableEnforceFocus = false,
        disableEscapeKeyDown = false,
        disablePortal = false,
        disableRestoreFocus = false,
        disableScrollLock = false,
        hideBackdrop = false,
        keepMounted = false,
        onBackdropClick,
        onClose,
        open,
        slotProps,
        slots,
        // eslint-disable-next-line react/prop-types
        theme
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
      const [exited, setExited] = React3.useState(true);
      const commonProps = {
        container,
        closeAfterTransition,
        disableAutoFocus,
        disableEnforceFocus,
        disableEscapeKeyDown,
        disablePortal,
        disableRestoreFocus,
        disableScrollLock,
        hideBackdrop,
        keepMounted,
        onBackdropClick,
        onClose,
        open
      };
      const ownerState = _extends({}, props, commonProps, {
        exited
      });
      const RootSlot = (_ref = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : components.Root) != null ? _ref : ModalRoot;
      const BackdropSlot = (_ref2 = (_slots$backdrop = slots == null ? void 0 : slots.backdrop) != null ? _slots$backdrop : components.Backdrop) != null ? _ref2 : BackdropComponent;
      const rootSlotProps = (_slotProps$root = slotProps == null ? void 0 : slotProps.root) != null ? _slotProps$root : componentsProps.root;
      const backdropSlotProps = (_slotProps$backdrop = slotProps == null ? void 0 : slotProps.backdrop) != null ? _slotProps$backdrop : componentsProps.backdrop;
      return (0, import_jsx_runtime3.jsx)(Modal_default, _extends({
        slots: {
          root: RootSlot,
          backdrop: BackdropSlot
        },
        slotProps: {
          root: () => _extends({}, resolveComponentProps(rootSlotProps, ownerState), !isHostComponent(RootSlot) && {
            as: component,
            theme
          }, {
            className: clsx_m_default(className, rootSlotProps == null ? void 0 : rootSlotProps.className, classes == null ? void 0 : classes.root, !ownerState.open && ownerState.exited && (classes == null ? void 0 : classes.hidden))
          }),
          backdrop: () => _extends({}, BackdropProps, resolveComponentProps(backdropSlotProps, ownerState), {
            className: clsx_m_default(backdropSlotProps == null ? void 0 : backdropSlotProps.className, BackdropProps == null ? void 0 : BackdropProps.className, classes == null ? void 0 : classes.backdrop)
          })
        },
        onTransitionEnter: () => setExited(false),
        onTransitionExited: () => setExited(true),
        ref
      }, other, commonProps, {
        children
      }));
    });
    true ? Modal.propTypes = {
      // ----------------------------- Warning --------------------------------
      // | These PropTypes are generated from the TypeScript type definitions |
      // |     To update them edit the d.ts file and run "yarn proptypes"     |
      // ----------------------------------------------------------------------
      /**
       * A backdrop component. This prop enables custom backdrop rendering.
       * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
       * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
       * @default styled(Backdrop, {
       *   name: 'MuiModal',
       *   slot: 'Backdrop',
       *   overridesResolver: (props, styles) => {
       *     return styles.backdrop;
       *   },
       * })({
       *   zIndex: -1,
       * })
       */
      BackdropComponent: import_prop_types3.default.elementType,
      /**
       * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
       * @deprecated Use `slotProps.backdrop` instead.
       */
      BackdropProps: import_prop_types3.default.object,
      /**
       * A single child content element.
       */
      children: elementAcceptingRef_default.isRequired,
      /**
       * Override or extend the styles applied to the component.
       */
      classes: import_prop_types3.default.object,
      /**
       * @ignore
       */
      className: import_prop_types3.default.string,
      /**
       * When set to true the Modal waits until a nested Transition is completed before closing.
       * @default false
       */
      closeAfterTransition: import_prop_types3.default.bool,
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: import_prop_types3.default.elementType,
      /**
       * The components used for each slot inside.
       *
       * This prop is an alias for the `slots` prop.
       * It's recommended to use the `slots` prop instead.
       *
       * @default {}
       */
      components: import_prop_types3.default.shape({
        Backdrop: import_prop_types3.default.elementType,
        Root: import_prop_types3.default.elementType
      }),
      /**
       * The extra props for the slot components.
       * You can override the existing props or add new ones.
       *
       * This prop is an alias for the `slotProps` prop.
       * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
       *
       * @default {}
       */
      componentsProps: import_prop_types3.default.shape({
        backdrop: import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object]),
        root: import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object])
      }),
      /**
       * An HTML element or function that returns one.
       * The `container` will have the portal children appended to it.
       *
       * By default, it uses the body of the top-level document object,
       * so it's simply `document.body` most of the time.
       */
      container: import_prop_types3.default.oneOfType([HTMLElementType, import_prop_types3.default.func]),
      /**
       * If `true`, the modal will not automatically shift focus to itself when it opens, and
       * replace it to the last focused element when it closes.
       * This also works correctly with any modal children that have the `disableAutoFocus` prop.
       *
       * Generally this should never be set to `true` as it makes the modal less
       * accessible to assistive technologies, like screen readers.
       * @default false
       */
      disableAutoFocus: import_prop_types3.default.bool,
      /**
       * If `true`, the modal will not prevent focus from leaving the modal while open.
       *
       * Generally this should never be set to `true` as it makes the modal less
       * accessible to assistive technologies, like screen readers.
       * @default false
       */
      disableEnforceFocus: import_prop_types3.default.bool,
      /**
       * If `true`, hitting escape will not fire the `onClose` callback.
       * @default false
       */
      disableEscapeKeyDown: import_prop_types3.default.bool,
      /**
       * The `children` will be under the DOM hierarchy of the parent component.
       * @default false
       */
      disablePortal: import_prop_types3.default.bool,
      /**
       * If `true`, the modal will not restore focus to previously focused element once
       * modal is hidden or unmounted.
       * @default false
       */
      disableRestoreFocus: import_prop_types3.default.bool,
      /**
       * Disable the scroll lock behavior.
       * @default false
       */
      disableScrollLock: import_prop_types3.default.bool,
      /**
       * If `true`, the backdrop is not rendered.
       * @default false
       */
      hideBackdrop: import_prop_types3.default.bool,
      /**
       * Always keep the children in the DOM.
       * This prop can be useful in SEO situation or
       * when you want to maximize the responsiveness of the Modal.
       * @default false
       */
      keepMounted: import_prop_types3.default.bool,
      /**
       * Callback fired when the backdrop is clicked.
       * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
       */
      onBackdropClick: import_prop_types3.default.func,
      /**
       * Callback fired when the component requests to be closed.
       * The `reason` parameter can optionally be used to control the response to `onClose`.
       *
       * @param {object} event The event source of the callback.
       * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
       */
      onClose: import_prop_types3.default.func,
      /**
       * A function called when a transition enters.
       */
      onTransitionEnter: import_prop_types3.default.func,
      /**
       * A function called when a transition has exited.
       */
      onTransitionExited: import_prop_types3.default.func,
      /**
       * If `true`, the component is shown.
       */
      open: import_prop_types3.default.bool.isRequired,
      /**
       * The props used for each slot inside the Modal.
       * @default {}
       */
      slotProps: import_prop_types3.default.shape({
        backdrop: import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object]),
        root: import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object])
      }),
      /**
       * The components used for each slot inside the Modal.
       * Either a string to use a HTML element or a component.
       * @default {}
       */
      slots: import_prop_types3.default.shape({
        backdrop: import_prop_types3.default.elementType,
        root: import_prop_types3.default.elementType
      }),
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object, import_prop_types3.default.bool])), import_prop_types3.default.func, import_prop_types3.default.object])
    } : void 0;
    Modal_default2 = Modal;
  }
});

// capstone-ui/node_modules/@mui/material/Modal/index.js
var init_Modal3 = __esm({
  "capstone-ui/node_modules/@mui/material/Modal/index.js"() {
    init_Modal();
    init_Modal2();
    init_Modal2();
  }
});

export {
  reflow,
  getTransitionProps,
  init_utils2 as init_utils,
  Fade_default,
  init_Fade2 as init_Fade,
  getBackdropUtilityClass,
  backdropClasses_default,
  Backdrop_default,
  init_Backdrop2 as init_Backdrop,
  modalClasses,
  Modal_default2 as Modal_default,
  init_Modal3 as init_Modal
};
//# sourceMappingURL=chunk-CQYQ3V2Q.js.map
