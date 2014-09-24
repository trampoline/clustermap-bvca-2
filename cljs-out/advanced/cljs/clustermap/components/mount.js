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
clustermap.components.mount.extract_paths = (function extract_paths(path,paths,cursor){var _STAR_read_enabled_STAR_38733 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
if(cljs.core.truth_((function (){var and__3546__auto__ = path;if(cljs.core.truth_(and__3546__auto__))
{return paths;
} else
{return and__3546__auto__;
}
})()))
{return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["can't give both :path and :paths : ",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$934,path,cljs.core.constant$keyword$1129,paths], null)], 0)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$934,path,cljs.core.constant$keyword$1129,paths], null));
} else
{if(cljs.core.truth_(path))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path));
} else
{if((paths == null))
{return cursor;
} else
{if(cljs.core.sequential_QMARK_(paths))
{var iter__4283__auto__ = ((function (_STAR_read_enabled_STAR_38733){
return (function iter__38734(s__38735){return (new cljs.core.LazySeq(null,((function (_STAR_read_enabled_STAR_38733){
return (function (){var s__38735__$1 = s__38735;while(true){
var temp__4126__auto__ = cljs.core.seq(s__38735__$1);if(temp__4126__auto__)
{var s__38735__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__38735__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__38735__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__38737 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__38736 = (0);while(true){
if((i__38736 < size__4282__auto__))
{var path__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__38736);cljs.core.chunk_append(b__38737,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1)));
{
var G__38746 = (i__38736 + (1));
i__38736 = G__38746;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38737),iter__38734(cljs.core.chunk_rest(s__38735__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38737),null);
}
} else
{var path__$1 = cljs.core.first(s__38735__$2);return cljs.core.cons(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1)),iter__38734(cljs.core.rest(s__38735__$2)));
}
} else
{return null;
}
break;
}
});})(_STAR_read_enabled_STAR_38733))
,null,null));
});})(_STAR_read_enabled_STAR_38733))
;return iter__4283__auto__(paths);
} else
{if(cljs.core.map_QMARK_(paths))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (_STAR_read_enabled_STAR_38733){
return (function iter__38738(s__38739){return (new cljs.core.LazySeq(null,((function (_STAR_read_enabled_STAR_38733){
return (function (){var s__38739__$1 = s__38739;while(true){
var temp__4126__auto__ = cljs.core.seq(s__38739__$1);if(temp__4126__auto__)
{var s__38739__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__38739__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__38739__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__38741 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__38740 = (0);while(true){
if((i__38740 < size__4282__auto__))
{var vec__38744 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__38740);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38744,(0),null);var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38744,(1),null);cljs.core.chunk_append(b__38741,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1))], null));
{
var G__38747 = (i__38740 + (1));
i__38740 = G__38747;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38741),iter__38738(cljs.core.chunk_rest(s__38739__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38741),null);
}
} else
{var vec__38745 = cljs.core.first(s__38739__$2);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38745,(0),null);var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38745,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1))], null),iter__38738(cljs.core.rest(s__38739__$2)));
}
} else
{return null;
}
break;
}
});})(_STAR_read_enabled_STAR_38733))
,null,null));
});})(_STAR_read_enabled_STAR_38733))
;return iter__4283__auto__(paths);
})());
} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["what are those paths ? :",paths], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1129,paths], null));

}
}
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_38733;
}});
/**
* mount a component, with some decoration
* - target : may be an element-id (keyword or string) or an element
* - path | paths : extract a single path or multiple paths from the root cursor
* to bind in the component
* @param {...*} var_args
*/
clustermap.components.mount.mount = (function() { 
var mount__delegate = function (f,value,p__38748){var map__38750 = p__38748;var map__38750__$1 = ((cljs.core.seq_QMARK_(map__38750))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38750):map__38750);var options = map__38750__$1;var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38750__$1,cljs.core.constant$keyword$1129);var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38750__$1,cljs.core.constant$keyword$934);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38750__$1,cljs.core.constant$keyword$962);var target__$1 = (((typeof target === 'string') || ((target instanceof cljs.core.Keyword)))?document.getElementById(cljs.core.name(target)):target);var cursor_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.components.mount.extract_paths,path,paths);var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$934,cljs.core.array_seq([cljs.core.constant$keyword$1129], 0)),cljs.core.constant$keyword$962,target__$1),cljs.core.constant$keyword$951,cursor_fn);return om.core.root(f,value,options__$1);
};
var mount = function (f,value,var_args){
var p__38748 = null;if (arguments.length > 2) {
  p__38748 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return mount__delegate.call(this,f,value,p__38748);};
mount.cljs$lang$maxFixedArity = 2;
mount.cljs$lang$applyTo = (function (arglist__38751){
var f = cljs.core.first(arglist__38751);
arglist__38751 = cljs.core.next(arglist__38751);
var value = cljs.core.first(arglist__38751);
var p__38748 = cljs.core.rest(arglist__38751);
return mount__delegate(f,value,p__38748);
});
mount.cljs$core$IFn$_invoke$arity$variadic = mount__delegate;
return mount;
})()
;
