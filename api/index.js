var __create = Object.create;
var __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropNames = Object.getOwnPropertyNames, __getOwnPropSymbols = Object.getOwnPropertySymbols, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value, __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b))
      __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  return a;
}, __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b)), __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// server.js
var server_exports = {};
__export(server_exports, {
  default: () => server_default
});

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// server.js
var import_vercel = require("@remix-run/vercel");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react2 = require("@emotion/react"), import_create_instance = __toESM(require("@emotion/server/create-instance")), import_react3 = require("@remix-run/react");

// app/context.tsx
var import_react = require("react"), ServerStyleContext = (0, import_react.createContext)(null), ClientStyleContext = (0, import_react.createContext)(null);

// app/createEmotionCache.ts
var import_cache = __toESM(require("@emotion/cache"));
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/entry.server.tsx
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let cache = createEmotionCache(), { extractCriticalToChunks } = (0, import_create_instance.default)(cache), html = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(ServerStyleContext.Provider, {
    value: null
  }, /* @__PURE__ */ React.createElement(import_react2.CacheProvider, {
    value: cache
  }, /* @__PURE__ */ React.createElement(import_react3.RemixServer, {
    context: remixContext,
    url: request.url
  })))), chunks = extractCriticalToChunks(html), markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(ServerStyleContext.Provider, {
    value: chunks.styles
  }, /* @__PURE__ */ React.createElement(import_react2.CacheProvider, {
    value: cache
  }, /* @__PURE__ */ React.createElement(import_react3.RemixServer, {
    context: remixContext,
    url: request.url
  }))));
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/home/clawd/jira-remix-app/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var import_react9 = require("@remix-run/react"), import_react10 = require("react"), import_react11 = require("@emotion/react"), import_react12 = require("@chakra-ui/react");

// app/components/ui/Navbar.tsx
var import_react4 = require("@chakra-ui/react"), import_react5 = require("@remix-run/react"), Navbar = (props) => /* @__PURE__ */ React.createElement(import_react4.Box, {
  bg: "gray.900",
  w: "100%",
  h: "56px",
  as: "header"
}, /* @__PURE__ */ React.createElement(import_react4.Box, {
  as: "nav",
  display: "flex",
  justifyContent: "flex-start",
  px: "8",
  alignItems: "center",
  h: "100%"
}, /* @__PURE__ */ React.createElement(import_react4.Box, {
  as: "ul",
  display: "flex",
  gap: "22px",
  listStyleType: "none"
}, /* @__PURE__ */ React.createElement(import_react4.Box, {
  as: "li"
}, /* @__PURE__ */ React.createElement(import_react5.Link, {
  to: "/"
}, /* @__PURE__ */ React.createElement(import_react4.Text, {
  fontSize: "2xl"
}, "Open Jira")))))), Navbar_default = Navbar;

// app/theme/theme.ts
var import_react6 = require("@chakra-ui/react"), config = {
  initialColorMode: "dark",
  useSystemColorMode: !1
}, theme = (0, import_react6.extendTheme)({ config }), theme_default = theme;

// app/context/entries/EntriesContext.tsx
var import_react7 = require("react"), EntriesContext = (0, import_react7.createContext)({});

// app/context/entries/EntriesProvider.tsx
var import_react8 = require("react");
var entries_INITIAL_STATE = {
  entries: []
}, EntriesProvider = ({ children }) => {
  let [state, dispatch] = (0, import_react8.useReducer)(entriesReducer, entries_INITIAL_STATE), saveEntriesToState = async (entries) => {
    dispatch({ type: "GET_ENTRIES", payload: entries });
  }, updateEntriesToState = async (entries) => {
    dispatch({ type: "UPDATE_ENTRIES", payload: entries });
  };
  return /* @__PURE__ */ React.createElement(EntriesContext.Provider, {
    value: __spreadProps(__spreadValues({}, state), {
      saveEntriesToState,
      updateEntriesToState
    })
  }, children);
};

// app/context/entries/entriesReducer.ts
var entriesReducer = (state, action3) => {
  switch (action3.type) {
    case "GET_ENTRIES":
      return __spreadProps(__spreadValues({}, state), {
        entries: action3.payload
      });
    case "UPDATE_ENTRIES":
      return __spreadProps(__spreadValues({}, state), {
        entries: action3.payload
      });
    default:
      return state;
  }
};

