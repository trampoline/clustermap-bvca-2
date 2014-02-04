// Compiled by ClojureScript 0.0-2138
goog.provide('secretary.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
secretary.core._STAR_routes_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
secretary.core.slash = /\//;
secretary.core.param_QMARK_ = (function param_QMARK_(r){return cljs.core._EQ_.call(null,cljs.core.first.call(null,r),":");
});
secretary.core.component_matches_QMARK_ = (function component_matches_QMARK_(r,u){return (secretary.core.param_QMARK_.call(null,r)) || (cljs.core._EQ_.call(null,r,u));
});
secretary.core.extract_component = (function extract_component(r,u){if(secretary.core.param_QMARK_.call(null,r))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,cljs.core.subs.call(null,r,1)),u], true, false);
} else
{return null;
}
});
secretary.core.exact_match_QMARK_ = (function exact_match_QMARK_(r,u){return cljs.core._EQ_.call(null,r,u);
});
/**
* A predicate to determine if a route matches a URI path.
*/
secretary.core.route_matches_QMARK_ = (function route_matches_QMARK_(route,uri_path){var r = clojure.string.split.call(null,route,secretary.core.slash);var u = clojure.string.split.call(null,uri_path,secretary.core.slash);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,r),cljs.core.count.call(null,u)))
{return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__36038_SHARP_,p2__36039_SHARP_){return secretary.core.component_matches_QMARK_.call(null,p1__36038_SHARP_,p2__36039_SHARP_);
}),r,u));
} else
{return null;
}
});
secretary.core.filter_routes = (function filter_routes(pred,uri_path){return cljs.core.filter.call(null,(function (p1__36040_SHARP_){return pred.call(null,cljs.core.first.call(null,p1__36040_SHARP_),uri_path);
}),cljs.core.deref.call(null,secretary.core._STAR_routes_STAR_));
});
/**
* Extract a map of query parameters from a query string.
*/
secretary.core.parse_query_params = (function parse_query_params(query_string){return cljs.core.reduce.call(null,(function (m,param){var vec__36042 = clojure.string.split.call(null,param,/=/,2);var k = cljs.core.nth.call(null,vec__36042,0,null);var v = cljs.core.nth.call(null,vec__36042,1,null);var v__$1 = decodeURIComponent(v);return cljs.core.assoc.call(null,m,k,v__$1);
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,query_string,/&/));
});
/**
* Extract the match data from the URI path into a hash map
*/
secretary.core.extract_components = (function extract_components(route,uri_path){if(cljs.core.truth_(secretary.core.route_matches_QMARK_.call(null,route,uri_path)))
{return cljs.core.apply.call(null,cljs.core.merge,(function (){var iter__4117__auto__ = (function iter__36047(s__36048){return (new cljs.core.LazySeq(null,(function (){var s__36048__$1 = s__36048;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36048__$1);if(temp__4092__auto__)
{var s__36048__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36048__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36048__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36050 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36049 = 0;while(true){
if((i__36049 < size__4116__auto__))
{var z = cljs.core._nth.call(null,c__4115__auto__,i__36049);var c = cljs.core.apply.call(null,secretary.core.extract_component,z);if(!((c == null)))
{cljs.core.chunk_append.call(null,b__36050,c);
{
var G__36051 = (i__36049 + 1);
i__36049 = G__36051;
continue;
}
} else
{{
var G__36052 = (i__36049 + 1);
i__36049 = G__36052;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36050),iter__36047.call(null,cljs.core.chunk_rest.call(null,s__36048__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36050),null);
}
} else
{var z = cljs.core.first.call(null,s__36048__$2);var c = cljs.core.apply.call(null,secretary.core.extract_component,z);if(!((c == null)))
{return cljs.core.cons.call(null,c,iter__36047.call(null,cljs.core.rest.call(null,s__36048__$2)));
} else
{{
var G__36053 = cljs.core.rest.call(null,s__36048__$2);
s__36048__$1 = G__36053;
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
});return iter__4117__auto__.call(null,cljs.core.zipmap.call(null,clojure.string.split.call(null,route,secretary.core.slash),clojure.string.split.call(null,uri_path,secretary.core.slash)));
})());
} else
{return null;
}
});
secretary.core.parse_action = (function parse_action(uri_path){var temp__4090__auto__ = cljs.core.first.call(null,secretary.core.filter_routes.call(null,secretary.core.exact_match_QMARK_,uri_path));if(cljs.core.truth_(temp__4090__auto__))
{var vec__36056 = temp__4090__auto__;var route = cljs.core.nth.call(null,vec__36056,0,null);var action = cljs.core.nth.call(null,vec__36056,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,cljs.core.PersistentArrayMap.EMPTY], null);
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,secretary.core.filter_routes.call(null,secretary.core.route_matches_QMARK_,uri_path));if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__36057 = cljs.core.first.call(null,xs__4579__auto__);var route = cljs.core.nth.call(null,vec__36057,0,null);var action = cljs.core.nth.call(null,vec__36057,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,secretary.core.extract_components.call(null,route,uri_path)], null);
} else
{return null;
}
}
});
/**
* Dispatch an action for a given route if it matches the URI path
*/
secretary.core.dispatch_BANG_ = (function dispatch_BANG_(uri){var vec__36060 = clojure.string.split.call(null,uri,/\?/);var uri_path = cljs.core.nth.call(null,vec__36060,0,null);var query_string = cljs.core.nth.call(null,vec__36060,1,null);var query_params = (cljs.core.truth_(query_string)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",1080249757),secretary.core.parse_query_params.call(null,query_string)], null):null);var vec__36061 = secretary.core.parse_action.call(null,uri_path);var action = cljs.core.nth.call(null,vec__36061,0,null);var params = cljs.core.nth.call(null,vec__36061,1,null);var params__$1 = cljs.core.merge.call(null,params,query_params);return action.call(null,params__$1);
});
