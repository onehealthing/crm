(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/page-admin-clients"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/fields/FieldInput.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/fields/FieldInput.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/functions */ "./resources/js/functions/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: [String, Number],
      required: true
    },
    label: {
      type: String,
      "default": ''
    },
    value: {
      "default": ''
    },
    type: {
      type: String,
      "default": 'text'
    },
    rules: {
      type: String,
      "default": ''
    },
    showLabel: {
      type: Boolean,
      "default": true
    },
    showError: {
      type: Boolean,
      "default": true
    }
  },
  setup: function setup(props) {
    var _useInput = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.useInput)({
      props: props
    }),
        inputValue = _useInput.value,
        validationClass = _useInput.validationClass,
        error = _useInput.error;

    return {
      validationClass: validationClass,
      inputValue: inputValue,
      error: error
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pagination/PaginationBase.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pagination/PaginationBase.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(props, _ref) {
    var emit = _ref.emit;

    var _toRefs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)((0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('paginator')),
        totalPages = _toRefs.totalPages,
        currPage = _toRefs.currPage,
        url = _toRefs.url;

    var paginator = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      isOnFirstPage: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
        return currPage.value <= 1;
      }),
      isOnLastPage: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
        return currPage.value >= totalPages.value;
      }),
      isNeeded: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
        return totalPages.value > 1;
      }),
      totalPages: totalPages
    });

    var canGo = function canGo(page) {
      return !(isOnSamePage(page) || page < 1 || page > totalPages.value);
    };

    var isOnSamePage = function isOnSamePage(page) {
      return currPage.value == page;
    };

    var go = function go(page) {
      if (!canGo(page)) return;
      emit('onPageSelected', "".concat(url.value, "?page=").concat(page));
    };

    var prev = function prev() {
      go(currPage.value - 1);
    };

    var next = function next() {
      go(currPage.value + 1);
    };

    return _objectSpread(_objectSpread({}, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(paginator)), {}, {
      isOnSamePage: isOnSamePage,
      prev: prev,
      next: next,
      go: go
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/preloaders/PreloaderBase.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/preloaders/PreloaderBase.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    id: {
      required: true,
      type: String
    },
    options: {
      type: Object,
      "default": {
        styles: {},
        "class": ''
      }
    }
  },
  setup: function setup() {
    var _inject = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('preloader'),
        isActive = _inject.isActive;

    return {
      isActive: isActive
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/preloaders/PreloaderBlur.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/preloaders/PreloaderBlur.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    id: {
      required: true,
      type: String
    }
  },
  setup: function setup() {
    var _inject = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('preloader'),
        isActive = _inject.isActive;

    return {
      isActive: isActive
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/tables/TableBase.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/tables/TableBase.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    titles: {
      required: true,
      type: Array
    },
    rows: {
      required: true,
      type: Array
    },
    emptyDataText: {
      type: String,
      "default": 'Empty'
    }
  },
  setup: function setup(props) {
    var isRowsExists = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return _.size(props.rows) > 0;
    });
    return {
      isRowsExists: isRowsExists
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/pages/PageBase.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/pages/PageBase.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    title: {
      required: true,
      type: String
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/admin/PageClients.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/admin/PageClients.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/layouts/pages */ "./resources/js/layouts/pages/index.js");
/* harmony import */ var _components_preloaders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/preloaders */ "./resources/js/components/preloaders/index.js");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/pagination */ "./resources/js/components/pagination/index.js");
/* harmony import */ var _components_fields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/fields */ "./resources/js/components/fields/index.js");
/* harmony import */ var _components_tables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/tables */ "./resources/js/components/tables/index.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/functions */ "./resources/js/functions/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _api_v1_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/v1/http */ "./resources/js/api/v1/http.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










var PRELOADER_CLIENT_ACTION = function PRELOADER_CLIENT_ACTION(id) {
  return "on-row-action-".concat(id);
};

