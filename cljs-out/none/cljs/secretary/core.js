// Compiled by ClojureScript 0.0-2138
goog.provide('secretary.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
secretary.core._STAR_config_STAR_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",4328760836),""], null));
secretary.core._STAR_routes_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
secretary.core.slash = /\//;
/**
* Gets a value for *config* at path.
*/
secretary.core.get_config = (function get_config(path){var path__$1 = ((cljs.core.sequential_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));return cljs.core.get_in.call(null,cljs.core.deref.call(null,secretary.core._STAR_config_STAR_),path__$1);
});
/**
* Associates a value val for *config* at path.
*/
secretary.core.set_config_BANG_ = (function set_config_BANG_(path,val){var path__$1 = ((cljs.core.sequential_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));return cljs.core.swap_BANG_.call(null,secretary.core._STAR_config_STAR_,cljs.core.assoc_in,path__$1,val);
});
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
{return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__16372_SHARP_,p2__16373_SHARP_){return secretary.core.component_matches_QMARK_.call(null,p1__16372_SHARP_,p2__16373_SHARP_);
}),r,u));
} else
{return null;
}
});
secretary.core.filter_routes = (function filter_routes(pred,uri_path){return cljs.core.filter.call(null,(function (p1__16374_SHARP_){return pred.call(null,cljs.core.first.call(null,p1__16374_SHARP_),uri_path);
}),cljs.core.deref.call(null,secretary.core._STAR_routes_STAR_));
});
/**
* Turns a map of query parameters into url encoded string.
*/
secretary.core.encode_query_params = (function encode_query_params(query_params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__16377){var vec__16378 = p__16377;var k = cljs.core.nth.call(null,vec__16378,0,null);var v = cljs.core.nth.call(null,vec__16378,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(encodeURIComponent([cljs.core.str(v)].join('')))].join('');
}),query_params));
});
/**
* Extract a map of query parameters from a query string.
*/
secretary.core.decode_query_params = (function decode_query_params(query_string){return cljs.core.reduce.call(null,(function (m,param){var vec__16380 = clojure.string.split.call(null,param,/=/,2);var k = cljs.core.nth.call(null,vec__16380,0,null);var v = cljs.core.nth.call(null,vec__16380,1,null);var v__$1 = decodeURIComponent(v);return cljs.core.assoc.call(null,m,k,v__$1);
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,query_string,/&/));
});
secretary.core.parse_query_params = secretary.core.decode_query_params;
/**
* Extract the match data from the URI path into a hash map
*/
secretary.core.extract_components = (function extract_components(route,uri_path){if(cljs.core.truth_(secretary.core.route_matches_QMARK_.call(null,route,uri_path)))
{return cljs.core.apply.call(null,cljs.core.merge,(function (){var iter__4117__auto__ = (function iter__16385(s__16386){return (new cljs.core.LazySeq(null,(function (){var s__16386__$1 = s__16386;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16386__$1);if(temp__4092__auto__)
{var s__16386__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16386__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16386__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16388 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16387 = 0;while(true){
if((i__16387 < size__4116__auto__))
{var z = cljs.core._nth.call(null,c__4115__auto__,i__16387);var c = cljs.core.apply.call(null,secretary.core.extract_component,z);if(!((c == null)))
{cljs.core.chunk_append.call(null,b__16388,c);
{
var G__16389 = (i__16387 + 1);
i__16387 = G__16389;
continue;
}
} else
{{
var G__16390 = (i__16387 + 1);
i__16387 = G__16390;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16388),iter__16385.call(null,cljs.core.chunk_rest.call(null,s__16386__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16388),null);
}
} else
{var z = cljs.core.first.call(null,s__16386__$2);var c = cljs.core.apply.call(null,secretary.core.extract_component,z);if(!((c == null)))
{return cljs.core.cons.call(null,c,iter__16385.call(null,cljs.core.rest.call(null,s__16386__$2)));
} else
{{
var G__16391 = cljs.core.rest.call(null,s__16386__$2);
s__16386__$1 = G__16391;
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
{var vec__16394 = temp__4090__auto__;var route = cljs.core.nth.call(null,vec__16394,0,null);var action = cljs.core.nth.call(null,vec__16394,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,cljs.core.PersistentArrayMap.EMPTY], null);
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,secretary.core.filter_routes.call(null,secretary.core.route_matches_QMARK_,uri_path));if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__16395 = cljs.core.first.call(null,xs__4579__auto__);var route = cljs.core.nth.call(null,vec__16395,0,null);var action = cljs.core.nth.call(null,vec__16395,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,secretary.core.extract_components.call(null,route,uri_path)], null);
} else
{return null;
}
}
});
/**
* Dispatch an action for a given route if it matches the URI path
*/
secretary.core.dispatch_BANG_ = (function dispatch_BANG_(uri){var vec__16398 = clojure.string.split.call(null,uri,/\?/);var uri_path = cljs.core.nth.call(null,vec__16398,0,null);var query_string = cljs.core.nth.call(null,vec__16398,1,null);var query_params = (cljs.core.truth_(query_string)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",1080249757),secretary.core.decode_query_params.call(null,query_string)], null):null);var vec__16399 = secretary.core.parse_action.call(null,uri_path);var action = cljs.core.nth.call(null,vec__16399,0,null);var params = cljs.core.nth.call(null,vec__16399,1,null);var action__$1 = (function (){var or__3406__auto__ = action;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.identity;
}
})();var params__$1 = cljs.core.merge.call(null,params,query_params);return action__$1.call(null,params__$1);
});
secretary.core.render_route = (function() {
var render_route = null;
var render_route__1 = (function (route){return render_route.call(null,route,cljs.core.PersistentArrayMap.EMPTY);
});
var render_route__2 = (function (route,p__16400){var map__16402 = p__16400;var map__16402__$1 = ((cljs.core.seq_QMARK_.call(null,map__16402))?cljs.core.apply.call(null,cljs.core.hash_map,map__16402):map__16402);var m = map__16402__$1;var query_params = cljs.core.get.call(null,map__16402__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757));var path = route.replace((new RegExp(":[^/]+","g")),(function ($1){var lookup = cljs.core.keyword.call(null,cljs.core.subs.call(null,$1,1));return m.call(null,lookup,$1);
}));var path__$1 = [cljs.core.str(secretary.core.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",4328760836)], null))),cljs.core.str(path)].join('');var temp__4090__auto__ = (function (){var and__3394__auto__ = query_params;if(cljs.core.truth_(and__3394__auto__))
{return secretary.core.encode_query_params.call(null,query_params);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var query_string = temp__4090__auto__;return [cljs.core.str(path__$1),cljs.core.str("?"),cljs.core.str(query_string)].join('');
} else
{return path__$1;
}
});
var render_route__3 = (function (route,params,opts){return render_route.call(null,route,cljs.core.merge.call(null,params,opts));
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

//# sourceMappingURL=core.js.map