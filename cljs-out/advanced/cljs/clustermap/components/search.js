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
clustermap.components.search.search_result_link = (function search_result_link(p__44474,owner,p__44475){var map__44484 = p__44474;var map__44484__$1 = ((cljs.core.seq_QMARK_(map__44484))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44484):map__44484);var search_result = map__44484__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44484__$1,cljs.core.constant$keyword$1138);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44484__$1,cljs.core.constant$keyword$1244);var map__44485 = p__44475;var map__44485__$1 = ((cljs.core.seq_QMARK_(map__44485))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44485):map__44485);var opts = map__44485__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44485__$1,cljs.core.constant$keyword$1466);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44485__$1,cljs.core.constant$keyword$1282);if(typeof clustermap.components.search.t44486 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t44486 = (function (p__44474,p__44475,owner,path_fn,map__44485,search_result_link,map__44484,name,comm,search_result,type,opts,meta44487){
this.p__44474 = p__44474;
this.p__44475 = p__44475;
this.owner = owner;
this.path_fn = path_fn;
this.map__44485 = map__44485;
this.search_result_link = search_result_link;
this.map__44484 = map__44484;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.opts = opts;
this.meta44487 = meta44487;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t44486.cljs$lang$type = true;
clustermap.components.search.t44486.cljs$lang$ctorStr = "clustermap.components.search/t44486";
clustermap.components.search.t44486.cljs$lang$ctorPrWriter = ((function (map__44484,map__44484__$1,search_result,type,name,map__44485,map__44485__$1,opts,path_fn,comm){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.search/t44486");
});})(map__44484,map__44484__$1,search_result,type,name,map__44485,map__44485__$1,opts,path_fn,comm))
;
clustermap.components.search.t44486.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t44486.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__44484,map__44484__$1,search_result,type,name,map__44485,map__44485__$1,opts,path_fn,comm){
return (function (this$,p__44489){var self__ = this;
var map__44490 = p__44489;var map__44490__$1 = ((cljs.core.seq_QMARK_(map__44490))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44490):map__44490);var state = map__44490__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44490__$1,cljs.core.constant$keyword$1249);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__44490,map__44490__$1,state,selected,map__44484,map__44484__$1,search_result,type,name,map__44485,map__44485__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__44491 = l;var G__44491__$1 = (((G__44491 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__44491));var G__44491__$2 = (((G__44491__$1 == null))?null:G__44491__$1.parents(".search-component"));var G__44491__$3 = (((G__44491__$2 == null))?null:G__44491__$2.toggle());return G__44491__$3;
});})(path,this$__$1,map__44490,map__44490__$1,state,selected,map__44484,map__44484__$1,search_result,type,name,map__44485,map__44485__$1,opts,path_fn,comm))
},sablono.interpreter.interpret(self__.name)));
});})(map__44484,map__44484__$1,search_result,type,name,map__44485,map__44485__$1,opts,path_fn,comm))
;
clustermap.components.search.t44486.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__44484,map__44484__$1,search_result,type,name,map__44485,map__44485__$1,opts,path_fn,comm){
return (function (_44488){var self__ = this;
var _44488__$1 = this;return self__.meta44487;
});})(map__44484,map__44484__$1,search_result,type,name,map__44485,map__44485__$1,opts,path_fn,comm))
;
clustermap.components.search.t44486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__44484,map__44484__$1,search_result,type,name,map__44485,map__44485__$1,opts,path_fn,comm){
return (function (_44488,meta44487__$1){var self__ = this;
var _44488__$1 = this;return (new clustermap.components.search.t44486(self__.p__44474,self__.p__44475,self__.owner,self__.path_fn,self__.map__44485,self__.search_result_link,self__.map__44484,self__.name,self__.comm,self__.search_result,self__.type,self__.opts,meta44487__$1));
});})(map__44484,map__44484__$1,search_result,type,name,map__44485,map__44485__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t44486 = ((function (map__44484,map__44484__$1,search_result,type,name,map__44485,map__44485__$1,opts,path_fn,comm){
return (function __GT_t44486(p__44474__$1,p__44475__$1,owner__$1,path_fn__$1,map__44485__$2,search_result_link__$1,map__44484__$2,name__$1,comm__$1,search_result__$1,type__$1,opts__$1,meta44487){return (new clustermap.components.search.t44486(p__44474__$1,p__44475__$1,owner__$1,path_fn__$1,map__44485__$2,search_result_link__$1,map__44484__$2,name__$1,comm__$1,search_result__$1,type__$1,opts__$1,meta44487));
});})(map__44484,map__44484__$1,search_result,type,name,map__44485,map__44485__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t44486(p__44474,p__44475,owner,path_fn,map__44485__$1,search_result_link,map__44484__$1,name,comm,search_result,type,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__44492,n){var map__44494 = p__44492;var map__44494__$1 = ((cljs.core.seq_QMARK_(map__44494))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44494):map__44494);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44494__$1,cljs.core.constant$keyword$1468);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44494__$1,cljs.core.constant$keyword$1568);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44494__$1,cljs.core.constant$keyword$1493);var cons = (function (){var or__3558__auto__ = constituencies;if(cljs.core.truth_(or__3558__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1258,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1256,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1257,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);

}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__44501 = cljs.core._EQ__EQ_;var expr__44502 = e.keyCode;if(cljs.core.truth_((pred__44501.cljs$core$IFn$_invoke$arity$2 ? pred__44501.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__44502) : pred__44501.call(null,clustermap.components.search.ESCAPE_KEY,expr__44502))))
{var G__44504 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__44504__$1 = (((G__44504 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__44504));var G__44504__$2 = (((G__44504__$1 == null))?null:G__44504__$1.toggle());return G__44504__$2;
} else
{if(cljs.core.truth_((pred__44501.cljs$core$IFn$_invoke$arity$2 ? pred__44501.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__44502) : pred__44501.call(null,clustermap.components.search.ENTER_KEY,expr__44502))))
{var vec__44505 = clustermap.components.search.nth_search_result((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(search_results) : cljs.core.deref.call(null,search_results)),(function (){var or__3558__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1569);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44505,(0),null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44505,(1),null);var G__44506_44507 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__44506_44508__$1 = (((G__44506_44507 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__44506_44507));var G__44506_44509__$2 = (((G__44506_44508__$1 == null))?null:G__44506_44508__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1251,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__44501.cljs$core$IFn$_invoke$arity$2 ? pred__44501.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__44502) : pred__44501.call(null,clustermap.components.search.UP_ARROW,expr__44502))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$1569,((function (){var or__3558__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1569);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_((pred__44501.cljs$core$IFn$_invoke$arity$2 ? pred__44501.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__44502) : pred__44501.call(null,clustermap.components.search.DOWN_ARROW,expr__44502))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$1569,((function (){var or__3558__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1569);if(cljs.core.truth_(or__3558__auto__))
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
clustermap.components.search.search_component = (function search_component(p__44510,owner){var map__44542 = p__44510;var map__44542__$1 = ((cljs.core.seq_QMARK_(map__44542))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44542):map__44542);var map__44543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44542__$1,cljs.core.constant$keyword$1486);var map__44543__$1 = ((cljs.core.seq_QMARK_(map__44543))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44543):map__44543);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44543__$1,cljs.core.constant$keyword$1138);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44543__$1,cljs.core.constant$keyword$1245);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44542__$1,cljs.core.constant$keyword$1570);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44542__$1,cljs.core.constant$keyword$1571);var map__44544 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__44544__$1 = ((cljs.core.seq_QMARK_(map__44544))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44544):map__44544);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44544__$1,cljs.core.constant$keyword$1466);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44544__$1,cljs.core.constant$keyword$1282);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,view);var map__44545 = search_results;var map__44545__$1 = ((cljs.core.seq_QMARK_(map__44545))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44545):map__44545);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44545__$1,cljs.core.constant$keyword$1468);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44545__$1,cljs.core.constant$keyword$1568);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44545__$1,cljs.core.constant$keyword$1493);if(typeof clustermap.components.search.t44546 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t44546 = (function (search_results,search_component,owner,path_fn,view,portfolio_companies,constituencies,map__44543,investor_companies,selection_value,comm,selection_type,map__44544,p__44510,map__44545,map__44542,meta44547){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.map__44543 = map__44543;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.comm = comm;
this.selection_type = selection_type;
this.map__44544 = map__44544;
this.p__44510 = p__44510;
this.map__44545 = map__44545;
this.map__44542 = map__44542;
this.meta44547 = meta44547;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t44546.cljs$lang$type = true;
clustermap.components.search.t44546.cljs$lang$ctorStr = "clustermap.components.search/t44546";
clustermap.components.search.t44546.cljs$lang$ctorPrWriter = ((function (map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.search/t44546");
});})(map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t44546.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t44546.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "search-component", "ref": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1572,e.target.value], null));
});})(this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results))
}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1572,e.target.value], null));
});})(this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results))
}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1572,""], null));
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"search-field").value = "";
});})(this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3558__auto____$1))
{return or__3558__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3558__auto__ = cljs.core.constant$keyword$1569.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$1569.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1569,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1573,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1238,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1239,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_cons))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results){
return (function iter__44549(s__44550){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results){
return (function (){var s__44550__$1 = s__44550;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44550__$1);if(temp__4126__auto__)
{var s__44550__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44550__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__44550__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__44552 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__44551 = (0);while(true){
if((i__44551 < size__4282__auto__))
{var vec__44555 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__44551);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44555,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44555,(1),null);cljs.core.chunk_append(b__44552,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1219,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1282,self__.comm,cljs.core.constant$keyword$1466,self__.path_fn], null),cljs.core.constant$keyword$1218,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1249,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1213,((function (i__44551,vec__44555,idx,con,c__4281__auto__,size__4282__auto__,b__44552,s__44550__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1138,cljs.core.constant$keyword$1258,cljs.core.array_seq([cljs.core.constant$keyword$1140,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1141),cljs.core.constant$keyword$1574,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1141)))], 0));
});})(i__44551,vec__44555,idx,con,c__4281__auto__,size__4282__auto__,b__44552,s__44550__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1216,cljs.core.constant$keyword$1574], null)));
{
var G__44573 = (i__44551 + (1));
i__44551 = G__44573;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44552),iter__44549(cljs.core.chunk_rest(s__44550__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44552),null);
}
} else
{var vec__44556 = cljs.core.first(s__44550__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44556,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44556,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1219,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1282,self__.comm,cljs.core.constant$keyword$1466,self__.path_fn], null),cljs.core.constant$keyword$1218,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1249,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1213,((function (vec__44556,idx,con,s__44550__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1138,cljs.core.constant$keyword$1258,cljs.core.array_seq([cljs.core.constant$keyword$1140,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1141),cljs.core.constant$keyword$1574,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1141)))], 0));
});})(vec__44556,idx,con,s__44550__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1216,cljs.core.constant$keyword$1574], null)),iter__44549(cljs.core.rest(s__44550__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__(idx_cons);
})():null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1239,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results){
return (function iter__44557(s__44558){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results){
return (function (){var s__44558__$1 = s__44558;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44558__$1);if(temp__4126__auto__)
{var s__44558__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44558__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__44558__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__44560 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__44559 = (0);while(true){
if((i__44559 < size__4282__auto__))
{var vec__44563 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__44559);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44563,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44563,(1),null);cljs.core.chunk_append(b__44560,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1219,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1282,self__.comm,cljs.core.constant$keyword$1466,self__.path_fn], null),cljs.core.constant$keyword$1218,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1249,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1213,((function (i__44559,vec__44563,idx,pc,c__4281__auto__,size__4282__auto__,b__44560,s__44558__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1138,cljs.core.constant$keyword$1256,cljs.core.array_seq([cljs.core.constant$keyword$1140,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1259),cljs.core.constant$keyword$1574,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1259)))], 0));
});})(i__44559,vec__44563,idx,pc,c__4281__auto__,size__4282__auto__,b__44560,s__44558__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1216,cljs.core.constant$keyword$1574], null)));
{
var G__44574 = (i__44559 + (1));
i__44559 = G__44574;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44560),iter__44557(cljs.core.chunk_rest(s__44558__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44560),null);
}
} else
{var vec__44564 = cljs.core.first(s__44558__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44564,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44564,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1219,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1282,self__.comm,cljs.core.constant$keyword$1466,self__.path_fn], null),cljs.core.constant$keyword$1218,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1249,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1213,((function (vec__44564,idx,pc,s__44558__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1138,cljs.core.constant$keyword$1256,cljs.core.array_seq([cljs.core.constant$keyword$1140,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1259),cljs.core.constant$keyword$1574,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1259)))], 0));
});})(vec__44564,idx,pc,s__44558__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1216,cljs.core.constant$keyword$1574], null)),iter__44557(cljs.core.rest(s__44558__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__(idx_pcs);
})():null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1239,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results){
return (function iter__44565(s__44566){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results){
return (function (){var s__44566__$1 = s__44566;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44566__$1);if(temp__4126__auto__)
{var s__44566__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44566__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__44566__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__44568 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__44567 = (0);while(true){
if((i__44567 < size__4282__auto__))
{var vec__44571 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__44567);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44571,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44571,(1),null);cljs.core.chunk_append(b__44568,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1219,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1282,self__.comm,cljs.core.constant$keyword$1466,self__.path_fn], null),cljs.core.constant$keyword$1218,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1249,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1213,((function (i__44567,vec__44571,idx,inv,c__4281__auto__,size__4282__auto__,b__44568,s__44566__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1138,cljs.core.constant$keyword$1257,cljs.core.array_seq([cljs.core.constant$keyword$1140,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1260),cljs.core.constant$keyword$1574,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1260)))], 0));
});})(i__44567,vec__44571,idx,inv,c__4281__auto__,size__4282__auto__,b__44568,s__44566__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1216,cljs.core.constant$keyword$1574], null)));
{
var G__44575 = (i__44567 + (1));
i__44567 = G__44575;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44568),iter__44565(cljs.core.chunk_rest(s__44566__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44568),null);
}
} else
{var vec__44572 = cljs.core.first(s__44566__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44572,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44572,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1219,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1282,self__.comm,cljs.core.constant$keyword$1466,self__.path_fn], null),cljs.core.constant$keyword$1218,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1249,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1213,((function (vec__44572,idx,inv,s__44566__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1138,cljs.core.constant$keyword$1257,cljs.core.array_seq([cljs.core.constant$keyword$1140,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1260),cljs.core.constant$keyword$1574,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1260)))], 0));
});})(vec__44572,idx,inv,s__44566__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1216,cljs.core.constant$keyword$1574], null)),iter__44565(cljs.core.rest(s__44566__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__(idx_invs);
})():null)], null)], null);
})():null)));
});})(map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t44546.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results){
return (function (_44548){var self__ = this;
var _44548__$1 = this;return self__.meta44547;
});})(map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t44546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results){
return (function (_44548,meta44547__$1){var self__ = this;
var _44548__$1 = this;return (new clustermap.components.search.t44546(self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.portfolio_companies,self__.constituencies,self__.map__44543,self__.investor_companies,self__.selection_value,self__.comm,self__.selection_type,self__.map__44544,self__.p__44510,self__.map__44545,self__.map__44542,meta44547__$1));
});})(map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t44546 = ((function (map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results){
return (function __GT_t44546(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,map__44543__$2,investor_companies__$1,selection_value__$1,comm__$1,selection_type__$1,map__44544__$2,p__44510__$1,map__44545__$2,map__44542__$2,meta44547){return (new clustermap.components.search.t44546(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,map__44543__$2,investor_companies__$1,selection_value__$1,comm__$1,selection_type__$1,map__44544__$2,p__44510__$1,map__44545__$2,map__44542__$2,meta44547));
});})(map__44544,map__44544__$1,path_fn,comm,path_fn__$1,map__44545,map__44545__$1,investor_companies,portfolio_companies,constituencies,map__44542,map__44542__$1,map__44543,map__44543__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t44546(search_results,search_component,owner,path_fn__$1,view,portfolio_companies,constituencies,map__44543__$1,investor_companies,selection_value,comm,selection_type,map__44544__$1,p__44510,map__44545__$1,map__44542__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1221,shared,cljs.core.constant$keyword$1224,document.getElementById(elem_id)], null));
});