var PRELOADER_CLIENTS_LIST = 'clients-list';
var PRELOADER_CLIENTS_ALL = 'clients-all';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    'app-page': _layouts_pages__WEBPACK_IMPORTED_MODULE_1__.Page,
    'app-pagination': _components_pagination__WEBPACK_IMPORTED_MODULE_3__.Pagination,
    'app-preloader-blur': _components_preloaders__WEBPACK_IMPORTED_MODULE_2__.Blur,
    'app-preloader': _components_preloaders__WEBPACK_IMPORTED_MODULE_2__.Preloader,
    'app-field-input': _components_fields__WEBPACK_IMPORTED_MODULE_4__.Input,
    'app-table': _components_tables__WEBPACK_IMPORTED_MODULE_5__.Table
  },
  setup: function setup() {
    var clients = (0,vue__WEBPACK_IMPORTED_MODULE_7__.ref)([]);

    var _useTable = (0,_functions__WEBPACK_IMPORTED_MODULE_6__.useTable)({
      titles: ['#', 'Name', 'Actions'],
      rows: clients
    }),
        titles = _useTable.titles,
        rowId = _useTable.rowId,
        rows = _useTable.rows,
        deleteRow = _useTable.deleteRow;

    var _usePreloader = (0,_functions__WEBPACK_IMPORTED_MODULE_6__.usePreloader)(),
        showPreloader = _usePreloader.push,
        hidePreloader = _usePreloader.hide;

    var _useScroll = (0,_functions__WEBPACK_IMPORTED_MODULE_6__.useScroll)(),
        scrollRef = _useScroll.scrollRef,
        handleScroll = _useScroll.handleScroll;

    var _usePaginator = (0,_functions__WEBPACK_IMPORTED_MODULE_6__.usePaginator)(),
        init = _usePaginator.init;

    var paginateClients = function paginateClients(url) {
      fetchClients(url, PRELOADER_CLIENTS_LIST)["finally"](function () {
        handleScroll();
      });
    };

    var fetchAllClients = function fetchAllClients(preloader) {
      return new Promise( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(resolve) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return fetchClients('clients', preloader);

                case 2:
                  resolve();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    };

    var fetchClients = function fetchClients(url, preloader) {
      return new Promise(function (resolve) {
        showPreloader(preloader);
        _api_v1_http__WEBPACK_IMPORTED_MODULE_8__.default.get(url).then(function (_ref2) {
          var data = _ref2.data;
          clients.value = data.data;
          init(_objectSpread({
            url: url
          }, data.pagination));
          resolve();
        })["finally"](function () {
          hidePreloader(preloader);
        });
      });
    };

    var deleteClient = function deleteClient(clientId, rowId) {
      showPreloader(PRELOADER_CLIENT_ACTION(rowId));
      _api_v1_http__WEBPACK_IMPORTED_MODULE_8__.default.delete("clients/".concat(clientId)).then(function () {
        deleteRow(rowId);
      })["finally"](function () {
        hidePreloader(PRELOADER_CLIENT_ACTION(rowId));
      });
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_7__.onBeforeMount)(function () {
      fetchAllClients(PRELOADER_CLIENTS_ALL);
    });
    return {
      PRELOADER_CLIENT_ACTION: PRELOADER_CLIENT_ACTION,
      PRELOADER_CLIENTS_LIST: PRELOADER_CLIENTS_LIST,
      PRELOADER_CLIENTS_ALL: PRELOADER_CLIENTS_ALL,
      scrollRef: scrollRef,
      titles: titles,
      rowId: rowId,
      rows: rows,
      paginateClients: paginateClients,
      deleteClient: deleteClient
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/fields/FieldInput.vue?vue&type=template&id=c28d832a":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/fields/FieldInput.vue?vue&type=template&id=c28d832a ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "invalid-feedback"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [$props.showLabel ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "label", {
    key: 0,
    id: $props.id,
    title: $props.label
  }, function () {
    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
      "for": $props.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label), 9
    /* TEXT, PROPS */
    , ["for"])];
  }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.inputValue = $event;
    })
  }, _ctx.$attrs, {
    type: $props.type,
    name: $props.name,
    id: $props.id,
    "class": $setup.validationClass
  }), null, 16
  /* FULL_PROPS */
  , ["type", "name", "id"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic, $setup.inputValue]]), $props.showError ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "error", {
    key: 1,
    message: $setup.error
  }, function () {
    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.error), 1
    /* TEXT */
    )];
  }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pagination/PaginationBase.vue?vue&type=template&id=fcdfb5f6":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pagination/PaginationBase.vue?vue&type=template&id=fcdfb5f6 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "pagination justify-content-center m-0"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "aria-label": "Previous",
  role: "button",
  "class": "page-link"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "aria-hidden": "true"
}, "«")], -1
/* HOISTED */
);

