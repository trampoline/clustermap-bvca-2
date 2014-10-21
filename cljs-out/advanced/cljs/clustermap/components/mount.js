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
clustermap.components.mount.extract_paths_STAR_ = (function extract_paths_STAR_(path,paths,cursor){var _STAR_read_enabled_STAR_56133 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
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
{var iter__4375__auto__ = ((function (_STAR_read_enabled_STAR_56133){
return (function iter__56134(s__56135){return (new cljs.core.LazySeq(null,((function (_STAR_read_enabled_STAR_56133){
return (function (){var s__56135__$1 = s__56135;while(true){
var temp__4126__auto__ = cljs.core.seq(s__56135__$1);if(temp__4126__auto__)
{var s__56135__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__56135__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__56135__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__56137 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__56136 = (0);while(true){
if((i__56136 < size__4374__auto__))
{var path__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__56136);cljs.core.chunk_append(b__56137,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1)));
{
var G__56150 = (i__56136 + (1));
i__56136 = G__56150;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__56137),iter__56134(cljs.core.chunk_rest(s__56135__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__56137),null);
}
} else
{var path__$1 = cljs.core.first(s__56135__$2);return cljs.core.cons(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1)),iter__56134(cljs.core.rest(s__56135__$2)));
}
} else
{return null;
}
break;
}
});})(_STAR_read_enabled_STAR_56133))
,null,null));
});})(_STAR_read_enabled_STAR_56133))
;return iter__4375__auto__(paths);
} else
{if(cljs.core.map_QMARK_(paths))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = ((function (_STAR_read_enabled_STAR_56133){
return (function iter__56140(s__56141){return (new cljs.core.LazySeq(null,((function (_STAR_read_enabled_STAR_56133){
return (function (){var s__56141__$1 = s__56141;while(true){
var temp__4126__auto__ = cljs.core.seq(s__56141__$1);if(temp__4126__auto__)
{var s__56141__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__56141__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__56141__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__56143 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__56142 = (0);while(true){
if((i__56142 < size__4374__auto__))
{var vec__56148 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__56142);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56148,(0),null);var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56148,(1),null);cljs.core.chunk_append(b__56143,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1))], null));
{
var G__56151 = (i__56142 + (1));
i__56142 = G__56151;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__56143),iter__56140(cljs.core.chunk_rest(s__56141__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__56143),null);
}
} else
{var vec__56149 = cljs.core.first(s__56141__$2);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56149,(0),null);var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56149,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cursor,clustermap.components.mount.make_sequential(path__$1))], null),iter__56140(cljs.core.rest(s__56141__$2)));
}
} else
{return null;
}
break;
}
});})(_STAR_read_enabled_STAR_56133))
,null,null));
});})(_STAR_read_enabled_STAR_56133))
;return iter__4375__auto__(paths);
})());
} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["what are those paths ? :",paths], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1255,paths], null));

}
}
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_56133;
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
var mount__delegate = function (cname,f,value,p__56152){var map__56154 = p__56152;var map__56154__$1 = ((cljs.core.seq_QMARK_(map__56154))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56154):map__56154);var options = map__56154__$1;var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56154__$1,cljs.core.constant$keyword$1255);var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56154__$1,cljs.core.constant$keyword$1217);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56154__$1,cljs.core.constant$keyword$1252);var target__$1 = (((typeof target === 'string') || ((target instanceof cljs.core.Keyword)))?document.getElementById(cljs.core.name(target)):target);var cursor_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.mount.extract_paths,cname,path,paths);var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$1217,cljs.core.array_seq([cljs.core.constant$keyword$1255], 0)),cljs.core.constant$keyword$1252,target__$1),cljs.core.constant$keyword$1240,cursor_fn);return om.core.root(f,value,options__$1);
};
var mount = function (cname,f,value,var_args){
var p__56152 = null;if (arguments.length > 3) {
  p__56152 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return mount__delegate.call(this,cname,f,value,p__56152);};
mount.cljs$lang$maxFixedArity = 3;
mount.cljs$lang$applyTo = (function (arglist__56155){
var cname = cljs.core.first(arglist__56155);
arglist__56155 = cljs.core.next(arglist__56155);
var f = cljs.core.first(arglist__56155);
arglist__56155 = cljs.core.next(arglist__56155);
var value = cljs.core.first(arglist__56155);
var p__56152 = cljs.core.rest(arglist__56155);
return mount__delegate(cname,f,value,p__56152);
});
mount.cljs$core$IFn$_invoke$arity$variadic = mount__delegate;
return mount;
})()
;
/**
* @param {...*} var_args
*/
clustermap.components.mount.unmount = (function() { 
var unmount__delegate = function (p__56156){var map__56158 = p__56156;var map__56158__$1 = ((cljs.core.seq_QMARK_(map__56158))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56158):map__56158);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56158__$1,cljs.core.constant$keyword$1252);var target__$1 = (((typeof target === 'string') || ((target instanceof cljs.core.Keyword)))?document.getElementById(cljs.core.name(target)):target);return om.core.detach_root(target__$1);
};
var unmount = function (var_args){
var p__56156 = null;if (arguments.length > 0) {
  p__56156 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return unmount__delegate.call(this,p__56156);};
unmount.cljs$lang$maxFixedArity = 0;
unmount.cljs$lang$applyTo = (function (arglist__56159){
var p__56156 = cljs.core.seq(arglist__56159);
return unmount__delegate(p__56156);
});
unmount.cljs$core$IFn$_invoke$arity$variadic = unmount__delegate;
return unmount;
})()
;