// route:/home/clawd/jira-remix-app/app/root.tsx
var meta = () => ({ title: "Jira App" }), Document = (0, import_react11.withEmotionCache)(({ children }, emotionCache) => {
  let serverSyleData = (0, import_react10.useContext)(ServerStyleContext), clientStyleData = (0, import_react10.useContext)(ClientStyleContext);
  return (0, import_react10.useEffect)(() => {
    emotionCache.sheet.container = document.head;
    let tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush(), tags.forEach((tag) => {
      emotionCache.sheet._insertTag(tag);
    }), clientStyleData == null || clientStyleData.reset();
  }, []), /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.gstaticom"
  }), /* @__PURE__ */ React.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
    rel: "stylesheet"
  }), /* @__PURE__ */ React.createElement(import_react9.Meta, null), /* @__PURE__ */ React.createElement(import_react9.Links, null), serverSyleData == null ? void 0 : serverSyleData.map(({ key, ids, css }) => /* @__PURE__ */ React.createElement("style", {
    key,
    "data-emotion": `${key} ${ids.join(" ")}`,
    dangerouslySetInnerHTML: { __html: css }
  }))), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_react9.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react9.Scripts, null), /* @__PURE__ */ React.createElement(import_react9.LiveReload, null)));
});
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(EntriesProvider, null, /* @__PURE__ */ React.createElement(import_react12.ChakraProvider, {
    theme: theme_default
  }, /* @__PURE__ */ React.createElement(Navbar_default, null), /* @__PURE__ */ React.createElement(import_react9.Outlet, null))));
}

// route:/home/clawd/jira-remix-app/app/routes/entry/$id.tsx
var id_exports = {};
__export(id_exports, {
  action: () => action,
  default: () => EntryPage,
  loader: () => loader
});
var import_react13 = require("@chakra-ui/react"), import_react14 = require("@chakra-ui/react"), import_node = require("@remix-run/node"), import_react15 = require("@remix-run/react"), import_react16 = require("react");

// app/utils/db.ts
var import_client = require("@prisma/client"), prisma;
prisma = new import_client.PrismaClient();

// route:/home/clawd/jira-remix-app/app/routes/entry/$id.tsx
var action = async ({ request, params }) => {
  let formData = await request.formData(), _action = formData.get("_action");
  if (_action === "update") {
    let { id } = params, status = formData.get("status"), description = formData.get("description");
    if (description.length === 0)
      return {
        msg: "Description is required"
      };
    await prisma.entry.update({
      where: { id },
      data: {
        status,
        description: description.trim()
      }
    });
  }
  if (_action === "delete") {
    let { id } = params;
    await prisma.entry.delete({
      where: { id }
    });
  }
  return (0, import_node.redirect)("/");
}, loader = async ({ params }) => {
  let { id } = params;
  return { entry: await prisma.entry.findUnique({
    where: { id }
  }) };
};
function EntryPage() {
  let { entry: entry2 } = (0, import_react15.useLoaderData)(), [status, setStatus] = (0, import_react16.useState)(entry2.status), [inputDescription, setInputDescription] = (0, import_react16.useState)(entry2.description);
  return /* @__PURE__ */ React.createElement(import_react13.Container, {
    maxW: "container.xl",
    borderRadius: "8",
    display: "grid",
    placeItems: "center",
    minH: "calc(100vh - 140px)",
    bg: "blackAlpha.600",
    mt: "4"
  }, /* @__PURE__ */ React.createElement(import_react15.Form, {
    method: "post",
    style: {
      backgroundColor: "black",
      borderRadius: "8px",
      padding: "10px",
      minWidth: "50%"
    }
  }, /* @__PURE__ */ React.createElement(import_react13.Heading, null, "Entry Page"), /* @__PURE__ */ React.createElement(import_react13.Textarea, {
    placeholder: "description",
    my: "4",
    onChange: (e) => setInputDescription(e.target.value),
    name: "description",
    autoComplete: "off",
    value: inputDescription,
    height: "200px"
  }), /* @__PURE__ */ React.createElement(import_react14.RadioGroup, {
    onChange: setStatus,
    value: status,
    name: "status"
  }, /* @__PURE__ */ React.createElement(import_react13.Stack, {
    direction: "row"
  }, /* @__PURE__ */ React.createElement(import_react14.Radio, {
    value: "pending"
  }, "Pending "), /* @__PURE__ */ React.createElement(import_react14.Radio, {
    value: "in-progress"
  }, "In progress"), /* @__PURE__ */ React.createElement(import_react14.Radio, {
    value: "finished"
  }, "Finished"))), /* @__PURE__ */ React.createElement(import_react13.Stack, null, /* @__PURE__ */ React.createElement(import_react13.Button, {
    type: "submit",
    mt: "4",
    value: "update",
    name: "_action"
  }, "Update: Actualizar")), /* @__PURE__ */ React.createElement(import_react13.Box, {
    width: "100%",
    marginTop: "4"
  }, /* @__PURE__ */ React.createElement(import_react15.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement(import_react13.Button, {
    bg: "red.600",
    type: "submit",
    name: "_action",
    value: "delete",
    width: "100%"
  }, "Delete - Eliminar")))));
}

