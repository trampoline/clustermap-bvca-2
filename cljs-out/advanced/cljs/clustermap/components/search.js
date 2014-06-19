// Compiled by ClojureScript 0.0-2227
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
clustermap.components.search.ESCAPE_KEY = 27;
clustermap.components.search.ENTER_KEY = 13;
clustermap.components.search.LEFT_ARROW = 37;
clustermap.components.search.UP_ARROW = 38;
clustermap.components.search.RIGHT_ARROW = 39;
clustermap.components.search.DOWN_ARROW = 40;
clustermap.components.search.search_result_link = (function search_result_link(p__35142,owner,p__35143){var map__35152 = p__35142;var map__35152__$1 = ((cljs.core.seq_QMARK_(map__35152))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35152):map__35152);var search_result = map__35152__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35152__$1,cljs.core.constant$keyword$614);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35152__$1,cljs.core.constant$keyword$645);var map__35153 = p__35143;var map__35153__$1 = ((cljs.core.seq_QMARK_(map__35153))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35153):map__35153);var opts = map__35153__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35153__$1,cljs.core.constant$keyword$698);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35153__$1,cljs.core.constant$keyword$709);if(typeof clustermap.components.search.t35154 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t35154 = (function (owner,path_fn,search_result_link,p__35142,name,comm,search_result,type,p__35143,opts,map__35152,map__35153,meta35155){
this.owner = owner;
this.path_fn = path_fn;
this.search_result_link = search_result_link;
this.p__35142 = p__35142;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.p__35143 = p__35143;
this.opts = opts;
this.map__35152 = map__35152;
this.map__35153 = map__35153;
this.meta35155 = meta35155;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t35154.cljs$lang$type = true;
clustermap.components.search.t35154.cljs$lang$ctorStr = "clustermap.components.search/t35154";
clustermap.components.search.t35154.cljs$lang$ctorPrWriter = ((function (map__35152,map__35152__$1,search_result,type,name,map__35153,map__35153__$1,opts,path_fn,comm){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"clustermap.components.search/t35154");
});})(map__35152,map__35152__$1,search_result,type,name,map__35153,map__35153__$1,opts,path_fn,comm))
;
clustermap.components.search.t35154.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t35154.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__35152,map__35152__$1,search_result,type,name,map__35153,map__35153__$1,opts,path_fn,comm){
return (function (this$,p__35157){var self__ = this;
var map__35158 = p__35157;var map__35158__$1 = ((cljs.core.seq_QMARK_(map__35158))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35158):map__35158);var state = map__35158__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35158__$1,cljs.core.constant$keyword$650);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__35158,map__35158__$1,state,selected,map__35152,map__35152__$1,search_result,type,name,map__35153,map__35153__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__35159 = l;var G__35159__$1 = (((G__35159 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__35159));var G__35159__$2 = (((G__35159__$1 == null))?null:G__35159__$1.parents(".search-component"));var G__35159__$3 = (((G__35159__$2 == null))?null:G__35159__$2.toggle());return G__35159__$3;
});})(path,this$__$1,map__35158,map__35158__$1,state,selected,map__35152,map__35152__$1,search_result,type,name,map__35153,map__35153__$1,opts,path_fn,comm))
},sablono.interpreter.interpret(self__.name)));
});})(map__35152,map__35152__$1,search_result,type,name,map__35153,map__35153__$1,opts,path_fn,comm))
;
clustermap.components.search.t35154.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35152,map__35152__$1,search_result,type,name,map__35153,map__35153__$1,opts,path_fn,comm){
return (function (_35156){var self__ = this;
var _35156__$1 = this;return self__.meta35155;
});})(map__35152,map__35152__$1,search_result,type,name,map__35153,map__35153__$1,opts,path_fn,comm))
;
clustermap.components.search.t35154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35152,map__35152__$1,search_result,type,name,map__35153,map__35153__$1,opts,path_fn,comm){
return (function (_35156,meta35155__$1){var self__ = this;
var _35156__$1 = this;return (new clustermap.components.search.t35154(self__.owner,self__.path_fn,self__.search_result_link,self__.p__35142,self__.name,self__.comm,self__.search_result,self__.type,self__.p__35143,self__.opts,self__.map__35152,self__.map__35153,meta35155__$1));
});})(map__35152,map__35152__$1,search_result,type,name,map__35153,map__35153__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t35154 = ((function (map__35152,map__35152__$1,search_result,type,name,map__35153,map__35153__$1,opts,path_fn,comm){
return (function __GT_t35154(owner__$1,path_fn__$1,search_result_link__$1,p__35142__$1,name__$1,comm__$1,search_result__$1,type__$1,p__35143__$1,opts__$1,map__35152__$2,map__35153__$2,meta35155){return (new clustermap.components.search.t35154(owner__$1,path_fn__$1,search_result_link__$1,p__35142__$1,name__$1,comm__$1,search_result__$1,type__$1,p__35143__$1,opts__$1,map__35152__$2,map__35153__$2,meta35155));
});})(map__35152,map__35152__$1,search_result,type,name,map__35153,map__35153__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t35154(owner,path_fn,search_result_link,p__35142,name,comm,search_result,type,p__35143,opts,map__35152__$1,map__35153__$1,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__35160,n){var map__35162 = p__35160;var map__35162__$1 = ((cljs.core.seq_QMARK_(map__35162))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35162):map__35162);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35162__$1,cljs.core.constant$keyword$702);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35162__$1,cljs.core.constant$keyword$788);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35162__$1,cljs.core.constant$keyword$770);var cons = (function (){var or__3539__auto__ = constituencies;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var pcs = (function (){var or__3539__auto__ = portfolio_companies;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var invs = (function (){var or__3539__auto__ = investor_companies;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();if((n < cljs.core.count(cons)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$703,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$700,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$701,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__35169 = cljs.core._EQ__EQ_;var expr__35170 = e.keyCode;if(cljs.core.truth_((pred__35169.cljs$core$IFn$_invoke$arity$2 ? pred__35169.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__35170) : pred__35169.call(null,clustermap.components.search.ESCAPE_KEY,expr__35170))))
{var G__35172 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__35172__$1 = (((G__35172 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__35172));var G__35172__$2 = (((G__35172__$1 == null))?null:G__35172__$1.toggle());return G__35172__$2;
} else
{if(cljs.core.truth_((pred__35169.cljs$core$IFn$_invoke$arity$2 ? pred__35169.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__35170) : pred__35169.call(null,clustermap.components.search.ENTER_KEY,expr__35170))))
{var vec__35173 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3539__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$789);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35173,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35173,1,null);var G__35174_35175 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__35174_35176__$1 = (((G__35174_35175 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__35174_35175));var G__35174_35177__$2 = (((G__35174_35176__$1 == null))?null:G__35174_35176__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$652,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__35169.cljs$core$IFn$_invoke$arity$2 ? pred__35169.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__35170) : pred__35169.call(null,clustermap.components.search.UP_ARROW,expr__35170))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$789,((function (){var or__3539__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$789);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__35169.cljs$core$IFn$_invoke$arity$2 ? pred__35169.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__35170) : pred__35169.call(null,clustermap.components.search.DOWN_ARROW,expr__35170))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$789,((function (){var or__3539__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$789);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return 0;
}
})() + 1));
} else
{return null;
}
}
}
}
});
clustermap.components.search.search_component = (function search_component(p__35178,owner){var map__35210 = p__35178;var map__35210__$1 = ((cljs.core.seq_QMARK_(map__35210))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35210):map__35210);var map__35211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35210__$1,cljs.core.constant$keyword$763);var map__35211__$1 = ((cljs.core.seq_QMARK_(map__35211))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35211):map__35211);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35211__$1,cljs.core.constant$keyword$614);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35211__$1,cljs.core.constant$keyword$585);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35210__$1,cljs.core.constant$keyword$790);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35210__$1,cljs.core.constant$keyword$791);var map__35212 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__35212__$1 = ((cljs.core.seq_QMARK_(map__35212))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35212):map__35212);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35212__$1,cljs.core.constant$keyword$698);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35212__$1,cljs.core.constant$keyword$709);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,view);var map__35213 = search_results;var map__35213__$1 = ((cljs.core.seq_QMARK_(map__35213))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35213):map__35213);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35213__$1,cljs.core.constant$keyword$702);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35213__$1,cljs.core.constant$keyword$788);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35213__$1,cljs.core.constant$keyword$770);if(typeof clustermap.components.search.t35214 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t35214 = (function (search_results,search_component,owner,path_fn,view,portfolio_companies,map__35211,map__35210,constituencies,investor_companies,selection_value,map__35212,comm,selection_type,map__35213,p__35178,meta35215){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.map__35211 = map__35211;
this.map__35210 = map__35210;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.map__35212 = map__35212;
this.comm = comm;
this.selection_type = selection_type;
this.map__35213 = map__35213;
this.p__35178 = p__35178;
this.meta35215 = meta35215;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t35214.cljs$lang$type = true;
clustermap.components.search.t35214.cljs$lang$ctorStr = "clustermap.components.search/t35214";
clustermap.components.search.t35214.cljs$lang$ctorPrWriter = ((function (map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"clustermap.components.search/t35214");
});})(map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t35214.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t35214.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$792,e.target.value], null));
});})(this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results))
}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$792,e.target.value], null));
});})(this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results))
}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$792,""], null));
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"search-field").value = "";
});})(this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3539__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3539__auto____$1))
{return or__3539__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3539__auto__ = cljs.core.constant$keyword$789.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$789.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$789,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$793,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$627,"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$639,cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$640,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$627,"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_cons))?(function (){var iter__4264__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results){
return (function iter__35217(s__35218){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results){
return (function (){var s__35218__$1 = s__35218;while(true){
var temp__4126__auto__ = cljs.core.seq(s__35218__$1);if(temp__4126__auto__)
{var s__35218__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__35218__$2))
{var c__4262__auto__ = cljs.core.chunk_first(s__35218__$2);var size__4263__auto__ = cljs.core.count(c__4262__auto__);var b__35220 = cljs.core.chunk_buffer(size__4263__auto__);if((function (){var i__35219 = 0;while(true){
if((i__35219 < size__4263__auto__))
{var vec__35223 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4262__auto__,i__35219);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35223,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35223,1,null);cljs.core.chunk_append(b__35220,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$691,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$709,self__.comm,cljs.core.constant$keyword$698,self__.path_fn], null),cljs.core.constant$keyword$690,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$650,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$685,((function (i__35219,vec__35223,idx,con,c__4262__auto__,size__4263__auto__,b__35220,s__35218__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$614,cljs.core.constant$keyword$703,cljs.core.array_seq([cljs.core.constant$keyword$616,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$617),cljs.core.constant$keyword$794,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$617)))], 0));
});})(i__35219,vec__35223,idx,con,c__4262__auto__,size__4263__auto__,b__35220,s__35218__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$688,cljs.core.constant$keyword$794], null)));
{
var G__35241 = (i__35219 + 1);
i__35219 = G__35241;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35220),iter__35217(cljs.core.chunk_rest(s__35218__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35220),null);
}
} else
{var vec__35224 = cljs.core.first(s__35218__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35224,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35224,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$691,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$709,self__.comm,cljs.core.constant$keyword$698,self__.path_fn], null),cljs.core.constant$keyword$690,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$650,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$685,((function (vec__35224,idx,con,s__35218__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$614,cljs.core.constant$keyword$703,cljs.core.array_seq([cljs.core.constant$keyword$616,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$617),cljs.core.constant$keyword$794,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$617)))], 0));
});})(vec__35224,idx,con,s__35218__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$688,cljs.core.constant$keyword$794], null)),iter__35217(cljs.core.rest(s__35218__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results))
;return iter__4264__auto__(idx_cons);
})():null),cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$640,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$627,"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?(function (){var iter__4264__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results){
return (function iter__35225(s__35226){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results){
return (function (){var s__35226__$1 = s__35226;while(true){
var temp__4126__auto__ = cljs.core.seq(s__35226__$1);if(temp__4126__auto__)
{var s__35226__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__35226__$2))
{var c__4262__auto__ = cljs.core.chunk_first(s__35226__$2);var size__4263__auto__ = cljs.core.count(c__4262__auto__);var b__35228 = cljs.core.chunk_buffer(size__4263__auto__);if((function (){var i__35227 = 0;while(true){
if((i__35227 < size__4263__auto__))
{var vec__35231 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4262__auto__,i__35227);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35231,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35231,1,null);cljs.core.chunk_append(b__35228,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$691,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$709,self__.comm,cljs.core.constant$keyword$698,self__.path_fn], null),cljs.core.constant$keyword$690,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$650,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$685,((function (i__35227,vec__35231,idx,pc,c__4262__auto__,size__4263__auto__,b__35228,s__35226__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$614,cljs.core.constant$keyword$700,cljs.core.array_seq([cljs.core.constant$keyword$616,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$712),cljs.core.constant$keyword$794,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$712)))], 0));
});})(i__35227,vec__35231,idx,pc,c__4262__auto__,size__4263__auto__,b__35228,s__35226__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$688,cljs.core.constant$keyword$794], null)));
{
var G__35242 = (i__35227 + 1);
i__35227 = G__35242;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35228),iter__35225(cljs.core.chunk_rest(s__35226__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35228),null);
}
} else
{var vec__35232 = cljs.core.first(s__35226__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35232,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35232,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$691,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$709,self__.comm,cljs.core.constant$keyword$698,self__.path_fn], null),cljs.core.constant$keyword$690,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$650,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$685,((function (vec__35232,idx,pc,s__35226__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$614,cljs.core.constant$keyword$700,cljs.core.array_seq([cljs.core.constant$keyword$616,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$712),cljs.core.constant$keyword$794,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$712)))], 0));
});})(vec__35232,idx,pc,s__35226__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$688,cljs.core.constant$keyword$794], null)),iter__35225(cljs.core.rest(s__35226__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results))
;return iter__4264__auto__(idx_pcs);
})():null),cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$640,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$627,"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?(function (){var iter__4264__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results){
return (function iter__35233(s__35234){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results){
return (function (){var s__35234__$1 = s__35234;while(true){
var temp__4126__auto__ = cljs.core.seq(s__35234__$1);if(temp__4126__auto__)
{var s__35234__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__35234__$2))
{var c__4262__auto__ = cljs.core.chunk_first(s__35234__$2);var size__4263__auto__ = cljs.core.count(c__4262__auto__);var b__35236 = cljs.core.chunk_buffer(size__4263__auto__);if((function (){var i__35235 = 0;while(true){
if((i__35235 < size__4263__auto__))
{var vec__35239 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4262__auto__,i__35235);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35239,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35239,1,null);cljs.core.chunk_append(b__35236,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$691,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$709,self__.comm,cljs.core.constant$keyword$698,self__.path_fn], null),cljs.core.constant$keyword$690,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$650,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$685,((function (i__35235,vec__35239,idx,inv,c__4262__auto__,size__4263__auto__,b__35236,s__35234__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$614,cljs.core.constant$keyword$701,cljs.core.array_seq([cljs.core.constant$keyword$616,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$715),cljs.core.constant$keyword$794,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$715)))], 0));
});})(i__35235,vec__35239,idx,inv,c__4262__auto__,size__4263__auto__,b__35236,s__35234__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$688,cljs.core.constant$keyword$794], null)));
{
var G__35243 = (i__35235 + 1);
i__35235 = G__35243;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35236),iter__35233(cljs.core.chunk_rest(s__35234__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35236),null);
}
} else
{var vec__35240 = cljs.core.first(s__35234__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35240,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35240,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$691,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$709,self__.comm,cljs.core.constant$keyword$698,self__.path_fn], null),cljs.core.constant$keyword$690,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$650,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$685,((function (vec__35240,idx,inv,s__35234__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$614,cljs.core.constant$keyword$701,cljs.core.array_seq([cljs.core.constant$keyword$616,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$715),cljs.core.constant$keyword$794,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$715)))], 0));
});})(vec__35240,idx,inv,s__35234__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$688,cljs.core.constant$keyword$794], null)),iter__35233(cljs.core.rest(s__35234__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results))
;return iter__4264__auto__(idx_invs);
})():null)], null)], null);
})():null)));
});})(map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t35214.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results){
return (function (_35216){var self__ = this;
var _35216__$1 = this;return self__.meta35215;
});})(map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t35214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results){
return (function (_35216,meta35215__$1){var self__ = this;
var _35216__$1 = this;return (new clustermap.components.search.t35214(self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.portfolio_companies,self__.map__35211,self__.map__35210,self__.constituencies,self__.investor_companies,self__.selection_value,self__.map__35212,self__.comm,self__.selection_type,self__.map__35213,self__.p__35178,meta35215__$1));
});})(map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t35214 = ((function (map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results){
return (function __GT_t35214(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,map__35211__$2,map__35210__$2,constituencies__$1,investor_companies__$1,selection_value__$1,map__35212__$2,comm__$1,selection_type__$1,map__35213__$2,p__35178__$1,meta35215){return (new clustermap.components.search.t35214(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,map__35211__$2,map__35210__$2,constituencies__$1,investor_companies__$1,selection_value__$1,map__35212__$2,comm__$1,selection_type__$1,map__35213__$2,p__35178__$1,meta35215));
});})(map__35212,map__35212__$1,path_fn,comm,path_fn__$1,map__35213,map__35213__$1,investor_companies,portfolio_companies,constituencies,map__35210,map__35210__$1,map__35211,map__35211__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t35214(search_results,search_component,owner,path_fn__$1,view,portfolio_companies,map__35211__$1,map__35210__$1,constituencies,investor_companies,selection_value,map__35212__$1,comm,selection_type,map__35213__$1,p__35178,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$693,shared,cljs.core.constant$keyword$696,document.getElementById(elem_id)], null));
});
