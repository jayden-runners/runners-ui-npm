"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// stories/button.tsx
var button_exports = {};
__export(button_exports, {
  default: () => button_default
});
module.exports = __toCommonJS(button_exports);
var import_class_variance_authority = require("class-variance-authority");
var import_react = __toESM(require("react"));

// app/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
var twMerge = (0, import_tailwind_merge.extendTailwindMerge)({
  extend: {
    classGroups: {
      "font-size": [{ text: ["12", "14", "16", "18", "20", "24", "28", "34"] }]
    }
  }
});
function cn(...inputs) {
  return twMerge((0, import_clsx.clsx)(inputs));
}

// stories/button.tsx
var buttonVariants = (0, import_class_variance_authority.cva)(
  "rounded-1 px-2.5 font-bold transition-colors duration-200 ease-in-out disabled:cursor-not-allowed",
  {
    variants: {
      color: {
        gray: "bg-gray-100 text-[#555] disabled:bg-gray-400",
        dark: "bg-[#555] text-white disabled:bg-gray-400",
        primary: "bg-primary text-white disabled:bg-gray-400"
      },
      outlineColor: {
        gray: "border border-gray-500 bg-white text-gray-500 disabled:border-gray-400 disabled:text-gray-400",
        dark: "border border-gray-500 bg-white text-gray-500 disabled:border-gray-400 disabled:text-gray-400",
        primary: "border border-primary bg-white text-primary disabled:border-gray-400 disabled:text-gray-400"
      },
      size: {
        "56": "h-[56px] py-4 text-16",
        "48": "h-12 py-[14px] text-14",
        "40": "h-10 py-2.5 text-14",
        "36": "h-9 py-2 text-14",
        "32": "h-8 py-1.5 text-14",
        "30": "h-[30px] py-1.5 text-12"
      }
    }
  }
);
var Button = import_react.default.forwardRef(
  ({
    children,
    size = "40",
    color = "primary",
    outline = false,
    className,
    ...props
  }, ref) => {
    return /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        ref,
        className: cn(
          buttonVariants({
            size,
            ...outline ? { outlineColor: color } : { color }
          }),
          className
        ),
        ...props
      },
      children
    );
  }
);
Button.displayName = "Button";
var button_default = Button;
