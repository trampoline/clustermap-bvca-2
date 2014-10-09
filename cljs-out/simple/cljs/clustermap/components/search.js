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
clustermap.components.search.search_result_link = (function search_result_link(p__27146,owner,p__27147){var map__27156 = p__27146;var map__27156__$1 = ((cljs.core.seq_QMARK_.call(null,map__27156))?cljs.core.apply.call(null,cljs.core.hash_map,map__27156):map__27156);var search_result = map__27156__$1;var type = cljs.core.get.call(null,map__27156__$1,new cljs.core.Keyword(null,"type","type",1174270348));var name = cljs.core.get.call(null,map__27156__$1,new cljs.core.Keyword(null,"name","name",1843675177));var map__27157 = p__27147;var map__27157__$1 = ((cljs.core.seq_QMARK_.call(null,map__27157))?cljs.core.apply.call(null,cljs.core.hash_map,map__27157):map__27157);var opts = map__27157__$1;var path_fn = cljs.core.get.call(null,map__27157__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__27157__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.search.t27158 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t27158 = (function (map__27156,owner,path_fn,search_result_link,p__27147,name,comm,search_result,type,p__27146,opts,map__27157,meta27159){
this.map__27156 = map__27156;
this.owner = owner;
this.path_fn = path_fn;
this.search_result_link = search_result_link;
this.p__27147 = p__27147;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.p__27146 = p__27146;
this.opts = opts;
this.map__27157 = map__27157;
this.meta27159 = meta27159;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t27158.cljs$lang$type = true;
clustermap.components.search.t27158.cljs$lang$ctorStr = "clustermap.components.search/t27158";
clustermap.components.search.t27158.cljs$lang$ctorPrWriter = ((function (map__27156,map__27156__$1,search_result,type,name,map__27157,map__27157__$1,opts,path_fn,comm){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.search/t27158");
});})(map__27156,map__27156__$1,search_result,type,name,map__27157,map__27157__$1,opts,path_fn,comm))
;
clustermap.components.search.t27158.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t27158.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__27156,map__27156__$1,search_result,type,name,map__27157,map__27157__$1,opts,path_fn,comm){
return (function (this$,p__27161){var self__ = this;
var map__27162 = p__27161;var map__27162__$1 = ((cljs.core.seq_QMARK_.call(null,map__27162))?cljs.core.apply.call(null,cljs.core.hash_map,map__27162):map__27162);var state = map__27162__$1;var selected = cljs.core.get.call(null,map__27162__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__27162,map__27162__$1,state,selected,map__27156,map__27156__$1,search_result,type,name,map__27157,map__27157__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__27163 = l;var G__27163__$1 = (((G__27163 == null))?null:jayq.core.$.call(null,G__27163));var G__27163__$2 = (((G__27163__$1 == null))?null:G__27163__$1.parents(".search-component"));var G__27163__$3 = (((G__27163__$2 == null))?null:G__27163__$2.toggle());return G__27163__$3;
});})(path,this$__$1,map__27162,map__27162__$1,state,selected,map__27156,map__27156__$1,search_result,type,name,map__27157,map__27157__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__27156,map__27156__$1,search_result,type,name,map__27157,map__27157__$1,opts,path_fn,comm))
;
clustermap.components.search.t27158.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__27156,map__27156__$1,search_result,type,name,map__27157,map__27157__$1,opts,path_fn,comm){
return (function (_27160){var self__ = this;
var _27160__$1 = this;return self__.meta27159;
});})(map__27156,map__27156__$1,search_result,type,name,map__27157,map__27157__$1,opts,path_fn,comm))
;
clustermap.components.search.t27158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__27156,map__27156__$1,search_result,type,name,map__27157,map__27157__$1,opts,path_fn,comm){
return (function (_27160,meta27159__$1){var self__ = this;
var _27160__$1 = this;return (new clustermap.components.search.t27158(self__.map__27156,self__.owner,self__.path_fn,self__.search_result_link,self__.p__27147,self__.name,self__.comm,self__.search_result,self__.type,self__.p__27146,self__.opts,self__.map__27157,meta27159__$1));
});})(map__27156,map__27156__$1,search_result,type,name,map__27157,map__27157__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t27158 = ((function (map__27156,map__27156__$1,search_result,type,name,map__27157,map__27157__$1,opts,path_fn,comm){
return (function __GT_t27158(map__27156__$2,owner__$1,path_fn__$1,search_result_link__$1,p__27147__$1,name__$1,comm__$1,search_result__$1,type__$1,p__27146__$1,opts__$1,map__27157__$2,meta27159){return (new clustermap.components.search.t27158(map__27156__$2,owner__$1,path_fn__$1,search_result_link__$1,p__27147__$1,name__$1,comm__$1,search_result__$1,type__$1,p__27146__$1,opts__$1,map__27157__$2,meta27159));
});})(map__27156,map__27156__$1,search_result,type,name,map__27157,map__27157__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t27158(map__27156__$1,owner,path_fn,search_result_link,p__27147,name,comm,search_result,type,p__27146,opts,map__27157__$1,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__27164,n){var map__27166 = p__27164;var map__27166__$1 = ((cljs.core.seq_QMARK_.call(null,map__27166))?cljs.core.apply.call(null,cljs.core.hash_map,map__27166):map__27166);var investor_companies = cljs.core.get.call(null,map__27166__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__27166__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__27166__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));var cons = (function (){var or__3558__auto__ = constituencies;if(cljs.core.truth_(or__3558__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__27173 = cljs.core._EQ__EQ_;var expr__27174 = e.keyCode;if(cljs.core.truth_(pred__27173.call(null,clustermap.components.search.ESCAPE_KEY,expr__27174)))
{var G__27176 = om.core.get_node.call(null,owner,"search-component");var G__27176__$1 = (((G__27176 == null))?null:jayq.core.$.call(null,G__27176));var G__27176__$2 = (((G__27176__$1 == null))?null:G__27176__$1.toggle());return G__27176__$2;
} else
{if(cljs.core.truth_(pred__27173.call(null,clustermap.components.search.ENTER_KEY,expr__27174)))
{var vec__27177 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3558__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.call(null,vec__27177,(0),null);var res = cljs.core.nth.call(null,vec__27177,(1),null);var G__27178_27179 = om.core.get_node.call(null,owner,"search-component");var G__27178_27180__$1 = (((G__27178_27179 == null))?null:jayq.core.$.call(null,G__27178_27179));var G__27178_27181__$2 = (((G__27178_27180__$1 == null))?null:G__27178_27180__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__27173.call(null,clustermap.components.search.UP_ARROW,expr__27174)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3558__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_(pred__27173.call(null,clustermap.components.search.DOWN_ARROW,expr__27174)))
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
clustermap.components.search.search_component = (function search_component(p__27182,owner){var map__27214 = p__27182;var map__27214__$1 = ((cljs.core.seq_QMARK_.call(null,map__27214))?cljs.core.apply.call(null,cljs.core.hash_map,map__27214):map__27214);var map__27215 = cljs.core.get.call(null,map__27214__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var map__27215__$1 = ((cljs.core.seq_QMARK_.call(null,map__27215))?cljs.core.apply.call(null,cljs.core.hash_map,map__27215):map__27215);var selection_type = cljs.core.get.call(null,map__27215__$1,new cljs.core.Keyword(null,"type","type",1174270348));var selection_value = cljs.core.get.call(null,map__27215__$1,new cljs.core.Keyword(null,"value","value",305978217));var view = cljs.core.get.call(null,map__27214__$1,new cljs.core.Keyword(null,"view","view",1247994814));var search_results = cljs.core.get.call(null,map__27214__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));var map__27216 = om.core.get_shared.call(null,owner);var map__27216__$1 = ((cljs.core.seq_QMARK_.call(null,map__27216))?cljs.core.apply.call(null,cljs.core.hash_map,map__27216):map__27216);var path_fn = cljs.core.get.call(null,map__27216__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__27216__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__27217 = search_results;var map__27217__$1 = ((cljs.core.seq_QMARK_.call(null,map__27217))?cljs.core.apply.call(null,cljs.core.hash_map,map__27217):map__27217);var investor_companies = cljs.core.get.call(null,map__27217__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__27217__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__27217__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));if(typeof clustermap.components.search.t27218 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t27218 = (function (search_results,search_component,owner,path_fn,map__27216,view,portfolio_companies,map__27215,constituencies,investor_companies,selection_value,comm,selection_type,map__27214,p__27182,map__27217,meta27219){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.map__27216 = map__27216;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.map__27215 = map__27215;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.comm = comm;
this.selection_type = selection_type;
this.map__27214 = map__27214;
this.p__27182 = p__27182;
this.map__27217 = map__27217;
this.meta27219 = meta27219;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t27218.cljs$lang$type = true;
clustermap.components.search.t27218.cljs$lang$ctorStr = "clustermap.components.search/t27218";
clustermap.components.search.t27218.cljs$lang$ctorPrWriter = ((function (map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.search/t27218");
});})(map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t27218.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t27218.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "search-component", "ref": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),e.target.value], null));
});})(this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results))
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results){
return (function iter__27221(s__27222){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results){
return (function (){var s__27222__$1 = s__27222;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27222__$1);if(temp__4126__auto__)
{var s__27222__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27222__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__27222__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__27224 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__27223 = (0);while(true){
if((i__27223 < size__4282__auto__))
{var vec__27227 = cljs.core._nth.call(null,c__4281__auto__,i__27223);var idx = cljs.core.nth.call(null,vec__27227,(0),null);var con = cljs.core.nth.call(null,vec__27227,(1),null);cljs.core.chunk_append.call(null,b__27224,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__27223,vec__27227,idx,con,c__4281__auto__,size__4282__auto__,b__27224,s__27222__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(i__27223,vec__27227,idx,con,c__4281__auto__,size__4282__auto__,b__27224,s__27222__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__27245 = (i__27223 + (1));
i__27223 = G__27245;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27224),iter__27221.call(null,cljs.core.chunk_rest.call(null,s__27222__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27224),null);
}
} else
{var vec__27228 = cljs.core.first.call(null,s__27222__$2);var idx = cljs.core.nth.call(null,vec__27228,(0),null);var con = cljs.core.nth.call(null,vec__27228,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__27228,idx,con,s__27222__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(vec__27228,idx,con,s__27222__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__27221.call(null,cljs.core.rest.call(null,s__27222__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results){
return (function iter__27229(s__27230){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results){
return (function (){var s__27230__$1 = s__27230;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27230__$1);if(temp__4126__auto__)
{var s__27230__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27230__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__27230__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__27232 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__27231 = (0);while(true){
if((i__27231 < size__4282__auto__))
{var vec__27235 = cljs.core._nth.call(null,c__4281__auto__,i__27231);var idx = cljs.core.nth.call(null,vec__27235,(0),null);var pc = cljs.core.nth.call(null,vec__27235,(1),null);cljs.core.chunk_append.call(null,b__27232,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__27231,vec__27235,idx,pc,c__4281__auto__,size__4282__auto__,b__27232,s__27230__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(i__27231,vec__27235,idx,pc,c__4281__auto__,size__4282__auto__,b__27232,s__27230__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__27246 = (i__27231 + (1));
i__27231 = G__27246;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27232),iter__27229.call(null,cljs.core.chunk_rest.call(null,s__27230__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27232),null);
}
} else
{var vec__27236 = cljs.core.first.call(null,s__27230__$2);var idx = cljs.core.nth.call(null,vec__27236,(0),null);var pc = cljs.core.nth.call(null,vec__27236,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__27236,idx,pc,s__27230__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(vec__27236,idx,pc,s__27230__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__27229.call(null,cljs.core.rest.call(null,s__27230__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results){
return (function iter__27237(s__27238){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results){
return (function (){var s__27238__$1 = s__27238;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27238__$1);if(temp__4126__auto__)
{var s__27238__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27238__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__27238__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__27240 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__27239 = (0);while(true){
if((i__27239 < size__4282__auto__))
{var vec__27243 = cljs.core._nth.call(null,c__4281__auto__,i__27239);var idx = cljs.core.nth.call(null,vec__27243,(0),null);var inv = cljs.core.nth.call(null,vec__27243,(1),null);cljs.core.chunk_append.call(null,b__27240,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__27239,vec__27243,idx,inv,c__4281__auto__,size__4282__auto__,b__27240,s__27238__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(i__27239,vec__27243,idx,inv,c__4281__auto__,size__4282__auto__,b__27240,s__27238__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__27247 = (i__27239 + (1));
i__27239 = G__27247;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27240),iter__27237.call(null,cljs.core.chunk_rest.call(null,s__27238__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27240),null);
}
} else
{var vec__27244 = cljs.core.first.call(null,s__27238__$2);var idx = cljs.core.nth.call(null,vec__27244,(0),null);var inv = cljs.core.nth.call(null,vec__27244,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__27244,idx,inv,s__27238__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(vec__27244,idx,inv,s__27238__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__27237.call(null,cljs.core.rest.call(null,s__27238__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t27218.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results){
return (function (_27220){var self__ = this;
var _27220__$1 = this;return self__.meta27219;
});})(map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t27218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results){
return (function (_27220,meta27219__$1){var self__ = this;
var _27220__$1 = this;return (new clustermap.components.search.t27218(self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.map__27216,self__.view,self__.portfolio_companies,self__.map__27215,self__.constituencies,self__.investor_companies,self__.selection_value,self__.comm,self__.selection_type,self__.map__27214,self__.p__27182,self__.map__27217,meta27219__$1));
});})(map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t27218 = ((function (map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results){
return (function __GT_t27218(search_results__$1,search_component__$1,owner__$1,path_fn__$2,map__27216__$2,view__$1,portfolio_companies__$1,map__27215__$2,constituencies__$1,investor_companies__$1,selection_value__$1,comm__$1,selection_type__$1,map__27214__$2,p__27182__$1,map__27217__$2,meta27219){return (new clustermap.components.search.t27218(search_results__$1,search_component__$1,owner__$1,path_fn__$2,map__27216__$2,view__$1,portfolio_companies__$1,map__27215__$2,constituencies__$1,investor_companies__$1,selection_value__$1,comm__$1,selection_type__$1,map__27214__$2,p__27182__$1,map__27217__$2,meta27219));
});})(map__27216,map__27216__$1,path_fn,comm,path_fn__$1,map__27217,map__27217__$1,investor_companies,portfolio_companies,constituencies,map__27214,map__27214__$1,map__27215,map__27215__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t27218(search_results,search_component,owner,path_fn__$1,map__27216__$1,view,portfolio_companies,map__27215__$1,constituencies,investor_companies,selection_value,comm,selection_type,map__27214__$1,p__27182,map__27217__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
