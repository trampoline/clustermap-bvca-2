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
clustermap.components.mount.extract_paths_STAR_ = (function extract_paths_STAR_(path,paths,cursor){var _STAR_read_enabled_STAR_47064 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
if(cljs.core.truth_((function (){var and__3546__auto__ = path;if(cljs.core.truth_(and__3546__auto__))
{return paths;
} else
{return and__3546__auto__;
}
})()))
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["can't give both :path and :paths : ",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1177,path,cljs.core.constant$keyword$1512,paths], null)], 0)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1177,path,cljs.core.constant$keyword$1512,paths], null));
} else
{if(cljs.core.truth_(path))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path));
} else
{if((paths == null))
{return cursor;
} else
{if(cljs.core.sequential_QMARK_(paths))
{var iter__4283__auto__ = ((function (_STAR_read_enabled_STAR_47064){
return (function iter__47065(s__47066){return (new cljs.core.LazySeq(null,((function (_STAR_read_enabled_STAR_47064){
return (function (){var s__47066__$1 = s__47066;while(true){
var temp__4126__auto__ = cljs.core.seq(s__47066__$1);if(temp__4126__auto__)
{var s__47066__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__47066__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__47066__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__47068 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__47067 = (0);while(true){
if((i__47067 < size__4282__auto__))
{var path__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__47067);cljs.core.chunk_append(b__47068,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1)));
{
var G__47077 = (i__47067 + (1));
i__47067 = G__47077;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__47068),iter__47065(cljs.core.chunk_rest(s__47066__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__47068),null);
}
} else
{var path__$1 = cljs.core.first(s__47066__$2);return cljs.core.cons(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1)),iter__47065(cljs.core.rest(s__47066__$2)));
}
} else
{return null;
}
break;
}
});})(_STAR_read_enabled_STAR_47064))
,null,null));
});})(_STAR_read_enabled_STAR_47064))
;return iter__4283__auto__(paths);
} else
{if(cljs.core.map_QMARK_(paths))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (_STAR_read_enabled_STAR_47064){
return (function iter__47069(s__47070){return (new cljs.core.LazySeq(null,((function (_STAR_read_enabled_STAR_47064){
return (function (){var s__47070__$1 = s__47070;while(true){
var temp__4126__auto__ = cljs.core.seq(s__47070__$1);if(temp__4126__auto__)
{var s__47070__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__47070__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__47070__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__47072 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__47071 = (0);while(true){
if((i__47071 < size__4282__auto__))
{var vec__47075 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__47071);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47075,(0),null);var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47075,(1),null);cljs.core.chunk_append(b__47072,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1))], null));
{
var G__47078 = (i__47071 + (1));
i__47071 = G__47078;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__47072),iter__47069(cljs.core.chunk_rest(s__47070__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__47072),null);
}
} else
{var vec__47076 = cljs.core.first(s__47070__$2);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47076,(0),null);var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47076,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1))], null),iter__47069(cljs.core.rest(s__47070__$2)));
}
} else
{return null;
}
break;
}
});})(_STAR_read_enabled_STAR_47064))
,null,null));
});})(_STAR_read_enabled_STAR_47064))
;return iter__4283__auto__(paths);
})());
} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["what are those paths ? :",paths], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1512,paths], null));

}
}
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_47064;
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
var mount__delegate = function (cname,f,value,p__47079){var map__47081 = p__47079;var map__47081__$1 = ((cljs.core.seq_QMARK_(map__47081))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47081):map__47081);var options = map__47081__$1;var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47081__$1,cljs.core.constant$keyword$1512);var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47081__$1,cljs.core.constant$keyword$1177);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47081__$1,cljs.core.constant$keyword$1205);var target__$1 = (((typeof target === 'string') || ((target instanceof cljs.core.Keyword)))?document.getElementById(cljs.core.name(target)):target);var cursor_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.mount.extract_paths,cname,path,paths);var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$1177,cljs.core.array_seq([cljs.core.constant$keyword$1512], 0)),cljs.core.constant$keyword$1205,target__$1),cljs.core.constant$keyword$1195,cursor_fn);return om.core.root(f,value,options__$1);
};
var mount = function (cname,f,value,var_args){
var p__47079 = null;if (arguments.length > 3) {
  p__47079 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return mount__delegate.call(this,cname,f,value,p__47079);};
mount.cljs$lang$maxFixedArity = 3;
mount.cljs$lang$applyTo = (function (arglist__47082){
var cname = cljs.core.first(arglist__47082);
arglist__47082 = cljs.core.next(arglist__47082);
var f = cljs.core.first(arglist__47082);
arglist__47082 = cljs.core.next(arglist__47082);
var value = cljs.core.first(arglist__47082);
var p__47079 = cljs.core.rest(arglist__47082);
return mount__delegate(cname,f,value,p__47079);
});
mount.cljs$core$IFn$_invoke$arity$variadic = mount__delegate;
return mount;
})()
;
/**
* @param {...*} var_args
*/
clustermap.components.mount.unmount = (function() { 
var unmount__delegate = function (p__47083){var map__47085 = p__47083;var map__47085__$1 = ((cljs.core.seq_QMARK_(map__47085))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47085):map__47085);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47085__$1,cljs.core.constant$keyword$1205);var target__$1 = (((typeof target === 'string') || ((target instanceof cljs.core.Keyword)))?document.getElementById(cljs.core.name(target)):target);return om.core.detach_root(target__$1);
};
var unmount = function (var_args){
var p__47083 = null;if (arguments.length > 0) {
  p__47083 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return unmount__delegate.call(this,p__47083);};
unmount.cljs$lang$maxFixedArity = 0;
unmount.cljs$lang$applyTo = (function (arglist__47086){
var p__47083 = cljs.core.seq(arglist__47086);
return unmount__delegate(p__47083);
});
unmount.cljs$core$IFn$_invoke$arity$variadic = unmount__delegate;
return unmount;
})()
;
