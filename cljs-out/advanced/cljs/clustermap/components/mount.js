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
clustermap.components.mount.extract_paths_STAR_ = (function extract_paths_STAR_(path,paths,cursor){var _STAR_read_enabled_STAR_44424 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
if(cljs.core.truth_((function (){var and__3546__auto__ = path;if(cljs.core.truth_(and__3546__auto__))
{return paths;
} else
{return and__3546__auto__;
}
})()))
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["can't give both :path and :paths : ",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1195,path,cljs.core.constant$keyword$1225,paths], null)], 0)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1195,path,cljs.core.constant$keyword$1225,paths], null));
} else
{if(cljs.core.truth_(path))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path));
} else
{if((paths == null))
{return cursor;
} else
{if(cljs.core.sequential_QMARK_(paths))
{var iter__4283__auto__ = ((function (_STAR_read_enabled_STAR_44424){
return (function iter__44425(s__44426){return (new cljs.core.LazySeq(null,((function (_STAR_read_enabled_STAR_44424){
return (function (){var s__44426__$1 = s__44426;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44426__$1);if(temp__4126__auto__)
{var s__44426__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44426__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__44426__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__44428 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__44427 = (0);while(true){
if((i__44427 < size__4282__auto__))
{var path__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__44427);cljs.core.chunk_append(b__44428,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1)));
{
var G__44437 = (i__44427 + (1));
i__44427 = G__44437;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44428),iter__44425(cljs.core.chunk_rest(s__44426__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44428),null);
}
} else
{var path__$1 = cljs.core.first(s__44426__$2);return cljs.core.cons(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1)),iter__44425(cljs.core.rest(s__44426__$2)));
}
} else
{return null;
}
break;
}
});})(_STAR_read_enabled_STAR_44424))
,null,null));
});})(_STAR_read_enabled_STAR_44424))
;return iter__4283__auto__(paths);
} else
{if(cljs.core.map_QMARK_(paths))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (_STAR_read_enabled_STAR_44424){
return (function iter__44429(s__44430){return (new cljs.core.LazySeq(null,((function (_STAR_read_enabled_STAR_44424){
return (function (){var s__44430__$1 = s__44430;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44430__$1);if(temp__4126__auto__)
{var s__44430__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44430__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__44430__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__44432 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__44431 = (0);while(true){
if((i__44431 < size__4282__auto__))
{var vec__44435 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__44431);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44435,(0),null);var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44435,(1),null);cljs.core.chunk_append(b__44432,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1))], null));
{
var G__44438 = (i__44431 + (1));
i__44431 = G__44438;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44432),iter__44429(cljs.core.chunk_rest(s__44430__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44432),null);
}
} else
{var vec__44436 = cljs.core.first(s__44430__$2);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44436,(0),null);var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44436,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1))], null),iter__44429(cljs.core.rest(s__44430__$2)));
}
} else
{return null;
}
break;
}
});})(_STAR_read_enabled_STAR_44424))
,null,null));
});})(_STAR_read_enabled_STAR_44424))
;return iter__4283__auto__(paths);
})());
} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["what are those paths ? :",paths], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1225,paths], null));

}
}
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_44424;
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
var mount__delegate = function (cname,f,value,p__44439){var map__44441 = p__44439;var map__44441__$1 = ((cljs.core.seq_QMARK_(map__44441))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44441):map__44441);var options = map__44441__$1;var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44441__$1,cljs.core.constant$keyword$1225);var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44441__$1,cljs.core.constant$keyword$1195);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44441__$1,cljs.core.constant$keyword$1224);var target__$1 = (((typeof target === 'string') || ((target instanceof cljs.core.Keyword)))?document.getElementById(cljs.core.name(target)):target);var cursor_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.mount.extract_paths,cname,path,paths);var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$1195,cljs.core.array_seq([cljs.core.constant$keyword$1225], 0)),cljs.core.constant$keyword$1224,target__$1),cljs.core.constant$keyword$1213,cursor_fn);return om.core.root(f,value,options__$1);
};
var mount = function (cname,f,value,var_args){
var p__44439 = null;if (arguments.length > 3) {
  p__44439 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return mount__delegate.call(this,cname,f,value,p__44439);};
mount.cljs$lang$maxFixedArity = 3;
mount.cljs$lang$applyTo = (function (arglist__44442){
var cname = cljs.core.first(arglist__44442);
arglist__44442 = cljs.core.next(arglist__44442);
var f = cljs.core.first(arglist__44442);
arglist__44442 = cljs.core.next(arglist__44442);
var value = cljs.core.first(arglist__44442);
var p__44439 = cljs.core.rest(arglist__44442);
return mount__delegate(cname,f,value,p__44439);
});
mount.cljs$core$IFn$_invoke$arity$variadic = mount__delegate;
return mount;
})()
;
/**
* @param {...*} var_args
*/
clustermap.components.mount.unmount = (function() { 
var unmount__delegate = function (p__44443){var map__44445 = p__44443;var map__44445__$1 = ((cljs.core.seq_QMARK_(map__44445))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44445):map__44445);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44445__$1,cljs.core.constant$keyword$1224);var target__$1 = (((typeof target === 'string') || ((target instanceof cljs.core.Keyword)))?document.getElementById(cljs.core.name(target)):target);return om.core.detach_root(target__$1);
};
var unmount = function (var_args){
var p__44443 = null;if (arguments.length > 0) {
  p__44443 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return unmount__delegate.call(this,p__44443);};
unmount.cljs$lang$maxFixedArity = 0;
unmount.cljs$lang$applyTo = (function (arglist__44446){
var p__44443 = cljs.core.seq(arglist__44446);
return unmount__delegate(p__44443);
});
unmount.cljs$core$IFn$_invoke$arity$variadic = unmount__delegate;
return unmount;
})()
;
