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
clustermap.components.search.search_result_link = (function search_result_link(p__38635,owner,p__38636){var map__38645 = p__38635;var map__38645__$1 = ((cljs.core.seq_QMARK_(map__38645))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38645):map__38645);var search_result = map__38645__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38645__$1,cljs.core.constant$keyword$822);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38645__$1,cljs.core.constant$keyword$852);var map__38646 = p__38636;var map__38646__$1 = ((cljs.core.seq_QMARK_(map__38646))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38646):map__38646);var opts = map__38646__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38646__$1,cljs.core.constant$keyword$905);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38646__$1,cljs.core.constant$keyword$915);if(typeof clustermap.components.search.t38647 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t38647 = (function (owner,path_fn,p__38635,search_result_link,name,comm,search_result,type,map__38645,map__38646,p__38636,opts,meta38648){
this.owner = owner;
this.path_fn = path_fn;
this.p__38635 = p__38635;
this.search_result_link = search_result_link;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.map__38645 = map__38645;
this.map__38646 = map__38646;
this.p__38636 = p__38636;
this.opts = opts;
this.meta38648 = meta38648;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t38647.cljs$lang$type = true;
clustermap.components.search.t38647.cljs$lang$ctorStr = "clustermap.components.search/t38647";
clustermap.components.search.t38647.cljs$lang$ctorPrWriter = ((function (map__38645,map__38645__$1,search_result,type,name,map__38646,map__38646__$1,opts,path_fn,comm){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"clustermap.components.search/t38647");
});})(map__38645,map__38645__$1,search_result,type,name,map__38646,map__38646__$1,opts,path_fn,comm))
;
clustermap.components.search.t38647.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t38647.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__38645,map__38645__$1,search_result,type,name,map__38646,map__38646__$1,opts,path_fn,comm){
return (function (this$,p__38650){var self__ = this;
var map__38651 = p__38650;var map__38651__$1 = ((cljs.core.seq_QMARK_(map__38651))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38651):map__38651);var state = map__38651__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38651__$1,cljs.core.constant$keyword$858);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__38651,map__38651__$1,state,selected,map__38645,map__38645__$1,search_result,type,name,map__38646,map__38646__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__38652 = l;var G__38652__$1 = (((G__38652 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__38652));var G__38652__$2 = (((G__38652__$1 == null))?null:G__38652__$1.parents(".search-component"));var G__38652__$3 = (((G__38652__$2 == null))?null:G__38652__$2.toggle());return G__38652__$3;
});})(path,this$__$1,map__38651,map__38651__$1,state,selected,map__38645,map__38645__$1,search_result,type,name,map__38646,map__38646__$1,opts,path_fn,comm))
},sablono.interpreter.interpret(self__.name)));
});})(map__38645,map__38645__$1,search_result,type,name,map__38646,map__38646__$1,opts,path_fn,comm))
;
clustermap.components.search.t38647.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38645,map__38645__$1,search_result,type,name,map__38646,map__38646__$1,opts,path_fn,comm){
return (function (_38649){var self__ = this;
var _38649__$1 = this;return self__.meta38648;
});})(map__38645,map__38645__$1,search_result,type,name,map__38646,map__38646__$1,opts,path_fn,comm))
;
clustermap.components.search.t38647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38645,map__38645__$1,search_result,type,name,map__38646,map__38646__$1,opts,path_fn,comm){
return (function (_38649,meta38648__$1){var self__ = this;
var _38649__$1 = this;return (new clustermap.components.search.t38647(self__.owner,self__.path_fn,self__.p__38635,self__.search_result_link,self__.name,self__.comm,self__.search_result,self__.type,self__.map__38645,self__.map__38646,self__.p__38636,self__.opts,meta38648__$1));
});})(map__38645,map__38645__$1,search_result,type,name,map__38646,map__38646__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t38647 = ((function (map__38645,map__38645__$1,search_result,type,name,map__38646,map__38646__$1,opts,path_fn,comm){
return (function __GT_t38647(owner__$1,path_fn__$1,p__38635__$1,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,map__38645__$2,map__38646__$2,p__38636__$1,opts__$1,meta38648){return (new clustermap.components.search.t38647(owner__$1,path_fn__$1,p__38635__$1,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,map__38645__$2,map__38646__$2,p__38636__$1,opts__$1,meta38648));
});})(map__38645,map__38645__$1,search_result,type,name,map__38646,map__38646__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t38647(owner,path_fn,p__38635,search_result_link,name,comm,search_result,type,map__38645__$1,map__38646__$1,p__38636,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__38653,n){var map__38655 = p__38653;var map__38655__$1 = ((cljs.core.seq_QMARK_(map__38655))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38655):map__38655);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38655__$1,cljs.core.constant$keyword$909);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38655__$1,cljs.core.constant$keyword$994);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38655__$1,cljs.core.constant$keyword$976);var cons = (function (){var or__3541__auto__ = constituencies;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var pcs = (function (){var or__3541__auto__ = portfolio_companies;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var invs = (function (){var or__3541__auto__ = investor_companies;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();if((n < cljs.core.count(cons)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$910,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$907,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$908,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__38662 = cljs.core._EQ__EQ_;var expr__38663 = e.keyCode;if(cljs.core.truth_((pred__38662.cljs$core$IFn$_invoke$arity$2 ? pred__38662.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__38663) : pred__38662.call(null,clustermap.components.search.ESCAPE_KEY,expr__38663))))
{var G__38665 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__38665__$1 = (((G__38665 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__38665));var G__38665__$2 = (((G__38665__$1 == null))?null:G__38665__$1.toggle());return G__38665__$2;
} else
{if(cljs.core.truth_((pred__38662.cljs$core$IFn$_invoke$arity$2 ? pred__38662.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__38663) : pred__38662.call(null,clustermap.components.search.ENTER_KEY,expr__38663))))
{var vec__38666 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3541__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$995);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38666,(0),null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38666,(1),null);var G__38667_38668 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__38667_38669__$1 = (((G__38667_38668 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__38667_38668));var G__38667_38670__$2 = (((G__38667_38669__$1 == null))?null:G__38667_38669__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$860,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__38662.cljs$core$IFn$_invoke$arity$2 ? pred__38662.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__38663) : pred__38662.call(null,clustermap.components.search.UP_ARROW,expr__38663))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$995,((function (){var or__3541__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$995);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_((pred__38662.cljs$core$IFn$_invoke$arity$2 ? pred__38662.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__38663) : pred__38662.call(null,clustermap.components.search.DOWN_ARROW,expr__38663))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$995,((function (){var or__3541__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$995);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
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
clustermap.components.search.search_component = (function search_component(p__38671,owner){var map__38703 = p__38671;var map__38703__$1 = ((cljs.core.seq_QMARK_(map__38703))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38703):map__38703);var map__38704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38703__$1,cljs.core.constant$keyword$969);var map__38704__$1 = ((cljs.core.seq_QMARK_(map__38704))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38704):map__38704);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38704__$1,cljs.core.constant$keyword$822);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38704__$1,cljs.core.constant$keyword$853);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38703__$1,cljs.core.constant$keyword$996);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38703__$1,cljs.core.constant$keyword$997);var map__38705 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__38705__$1 = ((cljs.core.seq_QMARK_(map__38705))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38705):map__38705);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38705__$1,cljs.core.constant$keyword$905);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38705__$1,cljs.core.constant$keyword$915);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,view);var map__38706 = search_results;var map__38706__$1 = ((cljs.core.seq_QMARK_(map__38706))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38706):map__38706);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38706__$1,cljs.core.constant$keyword$909);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38706__$1,cljs.core.constant$keyword$994);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38706__$1,cljs.core.constant$keyword$976);if(typeof clustermap.components.search.t38707 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t38707 = (function (map__38703,search_results,p__38671,search_component,owner,path_fn,view,map__38706,portfolio_companies,constituencies,map__38705,investor_companies,selection_value,comm,selection_type,map__38704,meta38708){
this.map__38703 = map__38703;
this.search_results = search_results;
this.p__38671 = p__38671;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.map__38706 = map__38706;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.map__38705 = map__38705;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.comm = comm;
this.selection_type = selection_type;
this.map__38704 = map__38704;
this.meta38708 = meta38708;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t38707.cljs$lang$type = true;
clustermap.components.search.t38707.cljs$lang$ctorStr = "clustermap.components.search/t38707";
clustermap.components.search.t38707.cljs$lang$ctorPrWriter = ((function (map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"clustermap.components.search/t38707");
});})(map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t38707.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t38707.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$998,e.target.value], null));
});})(this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results))
}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$998,e.target.value], null));
});})(this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results))
}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$998,""], null));
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"search-field").value = "";
});})(this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3541__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3541__auto____$1))
{return or__3541__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3541__auto__ = cljs.core.constant$keyword$995.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return (0);
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$995.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$995,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$999,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$835,"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$846,cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$847,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$835,"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_cons))?(function (){var iter__4266__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results){
return (function iter__38710(s__38711){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results){
return (function (){var s__38711__$1 = s__38711;while(true){
var temp__4126__auto__ = cljs.core.seq(s__38711__$1);if(temp__4126__auto__)
{var s__38711__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__38711__$2))
{var c__4264__auto__ = cljs.core.chunk_first(s__38711__$2);var size__4265__auto__ = cljs.core.count(c__4264__auto__);var b__38713 = cljs.core.chunk_buffer(size__4265__auto__);if((function (){var i__38712 = (0);while(true){
if((i__38712 < size__4265__auto__))
{var vec__38716 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4264__auto__,i__38712);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38716,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38716,(1),null);cljs.core.chunk_append(b__38713,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$898,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$915,self__.comm,cljs.core.constant$keyword$905,self__.path_fn], null),cljs.core.constant$keyword$897,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$858,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$892,((function (i__38712,vec__38716,idx,con,c__4264__auto__,size__4265__auto__,b__38713,s__38711__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$822,cljs.core.constant$keyword$910,cljs.core.array_seq([cljs.core.constant$keyword$824,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$825),cljs.core.constant$keyword$1000,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$825)))], 0));
});})(i__38712,vec__38716,idx,con,c__4264__auto__,size__4265__auto__,b__38713,s__38711__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$895,cljs.core.constant$keyword$1000], null)));
{
var G__38734 = (i__38712 + (1));
i__38712 = G__38734;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38713),iter__38710(cljs.core.chunk_rest(s__38711__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38713),null);
}
} else
{var vec__38717 = cljs.core.first(s__38711__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38717,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38717,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$898,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$915,self__.comm,cljs.core.constant$keyword$905,self__.path_fn], null),cljs.core.constant$keyword$897,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$858,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$892,((function (vec__38717,idx,con,s__38711__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$822,cljs.core.constant$keyword$910,cljs.core.array_seq([cljs.core.constant$keyword$824,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$825),cljs.core.constant$keyword$1000,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$825)))], 0));
});})(vec__38717,idx,con,s__38711__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$895,cljs.core.constant$keyword$1000], null)),iter__38710(cljs.core.rest(s__38711__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results))
;return iter__4266__auto__(idx_cons);
})():null),cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$847,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$835,"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?(function (){var iter__4266__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results){
return (function iter__38718(s__38719){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results){
return (function (){var s__38719__$1 = s__38719;while(true){
var temp__4126__auto__ = cljs.core.seq(s__38719__$1);if(temp__4126__auto__)
{var s__38719__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__38719__$2))
{var c__4264__auto__ = cljs.core.chunk_first(s__38719__$2);var size__4265__auto__ = cljs.core.count(c__4264__auto__);var b__38721 = cljs.core.chunk_buffer(size__4265__auto__);if((function (){var i__38720 = (0);while(true){
if((i__38720 < size__4265__auto__))
{var vec__38724 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4264__auto__,i__38720);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38724,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38724,(1),null);cljs.core.chunk_append(b__38721,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$898,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$915,self__.comm,cljs.core.constant$keyword$905,self__.path_fn], null),cljs.core.constant$keyword$897,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$858,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$892,((function (i__38720,vec__38724,idx,pc,c__4264__auto__,size__4265__auto__,b__38721,s__38719__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$822,cljs.core.constant$keyword$907,cljs.core.array_seq([cljs.core.constant$keyword$824,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$918),cljs.core.constant$keyword$1000,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$918)))], 0));
});})(i__38720,vec__38724,idx,pc,c__4264__auto__,size__4265__auto__,b__38721,s__38719__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$895,cljs.core.constant$keyword$1000], null)));
{
var G__38735 = (i__38720 + (1));
i__38720 = G__38735;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38721),iter__38718(cljs.core.chunk_rest(s__38719__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38721),null);
}
} else
{var vec__38725 = cljs.core.first(s__38719__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38725,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38725,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$898,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$915,self__.comm,cljs.core.constant$keyword$905,self__.path_fn], null),cljs.core.constant$keyword$897,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$858,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$892,((function (vec__38725,idx,pc,s__38719__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$822,cljs.core.constant$keyword$907,cljs.core.array_seq([cljs.core.constant$keyword$824,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$918),cljs.core.constant$keyword$1000,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$918)))], 0));
});})(vec__38725,idx,pc,s__38719__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$895,cljs.core.constant$keyword$1000], null)),iter__38718(cljs.core.rest(s__38719__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results))
;return iter__4266__auto__(idx_pcs);
})():null),cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$847,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$835,"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?(function (){var iter__4266__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results){
return (function iter__38726(s__38727){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results){
return (function (){var s__38727__$1 = s__38727;while(true){
var temp__4126__auto__ = cljs.core.seq(s__38727__$1);if(temp__4126__auto__)
{var s__38727__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__38727__$2))
{var c__4264__auto__ = cljs.core.chunk_first(s__38727__$2);var size__4265__auto__ = cljs.core.count(c__4264__auto__);var b__38729 = cljs.core.chunk_buffer(size__4265__auto__);if((function (){var i__38728 = (0);while(true){
if((i__38728 < size__4265__auto__))
{var vec__38732 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4264__auto__,i__38728);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38732,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38732,(1),null);cljs.core.chunk_append(b__38729,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$898,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$915,self__.comm,cljs.core.constant$keyword$905,self__.path_fn], null),cljs.core.constant$keyword$897,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$858,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$892,((function (i__38728,vec__38732,idx,inv,c__4264__auto__,size__4265__auto__,b__38729,s__38727__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$822,cljs.core.constant$keyword$908,cljs.core.array_seq([cljs.core.constant$keyword$824,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$921),cljs.core.constant$keyword$1000,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$921)))], 0));
});})(i__38728,vec__38732,idx,inv,c__4264__auto__,size__4265__auto__,b__38729,s__38727__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$895,cljs.core.constant$keyword$1000], null)));
{
var G__38736 = (i__38728 + (1));
i__38728 = G__38736;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38729),iter__38726(cljs.core.chunk_rest(s__38727__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38729),null);
}
} else
{var vec__38733 = cljs.core.first(s__38727__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38733,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38733,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$898,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$915,self__.comm,cljs.core.constant$keyword$905,self__.path_fn], null),cljs.core.constant$keyword$897,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$858,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$892,((function (vec__38733,idx,inv,s__38727__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$822,cljs.core.constant$keyword$908,cljs.core.array_seq([cljs.core.constant$keyword$824,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$921),cljs.core.constant$keyword$1000,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$921)))], 0));
});})(vec__38733,idx,inv,s__38727__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$895,cljs.core.constant$keyword$1000], null)),iter__38726(cljs.core.rest(s__38727__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results))
;return iter__4266__auto__(idx_invs);
})():null)], null)], null);
})():null)));
});})(map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t38707.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results){
return (function (_38709){var self__ = this;
var _38709__$1 = this;return self__.meta38708;
});})(map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t38707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results){
return (function (_38709,meta38708__$1){var self__ = this;
var _38709__$1 = this;return (new clustermap.components.search.t38707(self__.map__38703,self__.search_results,self__.p__38671,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.map__38706,self__.portfolio_companies,self__.constituencies,self__.map__38705,self__.investor_companies,self__.selection_value,self__.comm,self__.selection_type,self__.map__38704,meta38708__$1));
});})(map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t38707 = ((function (map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results){
return (function __GT_t38707(map__38703__$2,search_results__$1,p__38671__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,map__38706__$2,portfolio_companies__$1,constituencies__$1,map__38705__$2,investor_companies__$1,selection_value__$1,comm__$1,selection_type__$1,map__38704__$2,meta38708){return (new clustermap.components.search.t38707(map__38703__$2,search_results__$1,p__38671__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,map__38706__$2,portfolio_companies__$1,constituencies__$1,map__38705__$2,investor_companies__$1,selection_value__$1,comm__$1,selection_type__$1,map__38704__$2,meta38708));
});})(map__38705,map__38705__$1,path_fn,comm,path_fn__$1,map__38706,map__38706__$1,investor_companies,portfolio_companies,constituencies,map__38703,map__38703__$1,map__38704,map__38704__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t38707(map__38703__$1,search_results,p__38671,search_component,owner,path_fn__$1,view,map__38706__$1,portfolio_companies,constituencies,map__38705__$1,investor_companies,selection_value,comm,selection_type,map__38704__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$900,shared,cljs.core.constant$keyword$903,document.getElementById(elem_id)], null));
});