var _hoisted_3 = {
  role: "button",
  "class": "page-link"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "aria-label": "Next",
  role: "button",
  "class": "page-link"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "aria-hidden": "true"
}, "»")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.isNeeded ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("nav", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    key: 0
  }, _ctx.$attrs), [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", _hoisted_1, [!_ctx.isOnFirstPage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("li", {
    key: 0,
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.prev();
    }),
    "class": "page-item"
  }, [_hoisted_2])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.totalPages, function (page) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("li", {
      key: page,
      "class": ["page-item", {
        'active': $setup.isOnSamePage(page)
      }],
      onClick: function onClick($event) {
        return $setup.go(page);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(page), 1
    /* TEXT */
    )], 10
    /* CLASS, PROPS */
    , ["onClick"]);
  }), 128
  /* KEYED_FRAGMENT */
  )), !_ctx.isOnLastPage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("li", {
    key: 1,
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.next();
    }),
    "class": "page-item"
  }, [_hoisted_4])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 16
  /* FULL_PROPS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/preloaders/PreloaderBase.vue?vue&type=template&id=06bdbd40&functional=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/preloaders/PreloaderBase.vue?vue&type=template&id=06bdbd40&functional=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "spinner-border",
  role: "status"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.isActive($props.id) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
    key: 0,
    "class": ["d-flex align-items-center justify-content-center", $props.options["class"]],
    style: $props.options.styles
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "preloader", {}, function () {
    return [_hoisted_1];
  })], 6
  /* CLASS, STYLE */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {
    key: 1
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/preloaders/PreloaderBlur.vue?vue&type=template&id=50c32bd6&functional=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/preloaders/PreloaderBlur.vue?vue&type=template&id=50c32bd6&functional=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "preloader-wrap"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "spinner-border",
  role: "status"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    "class": "preloader-container"
  }, _ctx.$attrs), [$setup.isActive($props.id) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [_hoisted_2])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": {
      'preloader-blur': $setup.isActive($props.id)
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 2
  /* CLASS */
  )], 16
  /* FULL_PROPS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/tables/TableBase.vue?vue&type=template&id=e8c13780":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/tables/TableBase.vue?vue&type=template&id=e8c13780 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "table table-bordered table-hover table-cursor table-content-centered table-striped m-0"
};
var _hoisted_2 = {
  scope: "col",
  "class": "text-center"
};
var _hoisted_3 = {
  "class": "text-center my-5"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.isRowsExists ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    key: 0,
    "class": "table-responsive"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(_ctx.$attrs)), [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("table", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.titles, function (title) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "title", {
      key: title,
      title: title
    }, function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(title), 1
      /* TEXT */
      )];
    });
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "thead-additional")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.rows, function (row, idx) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "row", {
      key: idx,
      row: row,
      idx: idx
    });
  }), 128
  /* KEYED_FRAGMENT */
  ))])])], 16
  /* FULL_PROPS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "empty-data-text", {
    key: 1,
    text: $props.emptyDataText
  }, function () {
    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.emptyDataText), 1
    /* TEXT */
    )];
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/pages/PageBase.vue?vue&type=template&id=ef197862&functional=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/pages/PageBase.vue?vue&type=template&id=ef197862&functional=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "content-wrap"
};
var _hoisted_2 = {
  "class": "container"
};
var _hoisted_3 = {
  "class": "row"
};
var _hoisted_4 = {
  "class": "col-sm-12"
};
var _hoisted_5 = {
  "class": "text-center mb-5"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/admin/PageClients.vue?vue&type=template&id=47f40b00":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/admin/PageClients.vue?vue&type=template&id=47f40b00 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  href: "#",
  "class": "btn btn-primary mb-2"
}, "Create", -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "text-center"
};
var _hoisted_3 = {
  style: {
    "width": "275px"
  }
};
var _hoisted_4 = {
  "class": "d-flex align-items-center justify-content-center"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  href: "#",
  "class": "btn btn-secondary mx-1"
}, "Edit ", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_preloader_blur = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("app-preloader-blur");

  var _component_app_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("app-table");

  var _component_app_preloader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("app-preloader");

  var _component_app_pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("app-pagination");

  var _component_app_page = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("app-page");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_app_page, {
    title: 'Clients'
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_preloader, {
        id: $setup.PRELOADER_CLIENTS_ALL,
        options: {
          styles: {
            'height': '400px'
          },
          "class": 'preloader-placeholder'
        }
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_preloader_blur, {
            id: $setup.PRELOADER_CLIENTS_LIST
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_table, {
                ref: "scrollRef",
                "class": "mb-5",
                titles: $setup.titles,
                rows: $setup.rows
              }, {
                row: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
                  var client = _ref.row,
                      idx = _ref.idx;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(idx + 1), 1
                  /* TEXT */
                  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(client.name), 1
                  /* TEXT */
                  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_preloader_blur, {
                    id: $setup.PRELOADER_CLIENT_ACTION(idx)
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
                        type: "button",
                        "class": "btn btn-danger mx-1",
                        onClick: function onClick($event) {
                          return $setup.deleteClient(client.id, idx);
                        }
                      }, "Delete ", 8
                      /* PROPS */
                      , ["onClick"])])];
                    }),
                    _: 2
                    /* DYNAMIC */

                  }, 1032
                  /* PROPS, DYNAMIC_SLOTS */
                  , ["id"])])])];
                }),
                _: 1
                /* STABLE */

              }, 8
              /* PROPS */
              , ["titles", "rows"])];
            }),
            _: 1
            /* STABLE */

          }, 8
          /* PROPS */
          , ["id"])];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["id"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_pagination, {
        onOnPageSelected: $setup.paginateClients,
        "class": "my-5"
      }, null, 8
      /* PROPS */
      , ["onOnPageSelected"])];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./resources/js/components/fields/index.js":
