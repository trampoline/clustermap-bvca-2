// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.page_title');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.om');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('clustermap.om');
goog.require('cljs.core.async');
goog.require('clustermap.formats.number');
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__22949 = cljs.core._EQ_;var expr__22950 = type;if(cljs.core.truth_((pred__22949.cljs$core$IFn$_invoke$arity$2 ? pred__22949.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$319,expr__22950) : pred__22949.call(null,cljs.core.constant$keyword$319,expr__22950))))
{return "Portfolio Company";
} else
{if(cljs.core.truth_((pred__22949.cljs$core$IFn$_invoke$arity$2 ? pred__22949.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$320,expr__22950) : pred__22949.call(null,cljs.core.constant$keyword$320,expr__22950))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__22949.cljs$core$IFn$_invoke$arity$2 ? pred__22949.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$321,expr__22950) : pred__22949.call(null,cljs.core.constant$keyword$321,expr__22950))))
{return "Constituency";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__22950)].join('')));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__22952,owner){var map__22962 = p__22952;var map__22962__$1 = ((cljs.core.seq_QMARK_(map__22962))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22962):map__22962);var selection = map__22962__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22962__$1,cljs.core.constant$keyword$249);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22962__$1,cljs.core.constant$keyword$286);var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$322);var type_descr = (function (){var G__22963 = selection;var G__22963__$1 = (((G__22963 == null))?null:cljs.core.constant$keyword$286.cljs$core$IFn$_invoke$arity$1(G__22963));var G__22963__$2 = (((G__22963__$1 == null))?null:clustermap.components.page_title.describe_type(G__22963__$1));return G__22963__$2;
})();var name = (function (){var G__22964 = selection;var G__22964__$1 = (((G__22964 == null))?null:cljs.core.constant$keyword$249.cljs$core$IFn$_invoke$arity$1(G__22964));var G__22964__$2 = (((G__22964__$1 == null))?null:cljs.core.constant$keyword$296.cljs$core$IFn$_invoke$arity$1(G__22964__$1));return G__22964__$2;
})();var url = (function (){var G__22965 = selection;var G__22965__$1 = (((G__22965 == null))?null:cljs.core.constant$keyword$249.cljs$core$IFn$_invoke$arity$1(G__22965));var G__22965__$2 = (((G__22965__$1 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22965__$1));return G__22965__$2;
})();if(typeof clustermap.components.page_title.t22966 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t22966 = (function (value,type_descr,selection,name,comm,page_title_component,owner,url,p__22952,type,map__22962,meta22967){
this.value = value;
this.type_descr = type_descr;
this.selection = selection;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.owner = owner;
this.url = url;
this.p__22952 = p__22952;
this.type = type;
this.map__22962 = map__22962;
this.meta22967 = meta22967;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t22966.cljs$lang$type = true;
clustermap.components.page_title.t22966.cljs$lang$ctorStr = "clustermap.components.page-title/t22966";
clustermap.components.page_title.t22966.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.page-title/t22966");
});
clustermap.components.page_title.t22966.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t22966.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$324,"map"], null));
})},"View on map"),(function (){var attrs22969 = (function (){var or__3406__auto__ = self__.type_descr;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "All portfolio companies";
}
})();if(cljs.core.map_QMARK_(attrs22969))
{return React.DOM.h2(sablono.interpreter.attributes(attrs22969),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs22969));
}
})(),(function (){var attrs22970 = (function (){var or__3406__auto__ = self__.name;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_(attrs22970))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22970),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$321))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$325,"\u00A0(",cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null)));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22970),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$321))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$325,"\u00A0(",cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null)));
}
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});
clustermap.components.page_title.t22966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22968){var self__ = this;
var _22968__$1 = this;return self__.meta22967;
});
clustermap.components.page_title.t22966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22968,meta22967__$1){var self__ = this;
var _22968__$1 = this;return (new clustermap.components.page_title.t22966(self__.value,self__.type_descr,self__.selection,self__.name,self__.comm,self__.page_title_component,self__.owner,self__.url,self__.p__22952,self__.type,self__.map__22962,meta22967__$1));
});
clustermap.components.page_title.__GT_t22966 = (function __GT_t22966(value__$1,type_descr__$1,selection__$1,name__$1,comm__$1,page_title_component__$1,owner__$1,url__$1,p__22952__$1,type__$1,map__22962__$2,meta22967){return (new clustermap.components.page_title.t22966(value__$1,type_descr__$1,selection__$1,name__$1,comm__$1,page_title_component__$1,owner__$1,url__$1,p__22952__$1,type__$1,map__22962__$2,meta22967));
});
}
return (new clustermap.components.page_title.t22966(value,type_descr,selection,name,comm,page_title_component,owner,url,p__22952,type,map__22962__$1,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$328),document.getElementById(elem_id));
});
