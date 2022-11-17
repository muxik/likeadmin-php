import { h as _sfc_main$3, k as _sfc_main$4 } from '../server.mjs';
import { defineComponent, withAsyncContext, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { u as useAsyncData } from './asyncData.430aca6d.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { d as getArticleCenter } from './news.50c5a1de.mjs';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'destr';
import 'h3';
import 'defu';
import '@vue/shared';
import 'element-plus';
import '@element-plus/icons-vue';
import 'cookie-es';
import 'ohash';
import 'lodash-es';
import 'element-plus/es/locale/lang/zh-cn';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';

const placeholder = "" + globalThis.__buildAssetsURL("placeholder.1ccc50b9.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: newsLists } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => getArticleCenter(), "$zJ3VKA3QFG")), __temp = await __temp, __restore(), __temp);
    const splitData = (data) => {
      const size = 3;
      return {
        topThree: data.slice(0, size),
        remain: data.slice(size)
      };
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InformationCard = _sfc_main$3;
      const _component_InformationItems = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="text-4xl mb-5">\u8D44\u8BAF\u4E2D\u5FC3</div><div class="flex flex-wrap gap-4"><!--[-->`);
      ssrRenderList(unref(newsLists), (item) => {
        _push(ssrRenderComponent(_component_InformationCard, {
          style: { "width": "calc(50% - 8px)" },
          key: item.id,
          header: item.name,
          data: item.article,
          link: `/information/default?cid=${item.id}&name=${item.name}`
        }, {
          content: withCtx(({ data }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="px-4 py-5"${_scopeId}><div class="flex gap-2.5"${_scopeId}><!--[-->`);
              ssrRenderList(splitData(data).topThree, (item2, index) => {
                _push2(`<div class="w-[180px] bg-page rounded overflow-hidden"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_InformationItems, {
                  index,
                  id: item2.id,
                  title: item2.title,
                  desc: item2.desc,
                  click: item2.click,
                  author: item2.author,
                  "create-time": item2.create_time,
                  image: item2.image || unref(placeholder),
                  "only-title": false,
                  border: false,
                  "show-author": false,
                  "show-desc": false,
                  "show-time": false,
                  "show-click": false,
                  "is-horizontal": true
                }, {
                  title: withCtx(({ title }, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span class="line-clamp-2"${_scopeId2}>${ssrInterpolate(title)}</span>`);
                    } else {
                      return [
                        createVNode("span", { class: "line-clamp-2" }, toDisplayString(title), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--></div><!--[-->`);
              ssrRenderList(splitData(data).remain, (item2) => {
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_InformationItems, {
                  id: item2.id,
                  title: item2.title,
                  desc: item2.desc,
                  click: item2.click,
                  author: item2.author,
                  "create-time": item2.create_time,
                  image: item2.image,
                  "only-title": true,
                  "show-time": false
                }, {
                  title: withCtx(({ title }, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span class="line-clamp-1"${_scopeId2}>${ssrInterpolate(title)}</span>`);
                    } else {
                      return [
                        createVNode("span", { class: "line-clamp-1" }, toDisplayString(title), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "px-4 py-5" }, [
                  createVNode("div", { class: "flex gap-2.5" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(splitData(data).topThree, (item2, index) => {
                      return openBlock(), createBlock("div", {
                        class: "w-[180px] bg-page rounded overflow-hidden",
                        key: item2.id
                      }, [
                        createVNode(_component_InformationItems, {
                          index,
                          id: item2.id,
                          title: item2.title,
                          desc: item2.desc,
                          click: item2.click,
                          author: item2.author,
                          "create-time": item2.create_time,
                          image: item2.image || unref(placeholder),
                          "only-title": false,
                          border: false,
                          "show-author": false,
                          "show-desc": false,
                          "show-time": false,
                          "show-click": false,
                          "is-horizontal": true
                        }, {
                          title: withCtx(({ title }) => [
                            createVNode("span", { class: "line-clamp-2" }, toDisplayString(title), 1)
                          ]),
                          _: 2
                        }, 1032, ["index", "id", "title", "desc", "click", "author", "create-time", "image"])
                      ]);
                    }), 128))
                  ]),
                  (openBlock(true), createBlock(Fragment, null, renderList(splitData(data).remain, (item2) => {
                    return openBlock(), createBlock("div", {
                      key: item2.id
                    }, [
                      createVNode(_component_InformationItems, {
                        id: item2.id,
                        title: item2.title,
                        desc: item2.desc,
                        click: item2.click,
                        author: item2.author,
                        "create-time": item2.create_time,
                        image: item2.image,
                        "only-title": true,
                        "show-time": false
                      }, {
                        title: withCtx(({ title }) => [
                          createVNode("span", { class: "line-clamp-1" }, toDisplayString(title), 1)
                        ]),
                        _: 2
                      }, 1032, ["id", "title", "desc", "click", "author", "create-time", "image"])
                    ]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/information/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.26a26853.mjs.map