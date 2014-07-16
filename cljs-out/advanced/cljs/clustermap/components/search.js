// Compiled by ClojureScript 0.0-2261
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
clustermap.components.search.search_result_link = (function search_result_link(p__37271,owner,p__37272){var map__37281 = p__37271;var map__37281__$1 = ((cljs.core.seq_QMARK_(map__37281))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37281):map__37281);var search_result = map__37281__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37281__$1,cljs.core.constant$keyword$795);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37281__$1,cljs.core.constant$keyword$825);var map__37282 = p__37272;var map__37282__$1 = ((cljs.core.seq_QMARK_(map__37282))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37282):map__37282);var opts = map__37282__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37282__$1,cljs.core.constant$keyword$878);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37282__$1,cljs.core.constant$keyword$888);if(typeof clustermap.components.search.t37283 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t37283 = (function (owner,path_fn,map__37281,search_result_link,p__37272,name,comm,search_result,type,map__37282,opts,p__37271,meta37284){
this.owner = owner;
this.path_fn = path_fn;
this.map__37281 = map__37281;
this.search_result_link = search_result_link;
this.p__37272 = p__37272;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.map__37282 = map__37282;
this.opts = opts;
this.p__37271 = p__37271;
this.meta37284 = meta37284;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t37283.cljs$lang$type = true;
clustermap.components.search.t37283.cljs$lang$ctorStr = "clustermap.components.search/t37283";
clustermap.components.search.t37283.cljs$lang$ctorPrWriter = ((function (map__37281,map__37281__$1,search_result,type,name,map__37282,map__37282__$1,opts,path_fn,comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.search/t37283");
});})(map__37281,map__37281__$1,search_result,type,name,map__37282,map__37282__$1,opts,path_fn,comm))
;
clustermap.components.search.t37283.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t37283.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__37281,map__37281__$1,search_result,type,name,map__37282,map__37282__$1,opts,path_fn,comm){
return (function (this$,p__37286){var self__ = this;
var map__37287 = p__37286;var map__37287__$1 = ((cljs.core.seq_QMARK_(map__37287))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37287):map__37287);var state = map__37287__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37287__$1,cljs.core.constant$keyword$831);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__37287,map__37287__$1,state,selected,map__37281,map__37281__$1,search_result,type,name,map__37282,map__37282__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__37288 = l;var G__37288__$1 = (((G__37288 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__37288));var G__37288__$2 = (((G__37288__$1 == null))?null:G__37288__$1.parents(".search-component"));var G__37288__$3 = (((G__37288__$2 == null))?null:G__37288__$2.toggle());return G__37288__$3;
});})(path,this$__$1,map__37287,map__37287__$1,state,selected,map__37281,map__37281__$1,search_result,type,name,map__37282,map__37282__$1,opts,path_fn,comm))
},sablono.interpreter.interpret(self__.name)));
});})(map__37281,map__37281__$1,search_result,type,name,map__37282,map__37282__$1,opts,path_fn,comm))
;
clustermap.components.search.t37283.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37281,map__37281__$1,search_result,type,name,map__37282,map__37282__$1,opts,path_fn,comm){
return (function (_37285){var self__ = this;
var _37285__$1 = this;return self__.meta37284;
});})(map__37281,map__37281__$1,search_result,type,name,map__37282,map__37282__$1,opts,path_fn,comm))
;
clustermap.components.search.t37283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37281,map__37281__$1,search_result,type,name,map__37282,map__37282__$1,opts,path_fn,comm){
return (function (_37285,meta37284__$1){var self__ = this;
var _37285__$1 = this;return (new clustermap.components.search.t37283(self__.owner,self__.path_fn,self__.map__37281,self__.search_result_link,self__.p__37272,self__.name,self__.comm,self__.search_result,self__.type,self__.map__37282,self__.opts,self__.p__37271,meta37284__$1));
});})(map__37281,map__37281__$1,search_result,type,name,map__37282,map__37282__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t37283 = ((function (map__37281,map__37281__$1,search_result,type,name,map__37282,map__37282__$1,opts,path_fn,comm){
return (function __GT_t37283(owner__$1,path_fn__$1,map__37281__$2,search_result_link__$1,p__37272__$1,name__$1,comm__$1,search_result__$1,type__$1,map__37282__$2,opts__$1,p__37271__$1,meta37284){return (new clustermap.components.search.t37283(owner__$1,path_fn__$1,map__37281__$2,search_result_link__$1,p__37272__$1,name__$1,comm__$1,search_result__$1,type__$1,map__37282__$2,opts__$1,p__37271__$1,meta37284));
});})(map__37281,map__37281__$1,search_result,type,name,map__37282,map__37282__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t37283(owner,path_fn,map__37281__$1,search_result_link,p__37272,name,comm,search_result,type,map__37282__$1,opts,p__37271,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__37289,n){var map__37291 = p__37289;var map__37291__$1 = ((cljs.core.seq_QMARK_(map__37291))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37291):map__37291);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37291__$1,cljs.core.constant$keyword$882);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37291__$1,cljs.core.constant$keyword$967);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37291__$1,cljs.core.constant$keyword$949);var cons = (function (){var or__3543__auto__ = constituencies;if(cljs.core.truth_(or__3543__auto__))
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
})();if((n < cljs.core.count(cons)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$883,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$880,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$881,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__37298 = cljs.core._EQ__EQ_;var expr__37299 = e.keyCode;if(cljs.core.truth_((pred__37298.cljs$core$IFn$_invoke$arity$2 ? pred__37298.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__37299) : pred__37298.call(null,clustermap.components.search.ESCAPE_KEY,expr__37299))))
{var G__37301 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__37301__$1 = (((G__37301 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__37301));var G__37301__$2 = (((G__37301__$1 == null))?null:G__37301__$1.toggle());return G__37301__$2;
} else
{if(cljs.core.truth_((pred__37298.cljs$core$IFn$_invoke$arity$2 ? pred__37298.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__37299) : pred__37298.call(null,clustermap.components.search.ENTER_KEY,expr__37299))))
{var vec__37302 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3543__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$968);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37302,(0),null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37302,(1),null);var G__37303_37304 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__37303_37305__$1 = (((G__37303_37304 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__37303_37304));var G__37303_37306__$2 = (((G__37303_37305__$1 == null))?null:G__37303_37305__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$833,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__37298.cljs$core$IFn$_invoke$arity$2 ? pred__37298.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__37299) : pred__37298.call(null,clustermap.components.search.UP_ARROW,expr__37299))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$968,((function (){var or__3543__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$968);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_((pred__37298.cljs$core$IFn$_invoke$arity$2 ? pred__37298.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__37299) : pred__37298.call(null,clustermap.components.search.DOWN_ARROW,expr__37299))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$968,((function (){var or__3543__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$968);if(cljs.core.truth_(or__3543__auto__))
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
clustermap.components.search.search_component = (function search_component(p__37307,owner){var map__37339 = p__37307;var map__37339__$1 = ((cljs.core.seq_QMARK_(map__37339))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37339):map__37339);var map__37340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37339__$1,cljs.core.constant$keyword$942);var map__37340__$1 = ((cljs.core.seq_QMARK_(map__37340))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37340):map__37340);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37340__$1,cljs.core.constant$keyword$795);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37340__$1,cljs.core.constant$keyword$826);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37339__$1,cljs.core.constant$keyword$969);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37339__$1,cljs.core.constant$keyword$970);var map__37341 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__37341__$1 = ((cljs.core.seq_QMARK_(map__37341))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37341):map__37341);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37341__$1,cljs.core.constant$keyword$878);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37341__$1,cljs.core.constant$keyword$888);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,view);var map__37342 = search_results;var map__37342__$1 = ((cljs.core.seq_QMARK_(map__37342))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37342):map__37342);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37342__$1,cljs.core.constant$keyword$882);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37342__$1,cljs.core.constant$keyword$967);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37342__$1,cljs.core.constant$keyword$949);if(typeof clustermap.components.search.t37343 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t37343 = (function (search_results,search_component,owner,path_fn,view,portfolio_companies,constituencies,map__37340,investor_companies,selection_value,comm,map__37341,map__37342,selection_type,p__37307,map__37339,meta37344){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.map__37340 = map__37340;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.comm = comm;
this.map__37341 = map__37341;
this.map__37342 = map__37342;
this.selection_type = selection_type;
this.p__37307 = p__37307;
this.map__37339 = map__37339;
this.meta37344 = meta37344;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t37343.cljs$lang$type = true;
clustermap.components.search.t37343.cljs$lang$ctorStr = "clustermap.components.search/t37343";
clustermap.components.search.t37343.cljs$lang$ctorPrWriter = ((function (map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.search/t37343");
});})(map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t37343.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t37343.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$971,e.target.value], null));
});})(this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results))
}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$971,e.target.value], null));
});})(this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results))
}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$971,""], null));
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"search-field").value = "";
});})(this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3543__auto____$1))
{return or__3543__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3543__auto__ = cljs.core.constant$keyword$968.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$968.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$968,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$972,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$808,"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$819,cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$820,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$808,"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_cons))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results){
return (function iter__37346(s__37347){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results){
return (function (){var s__37347__$1 = s__37347;while(true){
var temp__4126__auto__ = cljs.core.seq(s__37347__$1);if(temp__4126__auto__)
{var s__37347__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__37347__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__37347__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__37349 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__37348 = (0);while(true){
if((i__37348 < size__4267__auto__))
{var vec__37352 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__37348);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37352,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37352,(1),null);cljs.core.chunk_append(b__37349,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$871,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$888,self__.comm,cljs.core.constant$keyword$878,self__.path_fn], null),cljs.core.constant$keyword$870,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$831,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$865,((function (i__37348,vec__37352,idx,con,c__4266__auto__,size__4267__auto__,b__37349,s__37347__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$795,cljs.core.constant$keyword$883,cljs.core.array_seq([cljs.core.constant$keyword$797,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$798),cljs.core.constant$keyword$973,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$798)))], 0));
});})(i__37348,vec__37352,idx,con,c__4266__auto__,size__4267__auto__,b__37349,s__37347__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$868,cljs.core.constant$keyword$973], null)));
{
var G__37370 = (i__37348 + (1));
i__37348 = G__37370;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__37349),iter__37346(cljs.core.chunk_rest(s__37347__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__37349),null);
}
} else
{var vec__37353 = cljs.core.first(s__37347__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37353,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37353,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$871,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$888,self__.comm,cljs.core.constant$keyword$878,self__.path_fn], null),cljs.core.constant$keyword$870,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$831,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$865,((function (vec__37353,idx,con,s__37347__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$795,cljs.core.constant$keyword$883,cljs.core.array_seq([cljs.core.constant$keyword$797,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$798),cljs.core.constant$keyword$973,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$798)))], 0));
});})(vec__37353,idx,con,s__37347__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$868,cljs.core.constant$keyword$973], null)),iter__37346(cljs.core.rest(s__37347__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__(idx_cons);
})():null),cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$820,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$808,"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results){
return (function iter__37354(s__37355){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results){
return (function (){var s__37355__$1 = s__37355;while(true){
var temp__4126__auto__ = cljs.core.seq(s__37355__$1);if(temp__4126__auto__)
{var s__37355__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__37355__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__37355__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__37357 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__37356 = (0);while(true){
if((i__37356 < size__4267__auto__))
{var vec__37360 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__37356);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37360,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37360,(1),null);cljs.core.chunk_append(b__37357,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$871,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$888,self__.comm,cljs.core.constant$keyword$878,self__.path_fn], null),cljs.core.constant$keyword$870,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$831,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$865,((function (i__37356,vec__37360,idx,pc,c__4266__auto__,size__4267__auto__,b__37357,s__37355__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$795,cljs.core.constant$keyword$880,cljs.core.array_seq([cljs.core.constant$keyword$797,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$891),cljs.core.constant$keyword$973,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$891)))], 0));
});})(i__37356,vec__37360,idx,pc,c__4266__auto__,size__4267__auto__,b__37357,s__37355__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$868,cljs.core.constant$keyword$973], null)));
{
var G__37371 = (i__37356 + (1));
i__37356 = G__37371;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__37357),iter__37354(cljs.core.chunk_rest(s__37355__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__37357),null);
}
} else
{var vec__37361 = cljs.core.first(s__37355__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37361,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37361,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$871,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$888,self__.comm,cljs.core.constant$keyword$878,self__.path_fn], null),cljs.core.constant$keyword$870,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$831,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$865,((function (vec__37361,idx,pc,s__37355__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$795,cljs.core.constant$keyword$880,cljs.core.array_seq([cljs.core.constant$keyword$797,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$891),cljs.core.constant$keyword$973,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$891)))], 0));
});})(vec__37361,idx,pc,s__37355__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$868,cljs.core.constant$keyword$973], null)),iter__37354(cljs.core.rest(s__37355__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__(idx_pcs);
})():null),cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$820,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$808,"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results){
return (function iter__37362(s__37363){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results){
return (function (){var s__37363__$1 = s__37363;while(true){
var temp__4126__auto__ = cljs.core.seq(s__37363__$1);if(temp__4126__auto__)
{var s__37363__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__37363__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__37363__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__37365 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__37364 = (0);while(true){
if((i__37364 < size__4267__auto__))
{var vec__37368 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__37364);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37368,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37368,(1),null);cljs.core.chunk_append(b__37365,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$871,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$888,self__.comm,cljs.core.constant$keyword$878,self__.path_fn], null),cljs.core.constant$keyword$870,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$831,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$865,((function (i__37364,vec__37368,idx,inv,c__4266__auto__,size__4267__auto__,b__37365,s__37363__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$795,cljs.core.constant$keyword$881,cljs.core.array_seq([cljs.core.constant$keyword$797,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$894),cljs.core.constant$keyword$973,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$894)))], 0));
});})(i__37364,vec__37368,idx,inv,c__4266__auto__,size__4267__auto__,b__37365,s__37363__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$868,cljs.core.constant$keyword$973], null)));
{
var G__37372 = (i__37364 + (1));
i__37364 = G__37372;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__37365),iter__37362(cljs.core.chunk_rest(s__37363__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__37365),null);
}
} else
{var vec__37369 = cljs.core.first(s__37363__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37369,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37369,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$871,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$888,self__.comm,cljs.core.constant$keyword$878,self__.path_fn], null),cljs.core.constant$keyword$870,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$831,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$865,((function (vec__37369,idx,inv,s__37363__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$795,cljs.core.constant$keyword$881,cljs.core.array_seq([cljs.core.constant$keyword$797,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$894),cljs.core.constant$keyword$973,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$894)))], 0));
});})(vec__37369,idx,inv,s__37363__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$868,cljs.core.constant$keyword$973], null)),iter__37362(cljs.core.rest(s__37363__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__(idx_invs);
})():null)], null)], null);
})():null)));
});})(map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t37343.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results){
return (function (_37345){var self__ = this;
var _37345__$1 = this;return self__.meta37344;
});})(map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t37343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results){
return (function (_37345,meta37344__$1){var self__ = this;
var _37345__$1 = this;return (new clustermap.components.search.t37343(self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.portfolio_companies,self__.constituencies,self__.map__37340,self__.investor_companies,self__.selection_value,self__.comm,self__.map__37341,self__.map__37342,self__.selection_type,self__.p__37307,self__.map__37339,meta37344__$1));
});})(map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t37343 = ((function (map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results){
return (function __GT_t37343(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,map__37340__$2,investor_companies__$1,selection_value__$1,comm__$1,map__37341__$2,map__37342__$2,selection_type__$1,p__37307__$1,map__37339__$2,meta37344){return (new clustermap.components.search.t37343(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,map__37340__$2,investor_companies__$1,selection_value__$1,comm__$1,map__37341__$2,map__37342__$2,selection_type__$1,p__37307__$1,map__37339__$2,meta37344));
});})(map__37341,map__37341__$1,path_fn,comm,path_fn__$1,map__37342,map__37342__$1,investor_companies,portfolio_companies,constituencies,map__37339,map__37339__$1,map__37340,map__37340__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t37343(search_results,search_component,owner,path_fn__$1,view,portfolio_companies,constituencies,map__37340__$1,investor_companies,selection_value,comm,map__37341__$1,map__37342__$1,selection_type,p__37307,map__37339__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$873,shared,cljs.core.constant$keyword$876,document.getElementById(elem_id)], null));
});
