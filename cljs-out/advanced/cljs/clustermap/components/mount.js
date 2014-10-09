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
clustermap.components.mount.extract_paths_STAR_ = (function extract_paths_STAR_(path,paths,cursor){var _STAR_read_enabled_STAR_46500 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
if(cljs.core.truth_((function (){var and__3546__auto__ = path;if(cljs.core.truth_(and__3546__auto__))
{return paths;
} else
{return and__3546__auto__;
}
})()))
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["can't give both :path and :paths : ",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1019,path,cljs.core.constant$keyword$1269,paths], null)], 0)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1019,path,cljs.core.constant$keyword$1269,paths], null));
} else
{if(cljs.core.truth_(path))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path));
} else
{if((paths == null))
{return cursor;
} else
{if(cljs.core.sequential_QMARK_(paths))
{var iter__4283__auto__ = ((function (_STAR_read_enabled_STAR_46500){
return (function iter__46501(s__46502){return (new cljs.core.LazySeq(null,((function (_STAR_read_enabled_STAR_46500){
return (function (){var s__46502__$1 = s__46502;while(true){
var temp__4126__auto__ = cljs.core.seq(s__46502__$1);if(temp__4126__auto__)
{var s__46502__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__46502__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__46502__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__46504 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__46503 = (0);while(true){
if((i__46503 < size__4282__auto__))
{var path__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__46503);cljs.core.chunk_append(b__46504,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1)));
{
var G__46513 = (i__46503 + (1));
i__46503 = G__46513;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46504),iter__46501(cljs.core.chunk_rest(s__46502__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46504),null);
}
} else
{var path__$1 = cljs.core.first(s__46502__$2);return cljs.core.cons(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1)),iter__46501(cljs.core.rest(s__46502__$2)));
}
} else
{return null;
}
break;
}
});})(_STAR_read_enabled_STAR_46500))
,null,null));
});})(_STAR_read_enabled_STAR_46500))
;return iter__4283__auto__(paths);
} else
{if(cljs.core.map_QMARK_(paths))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (_STAR_read_enabled_STAR_46500){
return (function iter__46505(s__46506){return (new cljs.core.LazySeq(null,((function (_STAR_read_enabled_STAR_46500){
return (function (){var s__46506__$1 = s__46506;while(true){
var temp__4126__auto__ = cljs.core.seq(s__46506__$1);if(temp__4126__auto__)
{var s__46506__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__46506__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__46506__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__46508 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__46507 = (0);while(true){
if((i__46507 < size__4282__auto__))
{var vec__46511 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__46507);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46511,(0),null);var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46511,(1),null);cljs.core.chunk_append(b__46508,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1))], null));
{
var G__46514 = (i__46507 + (1));
i__46507 = G__46514;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46508),iter__46505(cljs.core.chunk_rest(s__46506__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46508),null);
}
} else
{var vec__46512 = cljs.core.first(s__46506__$2);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46512,(0),null);var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46512,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1))], null),iter__46505(cljs.core.rest(s__46506__$2)));
}
} else
{return null;
}
break;
}
});})(_STAR_read_enabled_STAR_46500))
,null,null));
});})(_STAR_read_enabled_STAR_46500))
;return iter__4283__auto__(paths);
})());
} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["what are those paths ? :",paths], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1269,paths], null));

}
}
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_46500;
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
var mount__delegate = function (cname,f,value,p__46515){var map__46517 = p__46515;var map__46517__$1 = ((cljs.core.seq_QMARK_(map__46517))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46517):map__46517);var options = map__46517__$1;var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46517__$1,cljs.core.constant$keyword$1269);var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46517__$1,cljs.core.constant$keyword$1019);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46517__$1,cljs.core.constant$keyword$1047);var target__$1 = (((typeof target === 'string') || ((target instanceof cljs.core.Keyword)))?document.getElementById(cljs.core.name(target)):target);var cursor_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.mount.extract_paths,cname,path,paths);var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$1019,cljs.core.array_seq([cljs.core.constant$keyword$1269], 0)),cljs.core.constant$keyword$1047,target__$1),cljs.core.constant$keyword$1037,cursor_fn);return om.core.root(f,value,options__$1);
};
var mount = function (cname,f,value,var_args){
var p__46515 = null;if (arguments.length > 3) {
  p__46515 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return mount__delegate.call(this,cname,f,value,p__46515);};
mount.cljs$lang$maxFixedArity = 3;
mount.cljs$lang$applyTo = (function (arglist__46518){
var cname = cljs.core.first(arglist__46518);
arglist__46518 = cljs.core.next(arglist__46518);
var f = cljs.core.first(arglist__46518);
arglist__46518 = cljs.core.next(arglist__46518);
var value = cljs.core.first(arglist__46518);
var p__46515 = cljs.core.rest(arglist__46518);
return mount__delegate(cname,f,value,p__46515);
});
mount.cljs$core$IFn$_invoke$arity$variadic = mount__delegate;
return mount;
})()
;
