"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// server.js
var server_exports = {};
__export(server_exports, {
  default: () => server_default
});
module.exports = __toCommonJS(server_exports);
var import_vercel = require("@remix-run/vercel");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react2 = require("@emotion/react"), import_create_instance = __toESM(require("@emotion/server/create-instance")), import_react3 = require("@remix-run/react");

// app/context.tsx
var import_react = require("react"), ServerStyleContext = (0, import_react.createContext)(null), ClientStyleContext = (0, import_react.createContext)(
  null
);

// app/createEmotionCache.ts
var import_cache = __toESM(require("@emotion/cache"));
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/entry.server.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let cache = createEmotionCache(), { extractCriticalToChunks } = (0, import_create_instance.default)(cache), html = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServerStyleContext.Provider, { value: null, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.CacheProvider, { value: cache, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.RemixServer, { context: remixContext, url: request.url }) }) })
  ), chunks = extractCriticalToChunks(html), markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServerStyleContext.Provider, { value: chunks.styles, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.CacheProvider, { value: cache, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.RemixServer, { context: remixContext, url: request.url }) }) })
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var import_react9 = require("@remix-run/react"), import_react10 = require("react"), import_react11 = require("@emotion/react"), import_react12 = require("@chakra-ui/react");

// app/components/ui/Navbar.tsx
var import_react4 = require("@chakra-ui/react"), import_react5 = require("@remix-run/react"), import_jsx_runtime2 = require("react/jsx-runtime"), Navbar = (props) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react4.Box, { bg: "gray.900", w: "100%", h: "56px", as: "header", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  import_react4.Box,
  {
    as: "nav",
    display: "flex",
    justifyContent: "flex-start",
    px: "8",
    alignItems: "center",
    h: "100%",
    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react4.Box, { as: "ul", display: "flex", gap: "22px", listStyleType: "none", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react4.Box, { as: "li", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react5.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react4.Text, { fontSize: "2xl", children: "Open Jira" }) }) }) })
  }
) }), Navbar_default = Navbar;

// app/theme/theme.ts
var import_react6 = require("@chakra-ui/react"), config = {
  initialColorMode: "dark",
  useSystemColorMode: !1
}, theme = (0, import_react6.extendTheme)({ config }), theme_default = theme;

// app/context/entries/EntriesContext.tsx
var import_react7 = require("react"), EntriesContext = (0, import_react7.createContext)({});

// app/context/entries/EntriesProvider.tsx
var import_react8 = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime"), entries_INITIAL_STATE = {
  entries: []
}, EntriesProvider = ({ children }) => {
  let [state, dispatch] = (0, import_react8.useReducer)(entriesReducer, entries_INITIAL_STATE), saveEntriesToState = async (entries) => {
    dispatch({ type: "GET_ENTRIES", payload: entries });
  }, updateEntriesToState = async (entries) => {
    dispatch({ type: "UPDATE_ENTRIES", payload: entries });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    EntriesContext.Provider,
    {
      value: {
        ...state,
        saveEntriesToState,
        updateEntriesToState
      },
      children
    }
  );
};

// app/context/entries/entriesReducer.ts
var entriesReducer = (state, action3) => {
  switch (action3.type) {
    case "GET_ENTRIES":
      return {
        ...state,
        entries: action3.payload
      };
    case "UPDATE_ENTRIES":
      return {
        ...state,
        entries: action3.payload
      };
    default:
      return state;
  }
};