// route:/home/clawd/jira-remix-app/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action2,
  default: () => Index,
  loader: () => loader2
});

// app/components/entries/EntryList.tsx
var import_react19 = require("@chakra-ui/react"), import_react20 = require("react");

// app/components/entries/EntryCard.tsx
var import_react17 = require("@chakra-ui/react"), import_react18 = require("@remix-run/react"), EntryCard = ({ entry: entry2 }) => {
  let fetcher = (0, import_react18.useFetcher)(), navigate = (0, import_react18.useNavigate)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react17.Box, {
    bg: "blackAlpha.600",
    p: "4",
    minH: 110,
    draggable: !0,
    cursor: "pointer",
    borderRadius: 4,
    onDragStart: (e) => {
      e.dataTransfer.setData("text/plain", entry2.id);
    },
    onDragEnd: (e) => {
      console.log("drag end :DD"), fetcher.submit({ id: entry2.id, status: entry2.status }, {
        method: "post",
        action: "?index"
      });
    },
    mb: "2",
    onClick: () => {
      navigate(`/entry/${entry2.id}`);
    }
  }, entry2.description));
}, EntryCard_default = EntryCard;

// app/components/entries/EntryList.tsx
var import_react21 = require("@remix-run/react"), EntryList = ({ status, msg }) => {
  let { entries, updateEntriesToState } = (0, import_react20.useContext)(EntriesContext), [buttonAdd, setButtonAdd] = (0, import_react20.useState)(!1), formRef = (0, import_react20.useRef)(null), transition = (0, import_react21.useTransition)(), fetcher = (0, import_react21.useFetcher)(), handleDrop = (e) => {
    let id = e.dataTransfer.getData("text/plain"), entry2 = entries.find((entry3) => entry3.id === id), copyEntries = [...entries], entriesUpdated = entries.map((entr) => entr.id !== id ? entr : __spreadProps(__spreadValues({}, entr), {
      status
    }));
    updateEntriesToState(entriesUpdated);
    try {
      fetcher.submit({
        id: entry2.id,
        status,
        _action: "update"
      }, {
        method: "post",
        action: "?index"
      });
    } catch {
      updateEntriesToState(copyEntries);
    }
  }, filteredEntries = entries.filter((entry2) => entry2.status === status), isAdding = transition.state === "submitting" && transition.submission.formData.get("_action") === "create";
  return (0, import_react20.useEffect)(() => {
    var _a;
    isAdding || (_a = formRef.current) == null || _a.reset();
  }, [isAdding]), /* @__PURE__ */ React.createElement(import_react19.Box, {
    as: "section",
    bg: "blackAlpha.600",
    minH: "calc(100vh - 110px)",
    borderRadius: "8px",
    px: "2",
    py: "2"
  }, /* @__PURE__ */ React.createElement(import_react19.Heading, {
    m: "4"
  }, status), !buttonAdd && status === "pending" && /* @__PURE__ */ React.createElement(import_react19.Stack, {
    spacing: 3,
    px: "2",
    py: "2"
  }, /* @__PURE__ */ React.createElement(import_react19.Button, {
    onClick: () => setButtonAdd(!0)
  }, "Agregar Entrada")), buttonAdd && /* @__PURE__ */ React.createElement(import_react21.Form, {
    ref: formRef,
    method: "post",
    onSubmit: async (e) => {
      setButtonAdd(!0);
      let newEntry = {
        description: new FormData(e.currentTarget).get("description"),
        status,
        id: "",
        createdAt: new Date().toISOString()
      }, updatedEntries = [...entries, newEntry];
      updateEntriesToState(updatedEntries);
    }
  }, /* @__PURE__ */ React.createElement(import_react19.Stack, {
    spacing: 3,
    px: "2",
    py: "2"
  }, /* @__PURE__ */ React.createElement(import_react19.Input, {
    placeholder: "Agregar Entrada",
    name: "description",
    autoComplete: "off"
  }), /* @__PURE__ */ React.createElement(import_react19.Text, {
    color: "red.500"
  }, msg), /* @__PURE__ */ React.createElement(import_react19.Button, {
    type: "submit",
    name: "_action",
    value: "create"
  }, "Agregar Entrada"))), /* @__PURE__ */ React.createElement("section", {
    onDrop: handleDrop,
    onDragOver: (e) => e.preventDefault()
  }, /* @__PURE__ */ React.createElement(import_react19.Box, {
    bg: "gray.900",
    minH: "calc(100vh - 200px)",
    overflowY: "scroll",
    px: "2",
    py: "2"
  }, filteredEntries.map((entry2) => /* @__PURE__ */ React.createElement(EntryCard_default, {
    key: entry2.id,
    entry: entry2
  })))));
}, EntryList_default = EntryList;

