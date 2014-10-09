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
clustermap.components.search.search_result_link = (function search_result_link(p__46546,owner,p__46547){var map__46556 = p__46546;var map__46556__$1 = ((cljs.core.seq_QMARK_(map__46556))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46556):map__46556);var search_result = map__46556__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46556__$1,cljs.core.constant$keyword$974);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46556__$1,cljs.core.constant$keyword$998);var map__46557 = p__46547;var map__46557__$1 = ((cljs.core.seq_QMARK_(map__46557))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46557):map__46557);var opts = map__46557__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46557__$1,cljs.core.constant$keyword$1135);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46557__$1,cljs.core.constant$keyword$1146);if(typeof clustermap.components.search.t46558 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t46558 = (function (owner,path_fn,map__46556,search_result_link,map__46557,name,comm,search_result,type,p__46546,opts,p__46547,meta46559){
this.owner = owner;
this.path_fn = path_fn;
this.map__46556 = map__46556;
this.search_result_link = search_result_link;
this.map__46557 = map__46557;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.p__46546 = p__46546;
this.opts = opts;
this.p__46547 = p__46547;
this.meta46559 = meta46559;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t46558.cljs$lang$type = true;
clustermap.components.search.t46558.cljs$lang$ctorStr = "clustermap.components.search/t46558";
clustermap.components.search.t46558.cljs$lang$ctorPrWriter = ((function (map__46556,map__46556__$1,search_result,type,name,map__46557,map__46557__$1,opts,path_fn,comm){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.search/t46558");
});})(map__46556,map__46556__$1,search_result,type,name,map__46557,map__46557__$1,opts,path_fn,comm))
;
clustermap.components.search.t46558.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t46558.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__46556,map__46556__$1,search_result,type,name,map__46557,map__46557__$1,opts,path_fn,comm){
return (function (this$,p__46561){var self__ = this;
var map__46562 = p__46561;var map__46562__$1 = ((cljs.core.seq_QMARK_(map__46562))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46562):map__46562);var state = map__46562__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46562__$1,cljs.core.constant$keyword$1069);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__46562,map__46562__$1,state,selected,map__46556,map__46556__$1,search_result,type,name,map__46557,map__46557__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__46563 = l;var G__46563__$1 = (((G__46563 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__46563));var G__46563__$2 = (((G__46563__$1 == null))?null:G__46563__$1.parents(".search-component"));var G__46563__$3 = (((G__46563__$2 == null))?null:G__46563__$2.toggle());return G__46563__$3;
});})(path,this$__$1,map__46562,map__46562__$1,state,selected,map__46556,map__46556__$1,search_result,type,name,map__46557,map__46557__$1,opts,path_fn,comm))
},sablono.interpreter.interpret(self__.name)));
});})(map__46556,map__46556__$1,search_result,type,name,map__46557,map__46557__$1,opts,path_fn,comm))
;
clustermap.components.search.t46558.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__46556,map__46556__$1,search_result,type,name,map__46557,map__46557__$1,opts,path_fn,comm){
return (function (_46560){var self__ = this;
var _46560__$1 = this;return self__.meta46559;
});})(map__46556,map__46556__$1,search_result,type,name,map__46557,map__46557__$1,opts,path_fn,comm))
;
clustermap.components.search.t46558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__46556,map__46556__$1,search_result,type,name,map__46557,map__46557__$1,opts,path_fn,comm){
return (function (_46560,meta46559__$1){var self__ = this;
var _46560__$1 = this;return (new clustermap.components.search.t46558(self__.owner,self__.path_fn,self__.map__46556,self__.search_result_link,self__.map__46557,self__.name,self__.comm,self__.search_result,self__.type,self__.p__46546,self__.opts,self__.p__46547,meta46559__$1));
});})(map__46556,map__46556__$1,search_result,type,name,map__46557,map__46557__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t46558 = ((function (map__46556,map__46556__$1,search_result,type,name,map__46557,map__46557__$1,opts,path_fn,comm){
return (function __GT_t46558(owner__$1,path_fn__$1,map__46556__$2,search_result_link__$1,map__46557__$2,name__$1,comm__$1,search_result__$1,type__$1,p__46546__$1,opts__$1,p__46547__$1,meta46559){return (new clustermap.components.search.t46558(owner__$1,path_fn__$1,map__46556__$2,search_result_link__$1,map__46557__$2,name__$1,comm__$1,search_result__$1,type__$1,p__46546__$1,opts__$1,p__46547__$1,meta46559));
});})(map__46556,map__46556__$1,search_result,type,name,map__46557,map__46557__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t46558(owner,path_fn,map__46556__$1,search_result_link,map__46557__$1,name,comm,search_result,type,p__46546,opts,p__46547,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__46564,n){var map__46566 = p__46564;var map__46566__$1 = ((cljs.core.seq_QMARK_(map__46566))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46566):map__46566);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46566__$1,cljs.core.constant$keyword$1139);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46566__$1,cljs.core.constant$keyword$1196);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46566__$1,cljs.core.constant$keyword$1177);var cons = (function (){var or__3558__auto__ = constituencies;if(cljs.core.truth_(or__3558__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1140,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1137,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1138,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);

}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__46573 = cljs.core._EQ__EQ_;var expr__46574 = e.keyCode;if(cljs.core.truth_((pred__46573.cljs$core$IFn$_invoke$arity$2 ? pred__46573.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__46574) : pred__46573.call(null,clustermap.components.search.ESCAPE_KEY,expr__46574))))
{var G__46576 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__46576__$1 = (((G__46576 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__46576));var G__46576__$2 = (((G__46576__$1 == null))?null:G__46576__$1.toggle());return G__46576__$2;
} else
{if(cljs.core.truth_((pred__46573.cljs$core$IFn$_invoke$arity$2 ? pred__46573.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__46574) : pred__46573.call(null,clustermap.components.search.ENTER_KEY,expr__46574))))
{var vec__46577 = clustermap.components.search.nth_search_result((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(search_results) : cljs.core.deref.call(null,search_results)),(function (){var or__3558__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1197);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46577,(0),null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46577,(1),null);var G__46578_46579 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__46578_46580__$1 = (((G__46578_46579 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__46578_46579));var G__46578_46581__$2 = (((G__46578_46580__$1 == null))?null:G__46578_46580__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1071,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__46573.cljs$core$IFn$_invoke$arity$2 ? pred__46573.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__46574) : pred__46573.call(null,clustermap.components.search.UP_ARROW,expr__46574))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$1197,((function (){var or__3558__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1197);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_((pred__46573.cljs$core$IFn$_invoke$arity$2 ? pred__46573.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__46574) : pred__46573.call(null,clustermap.components.search.DOWN_ARROW,expr__46574))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$1197,((function (){var or__3558__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1197);if(cljs.core.truth_(or__3558__auto__))
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
clustermap.components.search.search_component = (function search_component(p__46582,owner){var map__46614 = p__46582;var map__46614__$1 = ((cljs.core.seq_QMARK_(map__46614))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46614):map__46614);var map__46615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46614__$1,cljs.core.constant$keyword$1170);var map__46615__$1 = ((cljs.core.seq_QMARK_(map__46615))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46615):map__46615);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46615__$1,cljs.core.constant$keyword$974);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46615__$1,cljs.core.constant$keyword$989);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46614__$1,cljs.core.constant$keyword$1198);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46614__$1,cljs.core.constant$keyword$1199);var map__46616 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__46616__$1 = ((cljs.core.seq_QMARK_(map__46616))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46616):map__46616);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46616__$1,cljs.core.constant$keyword$1135);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46616__$1,cljs.core.constant$keyword$1146);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,view);var map__46617 = search_results;var map__46617__$1 = ((cljs.core.seq_QMARK_(map__46617))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46617):map__46617);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46617__$1,cljs.core.constant$keyword$1139);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46617__$1,cljs.core.constant$keyword$1196);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46617__$1,cljs.core.constant$keyword$1177);if(typeof clustermap.components.search.t46618 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t46618 = (function (search_results,search_component,owner,path_fn,map__46615,view,portfolio_companies,map__46616,constituencies,investor_companies,map__46617,selection_value,comm,selection_type,map__46614,p__46582,meta46619){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.map__46615 = map__46615;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.map__46616 = map__46616;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.map__46617 = map__46617;
this.selection_value = selection_value;
this.comm = comm;
this.selection_type = selection_type;
this.map__46614 = map__46614;
this.p__46582 = p__46582;
this.meta46619 = meta46619;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t46618.cljs$lang$type = true;
clustermap.components.search.t46618.cljs$lang$ctorStr = "clustermap.components.search/t46618";
clustermap.components.search.t46618.cljs$lang$ctorPrWriter = ((function (map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.search/t46618");
});})(map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t46618.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t46618.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "search-component", "ref": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1200,e.target.value], null));
});})(this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results))
}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1200,e.target.value], null));
});})(this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results))
}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1200,""], null));
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"search-field").value = "";
});})(this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3558__auto____$1))
{return or__3558__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3558__auto__ = cljs.core.constant$keyword$1197.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$1197.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1197,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1201,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1049,"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1060,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1061,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1049,"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_cons))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results){
return (function iter__46621(s__46622){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results){
return (function (){var s__46622__$1 = s__46622;while(true){
var temp__4126__auto__ = cljs.core.seq(s__46622__$1);if(temp__4126__auto__)
{var s__46622__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__46622__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__46622__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__46624 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__46623 = (0);while(true){
if((i__46623 < size__4282__auto__))
{var vec__46627 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__46623);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46627,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46627,(1),null);cljs.core.chunk_append(b__46624,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1042,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1146,self__.comm,cljs.core.constant$keyword$1135,self__.path_fn], null),cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1069,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1037,((function (i__46623,vec__46627,idx,con,c__4281__auto__,size__4282__auto__,b__46624,s__46622__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$974,cljs.core.constant$keyword$1140,cljs.core.array_seq([cljs.core.constant$keyword$976,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$977),cljs.core.constant$keyword$1202,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$977)))], 0));
});})(i__46623,vec__46627,idx,con,c__4281__auto__,size__4282__auto__,b__46624,s__46622__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1010,cljs.core.constant$keyword$1202], null)));
{
var G__46645 = (i__46623 + (1));
i__46623 = G__46645;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46624),iter__46621(cljs.core.chunk_rest(s__46622__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46624),null);
}
} else
{var vec__46628 = cljs.core.first(s__46622__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46628,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46628,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1042,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1146,self__.comm,cljs.core.constant$keyword$1135,self__.path_fn], null),cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1069,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1037,((function (vec__46628,idx,con,s__46622__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$974,cljs.core.constant$keyword$1140,cljs.core.array_seq([cljs.core.constant$keyword$976,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$977),cljs.core.constant$keyword$1202,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$977)))], 0));
});})(vec__46628,idx,con,s__46622__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1010,cljs.core.constant$keyword$1202], null)),iter__46621(cljs.core.rest(s__46622__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__(idx_cons);
})():null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1061,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1049,"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results){
return (function iter__46629(s__46630){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results){
return (function (){var s__46630__$1 = s__46630;while(true){
var temp__4126__auto__ = cljs.core.seq(s__46630__$1);if(temp__4126__auto__)
{var s__46630__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__46630__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__46630__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__46632 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__46631 = (0);while(true){
if((i__46631 < size__4282__auto__))
{var vec__46635 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__46631);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46635,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46635,(1),null);cljs.core.chunk_append(b__46632,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1042,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1146,self__.comm,cljs.core.constant$keyword$1135,self__.path_fn], null),cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1069,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1037,((function (i__46631,vec__46635,idx,pc,c__4281__auto__,size__4282__auto__,b__46632,s__46630__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$974,cljs.core.constant$keyword$1137,cljs.core.array_seq([cljs.core.constant$keyword$976,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1149),cljs.core.constant$keyword$1202,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1149)))], 0));
});})(i__46631,vec__46635,idx,pc,c__4281__auto__,size__4282__auto__,b__46632,s__46630__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1010,cljs.core.constant$keyword$1202], null)));
{
var G__46646 = (i__46631 + (1));
i__46631 = G__46646;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46632),iter__46629(cljs.core.chunk_rest(s__46630__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46632),null);
}
} else
{var vec__46636 = cljs.core.first(s__46630__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46636,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46636,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1042,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1146,self__.comm,cljs.core.constant$keyword$1135,self__.path_fn], null),cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1069,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1037,((function (vec__46636,idx,pc,s__46630__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$974,cljs.core.constant$keyword$1137,cljs.core.array_seq([cljs.core.constant$keyword$976,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1149),cljs.core.constant$keyword$1202,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1149)))], 0));
});})(vec__46636,idx,pc,s__46630__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1010,cljs.core.constant$keyword$1202], null)),iter__46629(cljs.core.rest(s__46630__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__(idx_pcs);
})():null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1061,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1049,"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results){
return (function iter__46637(s__46638){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results){
return (function (){var s__46638__$1 = s__46638;while(true){
var temp__4126__auto__ = cljs.core.seq(s__46638__$1);if(temp__4126__auto__)
{var s__46638__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__46638__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__46638__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__46640 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__46639 = (0);while(true){
if((i__46639 < size__4282__auto__))
{var vec__46643 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__46639);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46643,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46643,(1),null);cljs.core.chunk_append(b__46640,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1042,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1146,self__.comm,cljs.core.constant$keyword$1135,self__.path_fn], null),cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1069,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1037,((function (i__46639,vec__46643,idx,inv,c__4281__auto__,size__4282__auto__,b__46640,s__46638__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$974,cljs.core.constant$keyword$1138,cljs.core.array_seq([cljs.core.constant$keyword$976,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1152),cljs.core.constant$keyword$1202,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1152)))], 0));
});})(i__46639,vec__46643,idx,inv,c__4281__auto__,size__4282__auto__,b__46640,s__46638__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1010,cljs.core.constant$keyword$1202], null)));
{
var G__46647 = (i__46639 + (1));
i__46639 = G__46647;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46640),iter__46637(cljs.core.chunk_rest(s__46638__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46640),null);
}
} else
{var vec__46644 = cljs.core.first(s__46638__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46644,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46644,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1042,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1146,self__.comm,cljs.core.constant$keyword$1135,self__.path_fn], null),cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1069,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1037,((function (vec__46644,idx,inv,s__46638__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$974,cljs.core.constant$keyword$1138,cljs.core.array_seq([cljs.core.constant$keyword$976,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1152),cljs.core.constant$keyword$1202,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1152)))], 0));
});})(vec__46644,idx,inv,s__46638__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1010,cljs.core.constant$keyword$1202], null)),iter__46637(cljs.core.rest(s__46638__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__(idx_invs);
})():null)], null)], null);
})():null)));
});})(map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t46618.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results){
return (function (_46620){var self__ = this;
var _46620__$1 = this;return self__.meta46619;
});})(map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t46618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results){
return (function (_46620,meta46619__$1){var self__ = this;
var _46620__$1 = this;return (new clustermap.components.search.t46618(self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.map__46615,self__.view,self__.portfolio_companies,self__.map__46616,self__.constituencies,self__.investor_companies,self__.map__46617,self__.selection_value,self__.comm,self__.selection_type,self__.map__46614,self__.p__46582,meta46619__$1));
});})(map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t46618 = ((function (map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results){
return (function __GT_t46618(search_results__$1,search_component__$1,owner__$1,path_fn__$2,map__46615__$2,view__$1,portfolio_companies__$1,map__46616__$2,constituencies__$1,investor_companies__$1,map__46617__$2,selection_value__$1,comm__$1,selection_type__$1,map__46614__$2,p__46582__$1,meta46619){return (new clustermap.components.search.t46618(search_results__$1,search_component__$1,owner__$1,path_fn__$2,map__46615__$2,view__$1,portfolio_companies__$1,map__46616__$2,constituencies__$1,investor_companies__$1,map__46617__$2,selection_value__$1,comm__$1,selection_type__$1,map__46614__$2,p__46582__$1,meta46619));
});})(map__46616,map__46616__$1,path_fn,comm,path_fn__$1,map__46617,map__46617__$1,investor_companies,portfolio_companies,constituencies,map__46614,map__46614__$1,map__46615,map__46615__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t46618(search_results,search_component,owner,path_fn__$1,map__46615__$1,view,portfolio_companies,map__46616__$1,constituencies,investor_companies,map__46617__$1,selection_value,comm,selection_type,map__46614__$1,p__46582,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1044,shared,cljs.core.constant$keyword$1047,document.getElementById(elem_id)], null));
});
