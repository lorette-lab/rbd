/* @ds-bundle: {"format":4,"namespace":"RefinedByDesignDesignSystem_eafcfd","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Marquee","sourcePath":"components/portfolio/Marquee.jsx"},{"name":"PricingCard","sourcePath":"components/portfolio/PricingCard.jsx"},{"name":"ProjectCard","sourcePath":"components/portfolio/ProjectCard.jsx"},{"name":"SectionHeading","sourcePath":"components/portfolio/SectionHeading.jsx"},{"name":"StatBlock","sourcePath":"components/portfolio/StatBlock.jsx"},{"name":"TestimonialCard","sourcePath":"components/portfolio/TestimonialCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"9332adfc6676","components/core/Button.jsx":"8cf011e44af5","components/core/Card.jsx":"7bb38504de7b","components/core/Icon.jsx":"ecc810f1e205","components/core/IconButton.jsx":"e8e89e65c257","components/core/Tag.jsx":"c75acdbea11d","components/feedback/Accordion.jsx":"14420ec8f9a9","components/feedback/Dialog.jsx":"0d8331a27da4","components/feedback/Toast.jsx":"626734c5c06e","components/feedback/Tooltip.jsx":"c7e287b0eac8","components/forms/Checkbox.jsx":"20bf4d248372","components/forms/Input.jsx":"d28bbbe0f8be","components/forms/Select.jsx":"90c1950b5aad","components/forms/Switch.jsx":"5443be072833","components/navigation/Tabs.jsx":"a759fbdb6f2b","components/portfolio/Marquee.jsx":"576b958b1d8d","components/portfolio/PricingCard.jsx":"0269ddd57b72","components/portfolio/ProjectCard.jsx":"0b507a6e447d","components/portfolio/SectionHeading.jsx":"10af266baff1","components/portfolio/StatBlock.jsx":"f9f90affaff8","components/portfolio/TestimonialCard.jsx":"479279557f81","ui_kits/portfolio/CaseAbout.jsx":"0f0c86def9c9","ui_kits/portfolio/Chrome.jsx":"512a8e2e1c20","ui_kits/portfolio/Home.jsx":"1afb195fb73c","ui_kits/portfolio/Projects.jsx":"43ec4935edf1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RefinedByDesignDesignSystem_eafcfd = window.RefinedByDesignDesignSystem_eafcfd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  tone = 'neutral',
  dot,
  children,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      background: 'var(--white)',
      color: 'var(--ink-3)',
      boxShadow: 'var(--shadow-inset-hairline)'
    },
    ink: {
      background: 'var(--ink-1)',
      color: 'var(--white)'
    },
    butter: {
      background: 'var(--butter)',
      color: 'var(--ink-1)'
    },
    blush: {
      background: 'var(--blush)',
      color: 'var(--ink-1)'
    },
    pink: {
      background: 'var(--pink)',
      color: 'var(--ink-1)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: 'var(--tracking-meta)',
      textTransform: 'uppercase',
      ...tones[tone],
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor',
      opacity: 0.7
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  interactive,
  padding = 'var(--space-7)',
  tone = 'panel',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    card: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      boxShadow: 'var(--shadow-inset-hairline)'
    },
    panel: {
      background: 'var(--panel-soft)',
      color: 'var(--text-body)',
      boxShadow: 'var(--shadow-inset-hairline)'
    },
    quiet: {
      background: 'var(--grey-3)',
      color: 'var(--text-body)',
      boxShadow: 'none'
    },
    ink: {
      background: 'var(--panel-dark)',
      color: 'var(--ink-5)',
      boxShadow: 'none'
    },
    glass: {
      background: 'var(--glass-dark)',
      color: 'var(--white)',
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.12)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-xl)',
      padding,
      transform: interactive && hover ? 'translateY(-3px)' : 'none',
      boxShadow: interactive && hover ? 'var(--shadow-lift)' : tones[tone].boxShadow,
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : undefined,
      ...tones[tone],
      ...(interactive && hover ? {
        boxShadow: 'var(--shadow-lift)'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide (MIT) fetched from CDN and inlined so glyphs inherit currentColor and
   real stroke geometry. A failed fetch renders nothing rather than a solid block. */
