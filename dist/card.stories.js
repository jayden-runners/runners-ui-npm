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

// stories/card.stories.ts
var card_stories_exports = {};
__export(card_stories_exports, {
  Default: () => Default,
  default: () => card_stories_default
});
module.exports = __toCommonJS(card_stories_exports);

// stories/card.tsx
var import_react = __toESM(require("react"));
var Card = (props) => {
  const { children: children2 } = props;
  return /* @__PURE__ */ import_react.default.createElement("div", { className: "mx-auto w-full max-w-[670px] rounded-4 border border-gray-300 bg-white p-14" }, children2);
};
var card_default = Card;

// stories/card.stories.ts
var meta = {
  title: "Components/Card",
  component: card_default,
  tags: ["autodocs"],
  argTypes: {}
};
var card_stories_default = meta;
var children = "\uC774 \uC548\uC744 \uCC44\uC6B0\uBA74 \uB429\uB2C8\uB2E4";
var Default = {
  args: {
    children
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Default
});
