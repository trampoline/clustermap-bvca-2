// Compiled by ClojureScript 0.0-2356
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
clustermap.components.search.search_result_link = (function search_result_link(p__56229,owner,p__56230){var map__56245 = p__56229;var map__56245__$1 = ((cljs.core.seq_QMARK_(map__56245))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56245):map__56245);var search_result = map__56245__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56245__$1,cljs.core.constant$keyword$1160);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56245__$1,cljs.core.constant$keyword$1274);var map__56246 = p__56230;var map__56246__$1 = ((cljs.core.seq_QMARK_(map__56246))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56246):map__56246);var opts = map__56246__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56246__$1,cljs.core.constant$keyword$1496);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56246__$1,cljs.core.constant$keyword$1312);if(typeof clustermap.components.search.t56247 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t56247 = (function (owner,path_fn,p__56229,p__56230,search_result_link,name,comm,search_result,type,opts,map__56245,map__56246,meta56248){
this.owner = owner;
this.path_fn = path_fn;
this.p__56229 = p__56229;
this.p__56230 = p__56230;
this.search_result_link = search_result_link;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.opts = opts;
this.map__56245 = map__56245;
this.map__56246 = map__56246;
this.meta56248 = meta56248;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t56247.cljs$lang$type = true;
clustermap.components.search.t56247.cljs$lang$ctorStr = "clustermap.components.search/t56247";
clustermap.components.search.t56247.cljs$lang$ctorPrWriter = ((function (map__56245,map__56245__$1,search_result,type,name,map__56246,map__56246__$1,opts,path_fn,comm){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.components.search/t56247");
});})(map__56245,map__56245__$1,search_result,type,name,map__56246,map__56246__$1,opts,path_fn,comm))
;
clustermap.components.search.t56247.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t56247.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__56245,map__56245__$1,search_result,type,name,map__56246,map__56246__$1,opts,path_fn,comm){
return (function (this$,p__56250){var self__ = this;
var map__56251 = p__56250;var map__56251__$1 = ((cljs.core.seq_QMARK_(map__56251))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56251):map__56251);var state = map__56251__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56251__$1,cljs.core.constant$keyword$1279);var this$__$1 = this;var path = (function (){var G__56252 = self__.type;var G__56253 = self__.search_result;return (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(G__56252,G__56253) : self__.path_fn.call(null,G__56252,G__56253));
})();var G__56254 = {"className": (cljs.core.truth_(selected)?"selected":null)};var G__56255 = (function (){var G__56256 = {"href": path, "ref": "link", "onClick": ((function (G__56254,path,this$__$1,map__56251,map__56251__$1,state,selected,map__56245,map__56245__$1,search_result,type,name,map__56246,map__56246__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__56258 = l;var G__56258__$1 = (((G__56258 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__56258));var G__56258__$2 = (((G__56258__$1 == null))?null:G__56258__$1.parents(".search-component"));var G__56258__$3 = (((G__56258__$2 == null))?null:G__56258__$2.toggle());return G__56258__$3;
});})(G__56254,path,this$__$1,map__56251,map__56251__$1,state,selected,map__56245,map__56245__$1,search_result,type,name,map__56246,map__56246__$1,opts,path_fn,comm))
};var G__56257 = sablono.interpreter.interpret(self__.name);return React.DOM.a(G__56256,G__56257);
})();return React.DOM.li(G__56254,G__56255);
});})(map__56245,map__56245__$1,search_result,type,name,map__56246,map__56246__$1,opts,path_fn,comm))
;
clustermap.components.search.t56247.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__56245,map__56245__$1,search_result,type,name,map__56246,map__56246__$1,opts,path_fn,comm){
return (function (_56249){var self__ = this;
var _56249__$1 = this;return self__.meta56248;
});})(map__56245,map__56245__$1,search_result,type,name,map__56246,map__56246__$1,opts,path_fn,comm))
;
clustermap.components.search.t56247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__56245,map__56245__$1,search_result,type,name,map__56246,map__56246__$1,opts,path_fn,comm){
return (function (_56249,meta56248__$1){var self__ = this;
var _56249__$1 = this;return (new clustermap.components.search.t56247(self__.owner,self__.path_fn,self__.p__56229,self__.p__56230,self__.search_result_link,self__.name,self__.comm,self__.search_result,self__.type,self__.opts,self__.map__56245,self__.map__56246,meta56248__$1));
});})(map__56245,map__56245__$1,search_result,type,name,map__56246,map__56246__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t56247 = ((function (map__56245,map__56245__$1,search_result,type,name,map__56246,map__56246__$1,opts,path_fn,comm){
return (function __GT_t56247(owner__$1,path_fn__$1,p__56229__$1,p__56230__$1,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,opts__$1,map__56245__$2,map__56246__$2,meta56248){return (new clustermap.components.search.t56247(owner__$1,path_fn__$1,p__56229__$1,p__56230__$1,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,opts__$1,map__56245__$2,map__56246__$2,meta56248));
});})(map__56245,map__56245__$1,search_result,type,name,map__56246,map__56246__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t56247(owner,path_fn,p__56229,p__56230,search_result_link,name,comm,search_result,type,opts,map__56245__$1,map__56246__$1,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__56259,n){var map__56261 = p__56259;var map__56261__$1 = ((cljs.core.seq_QMARK_(map__56261))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56261):map__56261);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56261__$1,cljs.core.constant$keyword$1498);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56261__$1,cljs.core.constant$keyword$1598);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56261__$1,cljs.core.constant$keyword$1523);var cons = (function (){var or__3637__auto__ = constituencies;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var pcs = (function (){var or__3637__auto__ = portfolio_companies;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var invs = (function (){var or__3637__auto__ = investor_companies;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();if((n < cljs.core.count(cons)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1288,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1286,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1287,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);

}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__56277 = cljs.core._EQ__EQ_;var expr__56278 = e.keyCode;if(cljs.core.truth_((function (){var G__56280 = clustermap.components.search.ESCAPE_KEY;var G__56281 = expr__56278;return (pred__56277.cljs$core$IFn$_invoke$arity$2 ? pred__56277.cljs$core$IFn$_invoke$arity$2(G__56280,G__56281) : pred__56277.call(null,G__56280,G__56281));
})()))
{var G__56282 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__56282__$1 = (((G__56282 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__56282));var G__56282__$2 = (((G__56282__$1 == null))?null:G__56282__$1.toggle());return G__56282__$2;
} else
{if(cljs.core.truth_((function (){var G__56283 = clustermap.components.search.ENTER_KEY;var G__56284 = expr__56278;return (pred__56277.cljs$core$IFn$_invoke$arity$2 ? pred__56277.cljs$core$IFn$_invoke$arity$2(G__56283,G__56284) : pred__56277.call(null,G__56283,G__56284));
})()))
{var vec__56285 = clustermap.components.search.nth_search_result((function (){var G__56286 = search_results;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__56286) : cljs.core.deref.call(null,G__56286));
})(),(function (){var or__3637__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1599);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56285,(0),null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56285,(1),null);var G__56287_56292 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__56287_56293__$1 = (((G__56287_56292 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__56287_56292));var G__56287_56294__$2 = (((G__56287_56293__$1 == null))?null:G__56287_56293__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1281,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((function (){var G__56288 = clustermap.components.search.UP_ARROW;var G__56289 = expr__56278;return (pred__56277.cljs$core$IFn$_invoke$arity$2 ? pred__56277.cljs$core$IFn$_invoke$arity$2(G__56288,G__56289) : pred__56277.call(null,G__56288,G__56289));
})()))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$1599,((function (){var or__3637__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1599);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_((function (){var G__56290 = clustermap.components.search.DOWN_ARROW;var G__56291 = expr__56278;return (pred__56277.cljs$core$IFn$_invoke$arity$2 ? pred__56277.cljs$core$IFn$_invoke$arity$2(G__56290,G__56291) : pred__56277.call(null,G__56290,G__56291));
})()))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$1599,((function (){var or__3637__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1599);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
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
clustermap.components.search.search_component = (function search_component(p__56295,owner){var map__56346 = p__56295;var map__56346__$1 = ((cljs.core.seq_QMARK_(map__56346))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56346):map__56346);var map__56347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56346__$1,cljs.core.constant$keyword$1516);var map__56347__$1 = ((cljs.core.seq_QMARK_(map__56347))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56347):map__56347);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56347__$1,cljs.core.constant$keyword$1160);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56347__$1,cljs.core.constant$keyword$1275);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56346__$1,cljs.core.constant$keyword$1600);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56346__$1,cljs.core.constant$keyword$1601);var map__56348 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__56348__$1 = ((cljs.core.seq_QMARK_(map__56348))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56348):map__56348);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56348__$1,cljs.core.constant$keyword$1496);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56348__$1,cljs.core.constant$keyword$1312);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,view);var map__56349 = search_results;var map__56349__$1 = ((cljs.core.seq_QMARK_(map__56349))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56349):map__56349);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56349__$1,cljs.core.constant$keyword$1498);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56349__$1,cljs.core.constant$keyword$1598);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56349__$1,cljs.core.constant$keyword$1523);if(typeof clustermap.components.search.t56350 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t56350 = (function (search_results,map__56347,search_component,owner,path_fn,view,map__56349,portfolio_companies,constituencies,p__56295,investor_companies,selection_value,comm,selection_type,map__56346,map__56348,meta56351){
this.search_results = search_results;
this.map__56347 = map__56347;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.map__56349 = map__56349;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.p__56295 = p__56295;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.comm = comm;
this.selection_type = selection_type;
this.map__56346 = map__56346;
this.map__56348 = map__56348;
this.meta56351 = meta56351;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t56350.cljs$lang$type = true;
clustermap.components.search.t56350.cljs$lang$ctorStr = "clustermap.components.search/t56350";
clustermap.components.search.t56350.cljs$lang$ctorPrWriter = ((function (map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.components.search/t56350");
});})(map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t56350.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t56350.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var G__56353 = {"className": "search-component", "ref": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results))
};var G__56354 = (function (){var G__56356 = {"className": "tbl"};var G__56357 = (function (){var G__56359 = {"className": "tbl-cell", "style": {"width": "100%"}};var G__56360 = (function (){var G__56361 = {"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (G__56359,G__56356,G__56353,this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1602,e.target.value], null));
});})(G__56359,G__56356,G__56353,this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results))
};return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__56361) : sablono.interpreter.input.call(null,G__56361));
})();return React.DOM.div(G__56359,G__56360);
})();var G__56358 = (function (){var G__56362 = {"className": "tbl-cell", "style": {"width": "34"}};var G__56363 = (function (){var G__56364 = {"type": "reset", "onClick": ((function (G__56362,G__56356,G__56357,G__56353,this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1602,""], null));
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"search-field").value = "";
});})(G__56362,G__56356,G__56357,G__56353,this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results))
};var G__56365 = "\u00D7";return React.DOM.button(G__56364,G__56365);
})();return React.DOM.div(G__56362,G__56363);
})();return React.DOM.div(G__56356,G__56357,G__56358);
})();var G__56355 = sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3637__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3637__auto____$1))
{return or__3637__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3637__auto__ = cljs.core.constant$keyword$1599.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return (0);
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$1599.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1599,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1603,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1257,"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1268,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1269,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1257,"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_cons))?(function (){var iter__4375__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,G__56353,G__56354,this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results){
return (function iter__56366(s__56367){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,G__56353,G__56354,this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results){
return (function (){var s__56367__$1 = s__56367;while(true){
var temp__4126__auto__ = cljs.core.seq(s__56367__$1);if(temp__4126__auto__)
{var s__56367__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__56367__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__56367__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__56369 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__56368 = (0);while(true){
if((i__56368 < size__4374__auto__))
{var vec__56374 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__56368);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56374,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56374,(1),null);cljs.core.chunk_append(b__56369,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1246,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1312,self__.comm,cljs.core.constant$keyword$1496,self__.path_fn], null),cljs.core.constant$keyword$1245,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1240,((function (i__56368,vec__56374,idx,con,c__4373__auto__,size__4374__auto__,b__56369,s__56367__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,G__56353,G__56354,this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1160,cljs.core.constant$keyword$1288,cljs.core.array_seq([cljs.core.constant$keyword$1162,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1163),cljs.core.constant$keyword$1604,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1163)))], 0));
});})(i__56368,vec__56374,idx,con,c__4373__auto__,size__4374__auto__,b__56369,s__56367__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,G__56353,G__56354,this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1243,cljs.core.constant$keyword$1604], null)));
{
var G__56396 = (i__56368 + (1));
i__56368 = G__56396;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__56369),iter__56366(cljs.core.chunk_rest(s__56367__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__56369),null);
}
} else
{var vec__56375 = cljs.core.first(s__56367__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56375,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56375,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1246,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1312,self__.comm,cljs.core.constant$keyword$1496,self__.path_fn], null),cljs.core.constant$keyword$1245,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1240,((function (vec__56375,idx,con,s__56367__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,G__56353,G__56354,this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1160,cljs.core.constant$keyword$1288,cljs.core.array_seq([cljs.core.constant$keyword$1162,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1163),cljs.core.constant$keyword$1604,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1163)))], 0));
});})(vec__56375,idx,con,s__56367__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,G__56353,G__56354,this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1243,cljs.core.constant$keyword$1604], null)),iter__56366(cljs.core.rest(s__56367__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,G__56353,G__56354,this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,G__56353,G__56354,this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results))
;return iter__4375__auto__(idx_cons);
})():null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1269,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1257,"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?(function (){var iter__4375__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,G__56353,G__56354,this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results){
return (function iter__56376(s__56377){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,G__56353,G__56354,this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results){
return (function (){var s__56377__$1 = s__56377;while(true){
var temp__4126__auto__ = cljs.core.seq(s__56377__$1);if(temp__4126__auto__)
{var s__56377__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__56377__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__56377__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__56379 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__56378 = (0);while(true){
if((i__56378 < size__4374__auto__))
{var vec__56384 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__56378);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56384,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56384,(1),null);cljs.core.chunk_append(b__56379,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1246,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1312,self__.comm,cljs.core.constant$keyword$1496,self__.path_fn], null),cljs.core.constant$keyword$1245,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1240,((function (i__56378,vec__56384,idx,pc,c__4373__auto__,size__4374__auto__,b__56379,s__56377__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,G__56353,G__56354,this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1160,cljs.core.constant$keyword$1286,cljs.core.array_seq([cljs.core.constant$keyword$1162,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1289),cljs.core.constant$keyword$1604,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1289)))], 0));
});})(i__56378,vec__56384,idx,pc,c__4373__auto__,size__4374__auto__,b__56379,s__56377__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,G__56353,G__56354,this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1243,cljs.core.constant$keyword$1604], null)));
{
var G__56397 = (i__56378 + (1));
i__56378 = G__56397;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__56379),iter__56376(cljs.core.chunk_rest(s__56377__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__56379),null);
}
} else
{var vec__56385 = cljs.core.first(s__56377__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56385,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56385,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1246,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1312,self__.comm,cljs.core.constant$keyword$1496,self__.path_fn], null),cljs.core.constant$keyword$1245,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1240,((function (vec__56385,idx,pc,s__56377__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,G__56353,G__56354,this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1160,cljs.core.constant$keyword$1286,cljs.core.array_seq([cljs.core.constant$keyword$1162,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1289),cljs.core.constant$keyword$1604,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1289)))], 0));
});})(vec__56385,idx,pc,s__56377__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,G__56353,G__56354,this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1243,cljs.core.constant$keyword$1604], null)),iter__56376(cljs.core.rest(s__56377__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,G__56353,G__56354,this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,G__56353,G__56354,this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results))
;return iter__4375__auto__(idx_pcs);
})():null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1269,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1257,"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?(function (){var iter__4375__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,G__56353,G__56354,this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results){
return (function iter__56386(s__56387){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,G__56353,G__56354,this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results){
return (function (){var s__56387__$1 = s__56387;while(true){
var temp__4126__auto__ = cljs.core.seq(s__56387__$1);if(temp__4126__auto__)
{var s__56387__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__56387__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__56387__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__56389 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__56388 = (0);while(true){
if((i__56388 < size__4374__auto__))
{var vec__56394 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__56388);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56394,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56394,(1),null);cljs.core.chunk_append(b__56389,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1246,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1312,self__.comm,cljs.core.constant$keyword$1496,self__.path_fn], null),cljs.core.constant$keyword$1245,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1240,((function (i__56388,vec__56394,idx,inv,c__4373__auto__,size__4374__auto__,b__56389,s__56387__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,G__56353,G__56354,this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1160,cljs.core.constant$keyword$1287,cljs.core.array_seq([cljs.core.constant$keyword$1162,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1290),cljs.core.constant$keyword$1604,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1290)))], 0));
});})(i__56388,vec__56394,idx,inv,c__4373__auto__,size__4374__auto__,b__56389,s__56387__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,G__56353,G__56354,this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1243,cljs.core.constant$keyword$1604], null)));
{
var G__56398 = (i__56388 + (1));
i__56388 = G__56398;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__56389),iter__56386(cljs.core.chunk_rest(s__56387__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__56389),null);
}
} else
{var vec__56395 = cljs.core.first(s__56387__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56395,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56395,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1246,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1312,self__.comm,cljs.core.constant$keyword$1496,self__.path_fn], null),cljs.core.constant$keyword$1245,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1240,((function (vec__56395,idx,inv,s__56387__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,G__56353,G__56354,this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1160,cljs.core.constant$keyword$1287,cljs.core.array_seq([cljs.core.constant$keyword$1162,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1290),cljs.core.constant$keyword$1604,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1290)))], 0));
});})(vec__56395,idx,inv,s__56387__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,G__56353,G__56354,this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1243,cljs.core.constant$keyword$1604], null)),iter__56386(cljs.core.rest(s__56387__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,G__56353,G__56354,this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,G__56353,G__56354,this$__$1,map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results))
;return iter__4375__auto__(idx_invs);
})():null)], null)], null);
})():null));return React.DOM.div(G__56353,G__56354,G__56355);
});})(map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t56350.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results){
return (function (_56352){var self__ = this;
var _56352__$1 = this;return self__.meta56351;
});})(map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t56350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results){
return (function (_56352,meta56351__$1){var self__ = this;
var _56352__$1 = this;return (new clustermap.components.search.t56350(self__.search_results,self__.map__56347,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.map__56349,self__.portfolio_companies,self__.constituencies,self__.p__56295,self__.investor_companies,self__.selection_value,self__.comm,self__.selection_type,self__.map__56346,self__.map__56348,meta56351__$1));
});})(map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t56350 = ((function (map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results){
return (function __GT_t56350(search_results__$1,map__56347__$2,search_component__$1,owner__$1,path_fn__$2,view__$1,map__56349__$2,portfolio_companies__$1,constituencies__$1,p__56295__$1,investor_companies__$1,selection_value__$1,comm__$1,selection_type__$1,map__56346__$2,map__56348__$2,meta56351){return (new clustermap.components.search.t56350(search_results__$1,map__56347__$2,search_component__$1,owner__$1,path_fn__$2,view__$1,map__56349__$2,portfolio_companies__$1,constituencies__$1,p__56295__$1,investor_companies__$1,selection_value__$1,comm__$1,selection_type__$1,map__56346__$2,map__56348__$2,meta56351));
});})(map__56348,map__56348__$1,path_fn,comm,path_fn__$1,map__56349,map__56349__$1,investor_companies,portfolio_companies,constituencies,map__56346,map__56346__$1,map__56347,map__56347__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t56350(search_results,map__56347__$1,search_component,owner,path_fn__$1,view,map__56349__$1,portfolio_companies,constituencies,p__56295,investor_companies,selection_value,comm,selection_type,map__56346__$1,map__56348__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1248,shared,cljs.core.constant$keyword$1252,document.getElementById(elem_id)], null));
});
