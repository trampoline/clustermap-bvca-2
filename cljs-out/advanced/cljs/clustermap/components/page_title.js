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
clustermap.components.page_title.page_title = (function page_title(data){var type = (function (){var G__20888 = data;var G__20888__$1 = (((G__20888 == null))?null:cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__20888,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$191,cljs.core.constant$keyword$158], null)));var G__20888__$2 = (((G__20888__$1 == null))?null:cljs.core.name(G__20888__$1));return G__20888__$2;
})();var name = (function (){var G__20889 = data;var G__20889__$1 = (((G__20889 == null))?null:cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__20889,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$191,cljs.core.constant$keyword$129], null)));var G__20889__$2 = (((G__20889__$1 == null))?null:(G__20889__$1["name"]));return G__20889__$2;
})();if(typeof clustermap.components.page_title.t20890 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t20890 = (function (name,type,data,page_title,meta20891){
this.name = name;
this.type = type;
this.data = data;
this.page_title = page_title;
this.meta20891 = meta20891;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t20890.cljs$lang$type = true;
clustermap.components.page_title.t20890.cljs$lang$ctorStr = "clustermap.components.page-title/t20890";
clustermap.components.page_title.t20890.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.page-title/t20890");
});
clustermap.components.page_title.t20890.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t20890.prototype.om$core$IRender$render$arity$1 = (function (this__9144__auto__){var self__ = this;
var this__9144__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button"},"View on map"),(function (){var attrs20895 = (function (){var or__3406__auto__ = self__.type;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "All portfolio companies";
}
})();if(cljs.core.map_QMARK_(attrs20895))
{return React.DOM.h2(sablono.interpreter.attributes(attrs20895),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs20895));
}
})(),(function (){var attrs20896 = (function (){var or__3406__auto__ = self__.name;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_(attrs20896))
{return React.DOM.h3(sablono.interpreter.attributes(attrs20896),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs20896));
}
})());
});
clustermap.components.page_title.t20890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20892){var self__ = this;
var _20892__$1 = this;return self__.meta20891;
});
clustermap.components.page_title.t20890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20892,meta20891__$1){var self__ = this;
var _20892__$1 = this;return (new clustermap.components.page_title.t20890(self__.name,self__.type,self__.data,self__.page_title,meta20891__$1));
});
clustermap.components.page_title.__GT_t20890 = (function __GT_t20890(name__$1,type__$1,data__$1,page_title__$1,meta20891){return (new clustermap.components.page_title.t20890(name__$1,type__$1,data__$1,page_title__$1,meta20891));
});
}
return (new clustermap.components.page_title.t20890(name,type,data,page_title,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id){return om.core.root(app_state,clustermap.components.page_title.page_title,document.getElementById(elem_id));
});