// app/root.tsx
var import_jsx_runtime4 = require("react/jsx-runtime"), meta = () => ({ title: "Jira App" }), Document = (0, import_react11.withEmotionCache)(
  ({ children }, emotionCache) => {
    let serverSyleData = (0, import_react10.useContext)(ServerStyleContext), clientStyleData = (0, import_react10.useContext)(ClientStyleContext);
    return (0, import_react10.useEffect)(() => {
      emotionCache.sheet.container = document.head;
      let tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush(), tags.forEach((tag) => {
        emotionCache.sheet._insertTag(tag);
      }), clientStyleData == null || clientStyleData.reset();
    }, []), /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("html", { lang: "en", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("head", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { charSet: "utf-8" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("link", { rel: "preconnect", href: "https://fonts.gstaticom" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "link",
          {
            href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
            rel: "stylesheet"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react9.Meta, {}),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react9.Links, {}),
        serverSyleData == null ? void 0 : serverSyleData.map(({ key, ids, css }) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "style",
          {
            "data-emotion": `${key} ${ids.join(" ")}`,
            dangerouslySetInnerHTML: { __html: css }
          },
          key
        ))
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("body", { children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react9.ScrollRestoration, {}),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react9.Scripts, {}),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react9.LiveReload, {})
      ] })
    ] });
  }
);
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Document, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(EntriesProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react12.ChakraProvider, { theme: theme_default, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Navbar_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react9.Outlet, {})
  ] }) }) });
}

// app/routes/entry/$id.tsx
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

// app/routes/entry/$id.tsx
var import_jsx_runtime5 = require("react/jsx-runtime"), action = async ({ request, params }) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_react13.Container,
    {
      maxW: "container.xl",
      borderRadius: "8",
      display: "grid",
      placeItems: "center",
      minH: "calc(100vh - 140px)",
      bg: "blackAlpha.600",
      mt: "4",
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
        import_react15.Form,
        {
          method: "post",
          style: {
            backgroundColor: "black",
            borderRadius: "8px",
            padding: "10px",
            minWidth: "50%"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react13.Heading, { children: "Entry Page" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              import_react13.Textarea,
              {
                placeholder: "description",
                my: "4",
                onChange: (e) => setInputDescription(e.target.value),
                name: "description",
                autoComplete: "off",
                value: inputDescription,
                height: "200px"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react14.RadioGroup, { onChange: setStatus, value: status, name: "status", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_react13.Stack, { direction: "row", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react14.Radio, { value: "pending", children: "Pending " }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react14.Radio, { value: "in-progress", children: "In progress" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react14.Radio, { value: "finished", children: "Finished" })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react13.Stack, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react13.Button, { type: "submit", mt: "4", value: "update", name: "_action", children: "Update: Actualizar" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react13.Box, { width: "100%", marginTop: "4", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react15.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              import_react13.Button,
              {
                bg: "red.600",
                type: "submit",
                name: "_action",
                value: "delete",
                width: "100%",
                children: "Delete - Eliminar"
              }
            ) }) })
          ]
        }
      )
    }
  );
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action2,
  default: () => Index,
  loader: () => loader2
});

// app/components/entries/EntryList.tsx
var import_react19 = require("@chakra-ui/react"), import_react20 = require("react");

// app/components/entries/EntryCard.tsx
var import_react17 = require("@chakra-ui/react"), import_react18 = require("@remix-run/react"), import_jsx_runtime6 = require("react/jsx-runtime"), EntryCard = ({ entry: entry2 }) => {
  let fetcher = (0, import_react18.useFetcher)(), navigate = (0, import_react18.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    import_react17.Box,
    {
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
        console.log("drag end :DD"), fetcher.submit(
          { id: entry2.id, status: entry2.status },
          {
            method: "post",
            action: "?index"
          }
        );
      },
      mb: "2",
      onClick: () => {
        navigate(`/entry/${entry2.id}`);
      },
      children: entry2.description
    }
  ) });
}, EntryCard_default = EntryCard;

