// Compiled by ClojureScript 0.0-2356
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
clustermap.components.mount.extract_paths_STAR_ = (function extract_paths_STAR_(path,paths,cursor){var _STAR_read_enabled_STAR_68223 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
if(cljs.core.truth_((function (){var and__3625__auto__ = path;if(cljs.core.truth_(and__3625__auto__))
{return paths;
} else
{return and__3625__auto__;
}
})()))
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["can't give both :path and :paths : ",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1217,path,cljs.core.constant$keyword$1255,paths], null)], 0)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1217,path,cljs.core.constant$keyword$1255,paths], null));
} else
{if(cljs.core.truth_(path))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path));
} else
{if((paths == null))
{return cursor;
} else
{if(cljs.core.sequential_QMARK_(paths))
{var iter__4375__auto__ = ((function (_STAR_read_enabled_STAR_68223){
return (function iter__68224(s__68225){return (new cljs.core.LazySeq(null,((function (_STAR_read_enabled_STAR_68223){
return (function (){var s__68225__$1 = s__68225;while(true){
var temp__4126__auto__ = cljs.core.seq(s__68225__$1);if(temp__4126__auto__)
{var s__68225__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__68225__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__68225__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__68227 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__68226 = (0);while(true){
if((i__68226 < size__4374__auto__))
{var path__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__68226);cljs.core.chunk_append(b__68227,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1)));
{
var G__68240 = (i__68226 + (1));
i__68226 = G__68240;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__68227),iter__68224(cljs.core.chunk_rest(s__68225__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__68227),null);
}
} else
{var path__$1 = cljs.core.first(s__68225__$2);return cljs.core.cons(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1)),iter__68224(cljs.core.rest(s__68225__$2)));
}
} else
{return null;
}
break;
}
});})(_STAR_read_enabled_STAR_68223))
,null,null));
});})(_STAR_read_enabled_STAR_68223))
;return iter__4375__auto__(paths);
} else
{if(cljs.core.map_QMARK_(paths))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = ((function (_STAR_read_enabled_STAR_68223){
return (function iter__68230(s__68231){return (new cljs.core.LazySeq(null,((function (_STAR_read_enabled_STAR_68223){
return (function (){var s__68231__$1 = s__68231;while(true){
var temp__4126__auto__ = cljs.core.seq(s__68231__$1);if(temp__4126__auto__)
{var s__68231__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__68231__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__68231__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__68233 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__68232 = (0);while(true){
if((i__68232 < size__4374__auto__))
{var vec__68238 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__68232);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68238,(0),null);var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68238,(1),null);cljs.core.chunk_append(b__68233,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1))], null));
{
var G__68241 = (i__68232 + (1));
i__68232 = G__68241;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__68233),iter__68230(cljs.core.chunk_rest(s__68231__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__68233),null);
}
} else
{var vec__68239 = cljs.core.first(s__68231__$2);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68239,(0),null);var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68239,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1))], null),iter__68230(cljs.core.rest(s__68231__$2)));
}
} else
{return null;
}
break;
}
});})(_STAR_read_enabled_STAR_68223))
,null,null));
});})(_STAR_read_enabled_STAR_68223))
;return iter__4375__auto__(paths);
})());
} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["what are those paths ? :",paths], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1255,paths], null));

}
}
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_68223;
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
var mount__delegate = function (cname,f,value,p__68242){var map__68244 = p__68242;var map__68244__$1 = ((cljs.core.seq_QMARK_(map__68244))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68244):map__68244);var options = map__68244__$1;var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68244__$1,cljs.core.constant$keyword$1255);var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68244__$1,cljs.core.constant$keyword$1217);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68244__$1,cljs.core.constant$keyword$1252);var target__$1 = (((typeof target === 'string') || ((target instanceof cljs.core.Keyword)))?document.getElementById(cljs.core.name(target)):target);var cursor_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.mount.extract_paths,cname,path,paths);var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$1217,cljs.core.array_seq([cljs.core.constant$keyword$1255], 0)),cljs.core.constant$keyword$1252,target__$1),cljs.core.constant$keyword$1240,cursor_fn);return om.core.root(f,value,options__$1);
};
var mount = function (cname,f,value,var_args){
var p__68242 = null;if (arguments.length > 3) {
  p__68242 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return mount__delegate.call(this,cname,f,value,p__68242);};
mount.cljs$lang$maxFixedArity = 3;
mount.cljs$lang$applyTo = (function (arglist__68245){
var cname = cljs.core.first(arglist__68245);
arglist__68245 = cljs.core.next(arglist__68245);
var f = cljs.core.first(arglist__68245);
arglist__68245 = cljs.core.next(arglist__68245);
var value = cljs.core.first(arglist__68245);
var p__68242 = cljs.core.rest(arglist__68245);
return mount__delegate(cname,f,value,p__68242);
});
mount.cljs$core$IFn$_invoke$arity$variadic = mount__delegate;
return mount;
})()
;
/**
* @param {...*} var_args
*/
clustermap.components.mount.unmount = (function() { 
var unmount__delegate = function (p__68246){var map__68248 = p__68246;var map__68248__$1 = ((cljs.core.seq_QMARK_(map__68248))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68248):map__68248);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68248__$1,cljs.core.constant$keyword$1252);var target__$1 = (((typeof target === 'string') || ((target instanceof cljs.core.Keyword)))?document.getElementById(cljs.core.name(target)):target);return om.core.detach_root(target__$1);
};
var unmount = function (var_args){
var p__68246 = null;if (arguments.length > 0) {
  p__68246 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return unmount__delegate.call(this,p__68246);};
unmount.cljs$lang$maxFixedArity = 0;
unmount.cljs$lang$applyTo = (function (arglist__68249){
var p__68246 = cljs.core.seq(arglist__68249);
return unmount__delegate(p__68246);
});
unmount.cljs$core$IFn$_invoke$arity$variadic = unmount__delegate;
return unmount;
})()
;
