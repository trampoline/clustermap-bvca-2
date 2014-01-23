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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__11398 = cljs.core._EQ_;var expr__11399 = type;if(cljs.core.truth_(pred__11398.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11399)))
{return "Portfolio Company";
} else
{if(cljs.core.truth_(pred__11398.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11399)))
{return "Investor";
} else
{if(cljs.core.truth_(pred__11398.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11399)))
{return "Constituency";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11399)].join('')));
}
}
}
});
clustermap.components.page_title.page_title = (function page_title(data){var type = (function (){var G__11410 = data;var G__11410__$1 = (((G__11410 == null))?null:new cljs.core.Keyword(null,"selection","selection",3592905982).cljs$core$IFn$_invoke$arity$1(G__11410));var G__11410__$2 = (((G__11410__$1 == null))?null:new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(G__11410__$1));var G__11410__$3 = (((G__11410__$2 == null))?null:clustermap.components.page_title.describe_type.call(null,G__11410__$2));return G__11410__$3;
})();var name = (function (){var G__11411 = data;var G__11411__$1 = (((G__11411 == null))?null:new cljs.core.Keyword(null,"selection","selection",3592905982).cljs$core$IFn$_invoke$arity$1(G__11411));var G__11411__$2 = (((G__11411__$1 == null))?null:new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(G__11411__$1));var G__11411__$3 = (((G__11411__$2 == null))?null:new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(G__11411__$2));return G__11411__$3;
})();if(typeof clustermap.components.page_title.t11412 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t11412 = (function (name,type,data,page_title,meta11413){
this.name = name;
this.type = type;
this.data = data;
this.page_title = page_title;
this.meta11413 = meta11413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t11412.cljs$lang$type = true;
clustermap.components.page_title.t11412.cljs$lang$ctorStr = "clustermap.components.page-title/t11412";
clustermap.components.page_title.t11412.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.page-title/t11412");
});
clustermap.components.page_title.t11412.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t11412.prototype.om$core$IRender$render$arity$1 = (function (this__9148__auto__){var self__ = this;
var this__9148__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button"},"View on map"),(function (){var attrs11417 = (function (){var or__3406__auto__ = self__.type;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "All portfolio companies";
}
})();if(cljs.core.map_QMARK_.call(null,attrs11417))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11417),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11417));
}
})(),(function (){var attrs11418 = (function (){var or__3406__auto__ = self__.name;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_.call(null,attrs11418))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs11418),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs11418));
}
})());
});
clustermap.components.page_title.t11412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11414){var self__ = this;
var _11414__$1 = this;return self__.meta11413;
});
clustermap.components.page_title.t11412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11414,meta11413__$1){var self__ = this;
var _11414__$1 = this;return (new clustermap.components.page_title.t11412(self__.name,self__.type,self__.data,self__.page_title,meta11413__$1));
});
clustermap.components.page_title.__GT_t11412 = (function __GT_t11412(name__$1,type__$1,data__$1,page_title__$1,meta11413){return (new clustermap.components.page_title.t11412(name__$1,type__$1,data__$1,page_title__$1,meta11413));
});
}
return (new clustermap.components.page_title.t11412(name,type,data,page_title,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.components.page_title.page_title,document.getElementById(elem_id));
});

//# sourceMappingURL=page_title.js.map