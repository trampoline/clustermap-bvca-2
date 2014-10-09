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
clustermap.components.search.search_result_link = (function search_result_link(p__13918,owner,p__13919){var map__13928 = p__13918;var map__13928__$1 = ((cljs.core.seq_QMARK_.call(null,map__13928))?cljs.core.apply.call(null,cljs.core.hash_map,map__13928):map__13928);var search_result = map__13928__$1;var type = cljs.core.get.call(null,map__13928__$1,new cljs.core.Keyword(null,"type","type",1174270348));var name = cljs.core.get.call(null,map__13928__$1,new cljs.core.Keyword(null,"name","name",1843675177));var map__13929 = p__13919;var map__13929__$1 = ((cljs.core.seq_QMARK_.call(null,map__13929))?cljs.core.apply.call(null,cljs.core.hash_map,map__13929):map__13929);var opts = map__13929__$1;var path_fn = cljs.core.get.call(null,map__13929__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__13929__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.search.t13930 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t13930 = (function (owner,path_fn,p__13919,p__13918,search_result_link,name,comm,search_result,type,map__13929,opts,map__13928,meta13931){
this.owner = owner;
this.path_fn = path_fn;
this.p__13919 = p__13919;
this.p__13918 = p__13918;
this.search_result_link = search_result_link;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.map__13929 = map__13929;
this.opts = opts;
this.map__13928 = map__13928;
this.meta13931 = meta13931;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t13930.cljs$lang$type = true;
clustermap.components.search.t13930.cljs$lang$ctorStr = "clustermap.components.search/t13930";
clustermap.components.search.t13930.cljs$lang$ctorPrWriter = ((function (map__13928,map__13928__$1,search_result,type,name,map__13929,map__13929__$1,opts,path_fn,comm){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.search/t13930");
});})(map__13928,map__13928__$1,search_result,type,name,map__13929,map__13929__$1,opts,path_fn,comm))
;
clustermap.components.search.t13930.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t13930.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__13928,map__13928__$1,search_result,type,name,map__13929,map__13929__$1,opts,path_fn,comm){
return (function (this$,p__13933){var self__ = this;
var map__13934 = p__13933;var map__13934__$1 = ((cljs.core.seq_QMARK_.call(null,map__13934))?cljs.core.apply.call(null,cljs.core.hash_map,map__13934):map__13934);var state = map__13934__$1;var selected = cljs.core.get.call(null,map__13934__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__13934,map__13934__$1,state,selected,map__13928,map__13928__$1,search_result,type,name,map__13929,map__13929__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__13935 = l;var G__13935__$1 = (((G__13935 == null))?null:jayq.core.$.call(null,G__13935));var G__13935__$2 = (((G__13935__$1 == null))?null:G__13935__$1.parents(".search-component"));var G__13935__$3 = (((G__13935__$2 == null))?null:G__13935__$2.toggle());return G__13935__$3;
});})(path,this$__$1,map__13934,map__13934__$1,state,selected,map__13928,map__13928__$1,search_result,type,name,map__13929,map__13929__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__13928,map__13928__$1,search_result,type,name,map__13929,map__13929__$1,opts,path_fn,comm))
;
clustermap.components.search.t13930.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13928,map__13928__$1,search_result,type,name,map__13929,map__13929__$1,opts,path_fn,comm){
return (function (_13932){var self__ = this;
var _13932__$1 = this;return self__.meta13931;
});})(map__13928,map__13928__$1,search_result,type,name,map__13929,map__13929__$1,opts,path_fn,comm))
;
clustermap.components.search.t13930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13928,map__13928__$1,search_result,type,name,map__13929,map__13929__$1,opts,path_fn,comm){
return (function (_13932,meta13931__$1){var self__ = this;
var _13932__$1 = this;return (new clustermap.components.search.t13930(self__.owner,self__.path_fn,self__.p__13919,self__.p__13918,self__.search_result_link,self__.name,self__.comm,self__.search_result,self__.type,self__.map__13929,self__.opts,self__.map__13928,meta13931__$1));
});})(map__13928,map__13928__$1,search_result,type,name,map__13929,map__13929__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t13930 = ((function (map__13928,map__13928__$1,search_result,type,name,map__13929,map__13929__$1,opts,path_fn,comm){
return (function __GT_t13930(owner__$1,path_fn__$1,p__13919__$1,p__13918__$1,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,map__13929__$2,opts__$1,map__13928__$2,meta13931){return (new clustermap.components.search.t13930(owner__$1,path_fn__$1,p__13919__$1,p__13918__$1,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,map__13929__$2,opts__$1,map__13928__$2,meta13931));
});})(map__13928,map__13928__$1,search_result,type,name,map__13929,map__13929__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t13930(owner,path_fn,p__13919,p__13918,search_result_link,name,comm,search_result,type,map__13929__$1,opts,map__13928__$1,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__13936,n){var map__13938 = p__13936;var map__13938__$1 = ((cljs.core.seq_QMARK_.call(null,map__13938))?cljs.core.apply.call(null,cljs.core.hash_map,map__13938):map__13938);var investor_companies = cljs.core.get.call(null,map__13938__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__13938__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__13938__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));var cons = (function (){var or__3558__auto__ = constituencies;if(cljs.core.truth_(or__3558__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__13945 = cljs.core._EQ__EQ_;var expr__13946 = e.keyCode;if(cljs.core.truth_(pred__13945.call(null,clustermap.components.search.ESCAPE_KEY,expr__13946)))
{var G__13948 = om.core.get_node.call(null,owner,"search-component");var G__13948__$1 = (((G__13948 == null))?null:jayq.core.$.call(null,G__13948));var G__13948__$2 = (((G__13948__$1 == null))?null:G__13948__$1.toggle());return G__13948__$2;
} else
{if(cljs.core.truth_(pred__13945.call(null,clustermap.components.search.ENTER_KEY,expr__13946)))
{var vec__13949 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3558__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.call(null,vec__13949,(0),null);var res = cljs.core.nth.call(null,vec__13949,(1),null);var G__13950_13951 = om.core.get_node.call(null,owner,"search-component");var G__13950_13952__$1 = (((G__13950_13951 == null))?null:jayq.core.$.call(null,G__13950_13951));var G__13950_13953__$2 = (((G__13950_13952__$1 == null))?null:G__13950_13952__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__13945.call(null,clustermap.components.search.UP_ARROW,expr__13946)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3558__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_(pred__13945.call(null,clustermap.components.search.DOWN_ARROW,expr__13946)))
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
clustermap.components.search.search_component = (function search_component(p__13954,owner){var map__13986 = p__13954;var map__13986__$1 = ((cljs.core.seq_QMARK_.call(null,map__13986))?cljs.core.apply.call(null,cljs.core.hash_map,map__13986):map__13986);var map__13987 = cljs.core.get.call(null,map__13986__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var map__13987__$1 = ((cljs.core.seq_QMARK_.call(null,map__13987))?cljs.core.apply.call(null,cljs.core.hash_map,map__13987):map__13987);var selection_type = cljs.core.get.call(null,map__13987__$1,new cljs.core.Keyword(null,"type","type",1174270348));var selection_value = cljs.core.get.call(null,map__13987__$1,new cljs.core.Keyword(null,"value","value",305978217));var view = cljs.core.get.call(null,map__13986__$1,new cljs.core.Keyword(null,"view","view",1247994814));var search_results = cljs.core.get.call(null,map__13986__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));var map__13988 = om.core.get_shared.call(null,owner);var map__13988__$1 = ((cljs.core.seq_QMARK_.call(null,map__13988))?cljs.core.apply.call(null,cljs.core.hash_map,map__13988):map__13988);var path_fn = cljs.core.get.call(null,map__13988__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__13988__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__13989 = search_results;var map__13989__$1 = ((cljs.core.seq_QMARK_.call(null,map__13989))?cljs.core.apply.call(null,cljs.core.hash_map,map__13989):map__13989);var investor_companies = cljs.core.get.call(null,map__13989__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__13989__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__13989__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));if(typeof clustermap.components.search.t13990 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t13990 = (function (search_results,search_component,owner,path_fn,view,portfolio_companies,map__13987,constituencies,investor_companies,map__13989,p__13954,selection_value,comm,map__13988,selection_type,map__13986,meta13991){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.map__13987 = map__13987;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.map__13989 = map__13989;
this.p__13954 = p__13954;
this.selection_value = selection_value;
this.comm = comm;
this.map__13988 = map__13988;
this.selection_type = selection_type;
this.map__13986 = map__13986;
this.meta13991 = meta13991;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t13990.cljs$lang$type = true;
clustermap.components.search.t13990.cljs$lang$ctorStr = "clustermap.components.search/t13990";
clustermap.components.search.t13990.cljs$lang$ctorPrWriter = ((function (map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.search/t13990");
});})(map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t13990.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t13990.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "search-component", "ref": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),e.target.value], null));
});})(this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results))
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results){
return (function iter__13993(s__13994){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results){
return (function (){var s__13994__$1 = s__13994;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13994__$1);if(temp__4126__auto__)
{var s__13994__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13994__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__13994__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__13996 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__13995 = (0);while(true){
if((i__13995 < size__4282__auto__))
{var vec__13999 = cljs.core._nth.call(null,c__4281__auto__,i__13995);var idx = cljs.core.nth.call(null,vec__13999,(0),null);var con = cljs.core.nth.call(null,vec__13999,(1),null);cljs.core.chunk_append.call(null,b__13996,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__13995,vec__13999,idx,con,c__4281__auto__,size__4282__auto__,b__13996,s__13994__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(i__13995,vec__13999,idx,con,c__4281__auto__,size__4282__auto__,b__13996,s__13994__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__14017 = (i__13995 + (1));
i__13995 = G__14017;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13996),iter__13993.call(null,cljs.core.chunk_rest.call(null,s__13994__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13996),null);
}
} else
{var vec__14000 = cljs.core.first.call(null,s__13994__$2);var idx = cljs.core.nth.call(null,vec__14000,(0),null);var con = cljs.core.nth.call(null,vec__14000,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__14000,idx,con,s__13994__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(vec__14000,idx,con,s__13994__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__13993.call(null,cljs.core.rest.call(null,s__13994__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results){
return (function iter__14001(s__14002){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results){
return (function (){var s__14002__$1 = s__14002;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14002__$1);if(temp__4126__auto__)
{var s__14002__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14002__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__14002__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__14004 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__14003 = (0);while(true){
if((i__14003 < size__4282__auto__))
{var vec__14007 = cljs.core._nth.call(null,c__4281__auto__,i__14003);var idx = cljs.core.nth.call(null,vec__14007,(0),null);var pc = cljs.core.nth.call(null,vec__14007,(1),null);cljs.core.chunk_append.call(null,b__14004,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__14003,vec__14007,idx,pc,c__4281__auto__,size__4282__auto__,b__14004,s__14002__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(i__14003,vec__14007,idx,pc,c__4281__auto__,size__4282__auto__,b__14004,s__14002__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__14018 = (i__14003 + (1));
i__14003 = G__14018;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14004),iter__14001.call(null,cljs.core.chunk_rest.call(null,s__14002__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14004),null);
}
} else
{var vec__14008 = cljs.core.first.call(null,s__14002__$2);var idx = cljs.core.nth.call(null,vec__14008,(0),null);var pc = cljs.core.nth.call(null,vec__14008,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__14008,idx,pc,s__14002__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(vec__14008,idx,pc,s__14002__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__14001.call(null,cljs.core.rest.call(null,s__14002__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results){
return (function iter__14009(s__14010){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results){
return (function (){var s__14010__$1 = s__14010;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14010__$1);if(temp__4126__auto__)
{var s__14010__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14010__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__14010__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__14012 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__14011 = (0);while(true){
if((i__14011 < size__4282__auto__))
{var vec__14015 = cljs.core._nth.call(null,c__4281__auto__,i__14011);var idx = cljs.core.nth.call(null,vec__14015,(0),null);var inv = cljs.core.nth.call(null,vec__14015,(1),null);cljs.core.chunk_append.call(null,b__14012,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__14011,vec__14015,idx,inv,c__4281__auto__,size__4282__auto__,b__14012,s__14010__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(i__14011,vec__14015,idx,inv,c__4281__auto__,size__4282__auto__,b__14012,s__14010__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__14019 = (i__14011 + (1));
i__14011 = G__14019;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14012),iter__14009.call(null,cljs.core.chunk_rest.call(null,s__14010__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14012),null);
}
} else
{var vec__14016 = cljs.core.first.call(null,s__14010__$2);var idx = cljs.core.nth.call(null,vec__14016,(0),null);var inv = cljs.core.nth.call(null,vec__14016,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__14016,idx,inv,s__14010__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(vec__14016,idx,inv,s__14010__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__14009.call(null,cljs.core.rest.call(null,s__14010__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t13990.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results){
return (function (_13992){var self__ = this;
var _13992__$1 = this;return self__.meta13991;
});})(map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t13990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results){
return (function (_13992,meta13991__$1){var self__ = this;
var _13992__$1 = this;return (new clustermap.components.search.t13990(self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.portfolio_companies,self__.map__13987,self__.constituencies,self__.investor_companies,self__.map__13989,self__.p__13954,self__.selection_value,self__.comm,self__.map__13988,self__.selection_type,self__.map__13986,meta13991__$1));
});})(map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t13990 = ((function (map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results){
return (function __GT_t13990(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,map__13987__$2,constituencies__$1,investor_companies__$1,map__13989__$2,p__13954__$1,selection_value__$1,comm__$1,map__13988__$2,selection_type__$1,map__13986__$2,meta13991){return (new clustermap.components.search.t13990(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,map__13987__$2,constituencies__$1,investor_companies__$1,map__13989__$2,p__13954__$1,selection_value__$1,comm__$1,map__13988__$2,selection_type__$1,map__13986__$2,meta13991));
});})(map__13988,map__13988__$1,path_fn,comm,path_fn__$1,map__13989,map__13989__$1,investor_companies,portfolio_companies,constituencies,map__13986,map__13986__$1,map__13987,map__13987__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t13990(search_results,search_component,owner,path_fn__$1,view,portfolio_companies,map__13987__$1,constituencies,investor_companies,map__13989__$1,p__13954,selection_value,comm,map__13988__$1,selection_type,map__13986__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
