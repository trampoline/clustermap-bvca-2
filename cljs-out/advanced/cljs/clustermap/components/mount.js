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
clustermap.components.mount.extract_paths = (function extract_paths(path,paths,cursor){var _STAR_read_enabled_STAR_38661 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
if(cljs.core.truth_((function (){var and__3546__auto__ = path;if(cljs.core.truth_(and__3546__auto__))
{return paths;
} else
{return and__3546__auto__;
}
})()))
{return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["can't give both :path and :paths : ",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$925,path,cljs.core.constant$keyword$1117,paths], null)], 0)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$925,path,cljs.core.constant$keyword$1117,paths], null));
} else
{if(cljs.core.truth_(path))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path));
} else
{if((paths == null))
{return cursor;
} else
{if(cljs.core.sequential_QMARK_(paths))
{var iter__4283__auto__ = ((function (_STAR_read_enabled_STAR_38661){
return (function iter__38662(s__38663){return (new cljs.core.LazySeq(null,((function (_STAR_read_enabled_STAR_38661){
return (function (){var s__38663__$1 = s__38663;while(true){
var temp__4126__auto__ = cljs.core.seq(s__38663__$1);if(temp__4126__auto__)
{var s__38663__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__38663__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__38663__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__38665 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__38664 = (0);while(true){
if((i__38664 < size__4282__auto__))
{var path__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__38664);cljs.core.chunk_append(b__38665,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1)));
{
var G__38674 = (i__38664 + (1));
i__38664 = G__38674;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38665),iter__38662(cljs.core.chunk_rest(s__38663__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38665),null);
}
} else
{var path__$1 = cljs.core.first(s__38663__$2);return cljs.core.cons(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1)),iter__38662(cljs.core.rest(s__38663__$2)));
}
} else
{return null;
}
break;
}
});})(_STAR_read_enabled_STAR_38661))
,null,null));
});})(_STAR_read_enabled_STAR_38661))
;return iter__4283__auto__(paths);
} else
{if(cljs.core.map_QMARK_(paths))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (_STAR_read_enabled_STAR_38661){
return (function iter__38666(s__38667){return (new cljs.core.LazySeq(null,((function (_STAR_read_enabled_STAR_38661){
return (function (){var s__38667__$1 = s__38667;while(true){
var temp__4126__auto__ = cljs.core.seq(s__38667__$1);if(temp__4126__auto__)
{var s__38667__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__38667__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__38667__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__38669 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__38668 = (0);while(true){
if((i__38668 < size__4282__auto__))
{var vec__38672 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__38668);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38672,(0),null);var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38672,(1),null);cljs.core.chunk_append(b__38669,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1))], null));
{
var G__38675 = (i__38668 + (1));
i__38668 = G__38675;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38669),iter__38666(cljs.core.chunk_rest(s__38667__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38669),null);
}
} else
{var vec__38673 = cljs.core.first(s__38667__$2);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38673,(0),null);var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38673,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1))], null),iter__38666(cljs.core.rest(s__38667__$2)));
}
} else
{return null;
}
break;
}
});})(_STAR_read_enabled_STAR_38661))
,null,null));
});})(_STAR_read_enabled_STAR_38661))
;return iter__4283__auto__(paths);
})());
} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["what are those paths ? :",paths], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1117,paths], null));

}
}
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_38661;
}});
/**
* mount a component, with some decoration
* - target : may be an element-id (keyword or string) or an element
* - path | paths : extract a single path or multiple paths from the root cursor
* to bind in the component
* @param {...*} var_args
*/
clustermap.components.mount.mount = (function() { 
var mount__delegate = function (f,value,p__38676){var map__38678 = p__38676;var map__38678__$1 = ((cljs.core.seq_QMARK_(map__38678))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38678):map__38678);var options = map__38678__$1;var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38678__$1,cljs.core.constant$keyword$1117);var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38678__$1,cljs.core.constant$keyword$925);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38678__$1,cljs.core.constant$keyword$953);var target__$1 = (((typeof target === 'string') || ((target instanceof cljs.core.Keyword)))?document.getElementById(cljs.core.name(target)):target);var cursor_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.components.mount.extract_paths,path,paths);var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$925,cljs.core.array_seq([cljs.core.constant$keyword$1117], 0)),cljs.core.constant$keyword$953,target__$1),cljs.core.constant$keyword$942,cursor_fn);return om.core.root(f,value,options__$1);
};
var mount = function (f,value,var_args){
var p__38676 = null;if (arguments.length > 2) {
  p__38676 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return mount__delegate.call(this,f,value,p__38676);};
mount.cljs$lang$maxFixedArity = 2;
mount.cljs$lang$applyTo = (function (arglist__38679){
var f = cljs.core.first(arglist__38679);
arglist__38679 = cljs.core.next(arglist__38679);
var value = cljs.core.first(arglist__38679);
var p__38676 = cljs.core.rest(arglist__38679);
return mount__delegate(f,value,p__38676);
});
mount.cljs$core$IFn$_invoke$arity$variadic = mount__delegate;
return mount;
})()
;
