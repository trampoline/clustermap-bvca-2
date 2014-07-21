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
clustermap.components.search.search_result_link = (function search_result_link(p__39495,owner,p__39496){var map__39505 = p__39495;var map__39505__$1 = ((cljs.core.seq_QMARK_(map__39505))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39505):map__39505);var search_result = map__39505__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39505__$1,cljs.core.constant$keyword$805);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39505__$1,cljs.core.constant$keyword$835);var map__39506 = p__39496;var map__39506__$1 = ((cljs.core.seq_QMARK_(map__39506))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39506):map__39506);var opts = map__39506__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39506__$1,cljs.core.constant$keyword$888);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39506__$1,cljs.core.constant$keyword$898);if(typeof clustermap.components.search.t39507 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t39507 = (function (map__39505,owner,path_fn,search_result_link,p__39495,name,comm,search_result,type,p__39496,opts,map__39506,meta39508){
this.map__39505 = map__39505;
this.owner = owner;
this.path_fn = path_fn;
this.search_result_link = search_result_link;
this.p__39495 = p__39495;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.p__39496 = p__39496;
this.opts = opts;
this.map__39506 = map__39506;
this.meta39508 = meta39508;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t39507.cljs$lang$type = true;
clustermap.components.search.t39507.cljs$lang$ctorStr = "clustermap.components.search/t39507";
clustermap.components.search.t39507.cljs$lang$ctorPrWriter = ((function (map__39505,map__39505__$1,search_result,type,name,map__39506,map__39506__$1,opts,path_fn,comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.search/t39507");
});})(map__39505,map__39505__$1,search_result,type,name,map__39506,map__39506__$1,opts,path_fn,comm))
;
clustermap.components.search.t39507.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t39507.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__39505,map__39505__$1,search_result,type,name,map__39506,map__39506__$1,opts,path_fn,comm){
return (function (this$,p__39510){var self__ = this;
var map__39511 = p__39510;var map__39511__$1 = ((cljs.core.seq_QMARK_(map__39511))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39511):map__39511);var state = map__39511__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39511__$1,cljs.core.constant$keyword$841);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__39511,map__39511__$1,state,selected,map__39505,map__39505__$1,search_result,type,name,map__39506,map__39506__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__39512 = l;var G__39512__$1 = (((G__39512 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__39512));var G__39512__$2 = (((G__39512__$1 == null))?null:G__39512__$1.parents(".search-component"));var G__39512__$3 = (((G__39512__$2 == null))?null:G__39512__$2.toggle());return G__39512__$3;
});})(path,this$__$1,map__39511,map__39511__$1,state,selected,map__39505,map__39505__$1,search_result,type,name,map__39506,map__39506__$1,opts,path_fn,comm))
},sablono.interpreter.interpret(self__.name)));
});})(map__39505,map__39505__$1,search_result,type,name,map__39506,map__39506__$1,opts,path_fn,comm))
;
clustermap.components.search.t39507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__39505,map__39505__$1,search_result,type,name,map__39506,map__39506__$1,opts,path_fn,comm){
return (function (_39509){var self__ = this;
var _39509__$1 = this;return self__.meta39508;
});})(map__39505,map__39505__$1,search_result,type,name,map__39506,map__39506__$1,opts,path_fn,comm))
;
clustermap.components.search.t39507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__39505,map__39505__$1,search_result,type,name,map__39506,map__39506__$1,opts,path_fn,comm){
return (function (_39509,meta39508__$1){var self__ = this;
var _39509__$1 = this;return (new clustermap.components.search.t39507(self__.map__39505,self__.owner,self__.path_fn,self__.search_result_link,self__.p__39495,self__.name,self__.comm,self__.search_result,self__.type,self__.p__39496,self__.opts,self__.map__39506,meta39508__$1));
});})(map__39505,map__39505__$1,search_result,type,name,map__39506,map__39506__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t39507 = ((function (map__39505,map__39505__$1,search_result,type,name,map__39506,map__39506__$1,opts,path_fn,comm){
return (function __GT_t39507(map__39505__$2,owner__$1,path_fn__$1,search_result_link__$1,p__39495__$1,name__$1,comm__$1,search_result__$1,type__$1,p__39496__$1,opts__$1,map__39506__$2,meta39508){return (new clustermap.components.search.t39507(map__39505__$2,owner__$1,path_fn__$1,search_result_link__$1,p__39495__$1,name__$1,comm__$1,search_result__$1,type__$1,p__39496__$1,opts__$1,map__39506__$2,meta39508));
});})(map__39505,map__39505__$1,search_result,type,name,map__39506,map__39506__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t39507(map__39505__$1,owner,path_fn,search_result_link,p__39495,name,comm,search_result,type,p__39496,opts,map__39506__$1,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__39513,n){var map__39515 = p__39513;var map__39515__$1 = ((cljs.core.seq_QMARK_(map__39515))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39515):map__39515);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39515__$1,cljs.core.constant$keyword$892);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39515__$1,cljs.core.constant$keyword$977);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39515__$1,cljs.core.constant$keyword$959);var cons = (function (){var or__3543__auto__ = constituencies;if(cljs.core.truth_(or__3543__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$893,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$890,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$891,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__39522 = cljs.core._EQ__EQ_;var expr__39523 = e.keyCode;if(cljs.core.truth_((pred__39522.cljs$core$IFn$_invoke$arity$2 ? pred__39522.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__39523) : pred__39522.call(null,clustermap.components.search.ESCAPE_KEY,expr__39523))))
{var G__39525 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__39525__$1 = (((G__39525 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__39525));var G__39525__$2 = (((G__39525__$1 == null))?null:G__39525__$1.toggle());return G__39525__$2;
} else
{if(cljs.core.truth_((pred__39522.cljs$core$IFn$_invoke$arity$2 ? pred__39522.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__39523) : pred__39522.call(null,clustermap.components.search.ENTER_KEY,expr__39523))))
{var vec__39526 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3543__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$978);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39526,(0),null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39526,(1),null);var G__39527_39528 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__39527_39529__$1 = (((G__39527_39528 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__39527_39528));var G__39527_39530__$2 = (((G__39527_39529__$1 == null))?null:G__39527_39529__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$843,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__39522.cljs$core$IFn$_invoke$arity$2 ? pred__39522.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__39523) : pred__39522.call(null,clustermap.components.search.UP_ARROW,expr__39523))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$978,((function (){var or__3543__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$978);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_((pred__39522.cljs$core$IFn$_invoke$arity$2 ? pred__39522.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__39523) : pred__39522.call(null,clustermap.components.search.DOWN_ARROW,expr__39523))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$978,((function (){var or__3543__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$978);if(cljs.core.truth_(or__3543__auto__))
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
clustermap.components.search.search_component = (function search_component(p__39531,owner){var map__39563 = p__39531;var map__39563__$1 = ((cljs.core.seq_QMARK_(map__39563))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39563):map__39563);var map__39564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39563__$1,cljs.core.constant$keyword$952);var map__39564__$1 = ((cljs.core.seq_QMARK_(map__39564))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39564):map__39564);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39564__$1,cljs.core.constant$keyword$805);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39564__$1,cljs.core.constant$keyword$836);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39563__$1,cljs.core.constant$keyword$979);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39563__$1,cljs.core.constant$keyword$980);var map__39565 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__39565__$1 = ((cljs.core.seq_QMARK_(map__39565))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39565):map__39565);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39565__$1,cljs.core.constant$keyword$888);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39565__$1,cljs.core.constant$keyword$898);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,view);var map__39566 = search_results;var map__39566__$1 = ((cljs.core.seq_QMARK_(map__39566))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39566):map__39566);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39566__$1,cljs.core.constant$keyword$892);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39566__$1,cljs.core.constant$keyword$977);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39566__$1,cljs.core.constant$keyword$959);if(typeof clustermap.components.search.t39567 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t39567 = (function (map__39566,search_results,p__39531,search_component,owner,path_fn,view,portfolio_companies,constituencies,investor_companies,map__39565,selection_value,comm,map__39563,selection_type,map__39564,meta39568){
this.map__39566 = map__39566;
this.search_results = search_results;
this.p__39531 = p__39531;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.map__39565 = map__39565;
this.selection_value = selection_value;
this.comm = comm;
this.map__39563 = map__39563;
this.selection_type = selection_type;
this.map__39564 = map__39564;
this.meta39568 = meta39568;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t39567.cljs$lang$type = true;
clustermap.components.search.t39567.cljs$lang$ctorStr = "clustermap.components.search/t39567";
clustermap.components.search.t39567.cljs$lang$ctorPrWriter = ((function (map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.search/t39567");
});})(map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t39567.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t39567.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$981,e.target.value], null));
});})(this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results))
}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$981,e.target.value], null));
});})(this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results))
}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$981,""], null));
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"search-field").value = "";
});})(this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3543__auto____$1))
{return or__3543__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3543__auto__ = cljs.core.constant$keyword$978.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$978.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$978,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$982,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$818,"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$829,cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$830,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$818,"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_cons))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results){
return (function iter__39570(s__39571){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results){
return (function (){var s__39571__$1 = s__39571;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39571__$1);if(temp__4126__auto__)
{var s__39571__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39571__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__39571__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__39573 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__39572 = (0);while(true){
if((i__39572 < size__4267__auto__))
{var vec__39576 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__39572);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39576,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39576,(1),null);cljs.core.chunk_append(b__39573,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$881,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$898,self__.comm,cljs.core.constant$keyword$888,self__.path_fn], null),cljs.core.constant$keyword$880,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$841,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$875,((function (i__39572,vec__39576,idx,con,c__4266__auto__,size__4267__auto__,b__39573,s__39571__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$805,cljs.core.constant$keyword$893,cljs.core.array_seq([cljs.core.constant$keyword$807,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$808),cljs.core.constant$keyword$983,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$808)))], 0));
});})(i__39572,vec__39576,idx,con,c__4266__auto__,size__4267__auto__,b__39573,s__39571__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$878,cljs.core.constant$keyword$983], null)));
{
var G__39594 = (i__39572 + (1));
i__39572 = G__39594;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39573),iter__39570(cljs.core.chunk_rest(s__39571__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39573),null);
}
} else
{var vec__39577 = cljs.core.first(s__39571__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39577,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39577,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$881,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$898,self__.comm,cljs.core.constant$keyword$888,self__.path_fn], null),cljs.core.constant$keyword$880,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$841,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$875,((function (vec__39577,idx,con,s__39571__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$805,cljs.core.constant$keyword$893,cljs.core.array_seq([cljs.core.constant$keyword$807,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$808),cljs.core.constant$keyword$983,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$808)))], 0));
});})(vec__39577,idx,con,s__39571__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$878,cljs.core.constant$keyword$983], null)),iter__39570(cljs.core.rest(s__39571__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__(idx_cons);
})():null),cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$830,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$818,"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results){
return (function iter__39578(s__39579){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results){
return (function (){var s__39579__$1 = s__39579;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39579__$1);if(temp__4126__auto__)
{var s__39579__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39579__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__39579__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__39581 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__39580 = (0);while(true){
if((i__39580 < size__4267__auto__))
{var vec__39584 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__39580);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39584,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39584,(1),null);cljs.core.chunk_append(b__39581,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$881,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$898,self__.comm,cljs.core.constant$keyword$888,self__.path_fn], null),cljs.core.constant$keyword$880,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$841,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$875,((function (i__39580,vec__39584,idx,pc,c__4266__auto__,size__4267__auto__,b__39581,s__39579__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$805,cljs.core.constant$keyword$890,cljs.core.array_seq([cljs.core.constant$keyword$807,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$901),cljs.core.constant$keyword$983,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$901)))], 0));
});})(i__39580,vec__39584,idx,pc,c__4266__auto__,size__4267__auto__,b__39581,s__39579__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$878,cljs.core.constant$keyword$983], null)));
{
var G__39595 = (i__39580 + (1));
i__39580 = G__39595;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39581),iter__39578(cljs.core.chunk_rest(s__39579__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39581),null);
}
} else
{var vec__39585 = cljs.core.first(s__39579__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39585,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39585,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$881,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$898,self__.comm,cljs.core.constant$keyword$888,self__.path_fn], null),cljs.core.constant$keyword$880,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$841,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$875,((function (vec__39585,idx,pc,s__39579__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$805,cljs.core.constant$keyword$890,cljs.core.array_seq([cljs.core.constant$keyword$807,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$901),cljs.core.constant$keyword$983,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$901)))], 0));
});})(vec__39585,idx,pc,s__39579__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$878,cljs.core.constant$keyword$983], null)),iter__39578(cljs.core.rest(s__39579__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__(idx_pcs);
})():null),cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$830,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$818,"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results){
return (function iter__39586(s__39587){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results){
return (function (){var s__39587__$1 = s__39587;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39587__$1);if(temp__4126__auto__)
{var s__39587__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39587__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__39587__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__39589 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__39588 = (0);while(true){
if((i__39588 < size__4267__auto__))
{var vec__39592 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__39588);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39592,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39592,(1),null);cljs.core.chunk_append(b__39589,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$881,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$898,self__.comm,cljs.core.constant$keyword$888,self__.path_fn], null),cljs.core.constant$keyword$880,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$841,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$875,((function (i__39588,vec__39592,idx,inv,c__4266__auto__,size__4267__auto__,b__39589,s__39587__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$805,cljs.core.constant$keyword$891,cljs.core.array_seq([cljs.core.constant$keyword$807,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$904),cljs.core.constant$keyword$983,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$904)))], 0));
});})(i__39588,vec__39592,idx,inv,c__4266__auto__,size__4267__auto__,b__39589,s__39587__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$878,cljs.core.constant$keyword$983], null)));
{
var G__39596 = (i__39588 + (1));
i__39588 = G__39596;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39589),iter__39586(cljs.core.chunk_rest(s__39587__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39589),null);
}
} else
{var vec__39593 = cljs.core.first(s__39587__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39593,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39593,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$881,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$898,self__.comm,cljs.core.constant$keyword$888,self__.path_fn], null),cljs.core.constant$keyword$880,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$841,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$875,((function (vec__39593,idx,inv,s__39587__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$805,cljs.core.constant$keyword$891,cljs.core.array_seq([cljs.core.constant$keyword$807,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$904),cljs.core.constant$keyword$983,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$904)))], 0));
});})(vec__39593,idx,inv,s__39587__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$878,cljs.core.constant$keyword$983], null)),iter__39586(cljs.core.rest(s__39587__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__(idx_invs);
})():null)], null)], null);
})():null)));
});})(map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t39567.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results){
return (function (_39569){var self__ = this;
var _39569__$1 = this;return self__.meta39568;
});})(map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t39567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results){
return (function (_39569,meta39568__$1){var self__ = this;
var _39569__$1 = this;return (new clustermap.components.search.t39567(self__.map__39566,self__.search_results,self__.p__39531,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.portfolio_companies,self__.constituencies,self__.investor_companies,self__.map__39565,self__.selection_value,self__.comm,self__.map__39563,self__.selection_type,self__.map__39564,meta39568__$1));
});})(map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t39567 = ((function (map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results){
return (function __GT_t39567(map__39566__$2,search_results__$1,p__39531__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,investor_companies__$1,map__39565__$2,selection_value__$1,comm__$1,map__39563__$2,selection_type__$1,map__39564__$2,meta39568){return (new clustermap.components.search.t39567(map__39566__$2,search_results__$1,p__39531__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,investor_companies__$1,map__39565__$2,selection_value__$1,comm__$1,map__39563__$2,selection_type__$1,map__39564__$2,meta39568));
});})(map__39565,map__39565__$1,path_fn,comm,path_fn__$1,map__39566,map__39566__$1,investor_companies,portfolio_companies,constituencies,map__39563,map__39563__$1,map__39564,map__39564__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t39567(map__39566__$1,search_results,p__39531,search_component,owner,path_fn__$1,view,portfolio_companies,constituencies,investor_companies,map__39565__$1,selection_value,comm,map__39563__$1,selection_type,map__39564__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$883,shared,cljs.core.constant$keyword$886,document.getElementById(elem_id)], null));
});
