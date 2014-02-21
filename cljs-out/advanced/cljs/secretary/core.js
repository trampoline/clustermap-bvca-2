// Compiled by ClojureScript 0.0-2138
goog.provide('secretary.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
secretary.core._STAR_config_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$399,""], null));
secretary.core._STAR_routes_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
secretary.core.slash = /\//;
/**
* Gets a value for *config* at path.
*/
secretary.core.get_config = (function get_config(path){var path__$1 = ((cljs.core.sequential_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(secretary.core._STAR_config_STAR_),path__$1);
});
/**
* Associates a value val for *config* at path.
*/
secretary.core.set_config_BANG_ = (function set_config_BANG_(path,val){var path__$1 = ((cljs.core.sequential_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_config_STAR_,cljs.core.assoc_in,path__$1,val);
});
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
{return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__26979_SHARP_,p2__26980_SHARP_){return secretary.core.component_matches_QMARK_(p1__26979_SHARP_,p2__26980_SHARP_);
}),r,u));
} else
{return null;
}
});
secretary.core.filter_routes = (function filter_routes(pred,uri_path){return cljs.core.filter((function (p1__26981_SHARP_){return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__26981_SHARP_),uri_path) : pred.call(null,cljs.core.first(p1__26981_SHARP_),uri_path));
}),cljs.core.deref(secretary.core._STAR_routes_STAR_));
});
/**
* Turns a map of query parameters into url encoded string.
*/
secretary.core.encode_query_params = (function encode_query_params(query_params){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26984){var vec__26985 = p__26984;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26985,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26985,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(encodeURIComponent([cljs.core.str(v)].join('')))].join('');
}),query_params));
});
/**
* Extract a map of query parameters from a query string.
*/
secretary.core.decode_query_params = (function decode_query_params(query_string){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,param){var vec__26987 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(param,/=/,2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26987,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26987,1,null);var v__$1 = decodeURIComponent(v);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v__$1);
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(query_string,/&/));
});
secretary.core.parse_query_params = secretary.core.decode_query_params;
/**
* Extract the match data from the URI path into a hash map
*/
secretary.core.extract_components = (function extract_components(route,uri_path){if(cljs.core.truth_(secretary.core.route_matches_QMARK_(route,uri_path)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,(function (){var iter__4117__auto__ = (function iter__26992(s__26993){return (new cljs.core.LazySeq(null,(function (){var s__26993__$1 = s__26993;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26993__$1);if(temp__4092__auto__)
{var s__26993__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26993__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26993__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26995 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26994 = 0;while(true){
if((i__26994 < size__4116__auto__))
{var z = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26994);var c = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(secretary.core.extract_component,z);if(!((c == null)))
{cljs.core.chunk_append(b__26995,c);
{
var G__26996 = (i__26994 + 1);
i__26994 = G__26996;
continue;
}
} else
{{
var G__26997 = (i__26994 + 1);
i__26994 = G__26997;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26995),iter__26992(cljs.core.chunk_rest(s__26993__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26995),null);
}
} else
{var z = cljs.core.first(s__26993__$2);var c = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(secretary.core.extract_component,z);if(!((c == null)))
{return cljs.core.cons(c,iter__26992(cljs.core.rest(s__26993__$2)));
} else
{{
var G__26998 = cljs.core.rest(s__26993__$2);
s__26993__$1 = G__26998;
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
secretary.core.parse_action = (function parse_action(uri_path){var temp__4090__auto__ = cljs.core.first(secretary.core.filter_routes(secretary.core.exact_match_QMARK_,uri_path));if(cljs.core.truth_(temp__4090__auto__))
{var vec__27001 = temp__4090__auto__;var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27001,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27001,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,cljs.core.PersistentArrayMap.EMPTY], null);
} else
{var temp__4092__auto__ = cljs.core.seq(secretary.core.filter_routes(secretary.core.route_matches_QMARK_,uri_path));if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__27002 = cljs.core.first(xs__4579__auto__);var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27002,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27002,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,secretary.core.extract_components(route,uri_path)], null);
} else
{return null;
}
}
});
/**
* Dispatch an action for a given route if it matches the URI path
*/
secretary.core.dispatch_BANG_ = (function dispatch_BANG_(uri){var vec__27005 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uri,/\?/);var uri_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27005,0,null);var query_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27005,1,null);var query_params = (cljs.core.truth_(query_string)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$400,secretary.core.decode_query_params(query_string)], null):null);var vec__27006 = secretary.core.parse_action(uri_path);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27006,0,null);var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27006,1,null);var action__$1 = (function (){var or__3406__auto__ = action;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.identity;
}
})();var params__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params,query_params], 0));return (action__$1.cljs$core$IFn$_invoke$arity$1 ? action__$1.cljs$core$IFn$_invoke$arity$1(params__$1) : action__$1.call(null,params__$1));
});
secretary.core.render_route = (function() {
var render_route = null;
var render_route__1 = (function (route){return render_route.cljs$core$IFn$_invoke$arity$2(route,cljs.core.PersistentArrayMap.EMPTY);
});
var render_route__2 = (function (route,p__27007){var map__27009 = p__27007;var map__27009__$1 = ((cljs.core.seq_QMARK_(map__27009))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27009):map__27009);var m = map__27009__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27009__$1,cljs.core.constant$keyword$400);var path = route.replace((new RegExp(":[^/]+","g")),(function ($1){var lookup = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2($1,1));return (m.cljs$core$IFn$_invoke$arity$2 ? m.cljs$core$IFn$_invoke$arity$2(lookup,$1) : m.call(null,lookup,$1));
}));var path__$1 = [cljs.core.str(secretary.core.get_config(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$399], null))),cljs.core.str(path)].join('');var temp__4090__auto__ = (function (){var and__3394__auto__ = query_params;if(cljs.core.truth_(and__3394__auto__))
{return secretary.core.encode_query_params(query_params);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var query_string = temp__4090__auto__;return [cljs.core.str(path__$1),cljs.core.str("?"),cljs.core.str(query_string)].join('');
} else
{return path__$1;
}
});
var render_route__3 = (function (route,params,opts){return render_route.cljs$core$IFn$_invoke$arity$2(route,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params,opts], 0)));
});
render_route = function(route,params,opts){
switch(arguments.length){
case 1:
return render_route__1.call(this,route);
case 2:
return render_route__2.call(this,route,params);
case 3:
return render_route__3.call(this,route,params,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_route.cljs$core$IFn$_invoke$arity$1 = render_route__1;
render_route.cljs$core$IFn$_invoke$arity$2 = render_route__2;
render_route.cljs$core$IFn$_invoke$arity$3 = render_route__3;
return render_route;
})()
;
