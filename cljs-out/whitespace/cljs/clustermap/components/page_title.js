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
clustermap.components.page_title.page_title = (function page_title(data){var type = (function (){var G__30445 = data;var G__30445__$1 = (((G__30445 == null))?null:cljs.core.get_in.call(null,G__30445,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null)));var G__30445__$2 = (((G__30445__$1 == null))?null:cljs.core.name.call(null,G__30445__$1));return G__30445__$2;
})();var name = (function (){var G__30446 = data;var G__30446__$1 = (((G__30446 == null))?null:cljs.core.get_in.call(null,G__30446,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null)));var G__30446__$2 = (((G__30446__$1 == null))?null:(G__30446__$1["name"]));return G__30446__$2;
})();if(typeof clustermap.components.page_title.t30447 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t30447 = (function (name,type,data,page_title,meta30448){
this.name = name;
this.type = type;
this.data = data;
this.page_title = page_title;
this.meta30448 = meta30448;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t30447.cljs$lang$type = true;
clustermap.components.page_title.t30447.cljs$lang$ctorStr = "clustermap.components.page-title/t30447";
clustermap.components.page_title.t30447.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.page-title/t30447");
});
clustermap.components.page_title.t30447.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t30447.prototype.om$core$IRender$render$arity$1 = (function (this__9144__auto__){var self__ = this;
var this__9144__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button"},"View on map"),(function (){var attrs30452 = (function (){var or__3406__auto__ = self__.type;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "All portfolio companies";
}
})();if(cljs.core.map_QMARK_.call(null,attrs30452))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs30452),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs30452));
}
})(),(function (){var attrs30453 = (function (){var or__3406__auto__ = self__.name;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_.call(null,attrs30453))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs30453),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs30453));
}
})());
});
clustermap.components.page_title.t30447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30449){var self__ = this;
var _30449__$1 = this;return self__.meta30448;
});
clustermap.components.page_title.t30447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30449,meta30448__$1){var self__ = this;
var _30449__$1 = this;return (new clustermap.components.page_title.t30447(self__.name,self__.type,self__.data,self__.page_title,meta30448__$1));
});
clustermap.components.page_title.__GT_t30447 = (function __GT_t30447(name__$1,type__$1,data__$1,page_title__$1,meta30448){return (new clustermap.components.page_title.t30447(name__$1,type__$1,data__$1,page_title__$1,meta30448));
});
}
return (new clustermap.components.page_title.t30447(name,type,data,page_title,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.components.page_title.page_title,document.getElementById(elem_id));
});