const CACHE = {};
const URL_FOR = name => `https://cdn.jsdelivr.net/npm/lucide-static@0.539.0/icons/${name}.svg`;
function load(name) {
  if (!CACHE[name]) {
    CACHE[name] = fetch(URL_FOR(name)).then(r => r.ok ? r.text() : '').then(t => t.indexOf('<svg') === 0 ? t : '').catch(() => '');
  }
  return CACHE[name];
}
function Icon({
  name = 'arrow-up-right',
  size = 20,
  strokeWidth = 1.75,
  style,
  ...rest
}) {
  const [svg, setSvg] = React.useState('');
  React.useEffect(() => {
    let live = true;
    load(name).then(t => {
      if (live) setSvg(t);
    });
    return () => {
      live = false;
    };
  }, [name]);
  const markup = svg ? svg.replace(/width="24"/, `width="${size}"`).replace(/height="24"/, `height="${size}"`).replace(/stroke-width="2"/, `stroke-width="${strokeWidth}"`) : '';
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      flex: '0 0 auto',
      color: 'inherit',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: markup
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '9px 14px',
    fontSize: 13,
    gap: 7,
    radius: 'var(--radius-sm)'
  },
  md: {
    padding: '12px 20px',
    fontSize: 14,
    gap: 8,
    radius: 'var(--radius-sm)'
  },
  lg: {
    padding: '16px 26px',
    fontSize: 15,
    gap: 9,
    radius: 'var(--radius-md)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconLeft,
  disabled,
  full,
  children,
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const skins = {
    primary: {
      background: hover ? 'var(--ink-2)' : 'var(--ink-1)',
      color: 'var(--white)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    secondary: {
      background: hover ? 'var(--grey-4)' : 'var(--grey-3)',
      color: 'var(--ink-1)',
      border: '1px solid transparent'
    },
    outline: {
      background: hover ? 'var(--grey-2)' : 'transparent',
      color: 'var(--ink-1)',
      border: 'var(--border-soft)'
    },
    ghost: {
      background: hover ? 'var(--grey-3)' : 'transparent',
      color: hover ? 'var(--ink-1)' : 'var(--ink-3)',
      border: '1px solid transparent'
    },
    inverse: {
      background: hover ? 'var(--grey-2)' : 'var(--white)',
      color: 'var(--ink-1)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: full ? 'flex' : 'inline-flex',
      width: full ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      padding: s.padding,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: '-0.005em',
      borderRadius: s.radius,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.38 : 1,
      transform: press && !disabled ? 'scale(.985)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), transform var(--dur-instant) var(--ease-out)',
      ...skins[variant],
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: size === 'sm' ? 14 : 16
  }), children, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 13 : 15,
    style: {
      opacity: 0.85,
      transform: hover ? 'translate(2px,-2px)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BOX = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  name = 'arrow-up-right',
  size = 'md',
  variant = 'ghost',
  shape = 'rounded',
  label,
  disabled,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const skins = {
    ghost: {
      background: hover ? 'var(--grey-3)' : 'transparent',
      color: 'var(--ink-1)',
      border: '1px solid transparent'
    },
    outline: {
      background: hover ? 'var(--grey-2)' : 'transparent',
      color: 'var(--ink-1)',
      border: 'var(--border-soft)'
    },
    solid: {
      background: hover ? 'var(--ink-2)' : 'var(--ink-1)',
      color: 'var(--white)',
      border: '1px solid transparent'
    },
    light: {
      background: hover ? 'var(--grey-2)' : 'var(--white)',
      color: 'var(--ink-1)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    }
  };
  const box = BOX[size] || BOX.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      width: box,
      height: box,
      display: 'inline-grid',
      placeItems: 'center',
      borderRadius: shape === 'circle' ? 'var(--radius-circle)' : 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.38 : 1,
      transform: press && !disabled ? 'scale(.95)' : 'none',
      transition: 'var(--transition-ui)',
      ...skins[variant],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: size === 'sm' ? 15 : size === 'lg' ? 20 : 17
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  active,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '8px 15px',
      borderRadius: 'var(--radius-pill)',
      border: active ? '1px solid transparent' : 'var(--border-soft)',
      background: active ? 'var(--ink-1)' : hover ? 'var(--grey-3)' : 'transparent',
      color: active ? 'var(--white)' : 'var(--ink-3)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 13,
      letterSpacing: '-0.005em',
      cursor: 'pointer',
      transition: 'var(--transition-ui)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  defaultOpen = -1,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gap: 10,
      ...style
    }
  }, rest), items.map((it, i) => {
    const on = i === open;
    return /*#__PURE__*/React.createElement("div", {
      key: it.q || i,
      style: {
        background: on ? 'var(--white)' : 'var(--grey-3)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: on ? 'var(--shadow-sm)' : 'none',
        transition: 'background var(--dur-fast) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setOpen(on ? -1 : i),
      "aria-expanded": on,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '18px 22px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 15,
        color: 'var(--text-strong)'
      }
    }, it.q, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down",
      size: 17,
      style: {
        color: 'var(--text-muted)',
        flex: '0 0 auto',
        transform: on ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out)'
      }
    })), on && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 22px 20px',
        fontSize: 14,
        lineHeight: 'var(--lh-body)',
        color: 'var(--text-body)',
        maxWidth: '62ch'
      }
    }, it.a));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open,
  title,
  onClose,
  children,
  footer,
  width = 500,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      display: 'grid',
      placeItems: 'center',
      background: 'rgba(11,11,12,.42)',
      backdropFilter: 'blur(4px)',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--white)',
      borderRadius: 'var(--radius-2xl)',
      padding: 'var(--space-8)',
      boxShadow: 'var(--shadow-lift)',
      animation: 'rbd-rise var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 30,
      letterSpacing: 'var(--tracking-display)',
      lineHeight: 1.1,
      margin: 0,
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "x",
    label: "Close",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      color: 'var(--text-body)',
      fontSize: 14,
      lineHeight: 'var(--lh-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)',
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Toast({
  open = true,
  tone = 'ink',
  message,
  action,
  onClose,
  style,
  ...rest
}) {
  if (!open) return null;
  const tones = {
    ink: {
      background: 'var(--ink-1)',
      color: 'var(--white)'
    },
    light: {
      background: 'var(--white)',
      color: 'var(--ink-1)',
      boxShadow: 'var(--shadow-lift)'
    },
    success: {
      background: 'var(--status-success)',
      color: 'var(--white)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      padding: '13px 16px',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      fontSize: 14,
      animation: 'rbd-rise var(--dur-base) var(--ease-out)',
      ...tones[tone],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    style: {
      opacity: 0.8
    }
  }), /*#__PURE__*/React.createElement("span", null, message), action, onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      background: 'none',
      border: 'none',
      color: 'inherit',
      opacity: 0.55,
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, rest), children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      ...pos,
      background: 'var(--ink-1)',
      color: 'var(--white)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-xs)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      whiteSpace: 'nowrap',
      zIndex: 40,
      animation: 'rbd-rise var(--dur-fast) var(--ease-out)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.38 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: !!checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 19,
      height: 19,
      display: 'grid',
      placeItems: 'center',
      borderRadius: 'var(--radius-xs)',
      border: checked ? '1px solid var(--ink-1)' : 'var(--border-soft)',
      background: checked ? 'var(--ink-1)' : 'var(--white)',
      color: 'var(--white)',
      transition: 'var(--transition-ui)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 12
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  prefix,
  suffix,
  as = 'input',
  rows = 4,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useMemo(() => 'in-' + Math.random().toString(36).slice(2, 7), []);
  const Field = as === 'textarea' ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'grid',
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '-0.005em',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--white)',
      borderRadius: 'var(--radius-sm)',
      border: error ? '1px solid var(--status-error)' : focus ? '1px solid var(--ink-1)' : 'var(--border-soft)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      padding: '0 14px',
      transition: 'var(--transition-ui)'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      fontSize: 14
    }
  }, prefix), /*#__PURE__*/React.createElement(Field, _extends({
    id: uid,
    rows: as === 'textarea' ? rows : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-strong)',
      padding: as === 'textarea' ? '13px 0' : '12px 0',
      resize: as === 'textarea' ? 'vertical' : undefined
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      fontSize: 14
    }
  }, suffix)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: error ? 'var(--status-error)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  hint,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useMemo(() => 'se-' + Math.random().toString(36).slice(2, 7), []);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'grid',
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      background: 'var(--white)',
      borderRadius: 'var(--radius-sm)',
      padding: '0 14px',
      border: focus ? '1px solid var(--ink-1)' : 'var(--border-soft)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'var(--transition-ui)'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      appearance: 'none',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-strong)',
      padding: '12px 0',
      cursor: 'pointer'
    }
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 15,
    style: {
      color: 'var(--text-muted)'
    }
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.38 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: !!checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      padding: 3,
      background: checked ? 'var(--ink-1)' : 'var(--grey-5)',
      display: 'flex',
      justifyContent: checked ? 'flex-end' : 'flex-start',
      transition: 'background var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-circle)',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  const active = value ?? (items[0] && (items[0].value || items[0]));
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: 3,
      padding: 4,
      background: 'var(--grey-3)',
      borderRadius: 'var(--radius-md)',
      ...style
    }
  }, rest), items.map(it => {
    const v = it.value || it;
    const l = it.label || it;
    const on = v === active;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      type: "button",
      onClick: () => onChange && onChange(v),
      style: {
        padding: '9px 16px',
        borderRadius: 'var(--radius-sm)',
        border: 'none',
        background: on ? 'var(--white)' : 'transparent',
        boxShadow: on ? 'var(--shadow-sm)' : 'none',
        color: on ? 'var(--ink-1)' : 'var(--ink-4)',
        fontFamily: 'var(--font-sans)',
        fontWeight: 500,
        fontSize: 13,
        cursor: 'pointer',
        transition: 'var(--transition-ui)'
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/Marquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Marquee({
  items = [],
  speed = 34,
  tone = 'quiet',
  separator = '·',
  style,
  ...rest
}) {
  const tones = {
    quiet: {
      background: 'var(--grey-3)',
      color: 'var(--ink-3)'
    },
    page: {
      background: 'transparent',
      color: 'var(--ink-4)'
    },
    ink: {
      background: 'var(--ink-1)',
      color: 'var(--ink-5)'
    },
    butter: {
      background: 'var(--butter)',
      color: 'var(--ink-1)'
    }
  };
  const [paused, setPaused] = React.useState(false);
  const run = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    style: {
      overflow: 'hidden',
      padding: '16px 0',
      ...tones[tone],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: 'max-content',
      gap: 'var(--space-9)',
      animation: `rbd-marquee ${speed}s linear infinite`,
      animationPlayState: paused ? 'paused' : 'running'
    }
  }, run.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-9)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: 'var(--tracking-meta)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  }, it, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.35
    }
  }, separator)))));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/PricingCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PricingCard({
  name,
  blurb,
  price,
  currency = 'USD',
  cta = 'Start a project',
  features = [],
  featured,
  onSelect,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: featured ? 'var(--panel-dark)' : 'var(--panel-soft)',
      color: featured ? 'var(--ink-5)' : 'var(--text-body)',
      borderRadius: 'var(--radius-2xl)',
      padding: 'var(--space-8)',
      boxShadow: featured ? 'var(--shadow-md)' : 'var(--shadow-inset-hairline)',
      display: 'grid',
      gap: 'var(--space-6)',
      alignContent: 'start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: 'var(--tracking-meta)',
      textTransform: 'uppercase',
      color: featured ? 'var(--ink-5)' : 'var(--text-muted)'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 'var(--lh-body)',
      maxWidth: '34ch'
    }
  }, blurb)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 48,
      lineHeight: 1,
      letterSpacing: 'var(--tracking-display)',
      color: featured ? 'var(--white)' : 'var(--text-strong)'
    }
  }, price, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: 'var(--tracking-meta)',
      color: featured ? 'var(--ink-4)' : 'var(--text-faint)'
    }
  }, currency)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: featured ? 'inverse' : 'primary',
    full: true,
    icon: "arrow-up-right",
    onClick: onSelect
  }, cta), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10,
      paddingTop: 'var(--space-2)'
    }
  }, features.map(ft => /*#__PURE__*/React.createElement("span", {
    key: ft,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    style: {
      color: featured ? 'var(--white)' : 'var(--ink-1)',
      opacity: 0.7
    }
  }), ft))));
}
Object.assign(__ds_scope, { PricingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/PricingCard.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Project tile: soft grey panel, image inset, serif title, arrow that slides on hover. */
function ProjectCard({
  title,
  eyebrow,
  result,
  image,
  imageTone = 'var(--placeholder)',
  ratio = '4 / 3',
  href = '#',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      textDecoration: 'none',
      background: 'var(--panel-soft)',
      boxShadow: hover ? 'var(--shadow-lift)' : 'var(--shadow-inset-hairline)',
      borderRadius: 'var(--radius-xl)',
      padding: 10,
      transform: hover ? 'translateY(-3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      overflow: 'hidden',
      background: imageTone,
      borderRadius: 'var(--radius-lg)'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.035)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: 'var(--tracking-meta)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, "image slot")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 14px 12px',
      display: 'grid',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: 'var(--tracking-meta)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 12,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 27,
      lineHeight: 1.1,
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-strong)'
    }
  }, title, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 19,
    style: {
      color: hover ? 'var(--ink-1)' : 'var(--text-faint)',
      transform: hover ? 'translate(2px,-2px)' : 'none',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  })), result && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, result)));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Centred (or left) eyebrow badge + serif display line + optional grey sub-line. */