/*!*************************************************!*\
  !*** ./resources/js/components/fields/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Input": () => (/* reexport safe */ _FieldInput__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _FieldInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FieldInput */ "./resources/js/components/fields/FieldInput.vue");


/***/ }),

/***/ "./resources/js/components/pagination/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/pagination/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pagination": () => (/* reexport safe */ _PaginationBase__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _PaginationBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaginationBase */ "./resources/js/components/pagination/PaginationBase.vue");


/***/ }),

/***/ "./resources/js/components/preloaders/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/preloaders/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Preloader": () => (/* reexport safe */ _PreloaderBase__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "Blur": () => (/* reexport safe */ _PreloaderBlur__WEBPACK_IMPORTED_MODULE_1__.default)
/* harmony export */ });
/* harmony import */ var _PreloaderBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PreloaderBase */ "./resources/js/components/preloaders/PreloaderBase.vue");
/* harmony import */ var _PreloaderBlur__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreloaderBlur */ "./resources/js/components/preloaders/PreloaderBlur.vue");



/***/ }),

/***/ "./resources/js/components/tables/index.js":
/*!*************************************************!*\
  !*** ./resources/js/components/tables/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Table": () => (/* reexport safe */ _TableBase__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _TableBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableBase */ "./resources/js/components/tables/TableBase.vue");


/***/ }),

/***/ "./resources/js/functions/index.js":
/*!*****************************************!*\
  !*** ./resources/js/functions/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePreloader": () => (/* reexport safe */ _usePreloader__WEBPACK_IMPORTED_MODULE_0__.usePreloader),
