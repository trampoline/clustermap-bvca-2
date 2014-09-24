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
clustermap.components.search.search_result_link = (function search_result_link(p__38779,owner,p__38780){var map__38789 = p__38779;var map__38789__$1 = ((cljs.core.seq_QMARK_(map__38789))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38789):map__38789);var search_result = map__38789__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38789__$1,cljs.core.constant$keyword$880);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38789__$1,cljs.core.constant$keyword$912);var map__38790 = p__38780;var map__38790__$1 = ((cljs.core.seq_QMARK_(map__38790))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38790):map__38790);var opts = map__38790__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38790__$1,cljs.core.constant$keyword$964);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38790__$1,cljs.core.constant$keyword$974);if(typeof clustermap.components.search.t38791 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t38791 = (function (p__38780,owner,path_fn,map__38789,search_result_link,name,comm,search_result,type,p__38779,map__38790,opts,meta38792){
this.p__38780 = p__38780;
this.owner = owner;
this.path_fn = path_fn;
this.map__38789 = map__38789;
this.search_result_link = search_result_link;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.p__38779 = p__38779;
this.map__38790 = map__38790;
this.opts = opts;
this.meta38792 = meta38792;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t38791.cljs$lang$type = true;
clustermap.components.search.t38791.cljs$lang$ctorStr = "clustermap.components.search/t38791";
clustermap.components.search.t38791.cljs$lang$ctorPrWriter = ((function (map__38789,map__38789__$1,search_result,type,name,map__38790,map__38790__$1,opts,path_fn,comm){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.search/t38791");
});})(map__38789,map__38789__$1,search_result,type,name,map__38790,map__38790__$1,opts,path_fn,comm))
;
clustermap.components.search.t38791.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t38791.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__38789,map__38789__$1,search_result,type,name,map__38790,map__38790__$1,opts,path_fn,comm){
return (function (this$,p__38794){var self__ = this;
var map__38795 = p__38794;var map__38795__$1 = ((cljs.core.seq_QMARK_(map__38795))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38795):map__38795);var state = map__38795__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38795__$1,cljs.core.constant$keyword$917);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__38795,map__38795__$1,state,selected,map__38789,map__38789__$1,search_result,type,name,map__38790,map__38790__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__38796 = l;var G__38796__$1 = (((G__38796 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__38796));var G__38796__$2 = (((G__38796__$1 == null))?null:G__38796__$1.parents(".search-component"));var G__38796__$3 = (((G__38796__$2 == null))?null:G__38796__$2.toggle());return G__38796__$3;
});})(path,this$__$1,map__38795,map__38795__$1,state,selected,map__38789,map__38789__$1,search_result,type,name,map__38790,map__38790__$1,opts,path_fn,comm))
},sablono.interpreter.interpret(self__.name)));
});})(map__38789,map__38789__$1,search_result,type,name,map__38790,map__38790__$1,opts,path_fn,comm))
;
clustermap.components.search.t38791.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38789,map__38789__$1,search_result,type,name,map__38790,map__38790__$1,opts,path_fn,comm){
return (function (_38793){var self__ = this;
var _38793__$1 = this;return self__.meta38792;
});})(map__38789,map__38789__$1,search_result,type,name,map__38790,map__38790__$1,opts,path_fn,comm))
;
clustermap.components.search.t38791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38789,map__38789__$1,search_result,type,name,map__38790,map__38790__$1,opts,path_fn,comm){
return (function (_38793,meta38792__$1){var self__ = this;
var _38793__$1 = this;return (new clustermap.components.search.t38791(self__.p__38780,self__.owner,self__.path_fn,self__.map__38789,self__.search_result_link,self__.name,self__.comm,self__.search_result,self__.type,self__.p__38779,self__.map__38790,self__.opts,meta38792__$1));
});})(map__38789,map__38789__$1,search_result,type,name,map__38790,map__38790__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t38791 = ((function (map__38789,map__38789__$1,search_result,type,name,map__38790,map__38790__$1,opts,path_fn,comm){
return (function __GT_t38791(p__38780__$1,owner__$1,path_fn__$1,map__38789__$2,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,p__38779__$1,map__38790__$2,opts__$1,meta38792){return (new clustermap.components.search.t38791(p__38780__$1,owner__$1,path_fn__$1,map__38789__$2,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,p__38779__$1,map__38790__$2,opts__$1,meta38792));
});})(map__38789,map__38789__$1,search_result,type,name,map__38790,map__38790__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t38791(p__38780,owner,path_fn,map__38789__$1,search_result_link,name,comm,search_result,type,p__38779,map__38790__$1,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__38797,n){var map__38799 = p__38797;var map__38799__$1 = ((cljs.core.seq_QMARK_(map__38799))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38799):map__38799);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38799__$1,cljs.core.constant$keyword$968);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38799__$1,cljs.core.constant$keyword$1053);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38799__$1,cljs.core.constant$keyword$1035);var cons = (function (){var or__3558__auto__ = constituencies;if(cljs.core.truth_(or__3558__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$969,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$966,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$967,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);

}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__38806 = cljs.core._EQ__EQ_;var expr__38807 = e.keyCode;if(cljs.core.truth_((pred__38806.cljs$core$IFn$_invoke$arity$2 ? pred__38806.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__38807) : pred__38806.call(null,clustermap.components.search.ESCAPE_KEY,expr__38807))))
{var G__38809 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__38809__$1 = (((G__38809 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__38809));var G__38809__$2 = (((G__38809__$1 == null))?null:G__38809__$1.toggle());return G__38809__$2;
} else
{if(cljs.core.truth_((pred__38806.cljs$core$IFn$_invoke$arity$2 ? pred__38806.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__38807) : pred__38806.call(null,clustermap.components.search.ENTER_KEY,expr__38807))))
{var vec__38810 = clustermap.components.search.nth_search_result((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(search_results) : cljs.core.deref.call(null,search_results)),(function (){var or__3558__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1054);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38810,(0),null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38810,(1),null);var G__38811_38812 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__38811_38813__$1 = (((G__38811_38812 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__38811_38812));var G__38811_38814__$2 = (((G__38811_38813__$1 == null))?null:G__38811_38813__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$919,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__38806.cljs$core$IFn$_invoke$arity$2 ? pred__38806.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__38807) : pred__38806.call(null,clustermap.components.search.UP_ARROW,expr__38807))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$1054,((function (){var or__3558__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1054);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_((pred__38806.cljs$core$IFn$_invoke$arity$2 ? pred__38806.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__38807) : pred__38806.call(null,clustermap.components.search.DOWN_ARROW,expr__38807))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$1054,((function (){var or__3558__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1054);if(cljs.core.truth_(or__3558__auto__))
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
clustermap.components.search.search_component = (function search_component(p__38815,owner){var map__38847 = p__38815;var map__38847__$1 = ((cljs.core.seq_QMARK_(map__38847))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38847):map__38847);var map__38848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38847__$1,cljs.core.constant$keyword$1028);var map__38848__$1 = ((cljs.core.seq_QMARK_(map__38848))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38848):map__38848);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38848__$1,cljs.core.constant$keyword$880);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38848__$1,cljs.core.constant$keyword$913);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38847__$1,cljs.core.constant$keyword$1055);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38847__$1,cljs.core.constant$keyword$1056);var map__38849 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__38849__$1 = ((cljs.core.seq_QMARK_(map__38849))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38849):map__38849);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38849__$1,cljs.core.constant$keyword$964);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38849__$1,cljs.core.constant$keyword$974);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,view);var map__38850 = search_results;var map__38850__$1 = ((cljs.core.seq_QMARK_(map__38850))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38850):map__38850);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38850__$1,cljs.core.constant$keyword$968);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38850__$1,cljs.core.constant$keyword$1053);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38850__$1,cljs.core.constant$keyword$1035);if(typeof clustermap.components.search.t38851 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t38851 = (function (map__38847,search_results,search_component,owner,path_fn,view,portfolio_companies,constituencies,investor_companies,p__38815,selection_value,comm,map__38849,selection_type,map__38848,map__38850,meta38852){
this.map__38847 = map__38847;
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.p__38815 = p__38815;
this.selection_value = selection_value;
this.comm = comm;
this.map__38849 = map__38849;
this.selection_type = selection_type;
this.map__38848 = map__38848;
this.map__38850 = map__38850;
this.meta38852 = meta38852;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t38851.cljs$lang$type = true;
clustermap.components.search.t38851.cljs$lang$ctorStr = "clustermap.components.search/t38851";
clustermap.components.search.t38851.cljs$lang$ctorPrWriter = ((function (map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.search/t38851");
});})(map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t38851.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t38851.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "search-component", "ref": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1057,e.target.value], null));
});})(this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results))
}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1057,e.target.value], null));
});})(this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results))
}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1057,""], null));
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"search-field").value = "";
});})(this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3558__auto____$1))
{return or__3558__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3558__auto__ = cljs.core.constant$keyword$1054.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$1054.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1054,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1058,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$894,"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$906,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$907,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$894,"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_cons))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results){
return (function iter__38854(s__38855){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results){
return (function (){var s__38855__$1 = s__38855;while(true){
var temp__4126__auto__ = cljs.core.seq(s__38855__$1);if(temp__4126__auto__)
{var s__38855__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__38855__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__38855__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__38857 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__38856 = (0);while(true){
if((i__38856 < size__4282__auto__))
{var vec__38860 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__38856);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38860,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38860,(1),null);cljs.core.chunk_append(b__38857,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$957,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$974,self__.comm,cljs.core.constant$keyword$964,self__.path_fn], null),cljs.core.constant$keyword$956,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$917,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$951,((function (i__38856,vec__38860,idx,con,c__4281__auto__,size__4282__auto__,b__38857,s__38855__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$880,cljs.core.constant$keyword$969,cljs.core.array_seq([cljs.core.constant$keyword$882,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$883),cljs.core.constant$keyword$1059,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$883)))], 0));
});})(i__38856,vec__38860,idx,con,c__4281__auto__,size__4282__auto__,b__38857,s__38855__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$954,cljs.core.constant$keyword$1059], null)));
{
var G__38878 = (i__38856 + (1));
i__38856 = G__38878;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38857),iter__38854(cljs.core.chunk_rest(s__38855__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38857),null);
}
} else
{var vec__38861 = cljs.core.first(s__38855__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38861,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38861,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$957,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$974,self__.comm,cljs.core.constant$keyword$964,self__.path_fn], null),cljs.core.constant$keyword$956,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$917,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$951,((function (vec__38861,idx,con,s__38855__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$880,cljs.core.constant$keyword$969,cljs.core.array_seq([cljs.core.constant$keyword$882,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$883),cljs.core.constant$keyword$1059,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$883)))], 0));
});})(vec__38861,idx,con,s__38855__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$954,cljs.core.constant$keyword$1059], null)),iter__38854(cljs.core.rest(s__38855__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__(idx_cons);
})():null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$907,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$894,"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results){
return (function iter__38862(s__38863){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results){
return (function (){var s__38863__$1 = s__38863;while(true){
var temp__4126__auto__ = cljs.core.seq(s__38863__$1);if(temp__4126__auto__)
{var s__38863__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__38863__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__38863__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__38865 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__38864 = (0);while(true){
if((i__38864 < size__4282__auto__))
{var vec__38868 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__38864);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38868,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38868,(1),null);cljs.core.chunk_append(b__38865,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$957,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$974,self__.comm,cljs.core.constant$keyword$964,self__.path_fn], null),cljs.core.constant$keyword$956,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$917,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$951,((function (i__38864,vec__38868,idx,pc,c__4281__auto__,size__4282__auto__,b__38865,s__38863__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$880,cljs.core.constant$keyword$966,cljs.core.array_seq([cljs.core.constant$keyword$882,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$977),cljs.core.constant$keyword$1059,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$977)))], 0));
});})(i__38864,vec__38868,idx,pc,c__4281__auto__,size__4282__auto__,b__38865,s__38863__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$954,cljs.core.constant$keyword$1059], null)));
{
var G__38879 = (i__38864 + (1));
i__38864 = G__38879;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38865),iter__38862(cljs.core.chunk_rest(s__38863__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38865),null);
}
} else
{var vec__38869 = cljs.core.first(s__38863__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38869,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38869,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$957,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$974,self__.comm,cljs.core.constant$keyword$964,self__.path_fn], null),cljs.core.constant$keyword$956,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$917,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$951,((function (vec__38869,idx,pc,s__38863__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$880,cljs.core.constant$keyword$966,cljs.core.array_seq([cljs.core.constant$keyword$882,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$977),cljs.core.constant$keyword$1059,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$977)))], 0));
});})(vec__38869,idx,pc,s__38863__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$954,cljs.core.constant$keyword$1059], null)),iter__38862(cljs.core.rest(s__38863__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__(idx_pcs);
})():null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$907,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$894,"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results){
return (function iter__38870(s__38871){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results){
return (function (){var s__38871__$1 = s__38871;while(true){
var temp__4126__auto__ = cljs.core.seq(s__38871__$1);if(temp__4126__auto__)
{var s__38871__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__38871__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__38871__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__38873 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__38872 = (0);while(true){
if((i__38872 < size__4282__auto__))
{var vec__38876 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__38872);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38876,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38876,(1),null);cljs.core.chunk_append(b__38873,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$957,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$974,self__.comm,cljs.core.constant$keyword$964,self__.path_fn], null),cljs.core.constant$keyword$956,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$917,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$951,((function (i__38872,vec__38876,idx,inv,c__4281__auto__,size__4282__auto__,b__38873,s__38871__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$880,cljs.core.constant$keyword$967,cljs.core.array_seq([cljs.core.constant$keyword$882,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$980),cljs.core.constant$keyword$1059,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$980)))], 0));
});})(i__38872,vec__38876,idx,inv,c__4281__auto__,size__4282__auto__,b__38873,s__38871__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$954,cljs.core.constant$keyword$1059], null)));
{
var G__38880 = (i__38872 + (1));
i__38872 = G__38880;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38873),iter__38870(cljs.core.chunk_rest(s__38871__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38873),null);
}
} else
{var vec__38877 = cljs.core.first(s__38871__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38877,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38877,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$957,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$974,self__.comm,cljs.core.constant$keyword$964,self__.path_fn], null),cljs.core.constant$keyword$956,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$917,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$951,((function (vec__38877,idx,inv,s__38871__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$880,cljs.core.constant$keyword$967,cljs.core.array_seq([cljs.core.constant$keyword$882,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$980),cljs.core.constant$keyword$1059,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$980)))], 0));
});})(vec__38877,idx,inv,s__38871__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$954,cljs.core.constant$keyword$1059], null)),iter__38870(cljs.core.rest(s__38871__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__(idx_invs);
})():null)], null)], null);
})():null)));
});})(map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t38851.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results){
return (function (_38853){var self__ = this;
var _38853__$1 = this;return self__.meta38852;
});})(map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t38851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results){
return (function (_38853,meta38852__$1){var self__ = this;
var _38853__$1 = this;return (new clustermap.components.search.t38851(self__.map__38847,self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.portfolio_companies,self__.constituencies,self__.investor_companies,self__.p__38815,self__.selection_value,self__.comm,self__.map__38849,self__.selection_type,self__.map__38848,self__.map__38850,meta38852__$1));
});})(map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t38851 = ((function (map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results){
return (function __GT_t38851(map__38847__$2,search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,investor_companies__$1,p__38815__$1,selection_value__$1,comm__$1,map__38849__$2,selection_type__$1,map__38848__$2,map__38850__$2,meta38852){return (new clustermap.components.search.t38851(map__38847__$2,search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,investor_companies__$1,p__38815__$1,selection_value__$1,comm__$1,map__38849__$2,selection_type__$1,map__38848__$2,map__38850__$2,meta38852));
});})(map__38849,map__38849__$1,path_fn,comm,path_fn__$1,map__38850,map__38850__$1,investor_companies,portfolio_companies,constituencies,map__38847,map__38847__$1,map__38848,map__38848__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t38851(map__38847__$1,search_results,search_component,owner,path_fn__$1,view,portfolio_companies,constituencies,investor_companies,p__38815,selection_value,comm,map__38849__$1,selection_type,map__38848__$1,map__38850__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$959,shared,cljs.core.constant$keyword$962,document.getElementById(elem_id)], null));
});