// route:/home/clawd/jira-remix-app/app/routes/index.tsx
var import_react22 = require("@chakra-ui/react"), import_react23 = require("@remix-run/react");
var import_react24 = require("react"), action2 = async ({ request }) => {
  let formData = await request.formData(), _action = formData.get("_action");
  if (_action === "create") {
    let description = formData.get("description");
    if (description.length === 0)
      return {
        msg: "the name is required"
      };
    await prisma.entry.create({
      data: { description }
    });
  }
  if (_action === "update") {
    let id = formData.get("id"), status = formData.get("status");
    await prisma.entry.update({
      where: { id },
      data: { status }
    });
  }
  return {
    status: "ok",
    msg: "Action executed"
  };
}, loader2 = async () => await prisma.entry.findMany({
  orderBy: { createdAt: "desc" }
});
function Index() {
  let entries = (0, import_react23.useLoaderData)(), { saveEntriesToState } = (0, import_react24.useContext)(EntriesContext), actionData = (0, import_react23.useActionData)();
  return (0, import_react24.useEffect)(() => {
    saveEntriesToState(entries);
  }, [entries]), /* @__PURE__ */ React.createElement(import_react22.Grid, {
    templateColumns: {
      base: "1fr",
      md: "repeat(2, 1fr)",
      lg: "repeat(3, 1fr)"
    },
    gap: 6,
    p: "4",
    as: "section"
  }, /* @__PURE__ */ React.createElement(EntryList_default, {
    status: "pending",
    msg: actionData == null ? void 0 : actionData.msg
  }), /* @__PURE__ */ React.createElement(EntryList_default, {
    status: "in-progress"
  }), /* @__PURE__ */ React.createElement(EntryList_default, {
    status: "finished"
  }));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "e6a4b660", entry: { module: "/build/entry.client-3RMC6TVC.js", imports: ["/build/_shared/chunk-LKFKQSN7.js", "/build/_shared/chunk-RVINGQAH.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-DE3OQ5AI.js", imports: ["/build/_shared/chunk-NZKKDZJD.js", "/build/_shared/chunk-YQ36V3FN.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/entry/$id": { id: "routes/entry/$id", parentId: "root", path: "entry/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/entry/$id-SY66O4SG.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-VJIGZNOD.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-E6A4B660.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/entry/$id": {
    id: "routes/entry/$id",
    parentId: "root",
    path: "entry/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
var server_default = (0, import_vercel.createRequestHandler)({ build: server_build_exports, mode: "production" });
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