/* harmony export */   "usePaginator": () => (/* reexport safe */ _usePaginator__WEBPACK_IMPORTED_MODULE_1__.usePaginator),
/* harmony export */   "useScroll": () => (/* reexport safe */ _useScroll__WEBPACK_IMPORTED_MODULE_2__.useScroll),
/* harmony export */   "useAlert": () => (/* reexport safe */ _useAlert__WEBPACK_IMPORTED_MODULE_3__.useAlert),
/* harmony export */   "useInput": () => (/* reexport safe */ _useInput__WEBPACK_IMPORTED_MODULE_4__.useInput),
/* harmony export */   "useTable": () => (/* reexport safe */ _useTable__WEBPACK_IMPORTED_MODULE_5__.useTable)
/* harmony export */ });
/* harmony import */ var _usePreloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usePreloader */ "./resources/js/functions/usePreloader.js");
/* harmony import */ var _usePaginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usePaginator */ "./resources/js/functions/usePaginator.js");
/* harmony import */ var _useScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useScroll */ "./resources/js/functions/useScroll.js");
/* harmony import */ var _useAlert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useAlert */ "./resources/js/functions/useAlert.js");
/* harmony import */ var _useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useInput */ "./resources/js/functions/useInput.js");
/* harmony import */ var _useTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useTable */ "./resources/js/functions/useTable.js");







/***/ }),

/***/ "./resources/js/functions/useAlert.js":
/*!********************************************!*\
  !*** ./resources/js/functions/useAlert.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAlert": () => (/* binding */ useAlert)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function useAlert() {
  var alert = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
    message: ''
  });

  var setMessage = function setMessage(message) {
    return alert.message = message;
  };

  var clearMessage = function clearMessage() {
    return alert.message = '';
  };

  (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('alert', (0,vue__WEBPACK_IMPORTED_MODULE_0__.readonly)(alert));
  return {
    setMessage: setMessage,
    clearMessage: clearMessage
  };
}

/***/ }),

/***/ "./resources/js/functions/useInput.js":
/*!********************************************!*\
  !*** ./resources/js/functions/useInput.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useInput": () => (/* binding */ useInput)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var INVALID_CLASS = 'is-invalid';
var VALID_CLASS = 'is-valid';
function useInput(_ref) {
  var props = _ref.props;

  var _useField = (0,vee_validate__WEBPACK_IMPORTED_MODULE_1__.useField)(props.name, props.rules, {
    initialValue: props.value
  }),
      errorMessage = _useField.errorMessage,
      value = _useField.value,
      meta = _useField.meta,
      handleChange = _useField.handleChange,
      resetField = _useField.resetField;

  var error = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
    return _.replace(errorMessage.value, props.name, props.label);
  });
  var isInvalid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
    return !!errorMessage.value;
  });
  var isValid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
    return meta.valid;
  });
  var validationClass = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
    var _ref2;

    return _ref2 = {}, _defineProperty(_ref2, INVALID_CLASS, isInvalid.value), _defineProperty(_ref2, VALID_CLASS, isValid.value), _ref2;
  });
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
    resetField();
  });
  return {
    validationClass: validationClass,
    isInvalid: isInvalid,
    isValid: isValid,
    value: value,
    error: error,
    handleChange: handleChange
  };
}

/***/ }),

/***/ "./resources/js/functions/usePaginator.js":
/*!************************************************!*\
  !*** ./resources/js/functions/usePaginator.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePaginator": () => (/* binding */ usePaginator)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function usePaginator() {
  var paginator = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
    totalPages: 0,
    currPage: 0,
    url: ''
  });

  var init = function init(_ref) {
    var total_pages = _ref.total_pages,
        curr_page = _ref.curr_page,
        url = _ref.url;
    paginator.totalPages = total_pages;
    paginator.currPage = curr_page;
    paginator.url = generateCorrectUrl(url);
  };

  var generateCorrectUrl = function generateCorrectUrl(url) {
    var pagePos = url.indexOf('?page=');
    return pagePos > -1 ? url.substr(0, pagePos) : url;
  };

  (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('paginator', (0,vue__WEBPACK_IMPORTED_MODULE_0__.readonly)(paginator));
  return {
    init: init
  };
}

/***/ }),