function SectionHeading({
  eyebrow,
  title,
  quiet,
  sub,
  align = 'center',
  size = 'md',
  style,
  ...rest
}) {
  const fs = size === 'lg' ? 'var(--text-display-2)' : 'var(--text-display-3)';
  const centred = align === 'center';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      justifyItems: centred ? 'center' : 'start',
      textAlign: centred ? 'center' : 'left',
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Badge, null, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: fs,
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-strong)',
      maxWidth: '22ch'
    }
  }, title, quiet && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)'
    }
  }, " ", quiet)), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)',
      maxWidth: '52ch'
    }
  }, sub));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Big serif number + label. Used in rows of three under the hero. */
function StatBlock({
  value,
  suffix,
  label,
  size = 'md',
  style,
  ...rest
}) {
  const fs = size === 'lg' ? 56 : 34;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gap: 6,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: fs,
      lineHeight: 1,
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-strong)'
    }
  }, value, suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)'
    }
  }, suffix)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TestimonialCard({
  quote,
  name,
  role,
  avatar,
  link,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-7)',
      boxShadow: 'var(--shadow-inset-hairline)',
      display: 'grid',
      gap: 'var(--space-6)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)',
      margin: 0
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-circle)',
      overflow: 'hidden',
      background: 'var(--grey-4)',
      flex: '0 0 auto'
    }
  }, avatar && /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--text-strong)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, role)), link && /*#__PURE__*/React.createElement("a", {
    href: link,
    style: {
      marginLeft: 'auto',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "See on X \u2192")));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CaseAbout.jsx
