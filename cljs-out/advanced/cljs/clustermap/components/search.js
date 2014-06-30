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
clustermap.components.search.search_result_link = (function search_result_link(p__35144,owner,p__35145){var map__35154 = p__35144;var map__35154__$1 = ((cljs.core.seq_QMARK_(map__35154))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35154):map__35154);var search_result = map__35154__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35154__$1,cljs.core.constant$keyword$614);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35154__$1,cljs.core.constant$keyword$645);var map__35155 = p__35145;var map__35155__$1 = ((cljs.core.seq_QMARK_(map__35155))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35155):map__35155);var opts = map__35155__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35155__$1,cljs.core.constant$keyword$698);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35155__$1,cljs.core.constant$keyword$709);if(typeof clustermap.components.search.t35156 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t35156 = (function (map__35155,owner,path_fn,search_result_link,p__35144,map__35154,name,comm,p__35145,search_result,type,opts,meta35157){
this.map__35155 = map__35155;
this.owner = owner;
this.path_fn = path_fn;
this.search_result_link = search_result_link;
this.p__35144 = p__35144;
this.map__35154 = map__35154;
this.name = name;
this.comm = comm;
this.p__35145 = p__35145;
this.search_result = search_result;
this.type = type;
this.opts = opts;
this.meta35157 = meta35157;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t35156.cljs$lang$type = true;
clustermap.components.search.t35156.cljs$lang$ctorStr = "clustermap.components.search/t35156";
clustermap.components.search.t35156.cljs$lang$ctorPrWriter = ((function (map__35154,map__35154__$1,search_result,type,name,map__35155,map__35155__$1,opts,path_fn,comm){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"clustermap.components.search/t35156");
});})(map__35154,map__35154__$1,search_result,type,name,map__35155,map__35155__$1,opts,path_fn,comm))
;
clustermap.components.search.t35156.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t35156.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__35154,map__35154__$1,search_result,type,name,map__35155,map__35155__$1,opts,path_fn,comm){
return (function (this$,p__35159){var self__ = this;
var map__35160 = p__35159;var map__35160__$1 = ((cljs.core.seq_QMARK_(map__35160))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35160):map__35160);var state = map__35160__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35160__$1,cljs.core.constant$keyword$650);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__35160,map__35160__$1,state,selected,map__35154,map__35154__$1,search_result,type,name,map__35155,map__35155__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__35161 = l;var G__35161__$1 = (((G__35161 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__35161));var G__35161__$2 = (((G__35161__$1 == null))?null:G__35161__$1.parents(".search-component"));var G__35161__$3 = (((G__35161__$2 == null))?null:G__35161__$2.toggle());return G__35161__$3;
});})(path,this$__$1,map__35160,map__35160__$1,state,selected,map__35154,map__35154__$1,search_result,type,name,map__35155,map__35155__$1,opts,path_fn,comm))
},sablono.interpreter.interpret(self__.name)));
});})(map__35154,map__35154__$1,search_result,type,name,map__35155,map__35155__$1,opts,path_fn,comm))
;
clustermap.components.search.t35156.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35154,map__35154__$1,search_result,type,name,map__35155,map__35155__$1,opts,path_fn,comm){
return (function (_35158){var self__ = this;
var _35158__$1 = this;return self__.meta35157;
});})(map__35154,map__35154__$1,search_result,type,name,map__35155,map__35155__$1,opts,path_fn,comm))
;
clustermap.components.search.t35156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35154,map__35154__$1,search_result,type,name,map__35155,map__35155__$1,opts,path_fn,comm){
return (function (_35158,meta35157__$1){var self__ = this;
var _35158__$1 = this;return (new clustermap.components.search.t35156(self__.map__35155,self__.owner,self__.path_fn,self__.search_result_link,self__.p__35144,self__.map__35154,self__.name,self__.comm,self__.p__35145,self__.search_result,self__.type,self__.opts,meta35157__$1));
});})(map__35154,map__35154__$1,search_result,type,name,map__35155,map__35155__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t35156 = ((function (map__35154,map__35154__$1,search_result,type,name,map__35155,map__35155__$1,opts,path_fn,comm){
return (function __GT_t35156(map__35155__$2,owner__$1,path_fn__$1,search_result_link__$1,p__35144__$1,map__35154__$2,name__$1,comm__$1,p__35145__$1,search_result__$1,type__$1,opts__$1,meta35157){return (new clustermap.components.search.t35156(map__35155__$2,owner__$1,path_fn__$1,search_result_link__$1,p__35144__$1,map__35154__$2,name__$1,comm__$1,p__35145__$1,search_result__$1,type__$1,opts__$1,meta35157));
});})(map__35154,map__35154__$1,search_result,type,name,map__35155,map__35155__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t35156(map__35155__$1,owner,path_fn,search_result_link,p__35144,map__35154__$1,name,comm,p__35145,search_result,type,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__35162,n){var map__35164 = p__35162;var map__35164__$1 = ((cljs.core.seq_QMARK_(map__35164))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35164):map__35164);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35164__$1,cljs.core.constant$keyword$702);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35164__$1,cljs.core.constant$keyword$788);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35164__$1,cljs.core.constant$keyword$770);var cons = (function (){var or__3541__auto__ = constituencies;if(cljs.core.truth_(or__3541__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__35171 = cljs.core._EQ__EQ_;var expr__35172 = e.keyCode;if(cljs.core.truth_((pred__35171.cljs$core$IFn$_invoke$arity$2 ? pred__35171.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__35172) : pred__35171.call(null,clustermap.components.search.ESCAPE_KEY,expr__35172))))
{var G__35174 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__35174__$1 = (((G__35174 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__35174));var G__35174__$2 = (((G__35174__$1 == null))?null:G__35174__$1.toggle());return G__35174__$2;
} else
{if(cljs.core.truth_((pred__35171.cljs$core$IFn$_invoke$arity$2 ? pred__35171.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__35172) : pred__35171.call(null,clustermap.components.search.ENTER_KEY,expr__35172))))
{var vec__35175 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3541__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$789);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35175,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35175,1,null);var G__35176_35177 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__35176_35178__$1 = (((G__35176_35177 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__35176_35177));var G__35176_35179__$2 = (((G__35176_35178__$1 == null))?null:G__35176_35178__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$652,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__35171.cljs$core$IFn$_invoke$arity$2 ? pred__35171.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__35172) : pred__35171.call(null,clustermap.components.search.UP_ARROW,expr__35172))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$789,((function (){var or__3541__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$789);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__35171.cljs$core$IFn$_invoke$arity$2 ? pred__35171.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__35172) : pred__35171.call(null,clustermap.components.search.DOWN_ARROW,expr__35172))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$789,((function (){var or__3541__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$789);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
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
clustermap.components.search.search_component = (function search_component(p__35180,owner){var map__35212 = p__35180;var map__35212__$1 = ((cljs.core.seq_QMARK_(map__35212))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35212):map__35212);var map__35213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35212__$1,cljs.core.constant$keyword$763);var map__35213__$1 = ((cljs.core.seq_QMARK_(map__35213))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35213):map__35213);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35213__$1,cljs.core.constant$keyword$614);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35213__$1,cljs.core.constant$keyword$585);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35212__$1,cljs.core.constant$keyword$790);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35212__$1,cljs.core.constant$keyword$791);var map__35214 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__35214__$1 = ((cljs.core.seq_QMARK_(map__35214))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35214):map__35214);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35214__$1,cljs.core.constant$keyword$698);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35214__$1,cljs.core.constant$keyword$709);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,view);var map__35215 = search_results;var map__35215__$1 = ((cljs.core.seq_QMARK_(map__35215))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35215):map__35215);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35215__$1,cljs.core.constant$keyword$702);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35215__$1,cljs.core.constant$keyword$788);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35215__$1,cljs.core.constant$keyword$770);if(typeof clustermap.components.search.t35216 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t35216 = (function (search_results,search_component,owner,path_fn,view,map__35215,portfolio_companies,constituencies,investor_companies,selection_value,map__35212,comm,map__35214,selection_type,map__35213,p__35180,meta35217){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.map__35215 = map__35215;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.map__35212 = map__35212;
this.comm = comm;
this.map__35214 = map__35214;
this.selection_type = selection_type;
this.map__35213 = map__35213;
this.p__35180 = p__35180;
this.meta35217 = meta35217;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t35216.cljs$lang$type = true;
clustermap.components.search.t35216.cljs$lang$ctorStr = "clustermap.components.search/t35216";
clustermap.components.search.t35216.cljs$lang$ctorPrWriter = ((function (map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"clustermap.components.search/t35216");
});})(map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t35216.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t35216.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$792,e.target.value], null));
});})(this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results))
}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$792,e.target.value], null));
});})(this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results))
}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$792,""], null));
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"search-field").value = "";
});})(this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3541__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3541__auto____$1))
{return or__3541__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3541__auto__ = cljs.core.constant$keyword$789.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$789.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$789,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$793,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$627,"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$639,cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$640,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$627,"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_cons))?(function (){var iter__4266__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results){
return (function iter__35219(s__35220){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results){
return (function (){var s__35220__$1 = s__35220;while(true){
var temp__4126__auto__ = cljs.core.seq(s__35220__$1);if(temp__4126__auto__)
{var s__35220__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__35220__$2))
{var c__4264__auto__ = cljs.core.chunk_first(s__35220__$2);var size__4265__auto__ = cljs.core.count(c__4264__auto__);var b__35222 = cljs.core.chunk_buffer(size__4265__auto__);if((function (){var i__35221 = 0;while(true){
if((i__35221 < size__4265__auto__))
{var vec__35225 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4264__auto__,i__35221);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35225,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35225,1,null);cljs.core.chunk_append(b__35222,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$691,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$709,self__.comm,cljs.core.constant$keyword$698,self__.path_fn], null),cljs.core.constant$keyword$690,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$650,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$685,((function (i__35221,vec__35225,idx,con,c__4264__auto__,size__4265__auto__,b__35222,s__35220__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$614,cljs.core.constant$keyword$703,cljs.core.array_seq([cljs.core.constant$keyword$616,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$617),cljs.core.constant$keyword$794,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$617)))], 0));
});})(i__35221,vec__35225,idx,con,c__4264__auto__,size__4265__auto__,b__35222,s__35220__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$688,cljs.core.constant$keyword$794], null)));
{
var G__35243 = (i__35221 + 1);
i__35221 = G__35243;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35222),iter__35219(cljs.core.chunk_rest(s__35220__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35222),null);
}
} else
{var vec__35226 = cljs.core.first(s__35220__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35226,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35226,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$691,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$709,self__.comm,cljs.core.constant$keyword$698,self__.path_fn], null),cljs.core.constant$keyword$690,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$650,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$685,((function (vec__35226,idx,con,s__35220__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$614,cljs.core.constant$keyword$703,cljs.core.array_seq([cljs.core.constant$keyword$616,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$617),cljs.core.constant$keyword$794,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$617)))], 0));
});})(vec__35226,idx,con,s__35220__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$688,cljs.core.constant$keyword$794], null)),iter__35219(cljs.core.rest(s__35220__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results))
;return iter__4266__auto__(idx_cons);
})():null),cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$640,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$627,"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?(function (){var iter__4266__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results){
return (function iter__35227(s__35228){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results){
return (function (){var s__35228__$1 = s__35228;while(true){
var temp__4126__auto__ = cljs.core.seq(s__35228__$1);if(temp__4126__auto__)
{var s__35228__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__35228__$2))
{var c__4264__auto__ = cljs.core.chunk_first(s__35228__$2);var size__4265__auto__ = cljs.core.count(c__4264__auto__);var b__35230 = cljs.core.chunk_buffer(size__4265__auto__);if((function (){var i__35229 = 0;while(true){
if((i__35229 < size__4265__auto__))
{var vec__35233 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4264__auto__,i__35229);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35233,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35233,1,null);cljs.core.chunk_append(b__35230,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$691,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$709,self__.comm,cljs.core.constant$keyword$698,self__.path_fn], null),cljs.core.constant$keyword$690,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$650,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$685,((function (i__35229,vec__35233,idx,pc,c__4264__auto__,size__4265__auto__,b__35230,s__35228__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$614,cljs.core.constant$keyword$700,cljs.core.array_seq([cljs.core.constant$keyword$616,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$712),cljs.core.constant$keyword$794,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$712)))], 0));
});})(i__35229,vec__35233,idx,pc,c__4264__auto__,size__4265__auto__,b__35230,s__35228__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$688,cljs.core.constant$keyword$794], null)));
{
var G__35244 = (i__35229 + 1);
i__35229 = G__35244;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35230),iter__35227(cljs.core.chunk_rest(s__35228__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35230),null);
}
} else
{var vec__35234 = cljs.core.first(s__35228__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35234,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35234,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$691,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$709,self__.comm,cljs.core.constant$keyword$698,self__.path_fn], null),cljs.core.constant$keyword$690,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$650,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$685,((function (vec__35234,idx,pc,s__35228__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$614,cljs.core.constant$keyword$700,cljs.core.array_seq([cljs.core.constant$keyword$616,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$712),cljs.core.constant$keyword$794,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$712)))], 0));
});})(vec__35234,idx,pc,s__35228__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$688,cljs.core.constant$keyword$794], null)),iter__35227(cljs.core.rest(s__35228__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results))
;return iter__4266__auto__(idx_pcs);
})():null),cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$640,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$627,"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?(function (){var iter__4266__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results){
return (function iter__35235(s__35236){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results){
return (function (){var s__35236__$1 = s__35236;while(true){
var temp__4126__auto__ = cljs.core.seq(s__35236__$1);if(temp__4126__auto__)
{var s__35236__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__35236__$2))
{var c__4264__auto__ = cljs.core.chunk_first(s__35236__$2);var size__4265__auto__ = cljs.core.count(c__4264__auto__);var b__35238 = cljs.core.chunk_buffer(size__4265__auto__);if((function (){var i__35237 = 0;while(true){
if((i__35237 < size__4265__auto__))
{var vec__35241 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4264__auto__,i__35237);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35241,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35241,1,null);cljs.core.chunk_append(b__35238,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$691,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$709,self__.comm,cljs.core.constant$keyword$698,self__.path_fn], null),cljs.core.constant$keyword$690,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$650,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$685,((function (i__35237,vec__35241,idx,inv,c__4264__auto__,size__4265__auto__,b__35238,s__35236__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$614,cljs.core.constant$keyword$701,cljs.core.array_seq([cljs.core.constant$keyword$616,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$715),cljs.core.constant$keyword$794,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$715)))], 0));
});})(i__35237,vec__35241,idx,inv,c__4264__auto__,size__4265__auto__,b__35238,s__35236__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$688,cljs.core.constant$keyword$794], null)));
{
var G__35245 = (i__35237 + 1);
i__35237 = G__35245;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35238),iter__35235(cljs.core.chunk_rest(s__35236__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35238),null);
}
} else
{var vec__35242 = cljs.core.first(s__35236__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35242,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35242,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$691,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$709,self__.comm,cljs.core.constant$keyword$698,self__.path_fn], null),cljs.core.constant$keyword$690,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$650,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$685,((function (vec__35242,idx,inv,s__35236__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$614,cljs.core.constant$keyword$701,cljs.core.array_seq([cljs.core.constant$keyword$616,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$715),cljs.core.constant$keyword$794,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$715)))], 0));
});})(vec__35242,idx,inv,s__35236__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$688,cljs.core.constant$keyword$794], null)),iter__35235(cljs.core.rest(s__35236__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results))
;return iter__4266__auto__(idx_invs);
})():null)], null)], null);
})():null)));
});})(map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t35216.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results){
return (function (_35218){var self__ = this;
var _35218__$1 = this;return self__.meta35217;
});})(map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t35216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results){
return (function (_35218,meta35217__$1){var self__ = this;
var _35218__$1 = this;return (new clustermap.components.search.t35216(self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.map__35215,self__.portfolio_companies,self__.constituencies,self__.investor_companies,self__.selection_value,self__.map__35212,self__.comm,self__.map__35214,self__.selection_type,self__.map__35213,self__.p__35180,meta35217__$1));
});})(map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t35216 = ((function (map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results){
return (function __GT_t35216(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,map__35215__$2,portfolio_companies__$1,constituencies__$1,investor_companies__$1,selection_value__$1,map__35212__$2,comm__$1,map__35214__$2,selection_type__$1,map__35213__$2,p__35180__$1,meta35217){return (new clustermap.components.search.t35216(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,map__35215__$2,portfolio_companies__$1,constituencies__$1,investor_companies__$1,selection_value__$1,map__35212__$2,comm__$1,map__35214__$2,selection_type__$1,map__35213__$2,p__35180__$1,meta35217));
});})(map__35214,map__35214__$1,path_fn,comm,path_fn__$1,map__35215,map__35215__$1,investor_companies,portfolio_companies,constituencies,map__35212,map__35212__$1,map__35213,map__35213__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t35216(search_results,search_component,owner,path_fn__$1,view,map__35215__$1,portfolio_companies,constituencies,investor_companies,selection_value,map__35212__$1,comm,map__35214__$1,selection_type,map__35213__$1,p__35180,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$693,shared,cljs.core.constant$keyword$696,document.getElementById(elem_id)], null));
});
