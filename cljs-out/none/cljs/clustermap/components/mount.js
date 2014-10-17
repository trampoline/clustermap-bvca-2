// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.components.mount');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.mount.make_sequential = (function make_sequential(v){if((v == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_.call(null,v))
{return v;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);

}
}
});
clustermap.components.mount.extract_paths_STAR_ = (function extract_paths_STAR_(path,paths,cursor){var _STAR_read_enabled_STAR_21256 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
if(cljs.core.truth_((function (){var and__7888__auto__ = path;if(cljs.core.truth_(and__7888__auto__))
{return paths;
} else
{return and__7888__auto__;
}
})()))
{throw cljs.core.ex_info.call(null,cljs.core.print_str.call(null,"can't give both :path and :paths : ",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths], null));
} else
{if(cljs.core.truth_(path))
{return cljs.core.get_in.call(null,cursor,clustermap.components.mount.make_sequential.call(null,path));
} else
{if((paths == null))
{return cursor;
} else
{if(cljs.core.sequential_QMARK_.call(null,paths))
{var iter__8625__auto__ = ((function (_STAR_read_enabled_STAR_21256){
return (function iter__21257(s__21258){return (new cljs.core.LazySeq(null,((function (_STAR_read_enabled_STAR_21256){
return (function (){var s__21258__$1 = s__21258;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21258__$1);if(temp__4126__auto__)
{var s__21258__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21258__$2))
{var c__8623__auto__ = cljs.core.chunk_first.call(null,s__21258__$2);var size__8624__auto__ = cljs.core.count.call(null,c__8623__auto__);var b__21260 = cljs.core.chunk_buffer.call(null,size__8624__auto__);if((function (){var i__21259 = (0);while(true){
if((i__21259 < size__8624__auto__))
{var path__$1 = cljs.core._nth.call(null,c__8623__auto__,i__21259);cljs.core.chunk_append.call(null,b__21260,cljs.core.get_in.call(null,cursor,clustermap.components.mount.make_sequential.call(null,path__$1)));
{
var G__21269 = (i__21259 + (1));
i__21259 = G__21269;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21260),iter__21257.call(null,cljs.core.chunk_rest.call(null,s__21258__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21260),null);
}
} else
{var path__$1 = cljs.core.first.call(null,s__21258__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,cursor,clustermap.components.mount.make_sequential.call(null,path__$1)),iter__21257.call(null,cljs.core.rest.call(null,s__21258__$2)));
}
} else
{return null;
}
break;
}
});})(_STAR_read_enabled_STAR_21256))
,null,null));
});})(_STAR_read_enabled_STAR_21256))
;return iter__8625__auto__.call(null,paths);
} else
{if(cljs.core.map_QMARK_.call(null,paths))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8625__auto__ = ((function (_STAR_read_enabled_STAR_21256){
return (function iter__21261(s__21262){return (new cljs.core.LazySeq(null,((function (_STAR_read_enabled_STAR_21256){
return (function (){var s__21262__$1 = s__21262;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21262__$1);if(temp__4126__auto__)
{var s__21262__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21262__$2))
{var c__8623__auto__ = cljs.core.chunk_first.call(null,s__21262__$2);var size__8624__auto__ = cljs.core.count.call(null,c__8623__auto__);var b__21264 = cljs.core.chunk_buffer.call(null,size__8624__auto__);if((function (){var i__21263 = (0);while(true){
if((i__21263 < size__8624__auto__))
{var vec__21267 = cljs.core._nth.call(null,c__8623__auto__,i__21263);var key = cljs.core.nth.call(null,vec__21267,(0),null);var path__$1 = cljs.core.nth.call(null,vec__21267,(1),null);cljs.core.chunk_append.call(null,b__21264,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.get_in.call(null,cursor,clustermap.components.mount.make_sequential.call(null,path__$1))], null));
{
var G__21270 = (i__21263 + (1));
i__21263 = G__21270;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21264),iter__21261.call(null,cljs.core.chunk_rest.call(null,s__21262__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21264),null);
}
} else
{var vec__21268 = cljs.core.first.call(null,s__21262__$2);var key = cljs.core.nth.call(null,vec__21268,(0),null);var path__$1 = cljs.core.nth.call(null,vec__21268,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.get_in.call(null,cursor,clustermap.components.mount.make_sequential.call(null,path__$1))], null),iter__21261.call(null,cljs.core.rest.call(null,s__21262__$2)));
}
} else
{return null;
}
break;
}
});})(_STAR_read_enabled_STAR_21256))
,null,null));
});})(_STAR_read_enabled_STAR_21256))
;return iter__8625__auto__.call(null,paths);
})());
} else
{throw cljs.core.ex_info.call(null,cljs.core.print_str.call(null,"what are those paths ? :",paths),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paths","paths",-1807389588),paths], null));

}
}
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_21256;
}});
clustermap.components.mount.extract_paths = (function extract_paths(cname,path,paths,cursor){var x = clustermap.components.mount.extract_paths_STAR_.call(null,path,paths,cursor);if(cljs.core.truth_(x))
{return x;
} else
{console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WARNING: nil cursor",cname,path,paths], null)));
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
var mount__delegate = function (cname,f,value,p__21271){var map__21273 = p__21271;var map__21273__$1 = ((cljs.core.seq_QMARK_.call(null,map__21273))?cljs.core.apply.call(null,cljs.core.hash_map,map__21273):map__21273);var options = map__21273__$1;var paths = cljs.core.get.call(null,map__21273__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path = cljs.core.get.call(null,map__21273__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target = cljs.core.get.call(null,map__21273__$1,new cljs.core.Keyword(null,"target","target",253001721));var target__$1 = (((typeof target === 'string') || ((target instanceof cljs.core.Keyword)))?document.getElementById(cljs.core.name.call(null,target)):target);var cursor_fn = cljs.core.partial.call(null,clustermap.components.mount.extract_paths,cname,path,paths);var options__$1 = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"paths","paths",-1807389588)),new cljs.core.Keyword(null,"target","target",253001721),target__$1),new cljs.core.Keyword(null,"fn","fn",-1175266204),cursor_fn);return om.core.root.call(null,f,value,options__$1);
};
var mount = function (cname,f,value,var_args){
var p__21271 = null;if (arguments.length > 3) {
  p__21271 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return mount__delegate.call(this,cname,f,value,p__21271);};
mount.cljs$lang$maxFixedArity = 3;
mount.cljs$lang$applyTo = (function (arglist__21274){
var cname = cljs.core.first(arglist__21274);
arglist__21274 = cljs.core.next(arglist__21274);
var f = cljs.core.first(arglist__21274);
arglist__21274 = cljs.core.next(arglist__21274);
var value = cljs.core.first(arglist__21274);
var p__21271 = cljs.core.rest(arglist__21274);
return mount__delegate(cname,f,value,p__21271);
});
mount.cljs$core$IFn$_invoke$arity$variadic = mount__delegate;
return mount;
})()
;
/**
* @param {...*} var_args
*/
clustermap.components.mount.unmount = (function() { 
var unmount__delegate = function (p__21275){var map__21277 = p__21275;var map__21277__$1 = ((cljs.core.seq_QMARK_.call(null,map__21277))?cljs.core.apply.call(null,cljs.core.hash_map,map__21277):map__21277);var target = cljs.core.get.call(null,map__21277__$1,new cljs.core.Keyword(null,"target","target",253001721));var target__$1 = (((typeof target === 'string') || ((target instanceof cljs.core.Keyword)))?document.getElementById(cljs.core.name.call(null,target)):target);return om.core.detach_root.call(null,target__$1);
};
var unmount = function (var_args){
var p__21275 = null;if (arguments.length > 0) {
  p__21275 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return unmount__delegate.call(this,p__21275);};
unmount.cljs$lang$maxFixedArity = 0;
unmount.cljs$lang$applyTo = (function (arglist__21278){
var p__21275 = cljs.core.seq(arglist__21278);
return unmount__delegate(p__21275);
});
unmount.cljs$core$IFn$_invoke$arity$variadic = unmount__delegate;
return unmount;
})()
;

//# sourceMappingURL=mount.js.map