// app/components/entries/EntryList.tsx
var import_react21 = require("@remix-run/react"), import_jsx_runtime7 = require("react/jsx-runtime"), EntryList = ({ status, msg }) => {
  let { entries, updateEntriesToState } = (0, import_react20.useContext)(EntriesContext), [buttonAdd, setButtonAdd] = (0, import_react20.useState)(!1), formRef = (0, import_react20.useRef)(null), transition = (0, import_react21.useTransition)(), fetcher = (0, import_react21.useFetcher)(), handleDrop = (e) => {
    let id = e.dataTransfer.getData("text/plain"), entry2 = entries.find((entry3) => entry3.id === id), copyEntries = [...entries], entriesUpdated = entries.map((entr) => entr.id !== id ? entr : {
      ...entr,
      status
    });
    updateEntriesToState(entriesUpdated);
    try {
      fetcher.submit(
        {
          id: entry2.id,
          status,
          _action: "update"
        },
        {
          method: "post",
          action: "?index"
        }
      );
    } catch {
      updateEntriesToState(copyEntries);
    }
  }, filteredEntries = entries.filter((entry2) => entry2.status === status), isAdding = transition.state === "submitting" && transition.submission.formData.get("_action") === "create";
  return (0, import_react20.useEffect)(() => {
    var _a;
    isAdding || (_a = formRef.current) == null || _a.reset();
  }, [isAdding]), /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    import_react19.Box,
    {
      as: "section",
      bg: "blackAlpha.600",
      minH: "calc(100vh - 110px)",
      borderRadius: "8px",
      px: "2",
      py: "2",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react19.Heading, { m: "4", children: status }),
        !buttonAdd && status === "pending" && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react19.Stack, { spacing: 3, px: "2", py: "2", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react19.Button, { onClick: () => setButtonAdd(!0), children: "Agregar Entrada" }) }),
        buttonAdd && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react21.Form, { ref: formRef, method: "post", onSubmit: async (e) => {
          setButtonAdd(!0);
          let newEntry = {
            description: new FormData(e.currentTarget).get("description"),
            status,
            id: "",
            createdAt: (/* @__PURE__ */ new Date()).toISOString()
          }, updatedEntries = [...entries, newEntry];
          updateEntriesToState(updatedEntries);
        }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react19.Stack, { spacing: 3, px: "2", py: "2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_react19.Input,
            {
              placeholder: "Agregar Entrada",
              name: "description",
              autoComplete: "off"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react19.Text, { color: "red.500", children: msg }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react19.Button, { type: "submit", name: "_action", value: "create", children: "Agregar Entrada" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("section", { onDrop: handleDrop, onDragOver: (e) => e.preventDefault(), children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          import_react19.Box,
          {
            bg: "gray.900",
            minH: "calc(100vh - 200px)",
            overflowY: "scroll",
            px: "2",
            py: "2",
            children: filteredEntries.map((entry2) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(EntryCard_default, { entry: entry2 }, entry2.id))
          }
        ) })
      ]
    }
  );
}, EntryList_default = EntryList;

// app/routes/index.tsx
var import_react22 = require("@chakra-ui/react"), import_react23 = require("@remix-run/react");
var import_react24 = require("react"), import_jsx_runtime8 = require("react/jsx-runtime"), action2 = async ({ request }) => {
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
}, loader2 = async () => {
  try {
    return await prisma.entry.findMany({
      orderBy: { createdAt: "desc" }
    });
  } catch (error) {
    throw console.error("LOADER ERROR:", error.message, error.stack), new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
function Index() {
  let entries = (0, import_react23.useLoaderData)(), { saveEntriesToState } = (0, import_react24.useContext)(EntriesContext), actionData = (0, import_react23.useActionData)();
  return (0, import_react24.useEffect)(() => {
    saveEntriesToState(entries);
  }, [entries]), /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    import_react22.Grid,
    {
      templateColumns: {
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)"
      },
      gap: 6,
      p: "4",
      as: "section",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(EntryList_default, { status: "pending", msg: actionData == null ? void 0 : actionData.msg }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(EntryList_default, { status: "in-progress" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(EntryList_default, { status: "finished" })
      ]
    }
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-WJE7ITB7.js", imports: ["/build/_shared/chunk-4J24WAFR.js", "/build/_shared/chunk-CF3YLSRY.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-TVQFDQVI.js", imports: ["/build/_shared/chunk-574RFZ44.js", "/build/_shared/chunk-I52G2HSQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/entry/$id": { id: "routes/entry/$id", parentId: "root", path: "entry/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/entry/$id-QTXH6HJ3.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-4U4Z3UTK.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "285f3547", hmr: void 0, url: "/build/manifest-285F3547.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
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
