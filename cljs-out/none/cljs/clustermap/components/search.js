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
clustermap.components.search.search_result_link = (function search_result_link(p__61235,owner,p__61236){var map__61245 = p__61235;var map__61245__$1 = ((cljs.core.seq_QMARK_.call(null,map__61245))?cljs.core.apply.call(null,cljs.core.hash_map,map__61245):map__61245);var search_result = map__61245__$1;var type = cljs.core.get.call(null,map__61245__$1,new cljs.core.Keyword(null,"type","type",1174270348));var name = cljs.core.get.call(null,map__61245__$1,new cljs.core.Keyword(null,"name","name",1843675177));var map__61246 = p__61236;var map__61246__$1 = ((cljs.core.seq_QMARK_.call(null,map__61246))?cljs.core.apply.call(null,cljs.core.hash_map,map__61246):map__61246);var opts = map__61246__$1;var path_fn = cljs.core.get.call(null,map__61246__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__61246__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.search.t61247 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t61247 = (function (owner,path_fn,p__61236,search_result_link,map__61245,name,comm,p__61235,search_result,type,map__61246,opts,meta61248){
this.owner = owner;
this.path_fn = path_fn;
this.p__61236 = p__61236;
this.search_result_link = search_result_link;
this.map__61245 = map__61245;
this.name = name;
this.comm = comm;
this.p__61235 = p__61235;
this.search_result = search_result;
this.type = type;
this.map__61246 = map__61246;
this.opts = opts;
this.meta61248 = meta61248;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t61247.cljs$lang$type = true;
clustermap.components.search.t61247.cljs$lang$ctorStr = "clustermap.components.search/t61247";
clustermap.components.search.t61247.cljs$lang$ctorPrWriter = ((function (map__61245,map__61245__$1,search_result,type,name,map__61246,map__61246__$1,opts,path_fn,comm){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.search/t61247");
});})(map__61245,map__61245__$1,search_result,type,name,map__61246,map__61246__$1,opts,path_fn,comm))
;
clustermap.components.search.t61247.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t61247.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__61245,map__61245__$1,search_result,type,name,map__61246,map__61246__$1,opts,path_fn,comm){
return (function (this$,p__61250){var self__ = this;
var map__61251 = p__61250;var map__61251__$1 = ((cljs.core.seq_QMARK_.call(null,map__61251))?cljs.core.apply.call(null,cljs.core.hash_map,map__61251):map__61251);var state = map__61251__$1;var selected = cljs.core.get.call(null,map__61251__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__61251,map__61251__$1,state,selected,map__61245,map__61245__$1,search_result,type,name,map__61246,map__61246__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__61252 = l;var G__61252__$1 = (((G__61252 == null))?null:jayq.core.$.call(null,G__61252));var G__61252__$2 = (((G__61252__$1 == null))?null:G__61252__$1.parents(".search-component"));var G__61252__$3 = (((G__61252__$2 == null))?null:G__61252__$2.toggle());return G__61252__$3;
});})(path,this$__$1,map__61251,map__61251__$1,state,selected,map__61245,map__61245__$1,search_result,type,name,map__61246,map__61246__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__61245,map__61245__$1,search_result,type,name,map__61246,map__61246__$1,opts,path_fn,comm))
;
clustermap.components.search.t61247.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__61245,map__61245__$1,search_result,type,name,map__61246,map__61246__$1,opts,path_fn,comm){
return (function (_61249){var self__ = this;
var _61249__$1 = this;return self__.meta61248;
});})(map__61245,map__61245__$1,search_result,type,name,map__61246,map__61246__$1,opts,path_fn,comm))
;
clustermap.components.search.t61247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__61245,map__61245__$1,search_result,type,name,map__61246,map__61246__$1,opts,path_fn,comm){
return (function (_61249,meta61248__$1){var self__ = this;
var _61249__$1 = this;return (new clustermap.components.search.t61247(self__.owner,self__.path_fn,self__.p__61236,self__.search_result_link,self__.map__61245,self__.name,self__.comm,self__.p__61235,self__.search_result,self__.type,self__.map__61246,self__.opts,meta61248__$1));
});})(map__61245,map__61245__$1,search_result,type,name,map__61246,map__61246__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t61247 = ((function (map__61245,map__61245__$1,search_result,type,name,map__61246,map__61246__$1,opts,path_fn,comm){
return (function __GT_t61247(owner__$1,path_fn__$1,p__61236__$1,search_result_link__$1,map__61245__$2,name__$1,comm__$1,p__61235__$1,search_result__$1,type__$1,map__61246__$2,opts__$1,meta61248){return (new clustermap.components.search.t61247(owner__$1,path_fn__$1,p__61236__$1,search_result_link__$1,map__61245__$2,name__$1,comm__$1,p__61235__$1,search_result__$1,type__$1,map__61246__$2,opts__$1,meta61248));
});})(map__61245,map__61245__$1,search_result,type,name,map__61246,map__61246__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t61247(owner,path_fn,p__61236,search_result_link,map__61245__$1,name,comm,p__61235,search_result,type,map__61246__$1,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__61253,n){var map__61255 = p__61253;var map__61255__$1 = ((cljs.core.seq_QMARK_.call(null,map__61255))?cljs.core.apply.call(null,cljs.core.hash_map,map__61255):map__61255);var investor_companies = cljs.core.get.call(null,map__61255__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__61255__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__61255__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));var cons = (function (){var or__3558__auto__ = constituencies;if(cljs.core.truth_(or__3558__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__61262 = cljs.core._EQ__EQ_;var expr__61263 = e.keyCode;if(cljs.core.truth_(pred__61262.call(null,clustermap.components.search.ESCAPE_KEY,expr__61263)))
{var G__61265 = om.core.get_node.call(null,owner,"search-component");var G__61265__$1 = (((G__61265 == null))?null:jayq.core.$.call(null,G__61265));var G__61265__$2 = (((G__61265__$1 == null))?null:G__61265__$1.toggle());return G__61265__$2;
} else
{if(cljs.core.truth_(pred__61262.call(null,clustermap.components.search.ENTER_KEY,expr__61263)))
{var vec__61266 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3558__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.call(null,vec__61266,(0),null);var res = cljs.core.nth.call(null,vec__61266,(1),null);var G__61267_61268 = om.core.get_node.call(null,owner,"search-component");var G__61267_61269__$1 = (((G__61267_61268 == null))?null:jayq.core.$.call(null,G__61267_61268));var G__61267_61270__$2 = (((G__61267_61269__$1 == null))?null:G__61267_61269__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__61262.call(null,clustermap.components.search.UP_ARROW,expr__61263)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3558__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_(pred__61262.call(null,clustermap.components.search.DOWN_ARROW,expr__61263)))
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
clustermap.components.search.search_component = (function search_component(p__61271,owner){var map__61303 = p__61271;var map__61303__$1 = ((cljs.core.seq_QMARK_.call(null,map__61303))?cljs.core.apply.call(null,cljs.core.hash_map,map__61303):map__61303);var map__61304 = cljs.core.get.call(null,map__61303__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var map__61304__$1 = ((cljs.core.seq_QMARK_.call(null,map__61304))?cljs.core.apply.call(null,cljs.core.hash_map,map__61304):map__61304);var selection_type = cljs.core.get.call(null,map__61304__$1,new cljs.core.Keyword(null,"type","type",1174270348));var selection_value = cljs.core.get.call(null,map__61304__$1,new cljs.core.Keyword(null,"value","value",305978217));var view = cljs.core.get.call(null,map__61303__$1,new cljs.core.Keyword(null,"view","view",1247994814));var search_results = cljs.core.get.call(null,map__61303__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));var map__61305 = om.core.get_shared.call(null,owner);var map__61305__$1 = ((cljs.core.seq_QMARK_.call(null,map__61305))?cljs.core.apply.call(null,cljs.core.hash_map,map__61305):map__61305);var path_fn = cljs.core.get.call(null,map__61305__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__61305__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__61306 = search_results;var map__61306__$1 = ((cljs.core.seq_QMARK_.call(null,map__61306))?cljs.core.apply.call(null,cljs.core.hash_map,map__61306):map__61306);var investor_companies = cljs.core.get.call(null,map__61306__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__61306__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__61306__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));if(typeof clustermap.components.search.t61307 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t61307 = (function (search_results,map__61303,search_component,owner,path_fn,view,portfolio_companies,constituencies,map__61306,investor_companies,selection_value,comm,p__61271,selection_type,map__61305,map__61304,meta61308){
this.search_results = search_results;
this.map__61303 = map__61303;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.map__61306 = map__61306;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.comm = comm;
this.p__61271 = p__61271;
this.selection_type = selection_type;
this.map__61305 = map__61305;
this.map__61304 = map__61304;
this.meta61308 = meta61308;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t61307.cljs$lang$type = true;
clustermap.components.search.t61307.cljs$lang$ctorStr = "clustermap.components.search/t61307";
clustermap.components.search.t61307.cljs$lang$ctorPrWriter = ((function (map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.search/t61307");
});})(map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t61307.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t61307.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "search-component", "ref": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),e.target.value], null));
});})(this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results))
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results){
return (function iter__61310(s__61311){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results){
return (function (){var s__61311__$1 = s__61311;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__61311__$1);if(temp__4126__auto__)
{var s__61311__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__61311__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__61311__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__61313 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__61312 = (0);while(true){
if((i__61312 < size__4282__auto__))
{var vec__61316 = cljs.core._nth.call(null,c__4281__auto__,i__61312);var idx = cljs.core.nth.call(null,vec__61316,(0),null);var con = cljs.core.nth.call(null,vec__61316,(1),null);cljs.core.chunk_append.call(null,b__61313,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__61312,vec__61316,idx,con,c__4281__auto__,size__4282__auto__,b__61313,s__61311__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(i__61312,vec__61316,idx,con,c__4281__auto__,size__4282__auto__,b__61313,s__61311__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__61334 = (i__61312 + (1));
i__61312 = G__61334;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61313),iter__61310.call(null,cljs.core.chunk_rest.call(null,s__61311__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61313),null);
}
} else
{var vec__61317 = cljs.core.first.call(null,s__61311__$2);var idx = cljs.core.nth.call(null,vec__61317,(0),null);var con = cljs.core.nth.call(null,vec__61317,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__61317,idx,con,s__61311__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(vec__61317,idx,con,s__61311__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__61310.call(null,cljs.core.rest.call(null,s__61311__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results){
return (function iter__61318(s__61319){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results){
return (function (){var s__61319__$1 = s__61319;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__61319__$1);if(temp__4126__auto__)
{var s__61319__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__61319__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__61319__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__61321 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__61320 = (0);while(true){
if((i__61320 < size__4282__auto__))
{var vec__61324 = cljs.core._nth.call(null,c__4281__auto__,i__61320);var idx = cljs.core.nth.call(null,vec__61324,(0),null);var pc = cljs.core.nth.call(null,vec__61324,(1),null);cljs.core.chunk_append.call(null,b__61321,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__61320,vec__61324,idx,pc,c__4281__auto__,size__4282__auto__,b__61321,s__61319__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(i__61320,vec__61324,idx,pc,c__4281__auto__,size__4282__auto__,b__61321,s__61319__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__61335 = (i__61320 + (1));
i__61320 = G__61335;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61321),iter__61318.call(null,cljs.core.chunk_rest.call(null,s__61319__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61321),null);
}
} else
{var vec__61325 = cljs.core.first.call(null,s__61319__$2);var idx = cljs.core.nth.call(null,vec__61325,(0),null);var pc = cljs.core.nth.call(null,vec__61325,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__61325,idx,pc,s__61319__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(vec__61325,idx,pc,s__61319__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__61318.call(null,cljs.core.rest.call(null,s__61319__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results){
return (function iter__61326(s__61327){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results){
return (function (){var s__61327__$1 = s__61327;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__61327__$1);if(temp__4126__auto__)
{var s__61327__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__61327__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__61327__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__61329 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__61328 = (0);while(true){
if((i__61328 < size__4282__auto__))
{var vec__61332 = cljs.core._nth.call(null,c__4281__auto__,i__61328);var idx = cljs.core.nth.call(null,vec__61332,(0),null);var inv = cljs.core.nth.call(null,vec__61332,(1),null);cljs.core.chunk_append.call(null,b__61329,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__61328,vec__61332,idx,inv,c__4281__auto__,size__4282__auto__,b__61329,s__61327__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(i__61328,vec__61332,idx,inv,c__4281__auto__,size__4282__auto__,b__61329,s__61327__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__61336 = (i__61328 + (1));
i__61328 = G__61336;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61329),iter__61326.call(null,cljs.core.chunk_rest.call(null,s__61327__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61329),null);
}
} else
{var vec__61333 = cljs.core.first.call(null,s__61327__$2);var idx = cljs.core.nth.call(null,vec__61333,(0),null);var inv = cljs.core.nth.call(null,vec__61333,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__61333,idx,inv,s__61327__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(vec__61333,idx,inv,s__61327__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__61326.call(null,cljs.core.rest.call(null,s__61327__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t61307.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results){
return (function (_61309){var self__ = this;
var _61309__$1 = this;return self__.meta61308;
});})(map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t61307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results){
return (function (_61309,meta61308__$1){var self__ = this;
var _61309__$1 = this;return (new clustermap.components.search.t61307(self__.search_results,self__.map__61303,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.portfolio_companies,self__.constituencies,self__.map__61306,self__.investor_companies,self__.selection_value,self__.comm,self__.p__61271,self__.selection_type,self__.map__61305,self__.map__61304,meta61308__$1));
});})(map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t61307 = ((function (map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results){
return (function __GT_t61307(search_results__$1,map__61303__$2,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,map__61306__$2,investor_companies__$1,selection_value__$1,comm__$1,p__61271__$1,selection_type__$1,map__61305__$2,map__61304__$2,meta61308){return (new clustermap.components.search.t61307(search_results__$1,map__61303__$2,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,map__61306__$2,investor_companies__$1,selection_value__$1,comm__$1,p__61271__$1,selection_type__$1,map__61305__$2,map__61304__$2,meta61308));
});})(map__61305,map__61305__$1,path_fn,comm,path_fn__$1,map__61306,map__61306__$1,investor_companies,portfolio_companies,constituencies,map__61303,map__61303__$1,map__61304,map__61304__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t61307(search_results,map__61303__$1,search_component,owner,path_fn__$1,view,portfolio_companies,constituencies,map__61306__$1,investor_companies,selection_value,comm,p__61271,selection_type,map__61305__$1,map__61304__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=search.js.map