/***/ "./resources/js/functions/usePreloader.js":
/*!************************************************!*\
  !*** ./resources/js/functions/usePreloader.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePreloader": () => (/* binding */ usePreloader)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function usePreloader() {
  var ids = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);

  var hide = function hide(id) {
    return _.remove(ids.value, function (k) {
      return k == id;
    });
  };

  var isActive = function isActive(id) {
    return _.some(ids.value, function (k) {
      return k == id;
    });
  };

  var push = function push(id) {
    return ids.value.push(id);
  };

  (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('preloader', {
    isActive: isActive
  });
  return {
    hide: hide,
    push: push
  };
}

/***/ }),

/***/ "./resources/js/functions/useScroll.js":
/*!*********************************************!*\
  !*** ./resources/js/functions/useScroll.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useScroll": () => (/* binding */ useScroll)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function useScroll() {
  var scrollRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

  var handleScroll = function handleScroll() {
    var behavior = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'smooth';
    if (!canScroll()) return;
    scrollRef.value.$el.scrollIntoView({
      behavior: behavior
    });
  };

  var canScroll = function canScroll() {
    return typeof scrollRef.value.$el.scrollIntoView === 'function';
  };

  return {
    scrollRef: scrollRef,
    handleScroll: handleScroll
  };
}

/***/ }),

/***/ "./resources/js/functions/useTable.js":
/*!********************************************!*\
  !*** ./resources/js/functions/useTable.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTable": () => (/* binding */ useTable)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var DEFAULT_ROW_DATA = null;
var DEFAULT_ROW_ID = -1;
function useTable(_ref) {
  var titles = _ref.titles,
      rows = _ref.rows;
  var table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
    rowData: DEFAULT_ROW_DATA,
    rowId: DEFAULT_ROW_ID,
    titles: titles,
    rows: rows
  });

  var deleteRow = function deleteRow(rowId) {
    return _.remove(table.rows, function (r, idx) {
      return rowId == idx;
    });
  };

  var isRowEquals = function isRowEquals(rowId) {
    return table.rowId == rowId;
  };

  var addRow = function addRow(row) {
    return table.rows.push(row);
  };

  var editRow = function editRow(rowId, data) {
    table.rowData = data;
    table.rowId = rowId;
  };

  var updateRow = function updateRow(data) {
    _.each(data, function (item, key) {
      table.rowData[key] = item;
    });
  };

  var resetRow = function resetRow() {
    table.rowData = DEFAULT_ROW_DATA;
    table.rowId = DEFAULT_ROW_ID;
  };

  return _objectSpread(_objectSpread({}, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(table)), {}, {
    isRowEquals: isRowEquals,
    deleteRow: deleteRow,
    updateRow: updateRow,
    resetRow: resetRow,
    editRow: editRow,
    addRow: addRow
  });
}

/***/ }),

/***/ "./resources/js/layouts/pages/index.js":
/*!*********************************************!*\
  !*** ./resources/js/layouts/pages/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page": () => (/* reexport safe */ _PageBase__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _PageBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageBase */ "./resources/js/layouts/pages/PageBase.vue");


/***/ }),

/***/ "./resources/js/components/fields/FieldInput.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/fields/FieldInput.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FieldInput_vue_vue_type_template_id_c28d832a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FieldInput.vue?vue&type=template&id=c28d832a */ "./resources/js/components/fields/FieldInput.vue?vue&type=template&id=c28d832a");
/* harmony import */ var _FieldInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldInput.vue?vue&type=script&lang=js */ "./resources/js/components/fields/FieldInput.vue?vue&type=script&lang=js");



_FieldInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _FieldInput_vue_vue_type_template_id_c28d832a__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_FieldInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/fields/FieldInput.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_FieldInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/pagination/PaginationBase.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/pagination/PaginationBase.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PaginationBase_vue_vue_type_template_id_fcdfb5f6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaginationBase.vue?vue&type=template&id=fcdfb5f6 */ "./resources/js/components/pagination/PaginationBase.vue?vue&type=template&id=fcdfb5f6");
/* harmony import */ var _PaginationBase_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaginationBase.vue?vue&type=script&lang=js */ "./resources/js/components/pagination/PaginationBase.vue?vue&type=script&lang=js");



