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
clustermap.components.search.search_result_link = (function search_result_link(p__35166,owner,p__35167){var map__35176 = p__35166;var map__35176__$1 = ((cljs.core.seq_QMARK_(map__35176))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35176):map__35176);var search_result = map__35176__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35176__$1,cljs.core.constant$keyword$612);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35176__$1,cljs.core.constant$keyword$643);var map__35177 = p__35167;var map__35177__$1 = ((cljs.core.seq_QMARK_(map__35177))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35177):map__35177);var opts = map__35177__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35177__$1,cljs.core.constant$keyword$696);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35177__$1,cljs.core.constant$keyword$707);if(typeof clustermap.components.search.t35178 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t35178 = (function (owner,path_fn,p__35167,search_result_link,name,p__35166,comm,search_result,map__35177,type,map__35176,opts,meta35179){
this.owner = owner;
this.path_fn = path_fn;
this.p__35167 = p__35167;
this.search_result_link = search_result_link;
this.name = name;
this.p__35166 = p__35166;
this.comm = comm;
this.search_result = search_result;
this.map__35177 = map__35177;
this.type = type;
this.map__35176 = map__35176;
this.opts = opts;
this.meta35179 = meta35179;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t35178.cljs$lang$type = true;
clustermap.components.search.t35178.cljs$lang$ctorStr = "clustermap.components.search/t35178";
clustermap.components.search.t35178.cljs$lang$ctorPrWriter = ((function (map__35176,map__35176__$1,search_result,type,name,map__35177,map__35177__$1,opts,path_fn,comm){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"clustermap.components.search/t35178");
});})(map__35176,map__35176__$1,search_result,type,name,map__35177,map__35177__$1,opts,path_fn,comm))
;
clustermap.components.search.t35178.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t35178.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__35176,map__35176__$1,search_result,type,name,map__35177,map__35177__$1,opts,path_fn,comm){
return (function (this$,p__35181){var self__ = this;
var map__35182 = p__35181;var map__35182__$1 = ((cljs.core.seq_QMARK_(map__35182))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35182):map__35182);var state = map__35182__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35182__$1,cljs.core.constant$keyword$648);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__35182,map__35182__$1,state,selected,map__35176,map__35176__$1,search_result,type,name,map__35177,map__35177__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__35183 = l;var G__35183__$1 = (((G__35183 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__35183));var G__35183__$2 = (((G__35183__$1 == null))?null:G__35183__$1.parents(".search-component"));var G__35183__$3 = (((G__35183__$2 == null))?null:G__35183__$2.toggle());return G__35183__$3;
});})(path,this$__$1,map__35182,map__35182__$1,state,selected,map__35176,map__35176__$1,search_result,type,name,map__35177,map__35177__$1,opts,path_fn,comm))
},sablono.interpreter.interpret(self__.name)));
});})(map__35176,map__35176__$1,search_result,type,name,map__35177,map__35177__$1,opts,path_fn,comm))
;
clustermap.components.search.t35178.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35176,map__35176__$1,search_result,type,name,map__35177,map__35177__$1,opts,path_fn,comm){
return (function (_35180){var self__ = this;
var _35180__$1 = this;return self__.meta35179;
});})(map__35176,map__35176__$1,search_result,type,name,map__35177,map__35177__$1,opts,path_fn,comm))
;
clustermap.components.search.t35178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35176,map__35176__$1,search_result,type,name,map__35177,map__35177__$1,opts,path_fn,comm){
return (function (_35180,meta35179__$1){var self__ = this;
var _35180__$1 = this;return (new clustermap.components.search.t35178(self__.owner,self__.path_fn,self__.p__35167,self__.search_result_link,self__.name,self__.p__35166,self__.comm,self__.search_result,self__.map__35177,self__.type,self__.map__35176,self__.opts,meta35179__$1));
});})(map__35176,map__35176__$1,search_result,type,name,map__35177,map__35177__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t35178 = ((function (map__35176,map__35176__$1,search_result,type,name,map__35177,map__35177__$1,opts,path_fn,comm){
return (function __GT_t35178(owner__$1,path_fn__$1,p__35167__$1,search_result_link__$1,name__$1,p__35166__$1,comm__$1,search_result__$1,map__35177__$2,type__$1,map__35176__$2,opts__$1,meta35179){return (new clustermap.components.search.t35178(owner__$1,path_fn__$1,p__35167__$1,search_result_link__$1,name__$1,p__35166__$1,comm__$1,search_result__$1,map__35177__$2,type__$1,map__35176__$2,opts__$1,meta35179));
});})(map__35176,map__35176__$1,search_result,type,name,map__35177,map__35177__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t35178(owner,path_fn,p__35167,search_result_link,name,p__35166,comm,search_result,map__35177__$1,type,map__35176__$1,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__35184,n){var map__35186 = p__35184;var map__35186__$1 = ((cljs.core.seq_QMARK_(map__35186))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35186):map__35186);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35186__$1,cljs.core.constant$keyword$700);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35186__$1,cljs.core.constant$keyword$786);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35186__$1,cljs.core.constant$keyword$768);var cons = (function (){var or__3539__auto__ = constituencies;if(cljs.core.truth_(or__3539__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$701,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$698,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$699,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__35193 = cljs.core._EQ__EQ_;var expr__35194 = e.keyCode;if(cljs.core.truth_((pred__35193.cljs$core$IFn$_invoke$arity$2 ? pred__35193.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__35194) : pred__35193.call(null,clustermap.components.search.ESCAPE_KEY,expr__35194))))
{var G__35196 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__35196__$1 = (((G__35196 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__35196));var G__35196__$2 = (((G__35196__$1 == null))?null:G__35196__$1.toggle());return G__35196__$2;
} else
{if(cljs.core.truth_((pred__35193.cljs$core$IFn$_invoke$arity$2 ? pred__35193.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__35194) : pred__35193.call(null,clustermap.components.search.ENTER_KEY,expr__35194))))
{var vec__35197 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3539__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$787);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35197,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35197,1,null);var G__35198_35199 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__35198_35200__$1 = (((G__35198_35199 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__35198_35199));var G__35198_35201__$2 = (((G__35198_35200__$1 == null))?null:G__35198_35200__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$650,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__35193.cljs$core$IFn$_invoke$arity$2 ? pred__35193.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__35194) : pred__35193.call(null,clustermap.components.search.UP_ARROW,expr__35194))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$787,((function (){var or__3539__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$787);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__35193.cljs$core$IFn$_invoke$arity$2 ? pred__35193.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__35194) : pred__35193.call(null,clustermap.components.search.DOWN_ARROW,expr__35194))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$787,((function (){var or__3539__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$787);if(cljs.core.truth_(or__3539__auto__))
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
clustermap.components.search.search_component = (function search_component(p__35202,owner){var map__35234 = p__35202;var map__35234__$1 = ((cljs.core.seq_QMARK_(map__35234))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35234):map__35234);var map__35235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35234__$1,cljs.core.constant$keyword$761);var map__35235__$1 = ((cljs.core.seq_QMARK_(map__35235))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35235):map__35235);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35235__$1,cljs.core.constant$keyword$612);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35235__$1,cljs.core.constant$keyword$583);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35234__$1,cljs.core.constant$keyword$788);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35234__$1,cljs.core.constant$keyword$789);var map__35236 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__35236__$1 = ((cljs.core.seq_QMARK_(map__35236))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35236):map__35236);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35236__$1,cljs.core.constant$keyword$696);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35236__$1,cljs.core.constant$keyword$707);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,view);var map__35237 = search_results;var map__35237__$1 = ((cljs.core.seq_QMARK_(map__35237))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35237):map__35237);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35237__$1,cljs.core.constant$keyword$700);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35237__$1,cljs.core.constant$keyword$786);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35237__$1,cljs.core.constant$keyword$768);if(typeof clustermap.components.search.t35238 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t35238 = (function (search_results,search_component,owner,path_fn,view,map__35236,portfolio_companies,map__35237,p__35202,constituencies,investor_companies,map__35234,selection_value,comm,map__35235,selection_type,meta35239){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.map__35236 = map__35236;
this.portfolio_companies = portfolio_companies;
this.map__35237 = map__35237;
this.p__35202 = p__35202;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.map__35234 = map__35234;
this.selection_value = selection_value;
this.comm = comm;
this.map__35235 = map__35235;
this.selection_type = selection_type;
this.meta35239 = meta35239;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t35238.cljs$lang$type = true;
clustermap.components.search.t35238.cljs$lang$ctorStr = "clustermap.components.search/t35238";
clustermap.components.search.t35238.cljs$lang$ctorPrWriter = ((function (map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"clustermap.components.search/t35238");
});})(map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t35238.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t35238.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$790,e.target.value], null));
});})(this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results))
}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$790,e.target.value], null));
});})(this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results))
}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$790,""], null));
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"search-field").value = "";
});})(this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3539__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3539__auto____$1))
{return or__3539__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3539__auto__ = cljs.core.constant$keyword$787.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$787.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$787,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$791,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$625,"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$637,(cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$791,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$638,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$625,"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4264__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results){
return (function iter__35241(s__35242){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results){
return (function (){var s__35242__$1 = s__35242;while(true){
var temp__4126__auto__ = cljs.core.seq(s__35242__$1);if(temp__4126__auto__)
{var s__35242__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__35242__$2))
{var c__4262__auto__ = cljs.core.chunk_first(s__35242__$2);var size__4263__auto__ = cljs.core.count(c__4262__auto__);var b__35244 = cljs.core.chunk_buffer(size__4263__auto__);if((function (){var i__35243 = 0;while(true){
if((i__35243 < size__4263__auto__))
{var vec__35247 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4262__auto__,i__35243);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35247,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35247,1,null);cljs.core.chunk_append(b__35244,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$689,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$707,self__.comm,cljs.core.constant$keyword$696,self__.path_fn], null),cljs.core.constant$keyword$688,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$648,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$683,((function (i__35243,vec__35247,idx,con,c__4262__auto__,size__4263__auto__,b__35244,s__35242__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$612,cljs.core.constant$keyword$701,cljs.core.array_seq([cljs.core.constant$keyword$614,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$615),cljs.core.constant$keyword$792,("constituency:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$615)))], 0));
});})(i__35243,vec__35247,idx,con,c__4262__auto__,size__4263__auto__,b__35244,s__35242__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$686,cljs.core.constant$keyword$792], null)));
{
var G__35265 = (i__35243 + 1);
i__35243 = G__35265;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35244),iter__35241(cljs.core.chunk_rest(s__35242__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35244),null);
}
} else
{var vec__35248 = cljs.core.first(s__35242__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35248,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35248,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$689,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$707,self__.comm,cljs.core.constant$keyword$696,self__.path_fn], null),cljs.core.constant$keyword$688,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$648,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$683,((function (vec__35248,idx,con,s__35242__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$612,cljs.core.constant$keyword$701,cljs.core.array_seq([cljs.core.constant$keyword$614,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$615),cljs.core.constant$keyword$792,("constituency:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$615)))], 0));
});})(vec__35248,idx,con,s__35242__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$686,cljs.core.constant$keyword$792], null)),iter__35241(cljs.core.rest(s__35242__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results))
;return iter__4264__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$791,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$638,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$625,"search-results-header"], null),"Investor-backed companies"], null)], null),(function (){var iter__4264__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results){
return (function iter__35249(s__35250){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results){
return (function (){var s__35250__$1 = s__35250;while(true){
var temp__4126__auto__ = cljs.core.seq(s__35250__$1);if(temp__4126__auto__)
{var s__35250__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__35250__$2))
{var c__4262__auto__ = cljs.core.chunk_first(s__35250__$2);var size__4263__auto__ = cljs.core.count(c__4262__auto__);var b__35252 = cljs.core.chunk_buffer(size__4263__auto__);if((function (){var i__35251 = 0;while(true){
if((i__35251 < size__4263__auto__))
{var vec__35255 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4262__auto__,i__35251);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35255,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35255,1,null);cljs.core.chunk_append(b__35252,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$689,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$707,self__.comm,cljs.core.constant$keyword$696,self__.path_fn], null),cljs.core.constant$keyword$688,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$648,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$683,((function (i__35251,vec__35255,idx,pc,c__4262__auto__,size__4263__auto__,b__35252,s__35250__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$612,cljs.core.constant$keyword$698,cljs.core.array_seq([cljs.core.constant$keyword$614,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$710),cljs.core.constant$keyword$792,("portfolio-company:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$710)))], 0));
});})(i__35251,vec__35255,idx,pc,c__4262__auto__,size__4263__auto__,b__35252,s__35250__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$686,cljs.core.constant$keyword$792], null)));
{
var G__35266 = (i__35251 + 1);
i__35251 = G__35266;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35252),iter__35249(cljs.core.chunk_rest(s__35250__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35252),null);
}
} else
{var vec__35256 = cljs.core.first(s__35250__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35256,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35256,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$689,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$707,self__.comm,cljs.core.constant$keyword$696,self__.path_fn], null),cljs.core.constant$keyword$688,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$648,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$683,((function (vec__35256,idx,pc,s__35250__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$612,cljs.core.constant$keyword$698,cljs.core.array_seq([cljs.core.constant$keyword$614,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$710),cljs.core.constant$keyword$792,("portfolio-company:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$710)))], 0));
});})(vec__35256,idx,pc,s__35250__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$686,cljs.core.constant$keyword$792], null)),iter__35249(cljs.core.rest(s__35250__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results))
;return iter__4264__auto__(idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$791,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$638,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$625,"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4264__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results){
return (function iter__35257(s__35258){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results){
return (function (){var s__35258__$1 = s__35258;while(true){
var temp__4126__auto__ = cljs.core.seq(s__35258__$1);if(temp__4126__auto__)
{var s__35258__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__35258__$2))
{var c__4262__auto__ = cljs.core.chunk_first(s__35258__$2);var size__4263__auto__ = cljs.core.count(c__4262__auto__);var b__35260 = cljs.core.chunk_buffer(size__4263__auto__);if((function (){var i__35259 = 0;while(true){
if((i__35259 < size__4263__auto__))
{var vec__35263 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4262__auto__,i__35259);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35263,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35263,1,null);cljs.core.chunk_append(b__35260,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$689,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$707,self__.comm,cljs.core.constant$keyword$696,self__.path_fn], null),cljs.core.constant$keyword$688,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$648,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$683,((function (i__35259,vec__35263,idx,inv,c__4262__auto__,size__4263__auto__,b__35260,s__35258__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$612,cljs.core.constant$keyword$699,cljs.core.array_seq([cljs.core.constant$keyword$614,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$713),cljs.core.constant$keyword$792,("investor-company:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$713)))], 0));
});})(i__35259,vec__35263,idx,inv,c__4262__auto__,size__4263__auto__,b__35260,s__35258__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$686,cljs.core.constant$keyword$792], null)));
{
var G__35267 = (i__35259 + 1);
i__35259 = G__35267;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35260),iter__35257(cljs.core.chunk_rest(s__35258__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35260),null);
}
} else
{var vec__35264 = cljs.core.first(s__35258__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35264,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35264,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$689,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$707,self__.comm,cljs.core.constant$keyword$696,self__.path_fn], null),cljs.core.constant$keyword$688,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$648,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$683,((function (vec__35264,idx,inv,s__35258__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$612,cljs.core.constant$keyword$699,cljs.core.array_seq([cljs.core.constant$keyword$614,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$713),cljs.core.constant$keyword$792,("investor-company:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$713)))], 0));
});})(vec__35264,idx,inv,s__35258__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$686,cljs.core.constant$keyword$792], null)),iter__35257(cljs.core.rest(s__35258__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results))
;return iter__4264__auto__(idx_invs);
})()):null)], null)], null);
})():null)));
});})(map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t35238.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results){
return (function (_35240){var self__ = this;
var _35240__$1 = this;return self__.meta35239;
});})(map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t35238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results){
return (function (_35240,meta35239__$1){var self__ = this;
var _35240__$1 = this;return (new clustermap.components.search.t35238(self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.map__35236,self__.portfolio_companies,self__.map__35237,self__.p__35202,self__.constituencies,self__.investor_companies,self__.map__35234,self__.selection_value,self__.comm,self__.map__35235,self__.selection_type,meta35239__$1));
});})(map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t35238 = ((function (map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results){
return (function __GT_t35238(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,map__35236__$2,portfolio_companies__$1,map__35237__$2,p__35202__$1,constituencies__$1,investor_companies__$1,map__35234__$2,selection_value__$1,comm__$1,map__35235__$2,selection_type__$1,meta35239){return (new clustermap.components.search.t35238(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,map__35236__$2,portfolio_companies__$1,map__35237__$2,p__35202__$1,constituencies__$1,investor_companies__$1,map__35234__$2,selection_value__$1,comm__$1,map__35235__$2,selection_type__$1,meta35239));
});})(map__35236,map__35236__$1,path_fn,comm,path_fn__$1,map__35237,map__35237__$1,investor_companies,portfolio_companies,constituencies,map__35234,map__35234__$1,map__35235,map__35235__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t35238(search_results,search_component,owner,path_fn__$1,view,map__35236__$1,portfolio_companies,map__35237__$1,p__35202,constituencies,investor_companies,map__35234__$1,selection_value,comm,map__35235__$1,selection_type,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$691,shared,cljs.core.constant$keyword$694,document.getElementById(elem_id)], null));
});
