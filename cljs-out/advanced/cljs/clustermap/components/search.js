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
clustermap.components.search.search_result_link = (function search_result_link(p__35915,owner,p__35916){var map__35925 = p__35915;var map__35925__$1 = ((cljs.core.seq_QMARK_(map__35925))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35925):map__35925);var search_result = map__35925__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35925__$1,cljs.core.constant$keyword$772);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35925__$1,cljs.core.constant$keyword$803);var map__35926 = p__35916;var map__35926__$1 = ((cljs.core.seq_QMARK_(map__35926))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35926):map__35926);var opts = map__35926__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35926__$1,cljs.core.constant$keyword$857);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35926__$1,cljs.core.constant$keyword$867);if(typeof clustermap.components.search.t35927 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t35927 = (function (p__35916,owner,path_fn,map__35926,search_result_link,p__35915,name,map__35925,comm,search_result,type,opts,meta35928){
this.p__35916 = p__35916;
this.owner = owner;
this.path_fn = path_fn;
this.map__35926 = map__35926;
this.search_result_link = search_result_link;
this.p__35915 = p__35915;
this.name = name;
this.map__35925 = map__35925;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.opts = opts;
this.meta35928 = meta35928;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t35927.cljs$lang$type = true;
clustermap.components.search.t35927.cljs$lang$ctorStr = "clustermap.components.search/t35927";
clustermap.components.search.t35927.cljs$lang$ctorPrWriter = ((function (map__35925,map__35925__$1,search_result,type,name,map__35926,map__35926__$1,opts,path_fn,comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.search/t35927");
});})(map__35925,map__35925__$1,search_result,type,name,map__35926,map__35926__$1,opts,path_fn,comm))
;
clustermap.components.search.t35927.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t35927.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__35925,map__35925__$1,search_result,type,name,map__35926,map__35926__$1,opts,path_fn,comm){
return (function (this$,p__35930){var self__ = this;
var map__35931 = p__35930;var map__35931__$1 = ((cljs.core.seq_QMARK_(map__35931))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35931):map__35931);var state = map__35931__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35931__$1,cljs.core.constant$keyword$809);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__35931,map__35931__$1,state,selected,map__35925,map__35925__$1,search_result,type,name,map__35926,map__35926__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__35932 = l;var G__35932__$1 = (((G__35932 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__35932));var G__35932__$2 = (((G__35932__$1 == null))?null:G__35932__$1.parents(".search-component"));var G__35932__$3 = (((G__35932__$2 == null))?null:G__35932__$2.toggle());return G__35932__$3;
});})(path,this$__$1,map__35931,map__35931__$1,state,selected,map__35925,map__35925__$1,search_result,type,name,map__35926,map__35926__$1,opts,path_fn,comm))
},sablono.interpreter.interpret(self__.name)));
});})(map__35925,map__35925__$1,search_result,type,name,map__35926,map__35926__$1,opts,path_fn,comm))
;
clustermap.components.search.t35927.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35925,map__35925__$1,search_result,type,name,map__35926,map__35926__$1,opts,path_fn,comm){
return (function (_35929){var self__ = this;
var _35929__$1 = this;return self__.meta35928;
});})(map__35925,map__35925__$1,search_result,type,name,map__35926,map__35926__$1,opts,path_fn,comm))
;
clustermap.components.search.t35927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35925,map__35925__$1,search_result,type,name,map__35926,map__35926__$1,opts,path_fn,comm){
return (function (_35929,meta35928__$1){var self__ = this;
var _35929__$1 = this;return (new clustermap.components.search.t35927(self__.p__35916,self__.owner,self__.path_fn,self__.map__35926,self__.search_result_link,self__.p__35915,self__.name,self__.map__35925,self__.comm,self__.search_result,self__.type,self__.opts,meta35928__$1));
});})(map__35925,map__35925__$1,search_result,type,name,map__35926,map__35926__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t35927 = ((function (map__35925,map__35925__$1,search_result,type,name,map__35926,map__35926__$1,opts,path_fn,comm){
return (function __GT_t35927(p__35916__$1,owner__$1,path_fn__$1,map__35926__$2,search_result_link__$1,p__35915__$1,name__$1,map__35925__$2,comm__$1,search_result__$1,type__$1,opts__$1,meta35928){return (new clustermap.components.search.t35927(p__35916__$1,owner__$1,path_fn__$1,map__35926__$2,search_result_link__$1,p__35915__$1,name__$1,map__35925__$2,comm__$1,search_result__$1,type__$1,opts__$1,meta35928));
});})(map__35925,map__35925__$1,search_result,type,name,map__35926,map__35926__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t35927(p__35916,owner,path_fn,map__35926__$1,search_result_link,p__35915,name,map__35925__$1,comm,search_result,type,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__35933,n){var map__35935 = p__35933;var map__35935__$1 = ((cljs.core.seq_QMARK_(map__35935))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35935):map__35935);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35935__$1,cljs.core.constant$keyword$861);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35935__$1,cljs.core.constant$keyword$946);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35935__$1,cljs.core.constant$keyword$928);var cons = (function (){var or__3543__auto__ = constituencies;if(cljs.core.truth_(or__3543__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$862,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$859,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$860,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__35942 = cljs.core._EQ__EQ_;var expr__35943 = e.keyCode;if(cljs.core.truth_((pred__35942.cljs$core$IFn$_invoke$arity$2 ? pred__35942.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__35943) : pred__35942.call(null,clustermap.components.search.ESCAPE_KEY,expr__35943))))
{var G__35945 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__35945__$1 = (((G__35945 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__35945));var G__35945__$2 = (((G__35945__$1 == null))?null:G__35945__$1.toggle());return G__35945__$2;
} else
{if(cljs.core.truth_((pred__35942.cljs$core$IFn$_invoke$arity$2 ? pred__35942.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__35943) : pred__35942.call(null,clustermap.components.search.ENTER_KEY,expr__35943))))
{var vec__35946 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3543__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$947);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35946,(0),null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35946,(1),null);var G__35947_35948 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__35947_35949__$1 = (((G__35947_35948 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__35947_35948));var G__35947_35950__$2 = (((G__35947_35949__$1 == null))?null:G__35947_35949__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$811,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__35942.cljs$core$IFn$_invoke$arity$2 ? pred__35942.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__35943) : pred__35942.call(null,clustermap.components.search.UP_ARROW,expr__35943))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$947,((function (){var or__3543__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$947);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_((pred__35942.cljs$core$IFn$_invoke$arity$2 ? pred__35942.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__35943) : pred__35942.call(null,clustermap.components.search.DOWN_ARROW,expr__35943))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$947,((function (){var or__3543__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$947);if(cljs.core.truth_(or__3543__auto__))
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
clustermap.components.search.search_component = (function search_component(p__35951,owner){var map__35983 = p__35951;var map__35983__$1 = ((cljs.core.seq_QMARK_(map__35983))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35983):map__35983);var map__35984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35983__$1,cljs.core.constant$keyword$921);var map__35984__$1 = ((cljs.core.seq_QMARK_(map__35984))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35984):map__35984);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35984__$1,cljs.core.constant$keyword$772);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35984__$1,cljs.core.constant$keyword$804);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35983__$1,cljs.core.constant$keyword$948);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35983__$1,cljs.core.constant$keyword$949);var map__35985 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__35985__$1 = ((cljs.core.seq_QMARK_(map__35985))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35985):map__35985);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35985__$1,cljs.core.constant$keyword$857);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35985__$1,cljs.core.constant$keyword$867);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,view);var map__35986 = search_results;var map__35986__$1 = ((cljs.core.seq_QMARK_(map__35986))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35986):map__35986);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35986__$1,cljs.core.constant$keyword$861);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35986__$1,cljs.core.constant$keyword$946);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35986__$1,cljs.core.constant$keyword$928);if(typeof clustermap.components.search.t35987 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t35987 = (function (search_results,search_component,owner,path_fn,view,portfolio_companies,p__35951,constituencies,investor_companies,map__35985,selection_value,comm,map__35983,map__35986,selection_type,map__35984,meta35988){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.p__35951 = p__35951;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.map__35985 = map__35985;
this.selection_value = selection_value;
this.comm = comm;
this.map__35983 = map__35983;
this.map__35986 = map__35986;
this.selection_type = selection_type;
this.map__35984 = map__35984;
this.meta35988 = meta35988;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t35987.cljs$lang$type = true;
clustermap.components.search.t35987.cljs$lang$ctorStr = "clustermap.components.search/t35987";
clustermap.components.search.t35987.cljs$lang$ctorPrWriter = ((function (map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.search/t35987");
});})(map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t35987.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t35987.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$950,e.target.value], null));
});})(this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results))
}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$950,e.target.value], null));
});})(this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results))
}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$950,""], null));
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"search-field").value = "";
});})(this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3543__auto____$1))
{return or__3543__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3543__auto__ = cljs.core.constant$keyword$947.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$947.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$947,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$951,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$785,"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$797,cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$798,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$785,"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_cons))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results){
return (function iter__35990(s__35991){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results){
return (function (){var s__35991__$1 = s__35991;while(true){
var temp__4126__auto__ = cljs.core.seq(s__35991__$1);if(temp__4126__auto__)
{var s__35991__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__35991__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__35991__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__35993 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__35992 = (0);while(true){
if((i__35992 < size__4267__auto__))
{var vec__35996 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__35992);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35996,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35996,(1),null);cljs.core.chunk_append(b__35993,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$850,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$867,self__.comm,cljs.core.constant$keyword$857,self__.path_fn], null),cljs.core.constant$keyword$849,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$809,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$844,((function (i__35992,vec__35996,idx,con,c__4266__auto__,size__4267__auto__,b__35993,s__35991__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$772,cljs.core.constant$keyword$862,cljs.core.array_seq([cljs.core.constant$keyword$774,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$775),cljs.core.constant$keyword$952,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$775)))], 0));
});})(i__35992,vec__35996,idx,con,c__4266__auto__,size__4267__auto__,b__35993,s__35991__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$847,cljs.core.constant$keyword$952], null)));
{
var G__36014 = (i__35992 + (1));
i__35992 = G__36014;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35993),iter__35990(cljs.core.chunk_rest(s__35991__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35993),null);
}
} else
{var vec__35997 = cljs.core.first(s__35991__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35997,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35997,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$850,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$867,self__.comm,cljs.core.constant$keyword$857,self__.path_fn], null),cljs.core.constant$keyword$849,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$809,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$844,((function (vec__35997,idx,con,s__35991__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$772,cljs.core.constant$keyword$862,cljs.core.array_seq([cljs.core.constant$keyword$774,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$775),cljs.core.constant$keyword$952,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$775)))], 0));
});})(vec__35997,idx,con,s__35991__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$847,cljs.core.constant$keyword$952], null)),iter__35990(cljs.core.rest(s__35991__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__(idx_cons);
})():null),cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$798,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$785,"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results){
return (function iter__35998(s__35999){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results){
return (function (){var s__35999__$1 = s__35999;while(true){
var temp__4126__auto__ = cljs.core.seq(s__35999__$1);if(temp__4126__auto__)
{var s__35999__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__35999__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__35999__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__36001 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__36000 = (0);while(true){
if((i__36000 < size__4267__auto__))
{var vec__36004 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__36000);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36004,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36004,(1),null);cljs.core.chunk_append(b__36001,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$850,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$867,self__.comm,cljs.core.constant$keyword$857,self__.path_fn], null),cljs.core.constant$keyword$849,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$809,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$844,((function (i__36000,vec__36004,idx,pc,c__4266__auto__,size__4267__auto__,b__36001,s__35999__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$772,cljs.core.constant$keyword$859,cljs.core.array_seq([cljs.core.constant$keyword$774,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$870),cljs.core.constant$keyword$952,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$870)))], 0));
});})(i__36000,vec__36004,idx,pc,c__4266__auto__,size__4267__auto__,b__36001,s__35999__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$847,cljs.core.constant$keyword$952], null)));
{
var G__36015 = (i__36000 + (1));
i__36000 = G__36015;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__36001),iter__35998(cljs.core.chunk_rest(s__35999__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__36001),null);
}
} else
{var vec__36005 = cljs.core.first(s__35999__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36005,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36005,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$850,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$867,self__.comm,cljs.core.constant$keyword$857,self__.path_fn], null),cljs.core.constant$keyword$849,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$809,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$844,((function (vec__36005,idx,pc,s__35999__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$772,cljs.core.constant$keyword$859,cljs.core.array_seq([cljs.core.constant$keyword$774,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$870),cljs.core.constant$keyword$952,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$870)))], 0));
});})(vec__36005,idx,pc,s__35999__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$847,cljs.core.constant$keyword$952], null)),iter__35998(cljs.core.rest(s__35999__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__(idx_pcs);
})():null),cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$798,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$785,"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results){
return (function iter__36006(s__36007){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results){
return (function (){var s__36007__$1 = s__36007;while(true){
var temp__4126__auto__ = cljs.core.seq(s__36007__$1);if(temp__4126__auto__)
{var s__36007__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__36007__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__36007__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__36009 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__36008 = (0);while(true){
if((i__36008 < size__4267__auto__))
{var vec__36012 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__36008);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36012,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36012,(1),null);cljs.core.chunk_append(b__36009,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$850,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$867,self__.comm,cljs.core.constant$keyword$857,self__.path_fn], null),cljs.core.constant$keyword$849,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$809,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$844,((function (i__36008,vec__36012,idx,inv,c__4266__auto__,size__4267__auto__,b__36009,s__36007__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$772,cljs.core.constant$keyword$860,cljs.core.array_seq([cljs.core.constant$keyword$774,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$873),cljs.core.constant$keyword$952,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$873)))], 0));
});})(i__36008,vec__36012,idx,inv,c__4266__auto__,size__4267__auto__,b__36009,s__36007__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$847,cljs.core.constant$keyword$952], null)));
{
var G__36016 = (i__36008 + (1));
i__36008 = G__36016;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__36009),iter__36006(cljs.core.chunk_rest(s__36007__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__36009),null);
}
} else
{var vec__36013 = cljs.core.first(s__36007__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36013,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36013,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$850,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$867,self__.comm,cljs.core.constant$keyword$857,self__.path_fn], null),cljs.core.constant$keyword$849,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$809,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$844,((function (vec__36013,idx,inv,s__36007__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$772,cljs.core.constant$keyword$860,cljs.core.array_seq([cljs.core.constant$keyword$774,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$873),cljs.core.constant$keyword$952,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$873)))], 0));
});})(vec__36013,idx,inv,s__36007__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$847,cljs.core.constant$keyword$952], null)),iter__36006(cljs.core.rest(s__36007__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__(idx_invs);
})():null)], null)], null);
})():null)));
});})(map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t35987.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results){
return (function (_35989){var self__ = this;
var _35989__$1 = this;return self__.meta35988;
});})(map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t35987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results){
return (function (_35989,meta35988__$1){var self__ = this;
var _35989__$1 = this;return (new clustermap.components.search.t35987(self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.portfolio_companies,self__.p__35951,self__.constituencies,self__.investor_companies,self__.map__35985,self__.selection_value,self__.comm,self__.map__35983,self__.map__35986,self__.selection_type,self__.map__35984,meta35988__$1));
});})(map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t35987 = ((function (map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results){
return (function __GT_t35987(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,p__35951__$1,constituencies__$1,investor_companies__$1,map__35985__$2,selection_value__$1,comm__$1,map__35983__$2,map__35986__$2,selection_type__$1,map__35984__$2,meta35988){return (new clustermap.components.search.t35987(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,p__35951__$1,constituencies__$1,investor_companies__$1,map__35985__$2,selection_value__$1,comm__$1,map__35983__$2,map__35986__$2,selection_type__$1,map__35984__$2,meta35988));
});})(map__35985,map__35985__$1,path_fn,comm,path_fn__$1,map__35986,map__35986__$1,investor_companies,portfolio_companies,constituencies,map__35983,map__35983__$1,map__35984,map__35984__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t35987(search_results,search_component,owner,path_fn__$1,view,portfolio_companies,p__35951,constituencies,investor_companies,map__35985__$1,selection_value,comm,map__35983__$1,map__35986__$1,selection_type,map__35984__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$852,shared,cljs.core.constant$keyword$855,document.getElementById(elem_id)], null));
});
