// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.page_title');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
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
goog.require('clustermap.formats.number');
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__31768 = cljs.core._EQ_;var expr__31769 = type;if(cljs.core.truth_(pred__31768.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__31769)))
{return "Portfolio Company";
} else
{if(cljs.core.truth_(pred__31768.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__31769)))
{return "Investor";
} else
{if(cljs.core.truth_(pred__31768.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__31769)))
{return "Constituency";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__31769)].join('')));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(selection){var type = (function (){var G__31780 = selection;var G__31780__$1 = (((G__31780 == null))?null:new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(G__31780));var G__31780__$2 = (((G__31780__$1 == null))?null:clustermap.components.page_title.describe_type.call(null,G__31780__$1));return G__31780__$2;
})();var name = (function (){var G__31781 = selection;var G__31781__$1 = (((G__31781 == null))?null:new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(G__31781));var G__31781__$2 = (((G__31781__$1 == null))?null:new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(G__31781__$1));return G__31781__$2;
})();if(typeof clustermap.components.page_title.t31782 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t31782 = (function (name,type,selection,page_title_component,meta31783){
this.name = name;
this.type = type;
this.selection = selection;
this.page_title_component = page_title_component;
this.meta31783 = meta31783;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t31782.cljs$lang$type = true;
clustermap.components.page_title.t31782.cljs$lang$ctorStr = "clustermap.components.page-title/t31782";
clustermap.components.page_title.t31782.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.page-title/t31782");
});
clustermap.components.page_title.t31782.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t31782.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button"},"View on map"),(function (){var attrs31787 = (function (){var or__3406__auto__ = self__.type;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "All portfolio companies";
}
})();if(cljs.core.map_QMARK_.call(null,attrs31787))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31787),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31787));
}
})(),(function (){var attrs31788 = (function (){var or__3406__auto__ = self__.name;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_.call(null,attrs31788))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs31788),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs31788));
}
})());
});
clustermap.components.page_title.t31782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31784){var self__ = this;
var _31784__$1 = this;return self__.meta31783;
});
clustermap.components.page_title.t31782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31784,meta31783__$1){var self__ = this;
var _31784__$1 = this;return (new clustermap.components.page_title.t31782(self__.name,self__.type,self__.selection,self__.page_title_component,meta31783__$1));
});
clustermap.components.page_title.__GT_t31782 = (function __GT_t31782(name__$1,type__$1,selection__$1,page_title_component__$1,meta31783){return (new clustermap.components.page_title.t31782(name__$1,type__$1,selection__$1,page_title_component__$1,meta31783));
});
}
return (new clustermap.components.page_title.t31782(name,type,selection,page_title_component,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.om.burrow.call(null,clustermap.components.page_title.page_title_component,new cljs.core.Keyword(null,"selection","selection",3592905982)),document.getElementById(elem_id));
});
