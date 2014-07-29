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
clustermap.components.search.search_result_link = (function search_result_link(p__38214,owner,p__38215){var map__38224 = p__38214;var map__38224__$1 = ((cljs.core.seq_QMARK_(map__38224))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38224):map__38224);var search_result = map__38224__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38224__$1,cljs.core.constant$keyword$816);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38224__$1,cljs.core.constant$keyword$846);var map__38225 = p__38215;var map__38225__$1 = ((cljs.core.seq_QMARK_(map__38225))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38225):map__38225);var opts = map__38225__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38225__$1,cljs.core.constant$keyword$899);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38225__$1,cljs.core.constant$keyword$909);if(typeof clustermap.components.search.t38226 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t38226 = (function (map__38225,owner,path_fn,p__38215,search_result_link,name,comm,search_result,type,map__38224,p__38214,opts,meta38227){
this.map__38225 = map__38225;
this.owner = owner;
this.path_fn = path_fn;
this.p__38215 = p__38215;
this.search_result_link = search_result_link;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.map__38224 = map__38224;
this.p__38214 = p__38214;
this.opts = opts;
this.meta38227 = meta38227;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t38226.cljs$lang$type = true;
clustermap.components.search.t38226.cljs$lang$ctorStr = "clustermap.components.search/t38226";
clustermap.components.search.t38226.cljs$lang$ctorPrWriter = ((function (map__38224,map__38224__$1,search_result,type,name,map__38225,map__38225__$1,opts,path_fn,comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.search/t38226");
});})(map__38224,map__38224__$1,search_result,type,name,map__38225,map__38225__$1,opts,path_fn,comm))
;
clustermap.components.search.t38226.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t38226.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__38224,map__38224__$1,search_result,type,name,map__38225,map__38225__$1,opts,path_fn,comm){
return (function (this$,p__38229){var self__ = this;
var map__38230 = p__38229;var map__38230__$1 = ((cljs.core.seq_QMARK_(map__38230))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38230):map__38230);var state = map__38230__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38230__$1,cljs.core.constant$keyword$852);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__38230,map__38230__$1,state,selected,map__38224,map__38224__$1,search_result,type,name,map__38225,map__38225__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__38231 = l;var G__38231__$1 = (((G__38231 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__38231));var G__38231__$2 = (((G__38231__$1 == null))?null:G__38231__$1.parents(".search-component"));var G__38231__$3 = (((G__38231__$2 == null))?null:G__38231__$2.toggle());return G__38231__$3;
});})(path,this$__$1,map__38230,map__38230__$1,state,selected,map__38224,map__38224__$1,search_result,type,name,map__38225,map__38225__$1,opts,path_fn,comm))
},sablono.interpreter.interpret(self__.name)));
});})(map__38224,map__38224__$1,search_result,type,name,map__38225,map__38225__$1,opts,path_fn,comm))
;
clustermap.components.search.t38226.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38224,map__38224__$1,search_result,type,name,map__38225,map__38225__$1,opts,path_fn,comm){
return (function (_38228){var self__ = this;
var _38228__$1 = this;return self__.meta38227;
});})(map__38224,map__38224__$1,search_result,type,name,map__38225,map__38225__$1,opts,path_fn,comm))
;
clustermap.components.search.t38226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38224,map__38224__$1,search_result,type,name,map__38225,map__38225__$1,opts,path_fn,comm){
return (function (_38228,meta38227__$1){var self__ = this;
var _38228__$1 = this;return (new clustermap.components.search.t38226(self__.map__38225,self__.owner,self__.path_fn,self__.p__38215,self__.search_result_link,self__.name,self__.comm,self__.search_result,self__.type,self__.map__38224,self__.p__38214,self__.opts,meta38227__$1));
});})(map__38224,map__38224__$1,search_result,type,name,map__38225,map__38225__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t38226 = ((function (map__38224,map__38224__$1,search_result,type,name,map__38225,map__38225__$1,opts,path_fn,comm){
return (function __GT_t38226(map__38225__$2,owner__$1,path_fn__$1,p__38215__$1,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,map__38224__$2,p__38214__$1,opts__$1,meta38227){return (new clustermap.components.search.t38226(map__38225__$2,owner__$1,path_fn__$1,p__38215__$1,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,map__38224__$2,p__38214__$1,opts__$1,meta38227));
});})(map__38224,map__38224__$1,search_result,type,name,map__38225,map__38225__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t38226(map__38225__$1,owner,path_fn,p__38215,search_result_link,name,comm,search_result,type,map__38224__$1,p__38214,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__38232,n){var map__38234 = p__38232;var map__38234__$1 = ((cljs.core.seq_QMARK_(map__38234))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38234):map__38234);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38234__$1,cljs.core.constant$keyword$903);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38234__$1,cljs.core.constant$keyword$988);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38234__$1,cljs.core.constant$keyword$970);var cons = (function (){var or__3543__auto__ = constituencies;if(cljs.core.truth_(or__3543__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$904,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$901,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$902,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__38241 = cljs.core._EQ__EQ_;var expr__38242 = e.keyCode;if(cljs.core.truth_((pred__38241.cljs$core$IFn$_invoke$arity$2 ? pred__38241.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__38242) : pred__38241.call(null,clustermap.components.search.ESCAPE_KEY,expr__38242))))
{var G__38244 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__38244__$1 = (((G__38244 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__38244));var G__38244__$2 = (((G__38244__$1 == null))?null:G__38244__$1.toggle());return G__38244__$2;
} else
{if(cljs.core.truth_((pred__38241.cljs$core$IFn$_invoke$arity$2 ? pred__38241.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__38242) : pred__38241.call(null,clustermap.components.search.ENTER_KEY,expr__38242))))
{var vec__38245 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3543__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$989);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38245,(0),null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38245,(1),null);var G__38246_38247 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__38246_38248__$1 = (((G__38246_38247 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__38246_38247));var G__38246_38249__$2 = (((G__38246_38248__$1 == null))?null:G__38246_38248__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$854,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__38241.cljs$core$IFn$_invoke$arity$2 ? pred__38241.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__38242) : pred__38241.call(null,clustermap.components.search.UP_ARROW,expr__38242))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$989,((function (){var or__3543__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$989);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_((pred__38241.cljs$core$IFn$_invoke$arity$2 ? pred__38241.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__38242) : pred__38241.call(null,clustermap.components.search.DOWN_ARROW,expr__38242))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$989,((function (){var or__3543__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$989);if(cljs.core.truth_(or__3543__auto__))
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
clustermap.components.search.search_component = (function search_component(p__38250,owner){var map__38282 = p__38250;var map__38282__$1 = ((cljs.core.seq_QMARK_(map__38282))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38282):map__38282);var map__38283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38282__$1,cljs.core.constant$keyword$963);var map__38283__$1 = ((cljs.core.seq_QMARK_(map__38283))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38283):map__38283);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38283__$1,cljs.core.constant$keyword$816);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38283__$1,cljs.core.constant$keyword$847);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38282__$1,cljs.core.constant$keyword$990);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38282__$1,cljs.core.constant$keyword$991);var map__38284 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__38284__$1 = ((cljs.core.seq_QMARK_(map__38284))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38284):map__38284);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38284__$1,cljs.core.constant$keyword$899);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38284__$1,cljs.core.constant$keyword$909);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,view);var map__38285 = search_results;var map__38285__$1 = ((cljs.core.seq_QMARK_(map__38285))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38285):map__38285);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38285__$1,cljs.core.constant$keyword$903);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38285__$1,cljs.core.constant$keyword$988);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38285__$1,cljs.core.constant$keyword$970);if(typeof clustermap.components.search.t38286 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t38286 = (function (map__38283,search_results,search_component,owner,path_fn,view,p__38250,map__38285,portfolio_companies,constituencies,map__38284,investor_companies,selection_value,comm,selection_type,map__38282,meta38287){
this.map__38283 = map__38283;
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.p__38250 = p__38250;
this.map__38285 = map__38285;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.map__38284 = map__38284;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.comm = comm;
this.selection_type = selection_type;
this.map__38282 = map__38282;
this.meta38287 = meta38287;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t38286.cljs$lang$type = true;
clustermap.components.search.t38286.cljs$lang$ctorStr = "clustermap.components.search/t38286";
clustermap.components.search.t38286.cljs$lang$ctorPrWriter = ((function (map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.search/t38286");
});})(map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t38286.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t38286.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$992,e.target.value], null));
});})(this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results))
}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$992,e.target.value], null));
});})(this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results))
}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$992,""], null));
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"search-field").value = "";
});})(this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3543__auto____$1))
{return or__3543__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3543__auto__ = cljs.core.constant$keyword$989.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$989.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$989,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$993,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$829,"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$840,cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$841,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$829,"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_cons))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results){
return (function iter__38289(s__38290){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results){
return (function (){var s__38290__$1 = s__38290;while(true){
var temp__4126__auto__ = cljs.core.seq(s__38290__$1);if(temp__4126__auto__)
{var s__38290__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__38290__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__38290__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__38292 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__38291 = (0);while(true){
if((i__38291 < size__4267__auto__))
{var vec__38295 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__38291);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38295,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38295,(1),null);cljs.core.chunk_append(b__38292,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$892,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$909,self__.comm,cljs.core.constant$keyword$899,self__.path_fn], null),cljs.core.constant$keyword$891,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$852,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$886,((function (i__38291,vec__38295,idx,con,c__4266__auto__,size__4267__auto__,b__38292,s__38290__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$816,cljs.core.constant$keyword$904,cljs.core.array_seq([cljs.core.constant$keyword$818,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$819),cljs.core.constant$keyword$994,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$819)))], 0));
});})(i__38291,vec__38295,idx,con,c__4266__auto__,size__4267__auto__,b__38292,s__38290__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$889,cljs.core.constant$keyword$994], null)));
{
var G__38313 = (i__38291 + (1));
i__38291 = G__38313;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38292),iter__38289(cljs.core.chunk_rest(s__38290__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38292),null);
}
} else
{var vec__38296 = cljs.core.first(s__38290__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38296,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38296,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$892,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$909,self__.comm,cljs.core.constant$keyword$899,self__.path_fn], null),cljs.core.constant$keyword$891,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$852,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$886,((function (vec__38296,idx,con,s__38290__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$816,cljs.core.constant$keyword$904,cljs.core.array_seq([cljs.core.constant$keyword$818,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$819),cljs.core.constant$keyword$994,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$819)))], 0));
});})(vec__38296,idx,con,s__38290__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$889,cljs.core.constant$keyword$994], null)),iter__38289(cljs.core.rest(s__38290__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__(idx_cons);
})():null),cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$841,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$829,"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results){
return (function iter__38297(s__38298){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results){
return (function (){var s__38298__$1 = s__38298;while(true){
var temp__4126__auto__ = cljs.core.seq(s__38298__$1);if(temp__4126__auto__)
{var s__38298__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__38298__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__38298__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__38300 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__38299 = (0);while(true){
if((i__38299 < size__4267__auto__))
{var vec__38303 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__38299);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38303,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38303,(1),null);cljs.core.chunk_append(b__38300,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$892,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$909,self__.comm,cljs.core.constant$keyword$899,self__.path_fn], null),cljs.core.constant$keyword$891,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$852,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$886,((function (i__38299,vec__38303,idx,pc,c__4266__auto__,size__4267__auto__,b__38300,s__38298__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$816,cljs.core.constant$keyword$901,cljs.core.array_seq([cljs.core.constant$keyword$818,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$912),cljs.core.constant$keyword$994,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$912)))], 0));
});})(i__38299,vec__38303,idx,pc,c__4266__auto__,size__4267__auto__,b__38300,s__38298__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$889,cljs.core.constant$keyword$994], null)));
{
var G__38314 = (i__38299 + (1));
i__38299 = G__38314;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38300),iter__38297(cljs.core.chunk_rest(s__38298__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38300),null);
}
} else
{var vec__38304 = cljs.core.first(s__38298__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38304,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38304,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$892,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$909,self__.comm,cljs.core.constant$keyword$899,self__.path_fn], null),cljs.core.constant$keyword$891,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$852,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$886,((function (vec__38304,idx,pc,s__38298__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$816,cljs.core.constant$keyword$901,cljs.core.array_seq([cljs.core.constant$keyword$818,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$912),cljs.core.constant$keyword$994,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$912)))], 0));
});})(vec__38304,idx,pc,s__38298__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$889,cljs.core.constant$keyword$994], null)),iter__38297(cljs.core.rest(s__38298__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__(idx_pcs);
})():null),cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$841,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$829,"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results){
return (function iter__38305(s__38306){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results){
return (function (){var s__38306__$1 = s__38306;while(true){
var temp__4126__auto__ = cljs.core.seq(s__38306__$1);if(temp__4126__auto__)
{var s__38306__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__38306__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__38306__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__38308 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__38307 = (0);while(true){
if((i__38307 < size__4267__auto__))
{var vec__38311 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__38307);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38311,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38311,(1),null);cljs.core.chunk_append(b__38308,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$892,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$909,self__.comm,cljs.core.constant$keyword$899,self__.path_fn], null),cljs.core.constant$keyword$891,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$852,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$886,((function (i__38307,vec__38311,idx,inv,c__4266__auto__,size__4267__auto__,b__38308,s__38306__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$816,cljs.core.constant$keyword$902,cljs.core.array_seq([cljs.core.constant$keyword$818,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$915),cljs.core.constant$keyword$994,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$915)))], 0));
});})(i__38307,vec__38311,idx,inv,c__4266__auto__,size__4267__auto__,b__38308,s__38306__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$889,cljs.core.constant$keyword$994], null)));
{
var G__38315 = (i__38307 + (1));
i__38307 = G__38315;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38308),iter__38305(cljs.core.chunk_rest(s__38306__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38308),null);
}
} else
{var vec__38312 = cljs.core.first(s__38306__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38312,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38312,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$892,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$909,self__.comm,cljs.core.constant$keyword$899,self__.path_fn], null),cljs.core.constant$keyword$891,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$852,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$886,((function (vec__38312,idx,inv,s__38306__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$816,cljs.core.constant$keyword$902,cljs.core.array_seq([cljs.core.constant$keyword$818,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$915),cljs.core.constant$keyword$994,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$915)))], 0));
});})(vec__38312,idx,inv,s__38306__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$889,cljs.core.constant$keyword$994], null)),iter__38305(cljs.core.rest(s__38306__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__(idx_invs);
})():null)], null)], null);
})():null)));
});})(map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t38286.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results){
return (function (_38288){var self__ = this;
var _38288__$1 = this;return self__.meta38287;
});})(map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t38286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results){
return (function (_38288,meta38287__$1){var self__ = this;
var _38288__$1 = this;return (new clustermap.components.search.t38286(self__.map__38283,self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.p__38250,self__.map__38285,self__.portfolio_companies,self__.constituencies,self__.map__38284,self__.investor_companies,self__.selection_value,self__.comm,self__.selection_type,self__.map__38282,meta38287__$1));
});})(map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t38286 = ((function (map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results){
return (function __GT_t38286(map__38283__$2,search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,p__38250__$1,map__38285__$2,portfolio_companies__$1,constituencies__$1,map__38284__$2,investor_companies__$1,selection_value__$1,comm__$1,selection_type__$1,map__38282__$2,meta38287){return (new clustermap.components.search.t38286(map__38283__$2,search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,p__38250__$1,map__38285__$2,portfolio_companies__$1,constituencies__$1,map__38284__$2,investor_companies__$1,selection_value__$1,comm__$1,selection_type__$1,map__38282__$2,meta38287));
});})(map__38284,map__38284__$1,path_fn,comm,path_fn__$1,map__38285,map__38285__$1,investor_companies,portfolio_companies,constituencies,map__38282,map__38282__$1,map__38283,map__38283__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t38286(map__38283__$1,search_results,search_component,owner,path_fn__$1,view,p__38250,map__38285__$1,portfolio_companies,constituencies,map__38284__$1,investor_companies,selection_value,comm,selection_type,map__38282__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$894,shared,cljs.core.constant$keyword$897,document.getElementById(elem_id)], null));
});
