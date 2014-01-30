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
{return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__35736_SHARP_,p2__35737_SHARP_){return secretary.core.component_matches_QMARK_.call(null,p1__35736_SHARP_,p2__35737_SHARP_);
}),r,u));
} else
{return null;
}
});
/**
* Determines if there are any routes that match a given URI path.
*/
secretary.core.any_matches_QMARK_ = (function any_matches_QMARK_(uri_path){return cljs.core.some.call(null,(function (p1__35738_SHARP_){return secretary.core.route_matches_QMARK_.call(null,cljs.core.first.call(null,p1__35738_SHARP_),uri_path);
}),cljs.core.deref.call(null,secretary.core._STAR_routes_STAR_));
});
/**
* Extract the match data from the URI path into a hash map
*/
secretary.core.extract_components = (function extract_components(route,uri_path){if(cljs.core.truth_(secretary.core.route_matches_QMARK_.call(null,route,uri_path)))
{return cljs.core.apply.call(null,cljs.core.merge,(function (){var iter__4117__auto__ = (function iter__35743(s__35744){return (new cljs.core.LazySeq(null,(function (){var s__35744__$1 = s__35744;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35744__$1);if(temp__4092__auto__)
{var s__35744__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35744__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__35744__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__35746 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__35745 = 0;while(true){
if((i__35745 < size__4116__auto__))
{var z = cljs.core._nth.call(null,c__4115__auto__,i__35745);var c = cljs.core.apply.call(null,secretary.core.extract_component,z);if(!((c == null)))
{cljs.core.chunk_append.call(null,b__35746,c);
{
var G__35747 = (i__35745 + 1);
i__35745 = G__35747;
continue;
}
} else
{{
var G__35748 = (i__35745 + 1);
i__35745 = G__35748;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35746),iter__35743.call(null,cljs.core.chunk_rest.call(null,s__35744__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35746),null);
}
} else
{var z = cljs.core.first.call(null,s__35744__$2);var c = cljs.core.apply.call(null,secretary.core.extract_component,z);if(!((c == null)))
{return cljs.core.cons.call(null,c,iter__35743.call(null,cljs.core.rest.call(null,s__35744__$2)));
} else
{{
var G__35749 = cljs.core.rest.call(null,s__35744__$2);
s__35744__$1 = G__35749;
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
secretary.core.filter_routes = (function filter_routes(f,uri_path){return cljs.core.filter.call(null,(function (p1__35750_SHARP_){return f.call(null,cljs.core.first.call(null,p1__35750_SHARP_),uri_path);
}),cljs.core.deref.call(null,secretary.core._STAR_routes_STAR_));
});
/**
* Dispatch an action for a given route if it matches the URI path
*/
secretary.core.dispatch_BANG_ = (function dispatch_BANG_(uri_path){var temp__4090__auto__ = cljs.core.first.call(null,secretary.core.filter_routes.call(null,secretary.core.exact_match_QMARK_,uri_path));if(cljs.core.truth_(temp__4090__auto__))
{var vec__35753 = temp__4090__auto__;var route = cljs.core.nth.call(null,vec__35753,0,null);var action = cljs.core.nth.call(null,vec__35753,1,null);return action.call(null,cljs.core.PersistentArrayMap.EMPTY);
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,secretary.core.filter_routes.call(null,secretary.core.route_matches_QMARK_,uri_path));if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__35754 = cljs.core.first.call(null,xs__4579__auto__);var route = cljs.core.nth.call(null,vec__35754,0,null);var action = cljs.core.nth.call(null,vec__35754,1,null);return action.call(null,secretary.core.extract_components.call(null,route,uri_path));
} else
{return null;
}
}
});
