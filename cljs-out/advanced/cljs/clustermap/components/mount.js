// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.components.mount');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.mount.make_sequential = (function make_sequential(v){if((v == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_(v))
{return v;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);

}
}
});
clustermap.components.mount.extract_paths_STAR_ = (function extract_paths_STAR_(path,paths,cursor){var _STAR_read_enabled_STAR_40313 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
if(cljs.core.truth_((function (){var and__3546__auto__ = path;if(cljs.core.truth_(and__3546__auto__))
{return paths;
} else
{return and__3546__auto__;
}
})()))
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["can't give both :path and :paths : ",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$946,path,cljs.core.constant$keyword$1168,paths], null)], 0)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$946,path,cljs.core.constant$keyword$1168,paths], null));
} else
{if(cljs.core.truth_(path))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path));
} else
{if((paths == null))
{return cursor;
} else
{if(cljs.core.sequential_QMARK_(paths))
{var iter__4283__auto__ = ((function (_STAR_read_enabled_STAR_40313){
return (function iter__40314(s__40315){return (new cljs.core.LazySeq(null,((function (_STAR_read_enabled_STAR_40313){
return (function (){var s__40315__$1 = s__40315;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40315__$1);if(temp__4126__auto__)
{var s__40315__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40315__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__40315__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__40317 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__40316 = (0);while(true){
if((i__40316 < size__4282__auto__))
{var path__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__40316);cljs.core.chunk_append(b__40317,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1)));
{
var G__40326 = (i__40316 + (1));
i__40316 = G__40326;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40317),iter__40314(cljs.core.chunk_rest(s__40315__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40317),null);
}
} else
{var path__$1 = cljs.core.first(s__40315__$2);return cljs.core.cons(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1)),iter__40314(cljs.core.rest(s__40315__$2)));
}
} else
{return null;
}
break;
}
});})(_STAR_read_enabled_STAR_40313))
,null,null));
});})(_STAR_read_enabled_STAR_40313))
;return iter__4283__auto__(paths);
} else
{if(cljs.core.map_QMARK_(paths))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (_STAR_read_enabled_STAR_40313){
return (function iter__40318(s__40319){return (new cljs.core.LazySeq(null,((function (_STAR_read_enabled_STAR_40313){
return (function (){var s__40319__$1 = s__40319;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40319__$1);if(temp__4126__auto__)
{var s__40319__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40319__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__40319__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__40321 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__40320 = (0);while(true){
if((i__40320 < size__4282__auto__))
{var vec__40324 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__40320);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40324,(0),null);var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40324,(1),null);cljs.core.chunk_append(b__40321,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1))], null));
{
var G__40327 = (i__40320 + (1));
i__40320 = G__40327;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40321),iter__40318(cljs.core.chunk_rest(s__40319__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40321),null);
}
} else
{var vec__40325 = cljs.core.first(s__40319__$2);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40325,(0),null);var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40325,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1))], null),iter__40318(cljs.core.rest(s__40319__$2)));
}
} else
{return null;
}
break;
}
});})(_STAR_read_enabled_STAR_40313))
,null,null));
});})(_STAR_read_enabled_STAR_40313))
;return iter__4283__auto__(paths);
})());
} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["what are those paths ? :",paths], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1168,paths], null));

}
}
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_40313;
}});
clustermap.components.mount.extract_paths = (function extract_paths(cname,path,paths,cursor){var x = clustermap.components.mount.extract_paths_STAR_(path,paths,cursor);if(cljs.core.truth_(x))
{return x;
} else
{console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WARNING: nil cursor",cname,path,paths], null)));
return null;

}
});
/**
* mount a component, with some decoration
* - target : may be an element-id (keyword or string) or an element
* - path | paths : extract a single path or multiple paths from the root cursor
* to bind in the component
* @param {...*} var_args
*/
clustermap.components.mount.mount = (function() { 
var mount__delegate = function (cname,f,value,p__40328){var map__40330 = p__40328;var map__40330__$1 = ((cljs.core.seq_QMARK_(map__40330))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40330):map__40330);var options = map__40330__$1;var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40330__$1,cljs.core.constant$keyword$1168);var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40330__$1,cljs.core.constant$keyword$946);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40330__$1,cljs.core.constant$keyword$974);var target__$1 = (((typeof target === 'string') || ((target instanceof cljs.core.Keyword)))?document.getElementById(cljs.core.name(target)):target);var cursor_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.mount.extract_paths,cname,path,paths);var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$946,cljs.core.array_seq([cljs.core.constant$keyword$1168], 0)),cljs.core.constant$keyword$974,target__$1),cljs.core.constant$keyword$963,cursor_fn);return om.core.root(f,value,options__$1);
};
var mount = function (cname,f,value,var_args){
var p__40328 = null;if (arguments.length > 3) {
  p__40328 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return mount__delegate.call(this,cname,f,value,p__40328);};
mount.cljs$lang$maxFixedArity = 3;
mount.cljs$lang$applyTo = (function (arglist__40331){
var cname = cljs.core.first(arglist__40331);
arglist__40331 = cljs.core.next(arglist__40331);
var f = cljs.core.first(arglist__40331);
arglist__40331 = cljs.core.next(arglist__40331);
var value = cljs.core.first(arglist__40331);
var p__40328 = cljs.core.rest(arglist__40331);
return mount__delegate(cname,f,value,p__40328);
});
mount.cljs$core$IFn$_invoke$arity$variadic = mount__delegate;
return mount;
})()
;