try { (() => {
const {
  Button,
  IconButton,
  Badge,
  Tabs,
  Card,
  Marquee,
  SectionHeading,
  StatBlock,
  Input,
  Select,
  Checkbox,
  Toast,
  Tooltip,
  Tag,
  Icon
} = window.RefinedByDesignDesignSystem_eafcfd;
function CaseStudy({
  go
}) {
  const [tab, setTab] = React.useState('Overview');
  const body = {
    Overview: ['The signup flow had six steps. Two of them existed because a database table did.', 'I mapped every field to a business reason. Four of nineteen had one — the rest were there because someone asked, once, in 2019.'],
    Process: ['Two weeks of session replays, eleven customer calls, one spreadsheet nobody wanted to open.', 'We prototyped three flows and tested them with nine people. The shortest won by a distance, but only once the payment wall moved behind first value.'],
    Outcome: ['Activation climbed 38% over eleven weeks and held.', 'Signup support tickets halved, and the shorter flow became the default for every new market.']
  }[tab];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-6)',
      justifyItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Badge, null, "Case study \xB7 2024"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-display-2)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--tracking-display)',
      margin: 0,
      maxWidth: '20ch'
    }
  }, "Six steps to three, ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)'
    }
  }, "and 38% more activation"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-9)',
      height: 'clamp(260px,34vw,440px)',
      background: 'var(--placeholder)',
      borderRadius: 'var(--radius-2xl)',
      boxShadow: 'var(--shadow-inset-hairline)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "var(--text-faint)"
  }, "Hero image slot")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: 'var(--space-7)',
      marginTop: 'var(--space-9)',
      paddingBottom: 'var(--space-8)',
      borderBottom: 'var(--border-hairline)'
    }
  }, [['Client', 'Fintech, Series B'], ['Role', 'Lead product designer'], ['Duration', '14 weeks'], ['Outcome', '+38% activation']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'grid',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 21,
      color: 'var(--text-strong)'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.5fr)',
      gap: 'var(--space-10)',
      alignItems: 'start',
      marginTop: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-6)',
      position: 'sticky',
      top: 96
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ['Overview', 'Process', 'Outcome'],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("p", {
    className: "rbd-serif-italic",
    style: {
      fontSize: 26,
      lineHeight: 1.25,
      color: 'var(--text-strong)'
    }
  }, "\u201CTwo of the six steps existed because a database table did.\u201D")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-6)'
    }
  }, body.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    className: "rbd-body",
    style: {
      fontSize: 16
    }
  }, p)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 300,
      borderRadius: 'var(--radius-xl)',
      background: 'var(--placeholder)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "var(--text-faint)"
  }, "Image slot \u2014 before / after")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)'
    }
  }, [['38', '%', 'Activation lift'], ['52', '%', 'Fewer tickets'], ['3', '', 'Steps, down from six']].map(([v, s, l]) => /*#__PURE__*/React.createElement(Card, {
    key: l,
    tone: "quiet",
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: v,
    suffix: s,
    label: l
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('projects')
  }, "Back to projects"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "arrow-up-right",
    onClick: () => go('contact')
  }, "Start something like this"))));
}
function About({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingBottom: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.25fr) minmax(0,.75fr)',
      gap: 'var(--space-10)',
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-6)',
      justifyItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    dot: true
  }, "Available for projects"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-display-2)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--tracking-display)',
      margin: 0,
      maxWidth: '18ch'
    }
  }, "Creative entrepreneur, ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)'
    }
  }, "stubborn optimist")), /*#__PURE__*/React.createElement("p", {
    className: "rbd-body",
    style: {
      fontSize: 16
    }
  }, "I have spent fourteen years building web interfaces, most of them for businesses that needed growth more than a redesign. I like the moment a founder realises the problem was three fields and a bad default."), /*#__PURE__*/React.createElement("p", {
    className: "rbd-body",
    style: {
      fontSize: 16
    }
  }, "I want to leave the world in a better state than we found it. That starts small: fewer wasted clicks, honest pricing pages, products people can actually use."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-9)',
      paddingTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "14",
    suffix: "yr",
    label: "Experience"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "40",
    suffix: "+",
    label: "Projects"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "6",
    suffix: "",
    label: "Industries"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--panel-soft)',
      borderRadius: 'var(--radius-2xl)',
      boxShadow: 'var(--shadow-inset-hairline)',
      display: 'grid',
      alignItems: 'end',
      minHeight: 420,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/portrait.png",
    alt: "",
    style: {
      width: '100%',
      objectFit: 'contain',
      objectPosition: 'bottom'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginTop: 'var(--space-9)'
    }
  }, ['Brand identity', 'Product design', 'Design systems', 'UX research', 'Front-end (HTML/CSS)', 'Growth experiments', 'Workshops'].map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s
  }, s)))), /*#__PURE__*/React.createElement(Marquee, {
    tone: "quiet",
    items: ['14 years', '40+ projects', '6 industries', 'Cape Town'],
    speed: 26
  }), /*#__PURE__*/React.createElement(Section, {
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 'var(--space-10)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      justifyItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Badge, null, "Contact"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display-3)',
      letterSpacing: 'var(--tracking-display)',
      lineHeight: 1.02
    }
  }, "Tell me what is ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)'
    }
  }, "broken")), /*#__PURE__*/React.createElement("p", {
    className: "rbd-body"
  }, "Share a few details and I'll come back with a clear direction, scope and timeline \u2014 usually within a day."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Copy email"
  }, /*#__PURE__*/React.createElement(IconButton, {
    name: "mail",
    label: "Copy email",
    variant: "outline"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, "hello@refinedbydesign.co.za"))), /*#__PURE__*/React.createElement(ContactForm, null))));
}
function ContactForm() {
  const [sent, setSent] = React.useState(false);
  const [nda, setNda] = React.useState(false);
  return /*#__PURE__*/React.createElement(Card, {
    tone: "card",
    padding: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Who's asking?"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "you@company.com"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Budget",
    options: ['Under $2k', '$2k–$8k', '$8k+', 'Not sure yet']
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Tell me about the project",
    as: "textarea",
    rows: 3,
    placeholder: "Six steps in signup, two of them pointless\u2026"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I need an NDA first",
    checked: nda,
    onChange: e => setNda(e.target.checked)
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    full: true,
    icon: "arrow-up-right",
    onClick: () => setSent(true)
  }, "Send it"), sent && /*#__PURE__*/React.createElement(Toast, {
    message: "Message sent. I reply within a day.",
    onClose: () => setSent(false)
  })));
}
Object.assign(window, {
  CaseStudy,
  About,
  ContactForm
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CaseAbout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Chrome.jsx
try { (() => {
const {
  Button,
  Badge,
  Icon
} = window.RefinedByDesignDesignSystem_eafcfd;
const NAV = [{
  id: 'home',
  label: 'Home'
}, {
  id: 'projects',
  label: 'Projects'
}, {
  id: 'case',
  label: 'Case study'
}, {
  id: 'about',
  label: 'About'
}];
function TopBar({
  screen,
  go
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById('kit-scroll');
    if (!el) return;
    const on = () => setScrolled(el.scrollTop > 10);
    el.addEventListener('scroll', on);
    return () => el.removeEventListener('scroll', on);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      padding: '14px var(--page-pad-x)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      padding: '10px 12px 10px 18px',
      borderRadius: 'var(--radius-pill)',
      background: scrolled ? 'var(--glass-light)' : 'transparent',
      backdropFilter: scrolled ? 'var(--blur-veil)' : 'none',
      WebkitBackdropFilter: scrolled ? 'var(--blur-veil)' : 'none',
      boxShadow: scrolled ? 'var(--shadow-sm), var(--shadow-inset-hairline)' : 'none',
      transition: 'var(--transition-ui)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-ink.svg",
    alt: "Refined by Design",
    style: {
      width: 118
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2
    }
  }, NAV.map(n => {
    const on = n.id === screen;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      type: "button",
      onClick: () => go(n.id),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '8px 14px',
        borderRadius: 'var(--radius-sm)',
        fontFamily: 'var(--font-sans)',
        fontWeight: 500,
        fontSize: 14,
        color: on ? 'var(--ink-1)' : 'var(--ink-4)',
        transition: 'var(--transition-ui)'
      }
    }, n.label);
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    icon: "arrow-up-right",
    onClick: () => go('contact')
  }, "Let's talk"))));
}
function Footer({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '0 var(--page-pad-x) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rbd-invert",
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      background: 'var(--panel-dark)',
      borderRadius: 'var(--radius-2xl)',
      padding: 'var(--space-11) var(--space-9) var(--space-7)',
      display: 'grid',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-display-3)',
      lineHeight: 1.02,
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--white)',
      margin: 0,
      maxWidth: '20ch'
    }
  }, "Let's build something ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)'
    }
  }, "worth keeping")), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    icon: "arrow-up-right",
    onClick: () => go('contact')
  }, "Start a project")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.4fr) repeat(2,minmax(0,1fr))',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-paper.svg",
    alt: "Refined by Design",
    style: {
      width: 128
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--ink-5)',
      maxWidth: '34ch',
      margin: 0
    }
  }, "Creating refined digital experiences with clarity, intention and thoughtful execution.")), [['Pages', ['Home', 'Projects', 'Case study', 'About']], ['Social', ['LinkedIn', 'Dribbble', 'X', 'Email']]].map(([t, links]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'grid',
      gap: 12,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: 'var(--tracking-meta)',
      textTransform: 'uppercase',
      color: 'var(--ink-4)'
    }
  }, t), links.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      fontSize: 14,
      color: 'var(--ink-5)'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 20,
      flexWrap: 'wrap',
      paddingTop: 'var(--space-6)',
      borderTop: '1px solid rgba(255,255,255,.1)',
      fontSize: 13,
      color: 'var(--ink-4)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Refined by Design"), /*#__PURE__*/React.createElement("span", null, "hello@refinedbydesign.co.za"))));
}
function Eyebrow({
  children,
  tone
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: 'var(--tracking-meta)',
      textTransform: 'uppercase',
      color: tone || 'var(--text-muted)'
    }
  }, children);
}
function Section({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) var(--page-pad-x)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, children));
}
Object.assign(window, {
  TopBar,
  Footer,
  Eyebrow,
  Section,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  IconButton,
  Badge,
  Card,
  Marquee,
  SectionHeading,
  ProjectCard,
  StatBlock,
  TestimonialCard,
  PricingCard,
  Accordion,
  Icon
} = window.RefinedByDesignDesignSystem_eafcfd;
const PROJECTS = [{
  eyebrow: '2024 · brand identity',
  title: 'Brandora',
  result: 'Identity system and site in six weeks',
  tag: 'brand'
}, {
  eyebrow: '2023 · product design',
  title: 'Nivora',
  result: 'Activation up 38% in eleven weeks',
  tag: 'product'
}, {
  eyebrow: '2023 · web design',
  title: 'Codify',
  result: 'Docs traffic doubled after relaunch',
  tag: 'web'
}, {
  eyebrow: '2022 · design system',
  title: 'Neutra',
  result: 'One system across four products',
  tag: 'product'
}, {
  eyebrow: '2022 · web design',
  title: 'Snapkit',
  result: 'Trial starts up 21%',
  tag: 'web'
}, {
  eyebrow: '2021 · brand identity',
  title: 'Todofusion',
  result: 'Rebrand shipped in a month',
  tag: 'brand'
}];
function Hero({
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--page-pad-x)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      background: 'var(--panel-soft)',
      borderRadius: 'var(--radius-2xl)',
      boxShadow: 'var(--shadow-inset-hairline)',
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,.95fr)',
      alignItems: 'end',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-11) var(--space-9)',
      display: 'grid',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-display-1)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--tracking-display)',
      margin: 0,
      color: 'var(--text-strong)',
      maxWidth: '14ch'
    }
  }, "Design that solves ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)'
    }
  }, "business problems")), /*#__PURE__*/React.createElement("p", {
    className: "rbd-lead",
    style: {
      margin: 0
    }
  }, "I design refined brands, websites and interfaces for ambitious founders and creative teams. Fourteen years of it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "arrow-up-right",
    onClick: () => go('projects')
  }, "View projects"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => go('contact')
  }, "Get in touch")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-9)',
      paddingTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "40",
    suffix: "+",
    label: "Projects completed"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "14",
    suffix: "yr",
    label: "Experience"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "30",
    suffix: "+",
    label: "Happy clients"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      alignSelf: 'end',
      minHeight: 520
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/portrait.png",
    alt: "",
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      height: 520,
      width: '100%',
      objectFit: 'contain',
      objectPosition: 'bottom right'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 48,
      width: 268,
      background: 'var(--glass-dark)',
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.14)',
      padding: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'rgba(255,255,255,.6)',
      letterSpacing: 'var(--tracking-meta)',
      textTransform: 'uppercase',
      fontWeight: 600
    }
  }, "Currently"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 14,
      color: '#fff'
    }
  }, "Available for projects"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'rgba(255,255,255,.66)',
      lineHeight: 1.45
    }
  }, "Share a few details and I'll come back with a clear direction.")), /*#__PURE__*/React.createElement(IconButton, {
    name: "arrow-up-right",
    variant: "light",
    label: "Start a project",
    onClick: () => go('contact'),
    style: {
      flex: '0 0 auto'
    }
  })))));
}
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-10) 0 0'
    }
  }, /*#__PURE__*/React.createElement(Marquee, {
    tone: "page",
    items: ['Brandora', 'Nivora', 'Codify', 'Neutra', 'Snapkit', 'Todofusion']
  })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Benefits",
    title: "Why the work",
    quiet: "stands out",
    sub: "Clean, responsive interfaces that communicate clearly, guide people smoothly and support real business goals."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-9)'
    }
  }, [['Clear design systems', 'Components documented once and reused everywhere, so the brand holds together as it grows.', 'var(--butter)'], ['Sites built to perform', 'Structure, copy and speed treated as design problems — not as things to fix later.', 'var(--blush)'], ['Launch-ready execution', 'Hand-built pages with smooth interactions, shipped and supported through go-live.', 'var(--pink)']].map(([t, b, tint]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    tone: "panel",
    padding: "var(--space-7)",
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 92,
      borderRadius: 'var(--radius-lg)',
      background: tint,
      marginBottom: 'var(--space-6)'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-h3)',
      marginBottom: 10
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-body)',
      margin: 0
    }
  }, b))))), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Selected work",
    title: "Projects with",
    quiet: "clarity",
    sub: "A curated collection of brand, web and product design work made for modern teams."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-9)'
    }
  }, PROJECTS.slice(0, 4).map(p => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.title
  }, p, {
    ratio: "16 / 11",
    href: "#case",
    onClick: e => {
      e.preventDefault();
      go('case');
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "arrow-up-right",
    onClick: () => go('projects')
  }, "All projects"))), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--space-6)'
    }
  }, [['Development', 'Responsive, polished pages with clean structure and smooth interactions.'], ['Visual system', 'Clear systems that keep the brand consistent across every touchpoint.'], ['Product design', 'Interfaces and flows that make digital products feel simple and refined.']].map(([t, b]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    tone: "quiet",
    padding: "var(--space-7)"
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--text-h4)',
      marginBottom: 10
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-body)',
      margin: 0
    }
  }, b))))), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Process",
    title: "How the work",
    quiet: "moves",
    align: "center",
    sub: "A collaborative workflow that carries each project from first idea to polished result."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 2,
      marginTop: 'var(--space-9)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden'
    }
  }, [['01', 'Discovery', 'Understanding goals, audience and the direction the project should take.'], ['02', 'Strategy', 'Structure, message and creative approach defined before any visual work.'], ['03', 'Direction', 'Mood, layout ideas and typography shaped into one clear language.'], ['04', 'Delivery', 'Responsive pages, final assets and guidelines prepared for launch.']].map(([n, t, b]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'grid',
      gridTemplateColumns: '72px minmax(0,1fr) minmax(0,1.4fr)',
      gap: 'var(--space-6)',
      alignItems: 'baseline',
      background: 'var(--grey-3)',
      padding: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      color: 'var(--text-faint)'
    }
  }, n), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--text-h4)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-body)',
      margin: 0
    }
  }, b))))), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Testimonials",
    title: "What clients",
    quiet: "say"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: "The direction was clear from the beginning, and the final website captured our brand with precision and confidence.",
    name: "Ethan Brooks",
    role: "Founder"
  }), /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: "Thoughtful, fast and highly organised. Every design decision felt intentional, and the product feels far more polished.",
    name: "Maya Chen",
    role: "Designer"
  }), /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: "A rough idea turned into a refined identity. Clean, strategic, and exactly aligned with where we wanted to go.",
    name: "Liam Carter",
    role: "Director"
  }))), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Pricing",
    title: "Simple packages,",
    quiet: "clear outcomes",
    sub: "Focused engagements for brand, web and launch."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-9)',
      maxWidth: 880,
      marginInline: 'auto'
    }
  }, /*#__PURE__*/React.createElement(PricingCard, {
    name: "Website",
    blurb: "A focused build for brands that need a clean, responsive, launch-ready site.",
    price: "$1,000",
    onSelect: () => go('contact'),
    features: ['Website design & build', 'Responsive page setup', 'CMS structure', 'Launch support']
  }), /*#__PURE__*/React.createElement(PricingCard, {
    featured: true,
    name: "Premium",
    blurb: "A complete package for brands that need strategy, identity and a refined website.",
    price: "$2,400",
    cta: "Book this package",
    onSelect: () => go('contact'),
    features: ['Full website design', 'Brand identity direction', 'Visual guidelines', 'Final asset handoff']
  }))), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,.8fr) minmax(0,1.2fr)',
      gap: 'var(--space-10)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: "FAQ",
    title: "Questions,",
    quiet: "answered"
  }), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: 0,
    items: [{
      q: 'How do I start a project?',
      a: "Send a few details through the contact form. You'll get a clear direction, scope and timeline back within a day."
    }, {
      q: 'How fast will I see designs?',
      a: 'First direction usually lands inside a week; full builds run three to six weeks depending on scope.'
    }, {
      q: 'Do you work with developers?',
      a: 'Often. I hand over documented components and specs, or build the front end myself.'
    }, {
      q: 'What tools do you use?',
      a: 'Figma for design, hand-written HTML/CSS or Framer for build, and whatever analytics you already run.'
    }]
  }))));
}
Object.assign(window, {
  Home,
  Hero,
  PROJECTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Projects.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Tag,
  ProjectCard,
  SectionHeading,
  Marquee
} = window.RefinedByDesignDesignSystem_eafcfd;
function Projects({
  go
}) {
  const [filter, setFilter] = React.useState('all');
  const list = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.tag === filter);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingBottom: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Archive \xB7 2021\u20142024",
    title: "Selected projects,",
    quiet: "with outcomes",
    sub: "Brand, web and product work for founders and creative teams."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 'var(--space-8)'
    }
  }, [['all', 'All projects'], ['brand', 'Brand'], ['web', 'Web'], ['product', 'Product']].map(([v, l]) => /*#__PURE__*/React.createElement(Tag, {
    key: v,
    active: filter === v,
    onClick: () => setFilter(v)
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-9)'
    }
  }, list.map(p => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.title
  }, p, {
    ratio: "16 / 11",
    href: "#case",
    onClick: e => {
      e.preventDefault();
      go('case');
    }
  }))))), /*#__PURE__*/React.createElement(Marquee, {
    tone: "quiet",
    items: ['Brand identity', 'Web design', 'Product design', 'Design systems', 'Front-end build']
  }));
}
Object.assign(window, {
  Projects
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Projects.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.PricingCard = __ds_scope.PricingCard;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

})();
