// Compiled by ClojureScript 0.0-2138
goog.provide('secretary.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
secretary.core._STAR_routes_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
secretary.core.slash = /\//;
secretary.core.param_QMARK_ = (function param_QMARK_(r){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(r),":");
});
secretary.core.component_matches_QMARK_ = (function component_matches_QMARK_(r,u){return (secretary.core.param_QMARK_(r)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,u));
});
secretary.core.extract_component = (function extract_component(r,u){if(secretary.core.param_QMARK_(r))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(r,1)),u], true, false);
} else
{return null;
}
});
secretary.core.exact_match_QMARK_ = (function exact_match_QMARK_(r,u){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,u);
});
/**
* A predicate to determine if a route matches a URI path.
*/
secretary.core.route_matches_QMARK_ = (function route_matches_QMARK_(route,uri_path){var r = clojure.string.split.cljs$core$IFn$_invoke$arity$2(route,secretary.core.slash);var u = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uri_path,secretary.core.slash);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(r),cljs.core.count(u)))
{return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__25569_SHARP_,p2__25570_SHARP_){return secretary.core.component_matches_QMARK_(p1__25569_SHARP_,p2__25570_SHARP_);
}),r,u));
} else
{return null;
}
});
/**
* Determines if there are any routes that match a given URI path.
*/
secretary.core.any_matches_QMARK_ = (function any_matches_QMARK_(uri_path){return cljs.core.some((function (p1__25571_SHARP_){return secretary.core.route_matches_QMARK_(cljs.core.first(p1__25571_SHARP_),uri_path);
}),cljs.core.deref(secretary.core._STAR_routes_STAR_));
});
/**
* Extract the match data from the URI path into a hash map
*/
secretary.core.extract_components = (function extract_components(route,uri_path){if(cljs.core.truth_(secretary.core.route_matches_QMARK_(route,uri_path)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,(function (){var iter__4117__auto__ = (function iter__25576(s__25577){return (new cljs.core.LazySeq(null,(function (){var s__25577__$1 = s__25577;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25577__$1);if(temp__4092__auto__)
{var s__25577__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25577__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25577__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25579 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25578 = 0;while(true){
if((i__25578 < size__4116__auto__))
{var z = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25578);var c = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(secretary.core.extract_component,z);if(!((c == null)))
{cljs.core.chunk_append(b__25579,c);
{
var G__25580 = (i__25578 + 1);
i__25578 = G__25580;
continue;
}
} else
{{
var G__25581 = (i__25578 + 1);
i__25578 = G__25581;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25579),iter__25576(cljs.core.chunk_rest(s__25577__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25579),null);
}
} else
{var z = cljs.core.first(s__25577__$2);var c = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(secretary.core.extract_component,z);if(!((c == null)))
{return cljs.core.cons(c,iter__25576(cljs.core.rest(s__25577__$2)));
} else
{{
var G__25582 = cljs.core.rest(s__25577__$2);
s__25577__$1 = G__25582;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(cljs.core.zipmap(clojure.string.split.cljs$core$IFn$_invoke$arity$2(route,secretary.core.slash),clojure.string.split.cljs$core$IFn$_invoke$arity$2(uri_path,secretary.core.slash)));
})());
} else
{return null;
}
});
secretary.core.filter_routes = (function filter_routes(f,uri_path){return cljs.core.filter((function (p1__25583_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__25583_SHARP_),uri_path) : f.call(null,cljs.core.first(p1__25583_SHARP_),uri_path));
}),cljs.core.deref(secretary.core._STAR_routes_STAR_));
});
/**
* Dispatch an action for a given route if it matches the URI path
*/
secretary.core.dispatch_BANG_ = (function dispatch_BANG_(uri_path){var temp__4090__auto__ = cljs.core.first(secretary.core.filter_routes(secretary.core.exact_match_QMARK_,uri_path));if(cljs.core.truth_(temp__4090__auto__))
{var vec__25586 = temp__4090__auto__;var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25586,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25586,1,null);return (action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : action.call(null,cljs.core.PersistentArrayMap.EMPTY));
} else
{var temp__4092__auto__ = cljs.core.seq(secretary.core.filter_routes(secretary.core.route_matches_QMARK_,uri_path));if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__25587 = cljs.core.first(xs__4579__auto__);var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25587,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25587,1,null);return (action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(secretary.core.extract_components(route,uri_path)) : action.call(null,secretary.core.extract_components(route,uri_path)));
} else
{return null;
}
}
});
