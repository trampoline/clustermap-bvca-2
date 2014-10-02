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
clustermap.components.search.search_result_link = (function search_result_link(p__39812,owner,p__39813){var map__39822 = p__39812;var map__39822__$1 = ((cljs.core.seq_QMARK_(map__39822))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39822):map__39822);var search_result = map__39822__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39822__$1,cljs.core.constant$keyword$912);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39822__$1,cljs.core.constant$keyword$941);var map__39823 = p__39813;var map__39823__$1 = ((cljs.core.seq_QMARK_(map__39823))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39823):map__39823);var opts = map__39823__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39823__$1,cljs.core.constant$keyword$1012);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39823__$1,cljs.core.constant$keyword$1023);if(typeof clustermap.components.search.t39824 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t39824 = (function (owner,path_fn,p__39813,map__39822,p__39812,search_result_link,name,comm,search_result,type,map__39823,opts,meta39825){
this.owner = owner;
this.path_fn = path_fn;
this.p__39813 = p__39813;
this.map__39822 = map__39822;
this.p__39812 = p__39812;
this.search_result_link = search_result_link;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.map__39823 = map__39823;
this.opts = opts;
this.meta39825 = meta39825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t39824.cljs$lang$type = true;
clustermap.components.search.t39824.cljs$lang$ctorStr = "clustermap.components.search/t39824";
clustermap.components.search.t39824.cljs$lang$ctorPrWriter = ((function (map__39822,map__39822__$1,search_result,type,name,map__39823,map__39823__$1,opts,path_fn,comm){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.search/t39824");
});})(map__39822,map__39822__$1,search_result,type,name,map__39823,map__39823__$1,opts,path_fn,comm))
;
clustermap.components.search.t39824.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t39824.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__39822,map__39822__$1,search_result,type,name,map__39823,map__39823__$1,opts,path_fn,comm){
return (function (this$,p__39827){var self__ = this;
var map__39828 = p__39827;var map__39828__$1 = ((cljs.core.seq_QMARK_(map__39828))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39828):map__39828);var state = map__39828__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39828__$1,cljs.core.constant$keyword$946);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__39828,map__39828__$1,state,selected,map__39822,map__39822__$1,search_result,type,name,map__39823,map__39823__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__39829 = l;var G__39829__$1 = (((G__39829 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__39829));var G__39829__$2 = (((G__39829__$1 == null))?null:G__39829__$1.parents(".search-component"));var G__39829__$3 = (((G__39829__$2 == null))?null:G__39829__$2.toggle());return G__39829__$3;
});})(path,this$__$1,map__39828,map__39828__$1,state,selected,map__39822,map__39822__$1,search_result,type,name,map__39823,map__39823__$1,opts,path_fn,comm))
},sablono.interpreter.interpret(self__.name)));
});})(map__39822,map__39822__$1,search_result,type,name,map__39823,map__39823__$1,opts,path_fn,comm))
;
clustermap.components.search.t39824.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__39822,map__39822__$1,search_result,type,name,map__39823,map__39823__$1,opts,path_fn,comm){
return (function (_39826){var self__ = this;
var _39826__$1 = this;return self__.meta39825;
});})(map__39822,map__39822__$1,search_result,type,name,map__39823,map__39823__$1,opts,path_fn,comm))
;
clustermap.components.search.t39824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__39822,map__39822__$1,search_result,type,name,map__39823,map__39823__$1,opts,path_fn,comm){
return (function (_39826,meta39825__$1){var self__ = this;
var _39826__$1 = this;return (new clustermap.components.search.t39824(self__.owner,self__.path_fn,self__.p__39813,self__.map__39822,self__.p__39812,self__.search_result_link,self__.name,self__.comm,self__.search_result,self__.type,self__.map__39823,self__.opts,meta39825__$1));
});})(map__39822,map__39822__$1,search_result,type,name,map__39823,map__39823__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t39824 = ((function (map__39822,map__39822__$1,search_result,type,name,map__39823,map__39823__$1,opts,path_fn,comm){
return (function __GT_t39824(owner__$1,path_fn__$1,p__39813__$1,map__39822__$2,p__39812__$1,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,map__39823__$2,opts__$1,meta39825){return (new clustermap.components.search.t39824(owner__$1,path_fn__$1,p__39813__$1,map__39822__$2,p__39812__$1,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,map__39823__$2,opts__$1,meta39825));
});})(map__39822,map__39822__$1,search_result,type,name,map__39823,map__39823__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t39824(owner,path_fn,p__39813,map__39822__$1,p__39812,search_result_link,name,comm,search_result,type,map__39823__$1,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__39830,n){var map__39832 = p__39830;var map__39832__$1 = ((cljs.core.seq_QMARK_(map__39832))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39832):map__39832);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39832__$1,cljs.core.constant$keyword$1016);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39832__$1,cljs.core.constant$keyword$1103);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39832__$1,cljs.core.constant$keyword$1085);var cons = (function (){var or__3558__auto__ = constituencies;if(cljs.core.truth_(or__3558__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1017,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1014,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1015,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);

}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__39839 = cljs.core._EQ__EQ_;var expr__39840 = e.keyCode;if(cljs.core.truth_((pred__39839.cljs$core$IFn$_invoke$arity$2 ? pred__39839.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__39840) : pred__39839.call(null,clustermap.components.search.ESCAPE_KEY,expr__39840))))
{var G__39842 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__39842__$1 = (((G__39842 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__39842));var G__39842__$2 = (((G__39842__$1 == null))?null:G__39842__$1.toggle());return G__39842__$2;
} else
{if(cljs.core.truth_((pred__39839.cljs$core$IFn$_invoke$arity$2 ? pred__39839.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__39840) : pred__39839.call(null,clustermap.components.search.ENTER_KEY,expr__39840))))
{var vec__39843 = clustermap.components.search.nth_search_result((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(search_results) : cljs.core.deref.call(null,search_results)),(function (){var or__3558__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1104);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39843,(0),null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39843,(1),null);var G__39844_39845 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__39844_39846__$1 = (((G__39844_39845 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__39844_39845));var G__39844_39847__$2 = (((G__39844_39846__$1 == null))?null:G__39844_39846__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$948,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__39839.cljs$core$IFn$_invoke$arity$2 ? pred__39839.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__39840) : pred__39839.call(null,clustermap.components.search.UP_ARROW,expr__39840))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$1104,((function (){var or__3558__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1104);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_((pred__39839.cljs$core$IFn$_invoke$arity$2 ? pred__39839.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__39840) : pred__39839.call(null,clustermap.components.search.DOWN_ARROW,expr__39840))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$1104,((function (){var or__3558__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1104);if(cljs.core.truth_(or__3558__auto__))
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
clustermap.components.search.search_component = (function search_component(p__39848,owner){var map__39880 = p__39848;var map__39880__$1 = ((cljs.core.seq_QMARK_(map__39880))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39880):map__39880);var map__39881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39880__$1,cljs.core.constant$keyword$1078);var map__39881__$1 = ((cljs.core.seq_QMARK_(map__39881))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39881):map__39881);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39881__$1,cljs.core.constant$keyword$912);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39881__$1,cljs.core.constant$keyword$942);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39880__$1,cljs.core.constant$keyword$1105);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39880__$1,cljs.core.constant$keyword$1106);var map__39882 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__39882__$1 = ((cljs.core.seq_QMARK_(map__39882))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39882):map__39882);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39882__$1,cljs.core.constant$keyword$1012);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39882__$1,cljs.core.constant$keyword$1023);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,view);var map__39883 = search_results;var map__39883__$1 = ((cljs.core.seq_QMARK_(map__39883))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39883):map__39883);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39883__$1,cljs.core.constant$keyword$1016);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39883__$1,cljs.core.constant$keyword$1103);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39883__$1,cljs.core.constant$keyword$1085);if(typeof clustermap.components.search.t39884 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t39884 = (function (map__39883,search_results,search_component,owner,path_fn,view,portfolio_companies,map__39880,constituencies,map__39881,map__39882,investor_companies,selection_value,comm,selection_type,p__39848,meta39885){
this.map__39883 = map__39883;
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.map__39880 = map__39880;
this.constituencies = constituencies;
this.map__39881 = map__39881;
this.map__39882 = map__39882;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.comm = comm;
this.selection_type = selection_type;
this.p__39848 = p__39848;
this.meta39885 = meta39885;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t39884.cljs$lang$type = true;
clustermap.components.search.t39884.cljs$lang$ctorStr = "clustermap.components.search/t39884";
clustermap.components.search.t39884.cljs$lang$ctorPrWriter = ((function (map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.search/t39884");
});})(map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t39884.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t39884.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "search-component", "ref": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1107,e.target.value], null));
});})(this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results))
}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1107,e.target.value], null));
});})(this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results))
}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1107,""], null));
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"search-field").value = "";
});})(this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3558__auto____$1))
{return or__3558__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3558__auto__ = cljs.core.constant$keyword$1104.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$1104.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1104,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1108,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$923,"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$935,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$936,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$923,"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_cons))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results){
return (function iter__39887(s__39888){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results){
return (function (){var s__39888__$1 = s__39888;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39888__$1);if(temp__4126__auto__)
{var s__39888__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39888__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__39888__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__39890 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__39889 = (0);while(true){
if((i__39889 < size__4282__auto__))
{var vec__39893 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__39889);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39893,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39893,(1),null);cljs.core.chunk_append(b__39890,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$977,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1023,self__.comm,cljs.core.constant$keyword$1012,self__.path_fn], null),cljs.core.constant$keyword$976,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$946,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$971,((function (i__39889,vec__39893,idx,con,c__4281__auto__,size__4282__auto__,b__39890,s__39888__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$912,cljs.core.constant$keyword$1017,cljs.core.array_seq([cljs.core.constant$keyword$914,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$915),cljs.core.constant$keyword$1109,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$915)))], 0));
});})(i__39889,vec__39893,idx,con,c__4281__auto__,size__4282__auto__,b__39890,s__39888__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$974,cljs.core.constant$keyword$1109], null)));
{
var G__39911 = (i__39889 + (1));
i__39889 = G__39911;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39890),iter__39887(cljs.core.chunk_rest(s__39888__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39890),null);
}
} else
{var vec__39894 = cljs.core.first(s__39888__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39894,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39894,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$977,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1023,self__.comm,cljs.core.constant$keyword$1012,self__.path_fn], null),cljs.core.constant$keyword$976,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$946,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$971,((function (vec__39894,idx,con,s__39888__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$912,cljs.core.constant$keyword$1017,cljs.core.array_seq([cljs.core.constant$keyword$914,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$915),cljs.core.constant$keyword$1109,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$915)))], 0));
});})(vec__39894,idx,con,s__39888__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$974,cljs.core.constant$keyword$1109], null)),iter__39887(cljs.core.rest(s__39888__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__(idx_cons);
})():null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$936,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$923,"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results){
return (function iter__39895(s__39896){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results){
return (function (){var s__39896__$1 = s__39896;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39896__$1);if(temp__4126__auto__)
{var s__39896__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39896__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__39896__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__39898 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__39897 = (0);while(true){
if((i__39897 < size__4282__auto__))
{var vec__39901 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__39897);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39901,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39901,(1),null);cljs.core.chunk_append(b__39898,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$977,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1023,self__.comm,cljs.core.constant$keyword$1012,self__.path_fn], null),cljs.core.constant$keyword$976,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$946,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$971,((function (i__39897,vec__39901,idx,pc,c__4281__auto__,size__4282__auto__,b__39898,s__39896__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$912,cljs.core.constant$keyword$1014,cljs.core.array_seq([cljs.core.constant$keyword$914,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1026),cljs.core.constant$keyword$1109,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1026)))], 0));
});})(i__39897,vec__39901,idx,pc,c__4281__auto__,size__4282__auto__,b__39898,s__39896__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$974,cljs.core.constant$keyword$1109], null)));
{
var G__39912 = (i__39897 + (1));
i__39897 = G__39912;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39898),iter__39895(cljs.core.chunk_rest(s__39896__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39898),null);
}
} else
{var vec__39902 = cljs.core.first(s__39896__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39902,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39902,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$977,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1023,self__.comm,cljs.core.constant$keyword$1012,self__.path_fn], null),cljs.core.constant$keyword$976,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$946,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$971,((function (vec__39902,idx,pc,s__39896__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$912,cljs.core.constant$keyword$1014,cljs.core.array_seq([cljs.core.constant$keyword$914,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1026),cljs.core.constant$keyword$1109,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1026)))], 0));
});})(vec__39902,idx,pc,s__39896__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$974,cljs.core.constant$keyword$1109], null)),iter__39895(cljs.core.rest(s__39896__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__(idx_pcs);
})():null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$936,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$923,"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results){
return (function iter__39903(s__39904){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results){
return (function (){var s__39904__$1 = s__39904;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39904__$1);if(temp__4126__auto__)
{var s__39904__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39904__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__39904__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__39906 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__39905 = (0);while(true){
if((i__39905 < size__4282__auto__))
{var vec__39909 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__39905);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39909,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39909,(1),null);cljs.core.chunk_append(b__39906,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$977,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1023,self__.comm,cljs.core.constant$keyword$1012,self__.path_fn], null),cljs.core.constant$keyword$976,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$946,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$971,((function (i__39905,vec__39909,idx,inv,c__4281__auto__,size__4282__auto__,b__39906,s__39904__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$912,cljs.core.constant$keyword$1015,cljs.core.array_seq([cljs.core.constant$keyword$914,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1029),cljs.core.constant$keyword$1109,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1029)))], 0));
});})(i__39905,vec__39909,idx,inv,c__4281__auto__,size__4282__auto__,b__39906,s__39904__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$974,cljs.core.constant$keyword$1109], null)));
{
var G__39913 = (i__39905 + (1));
i__39905 = G__39913;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39906),iter__39903(cljs.core.chunk_rest(s__39904__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39906),null);
}
} else
{var vec__39910 = cljs.core.first(s__39904__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39910,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39910,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$977,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1023,self__.comm,cljs.core.constant$keyword$1012,self__.path_fn], null),cljs.core.constant$keyword$976,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$946,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$971,((function (vec__39910,idx,inv,s__39904__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$912,cljs.core.constant$keyword$1015,cljs.core.array_seq([cljs.core.constant$keyword$914,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1029),cljs.core.constant$keyword$1109,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1029)))], 0));
});})(vec__39910,idx,inv,s__39904__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$974,cljs.core.constant$keyword$1109], null)),iter__39903(cljs.core.rest(s__39904__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__(idx_invs);
})():null)], null)], null);
})():null)));
});})(map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t39884.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results){
return (function (_39886){var self__ = this;
var _39886__$1 = this;return self__.meta39885;
});})(map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t39884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results){
return (function (_39886,meta39885__$1){var self__ = this;
var _39886__$1 = this;return (new clustermap.components.search.t39884(self__.map__39883,self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.portfolio_companies,self__.map__39880,self__.constituencies,self__.map__39881,self__.map__39882,self__.investor_companies,self__.selection_value,self__.comm,self__.selection_type,self__.p__39848,meta39885__$1));
});})(map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t39884 = ((function (map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results){
return (function __GT_t39884(map__39883__$2,search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,map__39880__$2,constituencies__$1,map__39881__$2,map__39882__$2,investor_companies__$1,selection_value__$1,comm__$1,selection_type__$1,p__39848__$1,meta39885){return (new clustermap.components.search.t39884(map__39883__$2,search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,map__39880__$2,constituencies__$1,map__39881__$2,map__39882__$2,investor_companies__$1,selection_value__$1,comm__$1,selection_type__$1,p__39848__$1,meta39885));
});})(map__39882,map__39882__$1,path_fn,comm,path_fn__$1,map__39883,map__39883__$1,investor_companies,portfolio_companies,constituencies,map__39880,map__39880__$1,map__39881,map__39881__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t39884(map__39883__$1,search_results,search_component,owner,path_fn__$1,view,portfolio_companies,map__39880__$1,constituencies,map__39881__$1,map__39882__$1,investor_companies,selection_value,comm,selection_type,p__39848,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$979,shared,cljs.core.constant$keyword$982,document.getElementById(elem_id)], null));
});
