// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.components.search');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('clustermap.om');
goog.require('om.dom');
goog.require('jayq.core');
goog.require('clustermap.model');
goog.require('sablono.core');
goog.require('clustermap.routes');
goog.require('om.dom');
goog.require('clustermap.om');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clustermap.model');
goog.require('jayq.core');
goog.require('clustermap.routes');
goog.require('om.core');
goog.require('om.core');
clustermap.components.search.ESCAPE_KEY = (27);
clustermap.components.search.ENTER_KEY = (13);
clustermap.components.search.LEFT_ARROW = (37);
clustermap.components.search.UP_ARROW = (38);
clustermap.components.search.RIGHT_ARROW = (39);
clustermap.components.search.DOWN_ARROW = (40);
clustermap.components.search.search_result_link = (function search_result_link(p__50401,owner,p__50402){var map__50411 = p__50401;var map__50411__$1 = ((cljs.core.seq_QMARK_.call(null,map__50411))?cljs.core.apply.call(null,cljs.core.hash_map,map__50411):map__50411);var search_result = map__50411__$1;var type = cljs.core.get.call(null,map__50411__$1,new cljs.core.Keyword(null,"type","type",1174270348));var name = cljs.core.get.call(null,map__50411__$1,new cljs.core.Keyword(null,"name","name",1843675177));var map__50412 = p__50402;var map__50412__$1 = ((cljs.core.seq_QMARK_.call(null,map__50412))?cljs.core.apply.call(null,cljs.core.hash_map,map__50412):map__50412);var opts = map__50412__$1;var path_fn = cljs.core.get.call(null,map__50412__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__50412__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.search.t50413 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t50413 = (function (map__50411,owner,path_fn,p__50401,search_result_link,name,comm,search_result,type,map__50412,p__50402,opts,meta50414){
this.map__50411 = map__50411;
this.owner = owner;
this.path_fn = path_fn;
this.p__50401 = p__50401;
this.search_result_link = search_result_link;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.map__50412 = map__50412;
this.p__50402 = p__50402;
this.opts = opts;
this.meta50414 = meta50414;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t50413.cljs$lang$type = true;
clustermap.components.search.t50413.cljs$lang$ctorStr = "clustermap.components.search/t50413";
clustermap.components.search.t50413.cljs$lang$ctorPrWriter = ((function (map__50411,map__50411__$1,search_result,type,name,map__50412,map__50412__$1,opts,path_fn,comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.search/t50413");
});})(map__50411,map__50411__$1,search_result,type,name,map__50412,map__50412__$1,opts,path_fn,comm))
;
clustermap.components.search.t50413.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t50413.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__50411,map__50411__$1,search_result,type,name,map__50412,map__50412__$1,opts,path_fn,comm){
return (function (this$,p__50416){var self__ = this;
var map__50417 = p__50416;var map__50417__$1 = ((cljs.core.seq_QMARK_.call(null,map__50417))?cljs.core.apply.call(null,cljs.core.hash_map,map__50417):map__50417);var state = map__50417__$1;var selected = cljs.core.get.call(null,map__50417__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__50417,map__50417__$1,state,selected,map__50411,map__50411__$1,search_result,type,name,map__50412,map__50412__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__50418 = l;var G__50418__$1 = (((G__50418 == null))?null:jayq.core.$.call(null,G__50418));var G__50418__$2 = (((G__50418__$1 == null))?null:G__50418__$1.parents(".search-component"));var G__50418__$3 = (((G__50418__$2 == null))?null:G__50418__$2.toggle());return G__50418__$3;
});})(path,this$__$1,map__50417,map__50417__$1,state,selected,map__50411,map__50411__$1,search_result,type,name,map__50412,map__50412__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__50411,map__50411__$1,search_result,type,name,map__50412,map__50412__$1,opts,path_fn,comm))
;
clustermap.components.search.t50413.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__50411,map__50411__$1,search_result,type,name,map__50412,map__50412__$1,opts,path_fn,comm){
return (function (_50415){var self__ = this;
var _50415__$1 = this;return self__.meta50414;
});})(map__50411,map__50411__$1,search_result,type,name,map__50412,map__50412__$1,opts,path_fn,comm))
;
clustermap.components.search.t50413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__50411,map__50411__$1,search_result,type,name,map__50412,map__50412__$1,opts,path_fn,comm){
return (function (_50415,meta50414__$1){var self__ = this;
var _50415__$1 = this;return (new clustermap.components.search.t50413(self__.map__50411,self__.owner,self__.path_fn,self__.p__50401,self__.search_result_link,self__.name,self__.comm,self__.search_result,self__.type,self__.map__50412,self__.p__50402,self__.opts,meta50414__$1));
});})(map__50411,map__50411__$1,search_result,type,name,map__50412,map__50412__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t50413 = ((function (map__50411,map__50411__$1,search_result,type,name,map__50412,map__50412__$1,opts,path_fn,comm){
return (function __GT_t50413(map__50411__$2,owner__$1,path_fn__$1,p__50401__$1,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,map__50412__$2,p__50402__$1,opts__$1,meta50414){return (new clustermap.components.search.t50413(map__50411__$2,owner__$1,path_fn__$1,p__50401__$1,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,map__50412__$2,p__50402__$1,opts__$1,meta50414));
});})(map__50411,map__50411__$1,search_result,type,name,map__50412,map__50412__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t50413(map__50411__$1,owner,path_fn,p__50401,search_result_link,name,comm,search_result,type,map__50412__$1,p__50402,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__50419,n){var map__50421 = p__50419;var map__50421__$1 = ((cljs.core.seq_QMARK_.call(null,map__50421))?cljs.core.apply.call(null,cljs.core.hash_map,map__50421):map__50421);var investor_companies = cljs.core.get.call(null,map__50421__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__50421__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__50421__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));var cons = (function (){var or__3543__auto__ = constituencies;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var pcs = (function (){var or__3543__auto__ = portfolio_companies;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var invs = (function (){var or__3543__auto__ = investor_companies;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();if((n < cljs.core.count.call(null,cons)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",1803637324),cljs.core.get.call(null,constituencies,n)], null);
} else
{if((n < (cljs.core.count.call(null,cons) + cljs.core.count.call(null,pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),cljs.core.get.call(null,pcs,(n - cljs.core.count.call(null,cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investor-company","investor-company",13706558),cljs.core.get.call(null,invs,((n - cljs.core.count.call(null,cons)) - cljs.core.count.call(null,pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__50428 = cljs.core._EQ__EQ_;var expr__50429 = e.keyCode;if(cljs.core.truth_(pred__50428.call(null,clustermap.components.search.ESCAPE_KEY,expr__50429)))
{var G__50431 = om.core.get_node.call(null,owner,"search-component");var G__50431__$1 = (((G__50431 == null))?null:jayq.core.$.call(null,G__50431));var G__50431__$2 = (((G__50431__$1 == null))?null:G__50431__$1.toggle());return G__50431__$2;
} else
{if(cljs.core.truth_(pred__50428.call(null,clustermap.components.search.ENTER_KEY,expr__50429)))
{var vec__50432 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3543__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.call(null,vec__50432,(0),null);var res = cljs.core.nth.call(null,vec__50432,(1),null);var G__50433_50434 = om.core.get_node.call(null,owner,"search-component");var G__50433_50435__$1 = (((G__50433_50434 == null))?null:jayq.core.$.call(null,G__50433_50434));var G__50433_50436__$2 = (((G__50433_50435__$1 == null))?null:G__50433_50435__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__50428.call(null,clustermap.components.search.UP_ARROW,expr__50429)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3543__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_(pred__50428.call(null,clustermap.components.search.DOWN_ARROW,expr__50429)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3543__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})() + (1)));
} else
{return null;
}
}
}
}
});
clustermap.components.search.search_component = (function search_component(p__50437,owner){var map__50469 = p__50437;var map__50469__$1 = ((cljs.core.seq_QMARK_.call(null,map__50469))?cljs.core.apply.call(null,cljs.core.hash_map,map__50469):map__50469);var map__50470 = cljs.core.get.call(null,map__50469__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var map__50470__$1 = ((cljs.core.seq_QMARK_.call(null,map__50470))?cljs.core.apply.call(null,cljs.core.hash_map,map__50470):map__50470);var selection_type = cljs.core.get.call(null,map__50470__$1,new cljs.core.Keyword(null,"type","type",1174270348));var selection_value = cljs.core.get.call(null,map__50470__$1,new cljs.core.Keyword(null,"value","value",305978217));var view = cljs.core.get.call(null,map__50469__$1,new cljs.core.Keyword(null,"view","view",1247994814));var search_results = cljs.core.get.call(null,map__50469__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));var map__50471 = om.core.get_shared.call(null,owner);var map__50471__$1 = ((cljs.core.seq_QMARK_.call(null,map__50471))?cljs.core.apply.call(null,cljs.core.hash_map,map__50471):map__50471);var path_fn = cljs.core.get.call(null,map__50471__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__50471__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__50472 = search_results;var map__50472__$1 = ((cljs.core.seq_QMARK_.call(null,map__50472))?cljs.core.apply.call(null,cljs.core.hash_map,map__50472):map__50472);var investor_companies = cljs.core.get.call(null,map__50472__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__50472__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__50472__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));if(typeof clustermap.components.search.t50473 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t50473 = (function (search_results,search_component,owner,p__50437,path_fn,view,map__50469,portfolio_companies,map__50472,constituencies,investor_companies,selection_value,comm,map__50470,selection_type,map__50471,meta50474){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.p__50437 = p__50437;
this.path_fn = path_fn;
this.view = view;
this.map__50469 = map__50469;
this.portfolio_companies = portfolio_companies;
this.map__50472 = map__50472;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.comm = comm;
this.map__50470 = map__50470;
this.selection_type = selection_type;
this.map__50471 = map__50471;
this.meta50474 = meta50474;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t50473.cljs$lang$type = true;
clustermap.components.search.t50473.cljs$lang$ctorStr = "clustermap.components.search/t50473";
clustermap.components.search.t50473.cljs$lang$ctorPrWriter = ((function (map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.search/t50473");
});})(map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t50473.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t50473.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),e.target.value], null));
});})(this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.not_empty.call(null,self__.constituencies);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = cljs.core.not_empty.call(null,self__.portfolio_companies);if(cljs.core.truth_(or__3543__auto____$1))
{return or__3543__auto____$1;
} else
{return cljs.core.not_empty.call(null,self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,cljs.core.count.call(null,idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod.call(null,(function (){var or__3543__auto__ = new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results){
return (function iter__50476(s__50477){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results){
return (function (){var s__50477__$1 = s__50477;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__50477__$1);if(temp__4126__auto__)
{var s__50477__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__50477__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__50477__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__50479 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__50478 = (0);while(true){
if((i__50478 < size__4267__auto__))
{var vec__50482 = cljs.core._nth.call(null,c__4266__auto__,i__50478);var idx = cljs.core.nth.call(null,vec__50482,(0),null);var con = cljs.core.nth.call(null,vec__50482,(1),null);cljs.core.chunk_append.call(null,b__50479,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__50478,vec__50482,idx,con,c__4266__auto__,size__4267__auto__,b__50479,s__50477__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(i__50478,vec__50482,idx,con,c__4266__auto__,size__4267__auto__,b__50479,s__50477__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__50500 = (i__50478 + (1));
i__50478 = G__50500;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50479),iter__50476.call(null,cljs.core.chunk_rest.call(null,s__50477__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50479),null);
}
} else
{var vec__50483 = cljs.core.first.call(null,s__50477__$2);var idx = cljs.core.nth.call(null,vec__50483,(0),null);var con = cljs.core.nth.call(null,vec__50483,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__50483,idx,con,s__50477__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(vec__50483,idx,con,s__50477__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__50476.call(null,cljs.core.rest.call(null,s__50477__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results){
return (function iter__50484(s__50485){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results){
return (function (){var s__50485__$1 = s__50485;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__50485__$1);if(temp__4126__auto__)
{var s__50485__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__50485__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__50485__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__50487 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__50486 = (0);while(true){
if((i__50486 < size__4267__auto__))
{var vec__50490 = cljs.core._nth.call(null,c__4266__auto__,i__50486);var idx = cljs.core.nth.call(null,vec__50490,(0),null);var pc = cljs.core.nth.call(null,vec__50490,(1),null);cljs.core.chunk_append.call(null,b__50487,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__50486,vec__50490,idx,pc,c__4266__auto__,size__4267__auto__,b__50487,s__50485__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(i__50486,vec__50490,idx,pc,c__4266__auto__,size__4267__auto__,b__50487,s__50485__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__50501 = (i__50486 + (1));
i__50486 = G__50501;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50487),iter__50484.call(null,cljs.core.chunk_rest.call(null,s__50485__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50487),null);
}
} else
{var vec__50491 = cljs.core.first.call(null,s__50485__$2);var idx = cljs.core.nth.call(null,vec__50491,(0),null);var pc = cljs.core.nth.call(null,vec__50491,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__50491,idx,pc,s__50485__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(vec__50491,idx,pc,s__50485__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__50484.call(null,cljs.core.rest.call(null,s__50485__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results){
return (function iter__50492(s__50493){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results){
return (function (){var s__50493__$1 = s__50493;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__50493__$1);if(temp__4126__auto__)
{var s__50493__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__50493__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__50493__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__50495 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__50494 = (0);while(true){
if((i__50494 < size__4267__auto__))
{var vec__50498 = cljs.core._nth.call(null,c__4266__auto__,i__50494);var idx = cljs.core.nth.call(null,vec__50498,(0),null);var inv = cljs.core.nth.call(null,vec__50498,(1),null);cljs.core.chunk_append.call(null,b__50495,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__50494,vec__50498,idx,inv,c__4266__auto__,size__4267__auto__,b__50495,s__50493__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(i__50494,vec__50498,idx,inv,c__4266__auto__,size__4267__auto__,b__50495,s__50493__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__50502 = (i__50494 + (1));
i__50494 = G__50502;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50495),iter__50492.call(null,cljs.core.chunk_rest.call(null,s__50493__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50495),null);
}
} else
{var vec__50499 = cljs.core.first.call(null,s__50493__$2);var idx = cljs.core.nth.call(null,vec__50499,(0),null);var inv = cljs.core.nth.call(null,vec__50499,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__50499,idx,inv,s__50493__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(vec__50499,idx,inv,s__50493__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__50492.call(null,cljs.core.rest.call(null,s__50493__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t50473.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results){
return (function (_50475){var self__ = this;
var _50475__$1 = this;return self__.meta50474;
});})(map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t50473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results){
return (function (_50475,meta50474__$1){var self__ = this;
var _50475__$1 = this;return (new clustermap.components.search.t50473(self__.search_results,self__.search_component,self__.owner,self__.p__50437,self__.path_fn,self__.view,self__.map__50469,self__.portfolio_companies,self__.map__50472,self__.constituencies,self__.investor_companies,self__.selection_value,self__.comm,self__.map__50470,self__.selection_type,self__.map__50471,meta50474__$1));
});})(map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t50473 = ((function (map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results){
return (function __GT_t50473(search_results__$1,search_component__$1,owner__$1,p__50437__$1,path_fn__$2,view__$1,map__50469__$2,portfolio_companies__$1,map__50472__$2,constituencies__$1,investor_companies__$1,selection_value__$1,comm__$1,map__50470__$2,selection_type__$1,map__50471__$2,meta50474){return (new clustermap.components.search.t50473(search_results__$1,search_component__$1,owner__$1,p__50437__$1,path_fn__$2,view__$1,map__50469__$2,portfolio_companies__$1,map__50472__$2,constituencies__$1,investor_companies__$1,selection_value__$1,comm__$1,map__50470__$2,selection_type__$1,map__50471__$2,meta50474));
});})(map__50471,map__50471__$1,path_fn,comm,path_fn__$1,map__50472,map__50472__$1,investor_companies,portfolio_companies,constituencies,map__50469,map__50469__$1,map__50470,map__50470__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t50473(search_results,search_component,owner,p__50437,path_fn__$1,view,map__50469__$1,portfolio_companies,map__50472__$1,constituencies,investor_companies,selection_value,comm,map__50470__$1,selection_type,map__50471__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=search.js.map