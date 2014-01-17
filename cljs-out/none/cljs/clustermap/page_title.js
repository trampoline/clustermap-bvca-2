// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.page_title');
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
clustermap.page_title.page_title = (function page_title(data){var type = (function (){var G__17191 = data;var G__17191__$1 = (((G__17191 == null))?null:cljs.core.get_in.call(null,G__17191,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null)));var G__17191__$2 = (((G__17191__$1 == null))?null:cljs.core.name.call(null,G__17191__$1));return G__17191__$2;
})();var name = (function (){var G__17192 = data;var G__17192__$1 = (((G__17192 == null))?null:cljs.core.get_in.call(null,G__17192,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null)));var G__17192__$2 = (((G__17192__$1 == null))?null:(G__17192__$1["name"]));return G__17192__$2;
})();if(typeof clustermap.page_title.t17193 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.page_title.t17193 = (function (name,type,data,page_title,meta17194){
this.name = name;
this.type = type;
this.data = data;
this.page_title = page_title;
this.meta17194 = meta17194;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.page_title.t17193.cljs$lang$type = true;
clustermap.page_title.t17193.cljs$lang$ctorStr = "clustermap.page-title/t17193";
clustermap.page_title.t17193.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.page-title/t17193");
});
clustermap.page_title.t17193.prototype.om$core$IRender$ = true;
clustermap.page_title.t17193.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button"},"View on map"),(function (){var attrs17198 = (function (){var or__3406__auto__ = self__.type;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "All portfolio companies";
}
})();if(cljs.core.map_QMARK_.call(null,attrs17198))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs17198),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs17198));
}
})(),(function (){var attrs17199 = (function (){var or__3406__auto__ = self__.name;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_.call(null,attrs17199))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs17199),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs17199));
}
})());
});
clustermap.page_title.t17193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17195){var self__ = this;
var _17195__$1 = this;return self__.meta17194;
});
clustermap.page_title.t17193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17195,meta17194__$1){var self__ = this;
var _17195__$1 = this;return (new clustermap.page_title.t17193(self__.name,self__.type,self__.data,self__.page_title,meta17194__$1));
});
clustermap.page_title.__GT_t17193 = (function __GT_t17193(name__$1,type__$1,data__$1,page_title__$1,meta17194){return (new clustermap.page_title.t17193(name__$1,type__$1,data__$1,page_title__$1,meta17194));
});
}
return (new clustermap.page_title.t17193(name,type,data,page_title,null));
});
clustermap.page_title.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.page_title.page_title,document.getElementById(elem_id));
});

//# sourceMappingURL=page_title.js.map