_PaginationBase_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _PaginationBase_vue_vue_type_template_id_fcdfb5f6__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_PaginationBase_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/pagination/PaginationBase.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_PaginationBase_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/preloaders/PreloaderBase.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/preloaders/PreloaderBase.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PreloaderBase_vue_vue_type_template_id_06bdbd40_functional_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PreloaderBase.vue?vue&type=template&id=06bdbd40&functional=true */ "./resources/js/components/preloaders/PreloaderBase.vue?vue&type=template&id=06bdbd40&functional=true");
/* harmony import */ var _PreloaderBase_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreloaderBase.vue?vue&type=script&lang=js */ "./resources/js/components/preloaders/PreloaderBase.vue?vue&type=script&lang=js");



_PreloaderBase_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _PreloaderBase_vue_vue_type_template_id_06bdbd40_functional_true__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_PreloaderBase_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/preloaders/PreloaderBase.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_PreloaderBase_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/preloaders/PreloaderBlur.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/preloaders/PreloaderBlur.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PreloaderBlur_vue_vue_type_template_id_50c32bd6_functional_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PreloaderBlur.vue?vue&type=template&id=50c32bd6&functional=true */ "./resources/js/components/preloaders/PreloaderBlur.vue?vue&type=template&id=50c32bd6&functional=true");
/* harmony import */ var _PreloaderBlur_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreloaderBlur.vue?vue&type=script&lang=js */ "./resources/js/components/preloaders/PreloaderBlur.vue?vue&type=script&lang=js");



_PreloaderBlur_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _PreloaderBlur_vue_vue_type_template_id_50c32bd6_functional_true__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_PreloaderBlur_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/preloaders/PreloaderBlur.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_PreloaderBlur_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/tables/TableBase.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/tables/TableBase.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TableBase_vue_vue_type_template_id_e8c13780__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableBase.vue?vue&type=template&id=e8c13780 */ "./resources/js/components/tables/TableBase.vue?vue&type=template&id=e8c13780");
/* harmony import */ var _TableBase_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableBase.vue?vue&type=script&lang=js */ "./resources/js/components/tables/TableBase.vue?vue&type=script&lang=js");



_TableBase_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _TableBase_vue_vue_type_template_id_e8c13780__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_TableBase_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/tables/TableBase.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TableBase_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/layouts/pages/PageBase.vue":
/*!*************************************************!*\
  !*** ./resources/js/layouts/pages/PageBase.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageBase_vue_vue_type_template_id_ef197862_functional_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageBase.vue?vue&type=template&id=ef197862&functional=true */ "./resources/js/layouts/pages/PageBase.vue?vue&type=template&id=ef197862&functional=true");
/* harmony import */ var _PageBase_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageBase.vue?vue&type=script&lang=js */ "./resources/js/layouts/pages/PageBase.vue?vue&type=script&lang=js");



_PageBase_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _PageBase_vue_vue_type_template_id_ef197862_functional_true__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_PageBase_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/layouts/pages/PageBase.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_PageBase_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/pages/admin/PageClients.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/admin/PageClients.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageClients_vue_vue_type_template_id_47f40b00__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageClients.vue?vue&type=template&id=47f40b00 */ "./resources/js/pages/admin/PageClients.vue?vue&type=template&id=47f40b00");
/* harmony import */ var _PageClients_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageClients.vue?vue&type=script&lang=js */ "./resources/js/pages/admin/PageClients.vue?vue&type=script&lang=js");



