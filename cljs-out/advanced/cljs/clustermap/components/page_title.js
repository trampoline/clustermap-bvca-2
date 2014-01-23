// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.page_title');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('clustermap.formats.number');
clustermap.components.page_title.page_title = (function page_title(data){var type = (function (){var G__21023 = data;var G__21023__$1 = (((G__21023 == null))?null:cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__21023,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$218,cljs.core.constant$keyword$183], null)));var G__21023__$2 = (((G__21023__$1 == null))?null:cljs.core.name(G__21023__$1));return G__21023__$2;
})();var name = (function (){var G__21024 = data;var G__21024__$1 = (((G__21024 == null))?null:cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__21024,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$218,cljs.core.constant$keyword$153], null)));var G__21024__$2 = (((G__21024__$1 == null))?null:(G__21024__$1["name"]));return G__21024__$2;
})();if(typeof clustermap.components.page_title.t21025 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t21025 = (function (name,type,data,page_title,meta21026){
this.name = name;
this.type = type;
this.data = data;
this.page_title = page_title;
this.meta21026 = meta21026;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t21025.cljs$lang$type = true;
clustermap.components.page_title.t21025.cljs$lang$ctorStr = "clustermap.components.page-title/t21025";
clustermap.components.page_title.t21025.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.page-title/t21025");
});
clustermap.components.page_title.t21025.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t21025.prototype.om$core$IRender$render$arity$1 = (function (this__9148__auto__){var self__ = this;
var this__9148__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button"},"View on map"),(function (){var attrs21030 = (function (){var or__3406__auto__ = self__.type;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "All portfolio companies";
}
})();if(cljs.core.map_QMARK_(attrs21030))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21030),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21030));
}
})(),(function (){var attrs21031 = (function (){var or__3406__auto__ = self__.name;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_(attrs21031))
{return React.DOM.h3(sablono.interpreter.attributes(attrs21031),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs21031));
}
})());
});
clustermap.components.page_title.t21025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21027){var self__ = this;
var _21027__$1 = this;return self__.meta21026;
});
clustermap.components.page_title.t21025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21027,meta21026__$1){var self__ = this;
var _21027__$1 = this;return (new clustermap.components.page_title.t21025(self__.name,self__.type,self__.data,self__.page_title,meta21026__$1));
});
clustermap.components.page_title.__GT_t21025 = (function __GT_t21025(name__$1,type__$1,data__$1,page_title__$1,meta21026){return (new clustermap.components.page_title.t21025(name__$1,type__$1,data__$1,page_title__$1,meta21026));
});
}
return (new clustermap.components.page_title.t21025(name,type,data,page_title,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id){return om.core.root.cljs$core$IFn$_invoke$arity$3(app_state,clustermap.components.page_title.page_title,document.getElementById(elem_id));
});
