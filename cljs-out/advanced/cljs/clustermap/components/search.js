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
clustermap.components.search.search_result_link = (function search_result_link(p__38707,owner,p__38708){var map__38717 = p__38707;var map__38717__$1 = ((cljs.core.seq_QMARK_(map__38717))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38717):map__38717);var search_result = map__38717__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38717__$1,cljs.core.constant$keyword$871);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38717__$1,cljs.core.constant$keyword$903);var map__38718 = p__38708;var map__38718__$1 = ((cljs.core.seq_QMARK_(map__38718))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38718):map__38718);var opts = map__38718__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38718__$1,cljs.core.constant$keyword$955);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38718__$1,cljs.core.constant$keyword$965);if(typeof clustermap.components.search.t38719 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t38719 = (function (map__38717,p__38707,owner,path_fn,search_result_link,name,comm,search_result,type,opts,p__38708,map__38718,meta38720){
this.map__38717 = map__38717;
this.p__38707 = p__38707;
this.owner = owner;
this.path_fn = path_fn;
this.search_result_link = search_result_link;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.opts = opts;
this.p__38708 = p__38708;
this.map__38718 = map__38718;
this.meta38720 = meta38720;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t38719.cljs$lang$type = true;
clustermap.components.search.t38719.cljs$lang$ctorStr = "clustermap.components.search/t38719";
clustermap.components.search.t38719.cljs$lang$ctorPrWriter = ((function (map__38717,map__38717__$1,search_result,type,name,map__38718,map__38718__$1,opts,path_fn,comm){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.search/t38719");
});})(map__38717,map__38717__$1,search_result,type,name,map__38718,map__38718__$1,opts,path_fn,comm))
;
clustermap.components.search.t38719.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t38719.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__38717,map__38717__$1,search_result,type,name,map__38718,map__38718__$1,opts,path_fn,comm){
return (function (this$,p__38722){var self__ = this;
var map__38723 = p__38722;var map__38723__$1 = ((cljs.core.seq_QMARK_(map__38723))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38723):map__38723);var state = map__38723__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38723__$1,cljs.core.constant$keyword$908);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__38723,map__38723__$1,state,selected,map__38717,map__38717__$1,search_result,type,name,map__38718,map__38718__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__38724 = l;var G__38724__$1 = (((G__38724 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__38724));var G__38724__$2 = (((G__38724__$1 == null))?null:G__38724__$1.parents(".search-component"));var G__38724__$3 = (((G__38724__$2 == null))?null:G__38724__$2.toggle());return G__38724__$3;
});})(path,this$__$1,map__38723,map__38723__$1,state,selected,map__38717,map__38717__$1,search_result,type,name,map__38718,map__38718__$1,opts,path_fn,comm))
},sablono.interpreter.interpret(self__.name)));
});})(map__38717,map__38717__$1,search_result,type,name,map__38718,map__38718__$1,opts,path_fn,comm))
;
clustermap.components.search.t38719.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38717,map__38717__$1,search_result,type,name,map__38718,map__38718__$1,opts,path_fn,comm){
return (function (_38721){var self__ = this;
var _38721__$1 = this;return self__.meta38720;
});})(map__38717,map__38717__$1,search_result,type,name,map__38718,map__38718__$1,opts,path_fn,comm))
;
clustermap.components.search.t38719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38717,map__38717__$1,search_result,type,name,map__38718,map__38718__$1,opts,path_fn,comm){
return (function (_38721,meta38720__$1){var self__ = this;
var _38721__$1 = this;return (new clustermap.components.search.t38719(self__.map__38717,self__.p__38707,self__.owner,self__.path_fn,self__.search_result_link,self__.name,self__.comm,self__.search_result,self__.type,self__.opts,self__.p__38708,self__.map__38718,meta38720__$1));
});})(map__38717,map__38717__$1,search_result,type,name,map__38718,map__38718__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t38719 = ((function (map__38717,map__38717__$1,search_result,type,name,map__38718,map__38718__$1,opts,path_fn,comm){
return (function __GT_t38719(map__38717__$2,p__38707__$1,owner__$1,path_fn__$1,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,opts__$1,p__38708__$1,map__38718__$2,meta38720){return (new clustermap.components.search.t38719(map__38717__$2,p__38707__$1,owner__$1,path_fn__$1,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,opts__$1,p__38708__$1,map__38718__$2,meta38720));
});})(map__38717,map__38717__$1,search_result,type,name,map__38718,map__38718__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t38719(map__38717__$1,p__38707,owner,path_fn,search_result_link,name,comm,search_result,type,opts,p__38708,map__38718__$1,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__38725,n){var map__38727 = p__38725;var map__38727__$1 = ((cljs.core.seq_QMARK_(map__38727))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38727):map__38727);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38727__$1,cljs.core.constant$keyword$959);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38727__$1,cljs.core.constant$keyword$1044);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38727__$1,cljs.core.constant$keyword$1026);var cons = (function (){var or__3558__auto__ = constituencies;if(cljs.core.truth_(or__3558__auto__))
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
})();if((n < cljs.core.count(cons)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$960,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$957,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$958,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);

}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__38734 = cljs.core._EQ__EQ_;var expr__38735 = e.keyCode;if(cljs.core.truth_((pred__38734.cljs$core$IFn$_invoke$arity$2 ? pred__38734.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__38735) : pred__38734.call(null,clustermap.components.search.ESCAPE_KEY,expr__38735))))
{var G__38737 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__38737__$1 = (((G__38737 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__38737));var G__38737__$2 = (((G__38737__$1 == null))?null:G__38737__$1.toggle());return G__38737__$2;
} else
{if(cljs.core.truth_((pred__38734.cljs$core$IFn$_invoke$arity$2 ? pred__38734.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__38735) : pred__38734.call(null,clustermap.components.search.ENTER_KEY,expr__38735))))
{var vec__38738 = clustermap.components.search.nth_search_result((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(search_results) : cljs.core.deref.call(null,search_results)),(function (){var or__3558__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1045);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38738,(0),null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38738,(1),null);var G__38739_38740 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__38739_38741__$1 = (((G__38739_38740 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__38739_38740));var G__38739_38742__$2 = (((G__38739_38741__$1 == null))?null:G__38739_38741__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$910,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__38734.cljs$core$IFn$_invoke$arity$2 ? pred__38734.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__38735) : pred__38734.call(null,clustermap.components.search.UP_ARROW,expr__38735))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$1045,((function (){var or__3558__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1045);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_((pred__38734.cljs$core$IFn$_invoke$arity$2 ? pred__38734.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__38735) : pred__38734.call(null,clustermap.components.search.DOWN_ARROW,expr__38735))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$1045,((function (){var or__3558__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1045);if(cljs.core.truth_(or__3558__auto__))
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
clustermap.components.search.search_component = (function search_component(p__38743,owner){var map__38775 = p__38743;var map__38775__$1 = ((cljs.core.seq_QMARK_(map__38775))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38775):map__38775);var map__38776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38775__$1,cljs.core.constant$keyword$1019);var map__38776__$1 = ((cljs.core.seq_QMARK_(map__38776))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38776):map__38776);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38776__$1,cljs.core.constant$keyword$871);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38776__$1,cljs.core.constant$keyword$904);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38775__$1,cljs.core.constant$keyword$1046);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38775__$1,cljs.core.constant$keyword$1047);var map__38777 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__38777__$1 = ((cljs.core.seq_QMARK_(map__38777))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38777):map__38777);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38777__$1,cljs.core.constant$keyword$955);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38777__$1,cljs.core.constant$keyword$965);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,view);var map__38778 = search_results;var map__38778__$1 = ((cljs.core.seq_QMARK_(map__38778))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38778):map__38778);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38778__$1,cljs.core.constant$keyword$959);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38778__$1,cljs.core.constant$keyword$1044);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38778__$1,cljs.core.constant$keyword$1026);if(typeof clustermap.components.search.t38779 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t38779 = (function (map__38776,search_results,map__38775,search_component,owner,path_fn,view,portfolio_companies,p__38743,constituencies,map__38778,investor_companies,selection_value,comm,selection_type,map__38777,meta38780){
this.map__38776 = map__38776;
this.search_results = search_results;
this.map__38775 = map__38775;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.p__38743 = p__38743;
this.constituencies = constituencies;
this.map__38778 = map__38778;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.comm = comm;
this.selection_type = selection_type;
this.map__38777 = map__38777;
this.meta38780 = meta38780;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t38779.cljs$lang$type = true;
clustermap.components.search.t38779.cljs$lang$ctorStr = "clustermap.components.search/t38779";
clustermap.components.search.t38779.cljs$lang$ctorPrWriter = ((function (map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.search/t38779");
});})(map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t38779.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t38779.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "search-component", "ref": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1048,e.target.value], null));
});})(this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results))
}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1048,e.target.value], null));
});})(this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results))
}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1048,""], null));
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"search-field").value = "";
});})(this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3558__auto____$1))
{return or__3558__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3558__auto__ = cljs.core.constant$keyword$1045.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$1045.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1045,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1049,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$885,"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$897,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$898,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$885,"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_cons))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results){
return (function iter__38782(s__38783){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results){
return (function (){var s__38783__$1 = s__38783;while(true){
var temp__4126__auto__ = cljs.core.seq(s__38783__$1);if(temp__4126__auto__)
{var s__38783__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__38783__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__38783__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__38785 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__38784 = (0);while(true){
if((i__38784 < size__4282__auto__))
{var vec__38788 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__38784);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38788,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38788,(1),null);cljs.core.chunk_append(b__38785,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$948,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$965,self__.comm,cljs.core.constant$keyword$955,self__.path_fn], null),cljs.core.constant$keyword$947,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$908,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$942,((function (i__38784,vec__38788,idx,con,c__4281__auto__,size__4282__auto__,b__38785,s__38783__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$871,cljs.core.constant$keyword$960,cljs.core.array_seq([cljs.core.constant$keyword$873,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$874),cljs.core.constant$keyword$1050,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$874)))], 0));
});})(i__38784,vec__38788,idx,con,c__4281__auto__,size__4282__auto__,b__38785,s__38783__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$945,cljs.core.constant$keyword$1050], null)));
{
var G__38806 = (i__38784 + (1));
i__38784 = G__38806;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38785),iter__38782(cljs.core.chunk_rest(s__38783__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38785),null);
}
} else
{var vec__38789 = cljs.core.first(s__38783__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38789,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38789,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$948,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$965,self__.comm,cljs.core.constant$keyword$955,self__.path_fn], null),cljs.core.constant$keyword$947,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$908,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$942,((function (vec__38789,idx,con,s__38783__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$871,cljs.core.constant$keyword$960,cljs.core.array_seq([cljs.core.constant$keyword$873,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$874),cljs.core.constant$keyword$1050,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$874)))], 0));
});})(vec__38789,idx,con,s__38783__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$945,cljs.core.constant$keyword$1050], null)),iter__38782(cljs.core.rest(s__38783__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__(idx_cons);
})():null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$898,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$885,"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results){
return (function iter__38790(s__38791){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results){
return (function (){var s__38791__$1 = s__38791;while(true){
var temp__4126__auto__ = cljs.core.seq(s__38791__$1);if(temp__4126__auto__)
{var s__38791__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__38791__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__38791__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__38793 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__38792 = (0);while(true){
if((i__38792 < size__4282__auto__))
{var vec__38796 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__38792);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38796,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38796,(1),null);cljs.core.chunk_append(b__38793,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$948,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$965,self__.comm,cljs.core.constant$keyword$955,self__.path_fn], null),cljs.core.constant$keyword$947,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$908,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$942,((function (i__38792,vec__38796,idx,pc,c__4281__auto__,size__4282__auto__,b__38793,s__38791__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$871,cljs.core.constant$keyword$957,cljs.core.array_seq([cljs.core.constant$keyword$873,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$968),cljs.core.constant$keyword$1050,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$968)))], 0));
});})(i__38792,vec__38796,idx,pc,c__4281__auto__,size__4282__auto__,b__38793,s__38791__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$945,cljs.core.constant$keyword$1050], null)));
{
var G__38807 = (i__38792 + (1));
i__38792 = G__38807;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38793),iter__38790(cljs.core.chunk_rest(s__38791__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38793),null);
}
} else
{var vec__38797 = cljs.core.first(s__38791__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38797,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38797,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$948,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$965,self__.comm,cljs.core.constant$keyword$955,self__.path_fn], null),cljs.core.constant$keyword$947,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$908,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$942,((function (vec__38797,idx,pc,s__38791__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$871,cljs.core.constant$keyword$957,cljs.core.array_seq([cljs.core.constant$keyword$873,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$968),cljs.core.constant$keyword$1050,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$968)))], 0));
});})(vec__38797,idx,pc,s__38791__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$945,cljs.core.constant$keyword$1050], null)),iter__38790(cljs.core.rest(s__38791__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__(idx_pcs);
})():null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$898,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$885,"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results){
return (function iter__38798(s__38799){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results){
return (function (){var s__38799__$1 = s__38799;while(true){
var temp__4126__auto__ = cljs.core.seq(s__38799__$1);if(temp__4126__auto__)
{var s__38799__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__38799__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__38799__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__38801 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__38800 = (0);while(true){
if((i__38800 < size__4282__auto__))
{var vec__38804 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__38800);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38804,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38804,(1),null);cljs.core.chunk_append(b__38801,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$948,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$965,self__.comm,cljs.core.constant$keyword$955,self__.path_fn], null),cljs.core.constant$keyword$947,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$908,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$942,((function (i__38800,vec__38804,idx,inv,c__4281__auto__,size__4282__auto__,b__38801,s__38799__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$871,cljs.core.constant$keyword$958,cljs.core.array_seq([cljs.core.constant$keyword$873,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$971),cljs.core.constant$keyword$1050,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$971)))], 0));
});})(i__38800,vec__38804,idx,inv,c__4281__auto__,size__4282__auto__,b__38801,s__38799__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$945,cljs.core.constant$keyword$1050], null)));
{
var G__38808 = (i__38800 + (1));
i__38800 = G__38808;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38801),iter__38798(cljs.core.chunk_rest(s__38799__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38801),null);
}
} else
{var vec__38805 = cljs.core.first(s__38799__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38805,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38805,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$948,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$965,self__.comm,cljs.core.constant$keyword$955,self__.path_fn], null),cljs.core.constant$keyword$947,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$908,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$942,((function (vec__38805,idx,inv,s__38799__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$871,cljs.core.constant$keyword$958,cljs.core.array_seq([cljs.core.constant$keyword$873,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$971),cljs.core.constant$keyword$1050,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$971)))], 0));
});})(vec__38805,idx,inv,s__38799__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$945,cljs.core.constant$keyword$1050], null)),iter__38798(cljs.core.rest(s__38799__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__(idx_invs);
})():null)], null)], null);
})():null)));
});})(map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t38779.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results){
return (function (_38781){var self__ = this;
var _38781__$1 = this;return self__.meta38780;
});})(map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t38779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results){
return (function (_38781,meta38780__$1){var self__ = this;
var _38781__$1 = this;return (new clustermap.components.search.t38779(self__.map__38776,self__.search_results,self__.map__38775,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.portfolio_companies,self__.p__38743,self__.constituencies,self__.map__38778,self__.investor_companies,self__.selection_value,self__.comm,self__.selection_type,self__.map__38777,meta38780__$1));
});})(map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t38779 = ((function (map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results){
return (function __GT_t38779(map__38776__$2,search_results__$1,map__38775__$2,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,p__38743__$1,constituencies__$1,map__38778__$2,investor_companies__$1,selection_value__$1,comm__$1,selection_type__$1,map__38777__$2,meta38780){return (new clustermap.components.search.t38779(map__38776__$2,search_results__$1,map__38775__$2,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,p__38743__$1,constituencies__$1,map__38778__$2,investor_companies__$1,selection_value__$1,comm__$1,selection_type__$1,map__38777__$2,meta38780));
});})(map__38777,map__38777__$1,path_fn,comm,path_fn__$1,map__38778,map__38778__$1,investor_companies,portfolio_companies,constituencies,map__38775,map__38775__$1,map__38776,map__38776__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t38779(map__38776__$1,search_results,map__38775__$1,search_component,owner,path_fn__$1,view,portfolio_companies,p__38743,constituencies,map__38778__$1,investor_companies,selection_value,comm,selection_type,map__38777__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$950,shared,cljs.core.constant$keyword$953,document.getElementById(elem_id)], null));
});