_PageClients_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _PageClients_vue_vue_type_template_id_47f40b00__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_PageClients_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/pages/admin/PageClients.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_PageClients_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/fields/FieldInput.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/fields/FieldInput.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FieldInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FieldInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FieldInput.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/fields/FieldInput.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pagination/PaginationBase.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/pagination/PaginationBase.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PaginationBase_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PaginationBase_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PaginationBase.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pagination/PaginationBase.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/preloaders/PreloaderBase.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/preloaders/PreloaderBase.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PreloaderBase_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PreloaderBase_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PreloaderBase.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/preloaders/PreloaderBase.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/preloaders/PreloaderBlur.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/preloaders/PreloaderBlur.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PreloaderBlur_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PreloaderBlur_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PreloaderBlur.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/preloaders/PreloaderBlur.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/tables/TableBase.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/tables/TableBase.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableBase_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableBase_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TableBase.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/tables/TableBase.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/layouts/pages/PageBase.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/layouts/pages/PageBase.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageBase_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageBase_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PageBase.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/pages/PageBase.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/admin/PageClients.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/admin/PageClients.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageClients_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageClients_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PageClients.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/admin/PageClients.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/fields/FieldInput.vue?vue&type=template&id=c28d832a":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/fields/FieldInput.vue?vue&type=template&id=c28d832a ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FieldInput_vue_vue_type_template_id_c28d832a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FieldInput_vue_vue_type_template_id_c28d832a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FieldInput.vue?vue&type=template&id=c28d832a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/fields/FieldInput.vue?vue&type=template&id=c28d832a");


/***/ }),

/***/ "./resources/js/components/pagination/PaginationBase.vue?vue&type=template&id=fcdfb5f6":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/pagination/PaginationBase.vue?vue&type=template&id=fcdfb5f6 ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PaginationBase_vue_vue_type_template_id_fcdfb5f6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PaginationBase_vue_vue_type_template_id_fcdfb5f6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PaginationBase.vue?vue&type=template&id=fcdfb5f6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pagination/PaginationBase.vue?vue&type=template&id=fcdfb5f6");


/***/ }),

/***/ "./resources/js/components/preloaders/PreloaderBase.vue?vue&type=template&id=06bdbd40&functional=true":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/preloaders/PreloaderBase.vue?vue&type=template&id=06bdbd40&functional=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PreloaderBase_vue_vue_type_template_id_06bdbd40_functional_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PreloaderBase_vue_vue_type_template_id_06bdbd40_functional_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PreloaderBase.vue?vue&type=template&id=06bdbd40&functional=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/preloaders/PreloaderBase.vue?vue&type=template&id=06bdbd40&functional=true");


/***/ }),

/***/ "./resources/js/components/preloaders/PreloaderBlur.vue?vue&type=template&id=50c32bd6&functional=true":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/preloaders/PreloaderBlur.vue?vue&type=template&id=50c32bd6&functional=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PreloaderBlur_vue_vue_type_template_id_50c32bd6_functional_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PreloaderBlur_vue_vue_type_template_id_50c32bd6_functional_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PreloaderBlur.vue?vue&type=template&id=50c32bd6&functional=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/preloaders/PreloaderBlur.vue?vue&type=template&id=50c32bd6&functional=true");


/***/ }),

/***/ "./resources/js/components/tables/TableBase.vue?vue&type=template&id=e8c13780":
/*!************************************************************************************!*\
  !*** ./resources/js/components/tables/TableBase.vue?vue&type=template&id=e8c13780 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableBase_vue_vue_type_template_id_e8c13780__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableBase_vue_vue_type_template_id_e8c13780__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TableBase.vue?vue&type=template&id=e8c13780 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/tables/TableBase.vue?vue&type=template&id=e8c13780");


/***/ }),

/***/ "./resources/js/layouts/pages/PageBase.vue?vue&type=template&id=ef197862&functional=true":
/*!***********************************************************************************************!*\
  !*** ./resources/js/layouts/pages/PageBase.vue?vue&type=template&id=ef197862&functional=true ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageBase_vue_vue_type_template_id_ef197862_functional_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageBase_vue_vue_type_template_id_ef197862_functional_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PageBase.vue?vue&type=template&id=ef197862&functional=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/pages/PageBase.vue?vue&type=template&id=ef197862&functional=true");


/***/ }),

/***/ "./resources/js/pages/admin/PageClients.vue?vue&type=template&id=47f40b00":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/admin/PageClients.vue?vue&type=template&id=47f40b00 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageClients_vue_vue_type_template_id_47f40b00__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageClients_vue_vue_type_template_id_47f40b00__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PageClients.vue?vue&type=template&id=47f40b00 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/admin/PageClients.vue?vue&type=template&id=47f40b00");


/***/ })

}]);