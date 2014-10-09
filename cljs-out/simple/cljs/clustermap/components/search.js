// Compiled by ClojureScript 0.0-2322
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
clustermap.components.search.search_result_link = (function search_result_link(p__32186,owner,p__32187){var map__32196 = p__32186;var map__32196__$1 = ((cljs.core.seq_QMARK_.call(null,map__32196))?cljs.core.apply.call(null,cljs.core.hash_map,map__32196):map__32196);var search_result = map__32196__$1;var type = cljs.core.get.call(null,map__32196__$1,new cljs.core.Keyword(null,"type","type",1174270348));var name = cljs.core.get.call(null,map__32196__$1,new cljs.core.Keyword(null,"name","name",1843675177));var map__32197 = p__32187;var map__32197__$1 = ((cljs.core.seq_QMARK_.call(null,map__32197))?cljs.core.apply.call(null,cljs.core.hash_map,map__32197):map__32197);var opts = map__32197__$1;var path_fn = cljs.core.get.call(null,map__32197__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__32197__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.search.t32198 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t32198 = (function (owner,path_fn,search_result_link,map__32196,name,comm,search_result,p__32187,type,p__32186,map__32197,opts,meta32199){
this.owner = owner;
this.path_fn = path_fn;
this.search_result_link = search_result_link;
this.map__32196 = map__32196;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.p__32187 = p__32187;
this.type = type;
this.p__32186 = p__32186;
this.map__32197 = map__32197;
this.opts = opts;
this.meta32199 = meta32199;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t32198.cljs$lang$type = true;
clustermap.components.search.t32198.cljs$lang$ctorStr = "clustermap.components.search/t32198";
clustermap.components.search.t32198.cljs$lang$ctorPrWriter = ((function (map__32196,map__32196__$1,search_result,type,name,map__32197,map__32197__$1,opts,path_fn,comm){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.search/t32198");
});})(map__32196,map__32196__$1,search_result,type,name,map__32197,map__32197__$1,opts,path_fn,comm))
;
clustermap.components.search.t32198.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t32198.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__32196,map__32196__$1,search_result,type,name,map__32197,map__32197__$1,opts,path_fn,comm){
return (function (this$,p__32201){var self__ = this;
var map__32202 = p__32201;var map__32202__$1 = ((cljs.core.seq_QMARK_.call(null,map__32202))?cljs.core.apply.call(null,cljs.core.hash_map,map__32202):map__32202);var state = map__32202__$1;var selected = cljs.core.get.call(null,map__32202__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__32202,map__32202__$1,state,selected,map__32196,map__32196__$1,search_result,type,name,map__32197,map__32197__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__32203 = l;var G__32203__$1 = (((G__32203 == null))?null:jayq.core.$.call(null,G__32203));var G__32203__$2 = (((G__32203__$1 == null))?null:G__32203__$1.parents(".search-component"));var G__32203__$3 = (((G__32203__$2 == null))?null:G__32203__$2.toggle());return G__32203__$3;
});})(path,this$__$1,map__32202,map__32202__$1,state,selected,map__32196,map__32196__$1,search_result,type,name,map__32197,map__32197__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__32196,map__32196__$1,search_result,type,name,map__32197,map__32197__$1,opts,path_fn,comm))
;
clustermap.components.search.t32198.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32196,map__32196__$1,search_result,type,name,map__32197,map__32197__$1,opts,path_fn,comm){
return (function (_32200){var self__ = this;
var _32200__$1 = this;return self__.meta32199;
});})(map__32196,map__32196__$1,search_result,type,name,map__32197,map__32197__$1,opts,path_fn,comm))
;
clustermap.components.search.t32198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32196,map__32196__$1,search_result,type,name,map__32197,map__32197__$1,opts,path_fn,comm){
return (function (_32200,meta32199__$1){var self__ = this;
var _32200__$1 = this;return (new clustermap.components.search.t32198(self__.owner,self__.path_fn,self__.search_result_link,self__.map__32196,self__.name,self__.comm,self__.search_result,self__.p__32187,self__.type,self__.p__32186,self__.map__32197,self__.opts,meta32199__$1));
});})(map__32196,map__32196__$1,search_result,type,name,map__32197,map__32197__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t32198 = ((function (map__32196,map__32196__$1,search_result,type,name,map__32197,map__32197__$1,opts,path_fn,comm){
return (function __GT_t32198(owner__$1,path_fn__$1,search_result_link__$1,map__32196__$2,name__$1,comm__$1,search_result__$1,p__32187__$1,type__$1,p__32186__$1,map__32197__$2,opts__$1,meta32199){return (new clustermap.components.search.t32198(owner__$1,path_fn__$1,search_result_link__$1,map__32196__$2,name__$1,comm__$1,search_result__$1,p__32187__$1,type__$1,p__32186__$1,map__32197__$2,opts__$1,meta32199));
});})(map__32196,map__32196__$1,search_result,type,name,map__32197,map__32197__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t32198(owner,path_fn,search_result_link,map__32196__$1,name,comm,search_result,p__32187,type,p__32186,map__32197__$1,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__32204,n){var map__32206 = p__32204;var map__32206__$1 = ((cljs.core.seq_QMARK_.call(null,map__32206))?cljs.core.apply.call(null,cljs.core.hash_map,map__32206):map__32206);var investor_companies = cljs.core.get.call(null,map__32206__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__32206__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__32206__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));var cons = (function (){var or__3558__auto__ = constituencies;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var pcs = (function (){var or__3558__auto__ = portfolio_companies;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var invs = (function (){var or__3558__auto__ = investor_companies;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();if((n < cljs.core.count.call(null,cons)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",1803637324),cljs.core.get.call(null,constituencies,n)], null);
} else
{if((n < (cljs.core.count.call(null,cons) + cljs.core.count.call(null,pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),cljs.core.get.call(null,pcs,(n - cljs.core.count.call(null,cons)))], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investor-company","investor-company",13706558),cljs.core.get.call(null,invs,((n - cljs.core.count.call(null,cons)) - cljs.core.count.call(null,pcs)))], null);

}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__32213 = cljs.core._EQ__EQ_;var expr__32214 = e.keyCode;if(cljs.core.truth_(pred__32213.call(null,clustermap.components.search.ESCAPE_KEY,expr__32214)))
{var G__32216 = om.core.get_node.call(null,owner,"search-component");var G__32216__$1 = (((G__32216 == null))?null:jayq.core.$.call(null,G__32216));var G__32216__$2 = (((G__32216__$1 == null))?null:G__32216__$1.toggle());return G__32216__$2;
} else
{if(cljs.core.truth_(pred__32213.call(null,clustermap.components.search.ENTER_KEY,expr__32214)))
{var vec__32217 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3558__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.call(null,vec__32217,(0),null);var res = cljs.core.nth.call(null,vec__32217,(1),null);var G__32218_32219 = om.core.get_node.call(null,owner,"search-component");var G__32218_32220__$1 = (((G__32218_32219 == null))?null:jayq.core.$.call(null,G__32218_32219));var G__32218_32221__$2 = (((G__32218_32220__$1 == null))?null:G__32218_32220__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__32213.call(null,clustermap.components.search.UP_ARROW,expr__32214)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3558__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_(pred__32213.call(null,clustermap.components.search.DOWN_ARROW,expr__32214)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3558__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
clustermap.components.search.search_component = (function search_component(p__32222,owner){var map__32254 = p__32222;var map__32254__$1 = ((cljs.core.seq_QMARK_.call(null,map__32254))?cljs.core.apply.call(null,cljs.core.hash_map,map__32254):map__32254);var map__32255 = cljs.core.get.call(null,map__32254__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var map__32255__$1 = ((cljs.core.seq_QMARK_.call(null,map__32255))?cljs.core.apply.call(null,cljs.core.hash_map,map__32255):map__32255);var selection_type = cljs.core.get.call(null,map__32255__$1,new cljs.core.Keyword(null,"type","type",1174270348));var selection_value = cljs.core.get.call(null,map__32255__$1,new cljs.core.Keyword(null,"value","value",305978217));var view = cljs.core.get.call(null,map__32254__$1,new cljs.core.Keyword(null,"view","view",1247994814));var search_results = cljs.core.get.call(null,map__32254__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));var map__32256 = om.core.get_shared.call(null,owner);var map__32256__$1 = ((cljs.core.seq_QMARK_.call(null,map__32256))?cljs.core.apply.call(null,cljs.core.hash_map,map__32256):map__32256);var path_fn = cljs.core.get.call(null,map__32256__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__32256__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__32257 = search_results;var map__32257__$1 = ((cljs.core.seq_QMARK_.call(null,map__32257))?cljs.core.apply.call(null,cljs.core.hash_map,map__32257):map__32257);var investor_companies = cljs.core.get.call(null,map__32257__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__32257__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__32257__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));if(typeof clustermap.components.search.t32258 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t32258 = (function (search_results,search_component,owner,path_fn,map__32255,view,portfolio_companies,constituencies,investor_companies,selection_value,comm,p__32222,selection_type,map__32257,map__32254,map__32256,meta32259){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.map__32255 = map__32255;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.comm = comm;
this.p__32222 = p__32222;
this.selection_type = selection_type;
this.map__32257 = map__32257;
this.map__32254 = map__32254;
this.map__32256 = map__32256;
this.meta32259 = meta32259;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t32258.cljs$lang$type = true;
clustermap.components.search.t32258.cljs$lang$ctorStr = "clustermap.components.search/t32258";
clustermap.components.search.t32258.cljs$lang$ctorPrWriter = ((function (map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.search/t32258");
});})(map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t32258.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t32258.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "search-component", "ref": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),e.target.value], null));
});})(this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not_empty.call(null,self__.constituencies);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.not_empty.call(null,self__.portfolio_companies);if(cljs.core.truth_(or__3558__auto____$1))
{return or__3558__auto____$1;
} else
{return cljs.core.not_empty.call(null,self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,cljs.core.count.call(null,idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod.call(null,(function (){var or__3558__auto__ = new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results){
return (function iter__32261(s__32262){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results){
return (function (){var s__32262__$1 = s__32262;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32262__$1);if(temp__4126__auto__)
{var s__32262__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32262__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__32262__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__32264 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__32263 = (0);while(true){
if((i__32263 < size__4282__auto__))
{var vec__32267 = cljs.core._nth.call(null,c__4281__auto__,i__32263);var idx = cljs.core.nth.call(null,vec__32267,(0),null);var con = cljs.core.nth.call(null,vec__32267,(1),null);cljs.core.chunk_append.call(null,b__32264,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__32263,vec__32267,idx,con,c__4281__auto__,size__4282__auto__,b__32264,s__32262__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(i__32263,vec__32267,idx,con,c__4281__auto__,size__4282__auto__,b__32264,s__32262__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__32285 = (i__32263 + (1));
i__32263 = G__32285;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32264),iter__32261.call(null,cljs.core.chunk_rest.call(null,s__32262__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32264),null);
}
} else
{var vec__32268 = cljs.core.first.call(null,s__32262__$2);var idx = cljs.core.nth.call(null,vec__32268,(0),null);var con = cljs.core.nth.call(null,vec__32268,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__32268,idx,con,s__32262__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(vec__32268,idx,con,s__32262__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__32261.call(null,cljs.core.rest.call(null,s__32262__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results){
return (function iter__32269(s__32270){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results){
return (function (){var s__32270__$1 = s__32270;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32270__$1);if(temp__4126__auto__)
{var s__32270__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32270__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__32270__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__32272 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__32271 = (0);while(true){
if((i__32271 < size__4282__auto__))
{var vec__32275 = cljs.core._nth.call(null,c__4281__auto__,i__32271);var idx = cljs.core.nth.call(null,vec__32275,(0),null);var pc = cljs.core.nth.call(null,vec__32275,(1),null);cljs.core.chunk_append.call(null,b__32272,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__32271,vec__32275,idx,pc,c__4281__auto__,size__4282__auto__,b__32272,s__32270__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(i__32271,vec__32275,idx,pc,c__4281__auto__,size__4282__auto__,b__32272,s__32270__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__32286 = (i__32271 + (1));
i__32271 = G__32286;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32272),iter__32269.call(null,cljs.core.chunk_rest.call(null,s__32270__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32272),null);
}
} else
{var vec__32276 = cljs.core.first.call(null,s__32270__$2);var idx = cljs.core.nth.call(null,vec__32276,(0),null);var pc = cljs.core.nth.call(null,vec__32276,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__32276,idx,pc,s__32270__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(vec__32276,idx,pc,s__32270__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__32269.call(null,cljs.core.rest.call(null,s__32270__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results){
return (function iter__32277(s__32278){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results){
return (function (){var s__32278__$1 = s__32278;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32278__$1);if(temp__4126__auto__)
{var s__32278__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32278__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__32278__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__32280 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__32279 = (0);while(true){
if((i__32279 < size__4282__auto__))
{var vec__32283 = cljs.core._nth.call(null,c__4281__auto__,i__32279);var idx = cljs.core.nth.call(null,vec__32283,(0),null);var inv = cljs.core.nth.call(null,vec__32283,(1),null);cljs.core.chunk_append.call(null,b__32280,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__32279,vec__32283,idx,inv,c__4281__auto__,size__4282__auto__,b__32280,s__32278__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(i__32279,vec__32283,idx,inv,c__4281__auto__,size__4282__auto__,b__32280,s__32278__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__32287 = (i__32279 + (1));
i__32279 = G__32287;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32280),iter__32277.call(null,cljs.core.chunk_rest.call(null,s__32278__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32280),null);
}
} else
{var vec__32284 = cljs.core.first.call(null,s__32278__$2);var idx = cljs.core.nth.call(null,vec__32284,(0),null);var inv = cljs.core.nth.call(null,vec__32284,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__32284,idx,inv,s__32278__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(vec__32284,idx,inv,s__32278__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__32277.call(null,cljs.core.rest.call(null,s__32278__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t32258.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results){
return (function (_32260){var self__ = this;
var _32260__$1 = this;return self__.meta32259;
});})(map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t32258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results){
return (function (_32260,meta32259__$1){var self__ = this;
var _32260__$1 = this;return (new clustermap.components.search.t32258(self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.map__32255,self__.view,self__.portfolio_companies,self__.constituencies,self__.investor_companies,self__.selection_value,self__.comm,self__.p__32222,self__.selection_type,self__.map__32257,self__.map__32254,self__.map__32256,meta32259__$1));
});})(map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t32258 = ((function (map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results){
return (function __GT_t32258(search_results__$1,search_component__$1,owner__$1,path_fn__$2,map__32255__$2,view__$1,portfolio_companies__$1,constituencies__$1,investor_companies__$1,selection_value__$1,comm__$1,p__32222__$1,selection_type__$1,map__32257__$2,map__32254__$2,map__32256__$2,meta32259){return (new clustermap.components.search.t32258(search_results__$1,search_component__$1,owner__$1,path_fn__$2,map__32255__$2,view__$1,portfolio_companies__$1,constituencies__$1,investor_companies__$1,selection_value__$1,comm__$1,p__32222__$1,selection_type__$1,map__32257__$2,map__32254__$2,map__32256__$2,meta32259));
});})(map__32256,map__32256__$1,path_fn,comm,path_fn__$1,map__32257,map__32257__$1,investor_companies,portfolio_companies,constituencies,map__32254,map__32254__$1,map__32255,map__32255__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t32258(search_results,search_component,owner,path_fn__$1,map__32255__$1,view,portfolio_companies,constituencies,investor_companies,selection_value,comm,p__32222,selection_type,map__32257__$1,map__32254__$1,map__32256__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
